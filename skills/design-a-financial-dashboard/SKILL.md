---
name: design-a-financial-dashboard
category: data
description: Design a financial dashboard with decision-focused measures, reconciled sources, governed definitions, freshness, drill-down, and access controls. Use when leaders need recurring visibility into performance, cash, or forecast risk.
---

# design-a-financial-dashboard

Start with decisions and control totals, then choose charts.

## When to use

- Use for management reporting, finance operations, cash monitoring, budget control, or unit economics.
- Do not display sensitive account, payroll, customer, or supplier details beyond each viewer's permission.

## Preconditions

- Identify audience, decisions, reporting cadence, source owners, access roles, materiality, and approved financial definitions.
- Obtain reconciled source reports and current data contracts.

## Procedure

1. Write the questions and actions each dashboard view must support.
2. Define every measure with formula, grain, period, currency, exclusions, owner, and source.
3. Include a compact set of income, cash, working-capital, forecast, and operational measures appropriate to the decisions.
4. Present actual, budget, forecast, and prior-period comparisons using consistent mappings.
5. Design variance and driver views that separate price, volume, mix, timing, and one-time effects.
6. Add drill-down from summary to authorized source detail and preserve filter context.
7. Show data freshness, close status, estimates, missing feeds, restatements, and unresolved reconciliation differences.
8. Use accessible labels, scales, color, precision, and empty states; never rely on red and green alone.
9. Test totals, filters, currencies, dates, exports, role access, mobile layout, and performance before release.
10. Establish definition change control and periodic usage review.

## Worked example

A cash dashboard shows a sharp improvement because one entity failed to refresh. The redesigned view displays feed freshness and entity coverage beside the total, blocks the consolidated trend when a material feed is missing, and lets authorized users trace the remaining amount to reconciled bank and ledger balances.

## Done

- A dashboard specification records decisions, governed measures, sources, comparisons, drill paths, freshness, accessibility, and access roles
- Released views are tested against control totals, filters, currencies, dates, missing-data states, exports, and authorized source detail
