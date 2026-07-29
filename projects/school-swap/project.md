---
id: school-swap
level: 3
group: Bigger builds
name: A buy-and-sell board for your school
proves: [backend-basics, database-basics, auth-basics, build-web-app]
resume_line:
  job: "Built {project_name}, a listings board with accounts, in-app messaging, and moderation, used by {n} students at my school — {url}"
  college: "Built {project_name}, the buy-and-sell board students at my school actually use"
  freelance: "Builds community marketplaces without payment rails — recent: {project_name} ({url})"
---

## Brief

A listings board for students at your school: textbooks, calculators,
uniforms, concert tickets someone can't use. Post a listing with
photos and a price, message the seller inside the app, mark it sold.
No payments in the system at any point; buyers and sellers meet at
school and settle in person, and the site says so plainly. Honest
architecture: a backend on Render or Fly.io's free tier, free
Postgres on Neon, image uploads to Cloudinary's free tier (25 GB
bandwidth a month, fine at school scale), and accounts restricted to
your school's email domain. The real users are students who post and
buy real things.

## Personalize

- **The school and the rules.** Some schools require permission to
  run anything student-facing under their name. Ask an administrator
  first; if the school won't bless it, run it as an independent site
  with no school branding.
- **Who signs off.** That administrator, or, for an independent
  site, a parent or teacher who agrees to be the adult you escalate
  moderation problems to.
- **What sells at your school.** Textbooks in a school with set
  booklists, gear in a sporty one. Seed the first listings from
  your own shelf.
- **The launch moment.** End of a term is peak listing season; time
  the launch to one.

## Milestones

1. Week 1: talk to the administrator and your adult backstop.
   Agree the ground rules: allowed categories, banned items, what
   gets a listing removed, and who removes it.
2. Week 1: repo, README data model (user, listing, photo, message
   thread, report), plus a short visible rules page: no payments
   on the site, meet at school, banned items listed.
3. Week 1: walking skeleton deployed. Listings render from the
   database at a live URL. Secrets in host environment variables
   from the first commit.
4. Week 2: accounts limited to your school email domain, verified
   by a confirmation link. Hashed passwords, sessions.
5. Week 2: create a listing with photos and a price; edit and
   delete your own listings only, enforced on the server.
6. Week 2: browse, search, and filter by category; mark sold.
7. Week 3: in-app messaging, thread per listing per buyer. Only
   the two parties can read a thread; verify from a third account.
8. Week 3: moderation. A report button, an admin view for you,
   removal that leaves a tombstone, and a block for repeat abuse.
9. Week 3: pilot with 5 friends posting real listings and one
   full sale arranged through messages. Fix what confuses them.
10. Week 4: launch to the school: posters with a QR code, the
    class group chats, whatever reaches people.
11. Week 4: first real sales between people you did not recruit.
    Watch the report queue daily and act on it.
12. Week 4: back up the database, then write the postmortem:
    moderation surprises, what people actually sold, what you
    would change about the data model.

## Done means

- Live URL with real listings from real students
- At least 20 accounts, at least 15 listings, and at least 3
  completed sales arranged through in-app messages
- Only school-domain emails can register; message threads are
  private to their two parties; both verified by trying
- Users can touch only their own listings; the server, not the
  UI, enforces it
- Zero payment features; the rules page says money changes hands
  in person
- Sign-off in writing from the administrator or adult backstop;
  moderation reports get acted on within a day
- No secrets in git history
- A postmortem in the repo, written by you
