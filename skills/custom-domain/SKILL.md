---
name: custom-domain
category: web
description: Connect a domain of their own to the person's site. Covers registrar selection, current registration and renewal prices, DNS, redirects, and HTTPS. Use when they say "I want my own domain", "get rid of the .github.io part", or "connect mysite.com".
---

# custom-domain

Help someone put their own domain on a site that is already
live somewhere (GitHub Pages, Cloudflare Pages, Netlify — see
deploy-anywhere). This is the first step in the stack that costs
money, so be straight about the price before anything is bought.

## Ground rules

- Money talk first. Open the registrar's current pricing page and compare
  the registration price, renewal price, and any transfer fee. Promotional
  first-year prices can be very different from renewal. Get their
  explicit "yes, I'll pay that" before they buy. They enter their own
  payment details; you never handle payment or see card numbers.
- They pick the name. Offer a way to judge: short, spellable out
  loud, no hyphens if avoidable, and fine to say in a job interview.
  Check availability live at the registrar rather than guessing.
- Registrar choice is theirs too. Compare current pricing, account security,
  privacy protection, DNS controls, and support. Warn about upsells at checkout:
  they need the domain only unless they deliberately choose an add-on.
- A domain is optional. If the current renewal price is not worth it right
  now, the free subdomain from deploy-anywhere is respectable. Say
  so and stop here.

## Connecting it

1. In the host's dashboard, add the custom domain to the site first —
   the host then tells you exactly which DNS records it wants.
2. Enter those records at the registrar's DNS panel. Usually: a CNAME
   for `www` pointing at the host, plus apex records for the bare
   domain (GitHub Pages uses four A records; Cloudflare and Netlify
   give their own values). Explain each record in one line as they
   add it.
3. Decide www vs apex together, then make the other one redirect to
   it so both work. Either choice is fine; picking one keeps links
   consistent.
4. Wait for DNS to propagate — minutes to an hour, occasionally
   longer. `dig +short theirdomain.com` shows when it lands.
5. HTTPS: every host on the list issues a free certificate
   automatically once DNS resolves. On GitHub Pages, tick "Enforce
   HTTPS" when it becomes clickable. Confirm the padlock in a real
   browser.

## Done

- Their domain loads their site over HTTPS
- www and apex both resolve, one redirecting to the other
- They know the renewal date, the renewal price, and where to log in
  to manage DNS
- They can say in one sentence what a DNS record does

The domain now belongs on their resume and email signature. If the
site itself needs work, build-website picks up from here.
