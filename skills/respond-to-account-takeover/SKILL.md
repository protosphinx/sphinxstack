---
name: respond-to-account-takeover
category: code
description: Respond to suspected account takeover through victim protection, scoped containment, preserved evidence, and proof-based recovery. Use when an unauthorized party may control a user account, session, credential, or recovery channel.
---

# respond-to-account-takeover

Restore control without helping the attacker, destroying evidence, or locking the real owner into an impossible recovery loop.

## When to use

- Use for suspicious login, session theft, credential stuffing success, unauthorized recovery changes, malicious MFA enrollment, or user-reported loss of control.
- Use ordinary fraud or content-abuse procedures when account authentication and control are not in question.

## Preconditions

- Confirm incident authority, privacy and legal escalation paths, on-call ownership, approved recovery proof, and safe user communication channels.
- Gather authentication, session, token, recovery, profile, device, notification, authorization, transaction, and support evidence with synchronized time.
- Separate confirmed facts, user reports, automated signals, and hypotheses before changing account state.

## Procedure

1. Begin **victim protection** by providing a safe report path, suppressing attacker-visible support details, and preventing irreversible high-risk actions where policy permits.
2. Create an account exposure timeline covering logins, sessions, tokens, credential changes, MFA, recovery, profile, privilege, exports, payments, and messages.
3. Scope affected identities, tenants, applications, credentials, devices, data, actions, and related accounts.
4. Apply **session and token containment** by revoking active sessions, refresh tokens, API keys, remembered devices, recovery links, and suspicious federation grants as required.
5. Block unsafe changes and rotate affected secrets while preserving necessary availability for uninvolved users.
6. Perform **evidence preservation** for relevant logs, support interactions, headers, identifiers, decision reasons, and immutable snapshots under access and retention rules.
7. Notify the likely victim through a pre-existing or independently verified channel without revealing detection details to the attacker.
8. Conduct **identity recovery** with risk-appropriate proof, separation of duties for privileged accounts, new credentials, fresh MFA, and regenerated recovery codes.
9. Review and reverse unauthorized profile, permission, payment, integration, content, and data changes through approved business procedures.
10. Monitor the recovered account and related infrastructure for recurrence while giving the victim clear follow-up and support.
11. Determine entry path and control failures without overstating attribution.
12. Complete control effectiveness review across authentication, detection, rate limits, session security, recovery, notifications, support, and user harm.

## Failure plan

- If the reporter cannot yet prove control, preserve the account and evidence in a reversible protected state rather than transferring ownership.
- If containment would interrupt critical safety or business functions, use incident command to stage the narrowest safe restriction.
- If an attacker may control email or phone recovery, stop using that channel as proof and move to the approved independent path.
- If logs are incomplete, label uncertainty and widen monitoring instead of fabricating a precise timeline.
- Never ask for passwords, one-time codes, recovery codes, or remote-device control.

## Worked example

A workspace owner reports password-reset messages and a new authenticator they did not add. Responders protect the account from ownership and billing changes, preserve authentication and audit records, and build an account exposure timeline. The evidence shows a reused password login followed by MFA enrollment, export creation, and a new API token. All sessions, tokens, remembered devices, and recovery links are revoked. Because email forwarding may be compromised, identity recovery uses the organization's previously verified administrator and a two-person support decision. The team removes the attacker factor, issues fresh credentials and recovery codes, cancels the export, reviews downstream access, and monitors the workspace. The control review adds step-up confirmation and notification for authenticator changes.

## Done

- An account exposure timeline distinguishes confirmed events, signals, user reports, containment, and remaining uncertainty
- A containment and recovery log records victim protection, session and token containment, evidence preservation, identity recovery, and reversal of unauthorized changes
- A control effectiveness review verifies entry-path findings, recurrence monitoring, user follow-up, and owned improvements
