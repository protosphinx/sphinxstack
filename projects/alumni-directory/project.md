---
id: alumni-directory
level: 3
group: Bigger builds
name: An alumni and mentors directory that opts in
proves: [database-basics, auth-basics, use-an-api, build-web-app]
resume_line:
  job: "Built {project_name}, an opt-in directory with invite-only onboarding via an email API and per-profile visibility controls — {url}"
  college: "Built {project_name}, the opt-in alumni and mentors directory my school now uses"
  freelance: "Builds directories with consent and privacy done properly — recent: {project_name} ({url})"
---

## Brief

A directory connecting students at your school with alumni and
adult mentors who explicitly opted in: where they work or study,
what they'll take questions about, and how they prefer to be
reached. Every profile exists because its owner created it from an
email invitation, filled in exactly what they chose to share, and
picked who can see it. Honest architecture: a web app on Vercel's
free tier, free Postgres on Neon, and invitations sent through
Resend's free tier (100 emails a day, which caps your onboarding
pace and that's fine). The real users are students who look people
up and alumni who answer.

## Personalize

- **The school and the seed list.** A counselor, club sponsor, or
  alumni coordinator who already has relationships with graduates.
  You never scrape or import contact lists; the coordinator
  personally asks each alum before an invite is sent.
- **Who signs off.** That coordinator, in writing, since the
  school's name and its students are involved. They also agree the
  process for removing a profile on request, which must be
  immediate.
- **What a profile answers.** Pick the three questions students at
  your school actually have: how to get into a field, what a major
  is really like, who is hiring locally.
- **The launch moment.** A college-and-careers week, an advisory
  period, or a senior seminar where the directory gets shown.

## Milestones

1. Week 1: recruit the coordinator. Agree the consent flow in
   writing: coordinator asks each alum, alum says yes, only then
   does an invite email go out.
2. Week 1: repo, README data model: person, profile fields,
   visibility setting per profile, invite with single-use token.
3. Week 1: walking skeleton deployed. One hand-made profile (your
   own) renders from the database at a live URL, secrets in host
   environment variables only.
4. Week 2: invites through the email API: single-use tokenized
   link, expiry, and a resend path. Log every send.
5. Week 2: profile creation from an invite: the alum sets a
   password, fills in only the fields they want, previews their
   profile exactly as students will see it.
6. Week 2: visibility controls: listed to signed-in students, or
   hidden entirely, switchable by the owner at any time. Contact
   preference is part of the profile, never a leaked email.
7. Week 3: student accounts restricted to your school email
   domain, plus browse and search by field and by question they'll
   take.
8. Week 3: deletion. A profile owner can remove themselves in one
   click, and the data is actually gone from the database, not
   flagged. Test it and show the SQL.
9. Week 3: pilot: the coordinator invites 5 alumni they know
   well. Watch where the invite flow loses people; fix it.
10. Week 4: onboarding wave: coordinator works through the yes
    list within the email tier's daily cap.
11. Week 4: student launch at the agreed moment; first real
    student-to-alum contact happens through a listed preference.
12. Week 4: postmortem: what alumni declined to share, how the
    consent flow held up, and what the coordinator wants next.

## Done means

- Live URL, linked from wherever the school points students
- At least 12 opted-in profiles, each created by its owner from
  an invite, and at least 15 student accounts
- Nobody appears in the directory who did not create their own
  profile; visibility settings respected everywhere, verified
  from a student account
- Self-removal works and deletes the data for real
- Invite tokens are single-use and expire; the email send log
  matches the coordinator's yes list exactly
- Coordinator sign-off in writing, including the removal policy
- No secrets in git history
- A postmortem in the repo, written by you
