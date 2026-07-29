---
name: build-a-cohort-revenue-analysis
category: data
description: Build a cohort revenue analysis that separates acquisition timing, retention, contraction, expansion, reactivation, and incomplete observation windows. Use when evaluating recurring or repeat-purchase revenue.
---

# build-a-cohort-revenue-analysis

Align customers by a meaningful starting event and preserve calendar-period reconciliation.

## When to use

- Use for subscriptions, marketplaces, repeat purchases, memberships, or service-contract performance.
- Do not infer individual intent or causality from aggregate cohort patterns alone.

## Preconditions

- Define customer identity, cohort event, revenue basis, period grain, currency treatment, and observation horizon.
- Obtain reconciled customer-period revenue and evidence for refunds, credits, migrations, and account merges.

## Procedure

1. Assign each customer to a stable cohort using the approved first-purchase, activation, or contract-start event.
2. Aggregate net revenue by cohort and months or weeks since the cohort event.
3. Separate new, retained, contracted, expanded, churned, and reactivated revenue with explicit formulas.
4. Handle customer merges, plan migrations, pauses, refunds, and zero-revenue periods consistently.
5. Mark incomplete recent cohorts and prevent them from being compared as if fully observed.
6. Calculate revenue retention and cohort curves by relevant segment.
7. Compare acquisition mix, price changes, inflation, currency, seasonality, and product changes.
8. Reconcile cohort revenue back to calendar-period financial totals.
9. Document alternative definitions and sensitivity where identity or cohort rules materially affect results.

## Worked example

Recent cohorts appear to outperform older ones after three months. The analysis reveals that the current quarter is only partially observed and includes a price increase. After marking incomplete periods and separating price from retained volume, the evidence supports better early retention but not the original magnitude of improvement.

## Done

- A cohort model records identity rules, cohort event, net revenue states, observation completeness, segment curves, and definition choices
- Cohort totals reconcile to calendar-period revenue and every merge, migration, currency, pricing, or missing-data exception is listed
