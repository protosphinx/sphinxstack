---
id: team-stats-board
level: 2
group: Bigger builds
name: A stats platform your whole team updates
proves: [build-web-app, database-basics, auth-basics]
resume_line:
  job: "Built {project_name}, a multi-user sports stats platform with per-player accounts — live at {url}"
  college: "Built {project_name}, the stats site my {team} updates after every game"
  freelance: "Builds data platforms small teams keep updated themselves — recent: {project_name} ({url})"
---

## Brief

A stats site for a team you play on or manage, where the team itself
enters the data. After each game, players sign in and log their own
numbers; the site computes season totals, averages, and a leaderboard
anyone can view. The public pages are read-only; writing requires an
account. Data lives in a hosted database (Supabase or Firebase, both
free at this scale) which also provides sign-in; the frontend
deploys free on Netlify or Vercel.

## Personalize

- **The team and the sport.** A real roster that plays real games
  this season. Pick the three or four stats that people on your team
  actually argue about.
- **Who enters data.** Each player logs their own, or one
  scorekeeper logs everyone. Both are fine; the permission model
  differs, so choose before building.
- **Consent.** Every player on a public leaderboard agreed to be
  there. Offer an initials-only option for anyone who wants it.

## Milestones

1. README first: what is a game, what is a stat line, which stats
   you track, and the formula for each derived number.
2. Database tables for players, games, and stat lines, with a seed
   script full of plausible fake data.
3. Public read-only season page deployed to a live URL by end of
   week one: totals and leaderboard computed from the database.
4. Accounts: players sign up with a team invite code so strangers
   cannot join.
5. Signed-in entry form: a player submits a stat line for a game;
   it appears in the totals immediately.
6. Editing with limits: a player can fix their own line; only the
   captain role can edit anyone's. Enforce on the server side.
7. Unhappy paths: duplicate stat line for the same player and game,
   a game entered twice, nonsense values rejected with a message.
8. A real game weekend: the team logs an actual game, you watch
   what confuses them, and you fix the two worst things.
9. Final pass: consent confirmed for every listed player, README
   documents the schema and the derived-stat formulas in your words.

## Done means

- Live URL; leaderboard and totals computed from real entered games
- At least three real teammates have accounts and have entered
  their own stats
- Public pages need no sign-in; entry and editing require it
- A player cannot edit another player's line, verified by trying
- Data survives redeploys across the season
- Consent noted for every named player; removal path exists
- At least 20 commits across at least 12 distinct days;
  SESSIONS.md has an entry per session, written by you
