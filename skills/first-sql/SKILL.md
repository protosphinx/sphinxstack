---
name: first-sql
category: data
description: Teach first SQL on the person's own data. A CSV into SQLite, then real questions answered with SELECT, WHERE, and GROUP BY. Use when they say "teach me SQL", "what's a database", or their spreadsheet questions have outgrown formulas.
---

# first-sql

Teach someone their first SQL, and the database is their
own data: the tracker sheet, the cleaned dataset, their game logs or
spending export, saved as CSV. SQLite is the tool: a single local file with no
server. Detect whether the `sqlite3` CLI or DB Browser for SQLite is available
before choosing the instructions; install only with the person's permission.
Every query in this
session answers a question they actually have; syntax is learned as
a side effect of getting answers.

## Import their data

Export their sheet as CSV. If they have no data worth querying, stop
and do track-anything or spreadsheet-basics first — SQL on synthetic
rows teaches syntax and nothing else. Then, in a folder they own:

Keep the original CSV unchanged. Remove or mask names, bank details, contact
information, and other identifiers that the questions do not need before import.

    sqlite3 mydata.db
    .mode csv
    .import data.csv log
    .mode table
    SELECT * FROM log LIMIT 5;

Explain the shape shift: the sheet's tab is now a table, rows are
rows, columns are columns, and the file `mydata.db` is the whole
database. Check types with `.schema` — CSV import makes everything
text, so numbers may need a rebuild with proper column types or a
CAST when comparing. Hit this problem live; it is the same lesson as
typed columns in clean-a-dataset.

## Questions, then clauses

Collect five real questions about their data before writing any SQL,
then let each question pull in its clause:

1. "Show me the recent ones" — SELECT columns, ORDER BY date DESC,
   LIMIT.
2. "Just the ones where..." — WHERE with =, >, LIKE; AND/OR for
   compound filters.
3. "How many? How much in total?" — COUNT(*), SUM, AVG, MIN, MAX.
4. "...per category / per month?" — GROUP BY, and aliases (AS) so
   result columns have honest names. Per-month needs
   strftime('%Y-%m', date), a nice moment for why date typing
   mattered.
5. "Which groups matter?" — HAVING to filter the groups, ORDER BY
   on the aggregate to rank them.

They type every query. When one errors, read the error together —
SQL error messages are better than their reputation. When a result
looks wrong, check it against the sheet: the sheet is the thing they
trust, and agreement is how the database earns trust. Compare with
the spreadsheet way as you go: WHERE is filter, GROUP BY is the
pivot table, and the win is that a question is one readable line
instead of a formula buried in a cell.

## Keep the answers

Make a `queries.sql` file: each of the five questions as a comment,
its query underneath, and the answer noted. This is their reference
and their proof — rerunnable when the data grows. Finish by having
them answer one brand-new question alone, from question to result,
while you watch and stay quiet.

## Done

- `mydata.db` built from their real CSV, types checked
- Five real questions answered with queries they typed, covering
  WHERE, GROUP BY, and an aggregate
- `queries.sql` saved with questions, queries, and answers
- One unassisted question answered end to end

Then: decide-with-data to put numbers under a real decision, or
build-web-app if this data deserves an app around it.
