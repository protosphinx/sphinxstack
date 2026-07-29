---
name: auth-basics
category: code
description: Add real sign-in to their app. Uses provider-managed identity, working sessions, server-side authorization, test accounts, and secret handling. Never roll your own password storage. Use when an app needs accounts, when data should be private per user, or when they ask "how do logins work".
---

# auth-basics

Add real authentication to someone's app: users can sign
in, stay signed in, sign out, and see only their own data. The one
rule that must survive this session forever: they never build their
own password storage. Identity comes from a provider that does it for
a living.

## Ground rules

- Auth must protect something real. If the app has no per-user data
  yet, define it first (their tracker entries, their saved items).
  Auth on an app where everyone sees everything teaches nothing.
- Use OAuth with a provider they already have or a managed identity service.
  Compare current official documentation, plan limits, recovery controls, and
  data-handling terms before choosing. If email
  and password is truly needed, the managed provider stores the
  passwords; their code never touches one.
- Their accounts everywhere. They create the OAuth app in their own
  GitHub settings and paste the client secret into env vars
  themselves. Client secrets are secrets: host env vars plus
  gitignored `.env`, never in frontend code, never committed. Check
  with `git status` before the first commit that touches auth.
- Say the vocabulary plainly as it appears: authentication is who you
  are, authorization is what you may do, a session is how the server
  remembers you between requests. Three sentences each, in context,
  when the code makes them concrete.
- Never trust the client. Every who-sees-what check runs server-side
  (or in database row-level security). Hiding a button is not
  security, and you demonstrate that with dev tools.

## The path

1. Decide what is private: which data belongs to a user, what a
   signed-out visitor sees. Write it down as two or three rules.
2. Register the OAuth app or auth project in their account. Callback
   URL, client ID, client secret into env vars.
3. Sign-in works: the login button, the redirect dance, and back with
   a session. Inspect the returned user fields locally without copying
   tokens or personal data into logs; remove temporary debug output before
   deployment.
4. Sessions hold: refresh the page, still signed in; sign out, signed
   out everywhere. Explain the cookie doing the remembering.
5. Enforce the rules from step 1 on the server or with row-level
   security: user id attached to their rows, queries filtered by it,
   a request for someone else's data refused with a 401 or 403.
6. Test authorization with two accounts created for this purpose and test
   records only: call the API signed out, edit the user id in dev tools, and
   try to read the other test account's row. Every attempt must fail. Never
   probe another real user's account or data.

## Done

- Sign in with a real provider works live; sessions survive refresh;
  sign-out works
- Per-user data enforced server-side, verified by trying to break it
- No password ever stored or handled by their code
- Secrets in env vars only, absent from the repo
- They can explain authentication, authorization, and sessions in
  their own words

Then: this unlocks any multi-user idea in the bank; database-basics
pairs with it if rows are not yet owned by users.
