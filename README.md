# rankdle

**Daily Five** — a GitHub Pages game. Every day you get 5 random historical people
and have to rank them from worst to best, then see how close you were to the
community ranking.

Play it at: <https://theguywhocodesace.github.io/rankdle/> once this is pushed.

## How it works

- **Five a day.** The date is turned into a seed, so everyone on earth gets the
  same five people that day, in the same starting order.
- **Rank them.** Drag the cards, tap one card then another to swap them, or focus a
  card and use the arrow keys. On a phone the cards become a list with rank badges.
- **Lock in.** Your ranking is compared with the community ranking (each person in
  `people.js` has a `score`; lowest score = least good = leftmost). You get a
  percentage based on how many of the 10 possible head-to-head calls you got right.
- **Once a day.** The result is stored in `localStorage`, so the page is locked
  until tomorrow. Append `?reset=1` to the URL to wipe today and play again while
  testing.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page (was `homepage.html` — GitHub Pages only serves `index.html` at the root) |
| `style.css` | All styling, including the phone layout |
| `script.js` | Daily pick, reordering, scoring, results modal |
| `people.js` | **Generated.** The roster of 89 people: name, dates, role, score, portrait |
| `images/` | Portraits pulled from Wikipedia, plus `CREDITS.md` |
| `tools/build.mjs` | Source of truth for the roster + the image downloader |

## Editing the roster

The roster lives in `tools/build.mjs`, not in `people.js` — `people.js` is
generated. To add, remove or re-rate someone:

1. Edit the `ROSTER` array in `tools/build.mjs` (name, Wikipedia title, years,
   role, editorial `score`).
2. Run:

   ```bash
   node tools/build.mjs
   ```

   This looks up a portrait for every person, downloads anything missing into
   `images/`, writes `people.js` and refreshes `images/CREDITS.md`.

The scores in the source roster are editorial — they only decide the order the
site treats as correct. They are spread evenly across 2-99 at build time, so no
two people can ever tie (a tie would make the day's answer ambiguous).

The only thing you need is network access on the first run; after that the images
are on disk and re-running is a no-op.

## Deploying (GitHub Pages)

1. Push this repo.
2. Repo **Settings → Pages → Deploy from a branch**, branch `main`, folder
   `/ (root)`.
3. Done — `index.html` is the entry point, no build step on Pages.

Image credits are in [`images/CREDITS.md`](images/CREDITS.md) (author + licence for
every portrait). Keep that file if you keep the portraits.
