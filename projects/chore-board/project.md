---
id: chore-board
level: 1
name: Chore rotation board
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a chore rotation app my household uses — live at {url}"
  college: "Built {project_name}, the app that settles whose turn it is in my house"
  freelance: "Builds small tools households rely on — recent: {project_name} ({url})"
---

## Brief

A board that answers one question: whose turn is it. Load it with
your household's chores and the people who share them, encode the
rotation your family agreed to, and show today's assignments on one
screen. Marking a chore done advances the rotation. State persists
across reloads (localStorage is fine).

## Personalize

- **The chores.** The ones your household argues about, taken from a
  real week at your house. If dishes rotate nightly and trash rotates
  weekly, the app has to know that.
- **The people.** Your family or roommates by name, including whoever
  is exempt from what. The rules go in as agreed, and everyone gets
  to see the same screen you do.
- **The dispute you are settling.** Pick the one chore whose turn is
  contested most often and make its history visible, so the board can
  end that argument with dates.

## Milestones

1. Model in the README before code: what is a chore, what is a
   rotation, what does today's view show when nothing is due.
2. Hardcoded chore list with today's assignee per chore, deployed.
   Ugly is fine.
3. Mark-done advances the rotation; state survives a reload.
4. Add and remove chores and people without breaking existing
   rotations, including the empty state when the last chore goes.
5. Different cadences per chore (daily, weekly) plus a visible
   history of who did what and when.
6. A week of real use in your house, then final README with a note
   on what the household changed after seeing it.

## Done means

- Live URL responding; rotation state survives a reload
- Marking done advances the turn correctly across cadences
- Empty state is designed, and removing a person does not corrupt
  the rotation
- Your household used it for at least a week; the README says what
  happened
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
