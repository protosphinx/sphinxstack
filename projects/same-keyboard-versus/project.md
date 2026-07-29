---
id: same-keyboard-versus
level: 2
group: Games
name: A two-player versus game on one keyboard
proves: [build-a-game, ship-on-github]
resume_line:
  job: "Built {project_name}, a local-multiplayer browser game — live at {url}"
  college: "Built {project_name}, a two-player game people actually fight over at lunch"
  freelance: "Builds multiplayer browser games — recent: {project_name} ({url})"
---

## Brief

Two friends, one keyboard: WASD versus arrow keys, first to five
rounds takes the match. Pick a versus shape you would actually replay:
sumo push-out on a shrinking platform, quick-draw duel, snake versus
snake, tug-of-war. Rounds are short (under 30 seconds) so losing means
"again", and the tension of sharing a keyboard is part of the game.
Finished means a full match flows from menu to winner screen to
rematch, and it has been played by two real people sitting next to
each other, arguing.

## Personalize

- **Your versus shape.** Choose the duel that fits your friend group:
  reflex people get quick-draw, grinders get tug-of-war, chaos people
  get sumo. Write one sentence in the README on why this shape.
- **Your controls.** Test your two key sets together on your actual
  keyboard before building anything: cheap keyboards drop keys when
  several are held (ghosting). Record the working sets in the README.
- **Your two rivals.** Name the two people who will play the first
  real match. Their rematch count is your success metric.

## Milestones

1. Design note in the README: the versus shape, both control schemes,
   what wins a round, what wins a match.
2. Both players on screen, moving at the same time from one keyboard.
   Verify held-key combos work on your real hardware.
3. The core duel works: one player can beat the other and the game
   knows it.
4. Round structure: win detection, a round-over moment, score shown,
   next round starts on a key press.
5. End of week one: a full best-of-five match is playable start to
   finish.
6. Menu with a controls diagram both players can read before round
   one, plus a start key for each player so nobody starts it alone.
7. Match winner screen with the score history and a rematch button
   that resets everything cleanly.
8. Juice pass: round countdown, hit feedback, a winner celebration
   worth trash-talking over.
9. Playtest one: your two named rivals play a full match while you
   only watch. Log every confusion and every "wait, that's unfair".
10. Fix the unfairness first (symmetric spawns, no side advantage),
    then the confusion. Second playtest, then ship.

## Done means

- Live URL; two people on one keyboard can complete a full match from
  menu to winner to rematch without you explaining anything
- Both control schemes work simultaneously on at least two different
  keyboards
- Rounds and match score are always visible during play
- The winner screen shows who won and rematch works without a reload
- Your two named rivals played at least two full matches, and at least
  one balance or clarity fix came from watching them
- At least 15 commits across at least 10 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
