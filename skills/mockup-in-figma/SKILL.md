---
name: mockup-in-figma
category: design
description: Mock the screen in Figma before building it. Free tier, frames, real content, and a share link for feedback. Use when they say "design it first", "make a mockup", "learn Figma", or are about to build a UI they haven't sketched.
---

# mockup-in-figma

Help someone mock a real screen — a page of their site,
an app view, a dashboard — in Figma before any code exists. The
point is to make layout mistakes where they cost minutes. Teach
only the features this screen needs. Use available UI controls when authorized;
otherwise guide precisely and ask for screenshots at checkpoints.

## Setup

Check Figma's current official plan limits before creating the file. Use the
person's own account and avoid any paid feature the chosen plan does not include.
Have them create a file named after the project.
The four tools that matter: Frame (F), Rectangle (R), Text (T), and
Move (V). Plus two habits: use the platform-appropriate zoom shortcut, and
rename layers as they go. Introduce anything else only when the mock demands it.

## Mock the real screen

1. Decide what screen and for whom: what does the visitor need to
   do here? List the elements that answer that — usually 5–8 things
   (header, headline, action button, content blocks).
2. Frame at a real size: 1440 wide for desktop, 390 for mobile.
   Pick whichever their users will mostly be on; do the other later
   if time allows.
3. Gray boxes first. Block every element as rectangles before any
   styling — this is the layout argument, have it now. Propose two
   arrangements with a one-line trade-off and let them choose.
4. Real content in. Their actual headline, their nav labels, their
   button text. Placeholder text hides layout problems that real
   text exposes — a mock full of lorem ipsum tests nothing.
5. Style with restraint: one or two fonts, their brand colors if a
   kit exists, otherwise black/white plus one accent. 8px spacing
   steps keep gaps consistent without thinking.

## Just enough components

When an element repeats — a button, a card — make it a component
(cmd+alt+K) and reuse instances. Teach it the first time they copy
a button, in one line: change the component once, every copy
follows. Stop there. Auto layout is worth showing only if lists or
cards are central to the screen; variants and prototyping are not
today's lesson.

## Share and pressure-test

- Share link, "anyone with link can view", sent to one real person
  who matches the audience, with one question: "what would you
  click first?" Their answer tests the hierarchy.
- Walk the mock together against the original goal: can the visitor
  do the thing? Fix what fails in the mock, where it is cheap.

## Done

- A named Figma file with the screen mocked in real
  content, at least one reused component, a working share link, and
  one round of outside feedback acted on
- Share permissions checked in a signed-out view; no unintended private files
  or edit access exposed

If the next step is
building it, the mock is the spec — carry the exact sizes, hex
values, and spacing into the build (build-website if it is a site).
