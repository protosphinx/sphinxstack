---
name: design-a-data-deletion-workflow
category: data
description: Design a data deletion workflow with verified subject scope, authority, dependency tracing, holds, backups, processors, proof, and restoration controls. Use when data must be erased without deleting the wrong records or leaving active copies.
---
# design-a-data-deletion-workflow
## When to use
- Use for retention, account closure, rights requests, contract end, or remediation.
- Obtain qualified privacy, legal, records, security, and product review.
## Procedure
1. Verify request, subject identity, authority, scope, deadlines, exceptions, and holds.
2. Map source, derived, indexed, cached, exported, analytical, model, backup, log, and processor copies.
3. Separate deletion, anonymization, restriction, retention, and legal-hold decisions.
4. Assign stable deletion operation identity and idempotent per-system tasks.
5. Prevent recreation through ingestion, sync, restore, or stale events.
6. Collect processor acknowledgement and independent active-state checks.
7. Record backup expiry or suppression and customer-safe proof.
## Failure plan
- Stop ambiguous identity or hold conflicts and restrict processing while they resolve.
## Worked example
An account deletion reaches search and analytics but a stale CRM sync would recreate the profile, so source suppression is added.
## Done
- A deletion workflow records request, identity, scope, holds, copies, tasks, processors, suppression, backups, and proof
- Identity, authority, hold, derivative, cache, processor, restore, recreation, idempotency, and closeout tests verify erasure
