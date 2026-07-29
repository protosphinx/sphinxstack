---
name: verify-a-feature-flag-state
category: code
description: Verify a feature flag state for a specific subject, environment, version, time, rule set, and evaluation path. Use when reported exposure differs from configuration or rollout expectations.
---

# verify-a-feature-flag-state

Configured value, evaluated value, and observed behavior are different evidence.

## When to use

- Use for rollout, incident, support, experiment, or migration diagnosis.
- Protect user, tenant, targeting, and experiment information.

## Preconditions

- Record flag key, environment, subject or safe fixture, time, application version, provider, and expected rule.

## Procedure

1. Preserve configuration version, default, prerequisites, targets, rules, segments, percentages, and schedule.
2. Verify subject attributes and their source without broadening data access.
3. Reproduce evaluation with the exact SDK, context, and configuration revision.
4. Record value, matched rule, reason, variation, and evaluation error.
5. Check cache, offline default, bootstrap, stale config, client versus server, and propagation.
6. Compare evaluated state with telemetry and observed application behavior.
7. Document the bounded finding and safe rollback or correction route.

## Failure plan

- If identity or configuration revision is unknown, report state as unresolved rather than guessing.

## Worked example

A tenant matches an allowlist but receives the old client default because its mobile SDK has stale bootstrapped configuration.

## Done

- A feature-flag report records configuration, subject inputs, matched rule, evaluated value, propagation, and observed behavior
- Version, cache, default, identity, privacy, SDK, telemetry, and fixture checks verify the state
