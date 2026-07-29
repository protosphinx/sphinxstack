---
id: family-shop-inventory
level: 2
group: Bigger builds
name: An inventory system for a family business
proves: [build-web-app, backend-basics, database-basics]
resume_line:
  job: "Built {project_name}, an inventory system with its own API and database, used daily by a real business — live at {url}"
  college: "Built {project_name}, the inventory system my family's {business} runs on"
  freelance: "Builds inventory and stock tools for small businesses — recent: {project_name} ({url})"
---

## Brief

A stock-tracking system for a business run by your family or someone
you know well: a shop, a stall, a food truck, a workshop. Items have
quantities; every change is a logged movement (received, sold, used,
damaged) so the current count is always explainable. Low-stock items
surface at the top. You build a small backend API of your own (free
tier on Render or Railway) over hosted Postgres (Neon or Supabase
free tier); the frontend deploys free on Netlify or Vercel. The
system counts stock only; sales money stays wherever it is handled
today.

## Personalize

- **The business and the pain.** Sit with the owner for thirty
  minutes first. What runs out without warning? What gets counted
  by walking the shelves? Build for the answer.
- **The item categories.** Model their real stock, in their words,
  including the units they use (boxes, kilos, pieces).
- **Who touches it.** Probably two or three people on a shared
  device at the counter. Design for fast entry with busy hands.

## Milestones

1. README first: item, movement, and the rule that current stock is
   the sum of movements, never a number someone types over.
2. Backend API with items and movements endpoints, deployed, backed
   by the real database, loaded with the owner's actual top twenty
   items.
3. Frontend deployed by end of week one: live URL showing current
   stock levels, readable on the owner's phone.
4. Recording movements: received and sold first, with quantity and
   a note. Each movement adjusts the computed stock.
5. Movement history per item: tap an item, see every change and why
   the count is what it is.
6. Low-stock thresholds per item and a reorder view sorted by
   urgency.
7. Unhappy paths: negative stock attempts, a fat-fingered quantity
   (undo via a correcting movement), the API being briefly down.
8. A real week in the shop. Watch someone else use it, then fix the
   slowest part of entry.
9. Final README: schema, API routes, and what the owner says it
   replaced, in your words.

## Done means

- Live URL; stock served by your own API from the hosted database
- The real owner has recorded real movements for at least a week
- Every current count is explainable from its movement history
- Low-stock view matches reality when checked against the shelf
- Data survives redeploys; nothing lives only in the browser
- No secrets committed; the owner agreed to what is stored and can
  get their data out as a CSV
- At least 20 commits across at least 12 distinct days;
  SESSIONS.md has an entry per session, written by you
