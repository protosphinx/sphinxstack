---
id: morning-digest
level: 2
group: Automation & bots
name: One email instead of three apps
proves: [automate-a-task, use-an-api, ship-on-github]
resume_line:
  job: "Built {project_name}, a scheduled digest service aggregating {n} data sources into one daily email — delivered every morning for {n} weeks unattended"
  college: "Built {project_name}, a bot that emails me the three things I check every morning"
  freelance: "Builds data-aggregation automations — recent: {project_name}, a scheduled multi-source email digest"
---

## Brief

Every morning you open the same three things: the weather, your
team's score, the bus alerts, a subreddit, a webcomic. Build a
script that fetches all of them and emails you one digest before
you wake up. Each source comes from an official API or RSS feed
(most of these are free: Open-Meteo for weather, public RSS for
news and forums, league APIs for scores). Sending goes through the
Resend free tier (100 emails a day, far more than you need) and the
schedule runs on GitHub Actions cron. The digest goes to your own
inbox only.

## Personalize

- **Your real morning checks.** Track yourself for two mornings and
  write down what you actually open, in order. Those are the
  sources. Do not add sources you wish you checked.
- **Your wake-up time.** The email lands before you pick up the
  phone, in your timezone, accounting for the fact that Actions
  cron runs in UTC.
- **Your definition of glanceable.** Decide what each source boils
  down to in one or two lines. A digest you have to scroll is just
  a fourth app.

## Milestones

1. Log your real morning checks for two days: which apps, what you
   looked at in each, total minutes. This is the baseline the
   digest has to beat.
2. Fetch source one from its API or feed and print the one-line
   summary you decided on. Repeat for the other sources, one at a
   time.
3. Compose the full digest as plain text or minimal HTML. Print it
   to the terminal for a few days and check it against the real
   apps for accuracy.
4. Send it to yourself once via Resend, triggered by hand. API key
   in an env var.
5. Schedule it on GitHub Actions cron for your wake-up time. Keys
   move to repo secrets.
6. Handle a dead source: if one API fails, the digest still sends
   with a "source unavailable" line instead of not arriving.
7. Live off the digest for a week. Each time it fails to replace an
   app open, note why and fix the summary.
8. Add a one-line footer with the run timestamp so you can spot a
   stale digest instantly.
9. README: sources, schedule, how to add a source.

## Done means

- The digest has arrived every morning, unattended, for at least a
  week
- The Actions run history matches the emails in your inbox
- The morning app-round is measurably gone: your baseline minutes
  versus the digest glance
- One dead source degrades the email instead of killing it
- All API keys live in repo secrets, none in the repo
- The digest sends only to you
