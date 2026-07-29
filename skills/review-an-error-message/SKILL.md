---
name: review-an-error-message
category: design
description: Review and rewrite one product error message so it explains the state, preserves user work, and offers a safe recovery. Use when an interface error is confusing, blaming, inaccessible, overly technical, or operationally unhelpful.
---

# review-an-error-message

Treat the message as one part of the failure experience. Improve the system state, recovery action, and support
evidence as well as the sentence.

## Inputs

- Gather the triggering action, user goal, exact system state, visible message, logs, recovery paths, and frequency.
- Identify audience, language, accessibility, security, privacy, and support constraints.
- Confirm what the system truly knows and whether user work is preserved.

## Procedure

1. Reproduce the error and capture the action, message, state, and available controls.
2. State what happened in user terms without pretending to know an unverified cause.
3. Explain whether work was saved, submitted, charged, changed, or left untouched.
4. Offer the safest next action and a different fallback when repetition could cause harm.
5. Move diagnostic detail to an expandable area or reference code when ordinary users do not need it.
6. Remove blame, jokes, internal identifiers, vague instructions, and false certainty.
7. Check link, button, focus, screen-reader announcement, contrast, localization, and mobile behavior.
8. Ensure the support reference maps to useful privacy-safe diagnostics.
9. Test the message for success, repeated failure, offline, permission, and partial-completion states.

## Boundaries

Do not expose stack traces, secrets, account existence, security controls, or another user's data. Never tell
the user to retry an action that might duplicate payment, deletion, submission, or other irreversible state.

## Done

- The message accurately states what happened and whether user work or money changed
- Primary recovery and fallback actions have been tested in the real error state
- Accessibility, localization, privacy, security, and support evidence are checked
- The revised message removes blame and unverified technical claims
