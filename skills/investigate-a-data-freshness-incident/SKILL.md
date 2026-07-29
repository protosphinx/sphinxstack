---
name: investigate-a-data-freshness-incident
category: data
description: Investigate a data-freshness incident through event time, ingestion, processing, publication, consumer impact, recovery, and recurrence evidence. Use when a dataset or report is delayed, stale, partial, or falsely marked current.
---

# investigate-a-data-freshness-incident

Separate missing events from delayed processing and delayed publication.

## When to use

- Use for batch, streaming, API, warehouse, metric, dashboard, or model-feature delays.
- Do not mark data current from job success alone.

## Procedure

1. Declare affected datasets, consumers, decisions, regions, periods, freshness commitments, materiality, and owners.
2. Preserve scheduler, source, connector, queue, job, warehouse, cache, semantic, report, and alert evidence.
3. Trace event time, source availability, extraction watermark, arrival, processing, commit, publication, cache, and consumer observation.
4. Reconcile expected and actual records by interval, source, partition, key range, and control total.
5. Identify whether delay is source, permission, schema, capacity, retry, watermark, timezone, dependency, publication, cache, or monitoring failure.
6. Communicate exact stale periods and unsafe uses; disable or label affected outputs where needed.
7. Recover through safe replay or backfill with idempotency, bounded load, and downstream reconciliation.
8. Verify current plus historical completeness and add detection at the earliest reliable boundary.

## Done

- A freshness incident report records timeline, pipeline stages, watermarks, stale periods, consumer impact, cause, recovery, and owners
- Expected-record, stage-time, partition, source, replay, downstream, currentness, and new-alert checks verify recovery
