---
name: validate-column-types
category: data
description: Validate dataset column types against definitions, values, nullability, formats, ranges, and downstream use. Use when importing, profiling, migrating, or troubleshooting tabular data.
---

# validate-column-types

Validate semantic type, not only what a parser can coerce.

## When to use

- Use for files, tables, APIs, dataframes, and warehouse extracts.
- Do not convert identifiers with leading zeros into numbers or ambiguous dates without a rule.

## Procedure

1. Record dataset version, schema, field definitions, nullability, units, precision, timezone, and valid codes.
2. Parse each column under the expected type while retaining original values and parse failures.
3. Check booleans, integers, decimals, currency, percentages, strings, identifiers, dates, timestamps, arrays, and structured values.
4. Test range, scale, length, format, enum, sign, unit, timezone, and null constraints.
5. Detect mixed types, locale formats, scientific notation, overflow, truncation, leading-zero loss, and sentinel values.
6. Compare observed types to source and downstream schemas.
7. Record exceptions with sample references, counts, impact, and owner.

## Done

- A type-validation report records expected and observed types, constraints, failures, exceptions, impact, and source references
- Parse, range, precision, null, identifier, timezone, locale, and downstream-schema checks verify every column
