---
name: validate-financial-model-inputs
category: data
description: Validate financial-model inputs for source, units, freshness, range, consistency, and scenario use before relying on model outputs. Use when reviewing forecasts, valuations, budgets, pricing, or cash-flow models.
---

# validate-financial-model-inputs

Separate observed values from assumptions and make every input traceable.

## When to use

- Use before approving or updating a spreadsheet, database, script, or planning model.
- Do not silently replace an input because it looks implausible; preserve the supplied value and flag it.

## Procedure

1. Inventory each input with name, model location, source, owner, as-of date, unit, currency, period, and update frequency.
2. Classify it as historical actual, contractual value, policy choice, external estimate, management assumption, or formula output.
3. Trace historical inputs to approved records and reconcile totals to source reports.
4. Check units, signs, percentages, currencies, tax basis, annual-versus-monthly rates, and nominal-versus-real values.
5. Test missing values, duplicates, stale dates, broken links, hard-coded formula cells, and inconsistent scenario references.
6. Compare values with credible historical ranges, contracts, or current official sources and document exceptions.
7. Define base, downside, and upside values with rationale rather than mechanically applying the same percentage.
8. Test boundary values and ensure validation rules do not block legitimate zeros or negative amounts.
9. Obtain approval for material assumptions and preserve the prior version for comparison.

## Worked example

A cash model shows a six-month runway. Validation finds that annual churn was entered in a monthly field and payroll tax was hard-coded at zero in the downside case. Correcting the unit and linking all scenarios reduces the downside runway to three months. The validation report preserves the original values, source evidence, approvals, and output impact.

## Done

- An input-validation report records classification, lineage, units, dates, range checks, scenarios, approvals, and output impact
- Source totals reconcile and all stale, missing, inconsistent, hard-coded, or unapproved inputs are listed with an owner
