---
name: monitor-a-background-queue
category: data
description: Monitor an asynchronous queue through work age, throughput, failures, retries, dead letters, and business completion. Use when queued work can stall, duplicate, expire, or fall behind user expectations.
---

# monitor-a-background-queue

Monitor whether important work finishes on time, not only whether consumers are running.

## Procedure

1. Define queue classes, deadlines, priorities, owners, and user-visible effects.
2. Measure arrivals, successes, failures, retries, oldest age, percentile age, and dead letters.
3. Track consumer availability, concurrency, processing time, leases, heartbeats, and dependency state.
4. Correlate jobs to source records and business completion without high-cardinality labels.
5. Detect stuck, repeatedly retried, poison, orphaned, and expired work.
6. Alert on age and objective risk before raw depth unless depth directly predicts harm.
7. Provide dashboards and runbooks for scale, pause, drain, replay, and dead-letter handling.
8. Test consumer loss, dependency outage, partial completion, duplicate delivery, and recovery.
9. Reconcile broker, worker, dead-letter, and source-system counts.

## Guardrails

- A low queue depth can hide stuck old work.
- Do not automatically replay dead letters before fixing or isolating the cause.
- Avoid payload content and user IDs as metric labels.

## Done

- A queue monitoring dashboard and alert plan are published
- Failure and recovery scenarios are tested
- Broker, worker, dead-letter, and business records reconcile
