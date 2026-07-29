---
id: paycheck-calc
level: 1
name: Paycheck calculator
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a net-pay calculator matching my real payslips — {url}"
  college: "Built {project_name}, a calculator that predicts my part-time paycheck"
  freelance: "Builds calculators verified against real documents — recent: {project_name} ({url})"
---

## Brief

A calculator for your part-time job's pay: enter the hours you
worked, see what Friday's check should be. It knows your rate, your
weekend or evening bump, and the deductions that appear on your
payslip, because you copied them from a payslip you were paid on.
The proof of correctness is matching a check you already cashed.

## Personalize

- **Your pay rules.** From your offer letter or your manager's
  mouth: base rate, overtime threshold, any differential. Write
  them in the README before coding and have the numbers in hand.
- **Two past payslips.** Enter their hours and require the app to
  reproduce their net pay to the cent. Those two slips are your
  test suite. Keep the slips themselves private; only the derived
  rules go in the repo.
- **The question you ask.** "If I pick up Saturday, what does that
  add?" or "how many hours until I clear {amount}?" Build the one
  you catch yourself computing on your phone.

## Milestones

1. Pay rules and deduction lines in the README, transcribed from a
   real payslip, with the two target checks stated.
2. Hours in, gross pay out with the differential applied, deployed.
   Ugly is fine.
3. Deductions, until payslip one reproduces to the cent.
4. Payslip two reproduces as well; where it disagrees, find out
   why and document the answer.
5. Your one extra question answered on the same screen; entered
   weeks survive a reload; empty state designed.
6. Predict a future check before payday, then compare. Final README
   with predicted versus received.

## Done means

- Live URL responding; entered weeks survive a reload
- Both reference payslips reproduce to the cent
- One future paycheck predicted in advance, result in the README
- Bad input (negative hours, absurd numbers) gets a message
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
