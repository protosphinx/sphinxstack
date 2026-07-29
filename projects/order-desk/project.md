---
id: order-desk
level: 3
group: Bigger builds
name: An order desk for a real business
proves: [backend-basics, database-basics, auth-basics, ship-on-github]
resume_line:
  job: "Built {project_name}, an order-request system (customer requests, status tracking, owner dashboard behind auth) for a real business — {url}"
  college: "Built {project_name}, the order-request system a real local business takes requests through"
  freelance: "Builds order and request systems for small businesses — recent: {project_name} ({url})"
---

## Brief

An order-request system for a real small business: a family
bakery, a neighbor's tailoring shop, a friend's sticker shop.
Customers submit a request through a public form, get a private
status link, and watch it move from received to accepted to ready.
The owner logs into a dashboard to see the queue and update
statuses. No payment processing anywhere; money changes hands at
pickup, the way it already does. Honest architecture: one small
backend on Fly.io or Render's free tier (cold starts are real),
SQLite or free Postgres on Neon, and auth only on the owner side.
The real users are the owner and their actual customers.

## Personalize

- **The business.** One where you know the owner personally and
  they take orders informally today, by text or DM or a paper
  notebook. Their current pain is your spec.
- **Who signs off.** The owner, in writing, before launch, and
  they agree that customer names and requests will live in your
  database. Customers are told this on the form itself.
- **What an order is.** A cake with a date and an inscription? A
  hem with a garment drop-off? Model their real order, with the
  fields the owner actually asks for.
- **The launch moment.** The owner puts the link in their bio or
  on the counter, and the first stranger order arrives.

## Milestones

1. Week 1: sit with the owner. Write down how orders work today,
   what an order contains, and what statuses exist in real life.
   Get written sign-off to build and to store customer data.
2. Week 1: repo, README data model (order, status history, owner
   account), and a privacy note in plain words for the form.
3. Week 1: walking skeleton deployed. Public form writes an order
   to the database, a bare list page reads it back, live URL.
   Secrets in host environment variables from day one.
4. Week 2: status links. Each order gets an unguessable token URL
   where the customer sees current status only, nothing else.
5. Week 2: owner auth. One login, hashed password, session. Every
   dashboard route rejects anonymous requests, verified with curl.
6. Week 2: the dashboard. Queue sorted by date needed, status
   updates, and a note field only the owner sees.
7. Week 3: the unhappy paths. Duplicate submits, empty fields,
   an order the owner declines (with a reason the customer can
   see on their status page).
8. Week 3: pilot. The owner runs 3 real orders through it in
   parallel with their old method. Fix everything they trip on.
9. Week 4: launch. The old intake method is retired or the link
   becomes the primary channel; first real orders arrive from
   customers who are not you.
10. Week 4: watch a full order lifecycle end to end, submitted to
    ready to picked up, and fix what broke.
11. Week 4: back up the database, prove a restore works, and
    hand the owner a one-page guide to their own dashboard.
12. Week 4: postmortem in the repo: what the owner asked for that
    you did not predict, and what you would redesign.

## Done means

- Live URL, with the form reachable from wherever the owner
  actually points customers
- At least 10 real orders from at least 5 real customers, with
  status changes made by the owner, unprompted by you
- Owner dashboard unreachable without login, verified from a
  logged-out browser and curl
- Status token URLs leak nothing beyond that one order's status
- No payment data anywhere in the system, by design
- Customer-facing privacy note live; owner sign-off in writing
- No secrets in git history
- A postmortem in the repo, written by you
