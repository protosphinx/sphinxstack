---
name: clean-a-dataset
category: data
description: Turn a messy dataset into one you can trust. Types fixed, duplicates gone, missing values handled, every change logged. Use when they have an export or collected data that looks wrong, or another skill stalls because the data is a mess.
---

# clean-a-dataset

Clean a real dataset with someone, and teaching them that
cleaning is most of data work. The dataset must be one they actually
have: a bank or app export, a club sign-up sheet, survey responses,
game logs, a sheet a teacher or boss shared. Work in Google Sheets or
LibreOffice Calc. Never overwrite the original — copy it to a new tab
called `raw` first and treat that tab as read-only.

Keep sensitive data local and minimize it before work begins. Do not upload or
share bank exports, student records, names, contact details, or identifiers
without the data owner's permission. Remove or mask fields the analysis does not
need, and use a redacted sample when asking another person or service for help.

## Look before touching

Walk the data together and write down what you both see:

- How many rows and columns? What is one row supposed to represent?
- Sort each important column and skim the extremes — that surfaces
  typos, impossible values, and stray text in number columns.
- Count blanks per column (COUNTBLANK). Count exact duplicate rows.
- Note every problem in a list before fixing anything. The list
  becomes the cleaning log.

## Fix, one problem type at a time

Work on a copy tab called `clean`. For each fix, they decide, you
explain the trade-off:

1. Types: dates parsed as dates, numbers stripped of units and
   commas, one format per column. Text-that-should-be-number is the
   most common breakage; show a formula failing on it first.
2. Inconsistent labels: "NY", "ny", "New York" become one value.
   TRIM and a find-replace pass; a helper column with the mapping if
   there are many.
3. Duplicates: exact duplicates usually go, but check whether two
   identical rows could both be real (two same-priced purchases the
   same day can be). Deciding takes knowledge of the data, which they
   have and you do not — ask.
4. Missing values: blank is information. Choose per column — leave
   blank, fill with a known value, or drop the row — and say why.
   Never invent a value to make a column look complete.
5. Out-of-range values: a 130% grade or negative age is a typo or a
   lie. Trace it to the source if possible; otherwise flag it in a
   `notes` column rather than silently deleting.

## Write down what changed

Keep a third tab called `log`: one line per change, what and why,
with row counts before and after. This is the habit that separates
cleaning from tampering — anyone, including future-them, can see
exactly what the data went through. If the dataset contains other
people's names or contact details, add a line about what was removed
or masked, and do that before the sheet is shared anywhere.

## Done

- `raw` tab untouched, `clean` tab tidy: one row per thing, typed
  columns, consistent labels, duplicates resolved, blanks decided
- `log` tab listing every change with a reason
- Sensitive fields removed or masked before sharing, with access and storage
  location recorded
- One summary formula on the clean tab works that failed on the raw
  tab — proof the cleaning bought something
- They can say in a sentence what the dataset can and cannot answer

Then use chart-the-truth or first-sql on the cleaned data.
