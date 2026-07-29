---
name: design-a-checkout-flow
category: web
description: Design a trustworthy checkout flow that preserves price, inventory, payment, accessibility, and recovery invariants. Use when customers must complete a purchase across cart, identity, delivery, tax, discounts, and payment decisions.
---

# design-a-checkout-flow

Make the committed order explainable and safe to retry.

## When to use

- Use for new checkout, conversion redesign, guest checkout, subscriptions, or additional payment and delivery methods.
- Do not optimize completion rate by hiding material price, renewal, delivery, or cancellation terms.

## Procedure

1. Map guest and account journeys, products, quantities, currencies, discounts, tax, shipping, inventory, subscriptions, legal terms, and supported regions.
2. Define authoritative state and money invariants for cart, quote, hold, payment attempt, order, fulfillment, cancellation, and refund.
3. Show item, price, fees, tax, delivery, currency, renewal, and final commitment clearly before purchase.
4. Minimize data collection and use tokenized provider fields so raw payment credentials do not enter application systems.
5. Support address, payment, authentication, and fraud failures with field-level guidance, preserved safe input, and no duplicate submission.
6. Use idempotency across submit, provider callbacks, retries, refreshes, and delayed responses.
7. Design keyboard order, labels, errors, status announcements, focus recovery, zoom, mobile input, and assistive-technology behavior.
8. Define inventory expiration, abandoned checkout, resumability, confirmation, receipt, support, and recovery paths.
9. Instrument step and outcome events without collecting payment or sensitive identity values.
10. Prototype and test normal, declined, timeout, duplicate, out-of-stock, changed-price, promotion, tax, authentication, accessibility, and return-from-wallet journeys.

## Failure plan

- If payment outcome is ambiguous, reconcile with the provider before offering another charge attempt.
- If price or terms change, require clear renewed confirmation.
- Never use client state as the authoritative record of money or inventory.

## Done

- A checkout journey and state model records money, inventory, identity, legal, privacy, and accessibility decisions
- Prototype and integration evidence covers normal, failure, retry, timeout, duplicate, and assistive-technology paths
- Reconciliation proves each committed payment maps to one understandable order and recoverable customer outcome
