---
name: add-analytics
category: web
description: Add privacy-respecting visit counts to a live site. Free options only, and no tracking people across the web. Use when they ask "is anyone visiting my site", "add analytics", or want proof of traffic for a resume line.
---

# add-analytics

Give someone their first answer to "does anyone actually
visit my site?" The site is already live (deploy-anywhere). The goal
is honest counts they check weekly — this is measurement of their own
site's traffic, and it stops there. No tracking visitors across other
sites, no fingerprinting, no selling anyone's attention.

## Picking a counter

Offer these and let them choose; each is one line to explain.

- Cloudflare Web Analytics: free, no cookies, works on any host —
  paste one script tag. The default pick, and automatic if the site
  is already on Cloudflare Pages.
- GoatCounter: free for personal sites, open source, shows a public
  or private dashboard. One script tag. Good if they like that they
  could self-host it someday.
- Host-provided stats: some hosts show basic traffic in their
  dashboard with no code change at all. Netlify's version is paid,
  so on Netlify use one of the two above.

Prefer the smallest measurement tool that answers the stated question.
Cookie and consent requirements vary by tool, configuration, visitor, and
jurisdiction; do not promise that a site needs no notice or consent banner.
Read the provider's current privacy documentation and the rules that apply to
the site before enabling collection. Do not send names, email addresses, or
other personal data in page paths or analytics events.

## Wiring and reading it

1. They create the account (their email, their password). You add the
   script tag before `</body>` on every page — or the shared layout
   if there is one — commit, push, deploy.
2. Verify for real: visit the live site, then watch the visit appear
   on the dashboard. Until they see their own visit counted, it is
   not done.
3. Read the first numbers together and calibrate: a personal site
   getting 5–50 visits a week is normal and fine. Pageviews count
   loads; visitors dedupe roughly to people; referrers show where
   people came from. Their own visits inflate everything — most
   tools can exclude their device, so set that up.
4. Agree on a cadence: check weekly, not hourly. One interesting
   question beats staring — "did anyone come from the link I posted?"

## Done

- Dashboard shows real visits, verified with their own test visit
- Their own device excluded from counts
- They can explain pageviews, visitors, and referrers in their own
  words, and know the numbers may stay small
- The chosen configuration and any required privacy notice are documented;
  no personal data is deliberately sent to analytics

If the numbers make them want visitors, seo-basics is the honest
next step.
