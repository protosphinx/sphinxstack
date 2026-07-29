---
name: implement-web-push-notifications
category: web
description: Implement web push with contextual permission, secure subscriptions, user controls, safe delivery, and lifecycle cleanup. Use when timely browser notifications provide clear value after the user leaves a site.
---

# implement-web-push-notifications

Earn permission and make it easy to withdraw.

## When to use

- Use for user-requested alerts whose value cannot be met reliably in the open page or by a less intrusive channel.
- Do not prompt on first visit or disguise the browser permission dialog.

## Procedure

1. Define notification purposes, recipients, urgency, frequency, quiet behavior, sensitive-content rules, and success measures.
2. Explain value in context and ask only after a meaningful user action. Record consent separately from the browser's technical permission.
3. Register a scoped service worker and create a subscription with current application-server keys.
4. Bind the subscription to the correct account, device context, topics, locale, and preference version without treating an endpoint as identity.
5. Store endpoints and keys as sensitive data; authorize all preference and send operations.
6. Keep payloads minimal, avoid sensitive lock-screen content, use safe destinations, and implement notification click and close behavior.
7. Handle expired, replaced, denied, and invalid subscriptions from push-service responses.
8. Reconcile logout, shared devices, account deletion, topic changes, and key rotation with server-side subscription removal.
9. Rate limit, deduplicate, honor quiet choices, and provide an in-product notification history when loss matters.
10. Test supported browsers, installed and non-installed states, offline delivery, duplicate events, revoked permission, multiple accounts, shared devices, click navigation, and inaccessible content.

## Failure plan

- Stop sending to invalid or unowned subscriptions and remove them through a recorded cleanup path.
- If notification delivery is not guaranteed, keep critical state available in the product and do not use push as the sole control.

## Done

- A push design records purpose, permission timing, data handling, preferences, delivery behavior, and lifecycle events
- Cross-browser tests verify opt-in, send, display, click, failure, revocation, logout, and deletion behavior
- An operations report proves invalid endpoints are removed, sensitive content is protected, and users can inspect and change preferences
