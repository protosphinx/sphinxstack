---
id: club-election
level: 2
group: Bigger builds
name: A club election people can trust
proves: [build-web-app, auth-basics, backend-basics]
resume_line:
  job: "Built {project_name}, an election system with authenticated one-person-one-vote integrity — live at {url}"
  college: "Built {project_name}, the voting system that ran my {club}'s real officer election"
  freelance: "Builds voting and polling tools with verifiable integrity — recent: {project_name} ({url})"
---

## Brief

An election system for a real vote your club actually needs to hold:
officers, a budget priority, next semester's event. The hard part is
integrity: every eligible member votes at most once, nobody can see
who voted for what, and the count is checkable afterwards. Voters
sign in through a one-time link emailed to the club roster; your own
small backend (Render or Railway free tier) enforces the one-vote
rule and stores ballots in hosted Postgres (Neon or Supabase free
tier) separated from voter identity. The frontend deploys free on
Netlify or Vercel.

## Personalize

- **The vote.** A real decision with a real date, agreed with the
  club's current leadership. A fake election proves nothing.
- **The roster.** The actual eligible-member list, obtained with the
  club's permission. Decide with them who counts as eligible before
  you code the check.
- **The secrecy promise.** Write in plain language on the ballot
  page exactly what is stored and what can never be looked up, then
  make the schema keep that promise.

## Milestones

1. README first: the threat list (voting twice, voting for someone
   else, peeking at ballots, disputing the count) and your design
   answer to each.
2. Backend and database deployed: roster table, ballots table, and
   the schema decision that separates identity from ballot content.
3. Ballot page live by end of week one at a real URL, in demo mode
   against a fake election.
4. One-time voting links: each roster member gets a unique link
   that works once; a used or invalid link fails with a clear
   message.
5. The one-vote rule enforced in the backend inside a transaction;
   prove a double-submit and a replayed link both bounce.
6. Results page that unlocks only when the election closes, with
   turnout shown next to the tally.
7. Audit view: anyone can see how many voted and verify totals sum,
   with no path from any ballot back to a name.
8. A dry-run vote with three friends trying honestly to cheat;
   write down what they tried and what stopped them.
9. The real election, run live. Results announced from your site.
   Final README documents the design and the dry-run findings.

## Done means

- Live URL; a real club election was actually run on it
- Every eligible member could vote exactly once; a second attempt
  visibly fails
- Stored ballots cannot be joined back to voter identity, and the
  README explains why
- Results stayed hidden until close; the tally matched turnout
- The dry-run cheating session and its outcomes are documented
- Roster handled with club permission and deleted after the
  election; no secrets committed
- At least 20 commits across at least 12 distinct days;
  SESSIONS.md has an entry per session, written by you
