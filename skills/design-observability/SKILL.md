---
name: design-observability
category: code
description: Design the signals needed to tell whether users are succeeding and to explain failures quickly. Connect service indicators, structured events, traces, alerts, and runbooks to real journeys. Use when a live system is hard to operate or before a new production service launches.
---

# design-observability

Make a service explain its behavior without requiring guesswork or a new deployment. Begin with
the user journey and the decisions an operator must make. Tools and dashboards come after the
questions, not before them.

## When to use

Use this skill before launching a production service, after an incident exposed missing signals,
or when operators cannot distinguish user failure from infrastructure noise. Do not collect data
without a named operational question, retention rule, and owner.

Never log credentials, tokens, full request bodies, or personal data by default. Redact or hash
identifiers only when the result still supports a specific diagnosis and complies with policy.

## Preconditions

- Name the critical user journeys, service owner, on-call path, and data-handling restrictions.
- Gather current logs, metrics, traces, alerts, dashboards, incidents, and known blind spots.
- Define normal traffic, important dependencies, and the actions operators are allowed to take.
- Agree on a small set of measurable reliability objectives or interim targets.

## Procedure

1. For each critical journey, write the successful outcome and the failures users can observe.
2. Define a service level indicator for success, latency, freshness, or correctness. Specify numerator,
   denominator, exclusions, source, aggregation, and measurement window.
3. Set a service objective that reflects user tolerance and leaves room for safe change. Avoid false precision.
4. Define structured logs as named events with stable fields, severity rules, request or job correlation,
   redaction, sampling, and retention. Log decisions and state changes, not every line of execution.
5. Add metrics for traffic, errors, latency, saturation, queue age, and domain-specific correctness.
6. Add a trace across boundaries where a request or job crosses services. Preserve one correlation ID.
7. Build a dashboard in diagnostic order: user outcome, scope, dependencies, resources, and recent changes.
8. Alert on symptoms that require action. Write the owner, urgency, threshold, evaluation window, and runbook link.
9. Create a runbook for each alert with confirmation, containment, escalation, and recovery checks.
10. Test the diagnostic trail by injecting a safe known failure. Confirm the service level indicator changes,
    the alert fires once, the trace narrows the cause, and the runbook leads to recovery.
11. Review volume, cost, privacy, unused fields, noisy alerts, and gaps after the test and after each incident.

## Failure plan

Assume telemetry is missing, delayed, duplicated, or wrong during an incident. Record an independent
fallback signal and the point at which operators must treat the dashboard as untrusted. Rate-limit or
disable runaway telemetry before it harms the service. Keep alert changes reversible and test the old
and new thresholds against recorded traffic before promotion.

## Done

- Each critical journey has a documented service level indicator and an owned objective
- A dashboard moves from user outcome to dependencies, saturation, and recent changes
- Structured logs and at least one trace create a privacy-reviewed diagnostic trail
- An alert test proves routing, threshold, runbook, and recovery without duplicate noise
- Every actionable alert links to a current runbook and names its owner

Then use debug-a-production-incident to exercise the signals under coordinated response.
