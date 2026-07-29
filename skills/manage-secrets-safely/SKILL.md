---
name: manage-secrets-safely
category: code
description: Inventory application secrets, move them into appropriate stores, limit access, rotate exposed values, and verify runtime use without revealing secret contents. Use when credentials appear in code, a project needs environment variables, or someone asks how to store or rotate API keys safely.
---

# manage-secrets-safely

Treat secrets as short-lived authority with an owner, scope, storage location, and revocation path.
The goal is not merely to hide strings from source control; it is to make access narrow and recoverable.

## Inputs

- Read repository instructions, deployment environments, integrations, and access model.
- Identify the owner authorized to create, revoke, and rotate each credential.
- Use secret names, fingerprints, and metadata in records. Never copy secret values into notes or chat.

## Procedure

1. Inventory secret classes across source, history, local files, CI, hosting, logs, images, backups, and
   third-party dashboards. Record name, purpose, owner, environment, scope, expiry, and storage location.
2. Classify findings as active, unknown, test-only, obsolete, or exposed. Treat a secret committed to
   version control or printed in a shared log as exposed even if the file was later deleted.
3. Choose the narrowest supported store for each environment: a local ignored environment file,
   operating-system keychain, CI secret store, or managed runtime secret service.
4. Remove secret values from code and configuration templates. Keep a checked-in example containing
   names and safe descriptions only.
5. Reduce authority and lifetime. Prefer separate credentials per environment, read-only access where
   possible, explicit allowed origins or resources, and automatic expiry.
6. Rotate exposed or over-broad credentials from the issuing system. Update consumers in a safe order,
   verify the new credential, then revoke the old one.
7. Scan current files, relevant history, build artifacts, and logs with approved tools. Review matches
   manually because scanners can miss encoded or domain-specific values.
8. Test the application from a clean environment. Confirm missing secrets fail clearly, valid secrets
   work, and logs do not reveal values.
9. Document onboarding, rotation, emergency revocation, and offboarding without including secret content.
10. Schedule ownership and expiry review for credentials that cannot rotate automatically.

## Boundaries

Never print, transmit, commit, or paste a live secret for convenience. Do not rewrite shared git history
or revoke a production credential without confirming affected consumers and authorization. If exposure
may have enabled unauthorized access, preserve evidence and follow the security incident process.

## Done

- A secret inventory records owner, scope, environment, store, expiry, and rotation state without values
- Exposed credentials are rotated and revoked, with affected consumers verified on replacement values
- Source, relevant history, artifacts, and logs pass a documented secret scan and manual review
- A clean-environment test proves safe failure when missing and successful runtime use without log leakage

Then use threat-model-a-feature when the credentials cross a new trust boundary.
