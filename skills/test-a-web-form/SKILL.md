---
name: test-a-web-form
category: web
description: Test a web form across input, validation, accessibility, submission, failure, duplication, and recovery. Use when a form must reliably create a consequential record or request.
---

# test-a-web-form

Verify the complete journey from untouched fields to durable outcome and safe retry.

## Procedure

1. Inventory fields, formats, dependencies, branches, permissions, and side effects.
2. Build cases for valid, empty, boundary, malformed, duplicate, expired, and hostile input.
3. Test labels, instructions, keyboard order, focus, announcements, autofill, and zoom.
4. Verify client and server validation agree without relying on the client.
5. Exercise loading, timeout, offline, server error, partial failure, retry, and double submission.
6. Check CSRF, authorization, rate limits, privacy, and sensitive-value handling.
7. Confirm confirmation content, notifications, downstream records, and audit events.
8. Test browsers, devices, locales, timezones, and assistive technology from the support matrix.
9. Clean test data and record reproducible defects.

## Guardrails

- Never run destructive cases on production without explicit authorization and synthetic data.
- Do not expose submitted sensitive values in errors or recordings.
- A success message is not proof the backend committed once.

## Done

- A form test matrix and defect report are documented
- Accessibility, failure, retry, duplicate, and security paths are verified
- UI, backend, notification, and cleanup records reconcile
