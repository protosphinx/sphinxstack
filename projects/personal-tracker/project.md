---
id: personal-tracker
level: 1
group: Apps & tools
name: A tracker for something you actually track
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a data-backed tracking app — live at {url}"
  college: "Built and published {project_name}, an app I use daily to track {thing}"
  freelance: "Builds data-backed tools — recent: {project_name} ({url})"
---

## Brief

A web app that tracks one thing from your real life: habits, workouts,
reading, practice hours, spending: and shows you something derived
from the data: a streak, a total, a trend. Entries persist across
reloads (localStorage is fine). One data type, done completely: add,
edit, delete, and a designed empty state.

## Personalize

- **What you track.** Must be something you already track somewhere
  worse: a notes app, a spreadsheet, your head. If you track nothing,
  pick something you started this week for real.
- **The one derived number.** Streak, weekly total, average, personal
  best: pick the single number that would make you open the app.

## Milestones

1. Data model written in the README before any code: what is one
   entry, what are its fields, what does the app show when there are
   none.
2. Add + list working, deployed. Ugly is fine.
3. Persistence: entries survive a reload.
4. Edit and delete, including the empty state when the last entry goes.
5. The derived number, computed from real entries.
6. Unhappy paths: bad input rejected with a message; storage
   unavailable handled. Then final README.

## Done means

- Live URL responding; data survives a reload
- Add, edit, delete all work; empty state is designed, not blank
- At least 10 commits across at least 7 distinct days, authored by you
- README documents the data model in your words
- SESSIONS.md has an entry per session, written by you
