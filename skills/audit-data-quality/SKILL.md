---
name: audit-data-quality
category: data
description: Measure a dataset's completeness, validity, uniqueness, consistency, timeliness, lineage, and fitness for a named decision, then prioritize repair by impact. Use when reports conflict, a migration needs a baseline, model inputs are suspect, or someone asks whether data can be trusted.
---

# audit-data-quality

Judge data against its intended use and declared rules. Produce reproducible tests, quantify affected
records, trace defects to their source, and distinguish safe repair from irreversible guesswork.

## Inputs

- Name the dataset, owners, consumers, decisions, time window, privacy rules, and source systems.
- Gather schemas, dictionaries, pipelines, reconciliation reports, known incidents, and representative records.
- Work from approved copies or read-only access.

## Procedure

1. Define critical data elements and the decisions or workflows each supports.
2. Write measurable rules for schema, completeness, domain validity, uniqueness, relationship integrity,
   consistency, timeliness, distribution, and reconciliation.
3. Record lineage from source through transformations to outputs, including owners and refresh schedules.
4. Profile counts, nulls, distinct values, ranges, patterns, duplicates, ages, and distributions by relevant segment.
5. Run deterministic quality tests and save the query or script, parameters, execution time, and snapshot identifier.
6. Sample both passing and failing records to confirm each rule measures the intended defect.
7. Quantify severity by affected decisions, records, users, money, compliance, and recoverability.
8. Trace high-impact failures upstream and distinguish source defect, transformation bug, stale contract, or misunderstood rule.
9. Propose prevention, backfill, quarantine, correction, or acceptance. Define reconciliation and rollback before changing records.
10. Assign owners and thresholds, then publish a scorecard that does not hide serious slices in one average.
11. Re-run the same tests after repair and preserve baseline plus residual exceptions.

## Boundaries

Do not overwrite ambiguous records to improve a score. Never move private data into an unapproved profiler
or report row-level examples unnecessarily. A plausible value is not a verified correction.

## Done

- A versioned rule set and reproducible report cover critical quality dimensions and named decisions
- Defects are quantified by scope, impact, source, owner, and recoverability
- Sample review confirms rules identify real failures rather than harmless variation
- Repair or acceptance decisions include reconciliation evidence, residual exceptions, and prevention checks

Then use clean-a-dataset for a bounded repair or ship-a-data-pipeline to prevent recurrence.
