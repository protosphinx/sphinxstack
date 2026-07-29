---
name: design-a-database-connection-pool
category: code
description: Design a database connection pool from database capacity, workload concurrency, transaction duration, timeouts, fairness, failover, and observability. Use when services contend for limited database sessions.
---
# design-a-database-connection-pool
## When to use
- Use for application, proxy, worker, or multitenant database access.
- Do not multiply a per-process maximum without fleet-wide capacity math.
## Preconditions
- Measure database limits, instances, replicas, services, concurrency, query duration, transactions, and failover.
## Procedure
1. Allocate a fleet-wide connection budget with reserve for operations and recovery.
2. Size per workload from measured concurrency and service objectives.
3. Define acquire, connect, query, transaction, idle, and lifetime timeouts.
4. Reset session state and prevent leaked transactions or tenant context.
5. Add fairness, backpressure, cancellation, health, and failover handling.
6. Test peak load, slow query, failover, scale-out, leak, and recovery.
## Failure plan
- Shed or queue bounded work before exhausting database control capacity.
## Worked example
Autoscaling doubles instances, so the per-instance pool shrinks to preserve the database-wide budget.
## Done
- A pool design report records capacity, allocation, timeouts, lifecycle, fairness, reset, failover, and telemetry
- Fleet, scale, leak, slow-query, tenant-state, failover, reserve, and recovery tests verify safety
