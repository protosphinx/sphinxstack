---
name: design-a-background-task-runner
category: code
description: Design a background task runner with durable identity, idempotency, scheduling, retries, leases, cancellation, observability, and recovery. Use when work must continue safely outside a request.
---

# design-a-background-task-runner

Assume every task can be delayed, duplicated, interrupted, or retried.

## When to use

- Use for jobs, workflows, scheduled work, imports, exports, notifications, or maintenance.
- Do not put irreversible side effects behind unbounded automatic retries.

## Preconditions

- Define task types, producers, consumers, deadlines, volume, ordering, side effects, recovery, and data boundaries.

## Procedure

1. Specify durable task ID, payload version, tenant, priority, schedule, deadline, and idempotency key.
2. Define enqueue transaction, visibility, lease, heartbeat, concurrency, ordering, and ownership.
3. Make handlers replay-safe and fence external side effects with durable receipts.
4. Classify retryable, terminal, canceled, expired, and poison failures with bounded backoff.
5. Add dead-letter review, redrive authority, compensation, and manual recovery.
6. Design graceful drain, deploy compatibility, schema evolution, and disaster recovery.
7. Instrument queue age, starts, duration, retries, failures, saturation, and outcome.
8. Test crash-before, crash-after, duplicate, timeout, stale lease, poison, cancellation, and recovery.

## Failure plan

- Stop intake or isolate a task type when retries increase harm or obscure state.

## Worked example

An invoice export writes one durable outcome receipt before sending, so a worker crash cannot send the same export twice.

## Done

- A task-runner design document records identity, state, leases, idempotency, retries, cancellation, recovery, deployment, and telemetry
- Duplicate, crash-window, poison, saturation, schema, drain, redrive, and side-effect tests verify the design
