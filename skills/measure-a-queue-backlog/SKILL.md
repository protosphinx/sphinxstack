---
name: measure-a-queue-backlog
category: data
description: Measure queue backlog through work count, age, arrival, completion, retry, and capacity signals. Use when asynchronous processing may be delayed or unable to catch up.
---

# measure-a-queue-backlog

Age and drain capacity usually reveal more than a single approximate message count.

## Procedure

1. Define the queue, work types, delivery behavior, priority, and user-facing deadline.
2. Capture ready, delayed, in-flight, retried, and dead-letter counts.
3. Measure oldest and percentile age from original enqueue time.
4. Calculate arrival, successful completion, failure, retry, and net growth rates.
5. Segment by safe work class, tenant tier, priority, and consumer pool where useful.
6. Compare backlog with concurrency, processing time, dependency health, and capacity limits.
7. Estimate drain time under current and credible restored throughput.
8. Save a backlog report with uncertainty, impact, and the next capacity action.

## Guardrails

- Broker counts may be approximate and should not be treated as exact inventory.
- Retries can inflate throughput while no business work completes.
- Do not expose sensitive payload attributes as metric labels.

## Done

- A backlog report records count, age, rates, and estimated drain time
- Broker values are verified against consumer and business outcomes
- Retry and dead-letter work are reconciled separately
