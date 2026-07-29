---
name: recover-from-a-failed-data-backfill
category: data
description: Recover from a failed data backfill through write containment, source-to-output lineage, affected-population reconciliation, versioned repair, downstream correction, and recurrence controls. Use when historical recomputation creates missing, duplicate, corrupted, or inconsistent data.
---

# recover-from-a-failed-data-backfill

Stop additional writes before attempting to overwrite the damage.

## When to use

- Use when a backfill affects warehouses, operational stores, metrics, models, billing, reports, or downstream exports.
- Do not delete or rerun broad partitions until the mutation population and authoritative inputs are proven.

## Preconditions

- Establish incident, source, pipeline, storage, downstream-consumer, finance, privacy, security, and communications authority.
- Define affected datasets, key ranges, partitions, generations, consumers, materiality, decisions, and stop authority.
- Preserve source versions, code, manifests, logs, outputs, checkpoints, and queries before cleanup.

## Procedure

Complete **containment and lineage**, **affected-output reconciliation**, **repair or rollback**, and **verification and prevention** before closeout.

1. Open a **failed backfill incident timeline** with request, approval, input snapshot, code, configuration, ranges, runs, retries, writes, alerts, decisions, and containment.
2. Stop the backfill and fence its generation from further writes, retries, compaction, publication, or downstream propagation.
3. Preserve source snapshots, manifests, code commits, schemas, job logs, checkpoints, query history, target versions, lineage, quality results, and consumer outputs.
4. Build a **source-to-output and consumer reconciliation** by stable key, partition, event time, source version, transformation version, target generation, and downstream artifact.
5. Identify missing, duplicate, overwritten, partially updated, mispartitioned, stale, out-of-order, deleted, and incorrectly transformed records.
6. Trace impact to aggregates, dashboards, financial reports, exports, experiments, features, models, alerts, caches, and decisions.
7. Choose rollback only when a complete prior state exists and no valid concurrent writes would be lost; otherwise use a new repair generation.
8. Enforce temporal isolation by construction: rebuild from a fixed source snapshot into a new versioned namespace while normal ingestion is captured in an append-only delta between explicit watermarks. Make writes idempotent, replay the delta, produce before-and-after diffs, and publish only through an atomic pointer change after reconciliation.
9. Canary bounded partitions, reconcile keys, fields, totals, history, lineage, and representative consumers, then expand in governed waves.
10. Correct or restate downstream artifacts, notify affected owners, preserve prior published evidence, and record decision remediation.
11. Verify current ingestion remains correct while repaired history and late arrivals converge.
12. Add approval, dry-run, scope preview, generation fencing, capacity, manifest, invariant, anomaly, and rollback gates.

## Failure plan

- If source truth is unavailable, do not invent corrected history; mark affected outputs unavailable or qualified.
- If concurrent valid writes overlap, preserve them and repair through versioned merge rather than partition replacement.
- If financial or customer decisions were affected, route correction through accountable owners and retain original plus corrected outcomes.
- If repair produces unexplained differences, stop expansion and preserve both generations.

## Worked example

A transaction-pipeline backfill intended to correct six months of history overwrites current partitions, duplicates retries, drops tombstones, misreads old schemas, and propagates changes into revenue dashboards, customer statements, risk features, experiments, and regulatory extracts while normal ingestion continues. Responders fence the backfill generation, map every source record and descendant, preserve concurrent writes, repair into isolated versioned outputs, reconcile consumers, restate affected reports, and add scope plus generation gates.

## Done

- A failed backfill incident timeline verifies authority, inputs, code, ranges, runs, retries, writes, propagation, containment, decisions, and evidence
- A source-to-output and consumer reconciliation proves keys, partitions, versions, missing, duplicate, overwritten, deleted, concurrent, downstream, and decision impact
- A recovery and recurrence report demonstrates isolated repair, idempotency, concurrent-write preservation, canaries, downstream correction, current-ingestion validation, and tested backfill gates
