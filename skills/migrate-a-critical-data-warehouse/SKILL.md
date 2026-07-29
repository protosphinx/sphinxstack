---
name: migrate-a-critical-data-warehouse
category: data
description: Migrate a critical data warehouse through contract inventory, historical and incremental reconciliation, consumer parity, controlled cutover, and recoverable coexistence. Use when financial, operational, regulatory, analytical, or machine-learning workloads must move platforms without silent data drift.
---

# migrate-a-critical-data-warehouse

Move authoritative data contracts and evidence, not only tables.

## When to use

- Use for warehouse replacement, cloud migration, regional move, architecture redesign, or consolidation.
- Obtain qualified security, privacy, finance, records, regulatory, and platform review for critical datasets.

## Preconditions

- Establish executive, data, source, pipeline, warehouse, security, privacy, finance, analytics, machine-learning, consumer, and incident authority.
- Define datasets, history, consumers, jurisdictions, availability, freshness, correctness, cost, and rollback thresholds.
- Freeze incompatible schema and metric changes or route them through the migration's versioned control process.

## Procedure

Complete **inventory and data contracts**, **historical and current parity**, **consumer cutover**, and **rollback and coexistence** before retirement.

1. Build a **warehouse migration register** for sources, ingestion, tables, fields, keys, schemas, transformations, orchestration, quality, lineage, metrics, security, consumers, exports, costs, and owners.
2. Classify system-of-record, derived, temporary, personal, regulated, financial, historical, and reproducible data with retention plus location requirements.
3. Freeze contracts for identity, type, nulls, precision, timezone, effective dating, deletes, late data, duplicates, ordering, schema evolution, and service levels.
4. Capture source and legacy baselines, immutable snapshots, checksums, row counts, control totals, schemas, grants, lineage, queries, and representative outputs.
5. Rebuild ingestion and transformation with explicit watermarks, idempotency, backfill, retry, quarantine, observability, and versioned code.
6. Migrate history in bounded partitions and reconcile keys, records, fields, aggregates, distributions, slowly changing dimensions, deletes, and source control totals.
7. Run incremental pipelines in parallel from an agreed boundary without allowing ungoverned double ingestion or divergent source offsets. Maintain a unified bitemporal ingestion and publication ledger that binds event time, source commit time, ingestion time, file hash or stream offsets, region, schema, transformation and semantic versions, target acceptance, and each consumer's published watermark.
8. Recreate row and column security, tenant isolation, encryption, keys, service accounts, audit, retention, deletion, and residency.
9. Compare semantic models, metrics, dashboards, regulatory reports, extracts, APIs, notebooks, models, and operational consumers at identical cutoffs.
10. Classify every difference as expected platform behavior, transformation change, timing, source defect, migration defect, or unresolved.
11. Cut consumers over in cohorts with pinned source generation, readiness gates, support, monitoring, and reversible routing.
12. Rehearse rollback with pipeline offsets, target writes, schema, consumer state, cache, credential, and data generated during coexistence.
13. Stabilize freshness, quality, performance, cost, security, and user outcomes before expanding.
14. Retire the old warehouse only after residual jobs, exports, shares, audits, retention, legal holds, lineage, recovery, and consumer dependencies are verified.

## Failure plan

- If financial, regulatory, security, or tenant-isolation parity fails, stop that dataset and consumer cohort.
- If source offsets diverge, fence one ingestion generation and reconcile the gap before replay.
- If rollback would lose target-created state, preserve it and run controlled forward reconciliation rather than discarding it.
- If a consumer cannot declare its data generation, keep it on one governed source until fixed.

## Worked example

A multinational company must move finance, product, risk, customer, and machine-learning data from a legacy warehouse to a new platform while batch and streaming ingestion continue, transformations and semantic metrics change engines, dashboards and regulatory extracts share tables, regions impose residency rules, and both warehouses must overlap without double ingestion or silent historical drift. The team freezes contracts, migrates versioned partitions, reconciles current and historical outputs, pins consumers to one generation, and rehearses offset-aware rollback.

## Done

- A warehouse migration register verifies sources, contracts, schemas, lineage, security, residency, pipelines, consumers, service levels, ownership, and retirement duties
- A historical, incremental, and consumer parity report proves keys, records, fields, totals, history, metrics, access, freshness, reports, models, and unresolved differences
- A cutover and rollback rehearsal demonstrates generation fencing, offset handling, consumer pinning, target-created state preservation, security, stop authority, and independent reconciliation
