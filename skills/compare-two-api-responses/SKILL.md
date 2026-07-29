---
name: compare-two-api-responses
category: code
description: Compare two API responses across status, headers, schema, values, ordering, timing, and side effects. Use when environments, versions, requests, or retries behave differently.
---

# compare-two-api-responses

Normalize noise without erasing meaningful differences.

## When to use

- Use for regression, migration, contract, environment, or retry comparisons.
- Redact credentials, tokens, cookies, personal data, and sensitive identifiers.

## Preconditions

- Preserve exact requests, endpoints, versions, time, identity, environment, and response captures.

## Procedure

1. Confirm the requests are equivalent or list every intentional difference.
2. Compare transport, status, headers, content type, caching, and timing.
3. Parse bodies with the correct schema and preserve raw captures.
4. Normalize only documented volatile fields such as generated IDs or timestamps.
5. Compare missing, extra, type, value, precision, null, ordering, pagination, and error differences.
6. Check observable side effects and idempotency, not only response bodies.
7. Classify each difference as expected, compatible, breaking, data-dependent, or unresolved.

## Failure plan

- If requests or identity differ, do not call the response difference a regression.

## Worked example

Two checkout responses share a status but one omits a required currency and creates a duplicate order on retry, revealing both contract and side-effect regressions.

## Done

- An API comparison report records requests, normalized and raw responses, differences, side effects, and classifications
- Schema, volatile-field, identity, privacy, idempotency, and repeat-run checks verify the comparison
