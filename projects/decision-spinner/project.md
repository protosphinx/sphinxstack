---
id: decision-spinner
level: 1
name: Decision spinner
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a weighted decision app my friend group uses — {url}"
  college: "Built {project_name}, the spinner that settles my group's repeat decisions"
  freelance: "Builds fair-by-design group tools — recent: {project_name} ({url})"
---

## Brief

A spinner for the decisions your group repeats: who rides shotgun,
who picks the movie, which chore is whose. Each decision has its
own option list and its own weights, negotiated by the group
(whoever picked last week spins at half weight, or however yours
bargains). Decisions, weights, and spin history persist across
reloads (localStorage is fine).

## Personalize

- **The decisions.** Two or three your group genuinely re-argues,
  with the actual people or options as entries. A spinner for a
  decision nobody contests is decoration.
- **The negotiated weights.** Sit with the group and agree the
  weighting rule out loud, then encode it. The README records the
  rule in the group's own words.
- **The audit trail.** The first accusation will be that the
  spinner is rigged. The visible history of past spins is your
  defense; design it in from the start.

## Milestones

1. Model in the README: a decision, its options, its weights, and
   the group's agreed rule for how weights change after a spin.
2. One decision spinning with even weights, deployed. Ugly is
   fine.
3. Weighted spins, with a written check that the weights behave
   (spin 100 times in a test and eyeball the distribution).
4. Multiple decisions with add, edit, and delete on options; state
   survives a reload; empty state designed.
5. Spin history per decision, plus the weight-adjustment rule
   applied automatically after each spin.
6. Let the group use it for its next three contested calls. Final
   README with whether the results were accepted.

## Done means

- Live URL responding; decisions and history survive a reload
- Weights demonstrably affect outcomes, and history shows every
  spin
- Option editing works; empty state is designed
- The group used it for real decisions, recorded in the README
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
