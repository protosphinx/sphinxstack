---
name: design-an-api-contract
category: code
description: Define an API that consumers can integrate with and providers can change safely. Specify resources, errors, compatibility, retries, and contract tests before implementation. Use when multiple systems or teams need a durable interface rather than an informal request shape.
---

# design-an-api-contract

Write the boundary before filling in the implementation. The contract should let a consumer
build against examples, let a provider change internals, and make failure behavior as clear as
success behavior.

## When to use

Use this skill for a new HTTP, event, RPC, or internal service interface with more than one
consumer or an expected lifetime beyond one release. It also applies when an undocumented API
has become a dependency. Do not create an external contract for a function that can remain local.

Do not put credentials, private fields, or unrestricted internal errors into examples. Treat
published field names and behavior as commitments unless the contract says otherwise.

## Preconditions

- Identify provider and consumer owners, use cases, data classification, and expected lifetime.
- Collect two real consumer workflows, including one retry or partial-failure case.
- Record transport, authentication, authorization, latency, volume, and retention constraints.
- Decide who approves breaking changes and how consumers will be notified.

## Procedure

1. Model domain resources and operations in consumer language. Avoid exposing internal tables.
2. Write one minimal successful request and response for each real workflow.
3. Define field types, formats, required and optional status, null behavior, defaults, limits,
   ordering, pagination, filtering, and time-zone rules in a versioned schema.
4. Specify the error model: stable code, human message, retryability, relevant field, and trace ID.
5. Define authentication separately from authorization. State what each caller may read or change.
6. Decide idempotency and retry behavior for every mutating operation. Include duplicate requests,
   timeouts after a commit, and out-of-order events.
7. State compatibility rules for adding, deprecating, renaming, and removing fields. Prefer additive
   changes and a measured deprecation period over frequent version forks.
8. Add consumer examples for success, validation failure, missing permission, rate limit, timeout,
   duplicate request, and server failure.
9. Turn the schema and examples into contract tests that both provider and consumer can run in CI.
10. Review the contract with a consumer before implementation. Record questions and change the
    boundary when the consumer cannot complete the workflow from the document alone.

## Failure plan

Assume a provider deploys a technically valid but incompatible response. Define the compatibility
check that blocks it, the deployment rollback, the consumer notification path, and the temporary
adapter if immediate rollback is unsafe. For event APIs, include replay, duplicate, and ordering
recovery. Never silently reinterpret an existing field.

## Done

- A versioned schema defines requests, responses, limits, and the complete error model
- Consumer examples cover success, permission, validation, retry, duplicate, and server failure
- Compatibility rules state what may change, the deprecation path, and who approves exceptions
- Contract tests run against provider and consumer fixtures and include a compatibility check
- Idempotency, retry, authorization, and observability behavior are explicit for each operation

Then use use-an-api for the first integration and design-observability for production signals.
