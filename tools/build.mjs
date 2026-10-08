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
    { name: "Malcolm X", wiki: "Malcolm X", years: "1925-1965", role: "Civil rights activist", tag: "Activist" },
    { name: "Rosa Parks", wiki: "Rosa Parks", years: "1913-2005", role: "Civil rights icon", tag: "Activist" },
    { name: "Harriet Tubman", wiki: "Harriet Tubman", years: "c. 1822-1913", role: "Underground Railroad conductor", tag: "Activist" },
    { name: "Susan B. Anthony", wiki: "Susan B. Anthony", years: "1820-1906", role: "Women's suffrage leader", tag: "Activist" },
    { name: "Desmond Tutu", wiki: "Desmond Tutu", years: "1931-2021", role: "Anti-apartheid archbishop", tag: "Activist" },
    { name: "The Dalai Lama", wiki: "14th Dalai Lama", years: "b. 1935", role: "Spiritual leader in exile", tag: "Activist" },
    { name: "Mother Teresa", wiki: "Mother Teresa", years: "1910-1997", role: "Missionary of the poor", tag: "Activist" },

    // --- Political leaders -----------------------------------------
    { name: "Abraham Lincoln", wiki: "Abraham Lincoln", years: "1809-1865", role: "Ended slavery in the US", tag: "Leader" },
    { name: "Winston Churchill", wiki: "Winston Churchill", years: "1874-1965", role: "Wartime British prime minister", tag: "Leader" },
    { name: "Franklin D. Roosevelt", wiki: "Franklin D. Roosevelt", years: "1882-1945", role: "US president, New Deal and WWII", tag: "Leader" },
    { name: "John F. Kennedy", wiki: "John F. Kennedy", years: "1917-1963", role: "US president", tag: "Leader" },
    { name: "Ronald Reagan", wiki: "Ronald Reagan", years: "1911-2004", role: "US president", tag: "Leader" },
    { name: "Margaret Thatcher", wiki: "Margaret Thatcher", years: "1925-2013", role: "British prime minister", tag: "Leader" },
    { name: "George Washington", wiki: "George Washington", years: "1732-1799", role: "First US president", tag: "Leader" },
    { name: "Thomas Jefferson", wiki: "Thomas Jefferson", years: "1743-1826", role: "US founding father", tag: "Leader" },
    { name: "Simon Bolivar", wiki: "Simón Bolívar", years: "1783-1830", role: "Liberator of South America", tag: "Leader" },
    { name: "Jawaharlal Nehru", wiki: "Jawaharlal Nehru", years: "1889-1964", role: "First prime minister of India", tag: "Leader" },
    { name: "Haile Selassie", wiki: "Haile Selassie", years: "1892-1975", role: "Emperor of Ethiopia", tag: "Leader" },
    { name: "Mustafa Kemal Ataturk", wiki: "Mustafa Kemal Atatürk", years: "1881-1938", role: "Founder of modern Turkey", tag: "Leader" },
    { name: "Cleopatra", wiki: "Cleopatra", years: "69-30 BC", role: "Queen of Egypt", tag: "Leader" },
    { name: "Elizabeth I", wiki: "Elizabeth I", years: "1533-1603", role: "Queen of England", tag: "Leader" },
    { name: "Queen Victoria", wiki: "Queen Victoria", years: "1819-1901", role: "Queen of the United Kingdom", tag: "Leader" },

    // --- Dictators & villains --------------------------------------
    { name: "Adolf Hitler", wiki: "Adolf Hitler", years: "1889-1945", role: "Nazi dictator", tag: "Dictator" },
    { name: "Joseph Stalin", wiki: "Joseph Stalin", years: "1878-1953", role: "Soviet dictator", tag: "Dictator" },
    { name: "Mao Zedong", wiki: "Mao Zedong", years: "1893-1976", role: "Communist China's chairman", tag: "Dictator" },
    { name: "Vladimir Lenin", wiki: "Vladimir Lenin", years: "1870-1924", role: "Bolshevik revolutionary", tag: "Dictator" },
    { name: "Pol Pot", wiki: "Pol Pot", years: "1925-1998", role: "Khmer Rouge leader", tag: "Dictator" },
    { name: "Idi Amin", wiki: "Idi Amin", years: "1925-2003", role: "Ugandan dictator", tag: "Dictator" },
    { name: "Saddam Hussein", wiki: "Saddam Hussein", years: "1937-2006", role: "Iraqi dictator", tag: "Dictator" },

    // --- Ancient & imperial rulers ---------------------------------
    { name: "Julius Caesar", wiki: "Julius Caesar", years: "100-44 BC", role: "Roman general and dictator", tag: "Ruler" },
    { name: "Alexander the Great", wiki: "Alexander the Great", years: "356-323 BC", role: "Macedonian king", tag: "Ruler" },
    { name: "Genghis Khan", wiki: "Genghis Khan", years: "c. 1162-1227", role: "Mongol emperor", tag: "Ruler" },
    { name: "Saladin", wiki: "Saladin", years: "1137-1193", role: "Sultan of Egypt and Syria", tag: "Ruler" },
    { name: "Catherine the Great", wiki: "Catherine the Great", years: "1729-1796", role: "Empress of Russia", tag: "Ruler" },
    { name: "Peter the Great", wiki: "Peter the Great", years: "1672-1725", role: "Tsar of Russia", tag: "Ruler" },
    { name: "Henry VIII", wiki: "Henry VIII of England", years: "1491-1547", role: "King of England", tag: "Ruler" },
    { name: "Napoleon Bonaparte", wiki: "Napoleon", years: "1769-1821", role: "Emperor of the French", tag: "Ruler" },
    { name: "Mansa Musa", wiki: "Mansa Musa", years: "c. 1280-1337", role: "Emperor of Mali", tag: "Ruler" },

    // --- Thinkers ---------------------------------------------------
    { name: "Confucius", wiki: "Confucius", years: "551-479 BC", role: "Chinese philosopher", tag: "Thinker" },
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
    { name: "Alan Turing", wiki: "Alan Turing", years: "1912-1954", role: "Mathematician and codebreaker", tag: "Scientist" },
    { name: "Rosalind Franklin", wiki: "Rosalind Franklin", years: "1920-1958", role: "Chemist and crystallographer", tag: "Scientist" },
    { name: "Stephen Hawking", wiki: "Stephen Hawking", years: "1942-2018", role: "Theoretical physicist", tag: "Scientist" },
    { name: "Jonas Salk", wiki: "Jonas Salk", years: "1914-1995", role: "Developed the polio vaccine", tag: "Scientist" },
    { name: "Louis Pasteur", wiki: "Louis Pasteur", years: "1822-1895", role: "Chemist and microbiologist", tag: "Scientist" },

    // --- Artists & writers -----------------------------------------
    { name: "William Shakespeare", wiki: "William Shakespeare", years: "1564-1616", role: "Playwright and poet", tag: "Artist" },
    { name: "Leonardo da Vinci", wiki: "Leonardo da Vinci", years: "1452-1519", role: "Artist and inventor", tag: "Artist" },
    { name: "Michelangelo", wiki: "Michelangelo", years: "1475-1564", role: "Artist and sculptor", tag: "Artist" },
    { name: "Vincent van Gogh", wiki: "Vincent van Gogh", years: "1853-1890", role: "Painter", tag: "Artist" },
    { name: "Pablo Picasso", wiki: "Pablo Picasso", years: "1881-1973", role: "Painter", tag: "Artist" },
    { name: "Ludwig van Beethoven", wiki: "Ludwig van Beethoven", years: "1770-1827", role: "Composer", tag: "Artist" },
    { name: "Wolfgang Amadeus Mozart", wiki: "Wolfgang Amadeus Mozart", years: "1756-1791", role: "Composer", tag: "Artist" },
    { name: "Johann Sebastian Bach", wiki: "Johann Sebastian Bach", years: "1685-1750", role: "Composer", tag: "Artist" },
    { name: "Jane Austen", wiki: "Jane Austen", years: "1775-1817", role: "Novelist", tag: "Artist" },
    { name: "Mark Twain", wiki: "Mark Twain", years: "1835-1910", role: "Author and humorist", tag: "Artist" },
    { name: "Fyodor Dostoevsky", wiki: "Fyodor Dostoevsky", years: "1821-1881", role: "Novelist", tag: "Artist" },
    { name: "Frida Kahlo", wiki: "Frida Kahlo", years: "1907-1954", role: "Painter", tag: "Artist" },

    // --- Humanitarian, explorers, athletes -------------------------
    { name: "Florence Nightingale", wiki: "Florence Nightingale", years: "1820-1910", role: "Founder of modern nursing", tag: "Pioneer" },
    { name: "Anne Frank", wiki: "Anne Frank", years: "1929-1945", role: "Diary writer, Holocaust victim", tag: "Pioneer" },
    { name: "Oskar Schindler", wiki: "Oskar Schindler", years: "1908-1974", role: "Saved around 1,200 Jews", tag: "Pioneer" },
    { name: "Christopher Columbus", wiki: "Christopher Columbus", years: "1451-1506", role: "Explorer", tag: "Pioneer" },
    { name: "Amelia Earhart", wiki: "Amelia Earhart", years: "1897-1937", role: "Aviation pioneer", tag: "Pioneer" },
    { name: "Muhammad Ali", wiki: "Muhammad Ali", years: "1942-2016", role: "Boxer and activist", tag: "Pioneer" },
    { name: "Jesse Owens", wiki: "Jesse Owens", years: "1913-1980", role: "Olympic sprinter", tag: "Pioneer" },

    // --- Musicians --------------------------------------------------
    { name: "Michael Jackson", wiki: "Michael Jackson", years: "1958-2009", role: "King of Pop", tag: "Musician" },
    { name: "Elvis Presley", wiki: "Elvis Presley", years: "1935-1977", role: "King of Rock and Roll", tag: "Musician" },
    { name: "Freddie Mercury", wiki: "Freddie Mercury", years: "1946-1991", role: "Queen's frontman", tag: "Musician" },
    { name: "John Lennon", wiki: "John Lennon", years: "1940-1980", role: "Beatle and peace campaigner", tag: "Musician" },
    { name: "Paul McCartney", wiki: "Paul McCartney", years: "b. 1942", role: "Beatle and songwriter", tag: "Musician" },
    { name: "Beyonce", wiki: "Beyonce", years: "b. 1981", role: "Singer and performer", tag: "Musician" },
    { name: "Taylor Swift", wiki: "Taylor Swift", years: "b. 1989", role: "Singer-songwriter", tag: "Musician" },
    { name: "Rihanna", wiki: "Rihanna", years: "b. 1988", role: "Singer and businesswoman", tag: "Musician" },
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
    { name: "Aretha Franklin", wiki: "Aretha Franklin", years: "1942-2018", role: "Queen of Soul", tag: "Musician" },
    { name: "Bob Marley", wiki: "Bob Marley", years: "1945-1981", role: "Reggae pioneer", tag: "Musician" },
    { name: "Kurt Cobain", wiki: "Kurt Cobain", years: "1967-1994", role: "Nirvana frontman", tag: "Musician" },
    { name: "Jimi Hendrix", wiki: "Jimi Hendrix", years: "1942-1970", role: "Guitarist", tag: "Musician" },
    { name: "Prince", wiki: "Prince (musician)", years: "1958-2016", role: "Singer and multi-instrumentalist", tag: "Musician" },
    { name: "Dolly Parton", wiki: "Dolly Parton", years: "b. 1946", role: "Country singer and philanthropist", tag: "Musician" },
    { name: "Johnny Cash", wiki: "Johnny Cash", years: "1932-2003", role: "Country singer", tag: "Musician" },
    { name: "Frank Sinatra", wiki: "Frank Sinatra", years: "1915-1998", role: "Singer and actor", tag: "Musician" },
    { name: "Tupac Shakur", wiki: "Tupac Shakur", years: "1971-1996", role: "Rapper and actor", tag: "Musician" },
    { name: "The Notorious B.I.G.", wiki: "The Notorious B.I.G.", years: "1972-1997", role: "Rapper", tag: "Musician" },
    { name: "Snoop Dogg", wiki: "Snoop Dogg", years: "b. 1971", role: "Rapper and entertainer", tag: "Musician" },
    { name: "Billie Eilish", wiki: "Billie Eilish", years: "b. 2001", role: "Singer-songwriter", tag: "Musician" },
    { name: "Olivia Rodrigo", wiki: "Olivia Rodrigo", years: "b. 2003", role: "Singer-songwriter", tag: "Musician" },
    { name: "The Weeknd", wiki: "The Weeknd", years: "b. 1990", role: "Singer and songwriter", tag: "Musician" },
    { name: "Bad Bunny", wiki: "Bad Bunny", years: "b. 1994", role: "Reggaeton artist", tag: "Musician" },
    { name: "Shakira", wiki: "Shakira", years: "b. 1977", role: "Singer and dancer", tag: "Musician" },
    { name: "Bruce Springsteen", wiki: "Bruce Springsteen", years: "b. 1949", role: "Rock singer-songwriter", tag: "Musician" },
    { name: "Billy Joel", wiki: "Billy Joel", years: "b. 1949", role: "Singer-songwriter", tag: "Musician" },
    { name: "Elton John", wiki: "Elton John", years: "b. 1947", role: "Singer-songwriter", tag: "Musician" },
    { name: "Stevie Wonder", wiki: "Stevie Wonder", years: "b. 1950", role: "Singer-songwriter", tag: "Musician" },
    { name: "Ray Charles", wiki: "Ray Charles", years: "1930-2004", role: "Singer and pianist", tag: "Musician" },
    { name: "Amy Winehouse", wiki: "Amy Winehouse", years: "1983-2011", role: "Singer-songwriter", tag: "Musician" },
    { name: "Selena Quintanilla", wiki: "Selena", years: "1971-1995", role: "Singer-songwriter", tag: "Musician" },
    { name: "Tina Turner", wiki: "Tina Turner", years: "1939-2023", role: "Queen of Rock 'n' Roll", tag: "Musician" },
    { name: "Cher", wiki: "Cher", years: "b. 1946", role: "Singer and actress", tag: "Musician" },
    { name: "Katy Perry", wiki: "Katy Perry", years: "b. 1984", role: "Singer", tag: "Musician" },
    { name: "Ed Sheeran", wiki: "Ed Sheeran", years: "b. 1991", role: "Singer-songwriter", tag: "Musician" },

    // --- Internet creators & influencers ---------------------------
    { name: "MrBeast", wiki: "MrBeast", years: "b. 1998", role: "YouTuber and philanthropist", tag: "Influencer" },
    { name: "PewDiePie", wiki: "PewDiePie", years: "b. 1989", role: "YouTuber", tag: "Influencer" },
    { name: "Logan Paul", wiki: "Logan Paul", years: "b. 1995", role: "Influencer and boxer", tag: "Influencer" },
    { name: "Jake Paul", wiki: "Jake Paul", years: "b. 1997", role: "Influencer and boxer", tag: "Influencer" },
    { name: "KSI", wiki: "KSI", years: "b. 1993", role: "Influencer and boxer", tag: "Influencer" },
    { name: "Khaby Lame", wiki: "Khaby Lame", years: "b. 2000", role: "Comedy creator", tag: "Influencer" },
    { name: "Charli D'Amelio", wiki: "Charli D'Amelio", years: "b. 2004", role: "TikTok creator", tag: "Influencer" },
    { name: "Addison Rae", wiki: "Addison Rae", years: "b. 2000", role: "Creator and singer", tag: "Influencer" },
    { name: "Emma Chamberlain", wiki: "Emma Chamberlain", years: "b. 2001", role: "Creator and entrepreneur", tag: "Influencer" },
    { name: "David Dobrik", wiki: "David Dobrik", years: "b. 1996", role: "YouTuber", tag: "Influencer" },
    { name: "iShowSpeed", wiki: "IShowSpeed", years: "b. 2005", role: "Streamer and YouTuber", tag: "Influencer" },
    { name: "Markiplier", wiki: "Markiplier", years: "b. 1989", role: "Gaming YouTuber", tag: "Influencer" },
    { name: "Zoella", wiki: "Zoe Sugg", years: "b. 1990", role: "Vlogger and businesswoman", tag: "Influencer" },
    { name: "Andrew Tate", wiki: "Andrew Tate", years: "b. 1986", role: "Internet personality", tag: "Influencer" },
    { name: "Dixie D'Amelio", wiki: "Dixie D'Amelio", years: "b. 2001", role: "TikTok creator", tag: "Influencer" },
    { name: "Bella Poarch", wiki: "Bella Poarch", years: "b. 1997", role: "TikTok creator", tag: "Influencer" },
    { name: "Bretman Rock", wiki: "Bretman Rock", years: "b. 1998", role: "Beauty creator", tag: "Influencer" },
    { name: "Fernanfloo", wiki: "Fernanfloo", years: "b. 1993", role: "Gaming YouTuber", tag: "Influencer" },
    { name: "El Rubius", wiki: "El Rubius", years: "b. 1990", role: "Gaming YouTuber", tag: "Influencer" },
    { name: "DanTDM", wiki: "DanTDM", years: "b. 1991", role: "Gaming YouTuber", tag: "Influencer" },
    { name: "MatPat", wiki: "MatPat", years: "b. 1986", role: "YouTuber and theorist", tag: "Influencer" },
    { name: "SSSniperWolf", wiki: "SSSniperWolf", years: "b. 1992", role: "YouTuber", tag: "Influencer" },
    { name: "Marzia", wiki: "Marzia Kjellberg", years: "b. 1992", role: "Creator and businesswoman", tag: "Influencer" },
    { name: "Piper Rockelle", wiki: "Piper Rockelle", years: "b. 2007", role: "Content creator and model", tag: "Influencer" },
    { name: "Loren Gray", wiki: "Loren Gray", years: "b. 2002", role: "Social media personality", tag: "Influencer" },
    { name: "Baby Ariel", wiki: "Baby Ariel", years: "b. 2000", role: "Social media personality", tag: "Influencer" },
    { name: "Jules LeBlanc", wiki: "Jules LeBlanc", years: "b. 2004", role: "YouTuber, actress and singer", tag: "Influencer" },
    { name: "Nessa Barrett", wiki: "Nessa Barrett", years: "b. 2002", role: "Singer and media personality", tag: "Influencer" },
    { name: "Noah Beck", wiki: "Noah Beck", years: "b. 2001", role: "Influencer", tag: "Influencer" },

    // --- Twitch streamers ------------------------------------------
    { name: "Ninja", wiki: "Ninja (gamer)", years: "b. 1991", role: "Streamer and YouTuber", tag: "Streamer" },
    { name: "Shroud", wiki: "Shroud (gamer)", years: "b. 1994", role: "Streamer and ex-pro gamer", tag: "Streamer" },
    { name: "Pokimane", wiki: "Pokimane", years: "b. 1996", role: "Streamer and creator", tag: "Streamer" },
    { name: "xQc", wiki: "XQc", years: "b. 1995", role: "Twitch streamer", tag: "Streamer" },
    { name: "Tyler1", wiki: "Tyler1", years: "b. 1995", role: "Twitch streamer", tag: "Streamer" },
    { name: "Summit1g", wiki: "Summit1g", years: "b. 1987", role: "Twitch streamer", tag: "Streamer" },
    { name: "Kai Cenat", wiki: "Kai Cenat", years: "b. 2001", role: "Streamer and entertainer", tag: "Streamer" },
    { name: "Disguised Toast", wiki: "Disguised Toast", years: "b. 1991", role: "Streamer and YouTuber", tag: "Streamer" },
    { name: "Sykkuno", wiki: "Sykkuno", years: "b. 1991", role: "Streamer", tag: "Streamer" },
    { name: "Valkyrae", wiki: "Valkyrae", years: "b. 1992", role: "Streamer and YouTuber", tag: "Streamer" },
    { name: "TimTheTatman", wiki: "TimTheTatman", years: "b. 1990", role: "Streamer", tag: "Streamer" },
    { name: "NICKMERCS", wiki: "Nickmercs", years: "b. 1990", role: "Streamer and content creator", tag: "Streamer" },
    { name: "Tfue", wiki: "Tfue", years: "b. 1998", role: "Streamer and esports player", tag: "Streamer" },
    { name: "Sodapoppin", wiki: "Sodapoppin", years: "b. 1994", role: "Twitch streamer", tag: "Streamer" },
    { name: "Hasan Piker", wiki: "Hasan Piker", years: "b. 1991", role: "Political commentator and streamer", tag: "Streamer" },
    { name: "Dr Disrespect", wiki: "Dr Disrespect", years: "b. 1982", role: "Streamer", tag: "Streamer" },
    { name: "Myth", wiki: "Myth (gamer)", years: "b. 1999", role: "Streamer and esports player", tag: "Streamer" },
    { name: "Ludwig", wiki: "Ludwig Ahgren", years: "b. 1995", role: "Streamer and YouTuber", tag: "Streamer" },

    // --- OnlyFans & platform creators -------------------------------
    { name: "Bella Thorne", wiki: "Bella Thorne", years: "b. 1997", role: "Actress, singer and creator", tag: "OnlyFans" },
    { name: "Amber Rose", wiki: "Amber Rose", years: "b. 1983", role: "Model and media personality", tag: "OnlyFans" },
    { name: "Blac Chyna", wiki: "Blac Chyna", years: "b. 1988", role: "Model and media personality", tag: "OnlyFans" },
    { name: "Mia Khalifa", wiki: "Mia Khalifa", years: "b. 1993", role: "Media personality", tag: "OnlyFans" },
    { name: "Iggy Azalea", wiki: "Iggy Azalea", years: "b. 1990", role: "Rapper and creator", tag: "OnlyFans" },
    { name: "Denise Richards", wiki: "Denise Richards", years: "b. 1971", role: "Actress and creator", tag: "OnlyFans" },
    { name: "Amouranth", wiki: "Amouranth", years: "b. 1993", role: "Streamer and creator", tag: "OnlyFans" },
    { name: "Bhad Bhabie", wiki: "Bhad Bhabie", years: "b. 2003", role: "Rapper and internet personality", tag: "OnlyFans" },
    { name: "Malu Trevejo", wiki: "Malu Trevejo", years: "b. 2002", role: "Social media personality", tag: "OnlyFans" },
    { name: "Tana Mongeau", wiki: "Tana Mongeau", years: "b. 1998", role: "Internet personality", tag: "OnlyFans" },
    { name: "Sophie Rain", wiki: "Sophie Rain", years: "b. 2004", role: "Internet personality", tag: "OnlyFans" },
    { name: "Bonnie Blue", wiki: "Bonnie Blue", years: "b. 1999", role: "Adult film actress", tag: "OnlyFans" },
    { name: "Riley Reid", wiki: "Riley Reid", years: "b. 1991", role: "Adult film actress", tag: "OnlyFans" },
    { name: "Mia Malkova", wiki: "Mia Malkova", years: "b. 1992", role: "Adult film actress and media personality", tag: "OnlyFans" },
    { name: "Lily Phillips", wiki: "Lily Phillips", years: "b. 2001", role: "Adult film actress", tag: "OnlyFans" },
    { name: "Angela White", wiki: "Angela White", years: "b. 1985", role: "Adult film actress and director", tag: "OnlyFans" },
    { name: "Abella Danger", wiki: "Abella Danger", years: "b. 1995", role: "Adult film actress and director", tag: "OnlyFans" }
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
        // Photos kept on disk by hand (see LOCAL_IMAGES) - never re-fetched.
        if (LOCAL_IMAGES[person.name]) {
            person.image = LOCAL_IMAGES[person.name].file;
            continue;
        }

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

async function writeCredits(portraits) {
    const rows = ROSTER.filter((person) => person.image).map((person) => {
        const local = LOCAL_IMAGES[person.name];

        if (local) {
            return `| [${person.name}](${local.source}) | ${local.artist} | ${local.license} | ${local.source} |`;
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
