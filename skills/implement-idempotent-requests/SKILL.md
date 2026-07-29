---
name: implement-idempotent-requests
category: code
description: Implement idempotent write requests that survive client retries, timeouts, concurrency, and process failure. Use when repeating an operation must not duplicate its business effect.
---

# implement-idempotent-requests

Bind one caller intent to one durable outcome, including a stable replayed response.

## Procedure

1. Define the operation's business effect, duplicate risk, and the point at which it becomes committed.
2. Require a high-entropy idempotency key scoped to principal, tenant, endpoint, and operation class.
3. Fingerprint the normalized request so reuse with different input becomes a conflict.
4. Atomically reserve a new key and distinguish new, in-progress, completed, expired, and conflicting states.
5. Commit the business mutation and durable result in one transaction or a recoverable state machine.
6. Return the recorded status and body for a matching completed request.
7. Define bounded waiting or retry guidance for an in-progress request.
8. Retain keys for at least the credible retry window and expire them through a documented policy.
9. Reconcile abandoned reservations and ambiguous downstream outcomes before allowing new effects.
10. Test parallel duplicates, timeout-after-commit, crash points, changed payloads, expiry, and multi-instance execution.

## Guardrails

- Do not rely on an in-memory lock in a horizontally scaled service.
- Never silently accept the same key for a materially different request.
- Avoid expiring evidence before clients and downstream systems can finish credible retries.

## Done

- Key scope, request fingerprint, state machine, and retention are documented
- Concurrency and crash-point tests prove one business effect
- Idempotency records reconcile with mutations and replayed responses
