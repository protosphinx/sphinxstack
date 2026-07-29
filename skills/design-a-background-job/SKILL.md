---
name: design-a-background-job
category: code
description: Design a durable background job with explicit payload, ownership, idempotency, retries, deadlines, progress, cancellation, and recovery. Use when work must continue outside an interactive request.
---

# design-a-background-job

Assume delivery can be delayed, duplicated, reordered, or interrupted.

## When to use

- Use for asynchronous processing, imports, exports, notifications, media, billing, cleanup, or scheduled work.
- Do not place secrets or large mutable objects directly in a queue message.

## Procedure

1. Define job trigger, owner, payload contract, version, tenant, priority, deadline, and success outcome.
2. Store durable references and immutable inputs needed to reproduce the work.
3. Design idempotent steps, checkpoints, lease or visibility behavior, and duplicate handling.
4. Classify transient, permanent, input, dependency, cancellation, and expired failures.
5. Set bounded retries, backoff, jitter, timeout, dead-letter, and manual replay rules.
6. Control concurrency, ordering, rate limits, resource use, and downstream backpressure.
7. Expose safe status, progress, cancellation, result, logs, metrics, and alerts.
8. Test crash points, duplicate delivery, worker loss, poison messages, and recovery.

## Done

- A background-job specification records payload, version, idempotency, states, retries, deadlines, resources, and recovery
- Fault tests verify duplicate, crash, timeout, cancellation, dead-letter, replay, and observable outcome behavior
