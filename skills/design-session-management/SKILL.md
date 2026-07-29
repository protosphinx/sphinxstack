---
name: design-session-management
category: code
description: Design session issuance, rotation, expiration, revocation, and device visibility around authentication risk. Use when a web or native application must preserve signed-in state safely.
---

# design-session-management

Make every session attributable, bounded, revocable, and responsive to changes in account risk.

## Procedure

1. Map authentication methods, client types, privilege levels, threats, and regulatory constraints.
2. Choose opaque server-side sessions or bounded signed tokens and document the revocation tradeoff.
3. Generate unpredictable identifiers and transmit browser sessions through narrowly scoped secure cookies.
4. Rotate session identity after login, privilege change, recovery, and other trust-boundary events.
5. Set idle and absolute lifetimes by risk; define renewal, offline, and “remember me” behavior explicitly.
6. Bind sessions to account and tenant state without using brittle fingerprinting as the sole control.
7. Support current-session logout, logout everywhere, device review, administrative revocation, and credential-change response.
8. Limit concurrent sessions where justified and present understandable device and last-use information.
9. Log issuance, rotation, use, expiration, and revocation with safe identifiers.
10. Test fixation, replay, theft, expiry boundaries, clock skew, parallel requests, and revocation propagation.

## Guardrails

- Never put long-lived bearer credentials in URLs or broadly readable browser storage.
- Device signals can inform risk but should not silently lock out legitimate users without recovery.
- Logout is incomplete until server-side or verifier state stops accepting the session.

## Done

- Session states, lifetimes, rotation triggers, and revocation paths are documented
- Fixation, replay, expiry, and revocation tests are verified
- User-visible devices reconcile with recorded active session state
