---
name: write-accessible-error-messages
category: write
description: Write accurate error messages that help users understand and recover. Use when forms, workflows, permissions, services, or validation need text that works with assistive technology and without guesswork.
---

# write-accessible-error-messages

## Procedure

1. Identify the actual condition, affected action, known cause, safe recovery, and support route.
2. Name the field, object, or task in user language.
3. State what needs attention without blame or internal codes.
4. Give a specific correction, allowed format, retry condition, or alternative.
5. Preserve entered data and distinguish temporary, validation, permission, conflict, and destructive failures.
6. Place field errors beside labels and add an error summary for multi-field submission.
7. Move focus appropriately and announce updates through correct semantics.
8. Keep color, icon, and position supplemental to text.
9. Test long values, localization, screen readers, keyboard, retry, and repeated failure.

## Guardrails

- Do not reveal whether a protected account or record exists.
- Never promise success when recovery depends on another system.
- Avoid vague “invalid” or “something went wrong” where safe detail exists.

## Done

- An error-message set maps conditions to clear text and recovery
- Focus, announcement, field association, and preserved-input checks pass
- Security and localization review are recorded
