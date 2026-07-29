---
name: build-an-api-client
category: code
description: Build an API client from a versioned contract with typed inputs, authentication boundaries, timeouts, retries, errors, pagination, and tests. Use when an application must call an external or internal service reliably.
---

# build-an-api-client

Make network failure and contract change explicit.

## When to use

- Use for HTTP, RPC, event-query, or generated service clients.
- Do not embed credentials, retry unsafe mutations blindly, or log sensitive bodies.

## Procedure

1. Pin the authoritative API version, schema, authentication method, environments, quotas, and deprecation policy.
2. Define typed request and response models while preserving unknown compatible fields where needed.
3. Centralize base URL, headers, auth injection, redaction, serialization, and user-agent behavior.
4. Set connection, request, stream, and overall deadlines with cancellation.
5. Classify transport, timeout, authentication, rate, validation, server, and application errors.
6. Retry only transient and safely repeatable operations with bounded backoff, jitter, and server guidance.
7. Implement pagination, cursors, idempotency keys, concurrency limits, and partial-result handling.
8. Add contract fixtures, mocked failures, sandbox checks, and observability without secrets.
9. Document compatibility, initialization, examples, and caller recovery duties.

## Done

- A client library implements typed contract, auth boundary, deadlines, safe retries, errors, pagination, and redaction
- Unit, contract, failure, and sandbox tests verify behavior against the pinned API version
