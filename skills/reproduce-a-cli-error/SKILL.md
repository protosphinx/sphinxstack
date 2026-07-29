---
name: reproduce-a-cli-error
category: code
description: Reproduce a CLI error with exact arguments, input, environment, version, exit status, streams, and minimal conditions. Use when a command fails inconsistently or only for another user or system.
---

# reproduce-a-cli-error

Preserve the invocation without exposing its secrets.

## When to use

- Use for local tools, build commands, package managers, deployment clients, or scripts.
- Never paste credentials, tokens, private paths, or personal input into a public reproducer.

## Preconditions

- Capture executable and version, shell, platform, working directory, sanitized arguments, input, environment, and expected behavior.

## Procedure

1. Preserve stdout, stderr, exit status, signal, timing, and side effects separately.
2. Re-run once in the original context without adding retries or cleanup.
3. Build a clean controlled environment matching documented dependencies.
4. Reduce arguments, input, files, environment, permissions, and network assumptions one at a time.
5. Compare success and failure contexts and record each discriminating change.
6. Produce the smallest safe reproducer that retains the same failure signature.
7. Verify cleanup and write a reproducibility report.

## Failure plan

- If reproduction could mutate production or external state, replace it with a safe fixture or read-only simulation.

## Worked example

A deploy CLI fails only under a locale with a spaced path; reduction preserves both factors and excludes the token from logs.

## Done

- A CLI reproduction report includes sanitized command, environment, input, outputs, exit status, side effects, and minimal case
- Clean-context, failure-signature, secret, permission, locale, path, network, and cleanup checks verify reproducibility
