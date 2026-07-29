---
name: design-a-permission-prompt
category: design
description: Design a contextual device-permission request with clear purpose, proportional scope, denial recovery, and revocation. Use when a web experience needs location, camera, microphone, notifications, or similar access.
---

# design-a-permission-prompt

Ask at the moment of user intent and make refusal a supported product state.

## Procedure

1. Define the feature, necessity, data use, duration, alternatives, and platform constraints.
2. Request the narrowest permission only after an action that explains why it is needed.
3. Use concise pre-permission content without impersonating the browser dialog.
4. Explain immediate benefit, data handling, and what still works after denial.
5. Handle granted, denied, dismissed, restricted, unavailable, and revoked states.
6. Provide settings guidance only when the user retries the blocked feature.
7. Test keyboard, screen reader, localization, repeated visits, and permission changes.
8. Measure completion and denial without pressuring or fingerprinting users.

## Guardrails

- Never block unrelated content to coerce permission.
- Do not promise privacy behavior the implementation cannot prove.
- Avoid repeated prompts after a clear refusal.

## Done

- A permission-flow specification report covers every platform state
- Grant, denial, dismissal, revocation, and accessible recovery are tested
- Product copy and actual data behavior are verified together
