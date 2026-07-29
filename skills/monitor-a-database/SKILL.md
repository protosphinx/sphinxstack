---
name: monitor-a-database
category: data
description: Monitor a database across workload, latency, errors, locks, connections, storage, replication, and recovery capacity. Use when a production datastore needs actionable health and saturation evidence.
---

# monitor-a-database

Connect database internals to application outcomes while preserving enough headroom for failure and recovery.

## Procedure

1. Define database role, critical operations, objectives, topology, ownership, and recovery commitments.
2. Measure query demand, latency distributions, errors, transactions, rows, and resource saturation.
3. Track connections, pools, waits, locks, deadlocks, memory, CPU, I/O, cache, and temporary work.
4. Monitor storage growth, maintenance, statistics, backups, restore evidence, and transaction-log retention.
5. For replicas, measure apply lag, replay health, conflicts, failover readiness, and read-consistency expectations.
6. Correlate slow or failed operations with normalized query class and application deployment.
7. Define actionable thresholds from objectives and capacity limits rather than vendor defaults.
8. Build views for user outcome, workload, contention, storage, replication, and recovery.
9. Rehearse overload, connection exhaustion, replica loss, storage pressure, and telemetry gaps.
10. Review capacity and alert quality on a schedule.

## Guardrails

- Do not export raw query literals or sensitive table values into broad telemetry.
- A replica process running does not prove data is current.
- Monitoring is incomplete without tested backup and restore evidence.

## Done

- A database monitoring dashboard and capacity report are published
- Overload, replication, and recovery signals are tested
- Database and application outcomes are reconciled for representative events
