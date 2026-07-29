---
name: create-a-bid-evaluation-matrix
category: data
description: Build a weighted matrix that compares supplier bids against approved requirements and evidence. Use when evaluators need a consistent, explainable scoring instrument before opening proposals.
---

# create-a-bid-evaluation-matrix

## Procedure

1. Import the approved requirements, mandatory gates, evaluation criteria, and decision authority.
2. Define each criterion in plain language with a weight, evidence request, and scoring anchor.
3. Separate pass-fail compliance from scored quality and price.
4. Add fields for evaluator rationale, confidence, clarification, exception, and conflict disclosure.
5. Normalize price and cost calculations without hiding lifecycle assumptions.
6. Test the matrix on synthetic responses at the strong, weak, incomplete, and noncompliant boundaries.
7. Calibrate evaluators using the same sample before live scoring.
8. Lock the matrix version before proposals are opened and record approved changes.

## Guardrails

- Do not change weights to favor a known bidder after seeing submissions.
- Never average away a failed mandatory requirement.
- Keep commercially sensitive bids and evaluator conflicts access-controlled.

## Done

- A versioned evaluation model and matrix trace every gate and score to an approved requirement
- Scoring anchors, weights, formulas, and clarification fields pass a calibration check
- Approval, access, conflicts, and subsequent changes are recorded
