---
name: document-a-known-issue
category: write
description: Create a maintainable known-issue record with verified symptoms, affected scope, safe workarounds, status, and update ownership. Use when support, customers, or operators need a reliable reference for an unresolved defect.
---

# document-a-known-issue

Publish the smallest accurate record that helps people recognize the problem and respond safely. Keep confirmed
behavior separate from suspected cause and update the page as evidence changes.

## Inputs

- Gather the defect or incident record, reproduced symptoms, affected versions, start time, and current status.
- Confirm any workaround with engineering, security, support, and product owners as relevant.
- Decide which details belong in public, customer-specific, internal, and security-restricted versions.

## Procedure

1. Write a searchable title using the visible symptom rather than an unproven root cause.
2. Describe expected behavior, observed behavior, and the conditions required to reproduce it.
3. State affected and unaffected products, versions, platforms, regions, or account types with evidence.
4. Add a safe workaround with prerequisites, trade-offs, reversal steps, and verified result.
5. Record severity, first observed time, current status, owner, and next update time.
6. Link the canonical defect or incident record and related support guidance.
7. List signals that indicate a different problem and where those cases should go.
8. Add a dated update log and explicit resolved, superseded, or retired criteria.

## Boundaries

Never publish credentials, exploit details, customer data, private incident discussion, or a suspected person
at fault. Do not claim a root cause, fix, or affected scope before it is verified. Avoid unsafe workarounds.

## Done

- The issue can be found by its verified symptom and distinguished from similar failures
- Scope, status, workaround, owner, and next update are current and checked
- Public and restricted details are separated according to privacy and security rules
- The record links to evidence and includes a tested retirement or resolution condition
