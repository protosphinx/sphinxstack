---
name: forecast-a-sales-pipeline
category: money
description: Produce a time-bounded sales forecast from opportunity evidence, historical conversion, scenarios, and uncertainty. Use when estimating bookings or revenue for planning without treating pipeline as guaranteed income.
---

# forecast-a-sales-pipeline

Create a forecast that can be reconciled to a dated pipeline snapshot and later scored against actual outcomes.
Show assumptions and ranges instead of hiding uncertainty in one precise number.

## Inputs

- Gather a dated pipeline export, stage definitions, amounts, currencies, target dates, next actions, and ownership.
- Use historical stage conversion, cycle time, slippage, loss, expansion, and seasonality where comparable.
- Confirm forecast horizon, booking or revenue definition, exchange rates, and finance-approved treatment.

## Procedure

1. Reconcile the source snapshot to the pipeline system and quantify missing or invalid fields.
2. Define the forecast event, horizon, currency, and recognition boundary.
3. Review each material opportunity for stage evidence, amount basis, decision date, dependencies, and recent activity.
4. Remove duplicates and separate renewals, expansions, new business, and non-forecast pipeline.
5. Build a bottom-up expected case using evidence-adjusted probability and timing.
6. Compare it with historical cohort conversion and cycle-time behavior.
7. Create conservative, expected, and upside scenarios with explicit inclusion rules.
8. Test concentration, slippage, capacity, currency, and large-deal sensitivity.
9. Publish the range, key assumptions, opportunity movements, risks, and actions without masking unsupported records.
10. Reconcile forecast to actual results and update the model only from observed error patterns.

## Boundaries

Never present the forecast as booked revenue, a guarantee, or an approved financial statement. Do not inflate
stage, amount, probability, or date to meet a target. Protect customer commercial data and use finance-approved
rules for external reporting.

## Done

- The forecast reconciles to a dated pipeline snapshot and defined financial event
- Opportunity evidence, historical behavior, scenarios, and sensitivities are checked
- Unsupported, concentrated, stale, and slipped pipeline is visible in the report
- Actual results can be compared with the saved forecast and its assumptions
