---
id: score-keeper
level: 1
name: Score keeper with house rules
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a scoring app for my family's game nights — live at {url}"
  college: "Built {project_name}, the app that keeps score at our game nights"
  freelance: "Builds rule-driven tools — recent: {project_name} ({url})"
---

## Brief

A score keeper for the card or board game your family or friend
group plays, including the house rule nobody outside the house
believes. Enter points as rounds happen, let the app apply the
weird rule, and keep running totals across game nights so the
standings argument has a source. Scores and history persist across
reloads (localStorage is fine).

## Personalize

- **The game and the rule.** Your group's game, with the house rule
  written out in the README exactly as the family states it,
  disagreements included. The app implements the written version.
- **The players.** Your regulars by name, persisted so game night
  starts with one tap.
- **The grudge stat.** Every group tracks one number informally:
  most wins, worst single round, longest losing streak. Compute
  the one yours argues about.

## Milestones

1. Rules in the README before code: scoring, the house rule, and
   what ends a game. Get one other player to confirm the wording.
2. Players and a running total for one game, deployed. Ugly is
   fine.
3. Round-by-round entry with an undo, because someone always enters
   a score wrong; state survives a reload.
4. The house rule applied automatically, with a test case from a
   remembered game where it mattered.
5. Cross-night history: finished games saved, all-time standings
   and the grudge stat computed from them; empty state designed
   for night one.
6. Score a real game night with it. Final README with what the
   table said.

## Done means

- Live URL responding; scores and history survive a reload
- The house rule computes correctly on its README test case
- Undo works; empty state is designed
- One real game night scored with it, noted in the README
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
