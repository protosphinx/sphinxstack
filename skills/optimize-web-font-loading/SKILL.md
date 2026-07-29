---
name: optimize-web-font-loading
category: web
description: Optimize web font loading for fast text, stable metrics, bounded files, and resilient fallback. Use when fonts delay rendering, shift layout, or fail across networks and scripts.
---

# optimize-web-font-loading

Deliver only the faces needed and make fallback acceptable at every moment.

## Procedure

1. Inventory families, weights, styles, scripts, pages, licenses, and actual use.
2. Remove unused faces and subset only with verified language coverage.
3. Prefer modern compressed formats and same-origin delivery where practical.
4. Define preload only for critical above-fold faces and correct cross-origin behavior.
5. Choose `font-display` from the content and brand tradeoff.
6. Match fallback metrics to reduce reflow and preserve readable text.
7. Set immutable cache URLs, correct MIME, CORS, and versioning.
8. Test cold, warm, slow, offline, blocked-font, localization, and zoom cases.
9. Measure text render, layout shift, transfer, and cache reuse before and after.

## Guardrails

- Do not subset away required languages or symbols.
- Preloading every font competes with more critical resources.
- Licensing terms remain part of deployment readiness.

## Done

- A font inventory and delivery report records every retained face
- Fallback, localization, failure, and cache cases are tested
- Render timing and layout stability improvements are verified
