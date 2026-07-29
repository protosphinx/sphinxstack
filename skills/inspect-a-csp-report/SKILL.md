---
name: inspect-a-csp-report
category: web
description: Inspect a Content Security Policy report by validating source, directive, blocked resource, document context, browser behavior, privacy, repetition, and exploit relevance. Use when policy violations need triage.
---
# inspect-a-csp-report
## When to use
- Use for authorized report-only or enforced-policy telemetry.
- Do not trust attacker-controlled fields or retain full URLs with secrets.
## Procedure
1. Preserve received time, endpoint, policy version, environment, release, and safe sample.
2. Validate schema, size, content type, origin, and untrusted fields.
3. Parse effective and violated directive, blocked URL class, source file, line, column, disposition, and status.
4. Redact query, fragment, path, referrer, and document data as required.
5. Group by stable signature and compare releases, browsers, routes, extensions, and third parties.
6. Classify bug, expected block, extension noise, attack signal, policy gap, or unresolved.
## Failure plan
- Preserve enforcement and investigate rather than broadly relaxing policy for noisy reports.
## Worked example
A new inline script violation appears only after a release and maps to a missing nonce.
## Done
- A CSP report analysis records policy, directive, safe resource class, context, signature, frequency, classification, and action
- Schema, untrusted-field, redaction, browser, release, extension, exploit, and no-policy-relaxation checks verify triage
