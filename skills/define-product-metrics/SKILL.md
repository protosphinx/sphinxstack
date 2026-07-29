---
name: define-product-metrics
category: data
description: Define product metrics from user outcomes, specify exact events and populations, add guardrails, and produce a measurement plan that supports decisions. Use when a team asks what to measure, has conflicting dashboard numbers, or needs success criteria before launching a feature.
---

# define-product-metrics

Start with the decision and user outcome, then define the arithmetic and instrumentation. A useful metric
has an owner, population, window, source, and response when it changes.

## Inputs

- Name the product decision, critical user journey, intended users, and metric owner.
- Gather current event schemas, data sources, privacy rules, known quality gaps, and reporting cadence.
- Separate product goals from business constraints and operational health.

## Procedure

1. Write the desired user outcome in observable terms, independent of a particular interface or feature.
2. Draw a metric tree linking the outcome to activation, repeated value, retention, quality, and relevant
   business or system constraints.
3. Select one primary metric only when it represents value rather than raw activity. Add diagnostic and
   guardrail metrics that can explain movement and expose harm.
4. Define every metric with name, question answered, numerator, denominator, eligible population,
   exclusions, event time, attribution window, timezone, and source.
5. Segment only on dimensions tied to a plausible decision. Include new versus returning users and
   accessibility, device, geography, or plan segments when relevant and permitted.
6. Specify the events and properties needed. Minimize personal data, name consent requirements, and set
   retention and access rules.
7. Test the definition against edge cases: retries, duplicate events, multiple devices, late arrival,
   deleted accounts, bot traffic, internal users, and partial journeys.
8. Reconcile a sample from raw records to the reported number. Investigate discrepancies rather than
   choosing the more favorable source.
9. Set a baseline, expected range, review cadence, owner, and the decisions triggered by meaningful change.
10. Publish a versioned metric dictionary and measurement plan before using the numbers in a launch or experiment.

## Boundaries

Do not optimize a proxy that can rise while the user outcome worsens. Never define protected or sensitive
segments without a legitimate purpose, permission, and minimum-count safeguards. Report uncertainty and
data gaps rather than filling them with estimates.

## Done

- A metric tree connects the user outcome to primary, diagnostic, business, and guardrail measures
- A versioned metric dictionary defines arithmetic, population, window, source, owner, and edge cases
- A sample reconciliation proves reported values can be traced back to underlying records
- The measurement plan states baseline, cadence, privacy rules, quality checks, and decisions each metric supports

Then use add-analytics to implement the event contract or analyze-an-experiment to compare a controlled change.
