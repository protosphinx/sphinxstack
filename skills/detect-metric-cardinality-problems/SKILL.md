---
name: detect-metric-cardinality-problems
category: data
description: Detect and contain metric cardinality growth by tracing series creation to unstable label dimensions. Use when telemetry cost, memory, query latency, or ingestion limits rise unexpectedly.
---

# detect-metric-cardinality-problems

Find which label combinations create series and replace unbounded dimensions with safer evidence paths.

## Procedure

1. Confirm the affected backend, time window, series count, ingestion, cost, and service impact.
2. Rank metric names and label keys by active series and growth.
3. Estimate unique values and combinations for each suspected dimension.
4. Trace new values to deployment, route, error, customer, resource, or instrumentation changes.
5. Identify identifiers, URLs, messages, timestamps, and other unbounded label values.
6. Contain growth through drop, normalization, allowlist, aggregation, or instrumentation rollback.
7. Preserve needed debugging detail in sampled logs or traces instead of metric labels.
8. Test dashboards and alerts for semantic regression after the change.
9. Add cardinality budgets, ownership, and growth alerts.
10. Verify active series and cost decay over the backend's retention cycle.

## Guardrails

- Deleting a label can merge series with different meanings.
- Do not expose sensitive identifiers while investigating values.
- Existing series may persist after the source is fixed.

## Done

- A cardinality analysis report identifies metric, label, source, and growth
- Containment and consumer regression tests are verified
- Series count and cost reduction are recorded after retention decay
