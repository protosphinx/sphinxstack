---
name: model-unit-economics
category: money
description: Model revenue, variable cost, acquisition cost, contribution, retention, lifetime value, and payback for a defined unit or cohort. Use when testing whether a product, channel, customer segment, or growth plan can become economically sustainable.
---

# model-unit-economics

Define the unit and cost boundary before using summary metrics.

## When to use

- Use for product, customer, order, location, subscriber, or cohort economics and growth planning.
- Do not use a single blended average to make decisions about materially different or protected customer groups.

## Preconditions

- Obtain revenue, discount, refund, service-cost, acquisition-spend, retention, and cohort evidence for a consistent period.
- Agree on accounting treatment, allocation rules, currencies, and the decision the model must support.

## Procedure

1. Define one unit, cohort event, observation window, segment, and conversion of recurring measures into comparable periods.
2. Calculate net revenue after discounts, credits, refunds, taxes, and revenue sharing.
3. Identify variable product, fulfillment, payment, support, infrastructure, and cost-to-serve amounts using a documented boundary.
4. Calculate contribution dollars and margin before introducing acquisition cost.
5. Calculate fully loaded customer acquisition cost by channel, including failed conversion spend and approved labor treatment.
6. Measure retention and churn by cohort; separate customer churn, revenue churn, expansion, contraction, and reactivation.
7. Estimate lifetime value only with explicit survival, margin, discount-rate, and forecast-horizon assumptions.
8. Calculate payback using cohort cash contribution rather than an unsupported steady-state average.
9. Segment results, reconcile source totals, and test price, mix, retention, cost, and acquisition sensitivities.
10. State what is excluded and prevent the model from implying guaranteed future behavior.

## Worked example

A subscription model claims a 5:1 lifetime-value-to-acquisition-cost ratio. Cohort analysis shows that enterprise customers retain longer but require much more onboarding and support. The revised model calculates net contribution by cohort, includes failed acquisition spend, limits the forecast horizon, and reports a 14-month enterprise payback and a 7-month self-serve payback instead of one blended claim.

## Done

- A unit-economics model records unit, cohort, net revenue, cost boundary, contribution, acquisition cost, retention, lifetime-value assumptions, and payback
- Source totals reconcile and scenario outputs are tested for segment mix, timing, exclusions, and material sensitivity
