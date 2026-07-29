---
name: secure-a-file-download
category: web
description: Secure file downloads with per-request authorization, safe storage indirection, bounded delivery, and revocation evidence. Use when private, tenant-scoped, generated, or untrusted files are served through a web application.
---

# secure-a-file-download

Authorize the object at delivery time, not only when its link is created.

## When to use

- Use for invoices, exports, uploads, reports, media, backups, signed URLs, and tenant documents.
- Public static assets can use a simpler immutable publishing path.

## Procedure

1. Classify file sensitivity, owner, tenant, lifecycle, malware risk, legal retention, size, and allowed recipient.
2. Keep storage keys and paths indirect and unguessable, but never treat obscurity as authorization.
3. Authenticate and authorize the current principal against the exact object, tenant, purpose, and disposition on every application-mediated request.
4. If issuing a signed URL, bind it to a narrow object and method, use short expiry, minimize reusable query exposure, and define revocation limitations.
5. Serve known `Content-Type`, safe `Content-Disposition`, `X-Content-Type-Options: nosniff`, appropriate cache policy, and sanitized filename.
6. Quarantine untrusted uploads until scanning and validation complete; retain the original safety state across copies and transforms.
7. Bound range requests, concurrency, size, generation time, decompression, and egress abuse.
8. Audit grant, denial, delivery, revocation, and administrative access without logging credentials or sensitive filenames unnecessarily.
9. Test cross-user and cross-tenant guesses, stale links, logout, role loss, deleted files, ranges, malformed names, alternate encodings, cache behavior, and infected objects.
10. Reconcile deletion and retention across object storage, CDN, generated derivatives, search, backups, and logs.

## Failure plan

- Fail closed when ownership, tenant, scan state, or authorization is unknown.
- If a signed link leaks, revoke or rotate the backing object path when immediate invalidation is not supported.

## Done

- A download security design records object identity, authorization, delivery headers, scanning, limits, retention, and revocation
- Adversarial tests prove cross-user, cross-tenant, stale, deleted, infected, malformed, and oversized access fails safely
- Delivery and lifecycle evidence verifies auditability, cache isolation, link expiry, deletion, and incident recovery
