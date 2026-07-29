---
name: investigate-a-phishing-report
category: code
description: Investigate a suspicious message without increasing exposure. Use when someone reports possible phishing, credential theft, malicious links, impersonation, payment fraud, or an unexpected attachment.
---

# investigate-a-phishing-report

Protect the reporter first, then determine scope and containment. Work from safe copies and platform telemetry rather than clicking, forwarding, or executing suspicious content.

## Procedure

1. Thank the reporter and ask whether they clicked, opened, replied, entered credentials, approved MFA, sent money, or downloaded anything.
2. Tell them not to interact further and provide the approved urgent-help path for active loss or safety risk.
3. Preserve the original message through the authorized reporting method, including headers and platform identifiers.
4. Record sender, recipients, subject, delivery time, claimed organization, reply path, URLs, attachment metadata, and observed language.
5. Compare domains and destinations without visiting them from a normal workstation.
6. Query mail, identity, endpoint, proxy, and payment records within authorized scope to find related delivery and actions.
7. Contain confirmed or high-risk indicators through approved message removal, domain blocking, session revocation, credential reset, endpoint isolation, or payment escalation.
8. Notify affected recipients with clear actions but do not redistribute active links or sensitive recipient lists.
9. Record what was observed, what remains unknown, actions taken, and evidence that containment reached the relevant systems.

## Guardrails

- Never open an attachment, follow a link, or call a supplied number merely to test it.
- Do not shame the reporter; rapid disclosure is valuable evidence.
- Treat display-name similarity and automated reputation as signals, not final proof.
- Use security specialists and isolated analysis environments for payload analysis.

## Done

- Reporter actions and possible exposure are known or explicitly unresolved
- The original message and investigation evidence are preserved
- Related recipients, sessions, endpoints, and payments are assessed
- Containment is verified and follow-up has an owner
