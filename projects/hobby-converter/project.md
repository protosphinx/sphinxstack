---
id: hobby-converter
level: 1
name: Converter for your hobby
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a unit converter for {hobby} — live at {url}"
  college: "Built {project_name}, the converter I keep open while {hobby_activity}"
  freelance: "Builds precise single-purpose tools — recent: {project_name} ({url})"
---

## Brief

A converter for the conversions your hobby makes you do: grams to
cups for your baking, inches to millimeters for your builds, or the
currency for the trip your family is planning. Only the units you
use, converting live as you type, with the constants verified
against a source you name. One conversion domain, done completely,
beats a universal converter done vaguely.

## Personalize

- **The conversions you have done by hand.** List the last five
  times you converted something for this hobby; those pairs are the
  feature list. Anything you have never needed stays out.
- **Your reference values.** For baking, cups-to-grams depends on
  the ingredient; put in the ingredients from your recipes and cite
  where each constant came from.
- **The context it lives in.** Flour-dusted phone on the counter or
  laptop at the workbench: size the inputs and results for the way
  you will use it mid-task.

## Milestones

1. Conversion table in the README first: every pair, the constant,
   the source, and a worked example each.
2. One conversion pair working live as you type, deployed. Ugly is
   fine.
3. All your pairs, both directions, with the worked examples from
   the README passing as test cases.
4. Input handling: fractions if your hobby uses them ("1 3/4
   cups"), sensible rounding for the domain, and a clear message
   for junk input.
5. Remember the last-used conversion across reloads, and design
   the initial state so a first-time visitor knows what this tool
   is for.
6. Use it during the hobby itself for a week. Final README with a
   photo of it in context.

## Done means

- Live URL responding; last-used conversion survives a reload
- Every README example converts correctly, both directions
- Bad input gets a message instead of NaN
- Used during the hobby itself, evidenced in the README
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
