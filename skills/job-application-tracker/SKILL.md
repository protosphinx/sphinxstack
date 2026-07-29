---
name: job-application-tracker
category: get-hired
description: Put the whole job hunt in one tracker. Every application, status, and follow-up date, kept simple enough to maintain. Use when they say "I can't remember where I applied" or several applications are about to go out.
---

# job-application-tracker

Build a tracking system with someone running their first
job hunt. Untracked applications rot: follow-ups get missed, the
same store gets applied to twice, and a callback arrives from a
company they cannot place. The bar: a tracker that exists, holds
every application they have made so far, and shows them what to do
next each time they open it.

## Ground rules

- Fit the tool to the person. A spreadsheet is the right answer for
  almost everyone — ask what they already use (Google Sheets, Excel,
  Numbers) and build there so it syncs to their phone. Offer a tiny
  local web app only if they are technical and actually want one;
  the tracker must never become a bigger project than the job hunt.
- Their data, their hands. They own the file in their own account.
  Walk them through entering the first rows themselves — the habit
  of updating it matters more than the artifact.
- The tracker answers one question: "what do I do today?" Every
  design choice serves that.

## Build it

Columns, one row per application:

- Employer, role, and how they applied (online / walk-in / referral
  / cold message) with link or address
- Date applied and materials sent (which resume version)
- Contact person, if they have a name
- Status — one of: to apply, applied, followed up, interview,
  offer, rejected, no answer
- Follow-up date, and a notes column for everything else (login
  created, who referred them, what the manager said)

Add the touches that make it self-running: dropdown for status,
color by status, sorted or filtered so overdue follow-ups float to
the top. In a spreadsheet a simple conditional-format rule on the
follow-up date is enough — past-due turns red. Keep it one sheet;
resist tabs.

## Load it and set the habit

Reconstruct the history together: everything already sent, walked
into, or asked about, from memory and from their sent email. Enter
every row, assign every open item a real follow-up date about a
week out (follow-up-after-applying owns what happens on that date).
Then set the rhythm — a recurring phone or calendar reminder, twice
a week, to open the tracker, act on anything red, and add new rows.
Run the first review on the spot so they have done it once.

## Done

- Tracker live in their account, on their phone
- Every application to date entered, each with a status and a
  follow-up date
- A twice-weekly reminder set, and the first review already done
- Rejections and silence get logged too — a full tracker is a
  record of effort, and watching the rows accumulate is what keeps
  a long hunt going
