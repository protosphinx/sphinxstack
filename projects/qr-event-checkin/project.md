---
id: qr-event-checkin
level: 2
group: Bigger builds
name: QR check-in for a real event
proves: [build-web-app, use-an-api, database-basics]
resume_line:
  job: "Built {project_name}, a QR-code event check-in system used at the door of a real event — live at {url}"
  college: "Built {project_name}, the check-in system that ran the door at my {event}"
  freelance: "Builds event registration and check-in systems — recent: {project_name} ({url})"
---

## Brief

Registration and door check-in for an event you or your group is
actually running: a club showcase, a tournament, a fundraiser
evening. People register in advance and receive a personal QR code;
at the door, a staff device scans the code, the system marks them
arrived, and a live counter shows how full the room is. Registration
data lives in a hosted database (Supabase free tier, whose auth also
protects the door scanner); QR codes are generated through a library
or a free QR API, and scanning uses the phone camera via a browser
scanning library. Frontend deploys free on Netlify or Vercel. Free
events only; the system never touches ticket money.

## Personalize

- **The event.** Real, dated, and expecting at least fifteen
  people. Agree with the organizers that your system runs the door
  before you start.
- **What registration collects.** The minimum the organizers truly
  need. State on the form what is collected, why, and when it gets
  deleted after the event.
- **The door reality.** Bad hallway lighting, cracked screens,
  guests who lost the email. Design the manual-lookup fallback as
  seriously as the scanner.

## Milestones

1. README first: attendee, registration, check-in event, and the
   full journey from signup to walking in.
2. Registration form live by end of week one at a real URL, writing
   attendees to the hosted database.
3. QR issuance: each registration gets a unique code rendered as a
   QR and delivered on the confirmation screen and by email.
4. Scanner page behind staff sign-in: camera opens in the browser,
   reads a code, marks the attendee arrived.
5. Double-scan handling: a code scanned twice shows already
   checked in, with the original arrival time, in big obvious text.
6. Manual fallback: staff search by name for the guest whose phone
   died. Same permissions as scanning.
7. Live dashboard: arrivals count updating as the door works, plus
   walk-in registration on the spot.
8. Dress rehearsal with five friends and printed codes; time each
   check-in and fix the slowest step.
9. The real event. You work the door with your own system. Final
   README with numbers from the night and the post-event data
   deletion carried out.

## Done means

- Live URL; real people registered themselves in advance
- The system ran the door at the actual event, with real
  attendance numbers in the README
- Scanning, double-scan rejection, and manual lookup all worked
  under door conditions
- Scanner and dashboard require staff sign-in; attendee data is
  never publicly readable
- Registrations survive redeploys through the event
- Attendees were told what was collected; deletion after the event
  is documented and done; no secrets committed
- At least 20 commits across at least 12 distinct days;
  SESSIONS.md has an entry per session, written by you
