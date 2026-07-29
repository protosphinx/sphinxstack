---
name: ship-a-data-pipeline
category: data
description: Ship a repeatable data pipeline that survives retries, late records, schema changes, and backfills without corrupting downstream results. Define contracts, checkpoints, quality checks, and recovery. Use when a recurring data flow becomes production infrastructure.
---

# ship-a-data-pipeline

Treat a data pipeline as a product with inputs, consumers, state, and operating obligations. A job that
runs once is not a pipeline. The procedure must make repeated runs, partial failures, corrections, and
historical replay safe and explainable.

## When to use

Use this skill when data moves on a schedule or stream into reports, products, models, or operational
systems. It applies when missed or duplicated work can change decisions. For a one-time personal file,
use clean-a-dataset instead.

Never overwrite the only raw copy. Do not copy private fields into a broader system simply because
they exist at the source. Minimize access, retention, and downstream exposure.

## Preconditions

- Name source and consumer owners, expected freshness, data classification, and recovery objectives.
- Measure current volume, arrival pattern, late data, schema variation, and dependency limits.
- Define a durable raw or replay source and the authority required for corrections or deletions.
- Record the business invariants that downstream users depend on.

## Procedure

1. Write a source contract covering schema, keys, event time, delivery time, nulls, deletion, correction,
   ordering, duplicates, volume, freshness, ownership, and change notification.
2. Separate ingest, validation, transformation, and publication so a failure can be located and replayed.
3. Preserve immutable raw input or an equivalent replay source with access and retention controls.
4. Make processing idempotent. Use stable record identity, deterministic transformation, checkpoints,
   and atomic publication so a retry cannot duplicate or partially expose results.
5. Define late and out-of-order handling from event time, including the window after which data is corrected.
6. Add data quality checks for schema, completeness, uniqueness, ranges, referential integrity, volume,
   freshness, and domain invariants. Classify each check as block, quarantine, warn, or measure.
7. Create a backfill path that uses versioned code, bounded ranges, rate limits, isolated output, and comparison
   before promotion. Keep normal processing alive when safe.
8. Record lineage from source version and code version to published partition or dataset.
9. Monitor freshness, failed records, retries, checkpoint age, quality results, and consumer-visible correctness.
10. Test duplicate input, late input, malformed input, dependency failure, partial publication, and replay.
11. Publish an operating runbook for pause, resume, replay, backfill, quarantine, correction, and escalation.

## Failure plan

Keep publication separate from computation so bad output can be withheld. Define how to stop ingestion,
preserve checkpoints, quarantine records, restore the last good publication, and replay a bounded range.
If a correction changes historical results, notify named consumers and retain the old and new lineage.

## Done

- A source contract names schema, semantics, ownership, freshness, privacy, and change handling
- A replay test proves duplicate, late, malformed, and previously processed records remain safe
- A reconciliation report compares source, processed, quarantined, and published counts plus invariants
- Data quality failures have explicit block, quarantine, warning, or measurement behavior
- An operating runbook covers pause, resume, correction, backfill, recovery, and escalation

Then use design-observability for service signals and migrate-a-database for live storage changes.
