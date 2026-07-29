---
name: create-a-404-page
category: web
description: Create a useful 404 page with a real not-found status, accessible navigation, safe search or recovery choices, and consistent site identity. Use when a requested web route does not exist.
---

# create-a-404-page

Return the correct HTTP status while helping the visitor recover.

## When to use

- Use for missing public pages, removed routes, malformed paths, and client or server routing fallbacks.
- Do not expose internal path guesses, stack traces, private route names, or a misleading success status.

## Procedure

1. Define server, edge, application, and client-router not-found behavior.
2. Return 404 for missing resources and preserve intentional 410, redirect, or authorization responses.
3. Provide a clear title, plain explanation, home link, relevant navigation, and safe search where available.
4. Keep layout, language, contrast, keyboard support, and focus consistent with the site.
5. Avoid auto-redirects and search suggestions that reveal private content.
6. Log normalized route and referrer safely without query secrets or personal data.
7. Test nested paths, assets, localized routes, authentication states, GET requests, and client navigation.
8. Verify robots and analytics do not index or count the page as success.

## Done

- A 404 page file provides accessible recovery without exposing private route or error details
- Status, routing, localization, authentication, analytics, logging, and GET behavior are tested
