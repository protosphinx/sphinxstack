---
name: connect-partmode-to-an-agent
category: code
description: Configure and verify PartMode's hosted MCP server for a person's agent without exposing credentials or granting more CAD authority than needed. Use when they say "connect PartMode to Codex," "set up PartMode MCP," "add PartMode to my agent," or ask why the PartMode MCP URL does not behave like a normal web page.
---

# connect-partmode-to-an-agent

Connect an MCP-capable agent to PartMode and leave behind a verified,
revocable setup. Use the public reference at
https://partmode.com/help#mcp-reference and treat live MCP discovery as the
authority for the running release.

## Boundaries

- Have the person create and revoke their own agent key at
  https://partmode.com/account. Never ask them to paste the key into chat, a
  URL, source code, a skill, or a tracked config file.
- Use `https://partmode.com/mcp` as a Streamable HTTP MCP endpoint. A normal
  browser visit is documentation traffic; MCP clients send authenticated
  JSON-RPC requests.
- Treat authentication and project authority separately. A key identifies the
  agent, but a browser project still needs visible approval.
- Request a headless grant only when unattended server CAD is actually needed.
  Existing keys cannot be silently upgraded.

## Procedure

1. Read the public MCP reference with the person. Confirm their client supports
   Streamable HTTP MCP and secret environment variables.
2. Choose the least powerful key: read-only or edit, with headless server access
   disabled unless the planned workflow requires it.
3. Put the key in OS or client secret storage exposed to the agent as an
   environment variable such as `PARTMODE_AGENT_KEY`. Use a non-echoing input
   path rather than typing the value into a shell command. Check that shell
   history, project files, logs, and git status do not expose its value.
4. Configure the client with endpoint `https://partmode.com/mcp` and bearer
   authentication from that environment variable. For Codex, use:

   ```sh
   codex mcp add partmode --url https://partmode.com/mcp --bearer-token-env-var PARTMODE_AGENT_KEY
   ```

5. Restart the client, initialize the MCP connection, and call
   `resources/list` and `tools/list`. Read
   `partmode://help/mcp-reference` and
   `partmode://help/agent-workflow` when resources are available.
6. Choose one session path. For a visible browser project, call
   `partmode_list_studios`, request the smallest bounded connection with an
   explicit `sessionSeconds` and commit budget, and have the person confirm the
   visible project identity before approving it in the intended PartMode tab.
   For a granted headless key, open the named durable project explicitly.
7. Call `partmode_session_status` and confirm the returned mode, permissions,
   expiry, and remaining commit budget match the request. Abort and disconnect
   if the authority is broader or the duration is wrong.
8. Call `cad_capabilities`, then use `cad_inspect` or `cad_query` to compare the
   opened document with an expected name, revision, entity, or document
   fingerprint supplied by the person. Abort and disconnect on a mismatch.
   Record the verified session path, scope, expiry, budget, and current revision
   without recording the key.
9. End the test session with `partmode_disconnect`. Revoke any throwaway key the
   person created only for setup verification.

## Done

- The agent lists live PartMode resources and tools through the hosted MCP URL
- A bounded session opens through visible approval or an explicit headless grant
- Session status proves the approved mode, permissions, expiry, and commit budget
- An exact document inspection matches the project evidence the person expected
- `cad_capabilities` returns the live capability manifest and current revision
- No credential appears in chat, source, tracked files, logs, or shell history
- The test session is disconnected and any temporary key is revoked
