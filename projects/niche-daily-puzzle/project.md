---
id: niche-daily-puzzle
level: 2
group: Games
name: A daily puzzle over your niche's vocabulary
proves: [build-a-game, build-web-app]
resume_line:
  job: "Built {project_name}, a daily word game with a shareable result — live at {url}"
  college: "Built {project_name}, a daily puzzle my group chat plays every morning"
  freelance: "Builds daily-habit web games — recent: {project_name} ({url})"
---

## Brief

A wordle-like guessing game where every answer comes from the
vocabulary of your niche: climbing holds, fishing lures, K-pop groups,
chess openings, whatever your group chat already argues about. One
puzzle per day, the same for every visitor, seeded from the date so
tomorrow's puzzle exists without you touching anything. After a win or
a loss the player gets a spoiler-free emoji grid to paste into the
chat. Finished means the daily rollover works unattended, streaks
persist, and your people are comparing grids in the morning.

## Personalize

- **Your word list.** At least 100 terms from your niche, in a data
  file, filtered by you: consistent length range, no term you could
  not defend to an annoyed player who just lost on it.
- **Your feedback rule.** Copy letter-by-letter coloring, or invent a
  rule that fits your niche better (close in category, right era,
  same team). Write the rule in the help overlay in one sentence.
- **Your chat.** Name the group chat this ships to. That chat is your
  playtest panel and your retention metric.

## Milestones

1. Word list built and committed: 100+ terms, junk filtered, with a
   README note on what you cut and why.
2. Core guess loop on one hardcoded answer: type a guess, get
   feedback, win or run out of guesses.
3. Loss state that lands: out of guesses shows the answer and a
   countdown to the next puzzle.
4. Daily seed: the date maps deterministically to an answer, so every
   visitor gets the same puzzle and midnight rolls it over with zero
   action from you.
5. End of week one: the daily loop is deployed and you played that
   day's puzzle yourself on your phone.
6. Share button: copies an emoji grid with the day number and guess
   count, no letters, no spoilers. Paste it into a chat and check it
   looks right.
7. Streak and win stats in localStorage, shown after each game.
8. First-visit help overlay: rules in three sentences for someone who
   has never played a game like this.
9. Drop it in the group chat and say nothing else. For three days,
   collect grids and complaints.
10. Fix what the chat surfaced: usually two or three unfair words and
    one confusing feedback case. Ship the fixed list.

## Done means

- Live URL; the puzzle changes at midnight without a redeploy, verified
  across at least two rollovers
- Every visitor gets the same puzzle on the same day
- Share result pastes cleanly into a chat and spoils nothing
- Streak and stats survive a reload
- At least 5 real people from your named chat played on 3 or more
  days, and their feedback changed the word list or the rules
- At least 15 commits across at least 10 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
