---
name: export-cad-from-partmode
category: code
description: Export a PartMode CAD project in a live-supported format and verify the artifact against its source revision, byte count, checksum, and exact evidence. Use when someone asks for STEP, a PartMode project, STL, AMF, 3MF, drawing or sketch output, PNG, or another PartMode CAD deliverable.
---

# export-cad-from-partmode

Produce a CAD file whose source, scope, and bytes can be checked. Read
https://partmode.com/help#mcp-reference and let the live session capability
manifest decide which formats are available.

## Required connection

This skill is operating guidance, not a PartMode login or tool connection.
Before an agent continues, confirm that it can list PartMode MCP resources and
tools. If it cannot, stop and use `$connect-partmode-to-an-agent`: create or
sign in to an account at https://partmode.com/account with an account name and
passphrase, create the least-powerful suitable agent key, store the one-time
secret as `PARTMODE_AGENT_KEY`, and configure Codex with:

```sh
codex mcp add partmode --url https://partmode.com/mcp --bearer-token-env-var PARTMODE_AGENT_KEY
```

Restart the agent after adding the server. A browser-local project also requires
a signed-in PartMode tab and visible approval; server-headless work requires an
edit key created with the explicit headless grant. Never simulate CAD work from
these instructions or claim completion without exact settled evidence returned
by the connected PartMode tools.

## Boundaries

- Confirm the intended project, revision, entity scope, format, units, and output
  path before exporting. Do not overwrite an existing file without permission.
- Use `cad_artifact` only in a browser-approved session and only for formats it
  advertises. A headless session currently uses
  `partmode_headless_export_step` for exact STEP output.
- Do not claim that a screenshot, filename, HTTP success, schema declaration, or
  mesh count proves a valid exact export.
- Keep keys and project content out of logs. Share the artifact only with the
  people and destination the owner approved.

## Procedure

1. Record the delivery contract: source project, required revision or state,
   whole-document or entity scope, target format, units, destination, and the
   recipient's acceptance check.
2. Open the least powerful suitable session and call `cad_capabilities`. Inspect
   the current document and wait for the applied revision to settle before
   exporting.
3. Select the export tool from live capability data. Use `cad_artifact` for an
   advertised browser artifact or `partmode_headless_export_step` for headless
   STEP. Do not substitute a nearby format without the person's agreement.
4. Submit the exact requested scope and format. Capture the source revision,
   document or geometry identity, MIME type, byte count, and supplied SHA-256.
5. Decode returned bytes when required and write them to the agreed explicit
   file path. Preserve the original extension and do not add credentials or
   private metadata to the filename.
6. Compute SHA-256 over the saved bytes and compare it with the supplied digest.
   Check the byte count and open or parse the artifact with an appropriate
   independent reader when one is available.
7. Reinspect the source immediately after export and compare its revision and
   exact CAD evidence with the export metadata. If the project changed during
   export, repeat from a freshly inspected settled revision rather than
   relabeling old bytes.
8. Disconnect the session and deliver the artifact with a short manifest naming
   source project, revision, format, scope, bytes, checksum, verification tool,
   and any known limitation.

## Done

- The saved artifact exists at the approved path in the requested live-supported format
- Its byte count and independently computed SHA-256 match the PartMode response
- The artifact opens or parses successfully and is tied to the inspected source revision
- The delivery manifest records format, scope, units, evidence, and limitations
- No existing file, secret, project, or unapproved destination was touched
