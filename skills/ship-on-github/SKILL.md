---
name: ship-on-github
category: web
description: Get the person shipping on GitHub. Account, git on their machine, a first repo, and Pages serving a URL. Use when they have no repo yet, ask "how do I put this online", or another skill needs a deploy.
---

# ship-on-github

Get someone onto GitHub properly: account, git that works
on their machine, a first repo, and GitHub Pages serving it at a URL.
Every other sphinxstack skill assumes this one is in place.

## Ground rules

- Their account, their name on the work. Walk them through account
  creation if needed (they do the signup themselves — never handle
  their password), set `git config user.name` / `user.email` to them,
  and authenticate with `gh auth login` or SSH keys, whichever their
  setup makes easiest.
- They run the commands. You say what to type and what it will do in
  one line; they type it. Fix errors together as they happen — error
  messages are the curriculum.
- Commit small and commit now. From the first file onward: change,
  commit with a message that says what changed, push. Make the rhythm
  automatic before it matters.
- No history rewriting, no force pushes, no committing as anyone but
  them.

## The path

1. Account exists, `git` and (ideally) `gh` installed and
   authenticated. Verify with `gh auth status` or an SSH test.
2. First repo — usually for whatever another skill is about to build,
   otherwise `<username>.github.io`. Create, clone, first commit,
   push.
3. GitHub Pages on: serve from the main branch, confirm the URL loads.
   Explain the mapping (repo → URL) in two sentences.
4. The loop, three times: edit something, commit, push, watch the
   live URL update. After the third round they own the loop.

## Done

- `git` and auth working on their machine, identity set to them
- One repo with 3+ commits in their own words
- A live GitHub Pages URL they can open on their phone
- They can say what commit, push, and deploy each mean in their own
  words

Hand back to whichever skill sent you here, or suggest build-website
/ build-web-app to put the loop to work.
