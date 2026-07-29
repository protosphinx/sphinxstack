---
name: implement-idempotency
category: code
description: Implement idempotency for retried operations using stable request identity, atomic outcome storage, conflict rules, expiry, and recovery tests. Use when duplicate execution could create repeated side effects.
---

# implement-idempotency

Return the same committed outcome without repeating the side effect.

## When to use

- Use for payments, orders, provisioning, notifications, jobs, webhooks, or mutations retried across failures.
- Do not derive keys from timestamps or reuse one key for semantically different requests.

## Procedure

1. Define the operation boundary, side effects, caller identity, duplicate window, and committed outcome.
2. Choose a client or server key scoped to tenant, operation, and normalized request.
3. Store key, request fingerprint, processing state, result, and expiry in an atomic durable record.
4. Claim new work atomically and reject the same key with a conflicting fingerprint.
5. Return the recorded result for completed duplicates and a defined response for in-progress work.
6. Coordinate external effects with transactions, outbox, provider idempotency, or reconciliation.
7. Define crash recovery, stale processing, retention, cleanup, and replay-safe observability.
8. Test simultaneous duplicates and failures before, during, and after every effect.

## Done

- An idempotency model records key scope, fingerprint, states, result, expiry, conflict, and recovery behavior
- Concurrency and fault-injection tests prove one logical effect and stable duplicate responses
