---
name: analyze-product-margin
category: money
description: Analyze product margin from reconciled net revenue and explicit direct, variable, and allocated cost rules across useful dimensions. Use when evaluating pricing, mix, channel, customer, region, or product economics.
---

# analyze-product-margin

Show how allocation choices change the answer instead of presenting arbitrary precision.

## When to use

- Use for portfolio, pricing, cost, or go-to-market decisions.
- Define whether the question concerns contribution, gross, incremental, or fully allocated margin.

## Procedure

1. Set period, products, entities, channels, regions, customers, currencies, and margin definition.
2. Reconcile gross billings through discounts, rebates, credits, returns, refunds, taxes, and timing to net revenue in the ledger.
3. Map units, orders, usage, contracts, and customer cohorts with stable product identifiers.
4. Classify costs as directly traceable, variable, step-fixed, committed, shared, or excluded.
5. Assign direct materials, labor, fulfillment, hosting, transaction, support, warranty, content, royalty, and channel costs from governed sources.
6. Allocate shared costs only when the decision requires it, using documented causal drivers and a reconciliation to total costs.
7. Calculate absolute, percentage, per-unit, per-customer, and incremental margins across product, plan, cohort, region, channel, and customer.
8. Test volume, price, mix, discount, return, utilization, exchange rate, and allocation-driver sensitivities.
9. Investigate negative, implausible, or discontinuous margins and distinguish data defects from real economics.
10. Document limitations, unallocated costs, decision implications, and owners for corrective action.

## Done

- A margin model records reconciled revenue, cost classification, allocation rules, dimensional results, sensitivities, and limitations
- Ledger, unit, product-ID, allocation, currency, and scenario checks verify totals and expose how assumptions affect conclusions
