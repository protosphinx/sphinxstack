---
name: plan-a-software-release
category: code
description: Coordinate a software release around exact scope, risks, evidence, ownership, rollout, observation, and recovery. Use when multiple changes or teams must reach a deliberate release decision.
---

# plan-a-software-release

Create one authoritative plan that separates implemented, tested, approved, deployed, and verified states.
Make release and rollback authority explicit.

## Inputs

- Gather the target version, commit or artifact, included changes, dependencies, environments, and release window.
- Collect test evidence, migrations, flags, infrastructure changes, documentation, support needs, and known issues.
- Identify product, engineering, security, data, operations, communications, and business owners.

## Procedure

1. Freeze the candidate scope and map every included change to its evidence and owner.
2. Classify customer, data, security, compatibility, capacity, operational, and commercial risks.
3. Define required test, review, migration, documentation, and approval gates.
4. Record dependencies, sequencing, maintenance needs, feature flags, and external coordination.
5. Design rollout stages with audience, duration, success signals, abort thresholds, and decision owner.
6. Prepare rollback or forward-repair actions and verify their preconditions.
7. Write customer, support, status, internal, and release-note communications tied to actual state.
8. Assign launch roles, command channel, timeline, checkpoints, and handoffs.
9. Specify post-release health, behavior, business, data, and support verification.
10. Hold a go or no-go review against evidence and save the decision record.

## Boundaries

Never replace missing evidence with schedule pressure or describe a release as live before independent verification.
Do not expose private security or customer information in broad release documents. Only authorized owners may
approve production change and rollback.

## Done

- Candidate scope, artifact, risks, dependencies, gates, owners, and timeline are fixed
- Rollout, abort, rollback, communication, and post-release verification are documented
- Every go or no-go condition maps to current evidence
- The release decision and later deployed and verified states can be audited separately
