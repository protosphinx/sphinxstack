---
name: forecast-subscription-revenue
category: money
description: Forecast subscription revenue through contract and cohort drivers while separating bookings, billings, revenue, deferred balances, and cash. Use when planning recurring, seat-based, tiered, or usage-linked subscription economics.
---

# forecast-subscription-revenue

Model customer-state transitions and contract timing, not a single growth percentage.

## When to use

- Use for annual recurring revenue, revenue, billings, deferred revenue, collections, and capacity planning.
- Keep nonrecurring services and usage components explicit.
- Do not present pipeline, bookings, billings, revenue, and cash as interchangeable measures.

## Procedure

1. Define entities, currencies, products, contract population, cohort grain, horizon, accounting basis, and forecast cadence.
2. Reconcile opening customers, contracts, seats, usage, bookings, billings, receivables, deferred balances, revenue, and cash.
3. Model new sales by pipeline stage, sales cycle, start date, term, price, discount, ramp, seats, and usage.
4. Model renewal, churn, contraction, expansion, pause, delinquency, downgrade, upgrade, and reactivation by cohort.
5. Apply contract billing schedules, free periods, credits, refunds, price changes, and collection timing.
6. Translate contract activity separately into bookings, recurring metrics, invoices, revenue schedules, receivables, deferred revenue, and cash.
7. Model foreign exchange, taxes, channel shares, and usage uncertainty without mixing them into customer counts.
8. Produce base, downside, upside, and capacity-constrained scenarios with coherent cohort assumptions.
9. Backtest customer, timing, price, churn, and expansion drivers against actuals and explain error.
10. Version inputs, obtain commercial and finance approval, and reconcile every refresh to the controlled actuals.

## Done

- A cohort forecast records opening state, customer transitions, contract terms, billing, recognition, collection, scenarios, and assumptions
- Customer, contract, cohort, deferred-revenue, cash, currency, and backtest checks verify the forecast against actuals
