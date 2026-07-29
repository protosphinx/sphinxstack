---
id: canvas-arcade
level: 2
group: Games
name: An arcade game with your theme on it
proves: [build-a-game, ship-on-github]
resume_line:
  job: "Built {project_name}, a browser arcade game — live at {url}"
  college: "Designed and shipped {project_name}, an arcade game my friends still play"
  freelance: "Ships playable browser games — recent: {project_name} ({url})"
---

## Brief

A one-screen arcade game on a canvas: one verb (dodge, catch, shoot,
jump), a threat that speeds up the longer you survive, a score, and a
death. The theme comes from your life, so the thing falling from the
sky or chasing you across the screen is something you actually care
about. Finished means a title menu, a game-over screen with score and
restart, a high score that survives a reload, and a URL your friends
can open on their own machines and lose at.

## Personalize

- **Your theme.** Skin the classic shape with your world: your dog
  catching snacks, your bike dodging potholes on your actual street,
  your band's drummer keeping sticks in the air. If the theme could
  belong to anyone, pick again.
- **The verb.** One input scheme, chosen before any code: arrows only,
  arrows plus one button, or mouse only. Write it in the README and do
  not add a second scheme later.
- **Your playtesters.** Two people you can put a laptop in front of
  this week. Write their names in the README before you start.

## Milestones

1. One-page design note in the README: the verb, the threat, what ends
   a run, what the score counts.
2. Canvas loop drawing the player, moving under input. Deploy this
   skeleton the same day.
3. The threat spawns and collision ends the run. Death does something,
   even if it is just a red screen.
4. Score ticks up while you live; difficulty escalates on a curve you
   tuned by playing it yourself, badly, many times.
5. End of week one: the full loop works, from start to death to
   restart, without touching reload.
6. Title menu with the game's name and the controls listed; game-over
   screen shows the score and a restart button.
7. High score saved in localStorage and shown on the menu.
8. Juice pass: a flash on hit, a sound on death, something that makes
   dying feel like an event instead of a bug.
9. Playtest round one: watch your first named tester play without
   coaching them. Write down every place they got confused, then fix
   the worst one.
10. Playtest round two with your second tester, tune the difficulty
    curve from what you saw, add a gif to the README, ship.

## Done means

- Live URL anyone can open; the game runs smoothly on a normal laptop
- Complete loop: menu, play, die, see your score, restart, all without
  a page reload
- High score survives a reload
- Difficulty visibly escalates within the first 60 seconds of a run
- Both named playtesters played it, and at least one thing in the game
  changed because of what they did or said
- At least 15 commits across at least 10 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
