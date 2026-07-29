---
name: verify-a-webhook-signature
category: code
description: Verify a webhook signature over exact bytes with trusted key selection, timestamp tolerance, replay protection, and rotation support. Use when authenticating inbound webhook deliveries.
---
# verify-a-webhook-signature
## When to use
- Use before parsing or acting on a signed delivery.
- Never log secrets, full sensitive payloads, or accepted replay material.
## Preconditions
- Obtain the provider specification, secret or public keys, raw-body access, clock policy, and event identity.
## Procedure
1. Capture exact request bytes and required signed headers before transformation.
2. Parse signature versions and key IDs using strict bounds.
3. Select only trusted algorithms and active or rotation-overlap keys.
4. Reconstruct the signed message exactly and compare signatures in constant time.
5. Validate timestamp and durable event replay state.
6. Reject before side effects and test rotation, duplicates, stale delivery, malformed input, and body mutation.
## Failure plan
- Fail closed when raw bytes, key state, algorithm, or replay storage are unavailable.
## Worked example
A valid signature over a stale timestamp is rejected and the event ID remains unprocessed.
## Done
- A webhook verification implementation records byte contract, keys, algorithms, time, replay, rotation, and errors
- Mutation, malformed, duplicate, stale, clock, rotation, constant-time, and no-side-effect tests verify authenticity
