---
name: test-an-ecommerce-checkout
category: web
description: Test an ecommerce checkout across cart, identity, address, delivery, tax, discounts, payment, confirmation, accessibility, and financial reconciliation. Use when releasing or diagnosing a customer purchase journey.
---

# test-an-ecommerce-checkout

Verify both the customer outcome and every financial side effect.

## When to use

- Use for guest, account, subscription, marketplace, physical, digital, or mixed purchases.
- Never use a live payment method or create real fulfillment without explicit authorization and reversal controls.

## Procedure

1. Define environment, products, currencies, regions, taxes, delivery, discounts, payment methods, user states, and expected totals.
2. Prepare traceable test data and confirm isolation, stock, notification, fulfillment, and payment-provider behavior.
3. Test cart quantity, variants, stock, prices, promotions, gift value, shipping, tax, fees, and rounding.
4. Test guest and account identity, address, localization, keyboard, screen reader, zoom, errors, and preserved state.
5. Exercise success, decline, authentication, timeout, retry, duplicate submit, partial failure, abandonment, and return.
6. Verify one order and payment intent per customer action with explicit indeterminate handling.
7. Reconcile confirmation, email, order, inventory, tax, payment, ledger, fulfillment, analytics, refund, and support views.
8. Test mobile, slow network, multiple tabs, session expiry, back navigation, and provider outage.

## Done

- A checkout test report records scenario, inputs, prices, tax, delivery, accessibility, payment state, order, and observed outcomes
- Cart, total, duplicate, timeout, accessibility, notification, inventory, payment, ledger, fulfillment, analytics, and cleanup checks verify the purchase
