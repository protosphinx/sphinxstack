---
name: test-cross-browser-compatibility
category: web
description: Test critical web journeys across representative browser engines, versions, devices, and capability boundaries. Use when a release must work beyond the team's default browser.
---

# test-cross-browser-compatibility

Choose coverage from real users and risky features, then distinguish defects from intentional progressive enhancement.

## Procedure

1. Define supported engines, versions, devices, assistive technology, and usage evidence.
2. Rank critical journeys and features with known compatibility risk.
3. Create clean profiles, representative accounts, network states, and test data.
4. Test semantics, layout, input, focus, forms, media, storage, downloads, and authentication.
5. Check missing APIs, prefixes, codecs, cookies, privacy modes, and third-party blocking.
6. Verify graceful fallback rather than pixel identity where appropriate.
7. Record browser, version, OS, steps, expected, actual, console, and screenshot evidence.
8. Fix at the shared standards boundary and retest adjacent configurations.
9. Automate stable coverage while retaining manual platform checks.

## Guardrails

- Do not lower accessibility to imitate another browser's defect.
- Browser emulation is not a full substitute for engine and device testing.
- Never use real customer data in compatibility accounts.

## Done

- A browser support matrix and compatibility test report are published
- Critical journeys and fallbacks are verified across target engines
- Fixed defects are retested on original and adjacent configurations
