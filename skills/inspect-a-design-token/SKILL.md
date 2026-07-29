---
name: inspect-a-design-token
category: design
description: Inspect a design token for semantic name, source, aliases, modes, units, consumers, contrast, platform transformation, and deprecation. Use when a visual or behavioral value is inconsistent.
---
# inspect-a-design-token
## When to use
- Use for color, typography, spacing, motion, elevation, breakpoint, or component tokens.
- Do not change a global token before tracing all consumers and accessibility effects.
## Procedure
1. Record token ID, source, version, type, value, aliases, modes, and description.
2. Trace transformations into platform outputs and component consumers.
3. Verify units, precision, fallback, naming, semantics, and mode inheritance.
4. Check contrast, zoom, motion, localization, density, and theme behavior.
5. Compare intended role with actual usage and hard-coded overrides.
6. Record keep, rename, split, migrate, or deprecate recommendation.
## Failure plan
- Create a new semantic token when changing the old value would break unrelated intent.
## Worked example
A “muted text” token is also used for disabled controls, so contrast remediation requires a split.
## Done
- A token inspection report records identity, source, aliases, modes, transforms, consumers, accessibility, and recommendation
- Platform, unit, fallback, theme, contrast, zoom, motion, override, and consumer checks verify meaning
