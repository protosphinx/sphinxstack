---
id: discord-server-bot
level: 2
group: Automation & bots
name: A bot your Discord server actually uses
proves: [automate-a-task, use-an-api, backend-basics]
resume_line:
  job: "Built and operate {bot_name}, a Discord bot serving a {n}-member community — {feature} with zero manual intervention"
  college: "Built {bot_name}, a Discord bot my server uses daily for {feature}"
  freelance: "Builds and hosts Discord bots — {bot_name} runs {feature} for a live community"
---

## Brief

Some job in your Discord server is still done by a human: giving
newcomers the right role, reminding everyone about game night,
keeping a leaderboard for the running joke. Build a bot that does
that one job, using the official Discord API (free) and slash
commands. Host it somewhere that stays up when your laptop closes:
Val Town or the Cloudflare Workers free tier both handle
interaction-endpoint bots at no cost. The bot posts under its own
name and never pretends to be you.

## Personalize

- **Your server, not a demo server.** The bot ships to a server with
  real people in it who did not build the bot. If you are not in one,
  a family or friend-group server counts; a server of one does not.
- **The job comes from a complaint.** Ask the server what they are
  sick of doing manually, or watch for a week and pick the thing a
  mod does most often. Write the complaint down before writing code.
- **One job done completely.** Role assignment with every edge case
  beats five half-commands nobody trusts.

## Milestones

1. Do the job by hand for three days. Log every time it comes up and
   exactly what the human did. This log is your spec.
2. Register the application in the Discord developer portal, invite
   the bot to a private test server, get it responding to one slash
   command locally.
3. Build the real feature against the test server. Handle the wrong
   inputs your log says people actually send.
4. Add rate-limit handling: back off when Discord says 429, never
   retry in a tight loop.
5. Deploy to Val Town or Cloudflare Workers. Token lives in an env
   var, never in the repo.
6. Invite the bot to the real server. Announce what it does and how
   to use it in one pinned message.
7. Watch a week of real usage. Fix what real members break.
8. Add logging you can read later: every command, who ran it, what
   happened.
9. Write the README: what the bot does, how to run it, what you
   would build next.

## Done means

- The bot has run unattended in the real server for at least a week
- Logs show real members (other than you) using it
- The chore is measurably gone: the mod who used to do it confirms
- Bot token and secrets are in env vars; the repo has none
- The bot identifies itself as a bot and posts only under its own
  name
- README documents setup well enough that a stranger could host it
