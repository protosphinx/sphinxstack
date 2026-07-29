---
name: reconcile-intercompany-balances
category: money
description: Reconcile intercompany balances and transactions bilaterally across entities, currencies, taxes, timing, and consolidation eliminations. Use when group accounts contain mismatched due-to, due-from, revenue, expense, loan, fee, or settlement positions.
---

# reconcile-intercompany-balances

Match both sides to the same economic event before posting an elimination.

## When to use

- Use during close, before consolidation, or when settling group balances.
- Never force unexplained differences into a plug account.

## Procedure

1. Set period, cutoff, entities, counterparties, accounts, transaction types, currencies, materiality, owners, and consolidation basis.
2. Extract both ledgers with entity, counterparty, transaction ID, source document, date, currency, amount, tax, settlement, and status.
3. Confirm completeness against control accounts, subledgers, prior balances, and counterparty declarations.
4. Normalize signs, currencies, exchange-rate sources, naming, and cutoff without overwriting source values.
5. Match invoice, loan, recharge, royalty, dividend, fee, interest, tax, payment, and credit entries one to one or through justified groups.
6. Classify differences as timing, foreign exchange, tax, rate, quantity, duplicate, omission, coding, dispute, or unsupported.
7. Assign each exception to both entity owners with action, evidence, due date, and escalation. Preserve disagreements.
8. Record correcting entries in the responsible books with approval and references. Re-extract rather than editing reconciliation results.
9. Prepare eliminations only from confirmed reciprocal balances and document any residual.
10. Obtain bilateral confirmation, reconcile the elimination to consolidation output, and carry unresolved items forward visibly.

## Done

- A bilateral reconciliation matrix records source transactions, matched pairs, exchange rates, classifications, actions, confirmations, and unresolved balances
- Ledger, subledger, counterparty, correction, elimination, and consolidation checks verify completeness without unexplained plugs
