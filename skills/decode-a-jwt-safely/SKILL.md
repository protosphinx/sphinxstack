---
name: decode-a-jwt-safely
category: code
description: Decode a JWT without confusing readable claims with verified identity or authorization. Use when inspecting token structure, metadata, timing, audience, or signature requirements.
---
# decode-a-jwt-safely
## When to use
- Use for bounded debugging with an authorized redacted token.
- Never paste live tokens into third-party tools or treat decoding as verification.
## Preconditions
- Record token source, environment, expected issuer, audience, algorithm, and current time.
## Procedure
1. Work offline on a redacted or expired fixture where possible.
2. Parse header and payload without executing embedded content.
3. Inspect algorithm, key ID, issuer, audience, subject, scopes, issue, not-before, expiry, nonce, and token ID.
4. Distinguish malformed, decoded, signature-verified, claim-validated, and authorized states.
5. Verify signature only with trusted issuer metadata and allowed algorithms.
6. Validate time, issuer, audience, nonce, replay, and application authorization separately.
## Failure plan
- Reject ambiguous algorithm, key, issuer, audience, or clock state.
## Worked example
A token decodes correctly but uses the wrong audience, so the service rejects it before authorization.
## Done
- A JWT inspection report records safe metadata, verification state, claim checks, and authorization boundary
- Redaction, issuer, algorithm, key, audience, time, nonce, replay, and fixture checks verify handling
