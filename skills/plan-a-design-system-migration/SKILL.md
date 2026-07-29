---
name: plan-a-design-system-migration
category: design
description: Migrate shared interface foundations across many products with controlled compatibility and recovery. Use when tokens, components, packages, themes, or interaction contracts must change without obscuring consumer risk.
---

# plan-a-design-system-migration

## When to use

- Use for consequential multi-consumer replacement or major-version adoption.
- Use an ordinary dependency upgrade for a local compatible release.

## Preconditions

- Confirm migration owner, source and target versions, consumer owners, support window, change authority, and rollback capability.

## Procedure

1. Build a consumer inventory covering versions, imports, overrides, themes, platforms, critical journeys, and owners.
2. Classify changes by visual, semantic, behavioral, API, accessibility, content, and bundle impact.
3. Define a compatibility strategy covering target contracts, compatibility layers, codemods, manual exceptions, and deprecated behavior.
4. Establish migration waves by risk, dependency, readiness, capacity, and reversibility.
5. Create automated scans, transformations, visual baselines, and reconciliation reports.
6. Pilot on representative simple, complex, customized, and accessibility-critical consumers.
7. Test states, themes, keyboard, screen reader, localization, performance, analytics, and business journeys.
8. Define stop, isolate, rollback, dual-run, support, and escalation behavior.
9. Execute by wave with exact versions, evidence, exception ownership, and no silent override loss.
10. Retire compatibility only after consumer reconciliation, observation, and recovery evidence pass.

## Failure plan

- Stop a wave on unexplained visual drift, semantic regression, accessibility failure, or unknown consumers.
- Preserve source packages and documented rollback through the support horizon.
- Do not measure success only by package installation.

## Done

- A consumer migration inventory reconciles versions, overrides, owners, and status
- Wave verification proves behavior, accessibility, visuals, performance, and critical journeys
- Rollback rehearsal and exception ledger prove recoverability
- Retirement evidence confirms no supported consumer remains
