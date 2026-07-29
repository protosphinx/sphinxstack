---
name: test-a-zero-downtime-deploy
category: code
description: Test a zero-downtime deploy across mixed versions, readiness, drain, schema compatibility, sessions, jobs, traffic, rollback, and user outcomes. Use when a release promises uninterrupted service.
---
# test-a-zero-downtime-deploy
## When to use
- Use in production-shaped staging and a bounded canary.
- Do not equate successful process replacement with uninterrupted user journeys.
## Procedure
1. Define critical journeys, availability, error, latency, and data-integrity gates.
2. Verify old-new API, event, schema, cache, session, and job compatibility.
3. Generate steady traffic through rollout, drain, startup, and termination.
4. Track requests, streams, transactions, jobs, and side effects across instances.
5. Test node loss, slow startup, failed readiness, partial rollout, and rollback.
6. Reconcile user outcomes and data before declaring success.
## Failure plan
- Stop and roll back when mixed-version or user-journey evidence fails.
## Worked example
HTTP stays green while long-lived uploads reset during drain, disproving zero downtime.
## Done
- A deploy test report records journeys, versions, traffic, readiness, drain, schema, sessions, jobs, rollback, and outcomes
- Mixed-version, stream, transaction, side-effect, node, readiness, rollback, and reconciliation tests verify continuity
