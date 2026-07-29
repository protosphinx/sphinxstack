---
name: threat-model-a-feature
category: code
description: Examine how a feature could expose data, authority, money, or availability before it ships. Map assets and trust boundaries, rank realistic abuse cases, and verify mitigations. Use when a design handles sensitive data, privileged actions, untrusted input, or a new external boundary.
---

# threat-model-a-feature

Create a focused security review tied to one design and one release decision. The goal is not an
impossibly complete list of attacks. It is a shared model of what matters, where trust changes,
which abuse cases are credible, and who owns the remaining risk.

## When to use

Use this skill for authentication, authorization, payments, uploads, secrets, personal data,
administrator functions, public APIs, automation with authority, and new third-party connections.
Repeat it when the data flow or attacker opportunity materially changes.

Do not test exploits against systems or data without explicit authorization. Do not copy private
production data into the review. Escalate legal, privacy, safety, and compliance questions to their owners.

## Preconditions

- Name the feature owner, security reviewer, release decision maker, and systems in scope.
- Gather the current design, data flow, identities, permissions, dependencies, and deployment model.
- Classify relevant data and record regulatory or organizational handling requirements.
- Agree on a severity method and who can accept residual risk.

## Procedure

1. List assets an attacker or mistake could harm: data, credentials, authority, money, availability,
   integrity, reputation, and safety.
2. Draw the data flow from external actors through processes and stores. Mark trust boundaries where
   identity, ownership, network, privilege, validation, or data classification changes.
3. For every boundary, ask how identity can be spoofed, input changed, actions denied, data exposed,
   service exhausted, or privilege increased. Include accidental misuse and insider access where credible.
4. Write abuse cases as actor, capability, path, asset, and consequence. Keep them specific enough to test.
5. Rank likelihood and impact using stated assumptions. Distinguish evidence from speculation.
6. Choose mitigations in layers: remove authority, minimize data, validate, authorize, isolate, rate-limit,
   record, detect, and recover. Prefer design changes over warnings to users.
7. Assign each mitigation an owner and verification method such as a test, configuration check, review,
   monitoring signal, or recovery exercise.
8. Record residual risk after mitigations, affected asset, decision owner, expiry or review condition,
   and the reason it is acceptable for this release.
9. Revisit the normal and abuse flows after implementation. Confirm the built system matches the diagram.
10. Store the model with the feature so later changes can update it rather than restart from memory.

## Failure plan

Assume a mitigation is absent or bypassed. Define containment for exposed credentials, unauthorized
access, bad uploads, data disclosure, and denial of service. Include credential revocation, feature disable,
evidence preservation, user notification authority, and recovery checks. If a critical risk has no tested
containment or authorized acceptance, stop the release.

## Done

- A threat diagram identifies assets, actors, data flows, stores, and trust boundaries
- Ranked abuse cases state capability, path, affected asset, consequence, and supporting assumptions
- Every material mitigation has an owner and a mitigation check tied to implementation
- Each accepted residual risk names the accepted risk owner, reason, and review condition
- The release decision records blocked, mitigated, transferred, and accepted risks

Then use auth-basics for implementation foundations and design-observability for detection and response signals.
