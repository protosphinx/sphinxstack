---
name: implement-audit-logging
category: code
description: Implement trustworthy audit logging for consequential actions, security decisions, and administrative changes. Use when an organization must reconstruct who did what, where, when, and with what result.
---

# implement-audit-logging

Capture decision evidence that is complete enough to investigate while remaining safe enough to retain.

## Procedure

1. Inventory consequential user, administrator, system, data, permission, authentication, and configuration events.
2. Define an event schema with event ID, time, actor, subject, action, target, source, result, reason, and correlation.
3. Record bounded before-and-after fields or change references without copying whole sensitive records.
4. Emit from the authoritative server-side decision or transaction boundary.
5. Protect append, transport, storage, time, access, retention, and deletion against unauthorized alteration.
6. Define behavior when the audit sink is slow or unavailable according to event criticality.
7. Provide indexed queries and an export path for approved investigators.
8. Alert on missing streams, schema failures, sequence gaps, and high-risk event patterns.
9. Test impersonation, bulk actions, failures, retries, time skew, redaction, and sink outage.
10. Reconcile audit events with source transactions and access reviews on a schedule.

## Guardrails

- Never record passwords, session secrets, access tokens, recovery codes, or full sensitive payloads.
- Application debug logs are not automatically an audit trail.
- Restrict audit readers because metadata can itself reveal sensitive behavior.

## Done

- A versioned event catalog, schema, retention plan, and access policy are approved
- Critical actions and sink-failure behavior are tested
- Audit events reconcile with sampled source transactions and alerts
