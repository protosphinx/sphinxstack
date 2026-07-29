---
id: study-timer
level: 1
name: Study timer with a log
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a study timer with a session log — live at {url}"
  college: "Built {project_name} and logged {n} study sessions with it this term"
  freelance: "Builds habit-supporting tools — recent: {project_name} ({url})"
---

## Brief

A timer for study sessions plus a plain log of what each session
covered. Pick a subject from your own course list, start the timer,
and when it ends write one line about what you did. The log is the
point; the timer exists to make you write the line. Sessions
persist across reloads (localStorage is fine), and a totals view
shows hours per subject.

## Personalize

- **Your subjects.** This term's courses, from your timetable, with
  the one you avoid at the top of the list where you have to see
  it.
- **Your session length.** Time three of your study sessions before
  building anything and set the default to what you measured. If
  you focus for 35 minutes, the default is 35.
- **The log line.** Decide what one honest line looks like ("did
  problems 4 to 9, stuck on 7") and show your best past lines as
  the placeholder text.

## Milestones

1. Model in the README: what is a session (subject, duration, the
   line), and what the log shows before the first one.
2. Timer with your subjects, deployed. Ugly is fine.
3. Session end prompts for the log line and saves the session; log
   survives a reload; empty state designed.
4. The log view: sessions listed by day, editable and deletable,
   because typos in your own history grate.
5. Totals per subject for the week, plus the abandoned-session
   case: a timer closed early either logs honestly as partial or
   discards, your rule.
6. Two weeks of real studying through it. Final README quoting your
   own log as evidence.

## Done means

- Live URL responding; sessions survive a reload
- Every completed timer produced a logged line
- Edit and delete work on log entries; empty state is designed
- Two weeks of real sessions in the log, cited in the README
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
