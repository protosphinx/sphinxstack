---
name: create-a-service-dashboard
category: data
description: Create a service dashboard that moves from user outcome to demand, errors, latency, saturation, and dependencies. Use when responders need a shared operational view for detection and diagnosis.
---

# create-a-service-dashboard

Organize panels by decisions and causal layers rather than by whichever metrics are easiest to graph.

## Procedure

1. Define the dashboard audience, question, service boundary, and time-to-decision.
2. Start with availability, successful outcomes, latency, freshness, and objective status.
3. Add demand, error class, saturation, queues, dependencies, and deployment markers.
4. Use consistent units, time ranges, colors, thresholds, and aggregation.
5. Provide safe filters for environment, region, service, operation, and bounded tenant class.
6. Show missing data and partial coverage distinctly from zero.
7. Link panels to canonical queries, logs, traces, runbooks, ownership, and alert definitions.
8. Test the dashboard against known incidents, idle periods, deploys, and telemetry gaps.
9. Remove redundant or unactionable panels and record change ownership.

## Guardrails

- Do not place secrets or unnecessary personal identifiers in labels or links.
- Avoid red-green status tiles without the underlying magnitude and time context.
- A dashboard is not proof of monitoring coverage unless its sources are tested.

## Done

- A versioned dashboard and panel-source record are published
- Known incidents and missing-data states are tested
- Displayed totals reconcile with canonical queries and service outcomes
