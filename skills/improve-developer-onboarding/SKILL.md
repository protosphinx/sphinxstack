---
name: improve-developer-onboarding
category: start
description: Shorten and strengthen the path from repository access to a verified first change by repairing setup, documentation, permissions, and feedback loops. Use when new developers stall, rely on oral knowledge, or cannot reproduce the supported environment.
---

# improve-developer-onboarding

Treat onboarding as an executable product journey. Measure where a capable new contributor loses time, access,
context, or confidence, then repair the system rather than blaming the person.

## Inputs

- Gather onboarding docs, repositories, access paths, environments, build and test commands, and team conventions.
- Use recent onboarding notes, setup failures, support requests, and time-to-first-change evidence.
- Identify security, license, data, hardware, network, and platform constraints.

## Procedure

1. Define the onboarding outcome as a clean setup, passing checks, and one reviewed representative change.
2. Map every prerequisite, request, wait state, owner, approval, and expected observation.
3. Run the current guide from a clean supported environment and log failures and hidden steps.
4. Separate mandatory access and knowledge from optional tools and historical context.
5. Create a repository map covering entry points, tests, local services, deployment boundaries, and owners.
6. Make setup commands deterministic, safe to rerun, and explicit about secrets and generated state.
7. Add a small first change that exercises the real edit, test, review, and feedback loop.
8. Document common failures with symptoms, diagnostics, and recovery.
9. Pilot with a new contributor without coaching and record time, blockers, and questions.
10. Assign owners and automated checks so the path stays current.

## Boundaries

Do not share credentials, production data, broad access, or private employee information to make onboarding easier.
Never require unsupported personal equipment or unpaid hidden work. Provide accessible and platform-appropriate
alternatives.

## Done

- A clean supported environment completes setup and the documented checks
- Required access, waits, owners, repository map, and common recovery paths are written
- A new contributor completed a representative first change and review from the guide
- Blockers, elapsed time, and follow-up improvements are recorded with owners
