---
name: build-a-data-quality-scorecard
category: data
description: Build a data-quality scorecard from business-critical datasets, explicit rules, measured dimensions, ownership, thresholds, and issue outcomes. Use when teams need a repeatable view of data fitness rather than isolated defect counts.
---

# build-a-data-quality-scorecard

Score fitness for defined uses, not abstract perfection.

## When to use

- Use for operational, analytical, financial, regulatory, or machine-learning data products.
- Do not hide severe failures inside a favorable blended score.

## Procedure

1. Define datasets, decisions, users, critical fields, service expectations, materiality, and accountable owners.
2. Select measurable dimensions such as completeness, validity, uniqueness, consistency, timeliness, accuracy, and lineage.
3. Write each rule with scope, query, denominator, exclusions, threshold, severity, owner, and evidence.
4. Reconcile evaluated populations and prevent missing data from disappearing from denominators.
5. Calculate raw measures before applying transparent weights or status bands.
6. Show critical failures, trends, affected cohorts, and open issues separately from the aggregate score.
7. Validate rules against known-good and known-bad cases and review false positives.
8. Version rules, thresholds, exceptions, and source changes; link defects to remediation and retest.

## Done

- A quality scorecard and rule register record uses, datasets, dimensions, formulas, denominators, thresholds, owners, trends, and issues
- Population, rule, known-case, critical-failure, exception, trend, and remediation checks verify that scores reflect fitness
