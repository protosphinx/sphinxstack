---
name: verify-a-data-export-checksum
category: data
description: Verify a data export checksum with a named algorithm, exact byte scope, manifest, transfer context, and semantic reconciliation. Use when proving that exported files arrived unchanged.
---
# verify-a-data-export-checksum
## When to use
- Use for files, parts, archives, manifests, or transferred snapshots.
- A checksum proves byte identity, not completeness, authorization, or semantic correctness.
## Procedure
1. Record export identity, producer, time, scope, files, sizes, algorithm, and expected hashes.
2. Preserve the signed or independently authenticated manifest.
3. Hash exact bytes without newline, archive, or encoding transformation.
4. Compare every file, part, manifest entry, total size, and unexpected extra.
5. Verify decryption and decompression at the intended layer separately.
6. Reconcile record counts, schema, boundaries, and expected source state.
## Failure plan
- Quarantine mismatched or unmanifested data and request a new controlled export.
## Worked example
All part hashes match, but the authenticated manifest lacks the final partition, so completeness fails.
## Done
- A checksum verification report records export, manifest, algorithm, files, sizes, hashes, extras, and semantic reconciliation
- Manifest-authenticity, byte-scope, part, archive, encryption, count, schema, and source-boundary checks verify transfer
