---
id: bill-split
level: 1
name: Split-the-bill calculator
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a bill-splitting app my friend group uses — live at {url}"
  college: "Built {project_name}, a calculator tuned to how my friends split bills"
  freelance: "Builds calculators for messy group cases — recent: {project_name} ({url})"
---

## Brief

A calculator built for how your friend group splits a bill, not the
even-split textbook case. Enter the items, assign them to people,
and get a per-person total that handles your group's known cases:
the one who only had fries, the shared appetizer, the one who forgot
their wallet and owes from last time. One calculation, done
completely, with tax and tip distributed the way your group agrees
is fair.

## Personalize

- **The group.** Your friends by name, saved so you do not retype
  them every dinner. Their quirks are the requirements.
- **The cases from real bills.** Take three receipts from actual
  outings and make the app produce the numbers your group settled
  on by hand. Those three become your test cases.
- **The tip rule.** Proportional to what you ordered, or split
  evenly? Your group has an opinion. Encode that one.

## Milestones

1. Write the three receipt cases in the README with the expected
   per-person totals before any code.
2. Items in, even split out, deployed. Ugly is fine.
3. Per-item assignment: each item belongs to one or more people,
   totals update as you assign.
4. Tax and tip distributed by your group's rule; the three receipt
   cases come out right.
5. Saved people and a designed empty state; a finished split
   survives a reload so you can show it at the table.
6. Use it at a real meal. Note in the README what broke and what
   you fixed. Final README.

## Done means

- Live URL responding; a split in progress survives a reload
- The three receipt cases from real bills compute correctly
- Rounding never loses or invents a cent; totals sum to the bill
- Used at least once at a real group meal, noted in the README
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
