---
name: design-a-multistep-form
category: design
description: Design a multistep form with meaningful grouping, progress, saved state, validation, review, and recovery. Use when a long or conditional submission cannot be completed safely on one screen.
---

# design-a-multistep-form

Split work by user meaning and preserve answers without hiding overall scope.

## Procedure

1. Map required outcomes, questions, dependencies, sensitive data, and abandonment risk.
2. Group fields into meaningful steps with clear titles and expected effort.
3. Show progress without falsely implying equal length or guaranteed eligibility.
4. Define forward, back, save, resume, cancel, timeout, and account-switch behavior.
5. Validate at the useful moment and preserve entered values after errors.
6. Manage conditional branches without losing or submitting hidden stale answers.
7. Provide a review and correction step before irreversible submission.
8. Test keyboard, focus, announcements, autofill, mobile, refresh, interruption, and expiry.
9. Reconcile draft, submitted, confirmation, and downstream records.

## Guardrails

- Never use steps to obscure costs, consent, or required information.
- Do not submit hidden answers from an abandoned branch.
- Avoid trapping users after an expired session without recovery.

## Done

- A form-flow specification covers steps, branches, drafts, and recovery
- Accessibility, interruption, validation, and correction paths are tested
- Draft, submitted, and confirmation records reconcile
