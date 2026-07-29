---
name: implement-a-saga-workflow
category: code
description: Implement a saga workflow with durable state, idempotent steps, explicit compensation, timeout, human intervention, and reconciliation. Use when one business operation spans services without one transaction.
---
# implement-a-saga-workflow
## When to use
- Use for long-running cross-service operations with reversible or compensable steps.
- Do not label irreversible harm as compensated merely because another record was added.
## Preconditions
- Define operation identity, steps, owners, invariants, side effects, deadlines, reversibility, and authority.
## Procedure
1. Model durable states, transitions, commands, events, deadlines, and terminal outcomes.
2. Assign idempotency identity to every step and external effect.
3. Define forward and compensation preconditions, outcomes, and evidence.
4. Persist intent before dispatch and record acknowledgements durably.
5. Handle timeout, retry, reorder, duplicate, partial compensation, and manual resolution.
6. Expose customer-safe status and block conflicting operations.
7. Reconcile saga state with every participating service and external outcome.
## Failure plan
- Stop automation and route to an owned exception when compensation would increase harm.
## Worked example
A travel booking compensates hotel and flight separately but routes a nonrefundable ticket to human resolution.
## Done
- A saga implementation records states, identities, steps, compensation, deadlines, exceptions, status, and reconciliation
- Crash-window, duplicate, reorder, timeout, irreversible, partial-compensation, manual, and outcome tests verify workflow
