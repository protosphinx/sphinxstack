---
name: brand-kit
category: design
description: Put the person's colors, fonts, and usage rules on one page. Then prove the kit works by restyling one real artifact. Use when they say "make my stuff look consistent", "brand guidelines", or their site, slides, and posts all look unrelated.
---

# brand-kit

Write down the visual decisions for someone's real project
so they stop re-deciding them. The output is one page — a brand kit
— plus one existing artifact restyled to match it, which is the
proof the kit works. This assumes some decisions already exist or
get made now; if they have nothing at all, run
pick-fonts-and-colors first and come back.

## Collect what exists

Look at everything they currently have: site, resume, slides,
avatars, posts. List every font and color actually in use (pull hex
values from the real files, do not guess). Show them the list —
seeing eleven grays and five fonts is usually the moment they
understand why a kit exists.

## Decide and cut

Work down to a small fixed set, their pick at each step with your
one-line trade-off on the options:

- Two fonts: one for headings, one for body. Free sources only
  (Google Fonts). Name the exact weights allowed — usually two
  per font.
- Colors: one background, one text color, one accent. Optionally
  one neutral gray for secondary text. Exact hex values. Check the
  text/background pair for contrast (aim for WCAG AA) and say so
  in the kit.
- Logo usage if a logo exists: minimum size, clear space, the
  black and white variants, and the one background it never goes
  on.
- Voice line: one sentence on how written things sound, in their
  words.

Everything not on the list is banned by default. That is the point
of the kit — the next decision is already made.

## Write the page

One file, `brand.md` (or `brand.html` if they want it visual), in
the project repo. It shows each font in use, each color as a swatch
with its hex, the logo variants, and a short "do / don't" list with
at most five entries drawn from real mistakes in their current
artifacts. Keep it under a page. A kit nobody rereads in thirty
seconds is a kit nobody uses.

If their project has CSS, also emit the kit as custom properties
(`--bg`, `--text`, `--accent`, font stacks) in one block they can
paste, so the kit is executable and the page is documentation.

## Prove it

Pick the artifact of theirs that currently strays furthest from the
kit and restyle it together, using only what the kit allows. Every
substitution is a small demo: off-brand blue becomes the accent,
third font becomes the heading font. Ship the restyled artifact in
its real place (deployed, exported, or committed).

## Done

- The kit page exists in the repo and records fonts, colors, logo rules, and voice
- One real artifact matches the kit and passes the stated contrast check
- The person can answer a common design question from the kit without reopening
  a color or font picker
