---
name: test-a-redirect-chain
category: web
description: Test a URL redirect chain for hop count, status, destination, query preservation, security, caching, and loops. Use when a page, domain, campaign link, or protocol migration does not land correctly.
---

# test-a-redirect-chain

Record every hop before judging the final page.

## When to use

- Use for domain moves, HTTPS enforcement, canonicalization, login, localization, or campaign links.
- Do not test destructive action URLs or authenticated links without permission.

## Procedure

1. Record the exact source URL, expected destination, query, fragment, method, locale, and authentication state.
2. Request the URL without automatic redirect following and capture status, `Location`, cache headers, and cookies.
3. Resolve relative locations and repeat one hop at a time until a nonredirect response or safe hop limit.
4. Flag loops, chains, HTTP downgrade, host changes, malformed encoding, open redirects, lost query values, and unexpected cookies.
5. Verify permanent versus temporary status against intended method and cache behavior.
6. Test representative path, trailing slash, case, query, locale, mobile, and legacy variants.
7. Confirm the final page returns the intended content and canonical URL.

## Done

- A redirect-chain sheet lists every source, status, location, destination, query change, cache rule, and final result
- Loop, method, protocol, query, variant, and final-content checks verify the intended landing behavior
