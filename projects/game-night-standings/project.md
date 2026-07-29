---
id: game-night-standings
level: 1
group: Data
name: Game-night standings
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a standings app tracking real game-night results — live at {url}"
  college: "Built a results-tracking app my friend group uses for every game night"
  freelance: "Builds small data apps groups keep using — recent: {project_name} ({url})"
---

## Brief

An app that records your friend group's game-night results as they
happen and computes a standings table plus each player's sorest
statistic: the losing streak, the always-second record, the win rate
that collapses at one specific game. It works when the group starts
citing it mid-argument.

## Personalize

- **Your group and your games.** Enter the people who show up and the
  games you play. Names appear with each player's okay; initials are
  fine for anyone who prefers.
- **The sore stats.** Ask the group which numbers sting and compute
  those. A stat nobody teases anyone about is dead weight.
- **Your scoring rules.** Win-loss, points, placements: encode how
  your group scores each game, house rules included, and write the
  rules on the page.

## Milestones

1. Backfill what the group remembers of past results; mark backfilled
   entries as from-memory.
2. Define the result record: date, game, players, outcome. Entries
   persist across reloads.
3. Standings table computed from entries, with the ranking rule
   written next to it.
4. Per-player pages with the sore statistic each.
5. Live-enter results at one game night; fix whatever made entry
   slow.
6. Show the group; take corrections to the historical record.

## Done means

- Live URL the group can open; standings computed from entries, not
  typed in
- At least three game nights of results, live-entered or marked as
  backfilled
- Scoring and ranking rules written on the page
- Every named player okayed appearing
- At least 8 commits across at least 5 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
