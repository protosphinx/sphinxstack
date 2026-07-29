---
name: trace-a-request-id
category: code
description: Trace one request identifier across services, queues, retries, and downstream calls to reconstruct its outcome. Use when a distributed operation failed, slowed, duplicated, or became ambiguous.
---

# trace-a-request-id

Follow one bounded operation end to end without assuming every component propagated context correctly.

## Procedure

1. Confirm the identifier type, source, environment, time, and expected user action.
2. Find the ingress record and capture route, caller-safe context, deployment, and instance.
3. Follow parent, child, correlation, job, and downstream request identifiers.
4. Order spans and logs by synchronized time while accounting for retries and asynchronous handoffs.
5. Mark each boundary's input, output, latency, status, and missing evidence.
6. Separate the original attempt from duplicate, hedged, or retry attempts.
7. Compare the path with one successful request of the same operation.
8. Save a request-path report with the supported failure boundary and next check.

## Guardrails

- Request identifiers are search keys, not authorization credentials.
- Do not infer a complete path when context propagation has gaps.
- Redact associated user, token, payload, and URL data before sharing.

## Done

- A chronological request-path report is saved
- Each service and asynchronous handoff is verified or marked missing
- The final outcome reconciles with user-visible and downstream state
