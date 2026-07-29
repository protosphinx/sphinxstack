---
name: create-a-refund-checklist
category: money
description: Turn a current refund policy and payment workflow into a safe, auditable processing checklist. Use when a team needs a repeatable checklist for refunds, credits, cancellations, or payment reversals.
---

# create-a-refund-checklist

Create a checklist that prevents inconsistent decisions and irreversible payment mistakes. Separate eligibility,
approval, execution, communication, and reconciliation.

## Inputs

- Gather the current policy version, product terms, payment methods, processor behavior, and approval limits.
- Map refund reasons, partial-refund rules, taxes, discounts, currencies, chargebacks, and accounting needs.
- Identify the systems of record and roles allowed to view, approve, execute, and reconcile.

## Procedure

1. Define the checklist scope and the refund types it explicitly does not cover.
2. Add identity, order, amount, currency, payment status, and prior-refund verification.
3. Translate eligibility rules into objective checks with a policy link and effective date.
4. Branch exceptions to an authorized reviewer rather than forcing a yes or no outcome.
5. Require calculation evidence for partial refunds, tax, discount, fee, and exchange-rate handling.
6. Separate approval from execution where policy or risk requires dual control.
7. Record the processor action, transaction identifier, expected settlement time, and customer message.
8. Add ledger, inventory, entitlement, subscription, and analytics updates that must follow.
9. Finish with reconciliation, duplicate-refund detection, and a retained audit record.

## Boundaries

Do not include credentials, full payment-card data, or private account details in the checklist. Never instruct
an unapproved role to issue funds, bypass a chargeback, or override financial controls. Route legal and tax
questions to the responsible owner.

## Done

- Every checklist decision maps to a current policy rule or authorized exception path
- Approval, execution, customer communication, and reconciliation are distinct and checked
- The checklist records transaction evidence without exposing sensitive payment data
- A dry run covers full, partial, duplicate, failed, and ineligible refund cases
