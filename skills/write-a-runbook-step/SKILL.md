---
name: write-a-runbook-step
category: write
description: Turn one operational action into a safe, verifiable runbook step with prerequisites, expected observations, failure handling, and recovery. Use when documenting a repeated diagnostic, mitigation, deployment, or maintenance action.
---

# write-a-runbook-step

Document one decision-sized operation. The reader should know whether to run it, what success looks like, and
where to stop if the system responds differently.

## Inputs

- Gather the exact command or interface action, environment, permissions, current procedure, and owning service.
- Identify side effects, dependencies, expected duration, rate or cost, failure modes, and rollback.
- Use a safe test environment or approved rehearsal window.

## Procedure

1. Name the purpose and observable condition that justifies the step.
2. List required role, environment, access, tools, inputs, and pre-checks.
3. Write the exact command or action using explicit placeholders and safe quoting.
4. Show the expected output, state transition, and normal duration.
5. Explain how to distinguish success, no-op, retryable failure, and unsafe failure.
6. Add stop conditions and the escalation owner for unexpected output.
7. Document reversal, cleanup, or reconciliation when state changes.
8. Run the step in the approved environment and capture evidence.
9. Ask another operator to follow the text without oral context.
10. Link the broader runbook and record owner and review trigger.

## Boundaries

Never embed credentials, production secrets, customer data, or ambiguous destructive targets. Do not tell an
operator to ignore errors or repeat an uncertain state-changing command. Require explicit approval where the
real operation requires it.

## Done

- Preconditions, authority, command or action, and expected observation are written
- Success, failure, stop, escalation, and reversal behavior have been tested
- Placeholders and sensitive inputs are safe and unambiguous
- A second operator completed the step from the document and recorded the result
