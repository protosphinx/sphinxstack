---
name: design-a-localization-ready-interface
category: design
description: Design an interface that supports translation, text expansion, bidirectional layout, locale formats, input methods, and linguistic review. Use when a product will serve more than one language or regional convention.
---

# design-a-localization-ready-interface

Design with real language variance before translation begins.

## When to use

- Use during components, flows, content patterns, and responsive layout design.
- Do not treat language, country, currency, and legal region as one interchangeable setting.

## Procedure

1. Define target scripts, locales, direction, formats, input methods, fonts, and critical journeys.
2. Keep text in flexible containers; test expansion, contraction, wrapping, line breaking, and mixed-script content.
3. Avoid concatenated fragments and icon-only meaning that translators cannot reorder or explain.
4. Design plural, gender, grammatical case, variable, and formality contexts with complete messages.
5. Mirror directional layout and icons selectively; preserve inherently directional symbols and data.
6. Localize date, time, number, currency, address, name, phone, sorting, units, and search behavior.
7. Provide visible language choice and preserve user intent across routes.
8. Test pseudolocalization, right-to-left, keyboard navigation, screen readers, zoom, long errors, dynamic data, and fallback fonts.
9. Review high-risk journeys with fluent reviewers and record locale-specific exceptions.

## Failure plan

- If a translation is missing, use an explicit approved fallback without mixing unlabeled languages.
- If layout failure blocks a locale, repair the shared component rather than truncating essential content.

## Done

- A localization-ready design document records locales, scripts, direction, formats, content patterns, fonts, states, and exceptions
- Pseudolocalization, bidirectional, accessibility, input, and fluent-review tests verify critical journeys
