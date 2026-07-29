---
name: design-application-error-handling
category: code
description: Design application error handling that classifies failures, preserves useful causes, protects users and data, supports recovery, and produces safe observability. Use when defining service or library failure behavior.
---

# design-application-error-handling

Make errors actionable at the layer that can respond.

## When to use

- Use for APIs, user interfaces, jobs, libraries, integrations, and workflows.
- Do not expose stack traces, secrets, internal identifiers, personal data, or unsafe retry advice to users.

## Procedure

1. Inventory failure sources, affected invariants, users, callers, operators, and recoverability.
2. Define stable error categories and codes separate from mutable human messages.
3. Preserve cause chains internally while translating errors once at each trust boundary.
4. Distinguish validation, authentication, authorization, absence, conflict, rate, transient, dependency, and internal failures.
5. Specify retry, idempotency, timeout, cancellation, compensation, and manual recovery behavior.
6. Design user messages with next action and accessibility without blaming the user.
7. Log safe context with correlation, severity, sampling, ownership, and alert rules.
8. Save the error contract document and test representative failures, nested causes, partial effects, redaction, localization, and recovery.

## Done

- An error contract records categories, codes, boundary mappings, user messages, retries, recovery, logs, and alerts
- Failure tests verify status, cause preservation, redaction, partial-effect safety, accessibility, and actionable diagnostics
