---
name: test-a-website-on-mobile
category: web
description: Test a website on representative mobile devices, browsers, networks, orientations, and input conditions. Use when a critical journey must work beyond desktop emulation.
---

# test-a-website-on-mobile

Exercise real touch, viewport, keyboard, network, and browser behavior across the whole journey.

## Procedure

1. Select critical pages, devices, engines, OS versions, networks, locales, and account states.
2. Test initial load, navigation, forms, authentication, media, downloads, and recovery.
3. Check touch target size, scroll, sticky UI, safe areas, zoom, and text scaling.
4. Open the virtual keyboard and verify focus, validation, autofill, and obscured controls.
5. Rotate, background, resume, interrupt, reconnect, and retry the journey.
6. Observe layout shifts, memory, heat, battery-sensitive work, and slow-network behavior.
7. Capture reproducible evidence with device, version, steps, expected, and actual result.
8. Retest fixes on the original device and one adjacent configuration.

## Guardrails

- Emulation does not replace representative real-device testing.
- Never use real customer accounts or expose credentials in recordings.
- Preserve user zoom and platform accessibility settings.

## Done

- A mobile test matrix and defect report are documented
- Critical journeys are verified across representative real devices
- Fixed defects are retested with recorded device and network evidence
