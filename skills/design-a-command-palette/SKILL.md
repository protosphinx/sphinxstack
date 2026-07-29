---
name: design-a-command-palette
category: design
description: Design a command palette with discoverable search, scoped actions, keyboard access, permissions, confirmation, and recovery. Use when frequent users need fast access to a large set of navigation and product commands.
---

# design-a-command-palette

Make speed an alternative path, not the only path.

## When to use

- Use for complex products with many recurring navigation and action commands.
- Do not hide essential actions exclusively behind an undocumented shortcut.

## Procedure

1. Inventory commands, destinations, objects, scope, permissions, shortcuts, side effects, and frequency.
2. Create a normalized command model with label, aliases, category, current context, availability, description, and action.
3. Choose a shortcut that does not conflict with browser, operating-system, assistive-technology, or application commands.
4. Design open, query, results, empty, loading, permission, disabled, nested, confirmation, success, and failure states.
5. Keep focus in the palette where appropriate, expose names and status, support arrows and typing, Escape, and return focus.
6. Rank results predictably without leaking inaccessible objects or training on sensitive activity unnecessarily.
7. Require confirmation or review for destructive, broad, financial, or security-sensitive commands.
8. Provide undo or recovery where effects are reversible and preserve typed context on recoverable failure.
9. Test keyboard-only, screen readers, zoom, input methods, slow data, permissions, duplicate labels, and localization.

## Failure plan

- If permission changes while open, reauthorize at execution and fail closed.
- If search is unavailable, preserve categorized navigation to supported commands.

## Done

- A command catalog records labels, aliases, scope, permissions, availability, shortcuts, side effects, and recovery
- Prototype tests verify search, ranking, keyboard, focus, screen readers, confirmation, failure, and current authorization
