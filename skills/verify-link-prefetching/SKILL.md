---
name: verify-link-prefetching
category: web
description: Verify that link prefetching improves navigation without triggering unsafe actions, excess transfer, cache errors, or privacy leaks. Use when a web framework or browser preloads likely destinations.
---

# verify-link-prefetching

Prefetch only safe, cacheable reads with measurable benefit.

## When to use

- Use when introducing, tuning, or debugging route, document, data, or asset prefetch.
- Never prefetch logout, deletion, purchase, mutation, personalized secret, or one-time-token URLs.

## Procedure

1. Record route, trigger, framework, browser support, network condition, cache state, authentication, and expected benefit.
2. Capture requests before interaction and identify initiator, priority, credentials, headers, response, cache, and bytes.
3. Verify the target is a safe read and cannot create server-side action, analytics inflation, or sensitive disclosure.
4. Check cache partitioning, user variation, `Vary`, authorization, locale, and stale-data rules.
5. Compare navigation timing and transferred bytes with prefetch enabled and disabled.
6. Test slow data, data saver, mobile, background tab, hover, viewport, keyboard focus, logout, and account switching.
7. Disable or constrain prefetch where cost, privacy, correctness, or mutation risk exceeds measured value.

## Done

- A prefetch report records trigger, initiator, request, cache, credentials, bytes, timing, user state, and risk decision
- Safe-method, account-switch, slow-network, cache-variation, mutation, and before-after performance checks verify the configuration
