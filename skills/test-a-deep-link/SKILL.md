---
name: test-a-deep-link
category: web
description: Test a deep link across cold and warm launch, authentication, authorization, routing, fallback, app and web handoff, parameters, and recovery. Use when a URL or app link should open a specific destination safely.
---
# test-a-deep-link
## When to use
- Use for web routes, universal links, app links, custom schemes, invitations, or notifications.
- Do not expose tokens or allow links to bypass authorization.
## Procedure
1. Record canonical link, destination, platforms, install state, user state, expiry, and expected fallback.
2. Test web, installed app, uninstalled app, cold, warm, signed-out, signed-in, and wrong-account states.
3. Verify domain association, routing, parameter decoding, Unicode, encoding, and fragment handling.
4. Check authorization, tenant, invite, one-time token, replay, and expiration.
5. Test unavailable content, old app, browser choice, back navigation, and recovery.
6. Record observable outcomes without leaking sensitive URLs.
## Failure plan
- Route to a safe login or explanation when destination authority cannot be proven.
## Worked example
An invite deep link opens the right app but wrong tenant, so post-login authorization is repaired.
## Done
- A deep-link test report records link, platforms, states, routing, parameters, authorization, fallback, and outcomes
- Cold, warm, install, auth, tenant, encoding, expiry, replay, unavailable, back, and privacy tests verify behavior
