---
name: respond-to-a-frontend-supply-chain-incident
category: web
description: Respond to a compromised frontend dependency, build tool, registry, tag, or hosted script through scoped containment and trusted recovery. Use when untrusted code may have executed in users' browsers or release assets.
---

# respond-to-a-frontend-supply-chain-incident

Assume browser code could read page data and act with the user's session until evidence narrows the exposure.

## When to use

- Use when a package, lockfile, registry, build runner, artifact, CDN file, tag manager, extension, or vendor script may be compromised.
- Use ordinary dependency remediation when there is no credible malicious execution or artifact exposure.

## Preconditions

- Confirm incident command, security, release, identity, privacy, legal, communications, and vendor authority.
- Gather source, lockfiles, manifests, builds, signatures, registries, assets, headers, deployment history, sessions, network evidence, and affected routes.

## Procedure

1. Build an **exposure inventory** of versions, assets, hashes, routes, regions, time, browsers, data, sessions, users, and downstream actions.
2. Stop affected releases and preserve source, package metadata, caches, artifacts, logs, credentials, and volatile vendor evidence.
3. Apply **browser containment** through asset withdrawal, tag disablement, routing, CSP, revocation, cache purge, or maintenance behavior as evidence supports.
4. Rotate registry, build, signing, deployment, vendor, and application credentials exposed to the path.
5. Perform **evidence preservation** with hashes, custody, timestamps, and separated facts, indicators, and hypotheses.
6. Search for malicious behavior across scripts, network destinations, storage, forms, sessions, and transactions.
7. Assess notification and user protection with authorized privacy and legal owners.
8. Create a **trusted rebuild** from verified source, clean runners, pinned inputs, reviewed dependencies, new credentials, and reproducible artifacts.
9. Deploy by canary with asset hashes, headers, telemetry, and user-journey verification.
10. Monitor recurrence and complete ecosystem, control, and vendor follow-through.

## Failure plan

- If scope is unknown, contain the broadest credible execution path without destroying caches or artifacts needed for evidence.
- If immediate withdrawal breaks critical access, serve a minimal verified static recovery path.
- Never rebuild on a runner or credential set that may be compromised.
- Do not claim user impact absent when browser or network evidence is incomplete.

## Worked example

A hosted analytics script begins loading obfuscated code after its vendor account is compromised. Responders disable the tag, preserve served variants and request logs, add a narrow CSP block, and rotate vendor plus deployment credentials. Evidence shows the script ran on login and billing pages for forty minutes, so session and data exposure receive separate review. A clean runner builds pinned assets from the last verified commit, canary hashes match the manifest, critical journeys pass, and the site returns while targeted monitoring continues.

## Done

- An exposure timeline and asset manifest records affected code, hashes, routes, time, data, sessions, users, and uncertainty
- A containment and notification log records browser containment, credential actions, evidence preservation, decisions, and affected-party protection
- A clean rebuild and recovery report verifies trusted source, runners, dependencies, credentials, artifacts, canary behavior, and recurrence monitoring
