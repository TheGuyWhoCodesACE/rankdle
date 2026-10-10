# rankdle

**Rankdle** — a GitHub Pages game. Two people are on screen at a time;
you pick the better one, ten times over, and the site reads your choices
back to you as a personality profile.

The roster mixes historical figures with today's musicians, internet
creators, Twitch streamers and P*rn Stars, plus fictional
characters from books, comics, film, cartoons, games and anime —
142 people in total.

Play it at: <https://theguywhocodesace.github.io/rankdle/> once this is pushed.

## How it works

- **Two at a time.** The opening matchup is a completely random draw: two
  people, side by side, each with a category chip (Musician, Streamer,
  Activist, ...).
- **Ten picks.** Tap (or click / press Enter on) a card to choose the better
  person. Your pick lights up, both cards clear, and a fresh pair rises in for
  the next decision. The bar under the heading tracks how many are left.
- **Nobody repeats.** Everyone already shown this run is kept in a `seen` list,
  so the next pair is always somebody you have not been shown yet. Ten picks
  means twenty different people. Once the whole roster has been used, the pool
  reshuffles and starts over.
- **Then the read-out.** After the tenth pick the duel is replaced by a
  profile: an archetype title, the numbers behind it, a finding per trait, and
  a recap of all ten picks. `Copy my profile` puts the whole thing on the
  clipboard as plain text; `Play again` starts a fresh run.
- **Run storage.** The people on screen, the `seen` list, every pick made so
  far and whether the run is finished are stored in `localStorage`
  (`rankdle:v2:run`), so a refresh picks up exactly where you left off —
  including reloading straight onto your finished profile. Append `?reset=1`
  to the URL to wipe the run while testing.

Both cards leave after every pick on purpose. Keeping the winner on screen
would let one person win all ten rounds, and the profile would be an opinion
about one face rather than a pattern across ten decisions.

## Person ids

Every person has a stable `id` — their position in the roster, numbered
from 1 to 142 (`names.txt` is the A-Z lookup table). Ids are what the game
refers to people by, so **append new people to the end of the roster** in
`tools/build.mjs` rather than inserting them mid-list, which would shift
everyone's id. The card's DOM element carries the id as `data-id`.

## How the next pair is chosen

The opening pair is a straight random draw. After that, each new pair is
drawn **around the person you just kept**, and the draw is not random either:
each one flips its own coin (about 50/50, never alternating) between two modes.

- **Different half** — whoever is the most different from the person you kept,
  measured across the six ratings (`fame`/`era`/`morality`/`controversy`
  normalized to 0-1, plus `gender` and `fiction` as 0/1 - so all six weigh
  equally), scored 0-30 in integer fifths.
- **Similar half** — whoever is the most *similar*. And if the person you kept
  is a **villain** (a real person at the bottom of the morality scale, or any
  P*rn Star), the pool first shrinks to the remaining villains - so Hitler,
  Stalin, Saddam, Epstein and the P*rn Stars keep ending up face to face.

The second card of the pair is drawn around the first, by the same logic.
Exact ties are broken at random. Nobody can repeat until the whole roster has
been used.

Varied opponents are what make the ten picks readable: a run of near-identical
matchups would have nothing to say about you.

## How the profile is read

Everything comes from the ten `{ chosen, rejected }` pairs and the six ratings
in `ratings.json`. Nothing is scored on a hidden scale — the profile is just
the gap between what you took and what you turned down, said out loud.

- **Averages vs. averages.** Morality, controversy, fame and era are averaged
  over your picks and over the rejects, and the gap is the signal. A gap
  smaller than its threshold (0.4-0.55 on the 0-5 scale) is treated as noise,
  and the finding says so instead of inventing a pattern.
- **Tallies.** Gender is a head-to-head count (how often a woman beat a man
  and the reverse), not an average. Fiction, villains and "scandalous" picks
  (controversy 4-5) are plain counts.
- **Categories.** Won minus lost per category across the ten matchups. A
  category netting 3+ earns a "you have a type" card; one netting -3 or worse
  earns a blind-spot card.
- **One-off calls.** The most and least moral pick on the board get named, but
  with less weight than a pattern — one matchup should not outshout ten.
- **The title.** Whichever pattern is loudest, and only if it cleared its
  threshold: *The Villain's Best Friend*, *The Drama Magnet*, *The Moral
  Compass*, *The Star-Struck*, *The Old Soul*, *The Daydreamer*, and so on.
  A run with no pattern is *The Wildcard* and says exactly that.

Gender, morality and controversy always get a card — those three are the
personality. The rest fill up to six, strongest signal first.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page (was `homepage.html` — GitHub Pages only serves `index.html` at the root) |
| `style.css` | All styling, including the phone layout |
| `script.js` | Drawing, the pick loop, the profile engine, run storage |
| `people.js` | **Generated.** The roster of 142 people: id, name, dates, role, category, portrait |
| `ratings.json` | Hand-authored game data: six ratings per person (see above) |
| `ratings.js` | **Generated** from `ratings.json` (browsers can't script-tag a `.json`) |
| `names.txt` | **Generated.** Every id + name in the roster, A-Z |
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
