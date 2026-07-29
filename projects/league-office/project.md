---
id: league-office
level: 3
group: Bigger builds
name: The league office for your rec league
proves: [backend-basics, database-basics, build-web-app, ship-on-github]
resume_line:
  job: "Built {project_name}, a league platform (teams, schedule, results entry, computed standings) checked weekly by {n} players — {url}"
  college: "Built {project_name}, the platform my rec league runs its season on"
  freelance: "Builds league and season platforms for rec sports — recent: {project_name} ({url})"
---

## Brief

A season platform for a rec league you play in or help run:
pickup basketball, intramural volleyball, a fantasy league, a
chess ladder. Teams, a schedule, results entered by captains, and
standings computed from results rather than typed by hand. Public
pages need no login; entering results does. Honest architecture: a
backend on Render's free tier (idle spin-down means the first hit
is slow), free Postgres on Neon, and standings computed in SQL or
server code from the results table. The real users are the
players, and the test is whether they check your standings page
instead of asking in the group chat.

## Personalize

- **The league.** One with a real season in progress or about to
  start, at least 4 teams, and games at least weekly, so results
  flow in on their own.
- **Who signs off.** The organizer or commissioner, and the adult
  in charge if it runs through a school or community center. Player
  names go on a public page only with each player's ok; initials or
  first names otherwise.
- **The scoring rules.** Points for a win, tiebreakers, forfeits.
  Get the organizer to state them precisely; encoding them is half
  the project.
- **The launch moment.** The week the group chat pin changes to
  your URL.

## Milestones

1. Week 1: sit with the organizer. Collect teams, the schedule
   format, and the exact standings rules, including tiebreakers.
   Get sign-off, and agree how player names appear publicly.
2. Week 1: repo, README data model: team, player, game, result,
   and standings as a computation, never a stored table.
3. Week 1: walking skeleton deployed. Teams and this week's games
   render from the database at a live URL. Secrets in host config,
   never in the repo.
4. Week 2: full schedule pages, by week and by team.
5. Week 2: results entry behind auth for captains and the
   organizer. A captain can submit a score for their own game
   only; the server enforces it.
6. Week 2: standings computed from results: wins, losses, points,
   the organizer's tiebreakers, in the organizer's exact order.
7. Week 3: the messy cases. A correction to an already-entered
   score (keep an edit history), a forfeit, a postponed game.
8. Week 3: check standings by hand against the computation for
   every game so far. Fix every mismatch; write down the cause.
9. Week 3: pilot week. Captains enter one real week of results
   themselves while you watch. Fix what confuses them.
10. Week 4: launch. The link goes in the group chat pin, and the
    old standings method stops.
11. Week 4: run two more real weeks. Results entered by captains,
    standings trusted, disputes resolved from the edit history.
12. Week 4: postmortem in the repo: where the computed standings
    disagreed with humans, and who turned out to be right.

## Done means

- Live URL with real teams, the real schedule, and standings
  players actually check
- At least 2 weeks of results entered by captains, without you
  entering scores for them
- A captain cannot edit another team's game; anonymous visitors
  cannot enter anything; both verified by trying
- Standings recomputed from raw results match a hand check for
  the full season so far
- Score corrections leave a visible history rather than silently
  rewriting
- Organizer sign-off in writing; every named player agreed to
  appear publicly
- No secrets in git history
- A postmortem in the repo, written by you
