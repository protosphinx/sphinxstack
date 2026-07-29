---
name: review-a-modal-dialog
category: design
description: Review a modal dialog for necessity, focus, keyboard, reading order, content, actions, escape, errors, mobile layout, and recovery. Use when an interruptive overlay must support a clear task.
---
# review-a-modal-dialog
## When to use
- Use on a rendered interactive dialog in representative contexts.
- Do not use a modal for information or work that needs navigation, comparison, or long duration.
## Procedure
1. Verify that interruption and blocked background are necessary.
2. Check title, purpose, concise content, primary and secondary actions.
3. Test initial focus, focus trap, escape, close, return focus, and screen-reader naming.
4. Test destructive confirmation, unsaved state, errors, loading, and repeated submission.
5. Test zoom, mobile keyboard, small viewport, long text, translation, and reduced motion.
6. Observe task completion and revise.
## Failure plan
- Replace with inline, popover, drawer, or page flow when modal constraints harm the task.
## Worked example
A long account-recovery form moves from a modal to a page because mobile keyboard and navigation make completion unsafe.
## Done
- A modal review report records necessity, content, actions, focus, keyboard, accessibility, errors, responsive state, and recommendation
- Escape, return-focus, screen-reader, destructive, submit, zoom, mobile, translation, and recovery tests verify usability
