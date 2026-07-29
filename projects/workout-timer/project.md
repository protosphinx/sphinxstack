---
id: workout-timer
level: 1
name: Workout timer for your routine
group: Apps & tools
proves: [build-web-app]
resume_line:
  job: "Built {project_name}, an interval timer for my training routine — live at {url}"
  college: "Built {project_name}, the timer I run my workouts with"
  freelance: "Builds tools for physical-world use — recent: {project_name} ({url})"
---

## Brief

An interval timer with your own routine hardcoded first and
editable second: your sets, your work intervals, your rest lengths.
Big numbers readable from the floor, a loud beep at each
transition, and controls big enough to hit with a sweaty thumb on a
phone. The routine persists across reloads (localStorage is fine).

## Personalize

- **Your routine, exactly.** The circuit or set scheme you did last
  week, with its real rest times. If you rest 90 seconds between
  sets, the default is 90, not 60.
- **The floor test.** Every design decision gets checked from where
  you train: phone on the ground, you mid-exercise, one glance to
  know where you are. Font sizes and colors answer to that test.
- **The sound.** Pick a beep you can hear over your own music and
  make the last three seconds count down audibly so you never watch
  the screen.

## Milestones

1. Write your routine in the README as data: exercises, durations,
   rests, rounds. That structure becomes the app's model.
2. A timer that runs your hardcoded routine start to finish with
   pause and reset, deployed. Ugly is fine.
3. The beep, plus the big-number display that passes the floor
   test.
4. Edit mode: change durations and add or remove exercises in the
   browser; the routine survives a reload; empty state designed.
5. Edge cases: screen staying awake during a session, a paused
   timer surviving an accidental reload, zero-length rests skipped
   cleanly.
6. Train with it for a week. Final README with what you changed
   after real workouts.

## Done means

- Live URL responding; the routine survives a reload
- A full session runs hands-free with audible transitions
- Editing works; empty state is designed
- You trained with it for at least a week, noted in the README
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
