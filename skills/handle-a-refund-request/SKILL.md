---
name: handle-a-refund-request
category: money
description: Evaluate, approve, execute, communicate, and reconcile a customer refund with a complete audit trail. Use when processing a real refund, credit, cancellation repayment, or payment reversal under an existing policy.
---

# handle-a-refund-request

Resolve the customer's request without creating duplicate payments, broken entitlements, or unexplained ledger
differences. Use the current policy and the original payment rail whenever possible.

## Inputs

- Gather the request, verified customer and order identifiers, payment history, currency, policy, and reason.
- Check fulfillment, consumption, cancellation, prior adjustments, disputes, taxes, discounts, and entitlements.
- Confirm the operator's approval limit and any required finance, fraud, legal, or manager review.

## Procedure

1. Verify identity through the approved method and open the authoritative order and payment records.
2. Confirm the requested amount, currency, reason, original payment state, and whether a dispute already exists.
3. Apply the policy version effective for the transaction and document eligibility or the exception needed.
4. Calculate full or partial refund components, including tax, discount, fee, and exchange-rate treatment.
5. Obtain the required approval before initiating an irreversible processor action.
6. Execute once using an idempotency key or equivalent duplicate-protection control.
7. Record processor status, transaction identifier, expected settlement window, and any failure.
8. Update subscription, entitlement, inventory, invoice, and customer records in the correct sequence.
9. Send an accurate confirmation or denial with amount, method, timing, reason, and support path.
10. Reconcile processor, ledger, order, and customer records after settlement.

## Boundaries

Never request full card data, expose payment credentials, bypass approval, or refund to an unrelated destination.
Do not retry an uncertain payment action until its processor state is checked. Route suspected fraud, active
chargebacks, sanctions, tax, and legal questions to authorized owners.

## Done

- Eligibility, calculation, approval, and policy version are recorded and checked
- Exactly one refund outcome exists in the processor and internal systems
- Entitlements, invoices, inventory, and customer communication match the financial result
- Settlement is reconciled or an owned exception remains open with evidence
