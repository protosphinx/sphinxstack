---
id: camera-roll-classifier
level: 3
group: Data & ML
name: An image classifier for your own photos
proves: [train-a-model, build-web-app]
resume_line:
  job: "Built {project_name}, an image classifier trained on {n} of my own photos with a live demo — at {url}"
  college: "Trained an image classifier on my own photo categories and shipped a live demo with honest error analysis"
  freelance: "Trains and deploys image classifiers on custom data — recent: {project_name} ({url})"
---

## Brief

Train an image classifier on categories from your own camera roll:
your dog vs other dogs, sketchbook pages vs lecture notes, the
climbing gym vs the skatepark. Curate a few hundred of your own
photos per class, fine-tune a small pretrained model, and evaluate it
on photos it could not have memorized. The demo is a live page where
anyone can upload an image and see the prediction, the confidence,
and a gallery of the model's real mistakes.

## Personalize

- **Your classes.** Two to four categories that genuinely occur in
  your camera roll, at least 150 photos each. The photos must be
  yours. Photos where other people are recognizable stay out of the
  public demo unless they have said yes.
- **Your split.** Phone photos come in bursts of near-duplicates,
  and a random split leaks them across train and test. Split by
  event or by month, and explain the choice in the README.
- **Your baseline.** Majority class first. Then the cheapest rule
  you can think of (average brightness, dominant color). If a color
  histogram gets 85 percent, the neural net has a real bar to clear.

## Milestones

1. Define the classes and audit your camera roll: enough photos per
   class, exported at a consistent size, consent noted for any photo
   showing another person.
2. Build the dataset with the split done first: hold out whole
   events or months as the test set, and freeze it.
3. Label a quick sample of the test set twice, a week apart. If you
   disagree with yourself, tighten the class definitions and note it.
4. Compute the majority-class baseline, then build the cheap-rule
   baseline and score it on the test set.
5. Fine-tune a small pretrained model on the training set only.
   Track training without peeking at test.
6. Evaluate once on the frozen test set: accuracy per class next to
   both baselines, plus a confusion matrix.
7. Collect the failures: every misclassified test photo goes into a
   gallery with the predicted and true labels.
8. Stress-test with photos from outside the dataset entirely (a
   friend's phone, with permission) and record how it does on truly
   foreign images.
9. Ship the live demo: upload an image, get prediction and
   confidence, with the failure gallery and evaluation table on the
   same page.
10. Write the limitations section: your lighting, your camera, your
    places, and what that means for anyone else's photos.

## Done means

- At least 150 of your own photos per class, with the test split
  done by event or time and the leakage reasoning written down
- Accuracy reported per class next to the majority and cheap-rule
  baselines, from a single evaluation on the frozen test set
- Live demo page accepting uploads and showing confidence, with the
  failure gallery visible, never hidden
- Results on out-of-distribution photos reported, however bad
- Consent handled: no recognizable person in the public demo without
  their OK
- Limitations written by you, bounding the claim to your camera and
  your world
