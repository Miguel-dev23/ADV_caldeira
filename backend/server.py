from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
from bson import ObjectId
from typing_extensions import Annotated
from pydantic import BeforeValidator
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Fernanda Caldeira Advocacia API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ----- Helpers -----
def PyObjectId():
    return Annotated[str, BeforeValidator(str)]


# ----- Models -----
class ContactLeadCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    phone: str = Field(..., min_length=6, max_length=40)
    email: Optional[str] = Field(default=None, max_length=180)
    subject: Optional[str] = Field(default=None, max_length=120)
    message: str = Field(..., min_length=2, max_length=2000)


class ContactLead(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    subject: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ----- Routes -----
@api_router.get("/")
async def root():
    return {"message": "Fernanda Caldeira Advocacia API"}


@api_router.post("/contact", response_model=ContactLead, status_code=201)
async def create_contact_lead(payload: ContactLeadCreate):
    lead = ContactLead(**payload.model_dump())
    doc = lead.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_leads.insert_one(doc)
    logger.info("New contact lead received from %s", lead.name)
    return lead


@api_router.get("/contact", response_model=List[ContactLead])
async def list_contact_leads():
    leads = await db.contact_leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for lead in leads:
        if isinstance(lead.get('created_at'), str):
            lead['created_at'] = datetime.fromisoformat(lead['created_at'])
    return leads


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
