---
id: predict-the-season
level: 2
group: Data & ML
name: Predict the season
proves: [first-sql, train-a-model, chart-the-truth]
resume_line:
  job: "Built {project_name}, a season analytics site with a prediction model scored against real results — live at {url}"
  college: "Modeled {team}'s season, published predictions before each game, and scored them against reality"
  freelance: "Builds prediction models and publishes the scorecard — recent: {project_name} ({url})"
---

## Brief

Can you predict how your team's remaining games go, and prove you
called it before kickoff? Build a full-season dataset for a team you
actually follow, answer real analytics questions with SQL, then train
a simple model that predicts upcoming results. Publish each prediction
with a date before the game, score it after, and show the running
comparison against a dumb baseline on a live site.

## Personalize

- **Your team.** School team, local club, the league you follow, an
  esports roster. You need to care enough to know when the data looks
  wrong. Public league results are fine to collect.
- **Your prediction target.** Win or lose, over or under a points
  line, whether your striker scores. Pick one target and write it down
  before you build anything.
- **Your baseline.** "Always pick the home team" or "always pick the
  team higher in the table." The model only matters if it beats this.

## Milestones

1. Write the prediction question in the README: exactly what is
   predicted, and the moment a prediction is frozen (before kickoff,
   timestamped).
2. Build the dataset: every completed game this season in SQLite,
   with date, opponent, venue, score, and any per-game stat you can
   get for every single game.
3. Sanity-check with queries: your totals reproduce the league table.
   Fix mismatches before going further.
4. Answer three analytics questions you actually wonder about, each
   as a SQL query plus a chart.
5. Compute the baseline's accuracy over the completed games. This
   number goes on the site first.
6. Train a simple model (logistic regression or even a hand-tuned
   scoring rule) on the early season, test it on later games it never
   saw. Report both numbers.
7. Put the site live: dataset, charts, baseline accuracy, model
   accuracy on held-out games.
8. Freeze and publish predictions for the next upcoming games, each
   with a visible timestamp.
9. Score predictions as results come in. Update the running tally:
   model vs baseline vs reality.
10. After at least five scored predictions, write the honest verdict
    and a limitations section: sample size, what the model cannot see
    (injuries, weather, lineup changes).

## Done means

- Live site with at least five predictions that were published before
  the game and scored after, timestamps visible
- Baseline accuracy stated on the page next to model accuracy, on the
  same games
- Model evaluated on games it was not trained on, and the split is
  explained in your words
- If the baseline wins, the page says so plainly
- Limitations section written by you, including sample size
- Dataset queryable: the SQL file and database are in the repo
