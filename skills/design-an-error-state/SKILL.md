---
name: design-an-error-state
category: web
description: Design an accessible product error state that explains what happened, protects user work, offers an appropriate recovery, and produces support evidence. Use when a form, page, transaction, upload, integration, or background task can fail and the current message is missing, vague, or unactionable.
---

# design-an-error-state

Design failure as part of the journey. Tell the user what they can safely do next, preserve their effort,
and give operators enough correlation to investigate without exposing internals.

## Inputs

- Name the failed task, user intent, possible causes, system certainty, and recovery capabilities.
- Gather current copy, logs, support cases, accessibility requirements, and product policy.
- Distinguish validation, authorization, conflict, dependency, timeout, offline, and unknown failures.

## Procedure

1. Write the user's intended outcome and what remains true after the failure, including saved or unsaved work.
2. Classify the failure by whether the user can correct, retry, wait, choose another path, contact support, or do nothing.
3. Choose the display level: field, component, page, notification, or background status.
4. Write copy in this order: plain-language outcome, work preservation, next action, and optional technical reference.
5. Provide one primary recovery action and only useful secondary choices. Prevent duplicate payment, submission, or destructive retry.
6. Define focus movement, announcement, icon and color semantics, keyboard operation, and persistent access to the message.
7. Handle repeated failure and offline behavior. Keep inputs and progress whenever safe.
8. Map the state to a stable internal code, correlation id, structured event, and support path without exposing stack traces or secrets.
9. Prototype long, translated, narrow-screen, zoomed, and assistive-technology states.
10. Test recovery with representative people and injected failures.
11. Record acceptance checks for design, engineering, support, and analytics.

## Boundaries

Do not blame the user, reveal security details, claim work was saved when it was not, or encourage repeated
actions that can duplicate side effects. Never use color alone or dismiss a blocking error before the user
can understand it.

## Done

- An error-state specification names failure class, placement, copy, preserved work, actions, and internal code
- Recovery tests prove retries or alternatives are safe and do not duplicate side effects
- Keyboard, focus, announcement, translation, zoom, and narrow-screen behavior are verified
- Support and logging evidence can trace the failure without revealing private data or implementation detail

Then use design-a-user-flow to connect the error to the full journey.
