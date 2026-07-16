# PRD — Fernanda Caldeira Advocacia (Landing Page)

## Problem Statement
Premium, conversion-focused, Awwwards-level landing page for a Brazilian family-law
attorney "Fernanda Caldeira Advocacia" (Lorena-SP). Modern, elegant, responsive,
SEO-optimized, smooth animations. Stack: React + Tailwind + Framer Motion + Lenis +
Lucide (FastAPI + MongoDB backend for the contact form). Only real, public data.

## Real Data Used (sourced from user + public Google/LinkedIn + Instagram)
- Attorney: Fernanda Caldeira | Areas: Direito de Família (divórcio, guarda, pensão,
  partilha), Inventário & Sucessões, Previdenciário
- WhatsApp/Phone: (12) 98265-4821 → wa.me/5512982654821
- Email: fernandaracaldeiraadv@gmail.com
- Address: Rua Nossa Senhora da Piedade, 188, Centro, Lorena - SP, 12600-190
- Instagram: @fernandacaldeira_adv
- Brand palette (from IG): Navy #0C2D4E, Gold #B8860B / #D4B78D, Cream #F5F1E8
- Fonts: Cormorant Garamond (display) + Manrope (body)

## Architecture
- Frontend `/app/frontend/src`: App.js assembles sections; components/ (Nav, Logo,
  Footer, SmoothScroll[Lenis], Motion helpers, FloatingWhatsApp) + sections/ (Hero,
  Marquee, About, Services, Gallery, HoursLocation, Reviews, Faq, Contact). Central
  data in `data/site.js`.
- Backend `/app/backend/server.py`: POST/GET `/api/contact` → MongoDB `contact_leads`.
- SEO: meta title/description/keywords, Open Graph, Twitter, Schema.org LegalService in
  public/index.html.

## Implemented (2026-07-16)
- Kinetic hero: masked line-by-line reveal + portrait parallax + credential card
- Editorial marquee, numbered manifesto (About), 3 service cards w/ per-service WhatsApp
- Bento gallery, business hours (by-appointment) + embedded Google Maps + "Como chegar"
- Honest Reviews CTA (no fabricated testimonials — none public), FAQ accordion
- Contact form persisting leads to MongoDB + all contact channels + floating WhatsApp
- Sticky glassmorphism nav w/ scroll progress + animated mobile menu
- Tested: backend 100%, frontend 100% (iteration_1.json), no bugs.

## Honesty notes
- No public Google reviews found → Reviews section is a transparent CTA, not invented.
- Business hours not published → shown as "Atendimento com hora marcada / Sob agendamento".

## Backlog / Next
- P1: Restrict GET /api/contact behind admin auth (currently public — PII exposure).
- P1: Email notification of new leads (Resend) so the attorney is alerted instantly.
- P2: Basic rate limiting / captcha on contact form to prevent spam.
- P2: Replace stock imagery with the attorney's real photos when provided.
- P2: Online scheduling (Calendly/Google Calendar) instead of WhatsApp-only.
