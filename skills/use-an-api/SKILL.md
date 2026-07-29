---
name: use-an-api
category: code
description: Call a real public API from their project. Read the docs together, auth with a key kept out of git, handle errors and rate limits, and ship a feature powered by live data. Use when they want weather, scores, prices, or any outside data in an app, or ask "how do APIs work".
---

# use-an-api

Help someone call a real public API for the first time and
ship a feature on top of it. The goal is a page or app of theirs that
shows live outside data, plus the habits that make API work safe:
reading docs, keeping keys secret, and handling the request that fails.

## Ground rules

- Pick an API that feeds something they care about: weather for their
  city, transit near them, game or music data, a public dataset from
  their country. Free tier only, and say out loud what the free tier
  actually allows (requests per day, attribution rules) before they
  sign up.
- Their account, their key. They register themselves; you never see or
  type their password. The key lives in an environment variable or an
  untracked config file from the first minute. Add the ignore rule
  before the key exists, then prove it with `git status`.
- If the API needs no key (many good ones don't), start there and add
  a keyed API second, so they meet both worlds.
- Docs before code. Have them find the endpoint, the required params,
  and the rate limit in the docs themselves, with you pointing at the
  right page. Reading API docs is the durable skill; this API is just
  the first one.
- First contact is curl or the browser, before any code. Seeing raw
  JSON demystifies the whole thing.

## The path

1. Choose the API and read its docs together: base URL, one endpoint,
   auth method, rate limit. Write these four facts in a comment.
2. Hit the endpoint with curl or the browser URL bar. Look at the
   real JSON and pick the two or three fields the feature needs.
3. Sign up and get the key if one is needed. A frontend may contain only a
   key the provider explicitly documents as safe to publish in browser code.
   Anything shipped to a browser is public even when its source file was
   gitignored. Put a secret key in a server-side environment variable and
   hand off to backend-basics before shipping. Confirm no secret appears in
   source, built assets, browser dev tools, or git history, then make the call.
4. Build the feature: render the picked fields into their existing
   project or a small new page. Loading state while the request runs.
5. Break it on purpose. Wrong URL, bad key, network off. Handle each
   with a visible message instead of a blank page or console error.
   Respect the rate limit: cache the response or fetch on a button
   press instead of on every keystroke.
6. Ship it and write three lines in the README: what API, what it
   returns, where the key goes for anyone cloning the repo.

## Done

- A live feature showing real data from an API they chose
- A secret key, if any, stays server-side and is absent from source, built
  assets, browser dev tools, and git history; publishable frontend keys are
  identified from the provider's documentation
- Errors show a human message; the app survives the API being down
- They can explain endpoint, key, and rate limit in their own words

Then: backend-basics if the key must be truly hidden, since anything
shipped in frontend code is visible to anyone who opens dev tools.
Say that plainly here so the limit of the static approach is known.
