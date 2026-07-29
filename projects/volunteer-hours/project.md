---
id: volunteer-hours
level: 3
group: Bigger builds
name: Volunteer hours a real org can verify
proves: [backend-basics, database-basics, auth-basics, ship-on-github]
resume_line:
  job: "Built {project_name}, an hours-logging platform with a two-role verification workflow, adopted by a real organization for {n} volunteers — {url}"
  college: "Built {project_name}, the platform {organization} uses to log and verify volunteer hours"
  freelance: "Builds record-keeping systems nonprofits rely on — recent: {project_name} ({url})"
---

## Brief

An hours platform for an organization you already volunteer with:
an NHS chapter, a food bank, a library program, a religious youth
group. Volunteers log entries (date, hours, what they did), a
coordinator verifies or rejects each one, and verified totals feed
the letters and award applications the org writes anyway. The whole
point is trustworthiness: an entry can never silently change after
verification. Honest architecture: a small backend on Render's free
tier with its idle spin-down, free Postgres on Neon, and email
notifications through Resend's free tier (100 emails a day). The
real users are the volunteers and the coordinator who currently do
this on paper or in a shared spreadsheet.

## Personalize

- **The organization.** One where you volunteer and hours already
  get counted somehow. Ask the coordinator what the current method
  gets wrong; that answer shapes the design.
- **Who signs off.** The coordinator, an adult, in writing, as both
  sponsor and daily user. They agree what volunteer data is stored
  and each volunteer consents at signup.
- **What verification means here.** Same-day sign-off? Weekly
  batches? A rejection with a reason? Copy the org's real habit
  instead of inventing a workflow.
- **The launch moment.** The start of a counting period: a
  semester, an award cycle, a program season.

## Milestones

1. Week 1: sit with the coordinator. Map the current process,
   agree the data stored per volunteer (name, email, entries),
   and get written sign-off.
2. Week 1: repo, README data model: volunteer, coordinator role,
   entry, verification with timestamp and verifier, and an
   append-only change history.
3. Week 1: walking skeleton deployed. An entry form writes to
   Postgres, a list page reads it back, live URL, secrets in host
   environment variables only.
4. Week 2: accounts with hashed passwords and two roles.
   Volunteers see only their own entries; the server enforces it.
5. Week 2: the coordinator queue: pending entries, verify or
   reject with a reason, volunteer sees the outcome.
6. Week 2: lock verified entries. Edits to a verified entry are
   rejected; corrections happen by a new entry referencing the
   old one, so history stays intact.
7. Week 3: totals per volunteer per date range, plus a CSV export
   the coordinator can attach to award paperwork.
8. Week 3: attack it. As a volunteer, try to edit another
   person's entry, inflate your total, and hit coordinator routes
   without the role. Fix every hole; note each in the README.
9. Week 3: pilot. Coordinator plus 3 volunteers run one real week
   through it, paper process still running in parallel.
10. Week 4: onboard the rest of the volunteers, each consenting
    at signup. Retire the paper process with the coordinator's
    agreement.
11. Week 4: two full real weeks: entries logged and verified with
    no intervention from you. Reconcile totals against the last
    paper records and explain any difference.
12. Week 4: back up the database, prove restore, write the
    postmortem: where people mistrusted the numbers and how the
    design answered.

## Done means

- Live URL, in real use by the organization
- At least 10 real volunteers with logged entries and at least 25
  verified entries from real volunteering
- Volunteers cannot see or edit other people's entries and cannot
  reach coordinator routes, verified by trying
- Verified entries are immutable; the change history reconstructs
  every total
- A CSV export the coordinator has actually used or filed
- Coordinator sign-off in writing; every volunteer consented at
  signup
- No secrets in git history
- A postmortem in the repo, written by you
