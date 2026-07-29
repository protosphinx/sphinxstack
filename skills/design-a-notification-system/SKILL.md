---
name: design-a-notification-system
category: design
description: Design notifications by user value, urgency, consent, channel, and lifecycle. Use when product events can trigger in-app, email, push, SMS, or other messages that need prioritization and control.
---

# design-a-notification-system

## Procedure

1. Inventory events, recipients, consequences, timing, source, and authoritative state.
2. Classify transactional, security, safety, social, workflow, educational, and promotional purposes.
3. Define eligibility, deduplication, batching, quiet hours, locale, and expiry.
4. Choose channel and urgency based on harm and action, not sender preference.
5. Write content with event, context, action, time, and safe destination.
6. Design preferences, consent, required notices, unsubscribe, and account-level controls.
7. Specify delivery state, retries, idempotency, channel fallback, and stale-message suppression.
8. Protect private content on lock screens, shared devices, logs, and forwarded messages.
9. Test duplicates, delay, ordering, timezone, revocation, missing data, and channel failure.
10. Measure useful action, delivery, complaint, opt-out, burden, and missed critical events.

## Guardrails

- Never use security or transactional classification to bypass promotional consent.
- Do not send secrets or sensitive detail through an unsafe channel.
- More delivery is not automatically better.

## Done

- A notification matrix records event, recipient, channel, control, timing, and fallback
- Consent, privacy, duplication, ordering, and failure tests pass
- Burden and missed-event evidence have review owners
