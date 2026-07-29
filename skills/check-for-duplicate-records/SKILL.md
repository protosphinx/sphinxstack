---
name: check-for-duplicate-records
category: data
description: Check a dataset for exact, key, and likely duplicate records using explicit business identity and timing rules. Use when counts are inflated, joins multiply rows, or repeated entities may distort analysis.
---

# check-for-duplicate-records

Define what must be unique before deleting anything.

## When to use

- Use during profiling, ingestion, migration, reconciliation, or quality investigation.
- Do not merge or delete records solely because names or other weak attributes match.

## Procedure

1. Record dataset version, unit of observation, candidate keys, allowed repeats, and expected population.
2. Count exact duplicate rows after only documented normalization.
3. Test each candidate key and composite key for repeated values, including null behavior.
4. Group likely duplicates using approved fields such as stable IDs, contact data, dates, or addresses with privacy safeguards.
5. Distinguish legitimate history, line items, revisions, retries, snapshots, and many-to-many join multiplication.
6. Trace duplicates to source creation, ingestion, union, join, retry, or transformation.
7. Produce a disposition proposal with confidence and authority, leaving source records unchanged.

## Done

- A duplicate-record report records identity rules, exact and key duplicates, candidate groups, causes, impact, and disposition proposals
- Row, key, join-cardinality, history, null, source, and aggregate checks verify duplicate classification
