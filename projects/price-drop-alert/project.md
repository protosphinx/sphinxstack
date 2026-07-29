---
id: price-drop-alert
level: 2
group: Automation & bots
name: A price watcher for the thing you want
proves: [automate-a-task, use-an-api]
resume_line:
  job: "Built {project_name}, a scheduled price monitor with push notifications — ran unattended for {n} weeks and caught a {pct}% drop"
  college: "Built {project_name}, a bot that watches the price of {thing} and pings me when it drops"
  freelance: "Builds monitoring and alerting automations — recent: {project_name}, a price-drop watcher"
---

## Brief

There is a thing you are saving for, and you check its price by
hand every few days. Build a script that checks it on a schedule
and sends you a push notification when the price falls below your
threshold. Prefer an official API where one exists (eBay and Best
Buy both have free developer APIs); if the store has none, fetch
the public product page gently: once or twice a day, honoring
robots.txt, with a User-Agent that names your script. Notifications
go through ntfy.sh (free, no account) or a Discord webhook, and the
schedule runs on GitHub Actions cron (free on public repos). The
bot alerts you; it never buys anything.

## Personalize

- **A thing you genuinely want.** Real threshold, real budget. If
  the alert fired tomorrow you would actually act on it. Watching a
  random product teaches you nothing about whether the bot works.
- **The store you would really buy from.** Check whether it has an
  API or a price feed before deciding to parse HTML.
- **Where you want the ping.** Phone notification via ntfy.sh, or a
  message in a server you already read. Pick the one you will see
  within an hour.

## Milestones

1. Check the price by hand for four days and log date, price, and
   how long the check took. This is your baseline.
2. Write a script that fetches the current price once and prints
   it. If there is an official API, use it; if not, parse the page
   and set your identifying User-Agent.
3. Store each check as a row (date, price) in a CSV or JSON file
   committed to the repo, so you build a price history.
4. Add the threshold rule and a test notification through ntfy.sh
   or your webhook. Trigger it manually with a fake low price.
5. Schedule it: GitHub Actions cron, twice a day at most. Secrets
   (webhook URL, API key) go in repo secrets, never in code.
6. Add failure handling: if the fetch breaks or the price parses to
   nothing, notify you about the breakage instead of going silent.
7. Let it run for a full week without touching it. Resist checking
   the price by hand.
8. Chart the collected history (a simple generated PNG or a table
   in the README) so the repo shows real accumulated data.
9. README: what it watches, how the schedule works, what you would
   change to watch a second item.

## Done means

- The watcher has run on schedule, unattended, for at least a week
- The run history and the committed price log prove every check
- A real notification reached your phone (threshold or test)
- You have stopped checking the price manually
- Fetching is polite: at most twice daily, robots.txt honored,
  script identified in its User-Agent
- All secrets live in repo secrets or env vars, none in the code
- The bot has no ability to purchase, only to notify
