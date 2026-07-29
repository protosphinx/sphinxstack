---
name: instrument-an-application
category: code
description: Instrument an application with bounded logs, metrics, and traces tied to service outcomes and diagnostic questions. Use when operators cannot explain demand, failure, latency, or saturation reliably.
---

# instrument-an-application

Capture enough structured context to make decisions without exporting every event or sensitive value.

## Procedure

1. Define critical journeys, service objectives, failure modes, and operator questions.
2. Inventory existing logs, metrics, traces, events, gaps, cost, and sensitive fields.
3. Specify stable event names, metric units and labels, span boundaries, and resource attributes.
4. Propagate safe correlation and trace context across synchronous and asynchronous boundaries.
5. Record demand, error, duration, saturation, dependency, retry, and business-completion signals.
6. Apply redaction, cardinality limits, sampling, retention, and access controls at collection.
7. Emit through nonblocking libraries with bounded buffers and known failure behavior.
8. Add dashboards, alerts, queries, and runbook links that consume the new signals.
9. Test success, failure, retry, timeout, overload, collector outage, and deployment transitions.
10. Reconcile emitted evidence with source operations and remove unused telemetry.

## Guardrails

- Never log secrets, raw credentials, recovery values, or unnecessary payloads.
- Telemetry failure must not usually take down the serving path.
- Avoid user, request, or object identifiers as unbounded metric labels.

## Done

- An instrumentation specification report maps questions to signals and owners
- Failure and collector-outage tests verify application behavior
- Recorded telemetry reconciles with representative source operations
