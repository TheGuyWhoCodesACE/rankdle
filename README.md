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
  The pick is highlighted for a moment, the other card fades out and is replaced
  by a new face. Nothing else is scored or judged.
- **Nobody repeats.** Everyone you have already seen this session is kept in a
  `seen` list, so the replacement is always somebody you have not been shown yet.
  Once all 198 people have been used, the pool reshuffles and starts over.
- **Session storage.** The two people on screen and the `seen` list are stored in
  `localStorage`, so a refresh picks up where you left off. Append `?reset=1` to the
  URL to wipe the session and start again while testing.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page (was `homepage.html` — GitHub Pages only serves `index.html` at the root) |
| `style.css` | All styling, including the phone layout |
| `script.js` | Drawing, the pick / replace loop, session storage |
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

The `score` on each person is editorial metadata carried over from an older
version of the site. The page no longer reads it: there is no ranking, no
verdict and no community number on screen — you pick a card, the other one is
replaced. The build still writes a unique rank (1 = worst, N = best) into
`people.js` so the field stays consistent, but nothing displays it.

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
