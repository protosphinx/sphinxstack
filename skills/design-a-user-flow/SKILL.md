---
name: design-a-user-flow
category: design
description: Map a user task from entry to outcome across choices, system states, errors, permissions, and recovery, then turn it into an implementation-ready flow. Use when a feature feels confusing, screens are being designed without a complete journey, or a team needs to agree on behavior before mockups or code.
---

# design-a-user-flow

Design the path as a conversation between user intent and system response. Produce a flow document that
includes the states that make the journey trustworthy, not only the happy-path screens.

## Inputs

- Name the user, situation, task, desired outcome, product constraint, and decision owner.
- Gather current behavior, research, support evidence, policy, platform conventions, and technical limits.
- Separate observed needs from proposed solutions.

## Procedure

1. Write the job as: when this situation occurs, the user wants to accomplish this outcome, so they can
   reach this larger goal.
2. Define entry conditions, eligibility, required information, permissions, and the observable completion state.
3. Map the current flow before inventing a new one. Mark confusion, delay, repeated work, risk, and drop-off evidence.
4. Draw the proposed main path as user action followed by system response. Keep each step tied to a
   decision or necessary information.
5. Add branches for invalid input, missing data, no results, duplicate action, interruption, timeout,
   offline state, denied permission, and downstream failure where relevant.
6. Define recovery for every blocking state: correction, retry, save and resume, undo, contact, or safe exit.
7. Check identity, authorization, privacy, accessibility, localization, device changes, and notification
   behavior at each boundary.
8. Remove steps that serve only internal organization. Delay optional information until it is needed.
9. Validate the flow with representative scenarios and, when possible, people who match the user definition.
   Record confusion and counterexamples.
10. Annotate the final flow with state names, decision rules, data requirements, owner, and acceptance checks.
11. Review the flow with design, engineering, product, and policy owners before producing detailed screens.

## Boundaries

Do not manipulate users into consent, payment, sharing, or continued use. Never hide cancellation,
fees, destructive effects, or data handling. Do not treat a flow as validated because stakeholders can
follow it; include representative user evidence when risk or complexity warrants it.

## Done

- A flow diagram shows entry, main path, decisions, system states, failures, recovery, and completion
- Each branch names its rule, required data, user-facing response, and acceptance check
- Privacy, permission, accessibility, interruption, and destructive-action behavior are explicit
- A validation record shows tested scenarios, observed confusion, revisions, and unresolved questions

Then use mockup-in-figma for visual exploration and run-a-design-handoff before implementation.
