---
id: hours-vs-grades
level: 2
group: Data & ML
name: Study time vs results, honestly
proves: [clean-a-dataset, chart-the-truth]
resume_line:
  job: "Ran {project_name}, a term-long study-time analysis with explicit confounder discussion — published at {url}"
  college: "Logged every study session for a full term and published an honest analysis of hours against results"
  freelance: "Runs self-measurement studies with real statistical honesty — recent: {project_name} ({url})"
---

## Brief

Does more studying actually move your grades? Log every study session
for a real term (subject, minutes, what you did), then pair the log
against your actual results at the end. The analysis is the product:
charts of where your time really went, the relationship between hours
and outcomes, and a serious discussion of why that relationship
cannot simply be read as cause and effect. Published as a write-up
anyone could check your reasoning against.

## Personalize

- **Your term.** A real grading period with real results at the end:
  school term, exam season, a certification you are studying for.
  Start logging at the start, and log honestly on lazy weeks too.
- **Your logging unit.** Define one session before you start: minutes
  of focused work, with subject and mode (reading, problems,
  flashcards). Write the definition down so week 10 logs the same way
  as week 1.
- **Your prior guess.** Before looking at any data, write down which
  subject you think gets the most time and what you expect the
  hours-to-results picture to look like. Publish the guess with the
  results.

## Milestones

1. Write the protocol: what counts as a session, what gets logged,
   which results will be paired against it at term's end. Freeze it.
2. Log for two weeks, then do a cleaning pass: gaps, double entries,
   sessions you forgot to close. Note every fix in the README.
3. First charts on partial data: hours per subject per week. No
   conclusions yet, this is a plumbing check.
4. Keep logging through the term. Missed days get logged as missed,
   never backfilled from memory.
5. When results arrive, build the paired dataset: per subject, total
   hours, hours by mode, and the outcome.
6. Chart the relationship. Also chart the version that would
   embarrass you if it were true (your best subject got the least
   time).
7. Write the confounders section: subjects differ in difficulty and
   starting ability, struggling subjects attract more hours (reverse
   causation), sleep and teaching quality are unmeasured. For each,
   say how it could produce your pattern without study time causing
   anything.
8. Compare against your published prior guess and say where you were
   wrong.
9. Publish the write-up with charts, methods, the raw log, and the
   full confounder discussion.
10. Add one paragraph on what you would change next term, and one
    stating what this single-person study cannot show.

## Done means

- A complete term of session logs, in the repo, with cleaning
  decisions documented
- Published write-up with charts pairing hours against real results
- Correlation and causation explicitly separated: the write-up names
  at least three confounders and explains each in your words
- Your prior guess published alongside the actual result, including
  where it was wrong
- No overclaiming: the conclusion is worded as what one term of one
  person's data can and cannot show
- Raw data available so a reader could redo your charts
