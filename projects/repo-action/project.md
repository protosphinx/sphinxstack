---
id: repo-action
level: 2
group: Automation & bots
name: A GitHub Action that does a real job in your repo
proves: [automate-a-task, ship-on-github]
resume_line:
  job: "Built CI automation for {repo_name} — a GitHub Action that {job}, running on every push for {n} weeks"
  college: "Built a GitHub Action that {job} in my {repo_name} repo automatically"
  freelance: "Builds CI/CD automation — recent: an Action that {job}, zero manual runs since"
---

## Brief

Pick something you do by hand in one of your existing repos every
time you touch it: checking that the links in the README still
work, regenerating a stats table from a data file, compressing
images before commit, validating that a JSON file still parses.
Build a GitHub Action that does it for you, on push or on a
schedule. Actions minutes are free on public repos, so the whole
project costs nothing. The point is a robot teammate for a repo you
already care about, so the automation gets exercised by your real
commits.

## Personalize

- **A repo you actually push to.** The Action must live in a repo
  with ongoing commits, yours or one you maintain with friends. An
  Action in a dead repo never runs, so it never proves anything.
- **A chore you have really done twice.** Look at your last ten
  commits for the manual step you repeated. That step is the spec.
- **Fail or fix, your choice.** Decide whether the Action blocks bad
  pushes (a check that fails) or repairs them (a commit that fixes).
  Both are real; pick the one your chore needs.

## Milestones

1. Do the chore by hand one more time and write down every step and
   how long it took. That is the baseline.
2. Script the chore so one local command does the whole thing.
   Run it against the repo's history to make sure it behaves on
   real past states, ugly ones included.
3. Wrap the script in a workflow file triggered manually
   (workflow_dispatch). Run it from the Actions tab and read the
   logs.
4. Switch the trigger to the real event: push, pull request, or
   cron, whichever matches the chore.
5. Make failure useful: when the Action fails, the log says exactly
   what is wrong and where, in your words.
6. If the Action writes changes back, scope its permissions to the
   minimum and make the bot commit clearly labeled as automated.
7. Break the repo on purpose (a dead link, an invalid JSON edit)
   and confirm the Action catches it.
8. Let it ride your normal commits for two weeks without manual
   runs.
9. README badge plus a short section: what the Action does and what
   the repo looked like before it existed.

## Done means

- The Action has run on real pushes, unattended, for at least two
  weeks
- The Actions history shows both passes and at least one genuine
  catch or fix
- The manual chore is gone from your workflow
- Any tokens use the built-in GITHUB_TOKEN with minimal
  permissions; nothing secret is hardcoded
- A deliberate bad commit fails visibly with a readable message
- Automated commits, if any, are clearly labeled as coming from the
  Action
