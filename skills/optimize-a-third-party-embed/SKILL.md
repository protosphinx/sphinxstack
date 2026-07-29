---
name: optimize-a-third-party-embed
category: web
description: Optimize a third-party embed for performance, privacy, security, accessibility, resilience, and removal. Use when external video, maps, chat, analytics, social, or commerce code affects a page.
---

# optimize-a-third-party-embed

Treat the vendor as an external dependency with its own failure and data boundary.

## When to use

- Use before adding an embed or when an existing embed harms loading, privacy, security, accessibility, or reliability.
- Prefer a first-party link, image, or server-rendered summary if it meets the user need.

## Procedure

1. Document the user need, owner, vendor, data flows, cookies, subprocessors, permissions, license, retention, regions, and business fallback.
2. Measure the page before change: bytes, requests, CPU, main-thread time, layout shift, interaction delay, and user-visible value.
3. Reserve stable dimensions and load a lightweight placeholder or facade.
4. Delay loading until proximity or deliberate activation, and gate nonessential tracking behind valid preference state.
5. Apply narrow iframe sandbox, feature permissions, CSP, referrer policy, credential, origin, and message-event checks.
6. Expose an accessible name, keyboard operation, captions or text alternative, contrast, status, and an external-link fallback.
7. Bound network, render, and message failures so the rest of the page remains usable.
8. Test blocked scripts, denied cookies, slow networks, vendor outage, content blockers, keyboard, screen readers, zoom, and small screens.
9. Compare post-change performance and privacy evidence with the baseline, including after user activation.
10. Record renewal and removal ownership so the dependency can be disabled without redesigning the page.

## Failure plan

- If the vendor cannot meet the data or security boundary, do not load it.
- If an outage blocks the page, replace the embed with the documented fallback and isolate vendor execution.

## Done

- A third-party assessment records necessity, data, controls, permissions, owners, accessibility, and fallback
- Before-and-after measurements verify loading, interaction, layout, privacy, and failure behavior
- Cross-mode tests prove the page remains usable when the embed is blocked, slow, denied, or unavailable
