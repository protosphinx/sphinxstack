---
name: profile-a-parquet-file
category: data
description: Profile a Parquet file through metadata, schema, row groups, encodings, statistics, nulls, ranges, compression, and privacy-safe samples. Use when inspecting columnar data before analysis or ingestion.
---
# profile-a-parquet-file
## When to use
- Use on an authorized immutable copy or read-only object.
- Do not expose sensitive values or trust file statistics as complete validation.
## Procedure
1. Record source, checksum, size, writer, version, encryption, and custody.
2. Inspect schema, logical and physical types, nullability, field IDs, and metadata.
3. Inspect row groups, columns, encodings, compression, pages, and statistics.
4. Profile counts, nulls, distinct estimates, ranges, invalid values, and skew safely.
5. Check timestamps, decimals, nested structures, dictionaries, and schema compatibility.
6. Record corruption, privacy, pushdown, and ingestion implications.
## Failure plan
- Quarantine unreadable or semantically ambiguous columns instead of coercing them.
## Worked example
A timestamp column is physically integer but lacks a logical time-zone meaning, blocking automatic ingestion.
## Done
- A Parquet profile report records source, schema, storage, statistics, quality, privacy, and compatibility findings
- Checksum, metadata, row-group, timestamp, decimal, nested, corruption, and redaction checks verify inspection
