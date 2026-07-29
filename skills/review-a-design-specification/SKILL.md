---
name: review-a-design-specification
category: design
description: Review a design specification for complete states, rules, content, accessibility, data, and implementation decisions. Use when a feature is approaching engineering handoff or approval.
---

# review-a-design-specification

Find ambiguous behavior before implementation turns it into inconsistent product decisions.

## Procedure

1. Define feature outcome, audience, scope, decision owner, and linked requirements.
2. Walk the primary journey from entry through completion and return.
3. Check empty, loading, partial, error, permission, offline, timeout, and recovery states.
4. Review content, validation, localization, accessibility, keyboard, focus, and responsive behavior.
5. Map data sources, freshness, privacy, permissions, analytics, and irreversible actions.
6. Identify component contracts, design tokens, platform differences, and technical assumptions.
7. Record questions as decisions with owner, deadline, evidence, and blocking status.
8. Re-review updated prototypes and produce an approved specification report.

## Guardrails

- Do not treat a polished happy-path mockup as a complete specification.
- Avoid inventing technical constraints without engineering evidence.
- Keep unresolved safety, privacy, and accessibility decisions visible as blockers.

## Done

- A specification review report records gaps, decisions, owners, and status
- All required states and accessibility paths are tested in the prototype
- Design, engineering, product, and content owners verify readiness
