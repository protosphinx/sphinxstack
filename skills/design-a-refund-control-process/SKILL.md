---
name: design-a-refund-control-process
category: money
description: Design a refund control process with eligibility, identity, authorization, calculation, segregation, payment, reconciliation, exceptions, abuse detection, communication, and audit. Use when refunds create material customer or financial risk.
---
# design-a-refund-control-process
## When to use
- Use for commerce, subscriptions, fees, deposits, claims, service credits, or manual refund operations.
- Do not make a customer absorb internal reconciliation delays after entitlement is established.
## Procedure
1. Define products, jurisdictions, payment rails, policies, obligations, service levels, materiality, and owners.
2. Model request identity, original transaction, eligibility, reason, amount, tax, currency, discounts, credits, and prior adjustments.
3. Separate request, approval, release, policy administration, and reconciliation according to risk.
4. Enforce idempotency, cumulative limits, destination controls, authority thresholds, dual approval, and immutable events.
5. Design customer status, evidence requests, accessibility, dispute, correction, and escalation without exposing fraud rules.
6. Reconcile processor, bank, ledger, tax, inventory, loyalty, and customer-account effects at item level.
7. Test duplicates, partial refunds, chargebacks, expired cards, cross-currency, outages, insider abuse, and reversals.
## Failure plan
- Pause release without erasing entitlement, preserve the case, and route exceptions to named financial and customer owners.
## Worked example
A marketplace prevents a retry from paying twice while reconciling seller balance, tax, loyalty points, and the customer receipt.
## Done
- A refund control design records eligibility, calculation, authority, payment, communication, exceptions, abuse controls, and reconciliation
- Scenario, segregation, idempotency, ledger, processor, customer, and exception evidence verifies the process
