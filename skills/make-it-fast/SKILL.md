---
name: make-it-fast
category: web
description: Make a slow site measurably faster. Lighthouse first, then the real fixes (usually images, fonts, and render-blocking code), then re-measure. Use when they say "my site is slow", "improve my Lighthouse score", or after a site gains real images.
---

# make-it-fast

Speed up a live site with someone, and the rule is:
measure before touching anything. Guessing at performance work wastes
an afternoon; the report says exactly what is slow, and a static site
usually has one or two real problems. Fixing those is an hour, and
the before/after numbers become a resume-grade receipt.

## Measure first

1. Run PageSpeed Insights on the live URL (or Lighthouse in Chrome
   DevTools — same engine; PageSpeed adds real-user data if the site
   has traffic). Use the mobile result; it is the harsh one and the
   one that reflects most visitors.
2. Save the "before": screenshot the score and the numbers for LCP,
   CLS, and total page weight. Explain each in one line as it comes
   up — LCP is how long the biggest thing takes to show, CLS is how
   much the page jumps around while loading.
3. Read the Opportunities list together and pick the top two or
   three by estimated savings. Agree on a target tied to the real problem,
   such as reducing image weight or LCP, rather than treating one synthetic
   score as proof. Ignore low-impact findings for now.

## Fix what it flagged

Work down their list, deploy, re-measure after each fix so they see
cause and effect. The usual suspects:

- Images, almost always the whole problem. Resize to the largest
  size actually displayed, re-encode (WebP via `squoosh.app` or a
  CLI, whichever they prefer), set `width` and `height` attributes
  so the page stops jumping, add `loading="lazy"` to images below
  the fold. A 4 MB phone photo becoming 80 KB is the day's win.
- Fonts. System fonts cost zero and look fine — that is a real
  option, their call. If they keep a webfont: two weights maximum,
  `font-display: swap` so text never waits invisible.
- Render-blocking code. Small CSS can be inlined; script tags get
  `defer`; anything unused gets deleted. Check for libraries loaded
  out of habit — a static site rarely needs any.

## Done

- Before and after screenshots of the same report, saved in the repo
- The agreed metric improved on repeated runs, and they can say which fix
  changed what; record normal run-to-run variation instead of claiming false
  precision
- No fix broke anything: click through the live site on a phone
- They know how to re-run the report themselves next time the site
  changes

The receipts feed build-resume ("cut page load from Xs to Ys"), and
the audit habit carries straight into accessibility-pass, which
lives in the same Lighthouse report.
