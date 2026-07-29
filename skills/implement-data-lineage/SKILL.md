---
name: implement-data-lineage
category: data
description: Implement data lineage from sources through transformations, storage, metrics, models, reports, and consumers with versioned field and run evidence. Use when teams must trace where data came from, how it changed, and what a defect affects.
---

# implement-data-lineage

Capture runtime lineage and governed meaning together.

## When to use

- Use for warehouses, lakes, pipelines, metrics, machine learning, regulatory reporting, or incident response.
- Do not expose secrets or sensitive row values in lineage metadata.

## Procedure

1. Define critical datasets, fields, jobs, metrics, models, reports, consumers, and impact questions.
2. Assign stable identifiers and owners to sources, datasets, fields, transformations, runs, and published artifacts.
3. Capture code, query, configuration, schema, input version, output version, run time, environment, and orchestration references.
4. Represent table and field lineage, including filters, joins, aggregations, casts, defaults, manual inputs, and external exports.
5. Link business definitions, quality rules, sensitivity, access, retention, and contracts.
6. Capture dynamic lineage from actual runs and reconcile it with declared lineage.
7. Handle aliases, temporary tables, generated SQL, notebooks, macros, cross-system movement, and deleted assets.
8. Test upstream and downstream impact queries against known paths and incident examples.

## Done

- A lineage graph and metadata register record stable IDs, sources, transformations, fields, runs, definitions, owners, and consumers
- Runtime-to-declared, field, version, cross-system, impact, sensitive-metadata, and known-path checks verify traceability
