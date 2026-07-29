---
name: write-a-test-plan
category: code
description: Turn a product or code change into a risk-based test plan with environments, cases, ownership, and release evidence. Use when someone asks what to test, needs QA coverage for a feature, or wants a repeatable verification plan before release.
---

# write-a-test-plan

Design checks around what could harm a user or invalidate the release decision. Prefer a small set of
high-information tests over a long list of generic cases.

## Inputs

- Read the requirement, design, diff, interfaces, acceptance criteria, and known incidents.
- Name the supported environments, data classifications, test owner, and release decision maker.
- Record what is explicitly out of scope and which assumptions still need confirmation.

## Procedure

1. Describe the critical user journeys and the observable result that makes each one successful.
2. Identify risks by impact and likelihood: incorrect results, lost data, unauthorized access,
   incompatibility, degraded performance, inaccessible interaction, and confusing recovery.
3. Build a coverage matrix connecting each material risk to one or more checks. Remove cases that do
   not change a release decision.
4. Define layers deliberately: deterministic unit checks, boundary or contract checks, integration
   checks, end-to-end journeys, and focused manual exploration.
5. Specify data and environment needs without copying private production data. Include setup, reset,
   isolation, and cleanup instructions.
6. Write each important case with preconditions, action, expected observation, and evidence to retain.
   Include negative, empty, boundary, repeat, interruption, and recovery cases where relevant.
7. Mark which cases block release, which can follow later, and who owns each result.
8. Define entry criteria, exit criteria, and the process for recording defects, retests, waivers, and
   residual risks.
9. Rehearse one representative case from setup through evidence capture. Revise ambiguous instructions.
10. Store the plan beside the change and keep a concise execution record as cases run.

## Boundaries

Do not turn the plan into an unprioritized checklist. Never use sensitive user data without permission
and a handling plan. Do not call a release tested when blocking environments or journeys were skipped;
record the gap and decision owner instead.

## Done

- A risk-to-coverage matrix links every blocking risk to a specific test
- Representative cases include setup, expected result, owner, and retained evidence
- Entry, exit, release-blocking, and waiver rules are written before execution
- A rehearsal proves another person can run one case and reach the same result

Then use review-a-pull-request to inspect the implementation and create-a-deployment-pipeline to automate stable checks.
