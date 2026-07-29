---
name: inspect-a-stack-trace
category: code
description: Inspect a stack trace to identify the failing path, first relevant application frame, runtime context, and next discriminating check. Use when an error includes a call sequence but the cause is unclear.
---

# inspect-a-stack-trace

Use the trace as a path to investigate, not a complete diagnosis.

## When to use

- Use for local, test, build, job, or production errors with a preserved trace.
- Never expose secrets or personal data from arguments, paths, or logs.

## Preconditions

- Capture the full error, trace, timestamp, version, environment, request or job identifier, and triggering action.

## Procedure

1. Preserve the original trace and separate exception type, message, cause chain, and frames.
2. Mark runtime, framework, dependency, generated, and application frames.
3. Read from the throw site outward and identify the first relevant owned frame.
4. Resolve symbols, source maps, versions, and line numbers against the exact artifact.
5. Compare successful and failed context without assuming the deepest frame caused the fault.
6. Form two or more hypotheses and name the next check that would distinguish them.
7. Record the bounded finding and link it to a reproducible case or incident.

## Failure plan

- If symbols or source versions mismatch, stop attribution and recover the exact build mapping.

## Worked example

A null error surfaces in framework code, but the first owned frame shows an optional account record passed into a formatter; a fixture check distinguishes missing data from a deploy mismatch.

## Done

- A stack-trace report records the exact error, artifact version, cause chain, owned frame, hypotheses, and next check
- Symbol, source-map, timestamp, context, privacy, and reproduction checks verify the interpretation
