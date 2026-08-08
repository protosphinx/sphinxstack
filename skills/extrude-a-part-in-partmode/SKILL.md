---
name: extrude-a-part-in-partmode
category: design
description: Turn a closed PartMode profile into an exact extruded solid and verify its dimensions, body, and feature history. Use when someone asks how to make a sketch 3D, create a plate or block, add material from a planar profile, or repair a failed Extrude.
---

# extrude-a-part-in-partmode

Create one predictable solid model from a verified profile. Use
`$sketch-and-dimension-in-partmode` first when the profile is incomplete or its
dimensions are not agreed.

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

- Confirm whether the extrusion creates a new body or adds to an existing body.
- Use an absolute requested depth and explicit units; do not infer scale from the view.
- Do not accept a preview that merges, intersects, or creates extra regions
  beyond the stated intent.
- A rendered mesh is feedback, not exact completion evidence.

## Procedure

1. Record the source profile, extrusion direction, depth, start condition,
   symmetry intent, target body, and expected final bounding dimensions.
2. Select the intended closed profile and choose **Extrude**. If starting from
   **Sketch**, finish the inline profile before setting the feature depth.
3. Enter the exact depth. Reverse direction or choose a symmetric result only
   when it matches the design contract.
4. Choose the correct result intent: a separate body for an independent solid or
   an additive result only when the profile intersects the intended target body.
5. Review the preview from more than one view. Confirm the selected region,
   direction, extent, and body count before applying.
6. Apply the feature and wait for the kernel rebuild to settle. Read any failure
   in **History** instead of treating the last visible preview as committed.
7. Inspect **History**, **Bodies**, and **Inspector**. Verify the Extrude depth,
   exact solid validity, body identity, and expected dimensions, then save the
   editable project.

## Done

- History verifies one intended Extrude feature at the expected position
- The checked feature uses the agreed profile, direction, depth, and body intent
- Bodies confirms the expected exact-solid count with no rebuild failure
- Inspector or exact measurement verifies the requested final dimensions
- The editable project is saved after the settled rebuild
