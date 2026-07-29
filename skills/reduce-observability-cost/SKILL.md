---
name: reduce-observability-cost
category: data
description: Reduce observability cost through measured signal value, cardinality, volume, retention, tiering, and query efficiency. Use when telemetry spend is rising without proportional operational benefit.
---

# reduce-observability-cost

Remove waste while preserving service objectives, incident investigation, security, audit, and rare-event coverage.

## Procedure

1. Break cost down by signal, source, service, environment, ingestion, series, retention, query, and egress.
2. Map each high-cost source to owners, consumers, alerts, investigations, obligations, and decisions.
3. Identify duplicate events, debug noise, unbounded labels, oversized payloads, unused fields, and inefficient queries.
4. Protect legally required, security, audit, objective, and rare-failure evidence explicitly.
5. Model drop, aggregation, sampling, compression, tiering, shorter retention, and archive options.
6. Estimate savings, coverage loss, restore time, and failure risk for each change.
7. Replay known incidents and critical queries against the candidate dataset.
8. Stage changes with control cohorts, coverage metrics, and rollback.
9. Measure actual cost, alert behavior, query quality, and responder feedback.
10. Publish budgets, owners, exceptions, and recurring review.

## Guardrails

- Never delete or sample evidence whose retention is legally or contractually required.
- Low query frequency does not mean a signal has low incident value.
- Avoid transferring cost to slower investigations without measuring that tradeoff.

## Done

- A telemetry cost and consumer inventory report is published
- Incident replay and coverage regression tests are verified
- Actual savings and operational outcomes are recorded after rollout
