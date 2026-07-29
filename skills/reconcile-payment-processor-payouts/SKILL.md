---
name: reconcile-payment-processor-payouts
category: money
description: Reconcile payment-processor transactions, fees, reserves, disputes, refunds, currencies, and settlement timing to payouts and bank deposits. Use when closing merchant cash or investigating settlement differences.
---

# reconcile-payment-processor-payouts

Prove the bridge from gross customer activity to each net bank deposit.

## When to use

- Use for card, wallet, marketplace, or payment-service settlement reconciliation.
- Do not collect or expose full card numbers, security codes, credentials, or unnecessary customer data.

## Preconditions

- Obtain read-only transaction, balance, fee, dispute, reserve, payout, and bank reports for the same merchant accounts and dates.
- Record processor time zone, settlement windows, currencies, and payout identifiers.

## Procedure

1. Preserve source exports and document report filters, extraction time, account, entity, and currency.
2. Normalize charges, captures, refunds, reversals, disputes, fees, taxes, reserves, adjustments, and currency conversions without losing source IDs.
3. Group activity by the processor's payout or balance-transaction identifier.
4. Calculate the bridge from gross collections to expected net payout for each settlement.
5. Match expected payouts to processor reports and bank deposits using IDs, dates, currencies, and amounts.
6. Separate cutoff and settlement timing from true missing, duplicate, or misclassified activity.
7. Reconcile processor clearing, fee, refund, dispute, reserve, and cash ledger accounts.
8. Investigate unmatched items through approved support channels while preserving evidence.
9. Record authorized entries and verify that later settlements clear carried timing items.

## Worked example

A processor report shows $120,000 of charges while the bank received $112,340. The bridge identifies $3,200 in refunds, $2,160 in fees, a $1,500 reserve hold, and an $800 dispute. The remaining $0 is reconciled by payout ID. A second bank deposit is unmatched because it belongs to another merchant account, so it remains an exception rather than being forced into the period.

## Done

- A payout reconciliation report links gross activity, deductions, expected payouts, processor balances, and bank deposits by stable identifiers
- Ledger totals reconcile and every timing item, reserve, duplicate, missing payout, or unexplained adjustment is recorded with status and owner
