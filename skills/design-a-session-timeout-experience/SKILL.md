---
name: design-a-session-timeout-experience
category: web
description: Design a session-timeout experience that balances security with warning, accessible renewal, work preservation, reauthentication, and multi-tab consistency. Use when web sessions expire because of inactivity, absolute lifetime, risk, or policy.
---

# design-a-session-timeout-experience

Server-side authority determines session validity; the client explains and recovers safely.

## When to use

- Use for authenticated applications, especially those with long forms or sensitive actions.
- Never extend a revoked or expired server session only by resetting a browser timer.

## Procedure

1. Define idle, absolute, credential, risk, role, device, and regulatory timeout rules with security owners.
2. Inventory tabs, background requests, long tasks, uploads, forms, autosave, assistive technology, and native or embedded clients.
3. Establish server-issued session expiry and renewal behavior with clock-skew tolerance and auditable reasons.
4. Warn early enough for users to understand, extend, save, or sign out; make the dialog keyboard and screen-reader accessible.
5. Coordinate activity and expiry across tabs without exposing tokens in unsafe storage.
6. Preserve nonsecret work through approved drafts and reauthorize sensitive actions after reauthentication.
7. Handle offline, sleeping device, expired refresh, revoked account, changed role, MFA, and simultaneous requests.
8. Test boundary timing, multiple tabs, background throttling, clock differences, failed renewal, and return to the intended task.

## Done

- A session-timeout specification document records authority, timers, warnings, renewal, reauthentication, work preservation, multi-tab, and failure states
- Server, client, boundary, accessibility, offline, multi-tab, revocation, saved-work, and sensitive-action tests verify the experience
