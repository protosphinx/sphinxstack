---
id: countdown-board
level: 1
name: Countdown board
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a live countdown board for my real deadlines — {url}"
  college: "Built {project_name}, the screen that counts down to my exams and events"
  freelance: "Builds glanceable dashboards — recent: {project_name} ({url})"
---

## Brief

One screen showing the dates you are counting down to, with days
remaining on each: the exam, the season opener, your best friend's
birthday, the license test. Add a date, see the board sort itself by
what is soonest, and watch entries move to a "passed" section when
their day arrives. Dates persist across reloads (localStorage is
fine).

## Personalize

- **Your dates.** At least five from your own calendar, none
  invented for the demo. If the board does not include the date you
  check most, it is not your board.
- **The one that matters most.** Give the nearest or most important
  date a bigger treatment on screen, sized so it reads from across
  the room.
- **What happens after.** Decide what a passed date does: archives
  itself, shows "3 days ago", or asks you to clear it. Your call,
  but design it.

## Milestones

1. Model in the README: what is an event, how days remaining is
   computed, what the board shows with zero events.
2. Hardcoded list of your dates with correct day counts, deployed.
   Ugly is fine.
3. Add and delete events in the browser; the list survives a
   reload; empty state designed.
4. Sorting by soonest, plus the featured treatment for the top
   date.
5. Edge cases: today shows as today rather than zero-with-no-label,
   passed dates move to their section, and a date typed backwards
   is rejected with a message.
6. Set it as your browser start page for a week. Final README with
   what you added or removed after living with it.

## Done means

- Live URL responding; events survive a reload
- Day math is right for today, tomorrow, and passed dates
- Add and delete work; empty state is designed
- The board holds your own dates and you used it for a week
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
