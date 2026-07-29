---
name: inspect-a-web-performance-waterfall
category: web
description: Inspect a web performance waterfall across redirects, connection setup, request priority, blocking, and dependency chains. Use when page loading is slow or a key resource arrives late.
---

# inspect-a-web-performance-waterfall

Trace when each resource became discoverable and which dependency kept the critical experience waiting.

## Procedure

1. Capture the target page, device, network, cache state, region, browser, and user journey.
2. Mark navigation, first byte, render, primary content, interaction, and load milestones.
3. Inspect redirects, DNS, connection, TLS, request wait, transfer, and server timing.
4. Follow initiator and dependency chains for critical scripts, styles, fonts, images, and data.
5. Check priority, preload, preconnect, blocking, serialization, cache, compression, and duplication.
6. Compare cold and warm loads plus one healthy control.
7. Test one change at a time and measure user-facing timing, not only bytes.
8. Save a waterfall analysis report with before-and-after evidence.

## Guardrails

- One lab trace does not represent every field user.
- Preloading too many resources can delay the real priority.
- Do not expose authenticated URLs, headers, or personal data in shared traces.

## Done

- A redacted waterfall report identifies the critical dependency chain
- Cold, warm, and control runs are verified
- Changes have recorded before-and-after user timing evidence
