---
name: tune-an-alert
category: data
description: Tune an operational alert using historical outcomes, service objectives, detection delay, and responder burden. Use when a notification is noisy, late, fragile, or repeatedly unactionable.
---

# tune-an-alert

Improve the decision signal without hiding real user harm or merely moving noise elsewhere.

## Procedure

1. Define the protected outcome, intended responder action, severity, and required lead time.
2. Collect alert firings, duration, acknowledgments, incidents, user impact, and no-impact cases.
3. Classify true positives, false positives, duplicates, flaps, stale alerts, and missed incidents.
4. Inspect query semantics, data delay, missing data, thresholds, windows, grouping, and inhibition.
5. Compare rate, burn-rate, percentile, anomaly, and multi-signal alternatives.
6. Choose the simplest rule that meets detection and burden objectives.
7. Replay the candidate against historical and synthetic scenarios.
8. Deploy in shadow or notification-only mode before changing paging.
9. Measure precision, recall limits, detection time, page volume, and responder feedback.
10. Record the change, rollback, owner, and scheduled review.

## Guardrails

- Never silence an alert only because the underlying incident is difficult to fix.
- Historical data may not include the failure that matters most.
- Keep paging, ticketing, and informational notification thresholds distinct.

## Done

- An alert evaluation report records outcomes, burden, and candidate rules
- Historical and synthetic replay results are verified
- Post-change paging and missed-incident evidence are reviewed
