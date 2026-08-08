---
name: create-configurations-in-partmode
category: design
description: Create, switch, and verify named PartMode configurations driven by parameter overrides. Use when someone wants one model to represent several sizes or variants, needs a design table, or must export a specific repeatable configuration.
---

# create-configurations-in-partmode

Build named variants that reproduce exact geometry from one editable model.
Read https://partmode.com/help#configurations-and-drawings before exporting a
configuration-controlled result.

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

- Keep shared design intent in the base model and override only documented inputs.
- Use unique configuration names that communicate the variant, not row numbers alone.
- Do not edit a table-driven dimension ad hoc when the task requires activating
  a stored configuration.
- Verify every configuration independently; one successful row does not validate all rows.

## Procedure

1. Identify the independent parameters that define each variant and the
   dimensions, features, or body state that must remain common.
2. Create and validate the base parameters with `$use-parameters-in-partmode`.
   Choose a known-good default before adding variants.
3. Choose **Manage** → **Configurations** and create a named configuration for
   each approved parameter set. Record units in the values or governing contract.
4. Activate one configuration at a time and wait for the kernel and document to
   settle. Do not switch again while a rebuild is pending.
5. Inspect the active name, effective parameter values, body count, exact health,
   and critical measurements. Record failures against the specific configuration.
6. Switch away and back to a tested configuration. Confirm it reproduces the
   same canonical document and exact geometry for unchanged inputs.
7. Export or draw only after activating and reinspecting the intended configuration.
   Include the configuration name in the delivery manifest.

## Done

- Each configuration has a meaningful unique name and documented parameter overrides
- Every row rebuilds without ignored diagnostics and passes its dimensional checks
- Switching away and back reproduces unchanged exact geometry
- Exports and drawings identify the active configuration
- The base model remains the single shared editable design definition
