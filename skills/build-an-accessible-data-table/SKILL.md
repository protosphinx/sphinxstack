---
name: build-an-accessible-data-table
category: web
description: Build a data table with correct relationships, usable controls, responsive behavior, and assistive-technology verification. Use when users must compare, sort, filter, paginate, or act on structured rows and columns.
---

# build-an-accessible-data-table

Preserve data relationships before adding interaction.

## When to use

- Use a table when row and column relationships matter.
- Use a list, cards, or definition structure when the content has no tabular relationship.

## Procedure

1. Define user questions, columns, row identity, actions, density, responsive needs, and expected data volume.
2. Use native table structure with a useful caption and header cells associated by `scope` or explicit identifiers when relationships are complex.
3. Keep noninteractive cells out of the tab order. Use native buttons, links, checkboxes, and inputs for actual actions.
4. Implement sorting with visible direction, accessible names, deterministic tie handling, and announced results.
5. Label filtering, selection, pagination, totals, and row actions with context that remains clear outside visual position.
6. Represent loading, empty, partial, error, stale, and permission-limited states without invalid table markup.
7. Choose responsive scrolling, prioritized columns, or an alternate semantic view without losing headers or hiding required actions.
8. Treat virtualization carefully: maintain stable focus, row identity, counts, announcements, and access to offscreen data.
9. Test zoom, keyboard, screen readers, narrow screens, long translations, large values, empty data, thousands of rows, and updates after interaction.

## Failure plan

- If the visual grid cannot expose reliable semantics, simplify the interaction or offer an accessible alternate view.
- If virtualization loses focus or relationships, disable it for affected modes before release.

## Done

- The table implementation exposes caption, headers, cells, controls, states, and row identity with valid semantics
- Interaction tests verify sorting, filtering, pagination, selection, errors, updates, zoom, keyboard, and screen readers
- An accessibility report records supported data sizes, responsive strategy, virtualization decisions, issues, and retest evidence
