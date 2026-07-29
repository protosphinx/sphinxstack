---
id: chore-rotation-bot
level: 2
group: Automation & bots
name: The chore rotation bot
proves: [automate-a-task, use-an-api, backend-basics]
resume_line:
  job: "Built {bot_name}, a scheduled messaging bot managing a real household rotation — {n} weeks of on-time reminders, zero missed rotations"
  college: "Built {bot_name}, a bot that tells the right person in my house it's their chore day"
  freelance: "Builds scheduling and notification bots — recent: {bot_name}, a rotation bot a real household runs on"
---

## Brief

Whose week is it for dishes, trash, or driving is a recurring
argument in your house because the rotation lives in everyone's
memory. Build a bot that knows the rotation and messages the right
person on the right day. Use a platform your household already
reads with a free official bot API: Telegram bots are free and
simple, a Discord webhook works if your family server exists. The
bot posts under its own name in the shared chat, so everyone sees
whose turn it is. Rotation state lives in a file the bot updates,
and the schedule runs on GitHub Actions cron or Val Town (both
free).

## Personalize

- **Your household's real rotation.** The chores, the people, the
  swap rules ("Nadia is out Tuesdays"). Model what your house
  actually argues about, including the exceptions.
- **The chat they already read.** A reminder in a channel nobody
  opens is a reminder that does not exist. Ask the household where
  they want it before choosing a platform.
- **The household signs off.** They are your users. Show them the
  message format and the rotation order before the bot goes live,
  and again after the first week.

## Milestones

1. Write the rotation on paper and run it manually for one week:
   you send the reminder text yourself each day. Note every
   complaint about timing and wording.
2. Encode the rotation as data: people, chores, cadence,
   exceptions. A script prints today's assignment correctly for
   any date you feed it.
3. Create the bot (Telegram via BotFather, or a Discord webhook)
   and send one hand-triggered message to a private test chat.
4. Wire the rotation to the bot: one command sends today's real
   assignment. Token goes in an env var.
5. Schedule it. Confirm the timezone math: the message must land at
   the agreed local hour.
6. Add state: the bot records what it sent, so a rerun on the same
   day never double-pings.
7. Go live in the household chat with the household's blessing.
   First week: watch, collect complaints, adjust wording and
   timing.
8. Add the swap feature your house needs most (skip a day, trade a
   week), triggered by a command anyone in the chat can send.
9. Two more weeks unattended. README: the rotation model, setup,
   and what the house says about it now.

## Done means

- The bot has messaged the household on schedule, unattended, for
  at least two weeks
- Its send log matches the messages visible in the chat
- The rotation argument is measurably gone: the household confirms,
  and missed chores since launch are countable on one hand
- The bot speaks only as itself, in the shared chat everyone can
  see; it never sends as you
- Bot token lives in an env var or repo secret, not in the repo
- At least one real swap or skip was handled by the bot, not by a
  human editing files
