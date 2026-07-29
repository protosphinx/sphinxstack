---
name: check-a-dataset-date-range
category: data
description: Check a dataset's date range for coverage, timezone, granularity, gaps, future values, duplicates, and expected cutoffs. Use when verifying whether time-based data is complete for analysis or reporting.
---

# check-a-dataset-date-range

Identify which timestamp represents the business event.

## When to use

- Use before period comparisons, joins, reporting, or time-series analysis.
- Do not silently convert local, UTC, date-only, and effective-period fields into one meaning.

## Procedure

1. Record dataset version, timestamp fields, business definitions, timezone, expected start, expected end, and cadence.
2. Parse each field with explicit format, locale, timezone, and invalid-value handling.
3. Calculate minimum, maximum, null, invalid, future, and outlier dates.
4. Count records by expected interval and identify missing, sparse, duplicate, or unusually dense periods.
5. Compare event, creation, update, ingestion, and effective timestamps where available.
6. Check daylight-saving transitions, leap dates, month ends, cutoff boundaries, and partial current periods.
7. Reconcile coverage to source availability and document intentional exclusions.

## Done

- A date-coverage report records definitions, formats, timezone, min, max, gaps, duplicates, cutoffs, and exclusions
- Interval, boundary, timezone, partial-period, invalid-date, and source-coverage checks verify the usable range
