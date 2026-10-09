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
// tag = the chip shown on the card (Musician, Streamer, ...)
// ------------------------------------------------------------

const ROSTER = [
    // --- Activists & reformers -------------------------------------
    { name: "Martin Luther King Jr.", wiki: "Martin Luther King Jr.", years: "1929-1968", role: "Civil rights leader", tag: "Activist" },
    { name: "Mahatma Gandhi", wiki: "Mahatma Gandhi", years: "1869-1948", role: "Indian independence leader", tag: "Activist" },
    { name: "Nelson Mandela", wiki: "Nelson Mandela", years: "1918-2013", role: "Anti-apartheid leader", tag: "Activist" },
    { name: "Rosa Parks", wiki: "Rosa Parks", years: "1913-2005", role: "Civil rights icon", tag: "Activist" },
    { name: "Harriet Tubman", wiki: "Harriet Tubman", years: "c. 1822-1913", role: "Underground Railroad conductor", tag: "Activist" },
    { name: "Mother Teresa", wiki: "Mother Teresa", years: "1910-1997", role: "Missionary of the poor", tag: "Activist" },

    // --- Political leaders -----------------------------------------
    { name: "Abraham Lincoln", wiki: "Abraham Lincoln", years: "1809-1865", role: "Ended slavery in the US", tag: "Leader" },
    { name: "Winston Churchill", wiki: "Winston Churchill", years: "1874-1965", role: "Wartime British prime minister", tag: "Leader" },
    { name: "Franklin D. Roosevelt", wiki: "Franklin D. Roosevelt", years: "1882-1945", role: "US president, New Deal and WWII", tag: "Leader" },
    { name: "John F. Kennedy", wiki: "John F. Kennedy", years: "1917-1963", role: "US president", tag: "Leader" },
    { name: "Ronald Reagan", wiki: "Ronald Reagan", years: "1911-2004", role: "US president", tag: "Leader" },
    { name: "George Washington", wiki: "George Washington", years: "1732-1799", role: "First US president", tag: "Leader" },
    { name: "Thomas Jefferson", wiki: "Thomas Jefferson", years: "1743-1826", role: "US founding father", tag: "Leader" },
    { name: "Cleopatra", wiki: "Cleopatra", years: "69-30 BC", role: "Queen of Egypt", tag: "Leader" },

    // --- Dictators & villains --------------------------------------
    { name: "Adolf Hitler", wiki: "Adolf Hitler", years: "1889-1945", role: "Nazi dictator", tag: "Dictator" },
    { name: "Joseph Stalin", wiki: "Joseph Stalin", years: "1878-1953", role: "Soviet dictator", tag: "Dictator" },
    { name: "Mao Zedong", wiki: "Mao Zedong", years: "1893-1976", role: "Communist China's chairman", tag: "Dictator" },
    { name: "Vladimir Lenin", wiki: "Vladimir Lenin", years: "1870-1924", role: "Bolshevik revolutionary", tag: "Dictator" },
    { name: "Saddam Hussein", wiki: "Saddam Hussein", years: "1937-2006", role: "Iraqi dictator", tag: "Dictator" },

    // --- Ancient & imperial rulers ---------------------------------
    { name: "Julius Caesar", wiki: "Julius Caesar", years: "100-44 BC", role: "Roman general and dictator", tag: "Ruler" },
    { name: "Alexander the Great", wiki: "Alexander the Great", years: "356-323 BC", role: "Macedonian king", tag: "Ruler" },
    { name: "Genghis Khan", wiki: "Genghis Khan", years: "c. 1162-1227", role: "Mongol emperor", tag: "Ruler" },
    { name: "Henry VIII", wiki: "Henry VIII of England", years: "1491-1547", role: "King of England", tag: "Ruler" },
    { name: "Napoleon Bonaparte", wiki: "Napoleon", years: "1769-1821", role: "Emperor of the French", tag: "Ruler" },

    // --- Thinkers ---------------------------------------------------
    { name: "Socrates", wiki: "Socrates", years: "470-399 BC", role: "Greek philosopher", tag: "Thinker" },
    { name: "Plato", wiki: "Plato", years: "428-348 BC", role: "Greek philosopher", tag: "Thinker" },
    { name: "Aristotle", wiki: "Aristotle", years: "384-322 BC", role: "Greek philosopher", tag: "Thinker" },
    { name: "Sun Tzu", wiki: "Sun Tzu", years: "c. 544-496 BC", role: "Strategist and philosopher", tag: "Thinker" },

    // --- Scientists -------------------------------------------------
    { name: "Albert Einstein", wiki: "Albert Einstein", years: "1879-1955", role: "Theoretical physicist", tag: "Scientist" },
    { name: "Isaac Newton", wiki: "Isaac Newton", years: "1643-1727", role: "Physicist and mathematician", tag: "Scientist" },
    { name: "Marie Curie", wiki: "Marie Curie", years: "1867-1934", role: "Physicist and chemist", tag: "Scientist" },
    { name: "Nikola Tesla", wiki: "Nikola Tesla", years: "1856-1943", role: "Inventor and engineer", tag: "Scientist" },
    { name: "Thomas Edison", wiki: "Thomas Edison", years: "1847-1931", role: "Inventor", tag: "Scientist" },
    { name: "Galileo Galilei", wiki: "Galileo Galilei", years: "1564-1642", role: "Astronomer and physicist", tag: "Scientist" },
    { name: "Charles Darwin", wiki: "Charles Darwin", years: "1809-1882", role: "Naturalist", tag: "Scientist" },
    { name: "Stephen Hawking", wiki: "Stephen Hawking", years: "1942-2018", role: "Theoretical physicist", tag: "Scientist" },

    // --- Artists & writers -----------------------------------------
    { name: "William Shakespeare", wiki: "William Shakespeare", years: "1564-1616", role: "Playwright and poet", tag: "Artist" },
    { name: "Leonardo da Vinci", wiki: "Leonardo da Vinci", years: "1452-1519", role: "Artist and inventor", tag: "Artist" },
    { name: "Michelangelo", wiki: "Michelangelo", years: "1475-1564", role: "Artist and sculptor", tag: "Artist" },
    { name: "Vincent van Gogh", wiki: "Vincent van Gogh", years: "1853-1890", role: "Painter", tag: "Artist" },
    { name: "Pablo Picasso", wiki: "Pablo Picasso", years: "1881-1973", role: "Painter", tag: "Artist" },
    { name: "Ludwig van Beethoven", wiki: "Ludwig van Beethoven", years: "1770-1827", role: "Composer", tag: "Artist" },
    { name: "Wolfgang Amadeus Mozart", wiki: "Wolfgang Amadeus Mozart", years: "1756-1791", role: "Composer", tag: "Artist" },
    { name: "Mark Twain", wiki: "Mark Twain", years: "1835-1910", role: "Author and humorist", tag: "Artist" },

    // --- Humanitarian, explorers, athletes -------------------------
    { name: "Anne Frank", wiki: "Anne Frank", years: "1929-1945", role: "Diary writer, Holocaust victim", tag: "Pioneer" },
    { name: "Christopher Columbus", wiki: "Christopher Columbus", years: "1451-1506", role: "Explorer", tag: "Pioneer" },
    { name: "Amelia Earhart", wiki: "Amelia Earhart", years: "1897-1937", role: "Aviation pioneer", tag: "Pioneer" },
    { name: "Muhammad Ali", wiki: "Muhammad Ali", years: "1942-2016", role: "Boxer and activist", tag: "Pioneer" },
    { name: "Jesse Owens", wiki: "Jesse Owens", years: "1913-1980", role: "Olympic sprinter", tag: "Pioneer" },

    // --- Musicians --------------------------------------------------
    { name: "Michael Jackson", wiki: "Michael Jackson", years: "1958-2009", role: "King of Pop", tag: "Musician" },
    { name: "Elvis Presley", wiki: "Elvis Presley", years: "1935-1977", role: "King of Rock and Roll", tag: "Musician" },
    { name: "John Lennon", wiki: "John Lennon", years: "1940-1980", role: "Beatle and peace campaigner", tag: "Musician" },
    { name: "Beyonce", wiki: "Beyonce", years: "b. 1981", role: "Singer and performer", tag: "Musician" },
    { name: "Taylor Swift", wiki: "Taylor Swift", years: "b. 1989", role: "Singer-songwriter", tag: "Musician" },
    { name: "Drake", wiki: "Drake (musician)", years: "b. 1986", role: "Rapper and singer", tag: "Musician" },
    { name: "Kanye West", wiki: "Kanye West", years: "b. 1977", role: "Rapper and producer", tag: "Musician" },
    { name: "Eminem", wiki: "Eminem", years: "b. 1972", role: "Rapper", tag: "Musician" },
    { name: "Jay-Z", wiki: "Jay-Z", years: "b. 1969", role: "Rapper and businessman", tag: "Musician" },
    { name: "Madonna", wiki: "Madonna (entertainer)", years: "b. 1958", role: "Singer and pop icon", tag: "Musician" },
    { name: "Lady Gaga", wiki: "Lady Gaga", years: "b. 1986", role: "Singer and actress", tag: "Musician" },
    { name: "Ariana Grande", wiki: "Ariana Grande", years: "b. 1993", role: "Singer and actress", tag: "Musician" },
    { name: "Bruno Mars", wiki: "Bruno Mars", years: "b. 1985", role: "Singer-songwriter", tag: "Musician" },
    { name: "Adele", wiki: "Adele", years: "b. 1988", role: "Singer-songwriter", tag: "Musician" },
    { name: "Whitney Houston", wiki: "Whitney Houston", years: "1963-2012", role: "Singer and actress", tag: "Musician" },
    { name: "Bob Marley", wiki: "Bob Marley", years: "1945-1981", role: "Reggae pioneer", tag: "Musician" },
    { name: "Dolly Parton", wiki: "Dolly Parton", years: "b. 1946", role: "Country singer and philanthropist", tag: "Musician" },
    { name: "Frank Sinatra", wiki: "Frank Sinatra", years: "1915-1998", role: "Singer and actor", tag: "Musician" },
    { name: "Tupac Shakur", wiki: "Tupac Shakur", years: "1971-1996", role: "Rapper and actor", tag: "Musician" },
    { name: "Snoop Dogg", wiki: "Snoop Dogg", years: "b. 1971", role: "Rapper and entertainer", tag: "Musician" },
    { name: "Billie Eilish", wiki: "Billie Eilish", years: "b. 2001", role: "Singer-songwriter", tag: "Musician" },
    { name: "Olivia Rodrigo", wiki: "Olivia Rodrigo", years: "b. 2003", role: "Singer-songwriter", tag: "Musician" },
    { name: "Bad Bunny", wiki: "Bad Bunny", years: "b. 1994", role: "Reggaeton artist", tag: "Musician" },
    { name: "Shakira", wiki: "Shakira", years: "b. 1977", role: "Singer and dancer", tag: "Musician" },
    { name: "Billy Joel", wiki: "Billy Joel", years: "b. 1949", role: "Singer-songwriter", tag: "Musician" },
    { name: "Elton John", wiki: "Elton John", years: "b. 1947", role: "Singer-songwriter", tag: "Musician" },
    { name: "Katy Perry", wiki: "Katy Perry", years: "b. 1984", role: "Singer", tag: "Musician" },
    { name: "Ed Sheeran", wiki: "Ed Sheeran", years: "b. 1991", role: "Singer-songwriter", tag: "Musician" },

    // --- Internet creators & influencers ---------------------------
    { name: "MrBeast", wiki: "MrBeast", years: "b. 1998", role: "YouTuber and philanthropist", tag: "Influencer" },
    { name: "PewDiePie", wiki: "PewDiePie", years: "b. 1989", role: "YouTuber", tag: "Influencer" },
    { name: "Logan Paul", wiki: "Logan Paul", years: "b. 1995", role: "Influencer and boxer", tag: "Influencer" },
    { name: "Jake Paul", wiki: "Jake Paul", years: "b. 1997", role: "Influencer and boxer", tag: "Influencer" },
    { name: "KSI", wiki: "KSI", years: "b. 1993", role: "Influencer and boxer", tag: "Influencer" },
    { name: "Addison Rae", wiki: "Addison Rae", years: "b. 2000", role: "Creator and singer", tag: "Influencer" },
    { name: "iShowSpeed", wiki: "IShowSpeed", years: "b. 2005", role: "Streamer and YouTuber", tag: "Influencer" },
    { name: "Markiplier", wiki: "Markiplier", years: "b. 1989", role: "Gaming YouTuber", tag: "Influencer" },
    { name: "Andrew Tate", wiki: "Andrew Tate", years: "b. 1986", role: "Internet personality", tag: "Influencer" },
    { name: "Bella Poarch", wiki: "Bella Poarch", years: "b. 1997", role: "TikTok creator", tag: "Influencer" },
    { name: "DanTDM", wiki: "DanTDM", years: "b. 1991", role: "Gaming YouTuber", tag: "Influencer" },
    { name: "MatPat", wiki: "MatPat", years: "b. 1986", role: "YouTuber and theorist", tag: "Influencer" },
    { name: "SSSniperWolf", wiki: "SSSniperWolf", years: "b. 1992", role: "YouTuber", tag: "Influencer" },
    { name: "Piper Rockelle", wiki: "Piper Rockelle", years: "b. 2007", role: "Content creator and model", tag: "Influencer" },

    // --- Twitch streamers ------------------------------------------
    { name: "Ninja", wiki: "Ninja (gamer)", years: "b. 1991", role: "Streamer and YouTuber", tag: "Streamer" },
    { name: "Pokimane", wiki: "Pokimane", years: "b. 1996", role: "Streamer and creator", tag: "Streamer" },
    { name: "Tyler1", wiki: "Tyler1", years: "b. 1995", role: "Twitch streamer", tag: "Streamer" },
    { name: "Kai Cenat", wiki: "Kai Cenat", years: "b. 2001", role: "Streamer and entertainer", tag: "Streamer" },
    { name: "Valkyrae", wiki: "Valkyrae", years: "b. 1992", role: "Streamer and YouTuber", tag: "Streamer" },
    { name: "Dr Disrespect", wiki: "Dr Disrespect", years: "b. 1982", role: "Streamer", tag: "Streamer" },
    { name: "Ludwig", wiki: "Ludwig Ahgren", years: "b. 1995", role: "Streamer and YouTuber", tag: "Streamer" },

    // --- OnlyFans & platform creators -------------------------------
    { name: "Mia Khalifa", wiki: "Mia Khalifa", years: "b. 1993", role: "Media personality", tag: "OnlyFans" },
    { name: "Amouranth", wiki: "Amouranth", years: "b. 1993", role: "Streamer and creator", tag: "OnlyFans" },
    { name: "Sophie Rain", wiki: "Sophie Rain", years: "b. 2004", role: "Internet personality", tag: "OnlyFans" },
    { name: "Bonnie Blue", wiki: "Bonnie Blue", years: "b. 1999", role: "Adult film actress", tag: "OnlyFans" },
    { name: "Riley Reid", wiki: "Riley Reid", years: "b. 1991", role: "Adult film actress", tag: "OnlyFans" },
    { name: "Mia Malkova", wiki: "Mia Malkova", years: "b. 1992", role: "Adult film actress and media personality", tag: "OnlyFans" },
    { name: "Lily Phillips", wiki: "Lily Phillips", years: "b. 2001", role: "Adult film actress", tag: "OnlyFans" },
    { name: "Abella Danger", wiki: "Abella Danger", years: "b. 1995", role: "Adult film actress and director", tag: "OnlyFans" },

    // --- Fictional characters --------------------------------------
    //
    // `years` is the debut (first appearance), not a lifespan, so it reads
    // "Debut 1997". `commons` points at a Wikimedia Commons file for anyone
    // whose Wikipedia page image is missing, a logo, or otherwise unusable -
    // it wins over the Wikipedia thumbnail and is credited from Commons.

    // --- Fictional: literature ----------------------------------
    { name: "Harry Potter", wiki: "Harry Potter", years: "Debut 1997", role: "Boy wizard of Hogwarts", tag: "Literature", commons: "File:DSC09948 - Harry Potter (36409144493).jpg" },
    { name: "Hermione Granger", wiki: "Hermione Granger", years: "Debut 1997", role: "Hogwarts witch and bookworm", tag: "Literature", commons: "File:Hermione Granger by Reilly Brown.JPG" },
    { name: "Sherlock Holmes", wiki: "Sherlock Holmes", years: "Debut 1887", role: "Consulting detective of Baker Street", tag: "Literature" },
    { name: "Dracula", wiki: "Dracula", years: "Debut 1897", role: "Transylvanian vampire count", tag: "Literature", commons: "File:Bela Lugosi as Dracula, anonymous photograph from 1931, Universal Studios.jpg" },
    { name: "Gandalf", wiki: "Gandalf", years: "Debut 1954", role: "Wizard of Middle-earth", tag: "Literature", commons: "File:Gandalf Cosplay at the 2014 New York Comic Con.jpg" },
    { name: "Alice", wiki: "Alice (Alice's Adventures in Wonderland)", years: "Debut 1865", role: "Girl down the rabbit hole", tag: "Literature" },

    // --- Fictional: comics --------------------------------------
    { name: "Superman", wiki: "Superman", years: "Debut 1938", role: "Kryptonian hero of Metropolis", tag: "Comic", commons: "File:Superman MultiVersus.png" },
    { name: "Batman", wiki: "Batman", years: "Debut 1939", role: "Caped crusader of Gotham", tag: "Comic", commons: "File:San Diego Comic-Con 2024 Masquerade - Cosplay of Batman 3.jpg" },
    { name: "Spider-Man", wiki: "Spider-Man", years: "Debut 1962", role: "Web-slinging hero of New York", tag: "Comic", commons: "File:Comikaze 2014 - Amazing Spider-Man (15733465882).jpg" },
    { name: "Wonder Woman", wiki: "Wonder Woman", years: "Debut 1941", role: "Amazon warrior princess", tag: "Comic", commons: "File:Wonder Woman MultiVersus.png" },
    { name: "The Joker", wiki: "Joker (character)", years: "Debut 1940", role: "Gotham's clown prince of crime", tag: "Comic", commons: "File:Cesar Romero - The Joker 1967 (colored).png" },
    { name: "Harley Quinn", wiki: "Harley Quinn", years: "Debut 1992", role: "Arkham psychiatrist turned villain", tag: "Comic", commons: "File:Harley Quinn MultiVersus.png" },

    // --- Fictional: film & TV -----------------------------------
    { name: "Darth Vader", wiki: "Darth Vader", years: "Debut 1977", role: "Sith lord in a black mask", tag: "Film & TV", commons: "File:Darth Vader mural by Pieksa in Kraków, 20210530 1744 3355 DxO.jpg" },
    { name: "Luke Skywalker", wiki: "Luke Skywalker", years: "Debut 1977", role: "Rebel pilot turned Jedi", tag: "Film & TV" },
    { name: "James Bond", wiki: "James Bond (literary character)", years: "Debut 1953", role: "007, British secret agent", tag: "Film & TV", commons: "File:James Bond at Madame Tussauds, London.jpg" },
    { name: "Indiana Jones", wiki: "Indiana Jones", years: "Debut 1981", role: "Archaeologist in a fedora", tag: "Film & TV", commons: "File:Indiana Jones Statue Leicester Square.jpg" },
    { name: "Rocky Balboa", wiki: "Rocky Balboa", years: "Debut 1976", role: "Boxer from Philadelphia", tag: "Film & TV", commons: "File:Estatua Rocky.jpg" },
    { name: "Katniss Everdeen", wiki: "Katniss Everdeen", years: "Debut 2008", role: "Tribute who sparked a rebellion", tag: "Film & TV" },
    { name: "Walter White", wiki: "Walter White", years: "Debut 2008", role: "Chemist turned meth kingpin", tag: "Film & TV", commons: "File:Dry brush portrait of Walter White from Breaking Bad by SD (2015).jpg" },
    { name: "Willy Wonka", wiki: "Willy Wonka", years: "Debut 1964", role: "Eccentric chocolate factory owner", tag: "Film & TV", commons: "File:Katsucon 2017-02-18 16.47.59 (32624754150).jpg" },
    { name: "Daenerys Targaryen", wiki: "Daenerys Targaryen", years: "Debut 1996", role: "Mother of Dragons", tag: "Film & TV", commons: "File:Daenerys Targaryen **EXPLORED** (13148766613).jpg" },

    // --- Fictional: cartoons -------------------------------------
    { name: "Mickey Mouse", wiki: "Mickey Mouse", years: "Debut 1928", role: "Disney's original cartoon mouse", tag: "Cartoon", commons: "File:Mickey's WaterWorks Parade Float.jpg" },
    { name: "Bugs Bunny", wiki: "Bugs Bunny", years: "Debut 1940", role: "Carrot-munching trickster rabbit", tag: "Cartoon", commons: "File:Bugs Bunny MultiVersus.png" },
    { name: "SpongeBob SquarePants", wiki: "SpongeBob SquarePants", years: "Debut 1999", role: "Fry cook of Bikini Bottom", tag: "Cartoon", commons: "File:SpongeBob SquarePants character.png" },
    { name: "Scooby-Doo", wiki: "Scooby-Doo", years: "Debut 1969", role: "Mystery-solving Great Dane", tag: "Cartoon", commons: "File:Cosplay of Scooby-Doo and Velma Dinkley at Made in Asia 2022 (52109874749).jpg" },
    { name: "Cinderella", wiki: "Cinderella", years: "Debut 1950", role: "Princess of the glass slipper", tag: "Cartoon", commons: "File:Cosplay of Cinderella at GalaxyCon Richmond 2020 (49665987313).jpg" },
    { name: "Elsa", wiki: "Elsa (Frozen)", years: "Debut 2013", role: "Snow queen of Arendelle", tag: "Cartoon", commons: "File:Elsa - La Reine des neiges - 20150804 15h20 (10903).jpg" },
    { name: "Simba", wiki: "Simba", years: "Debut 1994", role: "Lion king of the Pride Lands", tag: "Cartoon", commons: "File:Beto Sargentelli como Simba em O Rei Leão.jpg" },
    { name: "Shrek", wiki: "Shrek", years: "Debut 2001", role: "Ogre of the swamp", tag: "Cartoon", commons: "File:Shrek Madame Tussauds London.jpg" },
    { name: "Buzz Lightyear", wiki: "Buzz Lightyear", years: "Debut 1995", role: "Toy space ranger", tag: "Cartoon" },
    { name: "Homer Simpson", wiki: "Homer Simpson", years: "Debut 1989", role: "Springfield's donut-loving dad", tag: "Cartoon", commons: "File:Cosplay of Homer Simpson at Comic Fiesta 2022.jpg" },

    // --- Fictional: games ----------------------------------------
    { name: "Mario", wiki: "Mario (character)", years: "Debut 1981", role: "Plumber and Nintendo mascot", tag: "Game", commons: "File:Cosplayer of Mario, Mario Kart at Otakuthon 20160807.jpg" },
    { name: "Link", wiki: "Link (The Legend of Zelda)", years: "Debut 1986", role: "Hero of Hyrule", tag: "Game", commons: "File:Cosplay of Link from The Legend of Zelda at Yukicon 2014 (20140118174122 IMG 5684 - Desucon Frostbite 2014 - matiast1).jpg" },
    { name: "Sonic the Hedgehog", wiki: "Sonic the Hedgehog", years: "Debut 1991", role: "Sega's speedy blue hedgehog", tag: "Game", commons: "File:SONIC Alton Towers.jpg" },
    { name: "Lara Croft", wiki: "Lara Croft", years: "Debut 1996", role: "Tomb-raiding archaeologist", tag: "Game", commons: "File:Comikaze 2013 - Lara Croft cosplay.jpg" },

    // --- Fictional: anime ----------------------------------------
    { name: "Goku", wiki: "Goku", years: "Debut 1984", role: "Saiyan fighter of Dragon Ball", tag: "Anime", commons: "File:Goku Cosplay by. Angel.jpg" },
    { name: "Naruto Uzumaki", wiki: "Naruto Uzumaki", years: "Debut 1999", role: "Ninja who dreams of Hokage", tag: "Anime", commons: "File:Cosplay of Naruto Uzumaki from Naruto Shippuden at AniManGaki 2014, Day 2 029 (20140810).jpg" },
    { name: "Sailor Moon", wiki: "Sailor Moon", years: "Debut 1991", role: "Guardian of love and justice", tag: "Anime", commons: "File:Japan Expo 2024 Sailor Moon.jpg" },
    { name: "Pikachu", wiki: "Pikachu", years: "Debut 1996", role: "Electric-type Pokemon mascot", tag: "Anime", commons: "File:Cosplay of Pikachu from Pokemon at GalaxyCon Richmond 2020 (49666783737).jpg" },
    { name: "Monkey D. Luffy", wiki: "Monkey D. Luffy", years: "Debut 1997", role: "Pirate captain of the Straw Hats", tag: "Anime", commons: "File:Figura Monkey D Luffy A74007320250206.jpg" }
];

// ------------------------------------------------------------
// Portraits that do NOT come from Wikipedia.
//
// Some people have no free-licensed Wikipedia/Commons portrait, but a
// good photo exists elsewhere. Drop the file into ./images and list it
// here: the build skips the Wikipedia lookup for them and credits them
// from this table instead.
// ------------------------------------------------------------

const LOCAL_IMAGES = {
    "Sophie Rain": {
        file: "images/sophie-rain.jpg",
        artist: "Sophie Rain",
        license: "CC BY 4.0",
        source: "https://commons.wikimedia.org/wiki/File:Sophie_Rain.jpg"
    },
    "Piper Rockelle": {
        file: "images/piper-rockelle.jpg",
        artist: "Piper Rockelle (public profile photo)",
        license: "Profile photo - not freely licensed",
        source: "https://www.tiktok.com/@piperrockelle"
    }
};

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

async function api(host, params) {
    const url =
        `https://${host}/w/api.php?` +
        new URLSearchParams({ format: "json", origin: "*", ...params });

    const response = await fetch(url, {
        headers: {
            "User-Agent": "rankdle-build/1.0 (static site build script)"
        }
    });

    if (!response.ok) {
        throw new Error(`${host} responded ${response.status}`);
    }

    return response.json();
}

async function wikipedia(params) {
    return api("en.wikipedia.org", params);
}

async function commons(params) {
    return api("commons.wikimedia.org", params);
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
// 1b. Portraits that live on Wikimedia Commons instead
//
// Fictional characters rarely have a usable Wikipedia page image (what
// Wikipedia shows is usually a non-free logo or film still), so those
// entries name a Commons file directly: `commons: "File:Whatever.jpg"`.
// ------------------------------------------------------------

async function findCommonsPortraits() {
    const results = new Map(); // person name -> { thumb, license, artist, source }
    const wanted = ROSTER.filter((person) => person.commons);

    if (!wanted.length) return results;

    for (const batch of chunk(wanted, 20)) {
        const data = await commons({
            action: "query",
            prop: "imageinfo",
            iiprop: "url|extmetadata",
            iiurlwidth: String(THUMB_WIDTH),
            redirects: "1",
            titles: batch.map((person) => person.commons).join("|")
        });

        const resolve = makeResolver(data);
        const pages = Object.values(data.query?.pages || {});

        for (const person of batch) {
            const title = resolve(person.commons);
            const page =
                pages.find((candidate) => candidate.title === title) ||
                pages.find((candidate) => candidate.title === person.commons);

            const info = page?.imageinfo?.[0];

            if (!info?.url) {
                console.warn(`  ! no Commons file for ${person.name} (${person.commons})`);
                continue;
            }

            const meta = info.extmetadata || {};

            results.set(person.name, {
                thumb: (info.thumburl || info.url).split("?")[0],
                license: stripHtml(meta.LicenseShortName?.value) || "unknown",
                artist: stripHtml(meta.Artist?.value) || "unknown",
                source: `https://commons.wikimedia.org/wiki/${
                    encodeURIComponent(person.commons.replace(/ /g, "_"))
                }`
            });
        }
    }

    console.log(`  found ${results.size}/${wanted.length} Commons images`);

    return results;
}

// ------------------------------------------------------------
// 2. Download the portraits
// ------------------------------------------------------------

async function download(portraits, commonsPortraits) {
    await fs.mkdir(IMAGES_DIR, { recursive: true });

    const jobs = [];

    for (const person of ROSTER) {
        // Photos kept on disk by hand (see LOCAL_IMAGES) - never re-fetched.
        if (LOCAL_IMAGES[person.name]) {
            person.image = LOCAL_IMAGES[person.name].file;
            continue;
        }

        // A named Commons file beats whatever Wikipedia would show - for
        // fictional characters that is usually a logo or nothing at all.
        const portrait =
            commonsPortraits.get(person.name) || portraits.get(person.wiki);

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

            // Rate limits happen (429) - retry with a short backoff rather
            // than silently dropping the portrait.
            let failure = null;

            for (let attempt = 1; attempt <= 4; attempt++) {
                try {
                    const response = await fetch(job.portrait.thumb, {
                        headers: { "User-Agent": "rankdle-build/1.0" }
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status}`);
                    }

                    const bytes = Buffer.from(await response.arrayBuffer());
                    await fs.writeFile(job.absolute, bytes);
                    failure = null;
                    break;
                } catch (error) {
                    failure = error;
                    if (attempt < 4) {
                        await new Promise((resolve) => setTimeout(resolve, 750 * attempt));
                    }
                }
            }

            if (failure) {
                console.warn(`  ! could not download ${job.person.name}: ${failure.message}`);
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

function writePeople() {
    const lines = ROSTER.map((person) => {
        return [
            "    {",
            `        name: ${JSON.stringify(person.name)},`,
            `        years: ${JSON.stringify(person.years)},`,
            `        role: ${JSON.stringify(person.role)},`,
            `        tag: ${JSON.stringify(person.tag || "")},`,
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

// Every name on the site, A-Z - handy as a checklist / for sharing.
function writeNames() {
    const names = ROSTER.map((person) => person.name)
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

    return fs.writeFile(path.join(ROOT, "names.txt"), names.join("\n") + "\n", "utf8");
}

async function writeCredits(portraits, commonsPortraits) {
    const rows = ROSTER.filter((person) => person.image).map((person) => {
        const local = LOCAL_IMAGES[person.name];

        if (local) {
            return `| [${person.name}](${local.source}) | ${local.artist} | ${local.license} | ${local.source} |`;
        }

        const fromCommons = commonsPortraits.get(person.name);

        if (fromCommons) {
            return `| [${person.name}](${fromCommons.source}) | ${fromCommons.artist} | ${fromCommons.license} | ${fromCommons.thumb} |`;
        }

        const portrait = portraits.get(person.wiki) || {};
        const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(person.wiki)}`;
        return `| [${person.name}](${url}) | ${portrait.artist || "unknown"} | ${portrait.license || "unknown"} | ${portrait.thumb || ""} |`;
    });

    const output = [
        "# Image credits",
        "",
        "Portraits in `images/` come from Wikipedia / Wikimedia Commons unless",
        "the licence column says otherwise (a couple are local photos listed in",
        "`LOCAL_IMAGES` inside `tools/build.mjs`).",
        "Wikipedia images were resized to 400px wide. Full-size originals are at the links below.",
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

    console.log("Looking up portraits on Wikipedia...");
    const portraits = await findPortraits();

    console.log("Looking up Commons files...");
    const commonsPortraits = await findCommonsPortraits();

    console.log("Downloading images...");
    await download(portraits, commonsPortraits);

    console.log("Writing people.js...");
    await writePeople();

    console.log("Writing names.txt...");
    await writeNames();

    console.log("Writing images/CREDITS.md...");
    await writeCredits(portraits, commonsPortraits);

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
