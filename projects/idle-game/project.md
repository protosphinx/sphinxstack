---
id: idle-game
level: 2
group: Games
name: An idle game that respects the player
proves: [build-a-game, build-web-app]
resume_line:
  job: "Built {project_name}, an incremental game with persistent saves — live at {url}"
  college: "Built {project_name}, an idle game my friends kept open in a tab for weeks"
  freelance: "Builds stateful browser games — recent: {project_name} ({url})"
---

## Brief

An incremental game where a number goes up: pick a resource from your
life (loaves baked, laps swum, posters printed) and let the player
click for it, then buy generators that produce it automatically, then
buy upgrades that multiply the generators. The craft is in the curves:
each next purchase should be visible and slightly out of reach.
Saves are the real engineering: state autosaves, loads on return,
grants honest offline progress, and can be exported and imported as a
string. Finished means a run has an ending you designed, and no dark
patterns anywhere.

## Personalize

- **Your resource.** The thing being generated is from your world,
  with tier names only your people would write: the bakery empire, the
  swim team gone industrial. Naming ten tiers is half the fun.
- **Your ending.** Decide what "done" is before building: a final
  purchase, a story beat, or a prestige reset that starts over with a
  bonus. Endless-with-no-arc is the demo you are avoiding.
- **Your long-haul testers.** Name three people willing to keep a tab
  open across several days. Idle games cannot be playtested in one
  sitting.

## Milestones

1. Design note in the README: the resource, ten tier names, the cost
   growth factor you will start with, and what the ending is.
2. Click button and resource counter working. Deploy.
3. First generator: costs resources, produces per second, cost rises
   with each purchase.
4. Autosave to localStorage every few seconds and on tab close; load
   on return. Kill the tab mid-run and verify nothing is lost.
5. End of week one: click, buy, watch the rate climb, close the tab,
   come back to your progress.
6. Offline progress: compute what generators earned while away, cap
   it, and say plainly on return what was earned and how.
7. Three more generator tiers and multiplier upgrades; tune the curves
   so the next purchase is always in sight.
8. Number formatting past a million (1.2M, 3.4B), because raw digits
   stop meaning anything.
9. Settings screen: export save as a string, import one, and a
   hard-reset behind a confirmation.
10. The ending you designed, reachable in roughly a week of casual
    play.
11. Multi-day playtest with your three named testers; watch where the
    curve stalls them and retune it. Ship.

## Done means

- Live URL; a fresh player can reach the second generator tier in
  their first sitting
- Save survives reload, browser restart, and a full week of idling
- Export and import move a save between two machines intact
- Offline progress is honest: capped, explained on return, and never
  used to pressure the player back
- No dark patterns: no fake urgency, no countdown pressure, and every
  rate the game displays is true
- All three named testers played across 3 or more days, and the cost
  curves changed because of where they stalled
- At least 15 commits across at least 10 distinct days, authored by you
