---
name: create-an-error-budget-policy
category: data
description: Connect service reliability evidence to release and investment decisions. Use when teams have or are adopting service objectives and need predictable responses to rapid burn, chronic misses, exceptions, and recovery.
---

# create-an-error-budget-policy

Turn an objective into pre-agreed action. The policy should reduce bargaining during stress without becoming a mechanical ban detached from user harm.

## Inputs

- Approved indicators, objectives, windows, error-budget calculations, and telemetry limits
- Release, incident, change, exception, and risk-acceptance processes
- Service dependencies, business events, contractual obligations, and decision owners

## Procedure

1. Define policy scope, service owners, decision authority, review cadence, and authoritative data source.
2. Reproduce the budget calculation and document low-volume, late-data, and telemetry-loss behavior.
3. Define states such as healthy, caution, rapid burn, exhausted, and recovering using tested thresholds.
4. Map each state to changes in release risk, reliability work, capacity, incident review, and leadership escalation.
5. Distinguish ordinary feature work, security fixes, compliance deadlines, rollback, and risk-reducing changes.
6. Create a time-bounded exception process with rationale, compensating controls, monitoring, and accountable acceptance.
7. Define recovery evidence and the conditions for resuming normal change.
8. Backtest the policy on known incidents and release periods; check whether decisions would have been useful and timely.
9. Exercise a disputed case across product, reliability, and business owners.
10. Publish current state, calculation freshness, decisions, exceptions, and review history.

## Guardrails

- Do not treat missing telemetry as healthy budget.
- Do not reward teams for narrowing denominators or hiding valid failures.
- Avoid a single threshold that encourages unsafe end-of-window behavior.
- The policy must not delay emergency containment or necessary security remediation.

## Done

- Calculation evidence verifies that budget states and actions are reproducible
- Exception and recovery authority are explicit
- Backtest evidence verifies thresholds against known incidents and exposes blind spots
- Decisions can be audited from source data to approval
