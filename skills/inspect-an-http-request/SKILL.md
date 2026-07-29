---
name: inspect-an-http-request
category: code
description: Inspect an HTTP exchange methodically across its request, response, proxy, and transport boundaries. Use when an API call behaves unexpectedly or needs a reproducible diagnostic record.
---

# inspect-an-http-request

Turn a vague networking symptom into a redacted request record and a boundary-by-boundary explanation.

## Procedure

1. Record the expected operation, environment, caller, destination, and success condition.
2. Capture the request method, scheme, host, path, query, headers, cookies, and body shape.
3. Redact credentials, session values, personal data, and signed URLs while preserving useful structure.
4. Capture the response status, headers, body shape, timing, redirects, and connection error if present.
5. Separate client construction, DNS, TLS, proxy, server routing, application, and downstream dependency boundaries.
6. Compare the observed exchange with the API contract and one known-good request.
7. Change one variable at a time and repeat the request with a safe, copyable command or test.
8. Save a concise diagnostic report with observations, the supported conclusion, and the next check.

## Guardrails

- Never paste live secrets into chat, logs, issue trackers, or reproducible commands.
- Do not infer an application status from a connection failure or a client-side timeout.
- Avoid replaying state-changing requests unless the target and side effects are understood.

## Done

- A redacted request-and-response record is saved with timing and environment
- Each relevant boundary is checked or explicitly marked untested
- The finding is reproduced or narrowed with a verified comparison request
