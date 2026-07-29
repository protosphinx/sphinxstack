---
name: test-a-file-download
category: web
description: Test a web file download for authorization, response headers, filename, integrity, type, size, content, accessibility, and failure behavior. Use when a user retrieves generated or stored files.
---

# test-a-file-download

Verify the downloaded bytes and access boundary.

## When to use

- Use for reports, exports, media, archives, documents, invoices, or signed links.
- Do not download restricted content through another user's session or retain personal data beyond test authority.

## Procedure

1. Define authorized user, file expectation, route, input, size, format, and retention.
2. Capture status, redirects, content type, disposition, filename encoding, length, cache, range, and security headers.
3. Hash the download and compare with the source or generation record.
4. Open and validate actual file structure, content, formulas, links, encoding, and accessibility where relevant.
5. Test duplicate names, special characters, large files, interruption, resume, expiry, and retry.
6. Test unauthorized, expired, revoked, missing, and cross-tenant access.
7. Confirm no partial or error page is mislabeled as the target file.
8. Record sanitized evidence and delete test data as required.

## Done

- A download test report records authorization, headers, filename, bytes, hash, format, content, and accessibility
- Boundary, interruption, expiry, revocation, missing, large-file, and cross-tenant cases are verified
