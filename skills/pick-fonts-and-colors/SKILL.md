---
name: pick-fonts-and-colors
category: design
description: Settle the fonts and colors for a real project. Free sources, tested in context, choices written down. Use when they say "what font should I use", "pick colors for my site", or keep changing fonts without settling.
---

# pick-fonts-and-colors

Help someone commit to fonts and colors for a real
project. The enemy is endless browsing: the session ends with two
fonts and three or four hex values chosen, tested on their actual
artifact, and written down. Defensible means they can say why in
one sentence, not that a design school would approve.

## Anchor on the project

Ask what the project is, who sees it, and one word for how it
should feel. That word does most of the work: "technical" points at
a mono or grotesque sans, "friendly" at a rounded sans or humanist
serif, "serious" at a plain sans with a real serif for headings.
Say the mapping out loud so they learn it.

## Fonts

Free sources only: Google Fonts covers nearly every case (Fontsource
if they want files in a repo). Rules that narrow fast:

- Two fonts maximum: one for headings, one for body. One font in
  two weights is also a valid answer and often the best one.
- Body font must have a normal, unremarkable lowercase — read a
  full paragraph in it at 16px, not the specimen headline.
- Nothing decorative for body text, ever; decorative display fonts
  only if the project genuinely calls for one, and only in
  headings.

Propose three pairings that fit their word, each rendered as a
side-by-side sheet with a real headline and a real paragraph from
their project. One-line trade-off per pairing. They pick; you push
back once at most if the body font fails the paragraph test.

## Colors

Build the palette in this order, on their real content:

1. Background and text first: near-white and near-black, or the
   reverse. Check contrast (WCAG AA, 4.5:1 for body text) and show
   them the checker so they can rerun it alone.
2. One accent for links and actions. Pull it from something true —
   a team color, the logo, a photo they own — rather than a trend.
3. Optionally one gray for secondary text. Stop at four values
   total. Every extra color is a decision tax on all future work.

Test the full set on the artifact, not on swatches: swatches lie,
context does not. Try the accent at real size on a real button.

## Write it down

Record the decisions where they will be found again:

- In the repo: a short block in the README or a `brand.md` stub —
  font names, weights, hex values, and the one-sentence why.
- If the project has CSS: the same values as custom properties,
  applied so the artifact now uses them everywhere.

## Done

- The artifact renders in the chosen set and the exact values are committed
- Body text and actions pass the recorded contrast check at their real sizes
- The person can state the reason for each choice and where the values live

If they later want usage rules around these choices,
brand-kit is the next skill.
