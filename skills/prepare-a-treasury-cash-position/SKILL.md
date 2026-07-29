---
name: prepare-a-treasury-cash-position
category: money
description: Prepare a treasury cash position across banks, processors, wallets, entities, currencies, restrictions, and near-term obligations. Use when deciding funding, concentration, transfer, borrowing, investment, or payment actions.
---

# prepare-a-treasury-cash-position

Distinguish ledger cash, bank balance, available funds, and usable liquidity.

## When to use

- Use for daily treasury operations, liquidity events, or periods of elevated cash risk.
- Respect account mandates, local restrictions, cutoff times, and transfer authority.
- Do not initiate a transfer from an unverified instruction or outside the approved authority matrix.

## Procedure

1. Set as-of timestamp, entities, currencies, accounts, materiality, forecast window, and minimum operating buffers.
2. Obtain authenticated balances from banks, processors, wallets, custodians, facilities, and cash-equivalent accounts.
3. Reconcile ledger cash to statements through deposits, payments, fees, interest, transfers, returns, chargebacks, and timing differences.
4. Separate available, pending, restricted, trapped, pledged, reserved, frozen, and minimum operating cash.
5. Convert currencies using a controlled rate and preserve original-currency amounts.
6. Schedule payroll, tax, debt, vendors, refunds, settlements, collateral, and expected receipts by value date and cutoff.
7. Project opening, inflow, outflow, transfer, borrowing, investment, and closing balances for each account and entity.
8. Identify shortfalls, concentration, counterparty exposure, idle cash, currency mismatch, and failed or duplicate transfers.
9. Route proposed actions through independent instruction verification, segregation of duties, limits, approval, and confirmation.
10. Lock the snapshot, record later adjustments, and reconcile forecast movements to the next actual position.

## Done

- A timestamped cash-position report records reconciled balances, availability states, restrictions, value dates, forecasts, exposures, and authorized actions
- Bank, ledger, currency, cutoff, transfer, duplicate, approval, and next-position checks verify usable liquidity
