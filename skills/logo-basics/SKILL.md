---
name: logo-basics
category: design
description: Make a simple honest logo for a real project. Type-based first, exported at the sizes they need, with a clear stopping point. Use when they say "I need a logo", "design a logo for X", or want an avatar for a project.
---

# logo-basics

Make a logo with someone for a real thing they run — a
project, club, team, or channel. The target is a wordmark or simple
mark that looks deliberate, works small, and ships today as files
they can actually use. Not a brand identity, not a mascot
illustration. Most good logos for small projects are just a name set
well.

## Start with type

1. Ask what the logo is for, where it will appear first (GitHub
   avatar, site header, jersey, sticker), and one word for how it
   should feel (serious, playful, technical, warm).
2. Set the name in 4–6 free fonts (Google Fonts) as an SVG or HTML
   sheet, side by side, all black on white. Include at least one
   bold sans, one serif, and one mono. Let them pick; give a
   one-line read on each ("the mono says software", "the serif says
   established").
3. Refine the winner: tighten letterspacing, try lowercase vs caps,
   try cutting the name to a short form. Small moves, shown as
   variants, their pick each round.

## Maybe a mark

Only if they need a square avatar or the name is too long: try the
initial letter in the chosen font inside a plain square or circle,
or a single geometric shape that means something true about the
project. If a mark takes more than three rounds to look right, drop
it and use the wordmark or lettermark — say why: a plain mark used
consistently beats a clever mark used once.

Rules that hold regardless: one color plus black and white versions,
no gradients, no clip art, no AI-generated images pasted in. It must
survive at 32 pixels — test it there before accepting it.

## When to stop

Stop when it is legible tiny, they would put it on the real surface
today, and neither of you can name a concrete problem with it. More
rounds past that point make logos worse. If they keep asking for
additions, show the current version at 32px next to the decorated
one at 32px and let that settle it.

## Export

Produce the actual files, from one master SVG:

- `logo.svg` (master, black), plus white-on-transparent variant
- PNG at the sizes their first surface needs (512, 128, 32 at
  minimum; the exact avatar size if they named a platform)
- A square avatar crop if the mark differs from the wordmark

Put them in the project repo under `assets/` or wherever their
project keeps files, and apply the logo to the real surface — site
header, README, or profile — before ending. Note the font name and
hex color in a one-line comment next to the files so it can be
reproduced. If they want the full color-and-font lockdown, suggest
brand-kit next.

## Done

- Master SVG, required PNG sizes, monochrome variants, and reproduction notes saved
- Mark remains legible at the smallest real use and works on light and dark surfaces
- Logo is applied to one real surface and the person approved the final choice
