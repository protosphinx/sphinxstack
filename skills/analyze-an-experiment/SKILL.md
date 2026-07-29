---
name: analyze-an-experiment
category: data
description: Audit and analyze a controlled product or business experiment, quantify uncertainty and guardrails, inspect segment risks, and write a decision-ready result. Use when someone asks whether an A/B test won, needs experiment results interpreted, or must decide whether to ship a tested change.
---

# analyze-an-experiment

Evaluate whether the experiment supports a decision, not whether one number crossed a convenient line.
Preserve the original plan, assignment integrity, uncertainty, and counterevidence.

## Inputs

- Obtain the pre-registered hypothesis, primary metric, guardrails, sample plan, stop rule, and analysis owner.
- Gather assignment logs, exposure data, metric definitions, exclusions, dates, and known incidents.
- Confirm the decision options that were written before results were viewed.

## Procedure

1. Restate the hypothesis, treatment, eligible population, unit of assignment, primary outcome, minimum
   meaningful effect, and planned decision rule.
2. Check experiment integrity before outcome analysis: allocation ratio, unique assignment, exposure,
   cross-over, missing data, instrumentation changes, sample-ratio mismatch, and concurrent launches.
3. Reproduce population and metric counts from raw or auditable source data. Reconcile them with the
   dashboard and explain differences.
4. Report absolute values, absolute change, relative change, uncertainty interval, sample size, and
   observation window. Use the analysis method specified in the plan.
5. Evaluate guardrails and known harms with the same care as the primary metric. A gain that violates a
   blocking guardrail is not a clean win.
6. Inspect planned segments for materially different effects. Treat unplanned cuts as exploratory and
   account for repeated comparisons.
7. Check novelty, day-of-week, seasonality, network effects, and whether the measurement window captures
   the intended outcome.
8. Run sensitivity checks on reasonable definitions and exclusions. Flag a conclusion that depends on one
   arbitrary choice.
9. Write the result as ship, do not ship, continue, or inconclusive using the pre-set decision rule.
10. Record limitations, follow-up questions, and the next decision without rewriting the original hypothesis.

## Boundaries

Do not peek repeatedly and stop on a favorable result unless the design supports sequential analysis.
Do not hide negative guardrails, redefine the primary metric after seeing results, or present correlation
from a broken assignment as causal evidence. Protect small or sensitive segments.

## Done

- An integrity report covers assignment, exposure, missingness, sample ratio, incidents, and exclusions
- A result table shows absolute outcomes, effect, uncertainty, sample, window, and all guardrails
- Planned and exploratory analyses are clearly separated, with sensitivity checks retained
- A decision memo states ship, stop, continue, or inconclusive and cites the pre-written rule and residual risk

Then use define-product-metrics to repair ambiguous measures or launch-a-product for a controlled rollout.
