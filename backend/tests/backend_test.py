"""Backend tests for Fernanda Caldeira Advocacia API.

Covers:
- GET /api/ welcome
- POST /api/contact (create ContactLead)
- POST /api/contact validation errors
- GET /api/contact (list, most recent first)
"""
import os
import time
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://legal-excellence-28.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Root -----
class TestRoot:
    def test_root_welcome(self, api_client):
        r = api_client.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert isinstance(data["message"], str)
        assert len(data["message"]) > 0


# ----- Contact -----
class TestContactLeads:
    def test_create_contact_valid(self, api_client):
        payload = {
            "name": "TEST_Maria Silva",
            "phone": "(12) 99999-0001",
            "email": "test_maria@example.com",
            "message": "TEST_Gostaria de agendar uma consulta sobre divorcio.",
        }
        r = api_client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 201, f"Expected 201, got {r.status_code}: {r.text}"
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]

    def test_create_contact_missing_name(self, api_client):
        payload = {
            "phone": "(12) 99999-0002",
            "message": "TEST_missing name",
        }
        r = api_client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, f"Expected 422, got {r.status_code}: {r.text}"

    def test_create_contact_missing_phone(self, api_client):
        payload = {"name": "TEST_NoPhone", "message": "TEST_missing phone"}
        r = api_client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_create_contact_missing_message(self, api_client):
        payload = {"name": "TEST_NoMsg", "phone": "(12) 99999-0003"}
        r = api_client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_create_contact_short_name(self, api_client):
        # min_length=2
        payload = {"name": "A", "phone": "(12) 99999-0004", "message": "TEST"}
        r = api_client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_list_contacts_includes_recent(self, api_client):
        # Create a lead then list
        payload = {
            "name": "TEST_ListCheck",
            "phone": "(12) 98888-1111",
            "message": "TEST_should appear on top",
        }
        cr = api_client.post(f"{API}/contact", json=payload, timeout=15)
        assert cr.status_code == 201
        new_id = cr.json()["id"]

        # small delay to ensure persistence
        time.sleep(0.5)
        r = api_client.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        leads = r.json()
        assert isinstance(leads, list)
        assert len(leads) >= 1
        ids = [l.get("id") for l in leads]
        assert new_id in ids, "Newly created lead should appear in list"

        # Sorted most recent first: first item created_at >= last item created_at
        if len(leads) >= 2:
            first_ts = leads[0]["created_at"]
            last_ts = leads[-1]["created_at"]
            assert first_ts >= last_ts, f"Leads not sorted desc: {first_ts} vs {last_ts}"

        # No mongo _id should be present
        for l in leads[:5]:
            assert "_id" not in l
