---
name: validate-a-cron-expression
category: code
description: Validate a cron expression against the exact scheduler dialect, time zone, calendar behavior, overlap, and operational intent. Use when scheduled execution timing must be predictable.
---
# validate-a-cron-expression
## When to use
- Use before creating or changing recurring scheduled work.
- Do not assume five-field and six-field cron dialects are equivalent.
## Preconditions
- Record scheduler, version, dialect, time zone, desired windows, holidays, duration, concurrency, and missed-run policy.
## Procedure
1. Parse with the exact scheduler implementation.
2. Generate future runs across ordinary, month-end, leap, daylight-saving, and year boundaries.
3. Compare every generated run to stated operational intent.
4. Check time zone source, clock, inclusive ranges, day-field semantics, and special tokens.
5. Define overlap, concurrency, catch-up, missed, retry, and duplicate behavior.
6. Test in a safe environment and record the next expected runs.
## Failure plan
- Use an explicit scheduler or calendar table when cron cannot express the rule safely.
## Worked example
A 02:30 local job has no run during a daylight-saving jump, so the team chooses UTC plus a business-calendar guard.
## Done
- A cron validation report records dialect, expression, time zone, generated runs, edge cases, and execution policy
- Month-end, leap, daylight-saving, overlap, missed-run, duplicate, and scheduler-version checks verify timing
