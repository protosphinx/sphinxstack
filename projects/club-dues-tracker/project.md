---
id: club-dues-tracker
level: 2
group: Bigger builds
name: A membership and dues tracker for a real club
proves: [build-web-app, database-basics, auth-basics]
resume_line:
  job: "Built {project_name}, a membership and dues tracking system with auth and a hosted database — live at {url}"
  college: "Built {project_name}, the system my {club} uses to track members and dues"
  freelance: "Builds record-keeping tools for small organizations — recent: {project_name} ({url})"
---

## Brief

A membership roster and dues ledger for a club you actually belong
to. Officers sign in, mark who has paid for the term, and see at a
glance who is behind. Members can look up their own status. The app
records payments that happened in cash or by hand; it never moves
money and never asks for card details. Data lives in a hosted
Postgres database (Supabase free tier, which also handles sign-in);
the frontend deploys to Netlify or Vercel on their free plans.

## Personalize

- **The club.** One you attend, with a real treasurer who currently
  tracks dues in a notebook or a group chat. Ask them what goes
  wrong today; build for that.
- **What a member record holds.** Name, join date, dues status per
  term. Get written consent from members before their names go into
  the system, and support removing someone completely.
- **Who can see what.** Officers see everything. A member sees only
  their own row. Decide this on paper before you write any code.

## Milestones

1. Data model in the README before code: member, term, dues record,
   and who is allowed to read or change each one.
2. Supabase project created, tables built, a seed script that loads
   a fake roster. Keys live in environment variables from day one.
3. Read-only roster page deployed to a live URL by end of week one,
   showing seeded data from the real database.
4. Sign-in with email via Supabase Auth; the roster is hidden until
   you are signed in.
5. Officer role: officers can mark a dues record paid or unpaid;
   members cannot. Enforce this in database rules, on the server
   side, since anyone can edit frontend code.
6. Member self-view: a signed-in member sees their own status and
   nothing else.
7. Unhappy paths: double-marking a payment, deleting a member who
   has records, a signed-out visitor hitting a protected page.
8. Consent pass: every real name in the system has said yes, and
   there is a working way to remove a person and their records.
9. Real term loaded with the treasurer, real use at a meeting,
   evidence in the README. Final README documents the architecture
   in your words.

## Done means

- Live URL; the roster loads from the hosted database
- Sign-in works; signed-out visitors see no member data
- Officers can update dues; regular members cannot, verified by
  trying it from a member account
- Data survives a redeploy and a week of real use
- The treasurer of your actual club has used it, evidence in the
  README
- No secrets in the repo history; consent and removal are documented
- At least 20 commits across at least 12 distinct days;
  SESSIONS.md has an entry per session, written by you
