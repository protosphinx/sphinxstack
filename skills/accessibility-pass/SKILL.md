---
name: accessibility-pass
category: web
description: Audit a live site for accessibility and fix what turns up. Covers contrast, alt text, keyboard navigation, and form labels, tested with real tools. Use when they ask "is my site accessible", before they share a site widely, or after any skill that shipped pages.
---

# accessibility-pass

Check someone's live site against how people actually use
the web: on bright screens, without a mouse, with screen readers,
with imperfect vision. Most fixes are small; the skill is finding
them systematically instead of assuming the site is fine because it
looks fine to its author.

## Run the tools

1. Run a Lighthouse accessibility audit (Chrome DevTools, same panel as
   make-it-fast) on every page. It catches the machine-checkable
   layer: contrast failures, missing alt, missing labels, missing
   `lang`. Save the score as the "before".
2. axe DevTools, the free browser extension, on the worst page —
   it explains each finding better and catches things Lighthouse
   skips. One page is enough to learn the failure patterns.
3. The tools stop at what machines can check, so add two human
   tests: put the phone at arm's length in daylight and try to read
   it, and do the keyboard test below.

## Fix what turned up

Work through findings with them making the calls; each fix is a
one-line explanation.

- Contrast: every flagged text/background pair gets checked in the
  WebAIM contrast checker and nudged until it passes 4.5:1 (3:1 for
  large text). They pick the new shade — darkening the text usually
  keeps the design intact.
- Alt text: every meaningful image gets a description of what it
  shows, written by them, since they know why the image is there.
  Purely decorative images get `alt=""` so screen readers skip them.
- Keyboard: unplug the mouse. Tab through the whole page — every
  link and button reachable, in an order that makes sense, with a
  visible focus outline. If focus vanishes, someone styled
  `outline: none`; restore it or style a better one.
- Labels and structure: every input has a `<label>` (forms-that-work
  does this from the start), the page has one h1 and ordered
  headings (shared work with seo-basics), links say where they go —
  "see the project" beats "click here".

Automated tools cannot prove that a site is accessible. Treat their
findings as a repeatable first pass and record what was checked manually.

## Done

- Before/after reports saved, with every critical or serious automated
  finding resolved or documented with a reason
- Full keyboard run-through works with visible focus throughout
- Labels, heading order, image alternatives, and contrast checked manually
- They can name the two or three things they will now do by default
  in everything they build next

That last point is the real product: the next site they build with
build-website should not need this pass.
