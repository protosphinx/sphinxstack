---
name: redesign-a-critical-checkout-flow
category: web
description: Redesign a critical checkout while preserving financial, inventory, accessibility, legal, fraud, and customer-recovery invariants through controlled migration. Use when a high-volume purchase flow cannot tolerate duplicate orders, lost payments, or inaccessible outcomes.
---

# redesign-a-critical-checkout-flow

Redesign the journey without weakening the transaction system underneath it.

## When to use

- Use for a material checkout architecture, state, provider, global-market, subscription, or experience migration with live customers and money movement.
- Use `design-a-checkout-flow` for a bounded new journey without overlapping production states or financial migration risk.

## Preconditions

- Confirm product, commerce, finance, tax, legal, accessibility, fraud, security, privacy, support, fulfillment, data, and payment-provider owners.
- Preserve current journey analytics, transaction and order schemas, provider contracts, idempotency behavior, inventory rules, refunds, chargebacks, customer complaints, accessibility findings, experiments, and reconciliation records.
- Define approval authority, financial tolerances, supported markets and tenders, migration windows, customer communications, incident response, and rollback constraints.

## Procedure

1. Build a **checkout state and money model** for cart, quote, promotion, tax, shipping, inventory hold, payment method, authorization, challenge, capture, order, subscription, fulfillment, cancellation, refund, and chargeback.
2. Define invariants: one committed customer intent creates at most one order and authorized charge; currency and amount remain explicit; inventory and promotion transitions are explainable; every provider outcome is reconcilable.
3. Inventory guest and account states, saved data, wallets, cards, regions, currencies, tax, delivery, accessibility needs, legal terms, fraud decisions, support actions, and recovery journeys.
4. Separate payment credentials into provider-controlled tokenization. Define idempotency keys, correlation identifiers, webhook ordering, timeout handling, and an independent financial control ledger.
5. Design the journey to disclose items, recurring terms, price, fees, tax, currency, delivery, data use, and final commitment before purchase.
6. Build **accessibility and customer protection** into field semantics, keyboard order, focus, validation, status announcements, authentication, wallets, challenges, zoom, mobile, language, and an equivalent support path.
7. Define fraud inputs and automated decisions with documented authority, contestability, protected-trait and accessibility review, manual escalation, and no dark-pattern pressure to bypass controls.
8. Create a compatibility layer between legacy and new state. Pin every checkout intent to one execution version and durable cross-version idempotency namespace, specify which system owns each write, and prevent an in-flight intent or callback from moving between engines.
9. Test normal, declined, challenged, timeout, duplicate, reordered webhook, out-of-stock, price change, promotion, tax, wallet return, lost session, assistive technology, refund, and abandonment cases.
10. Run shadow calculation and controlled replay only where it cannot create side effects. Reconcile item, amount, currency, tax, payment, order, inventory, and customer outcome.
11. Apply **migration and experiment controls**: eligibility, assignment persistence, informed disclosures, excluded high-risk cases, canary markets, traffic limits, stop conditions, and no metric that rewards unauthorized or inaccessible completion.
12. Rehearse **recovery and reconciliation** for provider ambiguity, partial order creation, inventory expiry, duplicate attempts, legacy fallback, and rollback while preserving accepted payments, orders, refunds, and holds.
13. Release by internal, low-risk tender, market, and traffic wave. Monitor financial reconciliation, duplicate and orphan rates, conversion, declines, accessibility failures, fraud, support, latency, and fulfillment.
14. Stop creating new legacy intents before retirement, but keep their callback, refund, dispute, renewal, and support paths until every intent and financial record reaches a reconciled terminal disposition.

## Failure plan

- If payment outcome is ambiguous, stop the user's retry loop and reconcile provider and ledger state before another financial attempt.
- If rollback cannot preserve accepted payment, order, refund, or inventory state, keep the new transaction owner and roll back only presentation or routing.
- If accessibility, legal disclosure, fraud, or price parity fails for a cohort, remove that cohort from the new flow and preserve evidence.
- Never repair reconciliation by creating or canceling financial records without an authorized, traceable compensation.

## Worked example

A global retailer replaces checkout for guest and account users across multiple currencies, taxes, discounts, inventory holds, cards, wallets, and subscriptions. The old and new flows overlap. The team models every state and money invariant, tokenizes payments, uses idempotent intent and an independent ledger, tests assistive-technology and provider failures, canaries selected markets, reconciles every accepted payment to one order, and rehearses presentation rollback that never loses committed orders or charges.

## Done

- A checkout architecture and journey record captures checkout state and money model, ownership, customer disclosures, fraud, privacy, markets, compatibility, and decisions
- A payment and accessibility verification proves amounts, currencies, idempotency, provider outcomes, order and inventory parity, critical journeys, and assistive-technology behavior
- A rollout and recovery rehearsal verifies migration and experiment controls, financial reconciliation, stop conditions, state-compatible rollback, support, and legacy retirement gates
