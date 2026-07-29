---
name: document-a-design-token
category: design
description: Document a reusable design value by semantic purpose, not appearance alone. Use when color, spacing, type, motion, elevation, radius, size, or other decisions must remain consistent across themes and platforms.
---

# document-a-design-token

## Procedure

1. Define the token's semantic job, consumers, platforms, and decision owner.
2. Choose a stable name based on purpose rather than a current literal value.
3. Record value by theme, mode, platform, density, or state where needed.
4. Define allowed uses, prohibited uses, composition, inheritance, and fallback.
5. Link accessibility, contrast, motion, brand, and technical constraints.
6. Add examples and counterexamples in representative components.
7. Specify source format, output mapping, version, aliases, deprecation, and change policy.
8. Test generated values in code and real interface states.
9. Publish migration notes and verify consuming artifacts.

## Guardrails

- Never encode meaning by color alone.
- Do not create a token for a one-off value without a reuse or governance reason.
- Avoid names that become false after a theme change.

## Done

- A token record contains semantics, values, scope, examples, and ownership
- Generated outputs and representative consumers are verified
- Accessibility and deprecation checks pass
