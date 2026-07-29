---
name: backend-basics
category: code
description: Build and deploy their first small server. Covers a few real endpoints, frontend requests, current host limits, server-side secrets, and failure handling. Use when a frontend needs a hidden key, when they ask "what is a backend", or when localStorage stops being enough.
---

# backend-basics

Build someone's first backend: a small API they wrote,
deployed on a current no-card plan, answering requests from their own frontend.
The point is to make "server" concrete. Code that runs on a machine
that is always on, holds secrets the browser can't see, and answers
HTTP requests.

## Ground rules

- The backend must serve a real need from their existing project:
  hiding an API key, sharing data between visitors, or doing work the
  browser can't. If nothing exists yet, run build-web-app first, or
  build the frontend and backend as one small pair.
- Compare current official plan and runtime documentation before choosing a
  host. Serverless functions or a small Node server are both reasonable.
  Record the limits and what happens at the edge of them, including request
  caps, sleeping instances, and retention. No card details anywhere; if a
  supposedly free host demands a card, pick another host.
- Their accounts, their keys. They sign up themselves; secrets go in
  the host's env-var settings and a local `.env` that is gitignored
  before it is created. `git status` proves it.
- Two or three endpoints, no more. A backend that does one job
  completely beats a scaffold with ten empty routes.
- They run every deploy and every curl. You narrate what each command
  does in one line first.

## The path

1. Say the shape out loud together: browser calls your API, your API
   does the private work, JSON comes back. Draw it as three boxes if
   that helps. Then pick the two endpoints this project needs.
2. Hello endpoint, locally: one route returning JSON. Hit it with
   curl and with the browser so both feel the same.
3. Deploy that hello endpoint before writing anything else. Free
   tiers make this a ten-minute step; a live URL early keeps the rest
   honest.
4. Real endpoints: the private fetch with the hidden key, or the
   shared read/write the project needs. Env vars set in the host
   dashboard by them, mirrored in local `.env`.
5. Wire the frontend to it with `fetch`. Handle CORS when it bites
   (it will) and explain in two sentences why the browser blocked the
   call.
6. Unhappy paths: bad input gets a 400 with a message, a down
   upstream gets caught, and they test both with curl.

## Done

- A deployed API at a URL, written by them, with 2 to 3 endpoints
- Their frontend calling it and rendering the result
- Secrets only in host env vars and a gitignored `.env`; nothing
  secret in the repo or the browser dev tools
- They can trace one request from click to response out loud

Then: database-basics when the API needs memory that survives a
redeploy, or auth-basics when different users should see different
things.
