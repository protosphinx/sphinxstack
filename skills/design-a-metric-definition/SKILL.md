---
name: design-a-metric-definition
category: data
description: Design a governed metric definition with business meaning, population, event timing, formula, dimensions, sources, quality, ownership, and change history. Use when teams need one reproducible interpretation of a reported measure.
---

# design-a-metric-definition

Define the decision and population before writing the query.

## When to use

- Use for key performance indicators, operational measures, experiments, finance, risk, or product analytics.
- Do not reuse one metric name for materially different populations or formulas.

## Procedure

1. State the decision, question, audience, owner, cadence, and limitations.
2. Define entity, population, inclusion, exclusion, unit, event, numerator, denominator, and valid states.
3. Specify event time, processing time, timezone, attribution window, cohort, period, late data, and restatement.
4. Define dimensions, allowable filters, aggregation, weighting, nulls, duplicates, currency, precision, and privacy thresholds.
5. Map sources, stable fields, transformations, lineage, quality rules, and authoritative implementation.
6. Provide worked synthetic examples and edge cases whose expected results are independently reviewed.
7. Reconcile the implementation across query, semantic layer, API, dashboard, and reports.
8. Version changes, assess historical comparability, communicate breaks, and monitor drift.

## Done

- A metric specification records purpose, population, formula, time, dimensions, sources, lineage, quality, owner, examples, and version
- Edge-case, denominator, timing, source, cross-surface, historical, privacy, and reproducibility checks verify the definition
