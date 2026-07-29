---
id: speedrun-leaderboard
level: 3
group: Games
name: A speedrun game with a real leaderboard
proves: [build-a-game, backend-basics, database-basics]
resume_line:
  job: "Built {project_name}, a speedrun game with a server-side leaderboard and submission validation — live at {url}"
  college: "Built {project_name}, a speedrun game where my friends fight over the world record"
  freelance: "Builds competitive web games with persistent backends — recent: {project_name} ({url})"
---

## Brief

One short, skill-heavy level (a platformer sprint, a maze, a precision
mouse course, a typing gauntlet) timed to the millisecond, where
finishing posts your time to a leaderboard that lives on a server.
Anyone can see the board; beating a time on it is the whole game. The
engineering test is submission honesty: the server issues a run token
when a run starts, sanity-checks every submitted time, and refuses
garbage, so the board stays worth fighting over. Finished means two
named friends have traded the world record back and forth without you
in the room.

## Personalize

- **Your level.** One level, tuned until a clean run feels like
  execution: a first run takes a minute, a good run half that, and
  the theoretical best is something you can estimate and defend.
- **Your movement.** The feel is the product. Pick your physics
  (momentum or instant, coyote time or strict) and tune it before
  building anything server-side.
- **Your rivals.** Name two competitive friends. If nobody you know
  would grind this level, change the level before you build the
  leaderboard.

## Milestones

1. Design note in the README: the level, the movement rules, your
   estimate of the fastest possible time and how you got it.
2. Movement prototype on a blank canvas; tune until moving around is
   fun with no level and no timer.
3. The level with start and finish lines, and a millisecond timer that
   starts on first input and stops at the finish.
4. End of week one: the level is deployed, runnable, and restartable
   with one key, with your local best shown.
5. Backend: a scores table (name, time, date), a submit endpoint, a
   top-50 endpoint.
6. Leaderboard page in the game: top times, your rank highlighted,
   updated right after your run.
7. Run tokens: the server issues a token when a run starts and only
   accepts a submission carrying one, once, and only after enough
   real time has passed since it was issued.
8. Submission checks: reject times below your stated floor, names too
   long or filthy, and duplicate tokens. Log rejected submissions.
9. Try to cheat your own game with curl: submit a fake world record
   from the command line. Make the obvious attacks fail, then write
   in the README what a determined cheater could still do and why
   that is acceptable at this scale.
10. Juice: a run-end screen with time splits versus your best, a
    world-record fanfare, a ghost line of your best run if you are
    feeling strong.
11. The rivalry test: both named rivals grind it on their own
    machines. Watch the board, fix what the grinding surfaced, ship.

## Done means

- Live URL; a stranger can play, finish, and see their name on the
  board within two minutes
- Times are stored server-side, survive a server restart, and are
  measured in milliseconds
- A curl submission without a valid run token is rejected, and so is
  a time faster than your stated floor, both verified by you
- The README documents the anti-cheat honestly: what it stops and
  what it does not
- Your two named rivals both held the record at some point, and at
  least one fix came from their grinding
- At least 20 commits across at least 14 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
