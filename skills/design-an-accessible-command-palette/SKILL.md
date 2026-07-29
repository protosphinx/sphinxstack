---
name: design-an-accessible-command-palette
category: design
description: Design an accessible command palette with discoverable entry, search, keyboard and screen-reader behavior, context, confirmation, undo, and alternatives. Use when many actions need fast access without replacing clear navigation.
---
# design-an-accessible-command-palette
## When to use
- Use as an accelerator for existing reachable actions.
- Never make critical functionality palette-only.
## Procedure
1. Inventory actions, context, permission, risk, frequency, names, and alternatives.
2. Define discoverable trigger, shortcut conflict handling, and open or close state.
3. Implement dialog naming, focus, combobox semantics, result count, active option, and keyboard movement.
4. Support typo, synonym, category, recent, empty, loading, and error states.
5. Show action scope and require confirmation for destructive or irreversible work.
6. Restore focus, support undo, and preserve equivalent navigation.
7. Test zoom, screen readers, keyboards, mobile, translation, and reduced motion.
## Failure plan
- Fall back to normal navigation when search or assistive semantics fail.
## Worked example
A delete command includes workspace scope and confirmation while ordinary navigation remains available.
## Done
- A command-palette design records actions, context, permissions, entry, search, focus, semantics, confirmation, undo, and alternatives
- Keyboard, screen-reader, shortcut, destructive, empty, error, zoom, mobile, translation, and fallback tests verify access
