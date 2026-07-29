---
name: design-a-form
category: design
description: Design an accessible form around a real task and data need. Use when fields, sequencing, validation, consent, errors, saving, submission, and recovery must work together.
---

# design-a-form

## Procedure

1. Define user task, authority, eligibility, decision, data purpose, and completion evidence.
2. Remove fields that are unnecessary or obtainable safely elsewhere.
3. Group questions in a logical sequence and reveal complexity only when relevant.
4. Write persistent labels, help, examples, required status, formats, and inclusive choices.
5. Choose native controls and correct autocomplete, input, and keyboard behavior.
6. Define client and server validation with field errors, summary, focus, and preserved input.
7. Design save, resume, review, submit, confirmation, duplicate, timeout, and failure states.
8. Explain consent, retention, sharing, consequences, and alternative channels.
9. Test with keyboard, screen reader, zoom, mobile, slow connection, errors, and representative users.
10. Reconcile submitted data with the authoritative system and support path.

## Guardrails

- Do not collect sensitive data without purpose and authority.
- Never erase input after a recoverable error.
- Avoid placeholder-only labels or color-only errors.

## Done

- A form specification covers fields, logic, validation, consent, states, and evidence
- End-to-end submission and failure tests pass
- Accessibility and data-minimization review are recorded
