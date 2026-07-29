---
name: design-a-webhook-retry-policy
category: web
description: Design a webhook retry policy with durable delivery identity, bounded backoff, receiver protection, observability, replay, and terminal handling. Use when outbound events must survive timeouts, failures, duplicates, and delayed recovery.
---

# design-a-webhook-retry-policy

Assume receivers will see duplicates and events may arrive out of order.

## When to use

- Use for outbound webhooks, callback delivery, partner events, or internal event gateways.
- Never include secrets or unnecessary personal data in payloads or logs.

## Procedure

1. Define event types, business criticality, recipients, ordering needs, retention, latency, and delivery commitment.
2. Assign immutable event and delivery-attempt IDs, recipient, schema version, creation time, and payload hash.
3. Sign payloads with versioned keys and document timestamp tolerance, replay defense, and rotation.
4. Treat only explicit success codes as delivered. Classify timeout, DNS, TLS, connection, throttling, client, and server responses.
5. Use exponential backoff with jitter, recipient-aware limits, maximum age, attempt cap, and `Retry-After` support.
6. Preserve one durable event while recording every attempt; retries must not regenerate business events.
7. Provide receiver idempotency guidance and avoid assuming delivery order.
8. Route exhausted deliveries to a visible dead-letter state with alert, inspection, authorized replay, and correction.
9. Test timeout-after-success, duplicate success, delayed response, key rotation, schema change, outage, and replay.

## Done

- A webhook delivery policy and state model record identity, signatures, response classes, backoff, limits, terminal states, and ownership
- Failure-injection, duplicate, ordering, key-rotation, dead-letter, authorized-replay, and recipient-load tests verify bounded reliable delivery
