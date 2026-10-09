# rankdle

**Rankdle** — a GitHub Pages game. Two people are on screen at a time;
you pick the better one and the loser is replaced by someone new.

The roster mixes historical figures with today's musicians, internet
creators, Twitch streamers and OnlyFans creators, plus fictional
characters from books, comics, film, cartoons, games and anime —
146 people in total.

Play it at: <https://theguywhocodesace.github.io/rankdle/> once this is pushed.

## How it works

- **Two at a time.** Two people are drawn at random and shown side by side,
  each with a category chip (Musician, Streamer, Activist, ...).
- **Pick one.** Tap (or click / press Enter on) a card to choose the better person.
  The pick is highlighted for a moment, the other card fades out and is replaced
  by a new face. Nothing else is scored or judged.
- **Nobody repeats.** Everyone you have already seen this session is kept in a
  `seen` list, so the replacement is always somebody you have not been shown yet.
  Once all 146 people have been used, the pool reshuffles and starts over.
- **Session storage.** The two people on screen and the `seen` list are stored in
  `localStorage`, so a refresh picks up where you left off. Append `?reset=1` to the
  URL to wipe the session and start again while testing.

## How the next card is chosen

The replacement after each pick is **not random**: it is whoever is the most
different from the card you kept, measured across the six ratings
(`fame`/`era`/`morality`/`controversy` normalized to 0-1, plus `gender` and
`fiction` as 0/1 - so all six weigh equally), scored 0-30 in integer fifths.
Exact ties are broken at random, and so is the very first card of a session
(there is nothing to be different from yet). Everyone still can't repeat
until the whole roster has been used.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page (was `homepage.html` — GitHub Pages only serves `index.html` at the root) |
| `style.css` | All styling, including the phone layout |
| `script.js` | Drawing, the pick / replace loop, session storage |
| `people.js` | **Generated.** The roster of 146 people: name, dates, role, category, portrait |
| `ratings.json` | Hand-authored game data: six ratings per person (see above) |
| `ratings.js` | **Generated** from `ratings.json` (browsers can't script-tag a `.json`) |
| `names.txt` | **Generated.** Every name in the roster, A-Z |
| `images/` | Portraits pulled from Wikipedia / Wikimedia Commons, plus `CREDITS.md` |
| `tools/build.mjs` | Source of truth for the roster + the image downloader |
| `tools/build-ratings.mjs` | Mirrors `ratings.json` into `ratings.js` |

## Editing the roster

The roster lives in `tools/build.mjs`, not in `people.js` — `people.js` is
generated. To add, remove or re-rate someone:

1. Edit the `ROSTER` array in `tools/build.mjs` (name, Wikipedia title, years,
   role, category `tag`).
2. Run:

   ```bash
   node tools/build.mjs
   ```

   This looks up a portrait for every person, downloads anything missing into
   `images/`, writes `people.js` and refreshes `images/CREDITS.md`.

The only thing you need is network access on the first run; after that the images
are on disk and re-running is a no-op (people without a free-licensed Wikipedia
portrait fall back to their initials).

**Photos that are not on Wikipedia.** If someone has no free-licensed Wikipedia
portrait (Sophie Rain and Piper Rockelle are the current examples), drop the file
into `images/` and add an entry to the `LOCAL_IMAGES` table in `tools/build.mjs`.
The build will skip the Wikipedia lookup for them, keep the file as-is and credit
them from that table instead.

**Fictional characters** rarely have a usable Wikipedia page image - what Wikipedia
shows for them is usually a logo or a non-free film still. Those entries name a
Wikimedia Commons file instead:

```js
{ name: "Dracula", ..., tag: "Literature",
  commons: "File:Bela Lugosi as Dracula, ...jpg" }
```

`commons` beats the Wikipedia thumbnail, and the build reads the author and licence
straight from Commons for `images/CREDITS.md`. Commons only hosts free-licensed
files, so anything there is safe to use. Each fictional character's `years` is their
debut (`Debut 1997`), not a lifespan.

## ratings.json

`ratings.json` scores every person in the roster on six attributes, keyed by
the exact name used in `people.js`. It is hand-authored game data — edit it
directly if you disagree with a score, but keep the name keys in sync with
the roster.

| Key | Values | Meaning |
| --- | --- | --- |
| `fame` | 0-5 | How globally famous: 5 = household name worldwide, 2 = known mainly within a region or community |
| `era` | 0-5 | Modern-day vs historical: 5 = a present-day figure, 0 = ancient |
| `morality` | 0-5 | Broad public moral reputation: 5 = widely admired, 3 = neutral / no strong reputation, 0 = widely regarded as evil |
| `controversy` | 0-5 | Amount of public controversy: 5 = relentlessly controversial or infamous, 0 = essentially controversy-free |
| `gender` | 0 / 1 | 0 = man, 1 = woman |
| `fiction` | 0 / 1 | 0 = real person, 1 = fictional character (matches the Literature / Comic / Film & TV / Cartoon / Game / Anime tags) |

`era` is assigned by band — alive and active today = 5; died 1980-2015
(fiction debut 1980-1999) = 4; 1940-1979 = 3; 1900-1939 = 2; 1500-1899 = 1;
earlier = 0.

`morality` and `controversy` describe broad public perception, not personal
judgement — they are game data.

## Deploying (GitHub Pages)

1. Push this repo.
2. Repo **Settings → Pages → Deploy from a branch**, branch `main`, folder
   `/ (root)`.
3. Done — `index.html` is the entry point, no build step on Pages.

Image credits are in [`images/CREDITS.md`](images/CREDITS.md) (author + licence for
every portrait). Keep that file if you keep the portraits.
