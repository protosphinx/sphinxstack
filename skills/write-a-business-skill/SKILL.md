---
name: write-a-business-skill
category: business
description: Capture how one operation really runs in the shape smbwiki publishes: steps with owners, records in and out, failure modes with early signals, and the boundary between what software can do and what stays human. Use when knowledge sits with one person, or before handing an operation to an agent.
---

# write-a-business-skill

Turn one operation into a file a new hire or an agent can follow.

## When to use

- Use when one person is the only one who can run a piece of the business.
- Read a published example first, such as https://smbwiki.com/skill/production-control.md, to see the shape.
- Do not invent steps to fill the shape. An honest gap is more useful than a plausible guess.

## Procedure

1. Watch the operation run once, or walk it with the person who runs it. Do not write from an org chart.
2. Write the steps in the order they happen, naming the role that performs each one.
3. For each step, record the documents it consumes and the documents it produces.
4. Record the ways the operation fails, and for each one the earliest observable signal that it is failing.
5. Describe what running it badly, running it well, and running it excellently look like in observable terms.
6. State the automation boundary: which parts software already does reliably, and which parts stay human.
7. Add the questions whose answers reveal how well it is actually run.
8. Have the person who runs the operation read it back and correct it before anyone else uses it.

## Done

- A skill file records steps with owners, records in and out, failure modes with early signals, and the automation boundary
- The person who runs the operation has read the file and confirmed it matches what they do
- Someone who has never run it completes one pass using only the file, and their questions are folded back in

The published operating models these skills read from are open and MIT
licensed at https://smbwiki.com/ and https://github.com/erphq/smbwiki.
