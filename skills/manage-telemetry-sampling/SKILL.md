---
name: manage-telemetry-sampling
category: data
description: Manage telemetry sampling with explicit coverage, bias, cost, rare-event retention, and correction metadata. Use when complete event capture is too expensive or unsafe at production scale.
---

# manage-telemetry-sampling

Preserve the evidence needed for decisions and make selection probability visible to every downstream consumer.

## Procedure

1. Inventory telemetry classes, volumes, costs, objectives, queries, alerts, and compliance needs.
2. Identify rare failures, high-value journeys, security events, and audit evidence that must not be sampled casually.
3. Choose deterministic, probabilistic, rate-limited, priority, or tail-based sampling by signal.
4. Apply decisions at the stage that has enough context without wasting upstream work.
5. Propagate sampling state and effective probability through related spans or events.
6. Keep strata for service, operation, outcome, region, and bounded risk class where useful.
7. Weight or label aggregate analysis so sampled counts are not mistaken for raw totals.
8. Measure accepted, dropped, late, error-retained, and budget-limited telemetry.
9. Replay known incidents and traffic shifts against proposed policy.
10. Stage changes, compare coverage, and retain a fast rollback.

## Guardrails

- Never sample legally required audit evidence through an ordinary cost-control rule.
- Uniform request sampling can erase rare failures and low-volume customers.
- Do not extrapolate counts without known inclusion probability and assumptions.

## Done

- A sampling policy report documents strata, probabilities, exceptions, and consumers
- Incident replay and traffic-shift tests are verified
- Sampled estimates reconcile with unsampled control windows
