---
id: quiz-battle
level: 3
group: Games
name: A realtime quiz battle for your actual friends
proves: [build-a-game, backend-basics]
resume_line:
  job: "Built {project_name}, a realtime multiplayer quiz platform — live at {url}"
  college: "Built {project_name}, a live quiz game my friend group plays on game nights"
  freelance: "Builds realtime multiplayer web apps — recent: {project_name} ({url})"
---

## Brief

A live quiz in the kahoot shape, but the questions are about what
your friend group actually knows: your inside jokes, your team's
season, your school, your server's lore. A host starts a lobby,
everyone joins on their phones with a room code and a nickname, each
question goes to all screens at once, fast correct answers score more,
and a leaderboard drops between questions. No accounts, just codes
and nicknames. Finished means a real game night happened: four or
more friends on their own phones, a winner, and demands for a rematch.

## Personalize

- **Your question bank.** Write at least 30 real questions about your
  group, in a data file, organized into packs. The wrong answers
  should be funny to exactly your people.
- **Your host.** Decide who runs game night (probably you) and design
  the host screen for a phone or a TV, whichever your room uses.
- **Your players.** Name at least four friends who will play the
  first live round, and the group chat where the room code gets
  dropped.

## Milestones

1. Question format designed and 30 questions written: text, choices,
   correct answer, time limit.
2. Solo quiz loop on one phone: questions appear, a timer runs,
   answers score with a speed bonus, results at the end.
3. End of week one: the solo loop is deployed and you can play a full
   pack on your phone.
4. Lobby backend: host creates a room and gets a code; players join
   with code and nickname; everyone sees the player list grow.
5. Realtime push: when the host advances, the question appears on
   every phone at once (websockets, or polling fast enough that
   nobody notices).
6. Answer collection: each phone submits once per question, the timer
   is enforced by the server, and late answers score zero.
7. Scoring on the server: correctness plus speed bonus, no scores
   computed on phones.
8. The reveal: after each question, correct answer plus a leaderboard
   with movement, because the reveal is where the shouting happens.
9. Host controls that survive a real room: start, next question, skip,
   end game, and a podium screen for the top three.
10. Dry run with two friends in the same room; fix the chaos you
    could not predict (double joins, duplicate nicknames, a phone
    that locked mid-question).
11. Real game night with four or more named players; collect the
    complaints, fix the top two, run it again, ship.

## Done means

- Live URL; a room goes from code on a screen to podium without
  anyone touching a laptop mid-game
- Questions land on all phones at effectively the same moment, and the
  server enforces the timer
- Scores are computed server-side and the between-question leaderboard
  is correct every round
- A locked phone or a dropped connection can rejoin the room with the
  same nickname and score
- At least 4 named friends played a full game on their own phones, and
  at least two fixes came from watching that night
- At least 20 commits across at least 14 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
