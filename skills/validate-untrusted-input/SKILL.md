---
name: validate-untrusted-input
category: code
description: Validate untrusted input at a system boundary with explicit schemas, limits, normalization, and safe errors. Use when user, file, network, or integration data enters trusted application logic.
---

# validate-untrusted-input

Accept only data the application can safely understand and process within bounded resources.

## Procedure

1. Map every input boundary and the downstream operation it can influence.
2. Define an allowlist schema for fields, types, formats, ranges, lengths, counts, and nesting depth.
3. Decide explicitly whether each representation is rejected, normalized, or preserved.
4. Decode and canonicalize once before validation, accounting for Unicode, encodings, paths, and identifiers.
5. Enforce validation on the trusted server boundary even when the client also validates.
6. Return stable field-level errors without echoing secrets or unsafe raw values.
7. Test missing, extra, null, boundary, oversized, malformed, ambiguous, and adversarial values.
8. Record rejected-input metrics by rule without logging sensitive payloads.

## Guardrails

- Validation is not output encoding, authorization, parameterized querying, or malware scanning.
- Never rely on a denylist as the primary definition of valid input.
- Bound parsing work before allocating large memory or performing expensive transformations.

## Done

- A versioned input schema and normalization policy are documented
- Boundary, fuzz, and resource-limit tests are verified
- Rejection metrics and safe error responses are recorded without sensitive values
