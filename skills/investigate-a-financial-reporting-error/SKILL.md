---
name: investigate-a-financial-reporting-error
category: money
description: Investigate a financial reporting error through scoped impact analysis, preserved evidence, authorized correction, disclosure review, and control remediation. Use when issued or closed-period figures may be materially wrong.
---

# investigate-a-financial-reporting-error

Preserve the record, determine the full reporting population, and correct through authorized accounting and disclosure processes.

## When to use

- Use when a ledger, close, tax filing, lender report, board pack, bonus calculation, or published financial statement may contain a material error.
- Use ordinary reconciliation for a contained open-period difference that has not reached dependent reports or decisions.

## Preconditions

- Name an independent investigation lead, accounting owner, legal or disclosure counsel as needed, system custodian, and correction authority.
- Preserve reports, ledger extracts, journals, source documents, approvals, emails, tickets, integration logs, configuration, code versions, and access logs.
- Restrict investigation details to authorized participants and prevent implicated records from expiring or being overwritten.

## Procedure

1. Record the initial allegation, discovery time, reporter, affected report, known values, immediate risks, and actions already taken.
2. Establish **error scope and materiality** across entities, accounts, transactions, periods, currencies, statements, taxes, covenants, bonuses, forecasts, and external recipients.
3. Define the correct accounting treatment from policy, contracts, source evidence, current standards, and qualified professional judgment.
4. Perform **evidence preservation** with read-only exports, checksums, retention holds, access controls, and a chain of custody.
5. Reproduce the error from source to report and build a chronology of source events, transformations, postings, overrides, close steps, reviews, and distribution.
6. Test the complete affected population and related controls rather than limiting work to the first observed example.
7. Separate factual cause, contributing conditions, control failures, system behavior, and unresolved hypotheses without accusing individuals.
8. Calculate corrected entries and every downstream effect, then independently review amounts, periods, taxes, currency, eliminations, and presentation.
9. Decide **correction and disclosure** with authorized accounting, legal, tax, audit, lender, board, regulator, and communications owners.
10. Post or issue corrections only through controlled approval; preserve original, corrected, and restated versions plus recipient records.
11. Conduct **control remediation** across integration idempotency, access, review, reconciliation, close, retention, change management, and monitoring.
12. Test remediation on historical and new data, monitor recurrence, and close only after owners accept residual risk.

## Failure plan

- If logs or source evidence may expire, place a retention hold before running destructive tests or changing configuration.
- If management asks for a quiet next-period adjustment, route the request to authorized accounting and legal reviewers; never conceal a closed-period error.
- If materiality or disclosure duty is uncertain, preserve options and obtain qualified advice rather than assuming no action is required.
- If misconduct is possible, protect reporter confidentiality, avoid tipping off implicated parties, and use the approved investigation protocol.
- Never overwrite original statements, journals, logs, messages, approvals, or files.

## Worked example

Closed quarterly statements contain duplicated revenue after an integration replay. The issue may affect tax, a lender covenant, board reporting, and bonuses; logs are near expiry and some entries were manually overridden. The team places a retention hold, hashes exports, identifies the replay window and complete transaction population, and distinguishes automated duplicates from valid manual entries. Independent review verifies correction entries and downstream effects. Authorized accounting, legal, tax, lender, and board owners decide restatement and communications. The integration gains idempotency controls, the close receives a replay reconciliation, and historical plus new data tests prove the fix.

## Done

- A reporting error chronology records discovery, error scope and materiality, evidence preservation, custody, source events, transformations, overrides, reports, recipients, and decisions
- A reconciliation and correction package proves the affected population, correct treatment, entries, downstream effects, correction and disclosure approvals, and versioned outputs
- A control effectiveness review verifies control remediation, historical and current tests, recurrence monitoring, owners, residual risk, and closeout approval
