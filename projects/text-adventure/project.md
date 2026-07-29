---
id: text-adventure
level: 1
name: Text adventure of your house or school
group: Apps & tools
proves: [build-web-app, ship-on-github]
resume_line:
  job: "Built {project_name}, a playable text adventure with a persistent world — {url}"
  college: "Built {project_name}, a text adventure set in my own {building}"
  freelance: "Builds interactive experiences — recent: {project_name} ({url})"
---

## Brief

A playable text adventure set in your own house or school: real
rooms, real connections between them, and the jokes only people who
have been there will get. Type or tap commands to move and look,
pick up the objects that belong in each room, and finish one small
quest. The world map is data, the engine is code, and the split
between them is the actual lesson. Game progress persists across
reloads (localStorage is fine).

## Personalize

- **The map is the building.** Walk your house or school and write
  down the rooms and which doors connect them. If the map playing
  wrong would not bother someone who lives there, it is too
  generic.
- **The jokes.** Room descriptions carry the inside knowledge: the
  stair that creaks, the teacher's catchphrase, the cupboard nobody
  opens. Written by you, funny to your people.
- **The playtester.** A sibling or friend who knows the building
  plays it while you watch silently. Every command they try that
  fails becomes your bug list.

## Milestones

1. Map on paper first: rooms, exits, objects, and the one quest
   (find the thing, unlock the door, feed the cat). Commit the map
   to the repo.
2. Walking between three rooms with look and go, deployed. Ugly is
   fine.
3. The full map loaded from a data file, with objects you can take
   and an inventory.
4. The quest completable start to finish, plus a designed response
   for commands the game does not know (this is most of what
   players type).
5. Save: progress survives a reload, and a restart command exists.
6. The playtest. Watch a real person play, fix the top failures,
   and write the playtest story in the README. Repo public on
   GitHub with a README that explains the engine-versus-map split.

## Done means

- Live URL responding; progress survives a reload
- The quest is completable by someone who is not you
- Unknown commands get a designed response instead of silence
- A playtest happened, and the README tells what it changed
- Public GitHub repo with the map as a readable data file
- At least 10 commits across at least 7 distinct days, authored by
  you
- SESSIONS.md has an entry per session, written by you
