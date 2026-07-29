---
name: inspect-http-response-headers
category: web
description: Inspect HTTP response headers for status, caching, security, content, redirects, cookies, and intermediaries. Use when diagnosing how a web response is delivered, stored, protected, or interpreted.
---

# inspect-http-response-headers

Inspect the actual response for the requested URL and method.

## When to use

- Use for browser, CDN, proxy, cache, authentication, download, or security troubleshooting.
- Do not send credentials or private URLs to untrusted inspection services.

## Procedure

1. Record URL, method, environment, region, timestamp, request headers, authentication state, and expected behavior.
2. Capture the complete status line and response headers without following redirects first.
3. Check `Location`, `Content-Type`, `Content-Length`, `Content-Encoding`, `Content-Disposition`, and character set.
4. Inspect `Cache-Control`, `Expires`, `Age`, `ETag`, `Last-Modified`, `Vary`, and CDN cache indicators.
5. Inspect transport and security headers, cookie attributes, cross-origin policy, and framing policy.
6. Compare anonymous, authenticated, cache-busting, browser, and conditional requests where relevant.
7. Follow redirects one hop at a time and note which intermediary adds or changes each header.
8. Save the evidence and state the mismatch between expected and observed behavior.

## Done

- A header report records request context, each response hop, status, headers, intermediaries, and observed mismatch
- Repeat, conditional, anonymous, authenticated, and regional checks verify the finding without exposing private data
