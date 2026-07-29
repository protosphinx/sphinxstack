---
id: plant-watering
level: 1
name: Plant watering schedule
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a watering scheduler for my household's plants — {url}"
  college: "Built {project_name}, the app that keeps my family's plants alive"
  freelance: "Builds schedule-driven tools — recent: {project_name} ({url})"
---

## Brief

The plants in your house, each with its own watering interval, and
a today view that answers one question: what is thirsty right now.
Water a plant, tap it, and its next-due date moves out by its
interval. Plants and watering history persist across reloads
(localStorage is fine). The fern your family keeps killing is the
first entry.

## Personalize

- **The plant census.** Walk the house and list every plant: name,
  location, and who claims to water it. That census is your seed
  data, photos included if you want the today view to be
  recognizable at a glance.
- **The intervals.** Look each species up once, then adjust to your
  house (the radiator window dries pots faster). Record both the
  looked-up and adjusted numbers in the README.
- **The other waterers.** If a parent or sibling waters too, the
  app needs a way to record their watering after the fact, or the
  data lies within a week.

## Milestones

1. Census and model in the README: a plant, an interval, a watering
   event, and what today shows when nothing is due.
2. Hardcoded plant list with due dates, deployed. Ugly is fine.
3. Tap-to-water advances the due date; history survives a reload.
4. Add, edit, and remove plants (plants die; the app admits it);
   empty state designed.
5. Overdue handling: a plant three days late shows how late, and a
   backdated watering can be entered for the day someone else did
   it.
6. Run the house on it for two weeks. Final README with the
   survival report, fern included.

## Done means

- Live URL responding; plants and history survive a reload
- The today view is correct for due, overdue, and not-due plants
- Add, edit, remove, and backdated watering all work; empty state
  is designed
- Two weeks of real waterings logged, summarized in the README
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
