---
name: detect-financial-data-anomalies
category: data
description: Detect and triage financial-data anomalies using reconciled controls, documented expectations, reproducible tests, and evidence-preserving investigation. Use when transactions, balances, reports, or integrations appear unusual.
---

# detect-financial-data-anomalies

An anomaly is a signal to investigate, not proof of error or misconduct.

## When to use

- Use for duplicate, missing, mistimed, misclassified, extreme, rounded, or inconsistent financial records.
- Do not accuse a person, alter source evidence, or expose sensitive records based on an automated flag.

## Preconditions

- Confirm data authority, privacy controls, reporting scope, expected process, materiality, and escalation routes.
- Preserve original extracts with query, filters, timestamp, and checksum.

## Procedure

1. Define expected grain, value ranges, relationships, posting rules, period behavior, and control totals.
2. Reconcile record counts and amounts before applying statistical or rule-based tests.
3. Test duplicates, sequence gaps, missing required fields, impossible dates, sign errors, currency inconsistencies, and unbalanced entries.
4. Test unusual amounts, timing, frequency, round values, weekend activity, new counterparties, and abrupt pattern changes.
5. Adjust comparisons for seasonality, growth, policy changes, migrations, and known business events.
6. Rank signals by materiality, confidence, control relevance, and potential harm, not novelty alone.
7. Trace sampled anomalies to source documents, approvals, system logs, and subsequent events.
8. Classify each as expected event, data-quality issue, accounting error, control failure, or unresolved concern.
9. Correct only through authorized workflows and rerun reconciliation plus detection tests.

## Worked example

A detector flags a surge of identical revenue entries. Investigation finds both legitimate recurring invoices and a subset replayed by an integration after a timeout. Stable source IDs isolate the duplicates. The team preserves logs, reverses only authorized duplicate postings, and validates the corrected ledger without suggesting employee fraud.

## Done

- An anomaly report records source lineage, controls, reproducible tests, ranked signals, sampled evidence, classifications, and limitations
- Corrected data reconciles to approved totals and every unresolved or escalated signal is logged with custody, owner, and status
