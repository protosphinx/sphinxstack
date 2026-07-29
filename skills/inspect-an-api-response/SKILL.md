---
name: inspect-an-api-response
category: code
description: Inspect an API response across status, headers, body, timing, caching, errors, and contract expectations. Use when debugging or verifying an HTTP or RPC integration.
---

# inspect-an-api-response

Capture the full exchange safely before interpreting one field.

## When to use

- Use for unexpected status, body shape, latency, redirects, caching, pagination, or error behavior.
- Do not log credentials, cookies, tokens, personal data, or restricted response bodies.

## Procedure

1. Record environment, endpoint, method, sanitized request, request ID, time, client version, and expected contract.
2. Capture status, redirect chain, protocol, duration, retries, and network error separately.
3. Inspect content type, cache, authentication, rate-limit, pagination, tracing, and version headers.
4. Validate body decoding before interpreting JSON, text, binary, stream, or empty content.
5. Compare schema, required fields, types, units, nullability, ordering, and error envelope with the contract.
6. Check whether proxies, caches, gateways, or client defaults altered the exchange.
7. Repeat with a known-good request and boundary or failure cases.
8. Save a redacted response report and reproducible command.

## Done

- A redacted response report records request context, status, headers, body contract, timing, redirects, and intermediaries
- A reproducible check confirms the observed difference against a known-good or documented expectation
