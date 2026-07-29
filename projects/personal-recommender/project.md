---
id: personal-recommender
level: 2
group: Data & ML
name: A recommender trained on your own ratings
proves: [clean-a-dataset, train-a-model, build-web-app]
resume_line:
  job: "Built {project_name}, a recommender trained on {n} of my own ratings and tested on held-out picks — live at {url}"
  college: "Trained a recommender on my complete {medium} ratings history and measured it against a stated baseline"
  freelance: "Builds recommendation models from real user data — recent: {project_name} ({url})"
---

## Brief

You have years of opinions about books or movies. Turn them into a
dataset and find out whether a model can predict your next rating
better than a dumb rule can. Collect your real ratings history,
attach metadata for each title, train a simple model, and test it on
ratings it never saw. The demo is a live page that ranks titles you
have not tried yet, with the honest accuracy numbers next to it.

## Personalize

- **Your ratings.** From your reading log, your movie-tracking
  account's export, or a spreadsheet you build from memory in one
  sitting. At least 60 titles, rated on a scale you define and stick
  to. It must be your own history.
- **Your features.** Genre, year, length, author or director, and
  whatever you suspect drives your taste. Write your suspicion down
  before training, then check whether the model agrees.
- **Your baseline.** Predicting your average rating for everything is
  the floor. A one-rule guess ("I rate everything in my favorite
  genre one point higher") is a stronger one. The model has to earn
  its place against both.

## Milestones

1. Collect and clean the ratings: one row per title, your rating,
   and the date if you have it. Document every judgment call
   (rereads, ratings you no longer agree with).
2. Attach metadata for every title. Missing values get a policy,
   written in the README.
3. Chart your own taste first: ratings by genre, by year, by length.
   Write three sentences on what you see.
4. Hold out your 15 most recent ratings. They are the test set and
   nothing touches them until evaluation.
5. Compute both baselines on the held-out set: average-rating error
   and your one-rule error.
6. Train a simple model (regression or nearest-neighbors on your own
   history) and evaluate on the same held-out ratings. Report error
   next to the baselines.
7. Look at the five worst misses individually and write down what
   the model could not know.
8. Build the demo: a page listing unseen titles ranked by predicted
   rating, with the evaluation table on the same page.
9. Field test: pick the model's top recommendation, actually read or
   watch it, and publish your real rating next to the prediction.
10. Write the limitations section: 60 titles is small, your taste
    drifts, and a model of past-you may not fit future-you.

## Done means

- Live page ranking unseen titles, with predicted ratings shown
- Evaluation on held-out ratings, reported next to both baselines on
  the same page
- If a baseline ties or wins, the page says so
- At least one field test: a recommendation you actually tried, with
  prediction and real rating side by side
- Worst misses shown with your explanation of each
- Limitations section written by you, no claim of knowing your taste
  beyond what the numbers support
