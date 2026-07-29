---
id: quote-wall
level: 1
name: The quote wall
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, a quote archive app for my friend group — live at {url}"
  college: "Built {project_name}, the searchable archive of things my friends said"
  freelance: "Builds small archives people revisit — recent: {project_name} ({url})"
---

## Brief

An archive of funny things your friends and family have said, each
quote dated and attributed, with a random-quote button that makes
the group chat resurface old ones. Add a quote the moment it
happens, browse by person, and hit random when the group needs a
laugh. Quotes persist across reloads (localStorage is fine). Ask
each person before their quotes go up.

## Personalize

- **The founding quotes.** Seed it with the ten lines your group
  already repeats. If a quote needs a paragraph of context, give it
  a context field.
- **The consent pass.** Message each person whose quotes you want
  to include and record their yes. Someone will say no; respect it,
  and note in the README that the consent step is part of the
  design.
- **The people.** Your friends and family by name, with a per-person
  page so the group can settle who is funniest by count.

## Milestones

1. Model in the README: what is a quote (text, who, date, context),
   and what the wall shows when it is empty.
2. Hardcoded seed quotes on a page, deployed. Ugly is fine.
3. Add, edit, and delete quotes in the browser; quotes survive a
   reload; empty state designed.
4. The random button, weighted so recent additions do not drown the
   classics.
5. Filter by person, with per-person counts.
6. Share the URL with the group and log a week of additions. Final
   README with the consent list and what the group did with it.

## Done means

- Live URL responding; quotes survive a reload
- Add, edit, delete all work; empty state is designed
- Random and filter-by-person both work
- Every quoted person said yes, and the README records it
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
