---
name: verify-a-mailto-link
category: web
description: Verify a mailto link for correct recipient, encoding, accessible label, safe subject and body, and fallback contact path. Use when a web page opens the visitor's email application.
---

# verify-a-mailto-link

Treat the link as convenience, not guaranteed delivery.

## When to use

- Use for contact, support, application, feedback, or sharing links.
- Do not embed secrets, personal form data, tracking identifiers, or untrusted text into a mailto URL.

## Procedure

1. Confirm the recipient address, ownership, monitoring, purpose, and fallback route.
2. Inspect scheme, address, separators, percent encoding, subject, body, cc, and bcc.
3. Remove sensitive defaults and prevent user-controlled injection of headers or unintended recipients.
4. Write link text that states the action and address where useful.
5. Test keyboard activation, focus, copy behavior, and several desktop and mobile mail clients.
6. Check behavior when no mail client is configured.
7. Publish a visible alternative form or address and verify it.

## Done

- A mailto test report records recipient, encoded fields, accessible label, privacy review, and fallback
- Keyboard, mobile, desktop, no-client, copy, and alternative contact behavior are checked
