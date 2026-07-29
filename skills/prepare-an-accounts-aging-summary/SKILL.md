---
name: prepare-an-accounts-aging-summary
category: money
description: Prepare a receivables aging summary that reconciles invoices, credits, payments, disputes, and collection status to the accounting control total. Use when managing collections, close, liquidity, or credit risk.
---

# prepare-an-accounts-aging-summary

Build the aging from document-level evidence at one explicit reporting date.

## When to use

- Use for accounts receivable review, collections planning, cash forecasting, close, or allowance analysis.
- Do not label a balance uncollectible solely because it falls into an older bucket.

## Procedure

1. Record the entity, as-of date, currency, aging basis, and source-system extract time.
2. Export open invoices, unapplied cash, credit notes, adjustments, and customer master identifiers.
3. Reconcile the extracted net balance to the accounts receivable control account.
4. Calculate days outstanding from the approved due date, not a mutable display date.
5. Place documents into defined current, 1-30, 31-60, 61-90, and over-90-day buckets or the organization's approved bands.
6. Group related customer accounts only with a documented mapping and preserve document-level drill-down.
7. Annotate disputes, promises to pay, payment plans, collection holds, credit balances, and subsequent receipts.
8. Highlight concentration and overdue exposure without exposing unnecessary personal or payment data.
9. Record unresolved master-data errors, missing credits, and recommended follow-up separately from accounting adjustments.

## Worked example

An aging extract is $18,000 higher than the ledger. The review finds a duplicated subsidiary export and $2,000 of unapplied cash. Removing the duplicate and applying the approved customer mapping reconciles the report. The summary then distinguishes a disputed 95-day invoice from an undisputed overdue balance instead of treating both as identical collection risk.

## Done

- An aging summary report is verified against the control account and includes document, customer, due date, bucket, currency, dispute, and collection status
- A collection exception list records subsequent receipts, stale balances, credits, data errors, concentrations, and assigned owners
