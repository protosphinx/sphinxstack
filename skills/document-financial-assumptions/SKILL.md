---
name: document-financial-assumptions
category: data
description: Document financial assumptions with ownership, evidence, units, scenarios, dependencies, and review triggers. Use when a budget, forecast, valuation, pricing case, or investment decision depends on uncertain inputs.
---

# document-financial-assumptions

Turn hidden model choices into reviewable, time-bounded records.

## When to use

- Use when a financial model includes estimates about price, volume, timing, retention, cost, financing, tax, or market conditions.
- Do not present an assumption as a verified fact or reuse it after its review date without confirmation.

## Procedure

1. Assign each assumption a stable identifier and plain-language claim.
2. Record the model, cells or fields affected, owner, approver, creation date, review date, and expiry or replacement trigger.
3. State units, currency, period, geography, entity, and whether the value is nominal, real, gross, or net.
4. Link the best available evidence and distinguish observed history, contract terms, external estimates, and management judgment.
5. Record rationale, confidence, known limitations, dependencies, and what would invalidate the assumption.
6. Define base, downside, and upside values using scenario-specific reasoning.
7. Calculate or describe sensitivity of important outputs to a reasonable range.
8. Check assumptions for internal conflicts, double counting, circularity, and unsupported precision.
9. Review material assumptions with authorized finance and operational owners and log changes.

## Worked example

A budget assumes 20% customer growth, stable service cost, and a price increase in April. The register ties growth to pipeline evidence, separates the uncertain price date from the signed price amount, and notes that higher usage increases hosting cost. Downside and upside cases use different conversion and timing logic. A monthly trigger requires review if actual conversion differs by five percentage points.

## Done

- An assumption register records stable IDs, values, units, scenarios, evidence, owners, approvals, dependencies, sensitivity, and review triggers
- Every material assumption is linked to the model and checked for conflicts, expired evidence, unsupported precision, and scenario consistency
