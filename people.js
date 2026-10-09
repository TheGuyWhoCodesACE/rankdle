// ==========================================================
// people.js
//
// GENERATED FILE - do not edit by hand.
// Source roster + image downloader: tools/build.mjs
// Regenerate with:  node tools/build.mjs
// ==========================================================

const ROSTER = [
    {
        id: 1,
        name: "Martin Luther King Jr.",
        years: "1929-1968",
        role: "Civil rights leader",
        tag: "Activist",
        image: "images/martin-luther-king-jr.jpg",
        wiki: "Martin Luther King Jr."
    },
    {
        id: 2,
        name: "Mahatma Gandhi",
        years: "1869-1948",
        role: "Indian independence leader",
        tag: "Activist",
        image: "images/mahatma-gandhi.jpg",
        wiki: "Mahatma Gandhi"
    },
    {
        id: 3,
        name: "Nelson Mandela",
        years: "1918-2013",
        role: "Anti-apartheid leader",
        tag: "Activist",
        image: "images/nelson-mandela.jpg",
        wiki: "Nelson Mandela"
    },
    {
        id: 4,
        name: "Rosa Parks",
        years: "1913-2005",
        role: "Civil rights icon",
        tag: "Activist",
        image: "images/rosa-parks.jpg",
        wiki: "Rosa Parks"
    },
    {
        id: 5,
        name: "Harriet Tubman",
        years: "c. 1822-1913",
        role: "Underground Railroad conductor",
        tag: "Activist",
        image: "images/harriet-tubman.jpg",
        wiki: "Harriet Tubman"
    },
    {
        id: 6,
        name: "Mother Teresa",
        years: "1910-1997",
        role: "Missionary of the poor",
        tag: "Activist",
        image: "images/mother-teresa.jpg",
        wiki: "Mother Teresa"
    },
    {
        id: 7,
        name: "Abraham Lincoln",
        years: "1809-1865",
        role: "Ended slavery in the US",
        tag: "Leader",
        image: "images/abraham-lincoln.jpg",
        wiki: "Abraham Lincoln"
    },
    {
        id: 8,
        name: "Winston Churchill",
        years: "1874-1965",
        role: "Wartime British prime minister",
        tag: "Leader",
        image: "images/winston-churchill.jpg",
        wiki: "Winston Churchill"
    },
    {
        id: 9,
        name: "Franklin D. Roosevelt",
        years: "1882-1945",
        role: "US president, New Deal and WWII",
        tag: "Leader",
        image: "images/franklin-d-roosevelt.jpg",
        wiki: "Franklin D. Roosevelt"
    },
    {
        id: 10,
        name: "John F. Kennedy",
        years: "1917-1963",
        role: "US president",
        tag: "Leader",
        image: "images/john-f-kennedy.jpg",
        wiki: "John F. Kennedy"
    },
    {
        id: 11,
        name: "Ronald Reagan",
        years: "1911-2004",
        role: "US president",
        tag: "Leader",
        image: "images/ronald-reagan.jpg",
        wiki: "Ronald Reagan"
    },
    {
        id: 12,
        name: "George Washington",
        years: "1732-1799",
        role: "First US president",
        tag: "Leader",
        image: "images/george-washington.jpg",
        wiki: "George Washington"
    },
    {
        id: 13,
        name: "Thomas Jefferson",
        years: "1743-1826",
        role: "US founding father",
        tag: "Leader",
        image: "images/thomas-jefferson.jpg",
        wiki: "Thomas Jefferson"
    },
    {
        id: 14,
        name: "Cleopatra",
        years: "69-30 BC",
        role: "Queen of Egypt",
        tag: "Leader",
        image: "images/cleopatra.jpg",
        wiki: "Cleopatra"
    },
    {
        id: 15,
        name: "Adolf Hitler",
        years: "1889-1945",
        role: "Nazi dictator",
        tag: "Dictator",
        image: "images/adolf-hitler.jpg",
        wiki: "Adolf Hitler"
    },
    {
        id: 16,
        name: "Joseph Stalin",
        years: "1878-1953",
        role: "Soviet dictator",
        tag: "Dictator",
        image: "images/joseph-stalin.jpg",
        wiki: "Joseph Stalin"
    },
    {
        id: 17,
        name: "Mao Zedong",
        years: "1893-1976",
        role: "Communist China's chairman",
        tag: "Dictator",
        image: "images/mao-zedong.jpg",
        wiki: "Mao Zedong"
    },
    {
        id: 18,
        name: "Vladimir Lenin",
        years: "1870-1924",
        role: "Bolshevik revolutionary",
        tag: "Dictator",
        image: "images/vladimir-lenin.jpg",
        wiki: "Vladimir Lenin"
    },
    {
        id: 19,
        name: "Saddam Hussein",
        years: "1937-2006",
        role: "Iraqi dictator",
        tag: "Dictator",
        image: "images/saddam-hussein.jpg",
        wiki: "Saddam Hussein"
    },
    {
        id: 20,
        name: "Julius Caesar",
        years: "100-44 BC",
        role: "Roman general and dictator",
        tag: "Ruler",
        image: "images/julius-caesar.jpg",
        wiki: "Julius Caesar"
    },
    {
        id: 21,
        name: "Alexander the Great",
        years: "356-323 BC",
        role: "Macedonian king",
        tag: "Ruler",
        image: "images/alexander-the-great.jpg",
        wiki: "Alexander the Great"
    },
    {
        id: 22,
        name: "Genghis Khan",
        years: "c. 1162-1227",
        role: "Mongol emperor",
        tag: "Ruler",
        image: "images/genghis-khan.jpg",
        wiki: "Genghis Khan"
    },
    {
        id: 23,
        name: "Henry VIII",
        years: "1491-1547",
        role: "King of England",
        tag: "Ruler",
        image: "images/henry-viii.jpg",
        wiki: "Henry VIII of England"
    },
    {
        id: 24,
        name: "Napoleon Bonaparte",
        years: "1769-1821",
        role: "Emperor of the French",
        tag: "Ruler",
        image: "images/napoleon-bonaparte.jpg",
        wiki: "Napoleon"
    },
    {
        id: 25,
        name: "Socrates",
        years: "470-399 BC",
        role: "Greek philosopher",
        tag: "Thinker",
        image: "images/socrates.jpg",
        wiki: "Socrates"
    },
    {
        id: 26,
        name: "Plato",
        years: "428-348 BC",
        role: "Greek philosopher",
        tag: "Thinker",
        image: "images/plato.png",
        wiki: "Plato"
    },
    {
        id: 27,
        name: "Aristotle",
        years: "384-322 BC",
        role: "Greek philosopher",
        tag: "Thinker",
        image: "images/aristotle.jpg",
        wiki: "Aristotle"
    },
    {
        id: 28,
        name: "Sun Tzu",
        years: "c. 544-496 BC",
        role: "Strategist and philosopher",
        tag: "Thinker",
        image: "images/sun-tzu.jpg",
        wiki: "Sun Tzu"
    },
    {
        id: 29,
        name: "Albert Einstein",
        years: "1879-1955",
        role: "Theoretical physicist",
        tag: "Scientist",
        image: "images/albert-einstein.jpg",
        wiki: "Albert Einstein"
    },
    {
        id: 30,
        name: "Isaac Newton",
        years: "1643-1727",
        role: "Physicist and mathematician",
        tag: "Scientist",
        image: "images/isaac-newton.jpg",
        wiki: "Isaac Newton"
    },
    {
        id: 31,
        name: "Marie Curie",
        years: "1867-1934",
        role: "Physicist and chemist",
        tag: "Scientist",
        image: "images/marie-curie.jpg",
        wiki: "Marie Curie"
    },
    {
        id: 32,
        name: "Nikola Tesla",
        years: "1856-1943",
        role: "Inventor and engineer",
        tag: "Scientist",
        image: "images/nikola-tesla.jpeg",
        wiki: "Nikola Tesla"
    },
    {
        id: 33,
        name: "Thomas Edison",
        years: "1847-1931",
        role: "Inventor",
        tag: "Scientist",
        image: "images/thomas-edison.jpg",
        wiki: "Thomas Edison"
    },
    {
        id: 34,
        name: "Galileo Galilei",
        years: "1564-1642",
        role: "Astronomer and physicist",
        tag: "Scientist",
        image: "images/galileo-galilei.jpg",
        wiki: "Galileo Galilei"
    },
    {
        id: 35,
        name: "Charles Darwin",
        years: "1809-1882",
        role: "Naturalist",
        tag: "Scientist",
        image: "images/charles-darwin.jpg",
        wiki: "Charles Darwin"
    },
    {
        id: 36,
        name: "Stephen Hawking",
        years: "1942-2018",
        role: "Theoretical physicist",
        tag: "Scientist",
        image: "images/stephen-hawking.jpg",
        wiki: "Stephen Hawking"
    },
    {
        id: 37,
        name: "William Shakespeare",
        years: "1564-1616",
        role: "Playwright and poet",
        tag: "Artist",
        image: "images/william-shakespeare.jpg",
        wiki: "William Shakespeare"
    },
    {
        id: 38,
        name: "Leonardo da Vinci",
        years: "1452-1519",
        role: "Artist and inventor",
        tag: "Artist",
        image: "images/leonardo-da-vinci.png",
        wiki: "Leonardo da Vinci"
    },
    {
        id: 39,
        name: "Michelangelo",
        years: "1475-1564",
        role: "Artist and sculptor",
        tag: "Artist",
        image: "images/michelangelo.jpg",
        wiki: "Michelangelo"
    },
    {
        id: 40,
        name: "Vincent van Gogh",
        years: "1853-1890",
        role: "Painter",
        tag: "Artist",
        image: "images/vincent-van-gogh.jpg",
        wiki: "Vincent van Gogh"
    },
    {
        id: 41,
        name: "Pablo Picasso",
        years: "1881-1973",
        role: "Painter",
        tag: "Artist",
        image: "images/pablo-picasso.jpg",
        wiki: "Pablo Picasso"
    },
    {
        id: 42,
        name: "Ludwig van Beethoven",
        years: "1770-1827",
        role: "Composer",
        tag: "Artist",
        image: "images/ludwig-van-beethoven.jpg",
        wiki: "Ludwig van Beethoven"
    },
    {
        id: 43,
        name: "Wolfgang Amadeus Mozart",
        years: "1756-1791",
        role: "Composer",
        tag: "Artist",
        image: "images/wolfgang-amadeus-mozart.jpg",
        wiki: "Wolfgang Amadeus Mozart"
    },
    {
        id: 44,
        name: "Mark Twain",
        years: "1835-1910",
        role: "Author and humorist",
        tag: "Artist",
        image: "images/mark-twain.jpg",
        wiki: "Mark Twain"
    },
    {
        id: 45,
        name: "Anne Frank",
        years: "1929-1945",
        role: "Diary writer, Holocaust victim",
        tag: "Pioneer",
        image: "images/anne-frank.jpg",
        wiki: "Anne Frank"
    },
    {
        id: 46,
        name: "Christopher Columbus",
        years: "1451-1506",
        role: "Explorer",
        tag: "Pioneer",
        image: "images/christopher-columbus.jpg",
        wiki: "Christopher Columbus"
    },
    {
        id: 47,
        name: "Amelia Earhart",
        years: "1897-1937",
        role: "Aviation pioneer",
        tag: "Pioneer",
        image: "images/amelia-earhart.jpg",
        wiki: "Amelia Earhart"
    },
    {
        id: 48,
        name: "Muhammad Ali",
        years: "1942-2016",
        role: "Boxer and activist",
        tag: "Pioneer",
        image: "images/muhammad-ali.jpg",
        wiki: "Muhammad Ali"
    },
    {
        id: 49,
        name: "Jesse Owens",
        years: "1913-1980",
        role: "Olympic sprinter",
        tag: "Pioneer",
        image: "images/jesse-owens.jpg",
        wiki: "Jesse Owens"
    },
    {
        id: 50,
        name: "Michael Jackson",
        years: "1958-2009",
        role: "King of Pop",
        tag: "Musician",
        image: "images/michael-jackson.jpg",
        wiki: "Michael Jackson"
    },
    {
        id: 51,
        name: "Elvis Presley",
        years: "1935-1977",
        role: "King of Rock and Roll",
        tag: "Musician",
        image: "images/elvis-presley.jpg",
        wiki: "Elvis Presley"
    },
    {
        id: 52,
        name: "John Lennon",
        years: "1940-1980",
        role: "Beatle and peace campaigner",
        tag: "Musician",
        image: "images/john-lennon.jpg",
        wiki: "John Lennon"
    },
    {
        id: 53,
        name: "Beyonce",
        years: "b. 1981",
        role: "Singer and performer",
        tag: "Musician",
        image: "images/beyonce.jpg",
        wiki: "Beyonce"
    },
    {
        id: 54,
        name: "Taylor Swift",
        years: "b. 1989",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/taylor-swift.png",
        wiki: "Taylor Swift"
    },
    {
        id: 55,
        name: "Drake",
        years: "b. 1986",
        role: "Rapper and singer",
        tag: "Musician",
        image: "images/drake.jpg",
        wiki: "Drake (musician)"
    },
    {
        id: 56,
        name: "Kanye West",
        years: "b. 1977",
        role: "Rapper and producer",
        tag: "Musician",
        image: "images/kanye-west.jpg",
        wiki: "Kanye West"
    },
    {
        id: 57,
        name: "Eminem",
        years: "b. 1972",
        role: "Rapper",
        tag: "Musician",
        image: "images/eminem.jpg",
        wiki: "Eminem"
    },
    {
        id: 58,
        name: "Jay-Z",
        years: "b. 1969",
        role: "Rapper and businessman",
        tag: "Musician",
        image: "images/jay-z.webp",
        wiki: "Jay-Z"
    },
    {
        id: 59,
        name: "Madonna",
        years: "b. 1958",
        role: "Singer and pop icon",
        tag: "Musician",
        image: "images/madonna.jpg",
        wiki: "Madonna (entertainer)"
    },
    {
        id: 60,
        name: "Lady Gaga",
        years: "b. 1986",
        role: "Singer and actress",
        tag: "Musician",
        image: "images/lady-gaga.jpg",
        wiki: "Lady Gaga"
    },
    {
        id: 61,
        name: "Ariana Grande",
        years: "b. 1993",
        role: "Singer and actress",
        tag: "Musician",
        image: "images/ariana-grande.jpg",
        wiki: "Ariana Grande"
    },
    {
        id: 62,
        name: "Bruno Mars",
        years: "b. 1985",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/bruno-mars.jpg",
        wiki: "Bruno Mars"
    },
    {
        id: 63,
        name: "Adele",
        years: "b. 1988",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/adele.jpg",
        wiki: "Adele"
    },
    {
        id: 64,
        name: "Whitney Houston",
        years: "1963-2012",
        role: "Singer and actress",
        tag: "Musician",
        image: "images/whitney-houston.jpeg",
        wiki: "Whitney Houston"
    },
    {
        id: 65,
        name: "Bob Marley",
        years: "1945-1981",
        role: "Reggae pioneer",
        tag: "Musician",
        image: "images/bob-marley.jpg",
        wiki: "Bob Marley"
    },
    {
        id: 66,
        name: "Dolly Parton",
        years: "b. 1946",
        role: "Country singer and philanthropist",
        tag: "Musician",
        image: "images/dolly-parton.jpg",
        wiki: "Dolly Parton"
    },
    {
        id: 67,
        name: "Frank Sinatra",
        years: "1915-1998",
        role: "Singer and actor",
        tag: "Musician",
        image: "images/frank-sinatra.jpg",
        wiki: "Frank Sinatra"
    },
    {
        id: 68,
        name: "Tupac Shakur",
        years: "1971-1996",
        role: "Rapper and actor",
        tag: "Musician",
        image: "images/tupac-shakur.jpg",
        wiki: "Tupac Shakur"
    },
    {
        id: 69,
        name: "Snoop Dogg",
        years: "b. 1971",
        role: "Rapper and entertainer",
        tag: "Musician",
        image: "images/snoop-dogg.jpg",
        wiki: "Snoop Dogg"
    },
    {
        id: 70,
        name: "Billie Eilish",
        years: "b. 2001",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/billie-eilish.jpg",
        wiki: "Billie Eilish"
    },
    {
        id: 71,
        name: "Olivia Rodrigo",
        years: "b. 2003",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/olivia-rodrigo.jpg",
        wiki: "Olivia Rodrigo"
    },
    {
        id: 72,
        name: "Bad Bunny",
        years: "b. 1994",
        role: "Reggaeton artist",
        tag: "Musician",
        image: "images/bad-bunny.jpg",
        wiki: "Bad Bunny"
    },
    {
        id: 73,
        name: "Shakira",
        years: "b. 1977",
        role: "Singer and dancer",
        tag: "Musician",
        image: "images/shakira.jpg",
        wiki: "Shakira"
    },
    {
        id: 74,
        name: "Billy Joel",
        years: "b. 1949",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/billy-joel.jpg",
        wiki: "Billy Joel"
    },
    {
        id: 75,
        name: "Elton John",
        years: "b. 1947",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/elton-john.jpg",
        wiki: "Elton John"
    },
    {
        id: 76,
        name: "Katy Perry",
        years: "b. 1984",
        role: "Singer",
        tag: "Musician",
        image: "images/katy-perry.jpg",
        wiki: "Katy Perry"
    },
    {
        id: 77,
        name: "Ed Sheeran",
        years: "b. 1991",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/ed-sheeran.jpg",
        wiki: "Ed Sheeran"
    },
    {
        id: 78,
        name: "MrBeast",
        years: "b. 1998",
        role: "YouTuber and philanthropist",
        tag: "Influencer",
        image: "images/mrbeast.png",
        wiki: "MrBeast"
    },
    {
        id: 79,
        name: "PewDiePie",
        years: "b. 1989",
        role: "YouTuber",
        tag: "Influencer",
        image: "images/pewdiepie.jpg",
        wiki: "PewDiePie"
    },
    {
        id: 80,
        name: "Logan Paul",
        years: "b. 1995",
        role: "Influencer and boxer",
        tag: "Influencer",
        image: "images/logan-paul.jpg",
        wiki: "Logan Paul"
    },
    {
        id: 81,
        name: "Jake Paul",
        years: "b. 1997",
        role: "Influencer and boxer",
        tag: "Influencer",
        image: "images/jake-paul.jpg",
        wiki: "Jake Paul"
    },
    {
        id: 82,
        name: "KSI",
        years: "b. 1993",
        role: "Influencer and boxer",
        tag: "Influencer",
        image: "images/ksi.png",
        wiki: "KSI"
    },
    {
        id: 83,
        name: "Addison Rae",
        years: "b. 2000",
        role: "Creator and singer",
        tag: "Influencer",
        image: "images/addison-rae.jpg",
        wiki: "Addison Rae"
    },
    {
        id: 84,
        name: "iShowSpeed",
        years: "b. 2005",
        role: "Streamer and YouTuber",
        tag: "Influencer",
        image: "images/ishowspeed.jpg",
        wiki: "IShowSpeed"
    },
    {
        id: 85,
        name: "Markiplier",
        years: "b. 1989",
        role: "Gaming YouTuber",
        tag: "Influencer",
        image: "images/markiplier.png",
        wiki: "Markiplier"
    },
    {
        id: 86,
        name: "Andrew Tate",
        years: "b. 1986",
        role: "Internet personality",
        tag: "Influencer",
        image: "images/andrew-tate.png",
        wiki: "Andrew Tate"
    },
    {
        id: 87,
        name: "Bella Poarch",
        years: "b. 1997",
        role: "TikTok creator",
        tag: "Influencer",
        image: "images/bella-poarch.jpg",
        wiki: "Bella Poarch"
    },
    {
        id: 88,
        name: "DanTDM",
        years: "b. 1991",
        role: "Gaming YouTuber",
        tag: "Influencer",
        image: "images/dantdm.jpg",
        wiki: "DanTDM"
    },
    {
        id: 89,
        name: "MatPat",
        years: "b. 1986",
        role: "YouTuber and theorist",
        tag: "Influencer",
        image: "images/matpat.jpg",
        wiki: "MatPat"
    },
    {
        id: 90,
        name: "SSSniperWolf",
        years: "b. 1992",
        role: "YouTuber",
        tag: "Influencer",
        image: "images/sssniperwolf.jpg",
        wiki: "SSSniperWolf"
    },
    {
        id: 91,
        name: "Piper Rockelle",
        years: "b. 2007",
        role: "Content creator and model",
        tag: "Influencer",
        image: "images/piper-rockelle.jpg",
        wiki: "Piper Rockelle"
    },
    {
        id: 92,
        name: "Ninja",
        years: "b. 1991",
        role: "Streamer and YouTuber",
        tag: "Streamer",
        image: "images/ninja.jpg",
        wiki: "Ninja (gamer)"
    },
    {
        id: 93,
        name: "Pokimane",
        years: "b. 1996",
        role: "Streamer and creator",
        tag: "Streamer",
        image: "images/pokimane.jpg",
        wiki: "Pokimane"
    },
    {
        id: 94,
        name: "Tyler1",
        years: "b. 1995",
        role: "Twitch streamer",
        tag: "Streamer",
        image: "images/tyler1.png",
        wiki: "Tyler1"
    },
    {
        id: 95,
        name: "Kai Cenat",
        years: "b. 2001",
        role: "Streamer and entertainer",
        tag: "Streamer",
        image: "images/kai-cenat.jpg",
        wiki: "Kai Cenat"
    },
    {
        id: 96,
        name: "Valkyrae",
        years: "b. 1992",
        role: "Streamer and YouTuber",
        tag: "Streamer",
        image: "images/valkyrae.png",
        wiki: "Valkyrae"
    },
    {
        id: 97,
        name: "Dr Disrespect",
        years: "b. 1982",
        role: "Streamer",
        tag: "Streamer",
        image: "images/dr-disrespect.jpg",
        wiki: "Dr Disrespect"
    },
    {
        id: 98,
        name: "Ludwig",
        years: "b. 1995",
        role: "Streamer and YouTuber",
        tag: "Streamer",
        image: "images/ludwig.jpg",
        wiki: "Ludwig Ahgren"
    },
    {
        id: 99,
        name: "Mia Khalifa",
        years: "b. 1993",
        role: "Media personality",
        tag: "OnlyFans",
        image: "images/mia-khalifa.png",
        wiki: "Mia Khalifa"
    },
    {
        id: 100,
        name: "Amouranth",
        years: "b. 1993",
        role: "Streamer and creator",
        tag: "OnlyFans",
        image: "images/amouranth.jpg",
        wiki: "Amouranth"
    },
    {
        id: 101,
        name: "Sophie Rain",
        years: "b. 2004",
        role: "Internet personality",
        tag: "OnlyFans",
        image: "images/sophie-rain.jpg",
        wiki: "Sophie Rain"
    },
    {
        id: 102,
        name: "Bonnie Blue",
        years: "b. 1999",
        role: "Adult film actress",
        tag: "OnlyFans",
        image: "images/bonnie-blue.jpg",
        wiki: "Bonnie Blue"
    },
    {
        id: 103,
        name: "Riley Reid",
        years: "b. 1991",
        role: "Adult film actress",
        tag: "OnlyFans",
        image: "images/riley-reid.jpg",
        wiki: "Riley Reid"
    },
    {
        id: 104,
        name: "Mia Malkova",
        years: "b. 1992",
        role: "Adult film actress and media personality",
        tag: "OnlyFans",
        image: "images/mia-malkova.jpg",
        wiki: "Mia Malkova"
    },
    {
        id: 105,
        name: "Lily Phillips",
        years: "b. 2001",
        role: "Adult film actress",
        tag: "OnlyFans",
        image: "images/lily-phillips.png",
        wiki: "Lily Phillips"
    },
    {
        id: 106,
        name: "Abella Danger",
        years: "b. 1995",
        role: "Adult film actress and director",
        tag: "OnlyFans",
        image: "images/abella-danger.jpg",
        wiki: "Abella Danger"
    },
    {
        id: 107,
        name: "Harry Potter",
        years: "Debut 1997",
        role: "Boy wizard of Hogwarts",
        tag: "Literature",
        image: "images/harry-potter.jpg",
        wiki: "Harry Potter"
    },
    {
        id: 108,
        name: "Hermione Granger",
        years: "Debut 1997",
        role: "Hogwarts witch and bookworm",
        tag: "Literature",
        image: "images/hermione-granger.jpg",
        wiki: "Hermione Granger"
    },
    {
        id: 109,
        name: "Sherlock Holmes",
        years: "Debut 1887",
        role: "Consulting detective of Baker Street",
        tag: "Literature",
        image: "images/sherlock-holmes.jpg",
        wiki: "Sherlock Holmes"
    },
    {
        id: 110,
        name: "Dracula",
        years: "Debut 1897",
        role: "Transylvanian vampire count",
        tag: "Literature",
        image: "images/dracula.jpg",
        wiki: "Dracula"
    },
    {
        id: 111,
        name: "Gandalf",
        years: "Debut 1954",
        role: "Wizard of Middle-earth",
        tag: "Literature",
        image: "images/gandalf.jpg",
        wiki: "Gandalf"
    },
    {
        id: 112,
        name: "Alice",
        years: "Debut 1865",
        role: "Girl down the rabbit hole",
        tag: "Literature",
        image: "images/alice.png",
        wiki: "Alice (Alice's Adventures in Wonderland)"
    },
    {
        id: 113,
        name: "Superman",
        years: "Debut 1938",
        role: "Kryptonian hero of Metropolis",
        tag: "Comic",
        image: "images/superman.png",
        wiki: "Superman"
    },
    {
        id: 114,
        name: "Batman",
        years: "Debut 1939",
        role: "Caped crusader of Gotham",
        tag: "Comic",
        image: "images/batman.jpg",
        wiki: "Batman"
    },
    {
        id: 115,
        name: "Spider-Man",
        years: "Debut 1962",
        role: "Web-slinging hero of New York",
        tag: "Comic",
        image: "images/spider-man.jpg",
        wiki: "Spider-Man"
    },
    {
        id: 116,
        name: "Wonder Woman",
        years: "Debut 1941",
        role: "Amazon warrior princess",
        tag: "Comic",
        image: "images/wonder-woman.png",
        wiki: "Wonder Woman"
    },
    {
        id: 117,
        name: "The Joker",
        years: "Debut 1940",
        role: "Gotham's clown prince of crime",
        tag: "Comic",
        image: "images/the-joker.png",
        wiki: "Joker (character)"
    },
    {
        id: 118,
        name: "Harley Quinn",
        years: "Debut 1992",
        role: "Arkham psychiatrist turned villain",
        tag: "Comic",
        image: "images/harley-quinn.png",
        wiki: "Harley Quinn"
    },
    {
        id: 119,
        name: "Darth Vader",
        years: "Debut 1977",
        role: "Sith lord in a black mask",
        tag: "Film & TV",
        image: "images/darth-vader.jpg",
        wiki: "Darth Vader"
    },
    {
        id: 120,
        name: "Luke Skywalker",
        years: "Debut 1977",
        role: "Rebel pilot turned Jedi",
        tag: "Film & TV",
        image: "images/luke-skywalker.jpg",
        wiki: "Luke Skywalker"
    },
    {
        id: 121,
        name: "James Bond",
        years: "Debut 1953",
        role: "007, British secret agent",
        tag: "Film & TV",
        image: "images/james-bond.jpg",
        wiki: "James Bond (literary character)"
    },
    {
        id: 122,
        name: "Indiana Jones",
        years: "Debut 1981",
        role: "Archaeologist in a fedora",
        tag: "Film & TV",
        image: "images/indiana-jones.jpg",
        wiki: "Indiana Jones"
    },
    {
        id: 123,
        name: "Rocky Balboa",
        years: "Debut 1976",
        role: "Boxer from Philadelphia",
        tag: "Film & TV",
        image: "images/rocky-balboa.jpg",
        wiki: "Rocky Balboa"
    },
    {
        id: 124,
        name: "Katniss Everdeen",
        years: "Debut 2008",
        role: "Tribute who sparked a rebellion",
        tag: "Film & TV",
        image: "images/katniss-everdeen.jpg",
        wiki: "Katniss Everdeen"
    },
    {
        id: 125,
        name: "Walter White",
        years: "Debut 2008",
        role: "Chemist turned meth kingpin",
        tag: "Film & TV",
        image: "images/walter-white.jpg",
        wiki: "Walter White"
    },
    {
        id: 126,
        name: "Willy Wonka",
        years: "Debut 1964",
        role: "Eccentric chocolate factory owner",
        tag: "Film & TV",
        image: "images/willy-wonka.jpg",
        wiki: "Willy Wonka"
    },
    {
        id: 127,
        name: "Daenerys Targaryen",
        years: "Debut 1996",
        role: "Mother of Dragons",
        tag: "Film & TV",
        image: "images/daenerys-targaryen.jpg",
        wiki: "Daenerys Targaryen"
    },
    {
        id: 128,
        name: "Mickey Mouse",
        years: "Debut 1928",
        role: "Disney's original cartoon mouse",
        tag: "Cartoon",
        image: "images/mickey-mouse.jpg",
        wiki: "Mickey Mouse"
    },
    {
        id: 129,
        name: "Bugs Bunny",
        years: "Debut 1940",
        role: "Carrot-munching trickster rabbit",
        tag: "Cartoon",
        image: "images/bugs-bunny.png",
        wiki: "Bugs Bunny"
    },
    {
        id: 130,
        name: "SpongeBob SquarePants",
        years: "Debut 1999",
        role: "Fry cook of Bikini Bottom",
        tag: "Cartoon",
        image: "images/spongebob-squarepants.png",
        wiki: "SpongeBob SquarePants"
    },
    {
        id: 131,
        name: "Scooby-Doo",
        years: "Debut 1969",
        role: "Mystery-solving Great Dane",
        tag: "Cartoon",
        image: "images/scooby-doo.jpg",
        wiki: "Scooby-Doo"
    },
    {
        id: 132,
        name: "Cinderella",
        years: "Debut 1950",
        role: "Princess of the glass slipper",
        tag: "Cartoon",
        image: "images/cinderella.jpg",
        wiki: "Cinderella"
    },
    {
        id: 133,
        name: "Elsa",
        years: "Debut 2013",
        role: "Snow queen of Arendelle",
        tag: "Cartoon",
        image: "images/elsa.jpg",
        wiki: "Elsa (Frozen)"
    },
    {
        id: 134,
        name: "Simba",
        years: "Debut 1994",
        role: "Lion king of the Pride Lands",
        tag: "Cartoon",
        image: "images/simba.jpg",
        wiki: "Simba"
    },
    {
        id: 135,
        name: "Shrek",
        years: "Debut 2001",
        role: "Ogre of the swamp",
        tag: "Cartoon",
        image: "images/shrek.jpg",
        wiki: "Shrek"
    },
    {
        id: 136,
        name: "Buzz Lightyear",
        years: "Debut 1995",
        role: "Toy space ranger",
        tag: "Cartoon",
        image: "images/buzz-lightyear.jpg",
        wiki: "Buzz Lightyear"
    },
    {
        id: 137,
        name: "Homer Simpson",
        years: "Debut 1989",
        role: "Springfield's donut-loving dad",
        tag: "Cartoon",
        image: "images/homer-simpson.jpg",
        wiki: "Homer Simpson"
    },
    {
        id: 138,
        name: "Mario",
        years: "Debut 1981",
        role: "Plumber and Nintendo mascot",
        tag: "Game",
        image: "images/mario.jpg",
        wiki: "Mario (character)"
    },
    {
        id: 139,
        name: "Link",
        years: "Debut 1986",
        role: "Hero of Hyrule",
        tag: "Game",
        image: "images/link.jpg",
        wiki: "Link (The Legend of Zelda)"
    },
    {
        id: 140,
        name: "Sonic the Hedgehog",
        years: "Debut 1991",
        role: "Sega's speedy blue hedgehog",
        tag: "Game",
        image: "images/sonic-the-hedgehog.jpg",
        wiki: "Sonic the Hedgehog"
    },
    {
        id: 141,
        name: "Lara Croft",
        years: "Debut 1996",
        role: "Tomb-raiding archaeologist",
        tag: "Game",
        image: "images/lara-croft.jpg",
        wiki: "Lara Croft"
    },
    {
        id: 142,
        name: "Goku",
        years: "Debut 1984",
        role: "Saiyan fighter of Dragon Ball",
        tag: "Anime",
        image: "images/goku.jpg",
        wiki: "Goku"
    },
    {
        id: 143,
        name: "Naruto Uzumaki",
        years: "Debut 1999",
        role: "Ninja who dreams of Hokage",
        tag: "Anime",
        image: "images/naruto-uzumaki.jpg",
        wiki: "Naruto Uzumaki"
    },
    {
        id: 144,
        name: "Sailor Moon",
        years: "Debut 1991",
        role: "Guardian of love and justice",
        tag: "Anime",
        image: "images/sailor-moon.jpg",
        wiki: "Sailor Moon"
    },
    {
        id: 145,
        name: "Pikachu",
        years: "Debut 1996",
        role: "Electric-type Pokemon mascot",
        tag: "Anime",
        image: "images/pikachu.jpg",
        wiki: "Pikachu"
    },
    {
        id: 146,
        name: "Monkey D. Luffy",
        years: "Debut 1997",
        role: "Pirate captain of the Straw Hats",
        tag: "Anime",
        image: "images/monkey-d-luffy.jpg",
        wiki: "Monkey D. Luffy"
    },
    {
        id: 147,
        name: "Jeffrey Epstein",
        years: "1953-2019",
        role: "Financier and sex offender",
        tag: "Villain",
        image: "images/jeffrey-epstein.jpg",
        wiki: "Jeffrey Epstein"
    }
];

// Allow tools/build.mjs style tooling to read this file too.
if (typeof module !== "undefined") {
    module.exports = ROSTER;
}
