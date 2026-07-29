---
name: build-a-game
category: code
description: Build a playable browser game and ship it at a URL. A real loop, input, state, collision or rules, a juice pass, and friends actually playing it. Use when they say "I want to make a game", bring a game idea, or want a project that is fun to show people.
---

# build-a-game

Make a small browser game with someone, playable at a URL
they can text to a friend. A game teaches the update loop, input
handling, and state faster than any other project because every bug
is visible and every fix is felt. Keep the design tiny and finish it.

## Ground rules

- One mechanic, finished. Dodge the falling things, jump the gaps,
  match the pairs, type the words in time, outgrow the snake. They
  pick the fantasy (theme, character, what the dots represent); you
  hold the line on scope. A clone with their twist beats an original
  epic that never becomes playable.
- Canvas and plain JavaScript by default: one HTML file, one script,
  `requestAnimationFrame`. A library like Kaplay or Phaser only if
  they ask for one, and then the free CDN build. No engine downloads,
  no paid assets; art is rectangles and emoji until the game is fun,
  and free assets (Kenney.nl, their own drawings) only after.
- Fun before features. Playtest every few minutes; when something
  feels bad (too fast, unfair, mushy) tune the number then and there.
  Tuning constants live at the top of the file with names.
- Deploy the first playable moment (ship-on-github if needed) and
  redeploy often. Friends playing an ugly early build is worth more
  than a polished build nobody has touched.

## The path

1. Choose the mechanic and say the loop aloud: every frame, what
   moves, what the player controls, what ends the run. Sketch the
   states: playing, dead, restart.
2. Something moves: canvas up, one shape animating via the frame
   loop. Explain delta time in two sentences and use it, so the game
   runs the same speed on any machine.
3. Player control: keyboard or touch moves their thing. Feel check:
   is moving around already slightly fun? If not, tune until it is.
4. Stakes: the collision or rule check, a fail state, a score, and
   restart without reloading the page. Now it is a game; deploy it.
5. Juice pass: score on screen, a little screen shake or flash on
   hit, a sound effect or two (their own recorded blips count),
   difficulty that ramps. Each addition playtested immediately.
6. Real playtest: they hand the URL to at least one friend and watch
   the first play in person or over chat. Confusion observed there
   (unclear controls, unfair start) drives the last round of fixes.
   Phone check: if input is keyboard-only, say so on screen.

## Done

- A game at a live URL with a full loop: start, play, fail, restart
- One mechanic that is actually fun for a minute, tuned by playtests
- Score or progress visible; at least two pieces of juice
- Played by someone other than them, with one fix made because of it
- They can explain the frame loop and game state in their own words

Then: build-resume, since a shipped game with playtest iterations is
a strong line, or a second mechanic in a sequel repo if they are
hooked.
