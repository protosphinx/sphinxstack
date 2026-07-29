---
name: validate-a-json-payload
category: code
description: Validate a JSON payload against syntax, schema, semantic invariants, size, encoding, and privacy requirements. Use when data crosses an API, queue, file, webhook, or storage boundary.
---

# validate-a-json-payload

Valid JSON syntax does not prove valid domain data.

## When to use

- Use before accepting, emitting, migrating, replaying, or debugging JSON.
- Do not log secrets or personal data merely to explain validation failure.

## Preconditions

- Obtain the payload safely, schema and version, boundary rules, size limits, and expected semantics.

## Procedure

1. Preserve a redacted sample and source metadata.
2. Check bytes, encoding, syntax, duplicate-key policy, depth, and size.
3. Validate required fields, types, enums, formats, ranges, nullability, and additional fields.
4. Apply semantic invariants across fields and referenced entities.
5. Check version compatibility, defaults, coercion, unknown-field, and numeric precision behavior.
6. Return bounded field errors without echoing sensitive values.
7. Test valid, boundary, malformed, oversized, adversarial, and old-version cases.

## Failure plan

- Quarantine rather than partially process a payload whose required semantics are unresolved.

## Worked example

A syntactically valid payment event fails because amount is negative, currency and minor units disagree, and an unknown version would be coerced silently.

## Done

- A JSON validation report records schema version, syntax, field, semantic, compatibility, privacy, and size results
- Boundary, malformed, adversarial, precision, unknown-field, and redaction tests verify safe handling
