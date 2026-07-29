---
name: set-up-a-webhook
category: web
description: Implement a webhook receiver with signature verification, idempotency, retries, replay tools, and observable delivery. Use when one service must react to events from another, an integration sends callbacks, or webhook deliveries are unreliable or duplicated.
---

# set-up-a-webhook

Build webhook handling as an at-least-once message boundary. Authenticate the sender, acknowledge
quickly, process safely more than once, and keep enough evidence to replay failures.

## Inputs

- Read the provider's current official documentation for signing, retries, timeouts, and event schemas.
- Name the supported event types, receiver owner, data classification, and allowed side effects.
- Obtain test credentials through the user's account and store them with manage-secrets-safely.

## Procedure

1. Record the provider, endpoint, event versions, signing method, retry schedule, timeout, and expected
   delivery volume in a short integration contract.
2. Create a dedicated HTTPS endpoint that accepts only required methods and content types. Set a body-size
   limit before parsing.
3. Capture the raw request bytes, required headers, receive time, and provider delivery identifier.
   Verify the signature and timestamp before trusting parsed content.
4. Reject invalid or stale requests without revealing verification details. Never log tokens, full
   personal payloads, or signature material.
5. Deduplicate on a stable event or delivery id. Make every side effect idempotent so retries cannot
   create duplicate charges, messages, or records.
6. Acknowledge accepted events within the provider timeout. Move slow work to a durable job or queue
   while preserving event identity and processing status.
7. Validate the event type and schema. Handle unknown versions explicitly and ignore unsupported events
   safely.
8. Store minimal delivery metadata, processing outcome, and a privacy-safe error. Add bounded retries
   and a dead-letter or failed-event view.
9. Build an authorized replay action that reuses stored event identity and idempotency protections.
10. Test valid, invalid-signature, stale, duplicate, out-of-order, slow, unknown, and downstream-failure cases.
11. Trigger a real test event from the provider and trace it from delivery through the final side effect.

## Boundaries

Do not trust source IP alone as authentication. Do not expose an open replay endpoint or retain payloads
longer than required. Get explicit permission before creating real financial, messaging, or account
side effects during a test.

## Done

- A real provider test event produces the intended side effect and a traceable delivery record
- Invalid, stale, duplicate, and unknown events are handled safely in repeatable tests
- Signature verification uses raw bytes and secrets remain out of source and logs
- A failed event can be inspected and replayed without duplicating an already completed side effect

Then use design-an-api-contract for the surrounding integration and design-observability for delivery signals.
