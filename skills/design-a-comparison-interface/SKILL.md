---
name: design-a-comparison-interface
category: design
description: Design a comparison interface with normalized attributes, transparent missingness, user-relevant differences, and accessible scanning. Use when people must evaluate products, plans, records, candidates, or scenarios side by side.
---

# design-a-comparison-interface

Normalize the underlying facts before aligning the columns.

## When to use

- Use when several options share decision-relevant attributes.
- Use separate detail views when forcing options into one schema would mislead.

## Procedure

1. Define users, decision, options, criteria, source, freshness, and consequences of incorrect comparison.
2. Normalize units, periods, currencies, definitions, scope, and option versions.
3. Separate facts, calculated values, estimates, opinions, and unavailable data.
4. Prioritize meaningful differences while allowing full-detail inspection.
5. Keep row labels and option identity visible during navigation and responsive changes.
6. Explain missing, not applicable, unknown, estimated, and excluded values distinctly.
7. Support sorting or filtering only when it preserves the comparison contract.
8. Test keyboard, screen readers, zoom, narrow screens, long labels, many options, print, and user-selected criteria.
9. Validate comprehension and decisions with representative data, including a near-tie and an incomplete option.

## Failure plan

- If options use incomparable definitions, show separate measures or block the derived comparison.
- If source freshness differs materially, expose dates beside the affected values.

## Done

- A comparison model records options, criteria, normalized units, sources, freshness, missingness, calculations, and limitations
- Prototype tests verify scanning, identity, accessibility, responsive behavior, and correct interpretation of differences
