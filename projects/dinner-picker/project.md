---
id: dinner-picker
level: 1
name: Dinner picker
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a meal-decision app my family uses — live at {url}"
  college: "Built {project_name}, the app that picks dinner in my house"
  freelance: "Builds one-button tools people return to — recent: {project_name} ({url})"
---

## Brief

One button that answers "what's for dinner tonight" from a list of
the meals your family cooks. The list comes from your household's
rotation, nothing aspirational, and the picker enforces a
no-repeats-this-week rule so Tuesday does not echo Sunday. The meal
list and the week's history persist across reloads (localStorage is
fine).

## Personalize

- **The meal list.** Sit with whoever cooks and write down what
  your household made in the last month. That list, as it stands,
  is version one. Aspirational meals stay out until someone cooks
  them.
- **The house constraints.** Taco night is Tuesday, fish never on
  Monday, the slow-cooker meal needs a morning start. Encode the
  constraints your family states out loud.
- **Who presses the button.** Put it on the kitchen phone or the
  family tablet and let someone else use it without you standing
  there.

## Milestones

1. Model in the README: what is a meal, what the picker knows about
   each one, what the app says when the list is empty.
2. Hardcoded meal list and a pick button, deployed. Ugly is fine.
3. Add and remove meals in the browser; list survives a reload;
   empty state designed.
4. The no-repeats-this-week rule, backed by a visible history of
   this week's picks.
5. Your household's constraints (fixed nights, prep-time limits),
   plus a reroll button for vetoes with a veto count so the data is
   honest.
6. A week of real dinners decided by it. Final README with the veto
   rate and what the list gained or lost.

## Done means

- Live URL responding; meal list and week history survive a reload
- The no-repeat rule holds, and the picker explains itself when
  every meal is excluded
- Add and remove work; empty state is designed
- Your family used it for a real week, written up in the README
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
