---
name: build-a-chaos-test-plan
category: code
description: Build a chaos test plan with a falsifiable resilience hypothesis, bounded blast radius, safeguards, observability, abort, recovery, and learning. Use when real failure behavior must be tested safely.
---
# build-a-chaos-test-plan
## When to use
- Use after basic reliability controls and recovery paths exist.
- Never experiment on people, critical production, or regulated workflows without explicit authority and safeguards.
## Preconditions
- Define journey, steady state, hypothesis, failure, environment, impact budget, owners, and recovery.
## Procedure
1. State a measurable steady-state and falsifiable hypothesis.
2. Choose the smallest failure that discriminates the hypothesis.
3. Bound tenants, traffic, duration, region, data, and downstream effects.
4. Establish approvals, observers, communication, abort signals, and manual stop.
5. Verify dashboards, logs, traces, backups, rollback, and on-call readiness.
6. Rehearse safely, run one variable, recover, and verify cleanup.
7. Record evidence, surprises, control changes, and repeat criteria.
## Failure plan
- Abort immediately at a safety threshold and prioritize recovery over experiment completion.
## Worked example
A canary-region cache outage tests origin protection with a strict load abort before broader rollout.
## Done
- A chaos test plan records hypothesis, steady state, fault, blast radius, safeguards, evidence, abort, recovery, and learning
- Approval, dry-run, observability, threshold, stop, cleanup, customer-impact, and recovery rehearsals verify safety
