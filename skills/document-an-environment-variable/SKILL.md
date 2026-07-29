---
name: document-an-environment-variable
category: code
description: Document an environment variable as a configuration contract with purpose, type, default, scope, secrecy, validation, and failure behavior. Use when software behavior depends on deploy-time configuration.
---

# document-an-environment-variable

Describe behavior without publishing secret values.

## When to use

- Use for required, optional, feature, endpoint, credential, limit, or compatibility configuration.
- Never place real secrets, tokens, personal data, or production-only values in documentation or example files.

## Procedure

1. Record exact name, owner, consuming component, purpose, environments, and lifecycle.
2. Define type, format, unit, allowed values, default, empty behavior, and precedence.
3. State required versus optional and distinguish build-time, startup, and runtime reading.
4. Mark secret classification, injection source, rotation, logging, and redaction rules.
5. Document validation and observable behavior for missing, invalid, stale, or unreachable values.
6. Provide safe example placeholders and related variables or feature flags.
7. Add startup or configuration tests and ensure error messages do not expose values.
8. Update deployment, local setup, and removal documentation together.

## Done

- A configuration document records name, purpose, type, scope, precedence, secrecy, validation, and failure behavior
- Safe examples and tests verify valid, missing, invalid, and redacted handling without exposing a real value
