---
name: add-api-rate-limiting
category: code
description: Add API rate limits that protect constrained outcomes while preserving legitimate bursts and recovery. Use when traffic can exhaust capacity, amplify abuse, or unfairly consume a shared service.
---

# add-api-rate-limiting

Limit the scarce operation at the narrowest trustworthy identity and scope.

## Procedure

1. Define the protected resource, abuse case, acceptable burst, sustained rate, and recovery objective.
2. Select trustworthy dimensions such as account, tenant, credential, operation, destination, and network signal.
3. Choose a token bucket, fixed window, sliding window, or concurrency limit from the actual traffic behavior.
4. Store counters atomically across serving instances and define clock and regional consistency assumptions.
5. Return a stable `429` response with safe retry guidance and useful quota headers.
6. Separate authentication, expensive-operation, global safety, and contractual quota layers.
7. Define narrowly owned exemptions, degraded behavior, and fail-open or fail-closed choices.
8. Instrument allowed, limited, delayed, rejected, and exempted requests by policy version.
9. Load-test bursts, sustained use, distributed concurrency, counter outage, and legitimate shared networks.
10. Review false positives and capacity after launch and adjust with evidence.

## Guardrails

- Do not identify a person solely by IP address.
- Avoid an unbounded external counter lookup on the protected request path.
- Never promise an exact quota when the chosen distributed algorithm is intentionally approximate.

## Done

- A versioned limit policy records scope, algorithm, thresholds, and failure mode
- Load and failure tests verify protection and recovery behavior
- Limit decisions reconcile with traffic, capacity, and false-positive metrics
