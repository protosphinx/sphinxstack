---
name: profile-a-financial-dataset
category: data
description: Profile a financial dataset for structure, completeness, consistency, lineage, and reconciliation before analysis or modeling. Use when receiving ledger, transaction, billing, forecast, or reporting data.
---

# profile-a-financial-dataset

Establish what one row means and whether control totals survive extraction before drawing conclusions.

## When to use

- Use before cleaning, joining, analyzing, migrating, or modeling financial data.
- Do not alter the only source extract or expose sensitive account, customer, employee, or payment data.

## Procedure

1. Preserve the source file and record system, query, filters, extract time, owner, reporting window, and checksum.
2. Define row grain, primary identifiers, entities, currencies, units, signs, time zones, and accounting periods.
3. Profile column types, nulls, distinct values, cardinality, ranges, date coverage, and invalid encodings.
4. Test identifier uniqueness at the declared grain and quantify exact and likely duplicates.
5. Check required relationships among accounts, transactions, invoices, customers, entities, and periods.
6. Analyze numeric distributions, zeros, negatives, rounded values, extreme values, and discontinuities without deleting outliers.
7. Check currency conversion, debit-credit signs, tax treatment, and period cutoffs against documented rules.
8. Reconcile record counts and financial control totals to the source report by entity, currency, and period.
9. Publish issues by severity, affected rows, likely cause, analysis impact, and proposed owner.

## Worked example

A billing extract appears to contain one row per invoice. Profiling shows credit notes share invoice identifiers and some rows are line items, so the true grain is document line. A timezone conversion also moves late-night transactions into the next month. The profile report quantifies both issues and reconciles the corrected grouping to the billing control report before any revenue analysis begins.

## Done

- A dataset profile report records lineage, row grain, schema, distributions, quality checks, sensitive fields, and issue counts
- Counts and monetary totals are reconciled to source controls, with every unresolved variance listed by entity, period, and currency
