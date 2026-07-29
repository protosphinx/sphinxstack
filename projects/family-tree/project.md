---
id: family-tree
level: 1
group: Data
name: Family tree, rendered
proves: [build-web-app, ship-on-github]
resume_line:
  job: "Built {project_name}, a data-driven family tree app rendered from a structured dataset — live at {url}"
  college: "Interviewed relatives, structured {count} people into a dataset, and built a browsable family tree"
  freelance: "Turns messy records into structured, browsable data — recent: {project_name} ({url})"
---

## Brief

Interview your parents and relatives, capture the family as a plain
data file (one person per record: name, dates, parents, notes), and
render it as a browsable tree. The data file is the product; the page
is how the family reads it. Every date gets confirmed by someone who
was there or by a document.

## Personalize

- **Your branch first.** Start with the four grandparents and work
  outward. Depth on one side beats thin coverage of everyone.
- **Your sources.** Each fact gets a source: which relative said it,
  or which document shows it. Where two relatives disagree, record
  both versions.
- **Consent for the living.** Living relatives approve what appears
  about them, including whether they appear. Keep the public version
  trimmed if anyone asks.

## Milestones

1. Interview one parent or grandparent; write raw notes the same day.
2. Design the record format in the README: fields, how parents link to
   children, how uncertainty is marked.
3. Enter everyone you have into the data file; flag every unconfirmed
   date.
4. Render the tree as a browsable page: click a person, see their
   details and links to relatives.
5. Second round of interviews to fill flagged gaps; update the file.
6. Publish the repo with the README explaining the format, and share
   the page with the family for corrections.

## Done means

- Live page rendering the tree from the data file, no hand-built HTML
  per person
- Every date either confirmed with a named source or visibly flagged
- Living relatives consented to their entries
- Repo public (or shared with family) with a README documenting the
  record format in your words
- At least 8 commits across at least 5 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
