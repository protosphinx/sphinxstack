---
name: create-a-data-deletion-runbook
category: code
description: Create a safe and verifiable procedure for deleting scoped data across systems. Use when account closure, retention expiry, rights requests, environment cleanup, or product behavior requires controlled deletion and evidence.
---

# create-a-data-deletion-runbook

Define what deletion means across live, derived, cached, indexed, replicated, vendor, and recovery stores. Prefer a repeatable, testable workflow over an ad hoc production query.

## Preconditions

- Confirm requester authority, identity or scope verification, legal holds, retention rules, system owner, deletion authority, and rollback limits.
- Use synthetic or approved test data before production execution.

## Procedure

1. Define the deletion unit, identifiers, relationships, environments, exclusions, and expected residual copies.
2. Map sources of truth, replicas, indexes, caches, object stores, analytics, logs, exports, processors, and backups.
3. Identify referential, financial, audit, security, and shared-record constraints.
4. Specify eligibility checks for authority, identity, holds, retention, pending transactions, and shared ownership.
5. Design an idempotent deletion or irreversible anonymization sequence with bounded batches and rate limits.
6. Add dry-run output, expected counts, approval hold point, monitoring, failure capture, and safe retry behavior.
7. Define treatment for derived data, processor callbacks, backup expiry, and later restores.
8. Test exact match, no match, duplicate identifiers, shared records, partial failure, retry, and restored backup scenarios.
9. Verify through independent queries and user-facing behavior without retaining the deleted content in evidence.
10. Record scope, approvals, counts, exceptions, residual copies, processor confirmations, and completion time.

## Guardrails

- Never bypass a confirmed preservation duty or delete by an unverified user-supplied identifier.
- Do not log deleted values or place them in tickets.
- Stop on unexpectedly broad counts, uncertain relationships, or loss of rollback before the approved irreversible point.
- Do not claim complete deletion while known processors or backups remain; state their governed expiry.

## Done

- Scope and authority are verified
- All data paths and residual-copy behavior are documented
- Failure, retry, restore, and reconciliation tests pass
- Completion evidence proves the process without recreating the data
