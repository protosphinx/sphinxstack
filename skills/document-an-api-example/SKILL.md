---
name: document-an-api-example
category: write
description: Publish a tested API request and response example with prerequisites, safe placeholders, errors, and version context. Use when developers need a copyable example for one API operation or integration path.
---

# document-an-api-example

Make the example executable, minimal, and honest about state. Show the successful path and the most useful
failure without embedding real credentials or customer data.

## Inputs

- Gather the current API schema, base URL, version, authentication method, required permissions, and rate behavior.
- Identify a stable test environment and synthetic resource identifiers.
- Confirm the expected response, error model, side effects, idempotency, and cleanup.

## Procedure

1. State the operation goal, prerequisites, version, and side effects.
2. Create synthetic setup data and safe placeholders with unmistakable names.
3. Write the smallest valid request in the project's primary tool or language.
4. Include required headers, encoding, and authentication placement without a usable secret.
5. Show a representative exact response with variable values clearly marked.
6. Add one common error request and explain how to recover.
7. Explain pagination, retries, idempotency, or asynchronous status only when relevant.
8. Run the example from a clean environment against the documented version.
9. Verify copy-and-paste behavior, output, permissions, cleanup, and linked schema.
10. Assign an owner or automated check for future API changes.

## Boundaries

Never publish real keys, tokens, personal data, production identifiers, or unsafe destructive commands.
Do not hide billable or irreversible side effects. Obtain permission before testing against a shared or
production account.

## Done

- The request runs from documented prerequisites and returns the checked response shape
- Placeholders cannot be mistaken for working credentials or real customer data
- A common failure and safe recovery are demonstrated
- Version, side effects, permissions, cleanup, and authoritative schema links are accurate
