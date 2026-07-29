---
id: school-calendar-feed
level: 2
group: Automation & bots
name: Your school's schedule as a calendar feed
proves: [automate-a-task, backend-basics, ship-on-github]
resume_line:
  job: "Built a scheduled pipeline that converts a scattered institutional schedule into a subscribable calendar feed — regenerated automatically, used daily"
  college: "Built {project_name}, which turns my school's posted schedules into an .ics feed my phone subscribes to"
  freelance: "Automates data pipelines — recent: {project_name}, a self-updating calendar feed from messy source data"
---

## Brief

Your school publishes its schedule as a PDF, a webpage, and three
different emails, and you retype the parts you care about into your
phone. Build a script that reads the published schedule and emits a
standard .ics calendar file your phone subscribes to once and never
touches again. A scheduled GitHub Actions workflow (free on public
repos) regenerates the feed, and GitHub Pages (also free) hosts it
at a stable URL. If the school already offers an official feed or
API, use that as the source instead of parsing pages.

## Personalize

- **Your actual sources.** List where the schedule really lives:
  exam timetable PDF, sports page, club announcements. Pick the one
  or two you check most.
- **Only public, permitted pages.** Parse what the school publishes
  openly. Nothing behind your login, no portal credentials in a
  script, and check the site's robots.txt before fetching.
- **Your calendar app.** The feed must render correctly in whatever
  you actually use: Google Calendar, Apple Calendar, Outlook.

## Milestones

1. Hand-write one week of events as an .ics file. Subscribe your
   phone to it (host the raw file on GitHub Pages) and confirm
   events appear.
2. Write a parser that reads one real source and prints events as
   structured data. Run it by hand, compare against the source.
3. Emit .ics from the parsed data. Validate it with an online .ics
   linter and your own calendar app.
4. Handle the messy cases your source really has: cancelled events,
   date ranges, rooms that change.
5. Commit the pipeline to a public repo with a workflow that runs
   the script daily and pushes the regenerated feed to Pages.
6. Let it run for a few days. Diff the generated feed against the
   source by hand to catch silent parse failures.
7. Add a failure alarm: if the source page changes shape and the
   parser finds zero events, the workflow fails loudly instead of
   publishing an empty feed.
8. Unsubscribe from your hand-made calendar entries. Live off the
   feed for a full week.
9. README: sources, feed URL, how to add a new source.

## Done means

- The workflow has regenerated the feed unattended for at least a
  week, visible in the Actions run history
- Your phone shows current events that you never typed in
- A source change or empty parse fails the workflow instead of
  shipping a broken feed
- The chore is gone: you have stopped retyping schedule items, and
  the last manual calendar entry is over a week old
- No credentials anywhere: the pipeline touches only public pages
- README lets a classmate point the same pipeline at their sources
