---
name: implement-distributed-tracing
category: code
description: Implement distributed tracing with interoperable context propagation, useful spans, safe attributes, and measurable sampling. Use when requests cross service or asynchronous boundaries that logs alone cannot reconstruct.
---

# implement-distributed-tracing

Preserve causality across boundaries without allowing untrusted trace context or high-cardinality data to control the system.

## Procedure

1. Map ingress, service, database, external, queue, and worker boundaries for critical journeys.
2. Choose a standard propagation format and define trusted inbound, outbound, and baggage rules.
3. Create server, client, producer, consumer, and internal spans around meaningful operations.
4. Record stable operation, status, duration, dependency, deployment, and bounded business attributes.
5. Validate inbound context and prevent baggage from carrying secrets or controlling authorization.
6. Preserve links for asynchronous, batch, fan-out, and retry relationships where parentage is misleading.
7. Configure head or tail sampling with explicit retention of errors and high-value rare paths.
8. Export through bounded, nonblocking buffers with observable drops and backpressure behavior.
9. Test propagation, broken context, retries, errors, collector outage, clock skew, and sampling.
10. Verify traces against logs, metrics, and known end-to-end requests.

## Guardrails

- Trace IDs and baggage are not trusted identity or authorization input.
- Never attach raw SQL, tokens, payloads, or personal data by default.
- Instrumentation overhead and exporter failure must be measured.

## Done

- A trace-boundary and attribute specification is documented
- Propagation, sampling, failure, and overhead tests are verified
- Representative traces reconcile with logs, metrics, and user outcomes
