---
id: small-web-fix
level: 2
group: Automation & bots
name: A browser extension for an annoyance you can name
proves: [browser-extension, ship-on-github]
resume_line:
  job: "Built {extension_name}, a Manifest V3 browser extension fixing {annoyance} — in daily use for {n} weeks"
  college: "Built {extension_name}, a browser extension that fixes {annoyance} on {site}"
  freelance: "Builds browser extensions — recent: {extension_name}, a targeted fix used daily"
---

## Brief

There is a site you use every day with one thing that drives you
up the wall: autoplaying videos, a hidden per-unit price, a
sidebar that eats half the screen, a timer the page does not show.
Build a browser extension that fixes exactly that. Manifest V3, a
content script, and the minimum permissions the fix needs. Loading
it unpacked in your own browser is free and is the finish line;
the Chrome Web Store charges a one-time developer fee, so
publishing there is optional extra credit, and Firefox add-on
publishing is free if you want a store listing. The extension
changes what you see; it collects nothing and phones home nowhere.

## Personalize

- **Name the annoyance out loud.** One site, one specific behavior,
  and what "fixed" looks like. "Make the web better" is not a
  spec; "hide the recommended rail on the video page" is.
- **Check the site's terms.** You are restyling your own view,
  which is normal extension territory. You are not bypassing
  paywalls, ads-for-access agreements, or bot checks. If your idea
  needs any of those, pick a different annoyance.
- **Your daily browser.** The extension has to live where you
  actually browse, or it will never accumulate real usage.

## Milestones

1. Reproduce the fix by hand in devtools: find the selector or
   behavior and change it live on the page. Screenshot before and
   after. This proves the fix before any extension code exists.
2. Minimal extension: manifest plus a content script that logs one
   line on the target site. Load it unpacked; confirm the log.
3. Port the devtools fix into the content script. Confirm it
   applies on a normal page load.
4. Handle the dynamic page: the site probably re-renders, so the
   fix must survive navigation and late-loading content
   (MutationObserver or equivalent).
5. Tighten permissions to the one site pattern the fix needs.
   Remove anything broader.
6. Add an on/off toggle (extension icon click is enough) so you can
   compare fixed against unfixed at will.
7. Use it daily for two weeks. Log every time the fix fails or the
   site changes shape, and patch.
8. Write the README with the before and after screenshots, install
   steps for loading unpacked, and the permissions list with a
   one-line reason for each.
9. Optional: publish to the Firefox add-ons store (free) and note
   the listing in the README.

## Done means

- The extension has been in daily use in your own browser for at
  least two weeks
- A dated log in the repo records failures found and fixed during
  those weeks
- The named annoyance is gone: before and after screenshots in the
  README show it
- Permissions are scoped to the single site pattern, each one
  justified in the README
- The extension collects no data and makes no network requests of
  its own
- A stranger could install it unpacked from the README alone
