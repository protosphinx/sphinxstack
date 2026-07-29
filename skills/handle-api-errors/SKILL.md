---
name: handle-api-errors
category: code
description: Handle API failures with stable classification, safe user feedback, controlled retries, and useful diagnostics. Use when a client or service must turn unreliable responses into predictable behavior.
---

# handle-api-errors

Design error paths as part of the API integration, not as an afterthought around the happy path.

## Procedure

1. Inventory transport, timeout, protocol, authentication, authorization, validation, rate-limit, server, and business-rule failures.
2. Define a small internal error model with a stable code, safe message, retryability, and original cause.
3. Parse structured error bodies defensively and preserve status, request ID, and provider code.
4. Give users an actionable message without exposing credentials, internals, or personal data.
5. Retry only transient, safe operations with a limit, exponential backoff, jitter, and server guidance.
6. Emit structured logs and metrics keyed by operation, category, status, and correlation ID.
7. Test malformed bodies, timeouts, cancellations, partial responses, rate limits, and representative 4xx and 5xx cases.
8. Document fallback, escalation, and recovery behavior in the integration report.

## Guardrails

- Never retry a non-idempotent operation unless duplication is prevented.
- Do not show raw upstream error bodies to users.
- Preserve cancellation and timeout distinctions instead of collapsing every failure into “unknown.”

## Done

- The error model and user messages are documented and reviewed
- Retry behavior is tested against transient and permanent failures
- Logs and metrics reconcile each simulated failure with its final outcome
