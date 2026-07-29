---
name: design-a-reference-data-process
category: data
description: Design a reference-data process for governed codes, hierarchies, mappings, effective dates, distribution, exceptions, and consumer migration. Use when many systems depend on shared classifications such as countries, products, statuses, currencies, or organizations.
---

# design-a-reference-data-process

Treat code meaning and effective time as versioned contracts.

## When to use

- Use for master classifications, controlled vocabularies, mappings, hierarchies, or external standard lists.
- Do not reuse a retired code for a different meaning.

## Procedure

1. Inventory domains, sources, authorities, codes, labels, hierarchies, consumers, jurisdictions, and update frequencies.
2. Assign stable IDs, definitions, owners, effective-from, effective-to, status, predecessor, successor, and source version.
3. Define request, review, conflict, approval, publication, correction, emergency, and retirement workflows.
4. Preserve history and support as-of lookup; never overwrite meaning without a new version.
5. Map local and external codes with relationship type, confidence, scope, date, reviewer, and unresolved cases.
6. Publish machine-readable and human-readable versions with checksum, schema, change log, and contract.
7. Notify consumers, test compatibility, support transition windows, and monitor rejected or unknown codes.
8. Reconcile active systems to the governed release and retire old mappings only after dependency review.

## Done

- A reference-data register and publication report record codes, meaning, hierarchy, effective dates, mappings, owners, versions, and approvals
- Uniqueness, as-of, hierarchy, mapping, checksum, consumer, unknown-code, transition, and reconciliation checks verify each release
