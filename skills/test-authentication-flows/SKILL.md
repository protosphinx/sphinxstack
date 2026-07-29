---
name: test-authentication-flows
category: code
description: Test authentication journeys across success, failure, abuse, recovery, session, and accessibility conditions. Use when sign-up, login, MFA, logout, or account recovery must be release-ready.
---

# test-authentication-flows

Test the whole identity journey and resulting session state, not only the credential form.

## Procedure

1. Inventory sign-up, verification, login, federation, MFA, recovery, credential change, device review, and logout journeys.
2. Create a matrix across roles, account states, browsers, devices, locales, and authentication methods.
3. Define success, safe failure, notification, audit, session, and data-cleanup expectations for each case.
4. Test wrong, expired, reused, replayed, malformed, and rate-limited credentials or links.
5. Check account enumeration, fixation, open redirects, CSRF, brute force, and recovery bypass attempts.
6. Verify cookie or token flags, issuance, rotation, idle and absolute expiry, and logout propagation.
7. Exercise identity-provider, email, SMS, time, storage, and network failures with controlled doubles or sandboxes.
8. Test keyboard, assistive-technology, autofill, password-manager, and understandable-error behavior.
9. Confirm logs, alerts, user notifications, and support tools without recording secrets.
10. Clean test accounts and reconcile every expected security event with observed state.

## Guardrails

- Never run abuse tests against production accounts without explicit authorization and controls.
- Use synthetic credentials and recovery channels that cannot reach uninvolved people.
- Do not accept a visual redirect as proof that the intended server-side session state exists.

## Done

- A traceable authentication test matrix is documented
- Critical journeys and hostile cases are verified in the target environment
- Sessions, notifications, audit events, and test-data cleanup reconcile
