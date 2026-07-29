---
id: club-hq
level: 3
group: Bigger builds
name: The platform your club actually runs on
proves: [backend-basics, database-basics, auth-basics, build-web-app]
resume_line:
  job: "Built and operated {project_name}, a club management app (role-based auth, Postgres, deployed on a free tier) used weekly by {n} members — {url}"
  college: "Built {project_name}, the platform my {club} runs on for members, events, and attendance"
  freelance: "Builds membership platforms small organizations actually run on — recent: {project_name} ({url})"
---

## Brief

A management platform for a club you are actually in: member
roster, events with RSVP, attendance taken at real meetings, and
announcements from officers. Members log in and RSVP; officers get
extra powers (create events, post announcements, mark attendance).
Architecture, honestly: a small server (Node and Express, or
whatever backend you learn) on Render's free tier, which sleeps
when idle so the first load of the day is slow, plus free Postgres
on Neon. The real users are your actual club, onboarded at an
actual meeting, and the app is still the club's system of record a
month later.

## Personalize

- **The club.** One you attend, where you know the officers by
  name: robotics, debate, a youth group, a scout troop. You need
  standing to ask them to switch.
- **Who signs off.** The president plus the adult sponsor or
  advisor. For a school club the sponsor's written yes comes before
  any member data enters the system.
- **What it replaces.** Probably a group chat and a spreadsheet.
  Write down what those do today; that list is your feature list.
- **The launch moment.** A specific meeting on the calendar where
  roll call happens in your app for the first time.

## Milestones

1. Week 1: pitch the president and sponsor. Get a written yes,
   agree exactly what member data is stored (name and email, no
   more), and how consent is collected from each member.
2. Week 1: repo with a README data model: member, role, event,
   RSVP, attendance record, announcement.
3. Week 1: walking skeleton deployed. Server plus Postgres plus one
   page that lists events from the database, live at a public URL.
   Database credentials live in host environment variables, and
   `.env` is in `.gitignore` from the first commit.
4. Week 2: accounts and login with hashed passwords, plus a role
   field. Seed yourself as an officer.
5. Week 2: officers create and edit events; members RSVP. Every
   officer route checks the role on the server.
6. Week 2: announcements, newest first, posted by officers only.
7. Week 3: attendance. An officer opens a meeting and checks
   members off; members see their own attendance history.
8. Week 3: attack your own permissions. From a member account and
   from curl with no session, try every officer action. Fix every
   hole and write down what you found.
9. Week 3: pilot with the officers only. Two or three real events
   entered, bugs fixed.
10. Week 4: launch meeting. Members sign up in the room, each one
    consents, and attendance for that meeting is taken in the app.
11. Week 4: run the next real event through it end to end,
    announcement to RSVPs to attendance. Fix what broke.
12. Week 4: export a backup of the database and prove you can
    restore it. Write the postmortem: what broke, what you would
    build differently, what the club actually uses.

## Done means

- Live URL responding, still in use by the club a month after launch
- At least 15 real members with accounts, and at least 2 real
  events with real RSVPs and real attendance records
- A member account cannot perform any officer action, verified by
  trying from a second account and from curl
- Data survives redeploys, and a tested backup export exists
- Every member consented to being in the system; the sponsor's
  sign-off is in writing
- No secret has ever been committed, checked against the full git
  history
- A postmortem in the repo, written by you
