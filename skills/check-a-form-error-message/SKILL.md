---
name: check-a-form-error-message
category: web
description: Check a web form error message for accuracy, placement, accessibility, recovery guidance, privacy, and state preservation. Use when validating inline, summary, server, validation, or submission failures.
---

# check-a-form-error-message

An error should identify the problem and make the next action clear.

## When to use

- Use during form design, content review, accessibility testing, or defect verification.
- Do not expose credentials, account existence, payment details, or sensitive submitted values.

## Procedure

1. Record field, input state, trigger, expected rule, actual message, device, browser, and assistive technology.
2. Confirm the message describes the real problem in plain language without blame or unsupported certainty.
3. Check that it appears near the field and in an error summary where the form needs one.
4. Verify programmatic association, announcement, focus movement, color-independent indication, and readable contrast.
5. Confirm correction guidance, accepted format, limits, and examples are accurate.
6. Verify unaffected values remain, sensitive values are handled safely, and retry does not duplicate an action.
7. Test empty, malformed, boundary, server, timeout, and corrected submissions.

## Done

- An error review record captures trigger, message, location, association, recovery guidance, privacy, and retained state
- Keyboard, screen-reader, boundary, retry, correction, and successful-submit checks verify recovery
