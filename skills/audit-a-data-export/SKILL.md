---
name: audit-a-data-export
category: data
description: Audit a data export for authority, scope, schema, completeness, minimization, security, delivery, retention, and recipient use. Use when sensitive or important data leaves a source system through a file, API, report, or transfer.
---

# audit-a-data-export

Trace the export from approved request to recipient disposition.

## When to use

- Use for customer, partner, regulatory, research, litigation, vendor, or internal data transfers.
- Do not open or copy sensitive exported values outside the approved environment.

## Procedure

1. Record requester, purpose, authority, recipient, jurisdiction, dataset, date range, fields, population, format, and deadline.
2. Verify source system, repeatable query or configuration, cutoff, permissions, and owner approval.
3. Check field definitions, sensitivity, minimization, exclusions, redaction, pseudonymization, and re-identification risk.
4. Reconcile keys, row counts, files, schema, control totals, missing values, duplicates, and truncation.
5. Validate encryption, access, transfer channel, recipient identity, integrity checksum, expiry, and download logging.
6. Confirm contract, consent, retention, deletion, onward sharing, permitted use, incident, and return obligations.
7. Record delivery acknowledgment and verify recipient disposition after the approved period.

## Done

- An export audit report records authority, source, query, scope, fields, controls, reconciliation, transfer, recipient, retention, and disposition
- Permission, minimization, schema, row, control-total, checksum, delivery, access, expiry, and deletion checks verify the export lifecycle
