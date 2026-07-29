---
name: migrate-a-database
category: code
description: Change a live database without losing data or trapping the application between two schemas. Rehearse the migration, protect active writes, reconcile the result, and keep a tested way back. Use when a production schema or large dataset must change safely.
---

# migrate-a-database

Plan and execute a database change as a controlled production operation. A migration is
not complete because the command exited successfully. It is complete when reads and writes
are correct, the data reconciles, and the old path can be removed safely.

## When to use

Use this skill for schema changes, large backfills, storage-engine moves, key changes, or
any data operation that may overlap live traffic. Use a simpler reviewed migration for a
small offline database with a disposable copy.

Never improvise destructive data work against the only copy. Do not remove an old column,
table, or code path in the same step that introduces its replacement.

## Preconditions

- Name the migration owner, reviewer, execution window, affected services, and decision maker.
- Record data size, write rate, lock behavior, replication behavior, and available headroom.
- Create a current backup and complete a restore into an isolated environment.
- Define invariants that must remain true, plus reconciliation queries that measure them.
- Set rollback thresholds for errors, latency, lock time, replication lag, and data mismatch.

## Procedure

1. Inventory every reader, writer, scheduled job, report, and integration that touches the data.
2. Design an expand and contract sequence. First add the compatible schema, then move reads
   and writes, verify the new path, and only later remove the old schema.
3. Make the change resumable. Backfills need stable batches, checkpoints, rate limits, and
   idempotent updates so a retry does not duplicate or overwrite good data.
4. Rehearse the exact commands on a production-shaped copy. Measure duration, locks, log
   growth, replication lag, application behavior, and restore time.
5. Deploy compatibility code before changing data. During mixed-version operation, both old
   and new application versions must remain safe.
6. Take the verified backup, record the migration version, and begin with the smallest safe batch.
7. Watch database and user-facing signals after every stage. Pause when a rollback threshold
   is reached, even if the migration command still appears healthy.
8. Run the reconciliation query before moving traffic, after each material batch, and at completion.
9. Switch reads gradually where possible. Keep dual-write or translation logic only for the
   shortest verified period because every extra path can disagree.
10. Remove the old schema in a separate release after the observation window and rollback period.

## Failure plan

Write separate responses for a failed command, a slow or locking migration, an application
version mismatch, and a reconciliation failure. A rollback may mean stopping, reverting code,
restoring a backup, replaying captured writes, or completing forward. Choose the action before
execution. Test the restore and record the last reversible point. Never claim rollback is
available when the restore path has not been timed and checked.

## Done

- A staging rehearsal records duration, locks, resource use, and application behavior
- A tested backup and restore meet the stated recovery objective
- A reconciliation query confirms counts, invariants, and sampled records on the new path
- Rollback proof records the threshold, command, last reversible point, and responsible person
- Old schema removal occurs in a later reviewed release after a clean observation window

Then use design-observability to keep migration and data-integrity signals visible in production.
