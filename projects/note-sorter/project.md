---
id: note-sorter
level: 2
group: Data & ML
name: A text classifier for your own writing
proves: [clean-a-dataset, train-a-model]
resume_line:
  job: "Built {project_name}, a text classifier trained on {n} of my own documents, evaluated against a keyword baseline — at {url}"
  college: "Trained and honestly evaluated a text classifier on a corpus of my own writing"
  freelance: "Builds text classification pipelines with measured accuracy — recent: {project_name} ({url})"
---

## Brief

Train a classifier on text you already own: your notes, journal
entries, essays, saved snippets, or drafts, sorted into categories
you actually use. Label a few hundred pieces by hand, build a
keyword-rule baseline, then train a simple bag-of-words model and see
whether it beats the rules on text it never saw. The deliverable is
the evaluation: a confusion matrix, real failure cases, and a demo
script that classifies fresh text.

## Personalize

- **Your corpus.** Text you wrote or legitimately own: notes app
  exports, school essays, journal entries, a blog. No scraping other
  people's writing, and if any document quotes someone privately,
  leave it out.
- **Your categories.** Three to six labels you would actually use to
  organize this text (school, ideas, todo, personal). If you cannot
  label a document in five seconds, the category set needs work
  before the model does.
- **Your baseline.** Majority class plus a handful of keyword rules
  you write yourself ("contains 'homework' means school"). Rules are
  surprisingly strong on personal text; the model must beat them to
  matter.

## Milestones

1. Export the corpus and clean it: one document per row, junk and
   duplicates removed, every removal decision noted.
2. Define the label set in the README with one example document per
   label.
3. Hand-label at least 200 documents. Log the ones you hesitated on;
   they will explain your errors later.
4. Split by time: newest 25 percent is the test set, untouched until
   evaluation. Note in the README why a random split would flatter
   the model (your topics cluster in time).
5. Compute the majority-class number on the test set, then write and
   score your keyword rules on it.
6. Train the model (bag-of-words with naive Bayes or logistic
   regression) on the training portion only.
7. Evaluate on the test set: overall accuracy plus a confusion
   matrix, next to the two baselines.
8. Read ten misclassified documents and write what went wrong in
   each: ambiguous label, vocabulary the model never saw, or a
   genuinely hard case.
9. Ship the demo: a script or tiny page that takes fresh text and
   prints the predicted label with its confidence.
10. Write the honest summary: the numbers, whether the rules were
    beaten, and what breaks first as your writing changes.

## Done means

- At least 200 hand-labeled documents from a corpus you own, with
  cleaning and labeling decisions documented
- Test set separated by time and untouched during development, with
  the reasoning written down
- Accuracy reported next to the majority-class and keyword-rule
  baselines on the same test set
- Confusion matrix published, plus ten failure cases with your
  explanation of each
- Working demo that classifies text written after training
- The write-up claims only what the test set supports, and says so
  if the rules won
