---
name: validate-structured-data
category: web
description: Validate structured page data against syntax, type rules, visible content, URLs, and current source facts. Use when JSON-LD or other semantic markup supports search or machine consumers.
---

# validate-structured-data

Make markup a faithful machine-readable form of content users can verify on the page.

## Procedure

1. Identify the page purpose, canonical URL, applicable schema type, and desired consumer.
2. Extract every structured-data block from the rendered response.
3. Validate syntax, type, required properties, formats, identifiers, and nesting.
4. Compare names, dates, prices, availability, authorship, ratings, and images with visible content.
5. Resolve URLs and confirm canonical, language, and entity identity consistency.
6. Remove invented, hidden, stale, duplicated, or unsupported claims.
7. Test representative templates and edge cases with authoritative validators.
8. Save a structured-data validation report and monitor template changes.

## Guardrails

- Do not mark up content that users cannot see or substantiate.
- Passing a syntax tool does not guarantee eligibility or search display.
- Avoid one global entity identifier for distinct real-world things.

## Done

- A validation report records page, types, errors, warnings, and fixes
- Markup facts are verified against visible source content
- URLs, canonical identity, and representative templates are tested
