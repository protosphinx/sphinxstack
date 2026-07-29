---
name: harden-a-cli-for-automation
category: code
description: Harden a CLI for automation with stable contracts, noninteractive operation, structured output, exit semantics, idempotency, timeouts, security, and compatibility. Use when scripts and agents depend on a command.
---

# harden-a-cli-for-automation

Automation needs a versioned machine contract, not terminal scraping.

## When to use

- Use when CI, scripts, operators, or agents call a CLI.
- Never print secrets or require interactive confirmation in machine mode.

## Preconditions

- Inventory commands, callers, versions, output dependencies, side effects, credentials, platforms, and compatibility.

## Procedure

1. Define command, argument, environment, input, stdout, stderr, and exit-code contracts.
2. Add explicit noninteractive and machine-readable modes with versioned schemas.
3. Keep diagnostics on stderr and results on stdout.
4. Support timeouts, cancellation, retries only where safe, and idempotency for mutation.
5. Make prompts fail closed without an explicit automation option.
6. Handle locale, paths, encoding, terminals, signals, partial output, and network failure.
7. Deprecate compatibly and provide capability or version discovery.
8. Test fixtures across platforms and old callers.

## Failure plan

- Preserve the old contract or introduce a versioned mode when callers cannot migrate atomically.

## Worked example

A deploy command gains JSON output, exact exit codes, idempotency key, timeout, and a noninteractive approval token without leaking credentials.

## Done

- A CLI contract document and test suite record inputs, outputs, exits, noninteractive behavior, side effects, security, and versions
- Locale, path, signal, timeout, retry, partial-output, old-caller, and secret-redaction tests verify automation safety
