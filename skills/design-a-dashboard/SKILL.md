---
name: design-a-dashboard
category: design
description: Design a dashboard around user decisions, trustworthy metrics, comparison context, accessibility, and drill-down paths. Use when several measures must support recurring monitoring or action.
---

# design-a-dashboard

Start with decisions, not available charts.

## When to use

- Use when users repeatedly compare state, trend, target, risk, and required action.
- Use a report or alert instead when no recurring interactive decision exists.

## Procedure

1. Define users, decisions, frequency, time horizon, actions, and consequences of stale or wrong information.
2. Create a metric dictionary with owner, definition, numerator, denominator, unit, time zone, source, freshness, and limitations.
3. Group information by task and progressive detail rather than organizational ownership.
4. Choose visual forms that preserve scale, uncertainty, zero, comparison, and missingness honestly.
5. Show time range, filters, scope, last update, target, anomaly, and data-quality state.
6. Provide drill-down from summary to underlying records or diagnostic views without changing metric meaning.
7. Design loading, empty, partial, error, permission, stale, and export states.
8. Test keyboard, screen reader, zoom, color independence, small screens, long labels, large values, and low data.
9. Validate comprehension and decisions with representative users, then instrument use without collecting unnecessary personal data.

## Failure plan

- If a metric cannot be defined or reconciled, label it unavailable rather than displaying a plausible number.
- If filters change denominators, expose the scope and update every dependent view consistently.

## Done

- A dashboard specification records users, decisions, metrics, definitions, sources, freshness, states, actions, and access rules
- Prototype tests verify comprehension, comparison, drill-down, accessibility, error handling, and metric consistency
