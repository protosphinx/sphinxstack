---
name: write-release-notes
category: write
description: Write audience-specific release notes from verified shipped changes, limitations, and required actions. Use when a product, library, service, or internal tool release needs an accurate customer or operator summary.
---

# write-release-notes

Explain what changed for the reader and what they should do. Describe only behavior available in the named
release, environment, and rollout state.

## Inputs

- Gather the release identifier, exact included changes, deployment state, flags, documentation, and known issues.
- Identify audiences, compatibility requirements, migration steps, security disclosures, and support ownership.
- Use merged work, release artifacts, tests, and product approval as sources.

## Procedure

1. Define the release, audience, availability window, and environments covered.
2. Group entries by user-visible addition, change, fix, deprecation, security notice, and known issue.
3. Lead each entry with the practical effect rather than the implementation detail.
4. State who is affected, prerequisites, rollout limits, and whether action is required.
5. Give tested upgrade, migration, configuration, or rollback links for breaking or operational changes.
6. Preserve important limitations and known failures next to the relevant feature.
7. Distinguish released, gradually rolling out, preview, and planned work.
8. Verify product names, versions, dates, flags, links, screenshots, and examples against the release artifact.
9. Obtain the required technical, product, legal, or security review.
10. Publish with a stable URL and correction owner.

## Boundaries

Never announce unshipped work, conceal a breaking change, or describe a planned feature as available. Do not
publish exploit details or confidential customer information. Use the approved disclosure process for security
changes.

## Done

- Every note maps to a verified change in the named release artifact
- Availability, affected audience, required action, limitations, and rollout state are clear
- Migration and documentation links have been opened and checked
- The published notes have a stable location and correction owner
