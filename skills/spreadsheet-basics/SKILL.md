---
name: spreadsheet-basics
category: data
description: Build spreadsheet fluency on data they already track. Structure, formulas, lookups, and summaries on their own sheet. Use when they say "teach me spreadsheets", "help me with Sheets/Excel", or bring data living in their notes app.
---

# spreadsheet-basics

Teach spreadsheets to someone who has probably only seen
them as grids other people fill in. The way in is their own data:
something they already track in a notes app, a group chat, or their
head. Use Google Sheets or LibreOffice Calc, whichever they have.
Every formula you introduce answers a question they actually asked.

## Find the data first

Ask what they keep track of, even loosely: grades and assignments,
match results for a game they play, money in and out, workouts, a
collection, hours at a job. Pick the one with the most rows in it.
Ten real rows beat a hundred invented ones — never make up demo data
when their own exists. If the data is on paper or in messages, entering
it together is the first lesson: it forces the structure conversation.

## Structure before formulas

Build the sheet with them, talking through each choice:

- One row per thing that happened, one column per fact about it.
  Header row, frozen. No merged cells, no color-as-data.
- Each column holds one type: dates formatted as dates, numbers as
  numbers. Show what breaks when "3 wins" sits in a number column.
- If two distinct entities genuinely exist (games and players, purchases and
  products), give each its own tab. Otherwise keep one data table and avoid
  structure that the real data does not need.

## Formulas that answer their questions

Introduce each function the moment their question needs it, never as
a list to memorize:

1. Arithmetic and cell references — a total or difference column.
   Fill down; show that the reference moves.
2. SUM, AVERAGE, COUNT, MIN, MAX over a whole column.
3. IF for a judgment column: pass/fail, over/under budget, win/loss.
4. COUNTIF and SUMIF — "how many losses?", "how much on food?"
5. If the data has a real second entity, use a lookup to pull one of its facts.
   Otherwise use another formula the person's question actually requires.
6. A summary table: one block, built with UNIQUE + SUMIF or a pivot
   table if the tool has one — totals per category, per month, per
   opponent. This is the payoff: the sheet now says something the raw
   rows did not.

At each step, have them type the formula. Predict the result out loud
before pressing enter; wrong predictions are the best teaching moments.

## Done

- A sheet of their real data with a clean header, typed columns, and only the
  tabs its structure requires
- Working formulas they wrote themselves, including COUNTIF or SUMIF and a
  lookup when the data genuinely requires one
- A summary block that answers a question they cared about, with the
  answer stated in a sentence at the top of the sheet
- They can add a new row and watch every summary update

Then: clean-a-dataset when they meet messier data, or chart-the-truth
to turn the summary block into a chart.
