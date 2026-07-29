---
name: design-a-filtering-interface
category: design
description: Design filters that expose available dimensions, current constraints, result effects, and reversible changes. Use when users narrow a large collection through multiple attributes.
---

# design-a-filtering-interface

Keep applied constraints visible and preserve the user's place while results change.

## Procedure

1. Identify user decisions, filter dimensions, values, dependencies, and data freshness.
2. Choose single, multiple, range, hierarchy, date, or text controls to match semantics.
3. Show selected state, result count, unavailable values, and clear-all behavior.
4. Define immediate versus explicit apply, batching, loading, and cancellation.
5. Preserve shareable URL, back navigation, defaults, and session restoration where appropriate.
6. Support keyboard, focus, labels, announcements, zoom, and mobile overflow.
7. Distinguish zero results, no data, permission limits, and errors.
8. Test combinations, dependent values, stale links, large option sets, and removal.
9. Measure task completion and abandoned or contradictory combinations.

## Guardrails

- Do not hide applied filters in an unlabeled icon.
- Avoid counts that reveal unauthorized data.
- Never reset unrelated choices without explaining the change.

## Done

- A filter behavior specification covers states, combinations, and navigation
- Desktop, mobile, keyboard, and zero-result paths are tested
- URL and visible filter state reconcile after navigation
