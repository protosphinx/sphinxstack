---
name: secure-file-uploads
category: code
description: Secure file uploads through strict acceptance rules, isolated storage, content inspection, and authorized delivery. Use when users or integrations can place files into an application.
---

# secure-file-uploads

Treat every uploaded byte and filename as untrusted, including files from authenticated users.

## Procedure

1. Define allowed business uses, file categories, sizes, counts, owners, retention, and download audiences.
2. Enforce request and decompressed-size limits before expensive parsing or storage.
3. Check extension, declared type, file signature, and parseability against an allowlist.
4. Generate an internal identifier and store outside executable or public application paths.
5. Quarantine new files until malware, archive, and content-policy checks complete.
6. Transform images or documents to a safe canonical representation when the product permits it.
7. Serve downloads through an authorization check with safe disposition, type, and filename headers.
8. Record upload, scan, access, rejection, retention, and deletion events with minimal metadata.
9. Test polyglots, traversal names, duplicate names, malformed files, bombs, scanner outage, and cross-user access.
10. Provide a retry or appeal path for safe files rejected by uncertain inspection.

## Guardrails

- Never trust a browser-provided filename or MIME type.
- Do not expose quarantined storage through a predictable URL.
- A malware scan does not replace type validation, authorization, or resource bounds.

## Done

- An upload acceptance and retention policy is documented
- Adversarial, outage, and cross-account tests are verified
- Stored, quarantined, served, and deleted file records reconcile
