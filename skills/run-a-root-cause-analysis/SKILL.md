---
name: run-a-root-cause-analysis
category: data
description: Explain a consequential failure through a controlled evidence record, causal testing, and verified control improvements. Use when reviewing incidents, defects, losses, or repeated process breakdowns.
---

# run-a-root-cause-analysis

Find the conditions and control failures that made the outcome possible. Avoid one-cause stories and blame-first conclusions.

## When to use

- Use after consequential incidents, defects, losses, near misses, or repeated breakdowns that require more than immediate repair.
- Use a lighter corrective-action review when the causal path is already proven and cross-system controls are not involved.

## Preconditions

- Confirm investigation authority, scope, evidence preservation, confidentiality, affected parties, and required specialist review.
- Stabilize active harm through the relevant incident, safety, security, financial, or legal process before retrospective analysis.

## Procedure

1. State the observed outcome, impact, affected scope, time window, and unknowns without embedding a cause.
2. Preserve logs, records, artifacts, configurations, communications, physical evidence, and witness accounts with provenance.
3. Build a time-synchronized chronology separating observation, system state, action, inference, and missing evidence.
4. Reconstruct the normal process, actual path, decisions, interfaces, controls, and environmental conditions.
5. Generate causal hypotheses across technical, process, organizational, incentive, workload, training, supplier, and control layers.
6. Test each hypothesis against supporting, contradicting, and missing evidence; use reproductions or experiments when safe.
7. Distinguish initiating event, contributing conditions, detection gaps, mitigation gaps, and impact amplifiers.
8. Select corrective actions at responsible layers with owner, due date, test, rollback, and effectiveness signal.
9. Validate that actions would interrupt the demonstrated causal path without creating unacceptable new risk.
10. Publish an appropriately scoped report and verify actions over time.

## Failure plan

- Do not alter evidence, force a single root cause, or use hindsight as proof that an individual should have known.
- Never run unsafe reproductions or expose protected personnel, customer, security, or legal information.
- If evidence cannot distinguish hypotheses, keep the conclusion bounded and commission the missing test.
- Do not close on training or vigilance alone when system controls can prevent or limit recurrence.

## Done

- A synchronized chronology is checked against impact, evidence provenance, causal hypotheses, and uncertainty
- A hypothesis ledger is verified against contributing conditions and demonstrated control gaps
- Effectiveness verification proves implemented actions interrupt the causal path and records accepted residual risk
