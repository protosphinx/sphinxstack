---
id: pantry-inventory
level: 1
group: Data
name: Pantry inventory
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a household inventory app my family uses weekly — live at {url}"
  college: "Built an inventory app for our family pantry that the household adopted"
  freelance: "Builds small inventory tools people keep using — recent: {project_name} ({url})"
---

## Brief

Everything in the family freezer and pantry, entered once, with a page
that shows what is oldest and should be used first. The catch is
written into the idea: your household has to keep using it, which
means entry has to be fast and the oldest-first view has to change
what gets cooked.

## Personalize

- **Your shelves.** Inventory what your kitchen holds, in your
  family's words ("the big rice" beats a barcode). Freezer first if
  choosing; that is where food goes to be forgotten.
- **Your household's workflow.** Who adds items after shopping, who
  marks things used, and when. Agree on this with whoever cooks
  before building; the app fits their habit, or it dies.
- **Your date policy.** Frozen items get freeze dates, packets get
  best-before dates. Decide what "oldest" means per category and
  write it in the app.

## Milestones

1. The physical count: everything out, listed with name, quantity,
   location, and date. This is the longest session.
2. Define the item record; build add and list, deployed, with
   entries persisting.
3. The oldest-first view, grouped by location.
4. Mark-as-used and quantity edit, fast enough to do with one hand
   in the kitchen.
5. Live with the household for one week, including one shopping trip
   entered on return.
6. Fix the friction the week exposed; write the README.

## Done means

- Live URL usable on a phone in the kitchen
- Full initial inventory entered from the physical count
- Oldest-first view computes from dates, and the date policy is
  stated in the app
- Survived one week of household use, with the shopping trip entered
- At least one meal decision the app changed, recorded in the README
- SESSIONS.md has an entry per session, written by you
