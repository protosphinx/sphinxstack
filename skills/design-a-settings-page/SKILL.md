---
name: design-a-settings-page
category: design
description: Design settings with clear scope, defaults, dependencies, permissions, save behavior, reversibility, and recovery. Use when users need to inspect or change persistent product, account, workspace, privacy, or notification preferences.
---

# design-a-settings-page

Make it clear what changes, for whom, and when.

## When to use

- Use for persistent preferences, account configuration, workspace administration, or policy controls.
- Keep rare dangerous administration separate from everyday personal preferences.

## Procedure

1. Inventory each setting's scope, owner, current source, default, possible values, dependencies, permissions, and side effects.
2. Organize by user goal and scope such as personal, workspace, security, privacy, billing, and integrations.
3. Write labels and descriptions that state effect, not implementation jargon.
4. Expose current value, inherited value, source, and whether change applies immediately or after another event.
5. Choose autosave, explicit save, or staged review based on consequence and dependency.
6. Protect destructive, security, billing, and organization-wide changes with proportionate confirmation and reauthentication.
7. Design validation, conflict, unsaved, partial failure, offline, permission, and rollback behavior.
8. Test keyboard, focus, screen readers, zoom, long translations, mobile, concurrent edits, and changed permissions.
9. Provide change history, reset, recovery, or support where errors have lasting impact.

## Failure plan

- If a partial save occurs, show which values changed and which did not; never imply atomic success.
- If scope is ambiguous, block the change until the affected account or workspace is explicit.

## Done

- A settings model lists scope, value, default, inheritance, owner, permissions, dependencies, side effects, and save behavior
- Prototype and failure tests verify accessibility, validation, concurrency, partial results, confirmation, history, and recovery
