---
name: deprecate-an-api
category: code
description: Deprecate an API operation or version with consumer evidence, replacement parity, notice, migration support, telemetry, and controlled removal. Use when evolving a public or internal API without surprising active consumers.
---

# deprecate-an-api

Treat deprecation as a consumer migration program. The old interface remains a supported contract until its
published conditions for removal are met.

## Inputs

- Gather the contract, versions, known consumers, usage telemetry, support policy, replacement, and ownership.
- Identify legal, contractual, partner, generated-client, offline, long-lived-device, and regional constraints.
- Confirm notice channels, minimum window, compatibility rules, and removal authority.

## Procedure

1. Define the deprecated surface, reason, affected behavior, and explicit non-goals.
2. Inventory consumers using registration, telemetry, logs, support history, and owner outreach; state blind spots.
3. Verify replacement parity for required behavior, performance, errors, security, and operational needs.
4. Publish notice in documentation, changelog, schema, headers, SDKs, and direct channels as appropriate.
5. Provide tested migration examples, comparison, deadline, support path, and rollback guidance.
6. Add privacy-safe usage and error telemetry that distinguishes active consumer versions.
7. Track consumer acknowledgement, migration progress, blockers, and approved exceptions.
8. Test warning, throttling, or enforcement stages in a safe environment before broad use.
9. Set removal gates based on elapsed notice, verified adoption, residual risk, and authority.
10. Remove only after gates pass, then monitor and retain a time-bounded recovery option.

## Boundaries

Do not identify all consumers from incomplete telemetry or silently change behavior under the same contract.
Never expose customer usage or credentials in migration tracking. Honor contractual support windows and approved
exceptions.

## Done

- Deprecated scope, replacement, compatibility, notice window, and removal gates are published
- Known consumers and telemetry blind spots are recorded
- Migration documentation and representative consumer tests pass
- Removal or continued support is supported by adoption evidence, owner approval, and recovery planning
