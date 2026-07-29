---
name: create-an-approval-workflow
category: start
description: Design an approval path with proportionate authority, evidence, separation, and escalation. Use when a recurring decision is delayed, inconsistent, overcontrolled, or weakly governed.
---

# create-an-approval-workflow

## Procedure

1. Define the decision, risk, frequency, value bands, policy source, and accountable owner.
2. Map requester, reviewer, approver, executor, recorder, and exception roles.
3. Specify required evidence, thresholds, delegated authority, and separation-of-duty rules.
4. Remove duplicate reviews that do not change the decision or reduce risk.
5. Design normal, urgent, rejected, returned, delegated, expired, and unavailable-approver paths.
6. Add timestamps, rationale, version, attachments, and immutable outcome history.
7. Test low-risk, high-risk, incomplete, conflict, and emergency cases.
8. Publish service expectations, escalation, review cadence, and control owner.

## Guardrails

- Do not allow requesters to approve their own consequential transactions.
- Never use automation to exceed delegated authority or suppress exceptions.
- Minimize sensitive evidence and restrict it to authorized reviewers.

## Done

- An approval plan and workflow map name roles, thresholds, evidence, states, and escalations
- Scenario tests verify authority, separation, exception, and audit behavior
- The approved workflow has an owner, service target, and review record
