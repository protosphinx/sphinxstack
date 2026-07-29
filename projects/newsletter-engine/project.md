---
id: newsletter-engine
level: 3
group: Bigger builds
name: A newsletter platform with real subscribers
proves: [backend-basics, database-basics, use-an-api, ship-on-github]
resume_line:
  job: "Built {project_name}, a newsletter platform (double opt-in subscriptions, send pipeline via an email API, public archive) serving {n} real subscribers — {url}"
  college: "Built {project_name}, the platform that publishes and delivers my {group}'s newsletter"
  freelance: "Builds owned publishing infrastructure for small communities — recent: {project_name} ({url})"
---

## Brief

A publishing platform for a newsletter a real group already wants:
your neighborhood association's monthly update, your club's weekly
recap, the scout troop's announcements. Subscribers sign up on a
public page and confirm by email, an editor writes issues in an
admin view, sending goes out through an email API, and every past
issue lives in a public archive. This is the infrastructure under a
newsletter rather than one issue of it. Honest architecture: a
backend on Fly.io or Render's free tier, free Postgres on Neon, and
Resend's free tier for delivery (100 emails a day, 3,000 a month,
so a big list sends in daily batches). The real users are actual
subscribers who did not have to be you.

## Personalize

- **The newsletter and its editor.** Best case: the editor is
  someone else (the association secretary, the club president) and
  you run the platform. If you are also the editor, recruit a
  second writer so the admin tools face a real user.
- **Who signs off.** Whoever owns the group's name and any
  existing list. Existing addresses are never imported without
  each person re-consenting; the honest path is inviting them to
  the signup page.
- **The cadence.** Weekly or monthly, agreed in advance. The
  platform must survive at least three real issues on schedule.
- **The launch moment.** Issue one leaving your pipeline to people
  who subscribed themselves.

## Milestones

1. Week 1: agree scope with the group's owner in writing: name,
   cadence, who edits, and the no-import rule for old lists.
2. Week 1: repo, README data model: subscriber with status
   (pending, confirmed, unsubscribed), issue with draft and sent
   states, delivery log per send.
3. Week 1: walking skeleton deployed. Signup form writes a
   pending subscriber to Postgres; a bare archive page renders one
   seeded issue; live URL. API keys in host environment variables,
   never in the repo.
4. Week 2: double opt-in. Confirmation email through the API with
   a tokenized link; only confirmed addresses ever get an issue.
5. Week 2: unsubscribe: one click from a link in every email
   footer, immediate, no login, no guilt screen.
6. Week 2: the editor view behind auth: write in Markdown,
   preview as the email will render, save drafts.
7. Week 3: the send pipeline: send a test to yourself, then send
   to confirmed subscribers in batches inside the API's daily
   cap, recording per-recipient success or failure in the
   delivery log. A finished send flips the issue to sent and into
   the archive.
8. Week 3: failure handling: a send interrupted halfway resumes
   without double-sending anyone. Prove it by killing the process
   mid-send against a test list.
9. Week 3: pilot issue to a seed list of 5 people who signed
   themselves up. Fix rendering across at least Gmail and one
   other client.
10. Week 4: real launch: the group announces the signup page,
    subscribers arrive, issue one goes out on schedule.
11. Week 4 and after: issues two and three ship on cadence,
    written by the editor without you touching the pipeline.
12. Week 4: postmortem: deliverability surprises, what the editor
    fought with, and the delivery-log numbers issue by issue.

## Done means

- Live URL with signup and a public archive of at least 3 sent
  issues
- At least 25 confirmed subscribers who each completed double
  opt-in themselves
- Unsubscribe works from the email footer instantly, and an
  unsubscribed address provably never receives the next issue
- The delivery log accounts for every recipient of every send,
  and no one has ever been double-sent
- Editor view unreachable without login, verified logged out
- Owner sign-off in writing; zero imported addresses
- No secrets in git history
- A postmortem in the repo, written by you
