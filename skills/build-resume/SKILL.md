---
name: build-resume
category: resume
description: Build a one-page resume from what the person has done. Nothing invented; prints to PDF, optionally deployed at a live URL. Use when they say "build my resume", "make my resume", or want to update it.
---

# build-resume

Build a resume for someone young — likely a student or
recent graduate with little or no work history. Your job is to find
what is real, shape it into one strong page, and ship it as a file
they can send and a page they can link.

## Rule zero: nothing invented

Every line on the resume must trace to something the person told you
or something you found in their accounts. Never fabricate employers,
dates, titles, tools, or metrics. If a section would be empty, leave
it out — a short true resume beats a padded one. If they ask you to
make something up, refuse and offer to build the missing piece for
real instead (see "Thin resume?" below).

## Gather

Interview briefly, in plain questions, a few at a time:

- What is this resume for? A specific job posting, college
  applications, internships, freelance clients? Get the actual posting
  or program if one exists — it drives the wording.
- Contact basics: name, city, email, GitHub/portfolio links.
- Education: school, expected graduation, relevant coursework only if
  it is actually relevant, GPA only if they want it shown.
- Work of any kind: jobs, babysitting, family business shifts, volunteer
  work, team roles. Informal counts; get what they actually did there.
- Projects: anything built, organized, published, or shipped.

If they have a GitHub account, look at it (with `gh` if available,
otherwise ask them to list repos): pick out repos with real content,
live deployments, or sustained history. Ask which ones they consider
theirs to claim, and what each one actually is.

## Shape

- One page. Sections in whatever order makes them look strongest —
  for most young people that is Projects first, then Experience, then
  Education, then Skills.
- Every project line: what it is, what it is built with, and a live
  URL or repo link if one exists. Lines with links outrank lines
  without.
- Verbs that state facts, not aspiration: built, shipped, ran,
  organized, taught. Cut every adjective that a stranger could not
  verify.
- Skills section lists only things evidenced elsewhere on the page or
  defensible in an interview. No word clouds.
- Match vocabulary to the target: if there is a posting, use its
  nouns where honest.

## Ship

1. Write the resume as a single self-contained `resume.html`: clean
   typography, black on white, no photo, no columns that break ATS
   parsing, `@media print` CSS so browser print produces a correct
   one-page PDF.
2. Have them read every line and confirm it is true. Edit until they
   would say each line out loud to an interviewer.
3. Print-to-PDF for the sendable file.
4. Offer to deploy: a GitHub Pages repo (`resume` or their username
   site) so the resume has a URL. If they have the ship-on-github
   skill, use it.

## Done

- A one-page resume that prints cleanly to PDF
- Every line true, confirmed out loud by the person
- Optionally live at a URL they can link from applications
- A file they can send tonight

## Thin resume?

If gathering turns up almost nothing, say so honestly and offer the
real fix: build something. Suggest a project from
https://sphinxstack.com/ideas/ (fetch it if you can), sized to a week.
The resume gets rebuilt after — with a project line that has a live
link. Do not pad; build.
