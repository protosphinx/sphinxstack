---
name: design-a-websocket-reconnection-strategy
category: code
description: Design WebSocket reconnection with state identity, backoff, resume tokens, replay, deduplication, ordering, authentication, and user feedback. Use when transient disconnects must not lose or duplicate live state.
---
# design-a-websocket-reconnection-strategy
## When to use
- Use for chat, collaboration, dashboards, control, notifications, or streaming UI.
- Do not automatically replay non-idempotent client commands.
## Preconditions
- Define session, message, stream, authorization, ordering, retention, offline, and recovery semantics.
## Procedure
1. Assign connection, session, stream, message, and operation identities.
2. Distinguish transport connection from authenticated application session.
3. Use bounded exponential backoff with jitter and online or visibility signals.
4. Resume from an acknowledged sequence or request a snapshot plus delta.
5. Deduplicate operations and reject stale session or authorization epochs.
6. Surface disconnected, reconnecting, stale, and recovered states accessibly.
7. Test partition, deploy, token expiry, missed retention, duplicate, reorder, and server restart.
## Failure plan
- Fall back to a fresh authorized snapshot when safe resume cannot be proven.
## Worked example
A collaborative editor restores from the last acknowledged operation and rejects a duplicated edit after reconnect.
## Done
- A reconnection design document records identity, backoff, resume, snapshot, replay, auth, UI state, and observability
- Partition, duplicate, reorder, token, retention, deploy, restart, offline, and stale-session tests verify recovery
