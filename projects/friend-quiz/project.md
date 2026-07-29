---
id: friend-quiz
level: 1
name: How well do you know me
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a quiz app my friend group actually took — live at {url}"
  college: "Built {project_name}, a quiz about my friend group, taken by the group"
  freelance: "Builds shareable interactive pages — recent: {project_name} ({url})"
---

## Brief

A quiz about you or your friend group: real questions with one
right answer each, a score at the end, and a results screen worth
screenshotting back to the group chat. Multiple choice keeps it
honest to grade. The whole point is the moment you send the link
and watch people who claim to know you score four out of ten.

## Personalize

- **The questions.** Ten from your own life with verifiable
  answers: your actual fear, your first concert, the name of your
  childhood dog. If you would have to think about the answer, it
  is a good question.
- **The wrong answers.** Distractors are the craft. Each question
  gets plausible wrong options drawn from the same life ("which of
  these four pizza orders is mine").
- **The score tiers.** Write the end-screen verdicts in your own
  voice for each score band, from "do we even talk" to "okay, you
  know me". The screenshot people share is this screen; design it.

## Milestones

1. Questions, options, and answer key in the README before code,
   plus the score-tier copy.
2. One question answerable with right/wrong feedback, deployed.
   Ugly is fine.
3. The full quiz flow: all questions in sequence, running score,
   final screen with tier verdict.
4. Polish the final screen until a phone screenshot of it looks
   share-worthy; questions load from a data file so editing needs
   no code changes.
5. Refresh-proofing: a reload mid-quiz resumes rather than
   restarts, and a finished result can be revisited.
6. Send it to the group chat. Collect the scores people report,
   put the leaderboard in the README, and fix the question
   everyone disputed. Final README.

## Done means

- Live URL responding; a mid-quiz reload resumes
- All questions grade correctly against the README answer key
- The final screen shows score and tier and survives revisits
- At least five people took it, and the README records their
  scores
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
