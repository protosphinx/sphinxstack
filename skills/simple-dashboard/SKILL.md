---
name: simple-dashboard
category: data
description: Build a small dashboard over their real data. The three numbers that matter, updating when the data does. Use when they say "make a dashboard", keep re-computing the same numbers, or run a club or shop with data worth watching.
---

# simple-dashboard

Build a small dashboard with someone, on top of data they
already keep — their tracker sheet, shop sales, club attendance, game
stats. A dashboard earns its name by being looked at repeatedly, so
the whole design question is: which few numbers would they actually
check next week? Three is the right count to start.

## Pick the three numbers

Ask what they would want to know at a glance on a random Tuesday.
Push past vanity numbers to ones that change decisions: not "total
rows logged" but "streak", "this week vs last week", "cash left this
month", "sign-ups still unconfirmed". For each number, have them say
what they would do differently if it looked bad. A number with no
answer to that question gets cut. Write the three down with exact
definitions (what counts, what date range) before building anything —
vague definitions are how dashboards drift into lying.

## Build it sheet-backed first

Start in the sheet that already holds the data:

1. A `dashboard` tab: the three numbers as big cells, computed by
   formula from the data tab — never typed in by hand. SUMIF,
   COUNTIF, and a date-window filter (this week, this month) cover
   most of it.
2. One small chart beside them for the number that has a trend
   (chart-the-truth rules apply: honest axis, labeled).
3. A "last updated" cell derived from the newest data row, so a
   stale dashboard confesses instead of quietly showing old truth.
4. Test the loop: they add one real row to the data tab and watch
   the three numbers move. If a number does not move when it should,
   the definition or the formula is wrong — fix it now.

For many people the tab is the finished product. Stop here if so.

## Upgrade to a page if it should be seen

If the dashboard is for a team, a club, or their own phone home
screen, put it at a URL. Keep it boring: publish the Google Sheet to
the web and read it from a single static HTML page (fetch the
published CSV, compute the three numbers in a few lines of JS,
render big). Deploy on GitHub Pages (ship-on-github skill if
present). The sheet stays the single source of truth; the page only
reads. Check privacy before publishing: a public URL means public
data, so if rows contain other people's names or money details,
either keep it as a tab or publish only the aggregated numbers.

## Done

- Three numbers with written definitions, computed live from real
  data, plus one honest trend chart
- Adding a data row updates everything with no manual step
- A "last updated" indicator that exposes staleness
- Either a dashboard tab they check or a live URL they can open on
  a phone
- A first-review date is scheduled and the person can state what decision each
  number will inform

Repeated use is a follow-up success measure, not a setup claim. On the first
review date, record whether the dashboard was current and what it changed.

Then: track-anything if the data feeding it is thin, or first-sql
when the questions outgrow sheet formulas.
