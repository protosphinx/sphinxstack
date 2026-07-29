---
name: design-an-empty-state
category: design
description: Design an accurate and useful interface when expected content is absent. Use when first use, no results, completed work, filters, permissions, loading failure, or deleted content could otherwise look identical.
---

# design-an-empty-state

## Procedure

1. Identify the exact cause: new account, no data, no match, restricted access, completion, failure, or deletion.
2. Define what the system knows and must not imply.
3. State the condition in plain language and preserve the page's purpose and orientation.
4. Offer the safest useful next action, alternative, reset, support, or no-action confirmation.
5. Explain prerequisites, permissions, cost, or irreversible consequences before action.
6. Keep search and filtered zero states distinct from an empty collection.
7. Provide accessible headings, focus, links, illustrations, and status announcements.
8. Test each cause, role, language, screen size, and failure path.

## Guardrails

- Do not blame the user or celebrate absence that may reflect loss.
- Never reveal the existence of restricted content.
- Avoid decorative calls to action unrelated to recovery.

## Done

- An empty-state matrix maps each cause to truthful text and action
- Permission, no-result, failure, and first-use cases are verified separately
- Accessibility and recovery checks pass
