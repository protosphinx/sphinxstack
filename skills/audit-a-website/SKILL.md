---
name: audit-a-website
category: web
description: Audit a website across real user journeys, content, accessibility, performance, search, analytics, security basics, and operational health, then produce a prioritized repair backlog. Use when someone asks for a website audit, wants to improve an existing site, or needs evidence about what to fix first.
---

# audit-a-website

Turn a broad request to "improve the site" into observed problems, user impact, and an ordered backlog.
Inspect both the live experience and the source or configuration when access is available.

## Inputs

- Name the site's purpose, priority audiences, critical journeys, owner, and supported devices.
- Record production and staging URLs, analytics access, source access, and any testing restrictions.
- Capture a dated baseline. Current scores, search results, and provider behavior can change.

## Procedure

1. Walk the critical journeys on desktop and a narrow mobile viewport. Record where users cannot
   understand, navigate, complete, recover, or trust the experience.
2. Inventory indexable pages, templates, redirects, forms, downloads, and third-party dependencies.
3. Inspect content for a clear purpose, accurate claims, useful headings, descriptive links, current
   contact information, and an obvious next action.
4. Run an accessibility pass using keyboard navigation, labels, landmarks, focus, contrast, zoom, and
   a repeatable automated scan. Manual evidence remains required.
5. Measure performance with a cold load and current tooling. Identify the user-visible bottleneck and
   its resource or dependency rather than reporting a score alone.
6. Check search fundamentals: crawlability, canonical URLs, titles, descriptions, structured data,
   sitemap coverage, internal links, and accidental duplicate or excluded pages.
7. Verify analytics and consent behavior from a real visit. Confirm critical events fire once, carry
   no prohibited data, and answer a named product question.
8. Check HTTPS, mixed content, exposed secrets, dependency warnings, security headers, form handling,
   and administrative surface without attempting unauthorized exploitation.
9. Review error pages, monitoring, backups, ownership, and the path for publishing and rolling back a change.
10. Group findings by root cause. Rank them by user harm, reach, confidence, and repair effort.
11. Write the top fixes as backlog items with evidence, acceptance checks, owner, and dependency.
12. Re-test a representative journey after the first repair to confirm the backlog's evidence method works.

## Boundaries

Do not run intrusive security tests, high-load scans, or form submissions without permission. Do not
present automated scores as user outcomes. Redact private analytics, account data, and unpublished
business information from the report.

## Done

- A dated audit report ties every priority finding to a URL, journey, observation, and user consequence
- A ranked repair backlog gives the top items an owner and observable acceptance check
- Accessibility, performance, search, analytics, and operational claims include repeatable evidence
- A representative fix is re-tested through the affected user journey, proving the verification loop

Then use accessibility-pass, make-it-fast, seo-basics, or add-analytics for the highest-priority specialist repair.
