---
name: write-a-bug-report
category: write
description: Turn an observed software defect into a concise, reproducible engineering report with evidence, scope, and expected behavior. Use when a product, website, API, script, or device behaves incorrectly and another person must investigate it.
---

# write-a-bug-report

Create a report that proves the observed gap without guessing at root cause. Preserve the smallest evidence
another person needs to reproduce, prioritize, and verify a fix.

## Inputs

- Gather the affected product, version, environment, time, account-safe context, and user goal.
- Preserve exact steps, inputs, outputs, messages, logs, screenshots, recording, and frequency where available.
- Confirm expected behavior from a specification, prior behavior, design, test, or responsible owner.

## Procedure

1. Write a searchable title using the visible failure and affected area.
2. State the user or system impact before the reproduction details.
3. List minimal numbered steps from a known starting state.
4. Record expected and actual results separately, using exact text and values.
5. Include environment, version, browser or device, configuration, and time window that may matter.
6. State frequency and the number of attempts; distinguish always, intermittent, and not retested.
7. Attach the smallest privacy-safe evidence and link related incidents, regressions, or duplicates.
8. Record workaround, affected scope, and conditions where the problem does not occur.
9. Remove root-cause claims unless directly proven and label hypotheses.
10. Ask a second person or clean environment to follow the report.

## Boundaries

Never include credentials, secrets, full customer data, or unnecessary production records. Do not change state,
stress a live system, or repeat a destructive action only to improve the report. Follow the security process
for vulnerabilities and private exposure.

## Done

- A second person can reproduce the actual result from the written steps or the limitation is recorded
- Expected behavior has a cited source and is not merely preference
- Environment, frequency, impact, workaround, and privacy-safe evidence are included
- Root cause remains a hypothesis unless a separate investigation has proved it
