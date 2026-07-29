---
name: implement-progressive-image-loading
category: web
description: Implement progressive image loading with responsive sources, reserved layout, meaningful placeholders, priority, lazy loading, accessibility, and failure handling. Use when images delay rendering, waste bandwidth, shift layout, or fail on constrained networks.
---

# implement-progressive-image-loading

Load the right image at the right priority without hiding essential content.

## When to use

- Use for editorial, product, gallery, dashboard, and user-generated images.
- Do not lazy-load the primary above-the-fold image or replace meaningful alternative text with file names.

## Procedure

1. Inventory image roles, intrinsic dimensions, display sizes, formats, crop rules, density, themes, and content priority.
2. Generate responsive variants with explicit width and height, controlled quality, supported modern formats, and a reliable fallback.
3. Configure `srcset` and `sizes` from actual layout breakpoints and verify browser selection.
4. Reserve aspect-ratio space to prevent layout shift and use a neutral, nonmisleading placeholder.
5. Prioritize the likely largest-content image; lazy-load only below-the-fold images with appropriate distance.
6. Preserve useful alternative text, captions, links, zoom behavior, and high-contrast or reduced-data needs.
7. Handle decode, network, missing asset, and unsupported format failure without infinite retry.
8. Measure transferred bytes, selection, loading, layout shift, and visual quality across devices and networks.

## Done

- An image-delivery map records role, dimensions, variants, formats, sizes, priority, lazy policy, alternative text, and fallback
- Device, density, breakpoint, slow-network, cache, failure, accessibility, byte, and layout-shift tests verify delivery
