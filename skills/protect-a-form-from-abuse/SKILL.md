---
name: protect-a-form-from-abuse
category: web
description: Protect a public form with layered, accessible controls and measured false-positive handling. Use when spam or automation threatens submissions without justifying a hostile experience for everyone.
---

# protect-a-form-from-abuse

Raise the cost of abusive submissions while keeping legitimate completion safe and observable.

## Procedure

1. Measure submission volume, abuse patterns, user harm, and current false positives.
2. Validate every field and enforce size, frequency, and attachment limits on the server.
3. Add low-friction signals such as timing, duplicate detection, and a hidden honeypot.
4. Rate-limit by several bounded signals without treating an IP address as a person.
5. Apply an accessible challenge only when accumulated risk justifies it.
6. Queue or moderate uncertain submissions instead of silently discarding them.
7. Give legitimate users a clear retry and support path that does not reveal detection rules.
8. Monitor block, challenge, completion, appeal, and false-positive rates by cohort.
9. Rehearse provider failure and define whether the form fails open, closed, or into review.

## Guardrails

- Do not collect device or behavioral data that is unnecessary for the stated risk.
- Never rely on a client-side control without server-side enforcement.
- Avoid puzzles or interaction patterns that exclude assistive technology users.

## Done

- The layered control plan and data-use rationale are documented
- Legitimate, abusive, inaccessible, and provider-failure cases are tested
- Block and false-positive metrics are recorded with a verified recovery path
