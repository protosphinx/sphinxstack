---
id: deadline-aggregator
level: 2
group: Bigger builds
name: A deadline aggregator with its own backend
proves: [build-web-app, backend-basics, use-an-api]
resume_line:
  job: "Built {project_name}, a deadline aggregation service with its own API over multiple upstream sources — live at {url}"
  college: "Built {project_name}, the one page where my classmates and I see every deadline"
  freelance: "Builds aggregation services that pull scattered data into one view — recent: {project_name} ({url})"
---

## Brief

One page showing every deadline that matters to you and your
classmates, pulled from the scattered places they actually live:
a teacher's posted calendar (ICS feed), a class platform with an API
or export, plus manual entry for the ones that exist only on a
whiteboard. Your own backend (Render or Railway free tier) fetches
the sources on a schedule, normalizes everything into one deadline
shape, and stores it in hosted Postgres (Neon free tier). The
frontend, deployed free on Netlify or Vercel, shows what is due
next, always, even when an upstream source is down, because your
database remembers the last good fetch.

## Personalize

- **Your real sources.** List every place a deadline reaches you
  this term. Pick at least one with a feed or API and confirm you
  can access it with your own account before committing.
- **Who shares the view.** Just you, or your class group. If
  classmates use it, they add manual deadlines too, and nothing
  from anyone's private account is exposed to the group.
- **What "due soon" means.** Your actual panic thresholds. The
  sort order of this page is the whole product.

## Milestones

1. README first: the unified deadline model, each source and how it
   maps in, and what happens when a source is unreachable.
2. Backend deployed with manual-entry endpoints storing deadlines
   in the real database.
3. Frontend live by end of week one: real URL, deadlines sorted by
   due date, manual entry working end to end.
4. First upstream source: fetch and parse the ICS feed or API,
   normalize into your model, tag each item with its origin.
5. Scheduled refresh: the backend re-fetches on a timer (a free
   cron pinger works) and updates changed items without duplicating
   unchanged ones.
6. Resilience: kill the upstream source in a test and show the page
   still serves the last good data, marked with fetch age.
7. Second source, proving the model was general and fixing where it
   was not.
8. The classmate week: two or three classmates use it daily as
   their real deadline page and add entries; fix what they trip on.
9. Final README: architecture, each source's quirks, and a
   screenshot of the page carrying a real week's load.

## Done means

- Live URL that you yourself check daily instead of the sources
- Your own backend aggregates at least two upstream sources plus
  manual entries
- Scheduled refresh works unattended; re-fetching does not
  duplicate items
- An upstream outage leaves the page serving stale-but-labeled
  data, demonstrated in a test
- At least two classmates used it for a real week and added entries
- API credentials for sources live in environment variables, never
  in the repo; nothing private to one account is shown to the group
- At least 20 commits across at least 12 distinct days;
  SESSIONS.md has an entry per session, written by you
