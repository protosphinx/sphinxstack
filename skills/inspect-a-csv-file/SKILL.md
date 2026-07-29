---
name: inspect-a-csv-file
category: data
description: Inspect a CSV file for encoding, delimiter, headers, shape, types, missing values, quoting, duplicates, and sensitive content. Use when receiving or troubleshooting a tabular text export before analysis or import.
---

# inspect-a-csv-file

Preserve the original bytes and inspect before converting.

## When to use

- Use for comma, tab, semicolon, or other delimited files.
- Do not upload private data to an external viewer without permission.

## Procedure

1. Record source, file name, size, checksum, timestamp, expected rows, columns, delimiter, and encoding.
2. Inspect raw opening and closing lines for byte-order marks, headers, newlines, quotes, escapes, and truncation.
3. Parse with an explicitly chosen encoding, delimiter, quote, escape, and header rule.
4. Count rows and columns; flag ragged rows, blank headers, duplicate headers, empty records, and embedded newlines.
5. Profile candidate types, missing markers, distinct counts, ranges, lengths, leading zeros, and date formats.
6. Check duplicate rows or keys and scan field names plus samples for sensitive content.
7. Compare counts and control totals to the source specification without modifying the original.

## Done

- A CSV inspection report records checksum, parsing rules, shape, headers, types, missing values, duplicates, sensitivities, and anomalies
- Raw-byte, parse, row-count, column-count, key, type, and control-total checks verify the file can be used safely
