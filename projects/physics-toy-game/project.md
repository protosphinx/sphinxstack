---
id: physics-toy-game
level: 2
group: Games
name: A physics toy that turned into a game
proves: [build-a-game, build-web-app]
resume_line:
  job: "Built {project_name}, a physics-based browser game — live at {url}"
  college: "Built {project_name}, a physics game, starting from a toy I wrote myself"
  freelance: "Builds physics-based web games — recent: {project_name} ({url})"
---

## Brief

Start with a toy: things on a canvas that fall, bounce, stack, or
swing, fun to poke with a mouse before there are any rules. Then add a
goal and a way to fail, and the toy becomes a game: knock the tower
off the ledge in three shots, stack ten shapes without a topple, sling
the projectile into the target. You can write the physics yourself
(gravity plus circle collisions is enough) or use a small library, but
you must be able to explain every line of the update loop. Finished
means at least eight levels, a menu with level select, and a URL.

## Personalize

- **Your toy.** Pick the physical thing you find satisfying: stacking,
  smashing, slinging, or swinging. Spend real time on feel before any
  goal exists; the toy has to be fun with no score on screen.
- **Your objects.** The shapes are things from your life: your
  school's vending machine snacks, your cat, the furniture from your
  room. Draw them or photograph them.
- **Your playtesters.** Name two people. One should be the kind who
  tries to break things; levels get better when someone hunts for the
  cheese strategy.

## Milestones

1. The toy: objects with gravity, bounce, and mouse interaction on a
   canvas. Deploy it while it is still just a toy.
2. Tuning pass: change gravity, restitution, and drag until poking it
   is genuinely fun. Record the numbers you settled on and why in the
   README.
3. Add the goal: one hardcoded level with a win condition the physics
   can actually detect.
4. Add the fail state: limited shots, a timer, or a topple. Losing
   must be unambiguous and show a retry.
5. End of week one: one complete level is playable, win and lose both
   work, retry loops cleanly.
6. Levels move into data: each level is an entry in a file, so making
   level five is editing data instead of code.
7. Eight or more levels with a difficulty ramp, each introducing a
   twist on the last.
8. Menu with level select; finished levels get a mark, and a level's
   best result is remembered in localStorage.
9. Juice pass: impact sounds scaled to collision speed, a satisfying
   win moment, debris that lingers.
10. Playtest one: watch your breaker-of-things play every level. Note
    where they cheesed a level or quit.
11. Rebuild the cheesed levels, retest with your second tester, ship
    with a gif in the README.

## Done means

- Live URL with at least eight completable levels
- The toy layer still holds up: moving things around is fun even when
  you are not trying to win
- Every level can be won and lost, and both states are obvious
- Level progress and best results survive a reload
- Both named playtesters finished the game, and at least two levels
  changed because of how they played
- At least 15 commits across at least 10 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
