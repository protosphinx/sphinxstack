---
id: which-bus
level: 1
name: Which bus
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a decision app for my commute timetables — live at {url}"
  college: "Built {project_name}, the app that tells me which bus home to catch"
  freelance: "Builds time-aware decision tools — recent: {project_name} ({url})"
---

## Brief

Open it after school and get one answer: catch the 4:12 or wait
for the 4:31. Your two routes home, timetables typed in by you from
the posted schedules, and a single screen that compares the current
time against them and tells you what to do, including how many
minutes you have to make it to the stop. Timetables persist across
reloads (localStorage is fine).

## Personalize

- **Your routes.** The two ways you go home, with every departure
  time transcribed from the stop or the operator's site. Note the
  transcription date in the README, because timetables change.
- **Your walk to the stop.** Time the walk from your last class to
  each stop and build it in: a bus you cannot reach in time is not
  an option and should never be the answer.
- **The days that differ.** Friday early release, weekend times,
  the route that skips holidays. Encode the variations your week
  has.

## Milestones

1. Timetables and rules in the README: routes, departure times,
   walk times, day variations, and what the app says after the
   last bus.
2. Hardcoded timetable, current time in, next viable departure per
   route out. Deployed, ugly is fine.
3. The one-answer screen: which bus, how many minutes of slack,
   with the walk time already subtracted.
4. Day-of-week variations, plus the endgame cases: last bus soon
   (say so loudly) and no more buses (say what to do instead).
5. Timetable editing in the browser so a schedule change takes
   minutes to fix; data survives a reload; empty state designed.
6. Use it every school day for a week. Final README with any time
   it gave a wrong answer and the fix.

## Done means

- Live URL responding; timetables survive a reload
- The answer is correct at morning, mid-afternoon, and after the
  last bus, verified against the printed timetable
- Walk time is factored in, and unreachable buses are never
  offered
- A week of daily use, with wrong answers and fixes in the README
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
