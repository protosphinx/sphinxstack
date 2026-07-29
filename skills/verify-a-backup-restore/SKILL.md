---
name: verify-a-backup-restore
category: code
description: Prove that backups can restore a usable, internally consistent, and operationally recoverable system under time pressure. Use when validating database, object, configuration, secret, or full-system backup recovery for production risk.
---

# verify-a-backup-restore

A successful backup job is not recovery evidence. Restore selected artifacts into isolation and verify the
result through data and user-facing behavior.

## When to use

- Use for scheduled recovery exercises, release readiness, platform changes, audit evidence, or suspected backup gaps.
- Cover the coordinated set of data, configuration, identities, secrets, and artifacts required for a usable service.
- Use ordinary file recovery only when system consistency and operational dependencies are not involved.

## Preconditions

- Obtain authorization, an isolated target, restoration credentials, safe network rules, and a cleanup owner.
- Gather backup policy, inventory, retention, encryption, keys, expected recovery point, schemas, and validation queries.
- Define success, time budget, data-loss tolerance, sensitive-data handling, and abort conditions.

## Procedure

1. Select backups by policy rather than convenience, including a recent point and a meaningful older point.
2. Verify inventory, timestamps, immutability, encryption, checksums, retention, and key availability.
3. Provision an isolated target from documented infrastructure and access paths.
4. Restore in dependency order while recording commands, durations, warnings, errors, and operator decisions.
5. Apply required logs, increments, configuration, secrets, indexes, and application versions.
6. Reconcile counts, aggregates, relationships, checksums, permissions, timestamps, and business invariants.
7. Run representative reads, writes, jobs, integrations, authentication, and critical user journeys.
8. Test restart, handoff, observability, backup resumption, and cleanup without connecting unintended external effects.
9. Compare observed recovery point and time with objectives.
10. Destroy or secure the restored environment and track every gap to closure.

## Failure plan

- Stop if restoration could overwrite an authoritative system, send external messages, or expose protected data.
- Preserve the failed restore and transcript when safe; do not quietly switch to a different backup.
- Escalate missing keys, corrupt chains, inconsistent data, excessive time, or undocumented steps as recovery failures.
- Keep original backups immutable and verify any cleanup of restored sensitive data.

## Done

- A backup inventory identifies selected points, checksums, encryption, keys, retention, and expected recovery point
- A restore transcript records exact artifacts, commands, timings, warnings, failures, and decisions
- A reconciliation report verifies data invariants, permissions, application behavior, and critical user journeys
- Observed recovery time and data loss meet objectives or the shortfall has an owner and tested remediation
