---
name: import-a-step-file-in-partmode
category: design
description: Open a STEP file in PartMode, verify imported exact bodies and hierarchy, and preserve it as an editable PartMode project. Use when someone receives CAD from another system, sees a STEP import or healing diagnostic, or needs to distinguish imported B-rep from reconstructed feature history.
---

# import-a-step-file-in-partmode

Bring external exact geometry into PartMode without inventing vendor-native
features, mates, or manufacturing metadata.

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

- Preserve the original STEP file and record its byte count and SHA-256 before import.
- Import into a new or explicitly replaceable project; opening STEP can replace
  the active document.
- Do not claim that STEP reconstructs vendor feature history, mates, or PMI.
- Accept bounded healing only when PartMode reports valid exact solids and the
  changes fit the approved import policy.

## Procedure

1. Record the source filename, origin, expected units, expected part or assembly
   structure, approximate envelope, and original file checksum.
2. Save the current PartMode project if it must be preserved. Choose **Open
   project, STEP, or DXF profile** and select the approved STEP file.
3. Wait for the exact reader and any bounded healing pass. If the kernel resets
   and retries once, keep the resulting diagnostic in the import record.
4. Read the import summary: body-definition count, hierarchy mode, names,
   placements, healing tolerance, repaired-face count, and unchanged-body count
   when those fields are reported.
5. Inspect **Bodies**, **History**, and **Inspector**. Imported geometry should be
   represented as independent exact B-rep; absence of parametric source history
   is expected and must not be disguised.
6. Compare body count, names, hierarchy, bounding dimensions, and exact health
   with the delivery contract. Reject an invalid or open solid rather than
   treating a shaded mesh as successful import.
7. Choose **Save project file** to preserve the imported resources and canonical
   PartMode document. Reopen that saved project and repeat the key checks.

## Done

- Original STEP bytes and checksum remain preserved
- PartMode reports valid exact imported bodies with understood healing evidence
- Body names, count, placements, hierarchy, and envelope match expectations
- The report states that vendor-native history, mates, and PMI were not reconstructed
- A saved PartMode project reopens with the same imported exact geometry
