---
name: design-a-data-table
category: design
description: Design a usable and accessible table around real comparison and action tasks. Use when structured data needs sorting, filtering, selection, editing, responsive behavior, and clear relationships.
---

# design-a-data-table

## Procedure

1. Define user questions, row entity, column meaning, dataset size, actions, and decision risk.
2. Remove decorative columns and prioritize comparison order.
3. Specify headings, units, formats, missing values, freshness, source, and definitions.
4. Use semantic table structure where relationships are tabular.
5. Define sorting, filtering, pagination, search, selection, bulk action, editing, and saved state.
6. Keep row identity and focus stable after updates.
7. Design loading, empty, partial, error, stale, permission, and high-density states.
8. Choose responsive behavior such as priority columns, controlled scroll, detail views, or alternate lists without losing meaning.
9. Test keyboard, screen reader, zoom, large data, long text, localization, and destructive actions.
10. Verify calculations and exported data against the source.

## Guardrails

- Do not encode status only by color or icon.
- Never hide excluded rows or filters from result interpretation.
- Avoid client-side behavior that corrupts source order or precision.

## Done

- A data-table specification covers structure, meaning, interactions, states, and responsive behavior
- Accessibility and large-data journey tests pass
- Source, calculation, filter, and export reconciliation is recorded
