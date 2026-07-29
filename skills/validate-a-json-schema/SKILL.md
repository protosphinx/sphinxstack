---
name: validate-a-json-schema
category: code
description: Validate a JSON Schema against intended instances, invalid boundaries, references, defaults, and consumer behavior. Use when defining or reviewing a structured JSON contract.
---

# validate-a-json-schema

Verify both what the schema accepts and what it rejects.

## When to use

- Use for configuration, APIs, events, manifests, stored documents, or generated data.
- Do not assume `default`, `format`, or annotation keywords mutate or enforce data in every validator.

## Procedure

1. Record draft version, base URI, vocabulary, validator implementation, and consumer expectations.
2. Resolve local and remote references without untrusted network fetching in production validation.
3. Check object properties, required fields, additional properties, arrays, numbers, strings, nulls, enums, and composition.
4. Create canonical valid examples for minimum and representative shapes.
5. Create invalid cases for missing, extra, wrong-type, boundary, duplicate, and contradictory values.
6. Test conditional logic, recursive references, formats, defaults, and unevaluated properties in the actual validator.
7. Review compatibility impact on existing producers and consumers.
8. Save schema, fixtures, validator version, and results together.

## Done

- A schema test file contains representative valid and invalid instances for every material rule and boundary
- The actual validator is tested with resolved references, declared draft, diagnostics, and consumer compatibility evidence
