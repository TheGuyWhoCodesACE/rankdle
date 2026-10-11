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

- **Two at a time.** The opening matchup is a random draw on the left and a
  matchmade one on the right: two people, side by side, each with a category
  chip (Musician, Streamer, Activist, ...).
- **Ten picks.** Tap (or click / press Enter on) a card to choose the better
  person. Your pick lights up and **stays on screen**; the card it beat clears
  out and a fresh challenger rises in to face it. The bar under the heading
  tracks how many are left.
- **Nobody repeats.** Everyone already shown this run is kept in a `seen` list,
  so the challenger is always somebody you have not been shown yet - only your
  pick carries over. Once the whole roster has been used, the pool reshuffles
  and starts over.
- **Then the read-out.** After the tenth pick the duel is replaced by a
  profile: an archetype title, the numbers behind it, a finding per trait, and
  a recap of all ten picks. `Copy my profile` puts the whole thing on the
  clipboard as plain text; `Play again` starts a fresh run.
- **Run storage.** The people on screen, the `seen` list, every pick made so
  far and whether the run is finished are stored in `localStorage`
  (`rankdle:v2:run`), so a refresh picks up exactly where you left off —
  including reloading straight onto your finished profile. Append `?reset=1`
  to the URL to wipe the run while testing.

The winner staying on screen is the whole point. Each pick becomes a
defending champion: it gets a fresh challenger every round, so a run ends up
being about the chain of people you kept choosing - and which of them you
finally let go.

## Person ids

Every person has a stable `id` — their position in the roster, numbered
from 1 to 142 (`names.txt` is the A-Z lookup table). Ids are what the game
refers to people by, so **append new people to the end of the roster** in
`tools/build.mjs` rather than inserting them mid-list, which would shift
everyone's id. The card's DOM element carries the id as `data-id`.

## How the next challenger is chosen

The left card of the opening pair is a straight random draw. Everything after
that — including the opening right card — comes from the matchmaker, which
asks one question: **what would make the next decision interesting?**

The old version flipped a coin and took the single most similar or most
different person left. That sounds varied but is the opposite of it: the same
handful of extremes win that contest every time. Measured over 4,500 draws,
Sailor Moon served as a challenger 223 times while Jake Paul served twice,
and with six 0–5 stats there were usually only about three faces in the running
for any given matchup.

The current engine **samples** instead of taking the extreme.

1. **Every person gets a contrast score**, 0 (a twin) to 1 (an opposite),
   blended from three axes:
   - **Stats (50%)** — the six ratings in `ratings.json`, normalized so the
     four 0–5 ratings and the two 0/1 flags all weigh equally.
   - **Years (30%)** — real distance in time, on a saturating curve so 120
     years reads as 0.5 and Cleopatra-vs-a-streamer as 0.95. The anchor year
     is parsed straight out of each person's `years` field: birth year, reign
     start for rulers, debut year for fictional characters.
   - **Category (20%)** — 0 for the same tag, 0.45 for a neighbouring one
     (Musician vs Cartoon), 1 for strangers (Musician vs Dictator). Tags are
     grouped into families for this: `performance`, `ideas`, `power`,
     `internet`, `play`.
2. **Each round rolls a mood** — the contrast it is aiming for. Most rounds
   land mid-range, about one in seven wants a near-twin and about one in six
   wants a genuine clash.
3. **Everyone left is weighted** by how close their contrast lands to the
   mood, on a Gaussian bell, and one is **sampled from those weights**.
   Near-misses stay in the draw, so nothing is the automatic answer and no
   two runs match.

Two extra pulls sit on top of the sampling:

- **Villains keep company.** If you are holding a villain (a real person at
  the bottom of the morality scale, or any P\*rn Star), their rounds aim at the
  low-contrast end *and* other villains get a heavy weight boost. Both are
  needed: aiming alone cannot stop 129 innocent people out-weighing 13
  villains in a roulette wheel. Measured, this keeps the bracket about 64%
  villains against a 9% roster base rate — tight, but not locked, so an
  outsider can still slip in.
- **Streaks raise the stakes.** The longer a champion survives on screen, the
  more the draw leans toward people who out-fame them, so round eight is a
  heavier fight than round two. Fame is centred on the roster mean first —
  the roster is top-heavy (mean 4.25 of 5), so raw fame would tell you
  nothing about who the *really* big names are.

A candidate also gets damped if the previous challenger was from the same tag
family, so two challengers in a row never come from the same corner of the
roster. Nobody can repeat until the whole roster has been used — only the
person you just picked carries over, and only for as long as you keep picking
them.

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
