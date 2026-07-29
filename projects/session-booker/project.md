---
id: session-booker
level: 2
group: Bigger builds
name: A booking system for a tutor or coach
proves: [build-web-app, backend-basics, database-basics]
resume_line:
  job: "Built {project_name}, a session-booking system with conflict-safe scheduling on its own backend — live at {url}"
  college: "Built {project_name}, the booking system a real {tutor_or_coach} uses to fill their week"
  freelance: "Builds booking systems for solo service providers — recent: {project_name} ({url})"
---

## Brief

A booking system for one real person who sells their time: a tutor,
a music teacher, a sports coach, maybe you. They publish available
slots; students pick one, enter their name, and get a confirmation
code. Double-booking is impossible because your backend, on
Render's or Railway's free tier, is the only thing allowed to
confirm a slot, checking the hosted Postgres database (Neon or
Supabase free tier) inside a transaction. Payment stays completely
outside the system; the app can note "paid in person" and nothing
more. Frontend deploys free on Netlify or Vercel.

## Personalize

- **The provider.** Someone who currently books over DMs and
  sometimes double-books or forgets. If you tutor or coach, build
  it for yourself and dogfood it.
- **The slot shape.** Their real rhythm: 30 or 60 minutes, which
  days, how far ahead, cancellation notice. Encode their actual
  policy.
- **Student privacy.** Bookers see only open slots; names of other
  students never appear publicly. The provider sees everything
  behind a sign-in.

## Milestones

1. README first: slot, booking, the states a slot moves through,
   and why confirmation must happen on the server.
2. Backend deployed with a slots endpoint reading from the real
   database; seed a fake week.
3. Public booking page live by end of week one: real URL, open
   slots visible, nothing bookable yet.
4. Booking flow: pick a slot, enter name and contact, get a
   confirmation code. The slot disappears from the open list.
5. The race: two bookings hitting the last slot at once resolves to
   exactly one winner. Write down how you proved it.
6. Provider dashboard behind a password or magic link: see the
   week, add and remove slots, cancel a booking.
7. Cancellation by code: a student with their confirmation code can
   cancel, reopening the slot, subject to the notice policy.
8. Two real weeks of use with real students booking real sessions;
   fix what confused them most.
9. Final README: the booking state machine and API routes in your
   words, plus evidence of real sessions held.

## Done means

- Live URL; slots and bookings served by your own backend
- The real provider ran at least two weeks of real bookings on it
- Double-booking is impossible, demonstrated and documented
- Provider pages require sign-in; the public page leaks no student
  names
- Bookings survive redeploys of both tiers
- No secrets committed; students agreed to what is stored and can
  be deleted on request
- At least 20 commits across at least 12 distinct days;
  SESSIONS.md has an entry per session, written by you
