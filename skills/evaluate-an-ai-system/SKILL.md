---
name: evaluate-an-ai-system
category: data
description: Evaluate an AI feature against versioned cases, a baseline, failure slices, and human judgment before deciding to release it. Measure usefulness, safety, latency, and cost without hiding trade-offs in one score. Use when prompts, models, tools, or retrieval changes need repeatable evidence.
---

# evaluate-an-ai-system

Build a release decision around representative work, not a few favorable demos. Keep the evaluation
small enough to run often, rich enough to expose important failures, and versioned so improvements
can be distinguished from a changing test.

## When to use

Use this skill before shipping or changing an AI assistant, classifier, extraction system, retrieval
feature, agent workflow, or model-backed decision aid. Use it when two versions feel different but the
team cannot explain whether users are better served.

Do not place private user data, copyrighted corpora without permission, or unsafe content into an
evaluation set casually. Do not let an automatic judge make the final decision for high-impact work.

## Preconditions

- Name the user task, release owner, risk owner, intended users, and decisions the system may influence.
- Collect allowed examples from real task shapes and document how sensitive fields are removed or protected.
- Record the current production or manual process as the baseline.
- Define unacceptable failures and the person authorized to decide borderline cases.

## Procedure

1. Break the user task into capabilities and failure slices: common, rare, ambiguous, adversarial,
   multilingual, long-context, missing-data, tool-failure, and safety-sensitive cases where relevant.
2. Build a versioned evaluation set with input, permitted context, expected properties, risk tag, and source.
   Keep a held-out portion away from day-to-day prompt tuning.
3. Define several measures rather than one total: task success, factual support, instruction adherence,
   safety, calibration, latency, and cost. State which measures are blocking.
4. Run the baseline and candidate with fixed configuration, tool versions, retrieval snapshot, and random seed
   where supported. Store raw outputs and execution metadata.
5. Use deterministic checks for exact properties. Use rubric-based human review for quality that requires
   judgment. Blind reviewers to system version when practical.
6. Calibrate any model-based judge against human decisions and report disagreements. Never treat judge output
   as ground truth merely because it is numeric.
7. Report overall results and failure slices. Averages must not conceal a serious regression for one group or task.
8. Inspect changed cases and classify the reason: prompt, model, retrieval, tool, data, policy, or evaluator noise.
9. Run repeat trials for unstable cases and show variance, latency distribution, and cost distribution.
10. Make the release decision from written thresholds and residual risks. Record rollback or feature-disable conditions.
11. Add new production failures to a protected regression set after privacy review.

## Failure plan

Assume the evaluation is misleading because cases leaked into tuning, the judge is biased, the dataset shifted,
or the production tools differ. Keep raw outputs, configuration, and reviewer notes so the result can be audited.
If a blocking safety or correctness slice regresses, stop release or restrict the feature until a human owner
accepts the residual risk and a disable path is tested.

## Done

- Versioned cases cover the critical capabilities, unacceptable failures, and named failure slices
- A scorecard compares candidate and baseline across quality, safety, latency, cost, and variance
- Human review is calibrated, blinded where practical, and recorded for judgment-dependent cases
- A release decision states thresholds, regressions, residual risks, owner, and disable condition
- Raw outputs, configuration, retrieval snapshot, tools, and evaluator versions make the run reproducible

Then use train-a-model for model development or design-observability to watch the released system.
