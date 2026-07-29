---
id: online-turn-based
level: 3
group: Games
name: A turn-based game two browsers can play
proves: [build-a-game, backend-basics, database-basics]
resume_line:
  job: "Built {project_name}, an online turn-based game with server-validated rules — live at {url}"
  college: "Built {project_name}, an online game I play against friends in other cities"
  freelance: "Builds online multiplayer games with real backends — recent: {project_name} ({url})"
---

## Brief

A turn-based game (connect-four, dots-and-boxes, battleship, or a
small card duel) that two people play from two different machines. One
player creates a room and gets a short code; the other joins with it.
The server owns the game state and the rules: it rejects moves that
are illegal or out of turn, decides the winner, and remembers games so
a refreshed player can rejoin mid-match. Finished means a complete
match has been played between two machines on different networks, and
a refresh in the middle of it cost nothing.

## Personalize

- **Your game.** Pick rules you already know cold, then write them
  out completely before any code, including every draw and edge case.
  If writing the rules takes more than a page, pick a smaller game.
- **Your skin.** The pieces, the board, and the trash-talk copy in
  the status bar are yours: your league, your inside jokes.
- **Your remote opponent.** Name the friend on a different network
  who will play the shipping match. Same-machine tab-versus-tab
  testing hides the real bugs.

## Milestones

1. Rules written in the README: setup, legal moves, turn order, every
   way the game ends.
2. Hotseat version first: both players share one screen and the full
   game is playable locally, rules enforced in code.
3. End of week one: the hotseat game is deployed and winnable.
4. Backend skeleton: create a room (returns a code), join by code,
   fetch room state. Games are stored in a database, keyed by room.
5. Move endpoint: the server checks it is your turn and the move is
   legal, applies it, and stores the new state. Illegal moves get a
   clear rejection.
6. The client becomes a view of server state: it renders what the
   server returns and submits moves, with no rules logic of its own.
7. Live updates: the waiting player sees the opponent's move arrive
   (polling is fine; websockets if you want them).
8. Rejoin: each player holds a token, so a refresh or a closed laptop
   returns them to the same game in the same state.
9. Lobby states done properly: waiting for opponent, your turn, their
   turn, game over with result, opponent gone quiet.
10. Deploy backend and frontend; play a full match against yourself
    from two different browsers on two different machines.
11. The real match: your named remote opponent, their own network, no
    coaching. Fix what broke, play again, ship.

## Done means

- Live URL where two machines on different networks can complete a
  full match through a room code
- The server rejects illegal and out-of-turn moves, verified by
  attempting both from the browser console
- A mid-match refresh returns the player to the live game
- Games survive a server restart
- The named remote opponent played at least two full matches, and at
  least one fix came from that match, with the story in the README
- At least 20 commits across at least 14 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
