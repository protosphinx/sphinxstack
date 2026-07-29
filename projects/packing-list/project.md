---
id: packing-list
level: 1
name: Packing list generator
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a trip packing app built from my own trips — live at {url}"
  college: "Built {project_name}, the packing app my family uses before trips"
  freelance: "Builds checklist tools people trust — recent: {project_name} ({url})"
---

## Brief

Pick a trip type, get the list, check things off as they go in the
bag. The trip types are the trips you take: practice, the weekend
tournament, camping, grandma's house. Each type has its own item
list built from what you packed (and forgot) last time. Checked
state and your custom lists persist across reloads (localStorage is
fine).

## Personalize

- **Your trip types.** Three or four from your own life, each with
  the items you learned the hard way to bring. The charger you
  forgot at the tournament is the reason this app exists; put it
  first.
- **The forgotten-items audit.** Ask whoever travels with you what
  the family has forgotten on past trips and fold every answer into
  the right list.
- **The shared-versus-yours split.** Mark which items are yours to
  pack and which someone else in the family covers, so the list
  matches how packing works in your house.

## Milestones

1. Model in the README: trip types, items, what per-trip checked
   state means, what shows before any trip is started.
2. One hardcoded trip type with a checkable list, deployed. Ugly is
   fine.
3. All your trip types with type picking; checked state survives a
   reload; empty state designed.
4. Edit mode: add and remove items per type, so a post-trip lesson
   takes ten seconds to record.
5. Trip lifecycle: start a trip, pack it to done, reset for next
   time without losing the underlying lists.
6. Pack for one trip using only the app. Add what it missed. Final
   README with the miss list.

## Done means

- Live URL responding; lists and checked state survive a reload
- Trip reset clears checks without deleting items
- Item editing works; empty state is designed
- One real trip packed with it, and the README says what it missed
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
