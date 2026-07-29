---
id: study-session-scheduler
level: 2
group: Bigger builds
name: A study-group scheduler with real sign-in
proves: [build-web-app, backend-basics, auth-basics]
resume_line:
  job: "Built {project_name}, a session scheduler with its own backend and authenticated RSVPs — live at {url}"
  college: "Built {project_name}, the scheduler my study group uses to plan sessions before exams"
  freelance: "Builds scheduling tools groups adopt on their own — recent: {project_name} ({url})"
---

## Brief

A scheduler for a study group that currently plans everything in a
chat thread. Anyone in the group proposes a session (subject, time,
place, capacity), members sign in and RSVP, and the page shows who
is coming. When a session fills, a waitlist forms. You write a small
backend of your own (Node or Python on Render's or Railway's free
tier) that owns the rules; the database is hosted Postgres (Neon or
Supabase free tier) and sign-in uses email magic links so nobody
manages passwords.

## Personalize

- **The group.** Real classmates with a real exam or deadline
  inside the next month. The scheduler ships before the crunch and
  gets used during it.
- **What makes a session valid.** Your group's rules: minimum
  notice, capacity, one session per subject per day, whatever they
  actually need. These rules become backend code.
- **Names on the page.** Everyone who appears agreed to it, and
  anyone can RSVP as first name plus initial.

## Milestones

1. README first: the session model, the RSVP model, the waitlist
   rule, and which decisions the backend makes rather than the
   browser.
2. Backend skeleton deployed: one endpoint returning seeded
   sessions as JSON from the real database.
3. Frontend deployed against it by end of week one: a live URL
   listing upcoming sessions.
4. Sign-in with magic links; RSVP requires being signed in.
5. Propose and cancel sessions; a cancelled session notifies
   nothing yet but clearly shows its state.
6. Capacity and waitlist on the backend: the eleventh RSVP on a
   ten-seat session waitlists, and a dropout promotes the first in
   line. Prove the browser cannot bypass this.
7. Unhappy paths: two people grabbing the last seat at once,
   RSVPing twice, a session proposed in the past.
8. Real week of use before the exam; fix the worst two things the
   group hits.
9. Final README: architecture diagram in your words, plus evidence
   of real sessions that actually happened.

## Done means

- Live URL; sessions and RSVPs served by your own backend
- At least four group members signed in and RSVPed to real sessions
- Waitlist promotion works and is enforced server-side
- Data survives redeploys of both frontend and backend
- At least one session on the site happened in real life, evidence
  in the README
- No secrets committed; consent for every displayed name
- At least 20 commits across at least 12 distinct days;
  SESSIONS.md has an entry per session, written by you
