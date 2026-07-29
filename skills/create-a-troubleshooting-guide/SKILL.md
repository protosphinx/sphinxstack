---
name: create-a-troubleshooting-guide
category: write
description: Build a symptom-led troubleshooting guide with safe diagnostics, observable branches, fixes, and escalation evidence. Use when customers, support, developers, or operators repeatedly diagnose the same class of problem.
---

# create-a-troubleshooting-guide

Guide the reader from what they can observe to the smallest safe next action. Avoid assuming a root cause before
diagnostics distinguish it from nearby failures.

## Inputs

- Gather real cases, symptoms, environments, known causes, diagnostics, fixes, workarounds, and escalation paths.
- Identify audience permissions, technical level, data sensitivity, and operations that can cause harm.
- Confirm current product versions, interfaces, links, and support ownership.

## Procedure

1. Define the scope and list symptom phrases readers actually use.
2. Start with safety, data-preservation, access, and service-status checks.
3. Ask for the minimum environment and state information that changes a decision.
4. Build branches from observable results with one diagnostic per step.
5. Give exact commands or interface actions, expected output, and interpretation.
6. Offer the smallest reversible fix or workaround, including side effects and undo.
7. Stop repetition when retry could duplicate, delete, charge, lock, or corrupt.
8. Define escalation triggers and the privacy-safe evidence package to attach.
9. Test every branch on affected, unaffected, permission-limited, and current-version cases.
10. Ask a representative reader to use the guide without coaching and revise dead ends.

## Boundaries

Never request credentials, unnecessary personal data, or unsafe diagnostic bundles. Do not tell unprivileged
readers to bypass security or run destructive commands. Separate public troubleshooting from restricted
security and infrastructure details.

## Done

- Real symptom language leads to observable diagnostic branches
- Commands, interface actions, expected outputs, fixes, and reversals are checked
- Unsafe retries and escalation triggers are explicit
- A representative reader completed the guide and produced the required evidence without coaching
