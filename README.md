# rankdle

**Rankdle** — a GitHub Pages game. Two people are on screen at a time;
you pick the better one and the loser is replaced by someone new.

The roster mixes historical figures with today's musicians, internet
creators, Twitch streamers and OnlyFans creators — 198 people in total.

Play it at: <https://theguywhocodesace.github.io/rankdle/> once this is pushed.

## How it works

- **Two at a time.** Two people are drawn at random and shown side by side,
  each with a category chip (Musician, Streamer, Activist, ...).
- **Pick one.** Tap (or click / press Enter on) a card to choose the better person.
  Both cards reveal their community score, the winner stays on screen, the loser
  fades out and is replaced by a new face.
- **Nobody repeats.** Everyone you have already seen this session is kept in a
  `seen` list, so the replacement is always somebody you have not been shown yet.
  Once all 198 people have been used, the pool reshuffles and starts over.
- **Scoreboard.** Every pick is checked against the community ranking (each person
  in `people.js` has a `score`; higher = better), and the top of the page shows how
  many picks you have made, how often you agreed with it, and how many people are
  left in the pool.
- **Session storage.** Picks, agreement and the two people on screen are stored in
  `localStorage`, so a refresh picks up where you left off. Append `?reset=1` to the
  URL to wipe the session and start again while testing.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page (was `homepage.html` — GitHub Pages only serves `index.html` at the root) |
| `style.css` | All styling, including the phone layout |
| `script.js` | Drawing, the pick / replace loop, scoreboard, session storage |
| `people.js` | **Generated.** The roster of 198 people: name, dates, role, score, category, portrait |
| `images/` | Portraits pulled from Wikipedia, plus `CREDITS.md` |
| `tools/build.mjs` | Source of truth for the roster + the image downloader |

## Editing the roster

The roster lives in `tools/build.mjs`, not in `people.js` — `people.js` is
generated. To add, remove or re-rate someone:

1. Edit the `ROSTER` array in `tools/build.mjs` (name, Wikipedia title, years,
   role, editorial `score`, category `tag`).
2. Run:

   ```bash
   node tools/build.mjs
   ```

   This looks up a portrait for every person, downloads anything missing into
   `images/`, writes `people.js` and refreshes `images/CREDITS.md`.

The scores in the source roster are editorial — they only decide who the site
treats as the better person in any head-to-head, and they are never shown as-is.
At build time they are converted into a unique rank (1 = worst, N = best) so no
two people can ever tie; `script.js` displays that rank as a 0–100 community score.

The only thing you need is network access on the first run; after that the images
are on disk and re-running is a no-op (people without a free-licensed Wikipedia
portrait fall back to their initials).

## Deploying (GitHub Pages)

1. Push this repo.
2. Repo **Settings → Pages → Deploy from a branch**, branch `main`, folder
   `/ (root)`.
3. Done — `index.html` is the entry point, no build step on Pages.

Image credits are in [`images/CREDITS.md`](images/CREDITS.md) (author + licence for
every portrait). Keep that file if you keep the portraits.
