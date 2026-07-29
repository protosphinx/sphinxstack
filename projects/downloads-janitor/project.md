---
id: downloads-janitor
level: 2
group: Automation & bots
name: A janitor for your downloads folder
proves: [automate-a-task, ship-on-github]
resume_line:
  job: "Built {project_name}, a scheduled file-organization tool with dry-run mode and full audit logging — has sorted {n} files unattended"
  college: "Built {project_name}, a script that keeps my downloads folder sorted automatically"
  freelance: "Builds filesystem automation — recent: {project_name}, a rules-based file organizer with audit logs"
---

## Brief

Your downloads folder (or camera roll export, or desktop) is a
landfill you excavate by hand every few weeks. Write a script that
sorts it by rules you define: screenshots to one folder, PDFs by
course, installers to a quarantine folder for later review. It
moves files and logs every move; it deletes nothing, ever. Run it
on your own machine on a schedule with the tools already installed
there: cron or launchd on macOS and Linux, Task Scheduler on
Windows. Everything is free because everything is local.

## Personalize

- **Your actual mess.** Before writing rules, count the folder:
  how many files, what extensions, how old. The counts go in the
  README as the before picture.
- **Rules from real files.** Every rule must be justified by files
  that exist right now. A rule for a file type you do not have is
  dead code.
- **Your machine's scheduler.** Learn the one your OS ships with
  instead of installing something new for this.

## Milestones

1. Inventory the mess: a small script that counts files by
   extension and age and prints a table. Commit the table.
2. Write the rules as data (a small config file), not as scattered
   if-statements, so adding a rule never means rewriting logic.
3. Build dry-run mode first: the script prints every move it would
   make and touches nothing. Read the whole plan and fix the rules
   it gets wrong.
4. Execute for real on a copy of the folder. Diff the result
   against what dry-run promised.
5. Add the log: every run appends what moved where and when, to a
   file the script never truncates.
6. Add the undo file: each run writes a reversal script that puts
   everything back. Test it once.
7. Run it for real on the real folder. Live with the result for a
   few days before automating.
8. Schedule it daily or weekly with your OS scheduler. Confirm from
   the log that it ran while you were not watching.
9. Two weeks unattended. README gets the after picture: the same
   count table, rerun.

## Done means

- The script has run on schedule, unattended, for at least two
  weeks, proven by its own log
- Before and after inventory tables show the mess is measurably
  gone
- Dry-run mode exists and is the documented first step for any rule
  change
- The script moves and never deletes; the undo file restores any
  run
- Every run is fully reconstructable from the log
- The repo contains the script and config; no personal file
  contents or private paths you would not want public
