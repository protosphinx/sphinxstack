---
name: audit-a-serverless-runtime
category: code
description: Audit a serverless runtime for isolation, identity, secrets, networking, lifecycle, concurrency, limits, deployment, observability, and recovery. Use when functions or edge code handle consequential workloads.
---
# audit-a-serverless-runtime
## When to use
- Use for managed functions, edge workers, event handlers, or scheduled runtimes.
- Never assume ephemeral execution eliminates persistence or cross-request state risk.
## Procedure
1. Inventory functions, triggers, regions, identities, bindings, data, versions, and dependencies.
2. Inspect isolation, global state, reuse, concurrency, initialization, and lifecycle.
3. Review permissions, secrets, egress, ingress, tenant binding, and provider control plane.
4. Check limits, timeouts, retries, ordering, idempotency, dead letters, and cost.
5. Trace artifact provenance, promotion, configuration, rollback, and regional consistency.
6. Verify logs, traces, metrics, privacy, incident access, and recovery.
7. Test warm reuse, duplicate event, outage, limit, deploy skew, and data leakage.
## Failure plan
- Quarantine high-risk functions when isolation or replay safety cannot be proven.
## Worked example
A global variable leaks tenant context between warm invocations and is removed before release.
## Done
- A serverless audit report records inventory, isolation, identity, lifecycle, limits, delivery, deployment, telemetry, and findings
- Warm-state, tenant, retry, timeout, permission, secret, region, rollback, and provider-outage tests verify safety
