---
name: implement-webhook-signature-verification
category: web
description: Verify webhook authenticity, freshness, and replay safety using raw request bytes and provider-specific signature rules. Use when accepting externally initiated events that can change application state.
---

# implement-webhook-signature-verification

Authenticate the exact message before parsing or acting on it.

## When to use

- Use for payment, identity, deployment, messaging, commerce, and partner webhooks.
- Follow the sender's current signed-payload specification instead of inventing a generic scheme.

## Procedure

1. Record the provider, endpoint, algorithms, signed fields, timestamp rules, secret versions, retry policy, and event identifiers.
2. Read the body as bounded raw bytes before any JSON parsing, normalization, decompression, or middleware mutation.
3. Parse the signature header defensively and reject missing, malformed, unsupported, or excessive values.
4. Reconstruct the exact provider-defined signed payload and compute the MAC or signature with the correct secret or public key.
5. Compare authenticators with a timing-safe function. Accept multiple secrets only during a recorded rotation window.
6. Enforce timestamp freshness with measured clock tolerance and record clock-health assumptions.
7. Deduplicate by durable provider event identifier and handler outcome; do not rely on timestamp checks alone to stop replay.
8. Acknowledge only according to the provider retry contract. Make downstream mutation idempotent and separate verification from slow work.
9. Redact signatures, secrets, bodies, and personal data in logs while retaining correlation and decision evidence.
10. Test valid, altered, truncated, oversized, stale, replayed, duplicate, reordered, wrong-secret, rotated-secret, and middleware-modified requests.

## Failure plan

- Reject unverifiable requests without invoking business logic.
- If clock health or key state is unknown, quarantine the event and alert instead of bypassing verification.
- If an event is valid but processing fails, preserve idempotent retry state.

## Done

- A verification specification identifies exact signed bytes, algorithms, freshness, key versions, and replay controls
- Tests prove invalid, stale, replayed, malformed, and oversized requests cannot trigger side effects
- An operations record verifies secret rotation, durable deduplication, safe retries, redacted telemetry, and failure alerts
