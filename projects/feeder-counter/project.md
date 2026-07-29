---
id: feeder-counter
level: 3
group: Data & ML
name: Count something real with a camera
proves: [train-a-model, simple-dashboard]
resume_line:
  job: "Built {project_name}, a camera-based counter validated against hand counts, with a live daily dashboard — at {url}"
  college: "Built a detection pipeline from my own camera footage and validated its counts against ground truth I collected"
  freelance: "Builds vision pipelines validated against ground truth — recent: {project_name} ({url})"
---

## Brief

Point a camera you own at something countable in your world (birds
at the feeder, cars in your driveway, bees at the balcony planter)
and build a system that counts visits automatically. Start with a
motion-based counter as the baseline, then train a small detector on
frames you labeled yourself. Ground truth is you: hand-counted hours
of footage that the machine's numbers get checked against. The demo
is a live dashboard of daily counts with the validation table and
the detector's misses on display.

## Personalize

- **Your subject and your camera.** An old phone, a webcam, or a
  trail cam, aimed at your own space. Frame the shot so it cannot
  capture neighbors, passersby, or anyone's windows; if a person
  could wander into frame, choose a different angle.
- **Your count definition.** What is one visit? A bird landing
  counts, a fly-past does not; write the rule before labeling,
  because every downstream number depends on it.
- **Your ground truth.** You, watching sampled hours of footage and
  tallying by hand with the written rule. Machine counts mean
  nothing until they are compared to this.

## Milestones

1. Rig the camera and record a pilot day. Check framing, lighting
   changes, and that nothing private is in frame at any hour.
2. Write the counting rule and hand-count three sampled hours from
   the pilot footage. This is the first ground-truth set.
3. Build the baseline: motion detection with a threshold, tuned on
   pilot footage. Score its counts against your hand counts and
   record where it fails (wind, shadows, clouds).
4. Extract frames and label a few hundred with boxes or
   presence/absence, following the counting rule. Log the frames you
   were unsure about.
5. Split by day: whole days go to test, frozen. Same-day frames are
   near-duplicates and would leak.
6. Train a small detector (fine-tuned on your labeled frames) and
   turn detections into visit counts using your rule.
7. Hand-count three new hours from test days you have not watched
   before. Score baseline and detector against them, hour by hour.
8. Read the failures both ways: visits missed, and phantom counts.
   Collect example clips of each.
9. Wire up the pipeline to run on each day's footage and write daily
   counts to a data file.
10. Build the dashboard: daily counts over time, the validation
    table (detector vs baseline vs hand counts), and the miss
    gallery.
11. Run it for two weeks unattended, then write up drift: weather,
    changing light, anything that degraded counts after training.
12. Publish the limitations: one camera, one spot, and counts are
    estimates with the measured error, never exact.

## Done means

- Counting rule written before labeling, and ground truth collected
  by hand against it, covering at least six hours across pilot and
  test days
- Motion baseline built first and scored; detector reported next to
  it against the same hand counts
- Test days never seen in training, with the day-level split
  explained
- Dashboard live with daily counts, the validation table, and real
  failure clips shown
- Two weeks of unattended operation, with drift honestly reported
- Framing documented as privacy-safe: your space only, no people
  captured
- Counts everywhere labeled as estimates with their measured error
