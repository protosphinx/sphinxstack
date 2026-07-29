---
name: design-mobile-navigation
category: design
description: Design mobile navigation around priority, context, touch, and constrained space. Use when a product or site must preserve findability and task progress without copying desktop navigation into a hidden drawer.
---

# design-mobile-navigation

## Procedure

1. Identify mobile contexts, top tasks, content depth, account state, and access rules.
2. Audit current destinations, labels, task frequency, and failure paths.
3. Choose primary, secondary, contextual, utility, and account navigation roles.
4. Select patterns based on destination count, hierarchy, persistence, and user orientation.
5. Define labels, icons, selected state, badges, disclosure, back behavior, and deep-link entry.
6. Preserve critical actions without crowding or accidental activation.
7. Specify touch target, safe area, scroll, keyboard, screen reader, and landscape behavior.
8. Test localization, large text, zoom, changed permissions, offline state, and interrupted flows.
9. Run task-based prototype tests on representative devices.
10. Document analytics carefully and review task success rather than menu opens alone.

## Guardrails

- Do not use unlabeled icons for unfamiliar destinations.
- Never hide account, privacy, or emergency controls behind unclear gestures.
- Avoid persistent navigation that obscures content at zoom.

## Done

- A mobile navigation specification records roles, labels, states, context, and access
- Touch, keyboard, screen-reader, large-text, and task tests pass
- Deep-link and interrupted-flow recovery are verified
