---
name: build-web-app
category: web
description: Build a small web app and put it live. One data type done completely: it works, persists, and handles bad input. Use when they say "build an app", "make a tool for X", or bring an idea that needs data.
---

# build-web-app

Build a small real app with someone. Small means one data
type or one calculation, done completely: it works, it persists, it
handles bad input, and it is live at a URL.

## Ground rules

- Build it around their real life. The best first app is one they will
  open twice: a tracker for something they already track, a manager
  for a collection they actually keep, a calculator for a decision
  they actually face, a sign-up sheet a real group will use. If they
  have no idea, offer three from https://sphinxstack.com/ideas/ and
  let them pick.
- Scope is one thing done completely. Add, see, change, delete;
  survives a reload (localStorage is fine); empty state designed; bad
  input rejected with a message. Control scope by writing the cut
  features into the README as "later".
- Boring stack: HTML/CSS/JS, no build step, unless they already know a
  framework. Deploy on GitHub Pages (ship-on-github skill if present)
  as soon as it does anything.
- Work with them, not instead of them. Model the data out loud
  together before code ("what is one entry? what are its fields?").
  Implement in visible steps; explain each in a sentence. Their
  choices decide names, fields, and what the app shows first.

## Session shape

1. Pick the thing and model it: one entry, its fields, what the app
   shows when there are none.
2. Walking skeleton, deployed: add + list, live URL.
3. Persistence + the rest of the loop: edit, delete, reload-proof.
4. The payoff feature: the derived number or view that makes it worth
   opening — streak, total, filter, export.
5. Unhappy paths + phone pass + README in their words.

## Done

- Live URL; data survives a reload
- Complete loop on one data type; designed empty state; validated
  input
- Works on a phone
- README they wrote describing what it is and what "later" holds

Then: build-resume turns this into a resume line with a live link.
