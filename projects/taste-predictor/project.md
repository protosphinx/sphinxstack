---
id: taste-predictor
level: 3
group: Data & ML
name: Will you actually like this track
proves: [clean-a-dataset, train-a-model, simple-dashboard]
resume_line:
  job: "Built {project_name}, a music-taste model trained on my full listening history and scored on future listening — at {url}"
  college: "Trained a model on {years} of my real listening data and tested it prospectively on two weeks of new music"
  freelance: "Builds behavioral prediction models from raw export data — recent: {project_name} ({url})"
---

## Brief

Request your full listening-history export and build a model that
predicts whether you will like a track you have not heard yet. The
hard parts are honest ones: deciding what "liked" even means in your
data, keeping features that leak the answer out of the model, and
testing on the future instead of the past. The demo is a dashboard
that scores incoming tracks and then keeps a public tally of how the
predictions held up against your actual listening.

## Personalize

- **Your export.** Your own streaming history export, the full one
  (most services include play counts, skips, and timestamps). While
  you wait for it, write down your guess about what predicts your
  taste.
- **Your label.** Define "liked" from behavior, and defend it:
  saved, or replayed more than N times in the following month, vs
  skipped early and never returned. The write-up must discuss what
  this definition gets wrong.
- **Your baselines.** Majority class, then a one-liner: "liked if
  the artist is already in my top 50." On personal listening the
  artist rule is brutal to beat, which is exactly why it goes on the
  scoreboard.

## Milestones

1. Get the export, load it, and profile it: span, play counts, skip
   data, gaps. Chart your listening over time before modeling.
2. Write the label definition and apply it. Report the class
   balance, and revisit the definition if 95 percent of tracks land
   on one side.
3. Split by time: the most recent months are the test set, frozen.
   Explain in the README why a random split would let the model see
   the future.
4. Build features from track and artist metadata (an API helps
   here). Audit each feature for leakage: anything computed from
   listens after the track first appeared is cheating. Document what
   you excluded and why.
5. Score both baselines on the test set.
6. Train a simple classifier on the past-only training data.
7. Evaluate on the frozen test set: accuracy and precision on the
   "liked" class, next to both baselines.
8. Read the worst errors: tracks the model was sure about and got
   wrong. Write what the features could not capture (mood, a friend's
   recommendation, one great chorus).
9. Build the dashboard: paste or pick a track, get a like
   probability, with the evaluation table on the page.
10. Run the prospective test: score 20 tracks you have not heard,
    listen over two weeks, log real outcomes next to predictions.
11. Publish the final tally and the limitations: your label is a
    proxy, taste drifts, and two weeks is a small window.

## Done means

- Model trained only on data from before the test period, with the
  temporal split explained in your words
- Leakage audit written down: which features were excluded and why
- Test accuracy and liked-class precision published next to the
  majority and top-artist baselines
- Prospective test completed: at least 20 predictions logged before
  listening, real outcomes published next to them
- Dashboard live with the scoreboard and the worst misses shown
- Label definition and its flaws discussed openly; no claim that the
  model knows your taste, only what the tally shows
