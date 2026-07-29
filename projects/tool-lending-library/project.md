---
id: tool-lending-library
level: 2
group: Bigger builds
name: A lending library for neighborhood tools
proves: [build-web-app, database-basics, auth-basics]
resume_line:
  job: "Built {project_name}, a lending-library system with member auth and loan tracking — live at {url}"
  college: "Built {project_name}, a tool-lending library my neighbors actually borrow from"
  freelance: "Builds community sharing systems that track real objects — recent: {project_name} ({url})"
---

## Brief

A lending system for physical things your street or building already
shares informally: ladders, drills, camping gear, a sewing machine,
board games. Owners list items, members sign in to request a loan,
and the system tracks who has what and when it is due. The catalog
is browsable by anyone; borrowing requires an account approved by
you, so the member list stays actual neighbors. Data and sign-in
live on Supabase's free tier; the frontend deploys free on Netlify
or Vercel. No deposits and no fees; the system tracks possession
only.

## Personalize

- **The neighbors.** Start with three or four households you know.
  Walk over and ask what they would lend and what they would want
  to borrow; that conversation is the real product research.
- **The item list.** Real objects with photos you took, owned by
  named people who agreed to lend them.
- **The trust rules.** Loan length, renewals, what happens when
  something comes back broken. Write the rules with the owners, in
  plain language, on the site.

## Milestones

1. README first: item, member, loan, and the loan lifecycle from
   requested to returned.
2. Database tables plus a seeded catalog of ten real items with
   photos and owner consent.
3. Public catalog live by end of week one: browsable at a real URL,
   each item showing available or on loan.
4. Accounts: sign-up requests land in an approval queue only you
   can accept, keeping membership to real neighbors.
5. Borrowing: a signed-in member requests an item, the owner
   approves, the item shows on loan with a due date.
6. Returns and overdues: mark returned, and a signed-in view of
   what is out, sorted by lateness.
7. Unhappy paths: two requests for the same item, a member with an
   overdue item requesting more, an owner delisting an item that is
   currently out.
8. Real loans: at least three items borrowed and returned by actual
   neighbors. Watch one handoff happen.
9. Final README: schema and rules in your words, plus the story of
   the first real loan.

## Done means

- Live URL; catalog reads from the hosted database
- At least four real neighbor accounts, approved by you
- At least three completed real loans, request through return
- Loan actions require sign-in; the public catalog shows no
  member contact details
- Data survives redeploys; item photos are yours
- Owner consent recorded per item; members can be removed along
  with their data
- At least 20 commits across at least 12 distinct days;
  SESSIONS.md has an entry per session, written by you
