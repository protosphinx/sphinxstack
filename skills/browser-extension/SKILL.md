---
name: browser-extension
category: code
description: Build a small browser extension for their own browsing problem. Manifest, content script, storage, loaded unpacked and used in their daily browser. Use when they complain about a website's behavior, want to change how a page looks or works, or ask "how are extensions made".
---

# browser-extension

Build a browser extension with someone, aimed at a genuine
irritation in their own browsing: a site element they always hide, a
word count they always want, a page they visit daily that is missing
one thing. Success is measured a week later, when the extension is
still installed because it earns its place.

## Ground rules

- The problem comes from their actual browsing. Ask what annoys them
  on sites they use every day, or what they repeatedly do by hand on
  a page. Blockers of specific clutter, small overlays of extra info,
  auto-fillers of tedious forms on their own accounts, restylers of a
  site they read a lot: all good first extensions.
- Manifest V3, plain JavaScript, no build step, no framework. An
  extension is a folder with a manifest.json and a couple of scripts;
  keep it exactly that legible.
- Narrow permissions, argued for one at a time. Match only the site
  it needs (`*://example.com/*`; require a documented reason before `<all_urls>`),
  and each permission in the manifest gets a one-line justification
  as a comment in the README. This is the security habit worth more
  than the extension.
- Loaded unpacked in their own browser, in developer mode. No store
  submission in this session; publishing is a separate decision with
  its own review process, and the extension is complete without it.
- Respect the sites it touches. Read and restyle freely; anything
  that automates actions on someone else's site stays within that
  site's terms and their own account.

## The path

1. Name the irritation precisely: which site, which page, what should
   be different. Open dev tools together and find the selectors for
   the elements involved; that inspection is half the build.
2. Skeleton loads: manifest.json with name, version, and the matched
   site, one content script that logs a line. Load it unpacked, see
   the log on the target page, and now every later change is a
   reload away.
3. The core behavior: hide, inject, restyle, or compute whatever the
   irritation demands. Test on three real pages of the site, not one.
4. State where needed: an options toggle or remembered preference in
   `chrome.storage`, so their choice survives a browser restart.
5. Fit and finish: an icon (any 128px image of theirs), a sensible
   name, and behavior checked when the site's markup differs (logged
   out, empty page) so it fails quietly instead of breaking the site.
6. Live with it: they browse normally for the rest of the session
   with the extension on, and anything that annoys them about their
   own tool gets fixed on the spot.

## Done

- An extension folder in a repo: manifest, content script, icon
- Loaded unpacked in their daily browser and doing its job on the
  real site
- Permissions minimal, each justified in the README
- A preference that survives restart, if the extension has one
- They can explain what a content script can and cannot see

Then: ship-on-github for the repo if it lacks one, or use-an-api if
the extension should pull in outside data.
