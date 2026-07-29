---
name: design-service-metrics
category: data
description: Design a compact service metric set for demand, errors, duration, saturation, dependencies, and completed outcomes. Use when teams need actionable measurement without uncontrolled telemetry growth.
---

# design-service-metrics

Begin with decisions and failure modes, then choose the smallest stable dimensions that answer them.

## Procedure

1. Define the service boundary, users, critical outcomes, objectives, and decisions.
2. Map request, job, stream, cache, storage, and dependency paths.
3. Choose counters, gauges, and histograms with explicit units and aggregation semantics.
4. Cover demand, success, error class, duration, concurrency, queue age, saturation, and business completion.
5. Keep label values bounded and document allowed sets and ownership.
6. Select histogram boundaries from objectives and observed distributions.
7. Define reset, missing, delayed, partial, and version-transition behavior.
8. Write canonical queries and dashboard or alert consumers.
9. Test emitted series across normal, failed, idle, overloaded, and deploy states.
10. Review usefulness, cost, and unused series after production observation.

## Guardrails

- Do not encode arbitrary identifiers or error messages in labels.
- A proxy metric must not be presented as the user outcome it only approximates.
- Preserve unit and semantic compatibility when changing an existing name.

## Done

- A metric catalog documents type, unit, labels, owner, and consumer
- Normal and failure-state series are tested
- Metric totals reconcile with logs or business records
