---
name: test-a-data-migration
category: data
description: Verify a data migration against source-to-target mappings, invariants, edge cases, reconciliation, and recovery behavior. Use when testing migration code or a rehearsal before changing production data.
---

# test-a-data-migration

Prove that records, meaning, relationships, and operational behavior survive the transformation. Test both
successful migration and interruption or rerun.

## Inputs

- Gather source and target schemas, transformation rules, invariants, migration code, volume, and rollback design.
- Identify identifiers, nulls, duplicates, encodings, timestamps, currencies, deleted records, and relationship constraints.
- Use a privacy-safe representative dataset and an isolated target.

## Procedure

1. Turn every mapping and invariant into a check with an owner and expected result.
2. Build fixtures for normal, boundary, invalid, duplicate, missing, historical, and high-volume cases.
3. Save source counts, aggregates, hashes, relationship checks, and business-level query results.
4. Run the migration from clean state and capture duration, warnings, errors, and resource use.
5. Compare target counts, aggregates, keys, relationships, precision, ordering, and semantic queries.
6. Exercise interruption, resume, retry, and full rerun to prove idempotency or documented behavior.
7. Test old and new application reads or writes against the transitional states they may encounter.
8. Run rollback or restore in the isolated environment and reconcile the recovered source.
9. Investigate every mismatch; do not accept unexplained balancing differences.
10. Package the commands, fixtures, results, exceptions, and release decision.

## Boundaries

Do not use unmasked production data in an uncontrolled environment or run migration tests against the only
copy of a dataset. Never declare success from row counts alone. Obtain authorization before copying regulated,
customer, or employee data.

## Done

- Source-to-target mappings and invariants have executable checks
- Counts, aggregates, relationships, precision, and business queries reconcile
- Interruption, retry, rerun, transitional access, and recovery behavior are tested
- Every exception is explained, owned, and included in the release evidence
