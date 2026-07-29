---
name: redesign-a-global-billing-process
category: money
description: Redesign global billing through explicit financial state, contract and tax controls, migration reconciliation, customer protection, and reversible cutover. Use when replacing or consolidating billing across products, entities, currencies, regions, or business models.
---

# redesign-a-global-billing-process

An invoice is a financial and customer-facing state transition, not just a rendered document.

## When to use

- Use when migrating subscription, usage, seat, marketplace, credit, collection, refund, or tax billing across systems or entities.
- Obtain qualified accounting, tax, payments, privacy, security, and legal review for the applicable countries and contracts.

## Preconditions

- Establish executive, billing, finance, accounting, tax, legal, product, engineering, data, collections, support, security, and regional authority.
- Define the in-scope entities, products, contracts, countries, currencies, customer segments, source systems, close periods, materiality, and success thresholds.
- Freeze uncontrolled billing-rule changes or route them through the migration's versioned change process.

## Procedure

Complete the **billing state and financial model**, **contract, tax, and customer controls**, and **migration and dual-run reconciliation** before approving any cutover.

1. Build a **billing architecture and control register** covering contract version, catalog, price, quantity, usage, discount, credit, tax, invoice, collection, payment, refund, dispute, ledger, revenue schedule, notification, and owner.
2. Define authoritative state and invariants: stable customer and contract IDs, immutable issued invoice versions, explicit effective times, currency and rounding rules, unique credit application, and traceable corrections. Maintain a fenced billing-authority ledger keyed by account, billable obligation, and period with generation and idempotency identity; a missing or ambiguous owner blocks invoice, collection, credit, and posting actions.
3. Map quote-to-cash events and consumers, including APIs, batch jobs, webhooks, tax engines, processors, bank files, accounting, reporting, support, data exports, and customer portals.
4. Reconcile source contracts, entitlements, prices, usage, discounts, tax registrations, exemptions, credits, balances, payment methods, dunning states, and open disputes before transforming data.
5. Design jurisdiction-aware invoice content, numbering, sequencing, tax point, currency, rounding, correction, retention, e-invoicing, and entity controls.
6. Make bill-run and event handling idempotent through a durable business key and generation epoch. Fence stale workers and retries.
7. Permit only one authoritative writer for any billable event. A shadow engine may calculate and render, but must not issue, collect, credit, refund, notify, or post.
8. Dual-run representative cycles and compare line, invoice, customer, tax, receivable, deferred balance, ledger, collection, notification, and document outputs.
9. Classify differences by rule, data, time, currency, rounding, tax, migration, or defect. Require zero unexplained customer or financial differences at the governed threshold.
10. Migrate in reversible waves by entity, region, product, or contract cohort. Preserve references between old and new invoices, payments, credits, refunds, disputes, and ledger entries.
11. Rehearse cutover with checkpoints, stop authority, support scripts, customer communication, close coordination, monitoring, and independent reconciliation.
12. Define rollback by state: stop new issuance, fence workers, preserve every issued invoice and accepted payment, restore authoritative routing, and reconcile in-flight credits, refunds, collections, and notifications without replay.
13. Monitor duplicate or missing invoices, tax exceptions, balance changes, collection failures, disputes, support contacts, reconciliation breaks, and close impact through stabilization.
14. Retire legacy mutation paths only after retention, audit, access, customer-history, dispute, tax, and rollback obligations have owners and proven retrieval.

## Failure plan

- If duplicate charging, invoice gaps, lost credits, incorrect tax, or ledger divergence appears, stop the affected wave and preserve both system states.
- If authority is ambiguous, block financial mutation until a single writer and generation epoch are proven.
- If rollback would invalidate an issued document or settled payment, preserve it and run a controlled forward correction instead of deleting history.
- If a country or contract cannot meet legal or customer requirements, keep that cohort on the governed legacy path.

## Worked example

A global subscription company must redesign billing across contracts, usage, seats, multiple currencies, taxes, discounts, credits, invoices, collections, revenue schedules, payment methods, refunds, and regional legal terms while legacy and new engines overlap and duplicate invoices, lost credits, or misstated balances are unacceptable. The team establishes immutable invoice state, reconciles contract and customer inputs, runs a nonmutating shadow engine, resolves line-to-ledger differences, migrates reversible cohorts, and rehearses cutover plus a rollback that preserves issued documents and payments.

## Done

- A billing architecture and control register verifies authoritative states, invariants, jurisdictions, event consumers, ownership, approvals, and versioned rules
- An invoice, ledger, and customer parity report proves contract, usage, price, tax, credit, balance, document, collection, revenue, and notification equivalence with no unexplained material differences
- A cutover and rollback rehearsal demonstrates one-writer fencing, idempotency, wave gates, stop authority, in-flight handling, issued-document preservation, customer support, and independent post-cutover reconciliation
