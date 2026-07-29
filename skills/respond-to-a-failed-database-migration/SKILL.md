---
name: respond-to-a-failed-database-migration
category: code
description: Respond to a failed production database migration through write protection, evidence preservation, schema and data reconciliation, recovery choice, and controlled restart. Use when a migration leaves database state partial, blocked, or uncertain.
---

# respond-to-a-failed-database-migration

Protect data invariants before trying to make the migration command succeed.

## When to use

- Use for partial DDL, backfill, constraint, index, data transform, ownership, or version-state failures in a production database.
- Use ordinary migration debugging when no production data, availability, writer, replica, or recovery uncertainty exists.

## Preconditions

- Establish incident command, database and application owners, write authority, backups, security, communications, and recovery decision makers.
- Capture migration tool, version, command, checksum, code deploy, schema state, locks, sessions, replicas, backups, logs, and monitoring.
- Prevent concurrent ad hoc fixes and preserve credentials plus audit records.

## Procedure

1. Determine **incident scope and write safety** across primaries, replicas, shards, tenants, application versions, jobs, reports, and external effects.
2. Stop or fence unsafe writers, background jobs, retries, deploys, and migration runners while maintaining the safest possible service mode.
3. Perform **data and schema preservation** through catalog snapshots, migration tables, logs, transaction state, backup metadata, queries, checksums, and affected-row manifests.
4. Identify committed, rolled-back, running, blocked, skipped, duplicated, transformed, and unknown operations without assuming transactional DDL.
5. Compare expected and actual schemas, constraints, indexes, defaults, triggers, permissions, sequences, data versions, and application assumptions.
6. Quantify affected records and invariants through read-only reconciliation queries.
7. Make a **recovery decision** among finish forward, roll back, restore, fail over, isolate, or compensate based on committed effects, downtime, evidence, and reversibility.
8. Rehearse the selected operation on a production-shaped copy or restored backup when time and risk permit.
9. Execute with named approval, query and lock monitoring, checkpoints, stop conditions, and preserved transcripts.
10. Perform **reconciliation and restart** by validating schema, data, replicas, application compatibility, jobs, reports, permissions, and business controls.
11. Restore traffic and writers gradually, monitor recurrence, and keep alternate recovery available.
12. Correct migration design, tooling, backups, release ordering, review, and rehearsal before closeout.

## Failure plan

- If backup restorability or recovery point is unknown, do not destroy the current evidence state to test it.
- If new application writes used the partial schema, do not blindly down-migrate across committed data.
- If replicas disagree or lag, exclude them from authoritative reads until reconciled.
- If a repair query lacks bounded scope and preview, do not run it in production.
- Never edit migration history merely to mark success without proving actual schema and data state.

## Worked example

A migration adds a nonnull column and backfills it while old and new application versions continue writing. It times out behind a lock; one shard committed DDL, another did not, replicas differ, and the down migration would drop values written by the new version. The team fences incompatible writers, preserves schema and row manifests, reconciles each shard, chooses a forward-compatible nullable repair, rehearses it on a restored copy, and restarts traffic only after schema, data, replica, and application checks pass.

## Done

- A database migration incident timeline records incident scope and write safety, versions, commands, locks, writers, replicas, decisions, evidence custody, and service state
- A schema and data reconciliation report proves data and schema preservation, expected-versus-actual objects, affected rows, invariants, backups, replicas, and application compatibility
- A recovery and restart record verifies recovery decision, rehearsal, execution, reconciliation and restart, traffic restoration, monitoring, remediation, and closeout
