// ============================================================
// tools/build.mjs
//
// Source of truth for the roster of people.
//
// Run:  node tools/build.mjs
//
// What it does:
//   1. Asks Wikipedia for a portrait for every person below
//   2. Downloads those portraits into ./images
//   3. Writes ./people.js (the file the website actually loads)
//   4. Writes ./images/CREDITS.md (who took what, what licence)
//
// It is idempotent: re-running only downloads missing images.
// ============================================================

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES_DIR = path.join(ROOT, "images");

const THUMB_WIDTH = 400;
const CONCURRENCY = 6;

// ------------------------------------------------------------
// THE ROSTER
//
// score = "historical consensus goodness" 0-100.
// Every score must be unique - it decides the day's
// community ranking, so no two people may tie.
// ------------------------------------------------------------

const ROSTER = [
    // --- Activists & reformers -------------------------------------
    { name: "Martin Luther King Jr.", wiki: "Martin Luther King Jr.", years: "1929-1968", role: "Civil rights leader", score: 96 },
    { name: "Mahatma Gandhi", wiki: "Mahatma Gandhi", years: "1869-1948", role: "Indian independence leader", score: 92 },
    { name: "Nelson Mandela", wiki: "Nelson Mandela", years: "1918-2013", role: "Anti-apartheid leader", score: 95 },
    { name: "Malcolm X", wiki: "Malcolm X", years: "1925-1965", role: "Civil rights activist", score: 84 },
    { name: "Rosa Parks", wiki: "Rosa Parks", years: "1913-2005", role: "Civil rights icon", score: 93 },
    { name: "Harriet Tubman", wiki: "Harriet Tubman", years: "c. 1822-1913", role: "Underground Railroad conductor", score: 97 },
    { name: "Susan B. Anthony", wiki: "Susan B. Anthony", years: "1820-1906", role: "Women's suffrage leader", score: 90 },
    { name: "Emmeline Pankhurst", wiki: "Emmeline Pankhurst", years: "1858-1928", role: "Suffragette leader", score: 88 },
    { name: "Desmond Tutu", wiki: "Desmond Tutu", years: "1931-2021", role: "Anti-apartheid archbishop", score: 91 },
    { name: "B. R. Ambedkar", wiki: "B. R. Ambedkar", years: "1891-1956", role: "Constitutional reformer", score: 94 },
    { name: "The Dalai Lama", wiki: "14th Dalai Lama", years: "b. 1935", role: "Spiritual leader in exile", score: 86 },
    { name: "Mother Teresa", wiki: "Mother Teresa", years: "1910-1997", role: "Missionary of the poor", score: 72 },
    { name: "Marcus Garvey", wiki: "Marcus Garvey", years: "1887-1940", role: "Pan-Africanist leader", score: 70 },

    // --- Political leaders -----------------------------------------
    { name: "Abraham Lincoln", wiki: "Abraham Lincoln", years: "1809-1865", role: "Ended slavery in the US", score: 89 },
    { name: "Winston Churchill", wiki: "Winston Churchill", years: "1874-1965", role: "Wartime British prime minister", score: 74 },
    { name: "Franklin D. Roosevelt", wiki: "Franklin D. Roosevelt", years: "1882-1945", role: "US president, New Deal and WWII", score: 83 },
    { name: "John F. Kennedy", wiki: "John F. Kennedy", years: "1917-1963", role: "US president", score: 76 },
    { name: "Ronald Reagan", wiki: "Ronald Reagan", years: "1911-2004", role: "US president", score: 67 },
    { name: "Margaret Thatcher", wiki: "Margaret Thatcher", years: "1925-2013", role: "British prime minister", score: 63 },
    { name: "George Washington", wiki: "George Washington", years: "1732-1799", role: "First US president", score: 81 },
    { name: "Thomas Jefferson", wiki: "Thomas Jefferson", years: "1743-1826", role: "US founding father", score: 71 },
    { name: "Simon Bolivar", wiki: "Simón Bolívar", years: "1783-1830", role: "Liberator of South America", score: 75 },
    { name: "Jawaharlal Nehru", wiki: "Jawaharlal Nehru", years: "1889-1964", role: "First prime minister of India", score: 79 },
    { name: "Haile Selassie", wiki: "Haile Selassie", years: "1892-1975", role: "Emperor of Ethiopia", score: 61 },
    { name: "Mustafa Kemal Ataturk", wiki: "Mustafa Kemal Atatürk", years: "1881-1938", role: "Founder of modern Turkey", score: 77 },
    { name: "Cleopatra", wiki: "Cleopatra", years: "69-30 BC", role: "Queen of Egypt", score: 60 },
    { name: "Elizabeth I", wiki: "Elizabeth I", years: "1533-1603", role: "Queen of England", score: 69 },
    { name: "Queen Victoria", wiki: "Queen Victoria", years: "1819-1901", role: "Queen of the United Kingdom", score: 65 },

    // --- Dictators & villains --------------------------------------
    { name: "Adolf Hitler", wiki: "Adolf Hitler", years: "1889-1945", role: "Nazi dictator", score: 2 },
    { name: "Joseph Stalin", wiki: "Joseph Stalin", years: "1878-1953", role: "Soviet dictator", score: 8 },
    { name: "Mao Zedong", wiki: "Mao Zedong", years: "1893-1976", role: "Communist China's chairman", score: 10 },
    { name: "Vladimir Lenin", wiki: "Vladimir Lenin", years: "1870-1924", role: "Bolshevik revolutionary", score: 26 },
    { name: "Pol Pot", wiki: "Pol Pot", years: "1925-1998", role: "Khmer Rouge leader", score: 3 },
    { name: "Idi Amin", wiki: "Idi Amin", years: "1925-2003", role: "Ugandan dictator", score: 5 },
    { name: "Leopold II", wiki: "Leopold II of Belgium", years: "1835-1909", role: "King of Belgium", score: 4 },
    { name: "Saddam Hussein", wiki: "Saddam Hussein", years: "1937-2006", role: "Iraqi dictator", score: 6 },
    { name: "Caligula", wiki: "Caligula", years: "12-41", role: "Roman emperor", score: 12 },
    { name: "Nero", wiki: "Nero", years: "37-68", role: "Roman emperor", score: 15 },
    { name: "Benedict Arnold", wiki: "Benedict Arnold", years: "1741-1801", role: "American traitor", score: 31 },

    // --- Ancient & imperial rulers ---------------------------------
    { name: "Julius Caesar", wiki: "Julius Caesar", years: "100-44 BC", role: "Roman general and dictator", score: 55 },
    { name: "Alexander the Great", wiki: "Alexander the Great", years: "356-323 BC", role: "Macedonian king", score: 56 },
    { name: "Genghis Khan", wiki: "Genghis Khan", years: "c. 1162-1227", role: "Mongol emperor", score: 45 },
    { name: "Saladin", wiki: "Saladin", years: "1137-1193", role: "Sultan of Egypt and Syria", score: 78 },
    { name: "Charlemagne", wiki: "Charlemagne", years: "742-814", role: "Holy Roman Emperor", score: 57 },
    { name: "Catherine the Great", wiki: "Catherine the Great", years: "1729-1796", role: "Empress of Russia", score: 59 },
    { name: "Peter the Great", wiki: "Peter the Great", years: "1672-1725", role: "Tsar of Russia", score: 52 },
    { name: "Henry VIII", wiki: "Henry VIII of England", years: "1491-1547", role: "King of England", score: 35 },
    { name: "Napoleon Bonaparte", wiki: "Napoleon", years: "1769-1821", role: "Emperor of the French", score: 58 },
    { name: "Mansa Musa", wiki: "Mansa Musa", years: "c. 1280-1337", role: "Emperor of Mali", score: 85 },
    { name: "Akbar", wiki: "Akbar", years: "1542-1605", role: "Mughal emperor", score: 82 },
    { name: "Ashoka", wiki: "Ashoka", years: "304-232 BC", role: "Mauryan emperor", score: 87 },

    // --- Thinkers ---------------------------------------------------
    { name: "Confucius", wiki: "Confucius", years: "551-479 BC", role: "Chinese philosopher", score: 86 },
    { name: "Socrates", wiki: "Socrates", years: "470-399 BC", role: "Greek philosopher", score: 88 },
    { name: "Plato", wiki: "Plato", years: "428-348 BC", role: "Greek philosopher", score: 80 },
    { name: "Aristotle", wiki: "Aristotle", years: "384-322 BC", role: "Greek philosopher", score: 73 },
    { name: "Sun Tzu", wiki: "Sun Tzu", years: "c. 544-496 BC", role: "Strategist and philosopher", score: 68 },

    // --- Scientists -------------------------------------------------
    { name: "Albert Einstein", wiki: "Albert Einstein", years: "1879-1955", role: "Theoretical physicist", score: 91 },
    { name: "Isaac Newton", wiki: "Isaac Newton", years: "1643-1727", role: "Physicist and mathematician", score: 76 },
    { name: "Marie Curie", wiki: "Marie Curie", years: "1867-1934", role: "Physicist and chemist", score: 95 },
    { name: "Nikola Tesla", wiki: "Nikola Tesla", years: "1856-1943", role: "Inventor and engineer", score: 84 },
    { name: "Thomas Edison", wiki: "Thomas Edison", years: "1847-1931", role: "Inventor", score: 66 },
    { name: "Galileo Galilei", wiki: "Galileo Galilei", years: "1564-1642", role: "Astronomer and physicist", score: 89 },
    { name: "Charles Darwin", wiki: "Charles Darwin", years: "1809-1882", role: "Naturalist", score: 92 },
    { name: "Alan Turing", wiki: "Alan Turing", years: "1912-1954", role: "Mathematician and codebreaker", score: 94 },
    { name: "Rosalind Franklin", wiki: "Rosalind Franklin", years: "1920-1958", role: "Chemist and crystallographer", score: 90 },
    { name: "Stephen Hawking", wiki: "Stephen Hawking", years: "1942-2018", role: "Theoretical physicist", score: 83 },
    { name: "Jonas Salk", wiki: "Jonas Salk", years: "1914-1995", role: "Developed the polio vaccine", score: 98 },
    { name: "Louis Pasteur", wiki: "Louis Pasteur", years: "1822-1895", role: "Chemist and microbiologist", score: 93 },
    { name: "Emmy Noether", wiki: "Emmy Noether", years: "1882-1935", role: "Mathematician", score: 87 },

    // --- Artists & writers -----------------------------------------
    { name: "William Shakespeare", wiki: "William Shakespeare", years: "1564-1616", role: "Playwright and poet", score: 82 },
    { name: "Leonardo da Vinci", wiki: "Leonardo da Vinci", years: "1452-1519", role: "Artist and inventor", score: 91 },
    { name: "Michelangelo", wiki: "Michelangelo", years: "1475-1564", role: "Artist and sculptor", score: 79 },
    { name: "Vincent van Gogh", wiki: "Vincent van Gogh", years: "1853-1890", role: "Painter", score: 85 },
    { name: "Pablo Picasso", wiki: "Pablo Picasso", years: "1881-1973", role: "Painter", score: 64 },
    { name: "Ludwig van Beethoven", wiki: "Ludwig van Beethoven", years: "1770-1827", role: "Composer", score: 86 },
    { name: "Wolfgang Amadeus Mozart", wiki: "Wolfgang Amadeus Mozart", years: "1756-1791", role: "Composer", score: 90 },
    { name: "Johann Sebastian Bach", wiki: "Johann Sebastian Bach", years: "1685-1750", role: "Composer", score: 81 },
    { name: "Jane Austen", wiki: "Jane Austen", years: "1775-1817", role: "Novelist", score: 78 },
    { name: "Mark Twain", wiki: "Mark Twain", years: "1835-1910", role: "Author and humorist", score: 75 },
    { name: "Fyodor Dostoevsky", wiki: "Fyodor Dostoevsky", years: "1821-1881", role: "Novelist", score: 74 },
    { name: "Frida Kahlo", wiki: "Frida Kahlo", years: "1907-1954", role: "Painter", score: 80 },

    // --- Humanitarian, explorers, athletes -------------------------
    { name: "Florence Nightingale", wiki: "Florence Nightingale", years: "1820-1910", role: "Founder of modern nursing", score: 96 },
    { name: "Anne Frank", wiki: "Anne Frank", years: "1929-1945", role: "Diary writer, Holocaust victim", score: 99 },
    { name: "Oskar Schindler", wiki: "Oskar Schindler", years: "1908-1974", role: "Saved around 1,200 Jews", score: 94 },
    { name: "Christopher Columbus", wiki: "Christopher Columbus", years: "1451-1506", role: "Explorer", score: 24 },
    { name: "Amelia Earhart", wiki: "Amelia Earhart", years: "1897-1937", role: "Aviation pioneer", score: 88 },
    { name: "Sacagawea", wiki: "Sacagawea", years: "c. 1788-1812", role: "Interpreter and guide", score: 89 },
    { name: "Muhammad Ali", wiki: "Muhammad Ali", years: "1942-2016", role: "Boxer and activist", score: 84 },
    { name: "Jesse Owens", wiki: "Jesse Owens", years: "1913-1980", role: "Olympic sprinter", score: 92 },
];

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

function slugify(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function chunk(array, size) {
    const out = [];
    for (let i = 0; i < array.length; i += size) {
        out.push(array.slice(i, i + size));
    }
    return out;
}

async function wikipedia(params) {
    const url =
        "https://en.wikipedia.org/w/api.php?" +
        new URLSearchParams({ format: "json", origin: "*", ...params });

    const response = await fetch(url, {
        headers: {
            "User-Agent": "rankdle-build/1.0 (static site build script)"
        }
    });

    if (!response.ok) {
        throw new Error(`Wikipedia responded ${response.status}`);
    }

    return response.json();
}

function stripHtml(html) {
    return String(html || "")
        .replace(/<[^>]*>/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function extensionFor(url) {
    const clean = url.split("?")[0];
    const match = clean.match(/\.(png|jpe?g|gif|webp|svg)$/i);
    return match ? match[0].toLowerCase() : ".jpg";
}

// Maps a title we asked for onto the title Wikipedia actually returned
// (handles case fixes, redirects, ...).
function makeResolver(data) {
    const map = new Map();

    for (const group of [data.query?.normalized, data.query?.redirects]) {
        for (const item of group || []) {
            map.set(item.from, item.to);
        }
    }

    return (requested) => {
        let title = requested;
        for (let i = 0; i < 5 && map.has(title); i++) {
            title = map.get(title);
        }
        return title;
    };
}

async function runPool(items, worker, limit) {
    const queue = [...items];
    const runners = Array.from({ length: limit }, async () => {
        while (queue.length) {
            await worker(queue.shift());
        }
    });
    await Promise.all(runners);
}

// ------------------------------------------------------------
// 1. Find the portraits
// ------------------------------------------------------------

async function findPortraits() {
    const results = new Map(); // wiki title -> { thumb, file, license, artist, page }

    for (const batch of chunk(ROSTER, 40)) {
        const data = await wikipedia({
            action: "query",
            prop: "pageimages",
            piprop: "thumbnail|name",
            pithumbsize: String(THUMB_WIDTH),
            redirects: "1",
            titles: batch.map((person) => person.wiki).join("|")
        });

        const resolve = makeResolver(data);
        const pages = Object.values(data.query?.pages || {});

        for (const person of batch) {
            const page = pages.find(
                (candidate) => candidate.title === resolve(person.wiki)
            );

            if (page?.thumbnail?.source) {
                results.set(person.wiki, {
                    thumb: page.thumbnail.source.split("?")[0],
                    file: page.pageimage ? `File:${page.pageimage}` : null
                });
            }
        }

        console.log(`  found portraits for ${results.size}/${ROSTER.length} so far`);
    }

    // Second pass: licence + author for each file we found.
    const files = [...results.values()].filter((entry) => entry.file);
    let matched = 0;

    for (const batch of chunk(files.map((entry) => entry.file), 40)) {
        const data = await wikipedia({
            action: "query",
            prop: "imageinfo",
            iiprop: "url|extmetadata",
            redirects: "1",
            titles: batch.join("|")
        });

        const resolve = makeResolver(data);
        const pages = Object.values(data.query?.pages || {});

        for (const entry of files) {
            if (!batch.includes(entry.file)) continue;

            const title = resolve(entry.file);
            const page =
                pages.find((candidate) => candidate.title === title) ||
                pages.find((candidate) => candidate.title === entry.file);

            const meta = page?.imageinfo?.[0]?.extmetadata || {};

            if (meta.LicenseShortName) matched++;

            entry.license = stripHtml(meta.LicenseShortName?.value) || "unknown";
            entry.artist = stripHtml(meta.Artist?.value) || "unknown";
        }
    }

    console.log(`  licences resolved for ${matched}/${files.length} files`);

    return results;
}

// ------------------------------------------------------------
// 2. Download the portraits
// ------------------------------------------------------------

async function download(portraits) {
    await fs.mkdir(IMAGES_DIR, { recursive: true });

    const jobs = [];

    for (const person of ROSTER) {
        const portrait = portraits.get(person.wiki);

        if (!portrait) {
            person.image = "";
            continue;
        }

        const file = `images/${slugify(person.name)}${extensionFor(portrait.thumb)}`;
        person.image = file;

        jobs.push({ person, portrait, absolute: path.join(ROOT, file) });
    }

    let done = 0;

    await runPool(
        jobs,
        async (job) => {
            const existing = await fs.stat(job.absolute).catch(() => null);

            if (existing && existing.size > 0) {
                done++;
                return;
            }

            try {
                const response = await fetch(job.portrait.thumb, {
                    headers: { "User-Agent": "rankdle-build/1.0" }
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const bytes = Buffer.from(await response.arrayBuffer());
                await fs.writeFile(job.absolute, bytes);
            } catch (error) {
                console.warn(`  ! could not download ${job.person.name}: ${error.message}`);
                job.person.image = "";
            }

            done++;
            if (done % 10 === 0) {
                console.log(`  downloaded ${done}/${jobs.length}`);
            }
        },
        CONCURRENCY
    );

    return jobs;
}

// ------------------------------------------------------------
// 3. Write the outputs
// ------------------------------------------------------------

// The scores above are editorial: they only define the ORDER the site
// considers "correct". Plenty of them tie, so here we spread the ranking
// evenly across 2-99 without ever changing that order. Ties would make the
// daily answer ambiguous, so nobody may end up on the same number.
function normalizeScores() {
    const ordered = [...ROSTER].sort(
        (a, b) => a.score - b.score || a.name.localeCompare(b.name)
    );

    const last = ordered.length - 1;

    ordered.forEach((person, rank) => {
        person.score = 2 + Math.round((rank * 97) / last);
    });

    const seen = new Set();

    for (const person of ROSTER) {
        if (seen.has(person.score)) {
            throw new Error(`Still a tie at ${person.score}`);
        }
        seen.add(person.score);
    }
}

function writePeople() {
    const lines = ROSTER.map((person) => {
        return [
            "    {",
            `        name: ${JSON.stringify(person.name)},`,
            `        years: ${JSON.stringify(person.years)},`,
            `        role: ${JSON.stringify(person.role)},`,
            `        score: ${person.score},`,
            `        image: ${JSON.stringify(person.image)},`,
            `        wiki: ${JSON.stringify(person.wiki)}`,
            "    }"
        ].join("\n");
    });

    const output = [
        "// ==========================================================",
        "// people.js",
        "//",
        "// GENERATED FILE - do not edit by hand.",
        "// Source roster + image downloader: tools/build.mjs",
        "// Regenerate with:  node tools/build.mjs",
        "// ==========================================================",
        "",
        "const ROSTER = [",
        lines.join(",\n"),
        "];",
        "",
        "// Allow tools/build.mjs style tooling to read this file too.",
        "if (typeof module !== \"undefined\") {",
        "    module.exports = ROSTER;",
        "}",
        ""
    ].join("\n");

    return fs.writeFile(path.join(ROOT, "people.js"), output, "utf8");
}

async function writeCredits(portraits) {
    const rows = ROSTER.filter((person) => person.image).map((person) => {
        const portrait = portraits.get(person.wiki) || {};
        const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(person.wiki)}`;
        return `| [${person.name}](${url}) | ${portrait.artist || "unknown"} | ${portrait.license || "unknown"} | ${portrait.thumb || ""} |`;
    });

    const output = [
        "# Image credits",
        "",
        "Every portrait in `images/` comes from Wikipedia / Wikimedia Commons.",
        "Images were resized to 400px wide. Full-size originals are at the links below.",
        "",
        "| Person | Author | Licence | Source |",
        "| --- | --- | --- | --- |",
        ...rows,
        ""
    ].join("\n");

    return fs.writeFile(path.join(IMAGES_DIR, "CREDITS.md"), output, "utf8");
}

// ------------------------------------------------------------
// Run
// ------------------------------------------------------------

async function main() {
    console.log(`Building ${ROSTER.length} people...`);
    normalizeScores();
    console.log("  scores normalised, no ties");

    console.log("Looking up portraits on Wikipedia...");
    const portraits = await findPortraits();

    console.log("Downloading images...");
    await download(portraits);

    console.log("Writing people.js...");
    await writePeople();

    console.log("Writing images/CREDITS.md...");
    await writeCredits(portraits);

    const missing = ROSTER.filter((person) => !person.image);
    console.log(`Done. ${ROSTER.length - missing.length}/${ROSTER.length} have a photo.`);

    if (missing.length) {
        console.log(`No photo (initials will be used): ${missing.map((p) => p.name).join(", ")}`);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
