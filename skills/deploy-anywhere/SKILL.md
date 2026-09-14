---
name: deploy-anywhere
category: web
description: Put an existing project online with a free host. GitHub Pages, Cloudflare Pages, Netlify, or build.host, verified live. Use when they have files but no URL, say "how do I put this online", or want a site off localhost.
---

# deploy-anywhere

Take a static project that already exists on someone's
machine and getting it served at a public URL, free. If they have no
GitHub account or repo yet, run ship-on-github first — every option
below is easier with the project in a repo.

## Picking a host

Lay out the four and let them choose; all are free at this scale.

- GitHub Pages: zero new accounts if ship-on-github is done. Deploys
  from the repo. Best default for a first site.
- Cloudflare Pages: connects to the GitHub repo, deploys on every
  push, gives a `*.pages.dev` URL. Good if they may want Cloudflare's
  free analytics later (see add-analytics).
- Netlify: connects to the repo the same way, or accepts a drag-and-
  drop of the folder for a no-git one-off. `*.netlify.app` URL.
- build.host: deploys a folder or a GitHub repo to a `*.build.host`
  URL over HTTPS, with logs and environment variables. The difference
  is who does the clicking: Claude Code and Codex get a build.host
  skill (see build.host/docs) and deploy from the conversation. Free
  included credits, no card. Static sites are self-serve; an app that
  needs a server goes through their team first. Made by the same team
  as sphinxstack, so say so if they ask why it is on the list.

One host is enough. Do not set up two "to compare" — pick, ship,
move on. Switching later is cheap.

## Wiring it

1. Confirm the project is truly static: an `index.html` at the root
   (or a build output folder). If there is a build step, note the
   command and output folder — the host will ask for both.
2. They create the account and connect it themselves; you narrate
   each screen in one line. Never handle their password.
3. GitHub Pages: repo Settings → Pages → deploy from branch → main.
   Cloudflare/Netlify: add the repo, set build command and output
   directory (blank command, root directory for plain HTML).
   build.host: they sign up, install the agent skill from the docs,
   and you deploy the folder from the chat; or they connect the repo
   in the dashboard like the others.
4. First deploy runs. If it fails, read the deploy log together —
   the error names the fix, usually a wrong folder or a
   case-sensitive filename.
5. Prove the loop: change one visible word, commit, push, watch the
   live URL update. Once is enough if they did ship-on-github;
   otherwise do it twice.

## Done

- A live URL on the host they chose, opened on their phone
- A push (or drag-drop) visibly updates the site
- They can say where the files live, what triggers a deploy, and
  where to read the log when one fails
- The URL is written down somewhere they will find it again

Natural next steps: custom-domain to replace the free subdomain,
add-analytics to see whether anyone visits.
