---
id: beat-the-forecast
level: 2
group: Data & ML
name: Beat the forecast
proves: [use-an-api, train-a-model, chart-the-truth]
resume_line:
  job: "Built {project_name}, a local weather model scored daily against the official forecast — live at {url}"
  college: "Ran a month-long study pitting my own weather model against the official forecast for my town"
  freelance: "Builds and scores prediction models against real outcomes — recent: {project_name} ({url})"
---

## Brief

For one month, predict tomorrow's high temperature for your exact
location and score yourself against the official forecast. Pull past
observations from a weather API, log the official forecast every
evening, and build a model that makes its own call before you see
tomorrow. The scoreboard is a live page: your model, the official
forecast, and a persistence baseline, all measured in average degrees
of error against what actually happened.

## Personalize

- **Your location.** Your town, from the station nearest your house.
  If you have a thermometer, log your own readings too and note where
  they disagree with the station.
- **Your model.** Start with anything you can explain: last three
  days averaged, a regression on recent temperatures and the season
  trend. You must be able to say why it predicted what it predicted.
- **Your baselines.** Persistence (tomorrow equals today) is the
  floor. The official forecast is the ceiling. Your model lives
  somewhere between, and the page shows where.

## Milestones

1. Write the protocol in the README: what is predicted (tomorrow's
   high, one location), when predictions freeze (a fixed time each
   evening), and how error is measured (mean absolute error).
2. Get historical observations for your station from a free weather
   API. Chart the last few months so you know what normal looks like.
3. Start the daily log: every evening record the official forecast
   for tomorrow, and every day record what actually happened.
4. Compute the persistence baseline over the historical data. This
   is the number to beat.
5. Build your model and backtest it on history it was not fit to.
   Report its error next to persistence.
6. Go live: each evening the model's frozen prediction joins the log
   before tomorrow arrives.
7. Build the scoreboard page: running error for model, official
   forecast, and persistence, updated as days complete.
8. Halfway through the month, write down what is failing (fronts,
   sudden shifts) without changing the protocol mid-study.
9. At thirty scored days, close the study and write the verdict.
10. Add the limitations section: one location, one month, one season,
    and what that means for the claim you can make.

## Done means

- Thirty days of predictions, each frozen before the day it predicts,
  with the log in the repo
- Scoreboard live showing mean absolute error for model, official
  forecast, and persistence on the same days
- The write-up states which of the three won, even if it is not you
- Worst misses shown and discussed, with your best guess at why
- Limitations written by you: one station, one month, no claim beyond
  that
- Protocol was frozen before scoring started, and the README says so
