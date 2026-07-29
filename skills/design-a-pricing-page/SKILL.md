---
name: design-a-pricing-page
category: design
description: Design a pricing page that makes plan scope, units, totals, limits, recurring terms, taxes, and comparison understandable. Use when customers must choose or estimate the cost of a product or service.
---

# design-a-pricing-page

Show the cost model before optimizing the card layout.

## When to use

- Use for subscriptions, usage pricing, tiers, add-ons, seat models, trials, and enterprise paths.
- Do not hide unavoidable fees, renewal terms, material limits, or a selected billing period.

## Procedure

1. Define audience, plans, currency, billing period, unit, seats, usage, minimums, overages, taxes, discounts, trial, renewal, and cancellation.
2. Write one authoritative pricing model and map every displayed number to it.
3. Lead with who each plan fits, key included value, actual price basis, and important limits.
4. Make monthly, annual, per-seat, per-unit, estimated, and starting-at language explicit.
5. Provide a comparison that supports keyboard, screen reader, zoom, narrow screens, and long localization.
6. Explain enterprise, free, trial, upgrade, downgrade, cancellation, refund, and support paths.
7. Design loading, unavailable region, changed price, tax estimate, eligibility, and stale quote states.
8. Test realistic quantities, boundary usage, multiple currencies, rounding, discounts, mobile, and checkout handoff.
9. Reconcile page, calculator, checkout, contract, invoice, and renewal outputs before release.

## Failure plan

- If a total cannot be computed, identify the missing input and show a bounded estimate or contact path without presenting it as final.
- If pricing changes, version the effective date and preserve active-customer terms correctly.

## Done

- A pricing specification records plans, units, formulas, terms, limits, states, localization, and authoritative sources
- Calculation, comprehension, accessibility, and checkout tests verify displayed claims and totals across representative scenarios
