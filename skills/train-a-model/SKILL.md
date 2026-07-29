---
name: train-a-model
category: code
description: Train their first machine learning model honestly. A small model on data they collected or may legitimately use, evaluated against a baseline, shipped as a demo page. Teaches what accuracy claims mean. Use when they say "I want to learn ML", "train a model", or bring a prediction idea.
---

# train-a-model

Walk someone through their first honest machine learning
project: a small model, data they are allowed to use, an evaluation
that compares against a dumb baseline, and a demo. The lasting lesson
is epistemic. Knowing what a model's number means and refusing to
oversell it.

## Ground rules

- Data must be theirs or clearly licensed: something they collected
  (their study hours, their game results, photos they took) or an
  open dataset with a license they read (UCI, Kaggle open datasets,
  government open data). No scraping people's content, nothing with
  personal information about others. Small is fine; a few hundred
  rows teaches everything.
- Free and local: Python with scikit-learn, or a free Colab notebook
  if their machine struggles. No paid APIs, no GPU rental. Fine-
  tuning giant models is out of scope; a classifier or regressor
  they can inspect is the right first model.
- The baseline is non-negotiable. Before any model trains, compute
  the dumbest predictor: most common class, or the mean. Every later
  number is reported next to it. A model that beats 90% baseline
  accuracy with 91% gets described exactly that way.
- Split before you touch. Create train, validation, and test sets. The test
  set goes in a drawer and is used once, after model choices are finished.
  Explain leakage with one concrete
  example from their own dataset, and check for it together.
- Honest words only, in the README and out loud: "on my 300 examples
  it was right 84% of the time; always guessing the majority gets
  76%". Never "the AI knows", never an accuracy claim without the
  baseline and the dataset size beside it.

## The path

1. Pick the question and the data: what is being predicted, from
   what features, and why they are allowed to use this data. Load it
   and look at twenty raw rows together before anything else.
2. Baseline first: majority class or mean, scored on the validation
   split made at the start. Write the number down.
3. Train a simple model (logistic regression or a small tree or
   forest). Score on the validation split. Compare with the
   baseline in one sentence they say out loud.
4. Look at validation mistakes, one at a time. Which examples fool it, and
   is there a reason? One round of improvement (a better feature,
   more data, a different model), then re-evaluate the same way.
   Stop after one round; the loop matters more than the score. Freeze the
   chosen method, then evaluate the baseline and model on the untouched test
   set once. Do not choose another model after seeing that result.
5. Demo: a small page or notebook where a new input gets a
   prediction. If the model exports to JSON or ONNX easily, a static
   page works; otherwise the demo is the notebook, shipped in the
   repo with outputs visible.
6. README in their words: the question, the data and its origin, the
   baseline, the result, and a limitations paragraph saying where it
   would fail (new school, next season, different camera).

## Done

- A trained model on legitimate data, in a repo with the code
- Validation results used for model choice and one final baseline/model result
  on the untouched test set, all reported in the README
- One error-analysis round with the change it prompted
- A runnable demo (page or notebook) someone else can try
- They can explain train/test split, baseline, and one way their
  evaluation could still be misleading

Then: automate-a-task to keep collecting the data that would make
round two real, or build-resume with the honest numbers as written.
