---
name: migrate-a-payment-processor
category: money
description: Migrate payment processing through stable transaction identity, customer-safe token and authorization handling, financial reconciliation, phased cutover, and rollback. Use when changing acquirers, gateways, processors, wallet providers, payout systems, or payment orchestration.
---

# migrate-a-payment-processor

The migration must preserve who owns every in-flight authorization, capture, refund, dispute, and payout.

## When to use

- Use for card, wallet, bank-debit, subscription, marketplace, refund, dispute, fraud, or payout processor changes.
- Obtain qualified payments, PCI, security, privacy, finance, treasury, tax, legal, fraud, and regional review.

## Preconditions

- Establish product, payments, engineering, security, finance, accounting, treasury, fraud, support, legal, privacy, and country authority.
- Define payment methods, countries, currencies, entities, merchant accounts, transaction states, customer cohorts, materiality, availability, and loss thresholds.
- Confirm contractual exit, reserves, data access, token portability, retention, dispute, and post-termination support obligations.

## Procedure

Complete the **payment flow and consumer inventory**, **token and authorization migration**, and **financial dual-run reconciliation** before approving cutover or rollback readiness.

1. Build a **payment migration register** for checkout, payment intents, authorizations, captures, tokens, authentication, recurring mandates, refunds, disputes, chargebacks, fraud, webhooks, settlement, payout, reserve, ledger, notifications, and owners.
2. Establish a stable merchant transaction ID, customer-visible order reference, immutable amount and currency intent, processor generation, and durable idempotency namespace. Maintain a processor-of-record ownership ledger for every payment, subscription, token or mandate, refund, dispute, reserve, settlement, and payout.
3. Map every state transition and consumer, including retries, delayed methods, partial capture, incremental authorization, reversal, cancellation, refund, dispute, subscription, marketplace split, and offline recovery.
4. Reconcile processor, order, bank, payout, reserve, fee, tax, receivable, liability, ledger, and customer-support records before migration.
5. Determine which cards, network tokens, wallet permissions, bank mandates, credentials, and authentication exemptions are portable. Obtain consent or recapture authorization where required.
6. Transfer or replace sensitive credentials only through approved PCI and provider pathways. Never expose primary account data to an out-of-scope migration tool.
7. Implement signed, replay-resistant webhooks and state-machine rules that tolerate duplicate, delayed, missing, and out-of-order events.
8. Fence mutation by processor generation. Only one path may create an authorization or debit for a payment intent; shadow testing must use nonfinancial or isolated test traffic.
9. Keep refunds, reversals, disputes, chargebacks, reserves, and payout corrections with the processor that owns the original transaction unless a proven transfer mechanism says otherwise.
10. Validate authentication, authorization, capture, token, recurring, refund, dispute, fraud, notification, settlement, reconciliation, and support flows for every method and region.
11. Canary by entity, country, method, and cohort. Compare approval, conversion, latency, fraud, duplicate, refund, dispute, fee, settlement, payout, reserve, ledger, and customer outcomes.
12. Rehearse cutover and rollback with routing checkpoints, stale-worker fencing, webhook overlap, in-flight ownership, data capture, support scripts, and independent financial reconciliation.
13. Roll back by stopping new routing to the failed generation while continuing to service transactions at their owning processor. Enforce an ambiguity barrier: no retry, refund, reversal, or compensating action may cross processors while the original outcome is unknown, and never replay an ambiguous debit.
14. Retire old initiation paths only after token, dispute, refund, payout, reserve, reporting, retention, audit, and support obligations have durable owners and retrieval tests.

## Failure plan

- If transaction outcome is unknown, mark it indeterminate, query the owning processor through a safe reference, and do not retry a debit until resolved.
- If duplicate charges or missing refunds appear, stop the affected cohort, preserve logs, protect customers, and reconcile before resuming.
- If token or mandate portability fails, keep that cohort on the old path or obtain fresh customer authorization.
- If processor, bank, ledger, and customer state disagree, preserve all evidence and treat the financial result as unresolved.

## Worked example

A marketplace must migrate card, wallet, bank-debit, subscription, refund, dispute, token, webhook, payout, reserve, fraud, and reconciliation flows to a new payment processor across countries while old and new transactions overlap and no customer may be charged twice or lose a refund. The team assigns stable payment intents and processor generations, validates portable credentials, fences authorization writes, leaves historical refunds and disputes with their owning processor, canaries by method and country, and rehearses rollback without replaying ambiguous transactions.

## Done

- A payment migration register verifies transaction states, methods, credentials, consumers, processor ownership, controls, jurisdictions, approvals, and retirement obligations
- A transaction, payout, and customer parity report proves authorization, capture, refund, dispute, fee, reserve, settlement, ledger, notification, and customer outcome across representative cohorts
- A cutover and rollback rehearsal demonstrates generation fencing, durable idempotency, webhook overlap, in-flight ownership, indeterminate-outcome handling, stop authority, support, and independent financial reconciliation
