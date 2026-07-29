---
name: create-a-deployment-pipeline
category: code
description: Create a repeatable path from reviewed code to a recoverable production release. Build once, promote the same artifact, gate risky changes, and rehearse rollback. Use when deployments depend on a laptop, undocumented steps, or unverified production changes.
---

# create-a-deployment-pipeline

Turn deployment into an inspectable system. The pipeline should make the safe path easier than
the improvised path and leave enough evidence to answer what changed, who approved it, which
artifact ran, and how it was checked.

## When to use

Use this skill when a team deploys manually, environments drift, releases cannot be reproduced,
or production changes need review and recovery. Do not add stages that have no failure they can
detect or decision they can support.

Never print secrets into logs or pass unreviewed production credentials to forked code. Separate
build permissions from deployment permissions and keep an emergency path narrow and audited.

## Preconditions

- Map the current path from commit to production, including manual commands and hidden credentials.
- Name environments, deployment owner, approval authority, service health checks, and rollback owner.
- Define the source revision, dependency lock, build environment, and artifact retention policy.
- Identify database, configuration, and infrastructure changes that cannot be rolled back like code.

## Procedure

1. Choose one version identifier that connects commit, immutable artifact, release record, and runtime.
2. Make CI build and test the artifact in a clean environment with pinned dependencies.
3. Store the artifact once. Promote the same verified bytes across environments instead of rebuilding.
4. Add gates for unit tests, static checks, secret scanning, artifact integrity, and the smallest useful
   integration or smoke test. State which failures block promotion.
5. Keep configuration outside the artifact and validate required values without exposing secret content.
6. Deploy to a production-shaped environment and run the exact user journey used for live verification.
7. Choose a release strategy based on risk: rolling, canary, blue-green, or a short maintenance window.
8. Define automatic abort and rollback thresholds from user-facing health signals, not process uptime alone.
9. Rehearse rollback with the production mechanism. Include configuration and database compatibility.
10. On production promotion, capture approval, artifact digest, change summary, health evidence, and outcome.
11. Keep the last known-good artifact available and document the audited emergency procedure.

## Failure plan

Rehearse a bad artifact, a failed health check, an expired credential, a partial rollout, and a schema
incompatibility. For each, name the automatic stop, manual decision point, rollback command, and evidence
that confirms recovery. If an irreversible data change is present, block promotion until the application
can safely run on both schema versions.

## Done

- A successful pipeline run links source revision, tests, immutable artifact, approval, and environment
- A rollback rehearsal restores the last known-good release and verifies the critical user journey
- A release record contains artifact digest, configuration version, deployment evidence, and outcome
- Promotion uses the same artifact across environments with explicit blocking gates
- Secrets remain out of source, artifacts, and logs, and emergency access is narrow and audited

Then use design-observability to choose release health signals and debug-a-production-incident for response practice.
