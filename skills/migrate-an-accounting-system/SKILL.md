---
name: migrate-an-accounting-system
category: money
description: Migrate an accounting system through controlled scope, mapping, rehearsal, reconciliation, parallel close, cutover, rollback, and audit-ready evidence. Use when replacing or consolidating general-ledger and connected finance platforms.
---

# migrate-an-accounting-system

Preserve financial history and prove balances, controls, and operating continuity before retiring the source system.

## When to use

- Use when migrating or consolidating general ledger, payables, receivables, cash, tax, payroll interfaces, inventory, fixed assets, expenses, or reporting systems.
- Use a narrower data import when no live process, control, historical record, integration, or legal-retention obligation changes.

## Preconditions

- Confirm executive sponsor, accounting owner, system owners, auditors or advisers, entities, jurisdictions, reporting deadlines, budget, and cutover authority.
- Freeze scope for companies, ledgers, subledgers, years, currencies, attachments, users, integrations, reports, and retained source access.
- Preserve source databases, configuration, exports, audit logs, reports, attachments, credentials procedures, and retention rules in access-controlled storage.

## Procedure

1. Create a **ledger and control inventory** covering charts of accounts, entities, fiscal calendars, currencies, tax codes, dimensions, subledgers, open items, recurring entries, approvals, roles, reports, interfaces, and statutory records.
2. Profile source quality for duplicates, invalid references, unbalanced entries, stale master data, missing documents, manual overrides, open periods, and unsupported encodings.
3. Design **data and balance mapping** for accounts, dimensions, entities, customers, suppliers, products, taxes, currencies, document types, statuses, and historical identifiers.
4. Validate duplicate-supplier decisions and supplier bank-detail changes through restricted comparison, independent approval, known-channel verification, and anti-fraud testing before payables migration.
5. Decide which detail, open items, summarized history, attachments, and audit evidence move into the target, and document how retained source records remain searchable.
6. Configure target roles, segregation of duties, approval limits, periods, exchange rates, tax rules, numbering, integrations, reports, backups, and logging.
7. Build repeatable extracts and transformations that preserve immutable source keys, transformation versions, rejection reasons, and control totals.
8. Rehearse migration on production-shaped copies; reconcile trial balance, retained earnings, cash, payables, receivables, inventory, fixed assets, tax, debt, intercompany, and foreign-exchange positions.
9. Test transactions end to end through order, invoice, receipt, payment, payroll, journal, close, consolidation, reporting, correction, and audit-trace workflows.
10. Run a **parallel close** in both systems using the same source activity and explain every balance, statement, tax, aging, and operational-report difference.
11. Rehearse cutover timing, data freeze, delta load, approvals, communications, support coverage, and **rollback** using measured recovery times and restored evidence.
12. Authorize go-live only after named owners accept reconciliations, control tests, training, security, performance, backup restore, support, and reporting readiness.
13. Execute the controlled cutover, monitor critical transactions and reconciliations, and keep the source read-only until retention and audit owners approve retirement.

## Failure plan

- If any material balance or control does not reconcile, stop the affected cutover scope and return to the last verified source state.
- If a transformation is ambiguous, quarantine the record and obtain accounting authority rather than inventing a mapping.
- If the target cannot complete close, tax, payroll, payment, or audit-trace duties, invoke rollback or a preapproved dual-operation period.
- Never delete the source, overwrite raw extracts, collapse distinct historical identifiers, or disable audit logs to force completion.
- Treat credentials, bank details, payroll records, tax identifiers, and personal data under least-privilege and breach-response rules.

## Worked example

A multi-entity company must replace its ledger before year-end. The source has inconsistent account charts, duplicate suppliers, open historical periods, and missing attachments. The team inventories every ledger and control, preserves source IDs, maps balances and open items, and quarantines ambiguous duplicates. Two rehearsals reveal an exchange-rate sign error and missing approval evidence. After correction, a parallel close ties every statement and aging report. A timed rollback rehearsal restores the source and reconciles the interrupted delta. Only then do finance and system owners authorize cutover, while the original remains read-only for audit access.

## Done

- An accounting migration register records ledger and control inventory, scope, source custody, data and balance mapping, transformation versions, owners, approvals, and retained-history access
- A reconciliation and control report proves trial balance, subledgers, statements, taxes, currencies, integrations, security roles, workflows, and parallel close
- A cutover and rollback rehearsal records freeze, delta load, recovery time, restored balances, decision gates, communications, and source-retirement conditions
