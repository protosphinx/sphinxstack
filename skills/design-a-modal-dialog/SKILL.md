---
name: design-a-modal-dialog
category: design
description: Decide whether a modal fits and design its accessible interaction. Use when a focused decision or short task may interrupt the current page and needs safe focus, dismissal, and recovery behavior.
---

# design-a-modal-dialog

## Procedure

1. Confirm the task truly requires blocking background interaction; prefer inline or separate-page flows otherwise.
2. Define trigger, purpose, title, content, actions, default focus, and destructive consequences.
3. Keep the task short and preserve context or input on cancel.
4. Mark dialog semantics and accessible name correctly.
5. Move focus inside on open, contain keyboard focus, and return it logically on close.
6. Support Escape and a visible close action unless safety requires an explicit decision.
7. Prevent background interaction and make it inert without hiding the dialog.
8. Handle small screens, zoom, long content, nested errors, loading, and asynchronous completion.
9. Test keyboard, screen reader, touch, cancel, repeated open, and focus-origin deletion.

## Guardrails

- Do not nest modal dialogs without a compelling tested requirement.
- Never make outside-click the only dismissal method.
- Avoid using a modal for information that should remain referenceable.

## Done

- A dialog specification records rationale, semantics, focus, actions, dismissal, and states
- Keyboard, screen-reader, zoom, mobile, and recovery tests pass
- Destructive and failure behavior is verified
