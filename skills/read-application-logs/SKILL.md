---
name: read-application-logs
category: code
description: Read application logs as time-bounded evidence while preserving context, uncertainty, and sensitive-data boundaries. Use when a service symptom needs reconstruction from recorded events.
---

# read-application-logs

Start from a specific question and widen only when the evidence requires it.

## Procedure

1. State the symptom, affected scope, environment, time window, and expected behavior.
2. Confirm clock, timezone, deployment, instance, and log-source coverage.
3. Search by stable request, job, account-safe, error, or trace identifiers.
4. Reconstruct events in time order across relevant services and retries.
5. Separate application failures, dependency failures, client cancellations, and logging gaps.
6. Compare the affected path with a known-good request or adjacent time window.
7. Redact credentials and personal data before sharing excerpts.
8. Save a diagnostic report with queries, evidence, limits, and the next supported check.

## Guardrails

- Never treat absence of a log as proof that an event did not occur.
- Do not paste whole production records when a bounded redacted excerpt is sufficient.
- Preserve original timestamps and source identity when exporting evidence.

## Done

- A redacted event timeline and query record are saved
- The relevant log sources and coverage gaps are verified
- Conclusions distinguish observed evidence from inference
