---
name: create-a-synthetic-monitor
category: code
description: Create a synthetic monitor for a critical user journey with safe data, controlled side effects, and useful diagnostics. Use when endpoint uptime cannot prove that the full experience works.
---

# create-a-synthetic-monitor

Exercise the smallest realistic journey that independently proves a critical outcome.

## Procedure

1. Select a critical journey, user cohort, objective, and observable completion state.
2. Create isolated synthetic accounts, data, destinations, and cleanup ownership.
3. Perform the journey through representative public interfaces from chosen regions.
4. Validate content, state transition, persistence, downstream effect, and latency.
5. Use least-privilege credentials from a secret manager with rotation and expiry.
6. Make writes idempotent or uniquely attributable and clean them safely.
7. Capture bounded screenshots, traces, or step diagnostics without sensitive values.
8. Define quorum, retry, maintenance, provider-failure, and escalation behavior.
9. Test each step failure and verify the monitor itself is monitored.
10. Reconcile synthetic effects and remove stale accounts and records.

## Guardrails

- Never target real users, payments, or destructive production actions.
- Do not expose credentials in scripts, screenshots, URLs, or logs.
- A third-party monitor outage must be distinguishable from application failure.

## Done

- A synthetic journey script and data-lifecycle record are reviewed
- Step, region, credential, and provider failures are tested
- Created effects and cleanup records reconcile
