---
name: create-a-changelog-entry
category: write
description: Record one software change in a precise, durable changelog entry with scope, compatibility, and evidence. Use when a merged fix, feature, deprecation, security update, or maintenance change needs a canonical history record.
---

# create-a-changelog-entry

Write for someone deciding whether a version affects them. A changelog entry is a technical record, not a
commit-message dump or marketing announcement.

## Inputs

- Gather the exact merged change, issue, compatibility impact, version policy, and release destination.
- Confirm the public or internal audience and the project's entry categories and formatting rules.
- Identify migration, deprecation, security, and configuration implications.

## Procedure

1. Select the correct added, changed, fixed, deprecated, removed, security, or maintenance category.
2. Describe the observable behavior before implementation details.
3. Name the affected component, interface, platform, or configuration.
4. State compatibility impact and any action a consumer must take.
5. Link the authoritative issue, pull request, migration guide, or advisory according to repository policy.
6. Avoid duplicate entries for the same user-visible change across internal commits.
7. Place the entry under the correct unreleased or versioned heading.
8. Check tense, terminology, identifiers, links, and claim against the actual diff and tests.

## Boundaries

Do not expose private issue links, customer names, vulnerability details, or secrets in a public changelog.
Never claim a fix, version, platform, or compatibility result that has not been verified.

## Done

- The entry describes one observable change and its exact affected scope
- Category, version destination, compatibility, and required action are checked
- Links point to approved authoritative records
- The changelog text matches the merged implementation and test evidence
