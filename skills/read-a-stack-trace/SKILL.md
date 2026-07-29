---
name: read-a-stack-trace
category: code
description: Read a stack trace by identifying the failure, call path, application frames, runtime context, and first evidence-backed investigation point. Use when an exception or crash includes nested call information.
---

# read-a-stack-trace

Treat the trace as a captured path, not a complete root-cause explanation.

## When to use

- Use for application, test, worker, browser, or service exceptions.
- Do not publish secrets, tokens, personal data, source paths, or internal hostnames copied from a trace.

## Procedure

1. Preserve the full error, timestamp, request or job ID, version, environment, input class, and reproduction context.
2. Identify exception type, message, cause chain, suppressed errors, thread or task, and termination point.
3. Read frames in runtime order and distinguish application, dependency, generated, framework, and asynchronous-boundary frames.
4. Find the first application frame that could have violated the observed invariant.
5. Open the exact deployed source version and inspect inputs, state, callers, and recent changes.
6. Compare repeated traces and a successful control case.
7. Form a hypothesis with a discriminating test rather than editing the top frame immediately.
8. Redact sensitive data and link the trace to the incident or bug report.

## Done

- A diagnostic report records complete trace context, application frames, deployed version, and ranked investigation point
- A reproduction or discriminating test confirms or rejects the initial failure hypothesis
