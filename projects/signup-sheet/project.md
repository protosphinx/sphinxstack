---
id: signup-sheet
level: 1
group: Apps & tools
name: A sign-up sheet that works
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a slot sign-up app used by a real group — live at {url}"
  college: "Built {project_name}, the sign-up sheet my {group} actually uses"
  freelance: "Builds small tools groups actually use — recent: {project_name} ({url})"
---

## Brief

A sign-up sheet for a real group you belong to: event slots, shifts,
study sessions, potluck dishes. Create a slot, claim a slot, see who
claimed what. Backed by a hosted JSON store or a minimal serverless
endpoint: this is the step past localStorage, because other people
need to see the same data.

## Personalize

- **The group and the occasion.** A club meeting, a team schedule, a
  family event within the next month. The sheet ships before the
  occasion and gets used at it: that sentence goes on your resume.
- **What a slot is.** Time slot, task, dish, seat? One slot type, done
  completely.

## Milestones

1. Model in the README: what is a slot, what is a claim, what happens
   when two people want the same slot.
2. Static slot list live at a URL.
3. Shared storage wired up: a claim made in one browser shows in
   another.
4. Claiming with a name; a claimed slot can be released.
5. The unhappy path: the slot race (two claims at once) resolves
   sensibly, and the sheet stays honest.
6. Real use by the group. Screenshot or link in the README. Final
   README.

## Done means

- Live URL responding; claims visible across devices
- Claim and release both work; the race case is handled
- Evidence of real use by your group in the README
- At least 10 commits across at least 7 distinct days, authored by you
- SESSIONS.md has an entry per session, written by you
