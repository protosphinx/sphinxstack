---
name: document-a-ui-component
category: design
description: Document a UI component's purpose, anatomy, behavior, states, content, accessibility, and implementation contract. Use when designers and engineers need one practical source for correct reuse.
---

# document-a-ui-component

Show how the component behaves under real content and interaction, not only how it looks at rest.

## Procedure

1. State the user problem, intended use, non-use cases, owner, and maturity.
2. Label anatomy, slots, variants, properties, events, and composition rules.
3. Cover default, hover, focus, active, selected, loading, empty, error, disabled, and overflow states.
4. Define keyboard, focus, semantics, announcements, contrast, and motion behavior.
5. Provide content rules for labels, help, validation, localization, and truncation.
6. Include responsive, theming, density, and platform behavior.
7. Add runnable examples, counterexamples, API notes, and migration guidance.
8. Verify documentation against the shipped component and tests.

## Guardrails

- Do not document a state the implementation cannot produce reliably.
- Avoid examples that use inaccessible placeholder content.
- Separate stable contract from experimental guidance.

## Done

- A component documentation page covers anatomy, states, behavior, and usage
- Examples and accessibility behavior are tested against implementation
- Design and engineering owners verify the documented contract
