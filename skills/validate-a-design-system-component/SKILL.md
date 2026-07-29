---
name: validate-a-design-system-component
category: design
description: Validate a shared component across behavior, variants, accessibility, content, themes, and consumers. Use when a new or changed design-system component needs evidence before adoption or release.
---

# validate-a-design-system-component

## Procedure

1. Define component purpose, consumers, platforms, supported variants, non-goals, and owner.
2. Review semantics, API, states, content, tokens, dependencies, and design references.
3. Build representative stories for normal, disabled, loading, error, empty, long, localized, and permission states.
4. Test keyboard, focus, screen reader, zoom, contrast, motion, touch, and high-contrast behavior.
5. Test themes, responsive layout, nested use, composition, and consumer overrides.
6. Verify events, form behavior, errors, asynchronous updates, and server-rendered use where applicable.
7. Compare supported browsers, frameworks, and assistive technology defined by policy.
8. Run visual, interaction, unit, accessibility, and consumer integration tests.
9. Pilot with at least one real consumer and record migration friction.
10. Release only with docs, examples, versioning, known limits, and rollback.

## Guardrails

- Automated accessibility checks do not replace human interaction tests.
- Do not expose an unstable API as a silent breaking change.
- Consumer overrides must not defeat required behavior.

## Done

- A validation report covers states, semantics, access, visuals, and integration
- Automated and human evidence passes the supported matrix
- Consumer pilot, documentation, versioning, and rollback are verified
