---
name: implement-responsive-images
category: web
description: Implement responsive images with accurate intrinsic size, source selection, art direction, formats, and accessibility. Use when one image must serve varied layouts, densities, networks, or crops.
---

# implement-responsive-images

Let the browser choose the smallest appropriate source from truthful layout information.

## Procedure

1. Define image purpose, semantic alternative, rendered widths, crops, and priority.
2. Generate quality-checked source widths that avoid redundant near-duplicates.
3. Add intrinsic dimensions or aspect ratio to reserve layout space.
4. Use `srcset` and an accurate `sizes` expression for resolution switching.
5. Use `picture` only for meaningful art direction or format fallback.
6. Set fetch priority and lazy loading according to whether the image is critical.
7. Preserve focal content, color, transparency, metadata policy, and accessible text.
8. Test viewport, density, zoom, save-data, slow network, failure, and print behavior.
9. Verify selected resources and visual quality in browser evidence.

## Guardrails

- Never lazy-load the primary visible image without measuring the impact.
- Do not use CSS background images for meaningful content.
- Avoid oversized originals as a universal fallback.

## Done

- An image-source and layout specification report is documented
- Art direction, accessibility, failure, and network cases are tested
- Browser-selected widths and layout stability are verified
