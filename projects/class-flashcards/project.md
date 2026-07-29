---
id: class-flashcards
level: 1
name: Flashcards for one class
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a flashcard app I studied {class} with — live at {url}"
  college: "Built {project_name} and used it to prepare for my {class} exam"
  freelance: "Builds focused study tools — recent: {project_name} ({url})"
---

## Brief

A flashcard app for the one class you are studying right now, with
a deck you type in from your own notes. Flip a card, mark it right
or wrong, shuffle, and rerun the ones you missed. The deck and your
right/wrong marks persist across reloads (localStorage is fine).
One deck, one class, done completely.

## Personalize

- **The class.** The exam on your calendar this month. The deck
  exists because you need it, and the deadline is the ship date.
- **The cards.** Typed from your own notes and past quizzes, in
  your own words. Fifty cards you wrote beat five hundred imported
  ones you never read.
- **What "wrong" means for you.** Decide how a missed card comes
  back: immediately, at the end of the run, or in tomorrow's
  session. Pick the rule that matches how you study.

## Milestones

1. Card model in the README: front, back, and what the app tracks
   about each card across sessions.
2. Hardcoded ten-card deck with flip and next, deployed. Ugly is
   fine.
3. Add, edit, and delete cards in the browser; deck survives a
   reload; empty state designed for the day before you type cards.
4. Right/wrong marking with a rerun mode that shows only missed
   cards.
5. Shuffle, plus a per-card count of times missed so the stubborn
   cards surface.
6. Study for the real test with it. Write the result and what you
   changed afterward into the final README.

## Done means

- Live URL responding; deck and marks survive a reload
- Add, edit, delete all work; empty state is designed
- Rerun mode shows only missed cards and empties as you clear them
- You studied for a real test with it, and the README says how it
  went
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
