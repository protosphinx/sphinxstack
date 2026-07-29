---
name: implement-server-side-rendering
category: web
description: Implement server-side rendering with deterministic hydration, correct status and metadata, safe caching, and observable failure behavior. Use when routes need useful first responses for users, crawlers, sharing, or performance.
---

# implement-server-side-rendering

Make the server response a complete, truthful representation of route state.

## When to use

- Use for public content, commerce, authenticated application shells, or routes harmed by client-only startup.
- Avoid SSR when static generation or a simpler server-rendered page meets the need.

## Procedure

1. Classify routes by public, personalized, authenticated, static, dynamic, cacheable, streaming, and mutation behavior.
2. Define server data dependencies, timeouts, authorization, locale, experiment, device, and error boundaries.
3. Render valid content, landmarks, links, forms, title, canonical, metadata, and the correct HTTP status in the initial response.
4. Serialize only the minimum hydration state with safe escaping; never expose secrets or data from another user or tenant.
5. Make server and client output deterministic across clocks, random values, identifiers, locale, browser-only APIs, and feature flags.
6. Hydrate without replacing focus, user input, or server-visible content. Detect and fail tests on mismatches.
7. Set cache keys and private/public directives from every representation-changing input. Keep authenticated data out of shared caches.
8. Design loading, streaming, timeout, not-found, redirect, and dependency failure behavior with correct status semantics.
9. Instrument server time, data time, render time, hydration errors, route failures, cache behavior, and client recovery.
10. Test view source, JavaScript disabled, slow and failed dependencies, authenticated isolation, locale, bots, navigation, forms, and deploy-version skew.

## Failure plan

- If SSR fails, return a controlled error or safe shell with truthful status rather than another user's cached content.
- If server and client versions differ, preserve compatible serialized state or hold rollout until parity is restored.

## Done

- An SSR route matrix records data, auth, metadata, status, cache, streaming, and hydration decisions
- Tests prove deterministic output, user and tenant isolation, correct statuses, no-JavaScript usefulness, and client recovery
- Runtime evidence reports performance, cache behavior, hydration mismatches, dependency failures, and safe rollback
