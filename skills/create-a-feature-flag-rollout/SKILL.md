---
name: create-a-feature-flag-rollout
category: code
description: Create a feature-flag rollout with targeting, defaults, exposure measurement, guardrails, rollback, ownership, and cleanup. Use when releasing behavior gradually reduces risk.
---

# create-a-feature-flag-rollout

Treat the flag as temporary control-plane code.

## When to use

- Use for staged exposure, experiments, operational switches, or compatibility transitions.
- Do not target protected groups unfairly, expose secrets in flag data, or use a flag as permanent architecture.

## Procedure

1. Define behavior, owner, decision, default, environments, flag lifetime, and cleanup date.
2. Make missing, stale, unavailable, and malformed flag states fail safely.
3. Choose stable targeting keys and cohort assignment without leaking personal data.
4. Instrument exposure separately from eligibility and measure outcome plus guardrails.
5. Test both paths, transitions, cached state, service restart, and configuration outage.
6. Roll out to internal, canary, small, and expanding cohorts with explicit gates.
7. Pause or reverse automatically or manually on defined customer, safety, reliability, or data thresholds.
8. Remove the losing path, flag checks, configuration, and dashboards after acceptance.

## Done

- A rollout plan records ownership, defaults, targeting, cohorts, measurements, gates, rollback, and cleanup
- Both paths, outage states, cohort transitions, guardrails, and flag removal are tested
