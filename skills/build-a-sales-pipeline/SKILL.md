---
name: build-a-sales-pipeline
category: data
description: Create a trustworthy sales pipeline with explicit stages, ownership, evidence, aging, and next actions. Use when setting up or repairing opportunity tracking in a CRM, spreadsheet, or operational database.
---

# build-a-sales-pipeline

Model real opportunities and their evidence rather than a list of contacts. Stage changes should represent
observable customer progress, not seller optimism.

## Inputs

- Gather the sales motion, account and contact sources, current opportunities, products, regions, and reporting needs.
- Define privacy, retention, consent, access, ownership, currency, and financial-reporting constraints.
- Review how leads become opportunities and how closed, lost, dormant, duplicate, and renewed work behaves.

## Procedure

1. Define account, contact, lead, opportunity, activity, product, owner, and source as separate concepts.
2. Design stages around observable entry and exit evidence, with a clear closed-lost path.
3. Specify required fields such as problem, amount basis, currency, target date, next action, source, and last evidence.
4. Add ownership, transfer, inactivity, stale-date, and conflict rules.
5. Deduplicate accounts and opportunities using stable identifiers while preserving history.
6. Import or enter a representative sample and reconcile it to the source records.
7. Create views for next actions, aging, stalled opportunities, missing evidence, and upcoming decisions.
8. Define amount, date, probability, and forecast rules without allowing arbitrary overrides.
9. Add change history, access controls, data-quality checks, and a review cadence.
10. Train users on stage evidence and sample the pipeline for consistency.

## Boundaries

Do not invent opportunities, amounts, close dates, contacts, consent, or stage progress. Limit personal data
and access to legitimate business need. Keep financial forecasts distinguishable from booked revenue and
approved reporting.

## Done

- Every pipeline stage has observable entry and exit evidence
- Sample records reconcile to source data without duplicate opportunities
- Owners, next actions, dates, currency, aging, and disqualifiers are recorded
- Data-quality and access checks can detect stale, unsupported, or unauthorized records
