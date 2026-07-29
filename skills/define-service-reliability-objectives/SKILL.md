---
name: define-service-reliability-objectives
category: data
description: Define service indicators and reliability objectives from user outcomes and evidence. Use when teams need measurable availability, latency, correctness, durability, or freshness commitments and defensible alerting.
---

# define-service-reliability-objectives

Measure whether users receive a good service, not whether a convenient component metric is green. Treat an objective as a governed decision with error, exclusions, and consequences.

## When to use

- Use when a live or planned service needs user-centered reliability targets, alerts, or commitment evidence.
- Use a simple operating metric when no reliability decision or consequence is attached.

## Preconditions

- Confirm service owner, users, critical journeys, dependency boundary, risk appetite, reporting window, and decision authority.
- Obtain traffic and failure history, telemetry definitions, maintenance behavior, contract commitments, and incident evidence.

## Procedure

1. Define service boundaries and the user journeys whose failure matters.
2. For each journey, describe a valid event and what counts as good for availability, latency, correctness, durability, or freshness.
3. Choose observation points close to user outcomes and document telemetry limits, blind spots, sampling, retries, bots, and partial failures.
4. Write each service-level indicator with a reproducible numerator and denominator, filters, units, and query owner.
5. Test indicators against known incidents, normal traffic, low-volume periods, dependency failures, and telemetry loss.
6. Model candidate objectives from historical distributions, user harm, contractual floors, engineering capability, and cost.
7. Define window, target, error budget, low-traffic treatment, maintenance policy, and any narrowly justified exclusions.
8. Set burn alerts across useful time scales and verify them with replay or controlled failure.
9. Define decision consequences for review, release, investment, and escalation tied to the objective.
10. Publish dashboards with freshness, coverage, query version, and reconciliation to incident records.

## Failure plan

- Do not set a target solely by copying current performance or a competitor.
- Stop using an indicator when telemetry gaps or denominator drift can materially reverse the conclusion.
- Never exclude incidents after the fact to protect attainment.
- Keep internal objectives distinct from contractual promises unless authorized owners align them.

## Done

- A versioned indicator definition maps each objective to a critical user journey and tested indicator
- Numerators, denominators, exclusions, windows, telemetry limits, and ownership are explicit
- A historical backtest and alert and breach rehearsal support thresholds
- Breach decisions, review cadence, and evidence retention are governed
