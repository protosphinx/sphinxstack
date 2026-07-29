---
id: listening-charted
level: 1
group: Data
name: Your listening, charted
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, an app that parses and visualizes a full streaming-history export — live at {url}"
  college: "Parsed my full streaming history export and built an app charting {years} of listening"
  freelance: "Turns raw data exports into visual apps — recent: {project_name} ({url})"
---

## Brief

Request your listening history export from your streaming service,
parse the raw file, and build an app that charts what you played:
top artists by month, the song you would not admit to, the drift from
one genre to another. Working from a raw export, with its duplicate
rows and odd fields, is the point of the exercise.

## Personalize

- **Your export.** Request it from your own account (most services
  deliver in a few days; start the request first). Someone else's
  data or a sample file defeats the project.
- **Your questions.** Write three questions about your own listening
  before touching the data, then build the views that answer them.
- **Your embarrassment threshold.** The app can stay private or go
  live with the incriminating chart included. Decide, and own the
  choice either way.

## Milestones

1. Request the export; while waiting, write your three questions and
   sketch the answer views.
2. Import: parse the raw file, count the records, and write down what
   cleaning it needed (duplicates, missing fields, weird encodings).
3. Structure into plays with artist, track, timestamp, and duration.
4. First view working: top artists or tracks over a chosen time
   range.
5. The remaining views that answer your three questions.
6. A written findings note in the app: what surprised you, plus what
   the export leaves out (skips, offline plays, other devices).

## Done means

- App live (or running locally with the repo published) charting your
  own export
- The cleaning steps are documented in the README
- Charts label their time ranges; play counts match the cleaned data
- The findings note names at least one limitation of the export
- At least 8 commits across at least 5 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
