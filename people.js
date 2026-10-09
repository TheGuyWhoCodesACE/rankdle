// ==========================================================
// people.js
//
// GENERATED FILE - do not edit by hand.
// Source roster + image downloader: tools/build.mjs
// Regenerate with:  node tools/build.mjs
// ==========================================================

const ROSTER = [
    {
        name: "Martin Luther King Jr.",
        years: "1929-1968",
        role: "Civil rights leader",
        tag: "Activist",
        image: "images/martin-luther-king-jr.jpg",
        wiki: "Martin Luther King Jr."
    },
    {
        name: "Mahatma Gandhi",
        years: "1869-1948",
        role: "Indian independence leader",
        tag: "Activist",
        image: "images/mahatma-gandhi.jpg",
        wiki: "Mahatma Gandhi"
    },
    {
        name: "Nelson Mandela",
        years: "1918-2013",
        role: "Anti-apartheid leader",
        tag: "Activist",
        image: "images/nelson-mandela.jpg",
        wiki: "Nelson Mandela"
    },
    {
        name: "Rosa Parks",
        years: "1913-2005",
        role: "Civil rights icon",
        tag: "Activist",
        image: "images/rosa-parks.jpg",
        wiki: "Rosa Parks"
    },
    {
        name: "Harriet Tubman",
        years: "c. 1822-1913",
        role: "Underground Railroad conductor",
        tag: "Activist",
        image: "images/harriet-tubman.jpg",
        wiki: "Harriet Tubman"
    },
    {
        name: "Mother Teresa",
        years: "1910-1997",
        role: "Missionary of the poor",
        tag: "Activist",
        image: "images/mother-teresa.jpg",
        wiki: "Mother Teresa"
    },
    {
        name: "Abraham Lincoln",
        years: "1809-1865",
        role: "Ended slavery in the US",
        tag: "Leader",
        image: "images/abraham-lincoln.jpg",
        wiki: "Abraham Lincoln"
    },
    {
        name: "Winston Churchill",
        years: "1874-1965",
        role: "Wartime British prime minister",
        tag: "Leader",
        image: "images/winston-churchill.jpg",
        wiki: "Winston Churchill"
    },
    {
        name: "Franklin D. Roosevelt",
        years: "1882-1945",
        role: "US president, New Deal and WWII",
        tag: "Leader",
        image: "images/franklin-d-roosevelt.jpg",
        wiki: "Franklin D. Roosevelt"
    },
    {
        name: "John F. Kennedy",
        years: "1917-1963",
        role: "US president",
        tag: "Leader",
        image: "images/john-f-kennedy.jpg",
        wiki: "John F. Kennedy"
    },
    {
        name: "Ronald Reagan",
        years: "1911-2004",
        role: "US president",
        tag: "Leader",
        image: "images/ronald-reagan.jpg",
        wiki: "Ronald Reagan"
    },
    {
        name: "George Washington",
        years: "1732-1799",
        role: "First US president",
        tag: "Leader",
        image: "images/george-washington.jpg",
        wiki: "George Washington"
    },
    {
        name: "Thomas Jefferson",
        years: "1743-1826",
        role: "US founding father",
        tag: "Leader",
        image: "images/thomas-jefferson.jpg",
        wiki: "Thomas Jefferson"
    },
    {
        name: "Cleopatra",
        years: "69-30 BC",
        role: "Queen of Egypt",
        tag: "Leader",
        image: "images/cleopatra.jpg",
        wiki: "Cleopatra"
    },
    {
        name: "Adolf Hitler",
        years: "1889-1945",
        role: "Nazi dictator",
        tag: "Dictator",
        image: "images/adolf-hitler.jpg",
        wiki: "Adolf Hitler"
    },
    {
        name: "Joseph Stalin",
        years: "1878-1953",
        role: "Soviet dictator",
        tag: "Dictator",
        image: "images/joseph-stalin.jpg",
        wiki: "Joseph Stalin"
    },
    {
        name: "Mao Zedong",
        years: "1893-1976",
        role: "Communist China's chairman",
        tag: "Dictator",
        image: "images/mao-zedong.jpg",
        wiki: "Mao Zedong"
    },
    {
        name: "Vladimir Lenin",
        years: "1870-1924",
        role: "Bolshevik revolutionary",
        tag: "Dictator",
        image: "images/vladimir-lenin.jpg",
        wiki: "Vladimir Lenin"
    },
    {
        name: "Saddam Hussein",
        years: "1937-2006",
        role: "Iraqi dictator",
        tag: "Dictator",
        image: "images/saddam-hussein.jpg",
        wiki: "Saddam Hussein"
    },
    {
        name: "Julius Caesar",
        years: "100-44 BC",
        role: "Roman general and dictator",
        tag: "Ruler",
        image: "images/julius-caesar.jpg",
        wiki: "Julius Caesar"
    },
    {
        name: "Alexander the Great",
        years: "356-323 BC",
        role: "Macedonian king",
        tag: "Ruler",
        image: "images/alexander-the-great.jpg",
        wiki: "Alexander the Great"
    },
    {
        name: "Genghis Khan",
        years: "c. 1162-1227",
        role: "Mongol emperor",
        tag: "Ruler",
        image: "images/genghis-khan.jpg",
        wiki: "Genghis Khan"
    },
    {
        name: "Henry VIII",
        years: "1491-1547",
        role: "King of England",
        tag: "Ruler",
        image: "images/henry-viii.jpg",
        wiki: "Henry VIII of England"
    },
    {
        name: "Napoleon Bonaparte",
        years: "1769-1821",
        role: "Emperor of the French",
        tag: "Ruler",
        image: "images/napoleon-bonaparte.jpg",
        wiki: "Napoleon"
    },
    {
        name: "Socrates",
        years: "470-399 BC",
        role: "Greek philosopher",
        tag: "Thinker",
        image: "images/socrates.jpg",
        wiki: "Socrates"
    },
    {
        name: "Plato",
        years: "428-348 BC",
        role: "Greek philosopher",
        tag: "Thinker",
        image: "images/plato.png",
        wiki: "Plato"
    },
    {
        name: "Aristotle",
        years: "384-322 BC",
        role: "Greek philosopher",
        tag: "Thinker",
        image: "images/aristotle.jpg",
        wiki: "Aristotle"
    },
    {
        name: "Sun Tzu",
        years: "c. 544-496 BC",
        role: "Strategist and philosopher",
        tag: "Thinker",
        image: "images/sun-tzu.jpg",
        wiki: "Sun Tzu"
    },
    {
        name: "Albert Einstein",
        years: "1879-1955",
        role: "Theoretical physicist",
        tag: "Scientist",
        image: "images/albert-einstein.jpg",
        wiki: "Albert Einstein"
    },
    {
        name: "Isaac Newton",
        years: "1643-1727",
        role: "Physicist and mathematician",
        tag: "Scientist",
        image: "images/isaac-newton.jpg",
        wiki: "Isaac Newton"
    },
    {
        name: "Marie Curie",
        years: "1867-1934",
        role: "Physicist and chemist",
        tag: "Scientist",
        image: "images/marie-curie.jpg",
        wiki: "Marie Curie"
    },
    {
        name: "Nikola Tesla",
        years: "1856-1943",
        role: "Inventor and engineer",
        tag: "Scientist",
        image: "images/nikola-tesla.jpeg",
        wiki: "Nikola Tesla"
    },
    {
        name: "Thomas Edison",
        years: "1847-1931",
        role: "Inventor",
        tag: "Scientist",
        image: "images/thomas-edison.jpg",
        wiki: "Thomas Edison"
    },
    {
        name: "Galileo Galilei",
        years: "1564-1642",
        role: "Astronomer and physicist",
        tag: "Scientist",
        image: "images/galileo-galilei.jpg",
        wiki: "Galileo Galilei"
    },
    {
        name: "Charles Darwin",
        years: "1809-1882",
        role: "Naturalist",
        tag: "Scientist",
        image: "images/charles-darwin.jpg",
        wiki: "Charles Darwin"
    },
    {
        name: "Stephen Hawking",
        years: "1942-2018",
        role: "Theoretical physicist",
        tag: "Scientist",
        image: "images/stephen-hawking.jpg",
        wiki: "Stephen Hawking"
    },
    {
        name: "William Shakespeare",
        years: "1564-1616",
        role: "Playwright and poet",
        tag: "Artist",
        image: "images/william-shakespeare.jpg",
        wiki: "William Shakespeare"
    },
    {
        name: "Leonardo da Vinci",
        years: "1452-1519",
        role: "Artist and inventor",
        tag: "Artist",
        image: "images/leonardo-da-vinci.png",
        wiki: "Leonardo da Vinci"
    },
    {
        name: "Michelangelo",
        years: "1475-1564",
        role: "Artist and sculptor",
        tag: "Artist",
        image: "images/michelangelo.jpg",
        wiki: "Michelangelo"
    },
    {
        name: "Vincent van Gogh",
        years: "1853-1890",
        role: "Painter",
        tag: "Artist",
        image: "images/vincent-van-gogh.jpg",
        wiki: "Vincent van Gogh"
    },
    {
        name: "Pablo Picasso",
        years: "1881-1973",
        role: "Painter",
        tag: "Artist",
        image: "images/pablo-picasso.jpg",
        wiki: "Pablo Picasso"
    },
    {
        name: "Ludwig van Beethoven",
        years: "1770-1827",
        role: "Composer",
        tag: "Artist",
        image: "images/ludwig-van-beethoven.jpg",
        wiki: "Ludwig van Beethoven"
    },
    {
        name: "Wolfgang Amadeus Mozart",
        years: "1756-1791",
        role: "Composer",
        tag: "Artist",
        image: "images/wolfgang-amadeus-mozart.jpg",
        wiki: "Wolfgang Amadeus Mozart"
    },
    {
        name: "Mark Twain",
        years: "1835-1910",
        role: "Author and humorist",
        tag: "Artist",
        image: "images/mark-twain.jpg",
        wiki: "Mark Twain"
    },
    {
        name: "Anne Frank",
        years: "1929-1945",
        role: "Diary writer, Holocaust victim",
        tag: "Pioneer",
        image: "images/anne-frank.jpg",
        wiki: "Anne Frank"
    },
    {
        name: "Christopher Columbus",
        years: "1451-1506",
        role: "Explorer",
        tag: "Pioneer",
        image: "images/christopher-columbus.jpg",
        wiki: "Christopher Columbus"
    },
    {
        name: "Amelia Earhart",
        years: "1897-1937",
        role: "Aviation pioneer",
        tag: "Pioneer",
        image: "images/amelia-earhart.jpg",
        wiki: "Amelia Earhart"
    },
    {
        name: "Muhammad Ali",
        years: "1942-2016",
        role: "Boxer and activist",
        tag: "Pioneer",
        image: "images/muhammad-ali.jpg",
        wiki: "Muhammad Ali"
    },
    {
        name: "Jesse Owens",
        years: "1913-1980",
        role: "Olympic sprinter",
        tag: "Pioneer",
        image: "images/jesse-owens.jpg",
        wiki: "Jesse Owens"
    },
    {
        name: "Michael Jackson",
        years: "1958-2009",
        role: "King of Pop",
        tag: "Musician",
        image: "images/michael-jackson.jpg",
        wiki: "Michael Jackson"
    },
    {
        name: "Elvis Presley",
        years: "1935-1977",
        role: "King of Rock and Roll",
        tag: "Musician",
        image: "images/elvis-presley.jpg",
        wiki: "Elvis Presley"
    },
    {
        name: "John Lennon",
        years: "1940-1980",
        role: "Beatle and peace campaigner",
        tag: "Musician",
        image: "images/john-lennon.jpg",
        wiki: "John Lennon"
    },
    {
        name: "Beyonce",
        years: "b. 1981",
        role: "Singer and performer",
        tag: "Musician",
        image: "images/beyonce.jpg",
        wiki: "Beyonce"
    },
    {
        name: "Taylor Swift",
        years: "b. 1989",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/taylor-swift.png",
        wiki: "Taylor Swift"
    },
    {
        name: "Drake",
        years: "b. 1986",
        role: "Rapper and singer",
        tag: "Musician",
        image: "images/drake.jpg",
        wiki: "Drake (musician)"
    },
    {
        name: "Kanye West",
        years: "b. 1977",
        role: "Rapper and producer",
        tag: "Musician",
        image: "images/kanye-west.jpg",
        wiki: "Kanye West"
    },
    {
        name: "Eminem",
        years: "b. 1972",
        role: "Rapper",
        tag: "Musician",
        image: "images/eminem.jpg",
        wiki: "Eminem"
    },
    {
        name: "Jay-Z",
        years: "b. 1969",
        role: "Rapper and businessman",
        tag: "Musician",
        image: "images/jay-z.webp",
        wiki: "Jay-Z"
    },
    {
        name: "Madonna",
        years: "b. 1958",
        role: "Singer and pop icon",
        tag: "Musician",
        image: "images/madonna.jpg",
        wiki: "Madonna (entertainer)"
    },
    {
        name: "Lady Gaga",
        years: "b. 1986",
        role: "Singer and actress",
        tag: "Musician",
        image: "images/lady-gaga.jpg",
        wiki: "Lady Gaga"
    },
    {
        name: "Ariana Grande",
        years: "b. 1993",
        role: "Singer and actress",
        tag: "Musician",
        image: "images/ariana-grande.jpg",
        wiki: "Ariana Grande"
    },
    {
        name: "Bruno Mars",
        years: "b. 1985",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/bruno-mars.jpg",
        wiki: "Bruno Mars"
    },
    {
        name: "Adele",
        years: "b. 1988",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/adele.jpg",
        wiki: "Adele"
    },
    {
        name: "Whitney Houston",
        years: "1963-2012",
        role: "Singer and actress",
        tag: "Musician",
        image: "images/whitney-houston.jpeg",
        wiki: "Whitney Houston"
    },
    {
        name: "Bob Marley",
        years: "1945-1981",
        role: "Reggae pioneer",
        tag: "Musician",
        image: "images/bob-marley.jpg",
        wiki: "Bob Marley"
    },
    {
        name: "Dolly Parton",
        years: "b. 1946",
        role: "Country singer and philanthropist",
        tag: "Musician",
        image: "images/dolly-parton.jpg",
        wiki: "Dolly Parton"
    },
    {
        name: "Frank Sinatra",
        years: "1915-1998",
        role: "Singer and actor",
        tag: "Musician",
        image: "images/frank-sinatra.jpg",
        wiki: "Frank Sinatra"
    },
    {
        name: "Tupac Shakur",
        years: "1971-1996",
        role: "Rapper and actor",
        tag: "Musician",
        image: "images/tupac-shakur.jpg",
        wiki: "Tupac Shakur"
    },
    {
        name: "Snoop Dogg",
        years: "b. 1971",
        role: "Rapper and entertainer",
        tag: "Musician",
        image: "images/snoop-dogg.jpg",
        wiki: "Snoop Dogg"
    },
    {
        name: "Billie Eilish",
        years: "b. 2001",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/billie-eilish.jpg",
        wiki: "Billie Eilish"
    },
    {
        name: "Olivia Rodrigo",
        years: "b. 2003",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/olivia-rodrigo.jpg",
        wiki: "Olivia Rodrigo"
    },
    {
        name: "Bad Bunny",
        years: "b. 1994",
        role: "Reggaeton artist",
        tag: "Musician",
        image: "images/bad-bunny.jpg",
        wiki: "Bad Bunny"
    },
    {
        name: "Shakira",
        years: "b. 1977",
        role: "Singer and dancer",
        tag: "Musician",
        image: "images/shakira.jpg",
        wiki: "Shakira"
    },
    {
        name: "Billy Joel",
        years: "b. 1949",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/billy-joel.jpg",
        wiki: "Billy Joel"
    },
    {
        name: "Elton John",
        years: "b. 1947",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/elton-john.jpg",
        wiki: "Elton John"
    },
    {
        name: "Katy Perry",
        years: "b. 1984",
        role: "Singer",
        tag: "Musician",
        image: "images/katy-perry.jpg",
        wiki: "Katy Perry"
    },
    {
        name: "Ed Sheeran",
        years: "b. 1991",
        role: "Singer-songwriter",
        tag: "Musician",
        image: "images/ed-sheeran.jpg",
        wiki: "Ed Sheeran"
    },
    {
        name: "MrBeast",
        years: "b. 1998",
        role: "YouTuber and philanthropist",
        tag: "Influencer",
        image: "images/mrbeast.png",
        wiki: "MrBeast"
    },
    {
        name: "PewDiePie",
        years: "b. 1989",
        role: "YouTuber",
        tag: "Influencer",
        image: "images/pewdiepie.jpg",
        wiki: "PewDiePie"
    },
    {
        name: "Logan Paul",
        years: "b. 1995",
        role: "Influencer and boxer",
        tag: "Influencer",
        image: "images/logan-paul.jpg",
        wiki: "Logan Paul"
    },
    {
        name: "Jake Paul",
        years: "b. 1997",
        role: "Influencer and boxer",
        tag: "Influencer",
        image: "images/jake-paul.jpg",
        wiki: "Jake Paul"
    },
    {
        name: "KSI",
        years: "b. 1993",
        role: "Influencer and boxer",
        tag: "Influencer",
        image: "images/ksi.png",
        wiki: "KSI"
    },
    {
        name: "Addison Rae",
        years: "b. 2000",
        role: "Creator and singer",
        tag: "Influencer",
        image: "images/addison-rae.jpg",
        wiki: "Addison Rae"
    },
    {
        name: "iShowSpeed",
        years: "b. 2005",
        role: "Streamer and YouTuber",
        tag: "Influencer",
        image: "images/ishowspeed.jpg",
        wiki: "IShowSpeed"
    },
    {
        name: "Markiplier",
        years: "b. 1989",
        role: "Gaming YouTuber",
        tag: "Influencer",
        image: "images/markiplier.png",
        wiki: "Markiplier"
    },
    {
        name: "Andrew Tate",
        years: "b. 1986",
        role: "Internet personality",
        tag: "Influencer",
        image: "images/andrew-tate.png",
        wiki: "Andrew Tate"
    },
    {
        name: "Bella Poarch",
        years: "b. 1997",
        role: "TikTok creator",
        tag: "Influencer",
        image: "images/bella-poarch.jpg",
        wiki: "Bella Poarch"
    },
    {
        name: "DanTDM",
        years: "b. 1991",
        role: "Gaming YouTuber",
        tag: "Influencer",
        image: "images/dantdm.jpg",
        wiki: "DanTDM"
    },
    {
        name: "MatPat",
        years: "b. 1986",
        role: "YouTuber and theorist",
        tag: "Influencer",
        image: "images/matpat.jpg",
        wiki: "MatPat"
    },
    {
        name: "SSSniperWolf",
        years: "b. 1992",
        role: "YouTuber",
        tag: "Influencer",
        image: "images/sssniperwolf.jpg",
        wiki: "SSSniperWolf"
    },
    {
        name: "Piper Rockelle",
        years: "b. 2007",
        role: "Content creator and model",
        tag: "Influencer",
        image: "images/piper-rockelle.jpg",
        wiki: "Piper Rockelle"
    },
    {
        name: "Ninja",
        years: "b. 1991",
        role: "Streamer and YouTuber",
        tag: "Streamer",
        image: "images/ninja.jpg",
        wiki: "Ninja (gamer)"
    },
    {
        name: "Pokimane",
        years: "b. 1996",
        role: "Streamer and creator",
        tag: "Streamer",
        image: "images/pokimane.png",
        wiki: "Pokimane"
    },
    {
        name: "Tyler1",
        years: "b. 1995",
        role: "Twitch streamer",
        tag: "Streamer",
        image: "images/tyler1.png",
        wiki: "Tyler1"
    },
    {
        name: "Kai Cenat",
        years: "b. 2001",
        role: "Streamer and entertainer",
        tag: "Streamer",
        image: "images/kai-cenat.jpg",
        wiki: "Kai Cenat"
    },
    {
        name: "Valkyrae",
        years: "b. 1992",
        role: "Streamer and YouTuber",
        tag: "Streamer",
        image: "images/valkyrae.png",
        wiki: "Valkyrae"
    },
    {
        name: "Dr Disrespect",
        years: "b. 1982",
        role: "Streamer",
        tag: "Streamer",
        image: "images/dr-disrespect.jpg",
        wiki: "Dr Disrespect"
    },
    {
        name: "Ludwig",
        years: "b. 1995",
        role: "Streamer and YouTuber",
        tag: "Streamer",
        image: "images/ludwig.jpg",
        wiki: "Ludwig Ahgren"
    },
    {
        name: "Mia Khalifa",
        years: "b. 1993",
        role: "Media personality",
        tag: "OnlyFans",
        image: "images/mia-khalifa.png",
        wiki: "Mia Khalifa"
    },
    {
        name: "Amouranth",
        years: "b. 1993",
        role: "Streamer and creator",
        tag: "OnlyFans",
        image: "images/amouranth.jpg",
        wiki: "Amouranth"
    },
    {
        name: "Sophie Rain",
        years: "b. 2004",
        role: "Internet personality",
        tag: "OnlyFans",
        image: "images/sophie-rain.jpg",
        wiki: "Sophie Rain"
    },
    {
        name: "Bonnie Blue",
        years: "b. 1999",
        role: "Adult film actress",
        tag: "OnlyFans",
        image: "images/bonnie-blue.jpg",
        wiki: "Bonnie Blue"
    },
    {
        name: "Riley Reid",
        years: "b. 1991",
        role: "Adult film actress",
        tag: "OnlyFans",
        image: "images/riley-reid.jpg",
        wiki: "Riley Reid"
    },
    {
        name: "Mia Malkova",
        years: "b. 1992",
        role: "Adult film actress and media personality",
        tag: "OnlyFans",
        image: "images/mia-malkova.jpg",
        wiki: "Mia Malkova"
    },
    {
        name: "Lily Phillips",
        years: "b. 2001",
        role: "Adult film actress",
        tag: "OnlyFans",
        image: "images/lily-phillips.png",
        wiki: "Lily Phillips"
    },
    {
        name: "Abella Danger",
        years: "b. 1995",
        role: "Adult film actress and director",
        tag: "OnlyFans",
        image: "images/abella-danger.jpg",
        wiki: "Abella Danger"
    },
    {
        name: "Harry Potter",
        years: "Debut 1997",
        role: "Boy wizard of Hogwarts",
        tag: "Literature",
        image: "images/harry-potter.jpg",
        wiki: "Harry Potter"
    },
    {
        name: "Hermione Granger",
        years: "Debut 1997",
        role: "Hogwarts witch and bookworm",
        tag: "Literature",
        image: "images/hermione-granger.jpg",
        wiki: "Hermione Granger"
    },
    {
        name: "Sherlock Holmes",
        years: "Debut 1887",
        role: "Consulting detective of Baker Street",
        tag: "Literature",
        image: "images/sherlock-holmes.jpg",
        wiki: "Sherlock Holmes"
    },
    {
        name: "Dracula",
        years: "Debut 1897",
        role: "Transylvanian vampire count",
        tag: "Literature",
        image: "images/dracula.jpg",
        wiki: "Dracula"
    },
    {
        name: "Gandalf",
        years: "Debut 1954",
        role: "Wizard of Middle-earth",
        tag: "Literature",
        image: "images/gandalf.jpg",
        wiki: "Gandalf"
    },
    {
        name: "Alice",
        years: "Debut 1865",
        role: "Girl down the rabbit hole",
        tag: "Literature",
        image: "images/alice.png",
        wiki: "Alice (Alice's Adventures in Wonderland)"
    },
    {
        name: "Superman",
        years: "Debut 1938",
        role: "Kryptonian hero of Metropolis",
        tag: "Comic",
        image: "images/superman.png",
        wiki: "Superman"
    },
    {
        name: "Batman",
        years: "Debut 1939",
        role: "Caped crusader of Gotham",
        tag: "Comic",
        image: "images/batman.jpg",
        wiki: "Batman"
    },
    {
        name: "Spider-Man",
        years: "Debut 1962",
        role: "Web-slinging hero of New York",
        tag: "Comic",
        image: "images/spider-man.jpg",
        wiki: "Spider-Man"
    },
    {
        name: "Wonder Woman",
        years: "Debut 1941",
        role: "Amazon warrior princess",
        tag: "Comic",
        image: "images/wonder-woman.png",
        wiki: "Wonder Woman"
    },
    {
        name: "The Joker",
        years: "Debut 1940",
        role: "Gotham's clown prince of crime",
        tag: "Comic",
        image: "images/the-joker.png",
        wiki: "Joker (character)"
    },
    {
        name: "Harley Quinn",
        years: "Debut 1992",
        role: "Arkham psychiatrist turned villain",
        tag: "Comic",
        image: "images/harley-quinn.png",
        wiki: "Harley Quinn"
    },
    {
        name: "Darth Vader",
        years: "Debut 1977",
        role: "Sith lord in a black mask",
        tag: "Film & TV",
        image: "images/darth-vader.jpg",
        wiki: "Darth Vader"
    },
    {
        name: "Luke Skywalker",
        years: "Debut 1977",
        role: "Rebel pilot turned Jedi",
        tag: "Film & TV",
        image: "images/luke-skywalker.jpg",
        wiki: "Luke Skywalker"
    },
    {
        name: "James Bond",
        years: "Debut 1953",
        role: "007, British secret agent",
        tag: "Film & TV",
        image: "images/james-bond.jpg",
        wiki: "James Bond (literary character)"
    },
    {
        name: "Indiana Jones",
        years: "Debut 1981",
        role: "Archaeologist in a fedora",
        tag: "Film & TV",
        image: "images/indiana-jones.jpg",
        wiki: "Indiana Jones"
    },
    {
        name: "Rocky Balboa",
        years: "Debut 1976",
        role: "Boxer from Philadelphia",
        tag: "Film & TV",
        image: "images/rocky-balboa.jpg",
        wiki: "Rocky Balboa"
    },
    {
        name: "Katniss Everdeen",
        years: "Debut 2008",
        role: "Tribute who sparked a rebellion",
        tag: "Film & TV",
        image: "images/katniss-everdeen.jpg",
        wiki: "Katniss Everdeen"
    },
    {
        name: "Walter White",
        years: "Debut 2008",
        role: "Chemist turned meth kingpin",
        tag: "Film & TV",
        image: "images/walter-white.jpg",
        wiki: "Walter White"
    },
    {
        name: "Willy Wonka",
        years: "Debut 1964",
        role: "Eccentric chocolate factory owner",
        tag: "Film & TV",
        image: "images/willy-wonka.jpg",
        wiki: "Willy Wonka"
    },
    {
        name: "Daenerys Targaryen",
        years: "Debut 1996",
        role: "Mother of Dragons",
        tag: "Film & TV",
        image: "images/daenerys-targaryen.jpg",
        wiki: "Daenerys Targaryen"
    },
    {
        name: "Mickey Mouse",
        years: "Debut 1928",
        role: "Disney's original cartoon mouse",
        tag: "Cartoon",
        image: "images/mickey-mouse.jpg",
        wiki: "Mickey Mouse"
    },
    {
        name: "Bugs Bunny",
        years: "Debut 1940",
        role: "Carrot-munching trickster rabbit",
        tag: "Cartoon",
        image: "images/bugs-bunny.png",
        wiki: "Bugs Bunny"
    },
    {
        name: "SpongeBob SquarePants",
        years: "Debut 1999",
        role: "Fry cook of Bikini Bottom",
        tag: "Cartoon",
        image: "images/spongebob-squarepants.jpg",
        wiki: "SpongeBob SquarePants"
    },
    {
        name: "Scooby-Doo",
        years: "Debut 1969",
        role: "Mystery-solving Great Dane",
        tag: "Cartoon",
        image: "images/scooby-doo.jpg",
        wiki: "Scooby-Doo"
    },
    {
        name: "Cinderella",
        years: "Debut 1950",
        role: "Princess of the glass slipper",
        tag: "Cartoon",
        image: "images/cinderella.jpg",
        wiki: "Cinderella"
    },
    {
        name: "Elsa",
        years: "Debut 2013",
        role: "Snow queen of Arendelle",
        tag: "Cartoon",
        image: "images/elsa.jpg",
        wiki: "Elsa (Frozen)"
    },
    {
        name: "Simba",
        years: "Debut 1994",
        role: "Lion king of the Pride Lands",
        tag: "Cartoon",
        image: "images/simba.jpg",
        wiki: "Simba"
    },
    {
        name: "Shrek",
        years: "Debut 2001",
        role: "Ogre of the swamp",
        tag: "Cartoon",
        image: "images/shrek.jpg",
        wiki: "Shrek"
    },
    {
        name: "Buzz Lightyear",
        years: "Debut 1995",
        role: "Toy space ranger",
        tag: "Cartoon",
        image: "images/buzz-lightyear.jpg",
        wiki: "Buzz Lightyear"
    },
    {
        name: "Homer Simpson",
        years: "Debut 1989",
        role: "Springfield's donut-loving dad",
        tag: "Cartoon",
        image: "images/homer-simpson.jpg",
        wiki: "Homer Simpson"
    },
    {
        name: "Mario",
        years: "Debut 1981",
        role: "Plumber and Nintendo mascot",
        tag: "Game",
        image: "images/mario.jpg",
        wiki: "Mario (character)"
    },
    {
        name: "Link",
        years: "Debut 1986",
        role: "Hero of Hyrule",
        tag: "Game",
        image: "images/link.jpg",
        wiki: "Link (The Legend of Zelda)"
    },
    {
        name: "Sonic the Hedgehog",
        years: "Debut 1991",
        role: "Sega's speedy blue hedgehog",
        tag: "Game",
        image: "images/sonic-the-hedgehog.jpg",
        wiki: "Sonic the Hedgehog"
    },
    {
        name: "Lara Croft",
        years: "Debut 1996",
        role: "Tomb-raiding archaeologist",
        tag: "Game",
        image: "images/lara-croft.jpg",
        wiki: "Lara Croft"
    },
    {
        name: "Goku",
        years: "Debut 1984",
        role: "Saiyan fighter of Dragon Ball",
        tag: "Anime",
        image: "images/goku.jpg",
        wiki: "Goku"
    },
    {
        name: "Naruto Uzumaki",
        years: "Debut 1999",
        role: "Ninja who dreams of Hokage",
        tag: "Anime",
        image: "images/naruto-uzumaki.jpg",
        wiki: "Naruto Uzumaki"
    },
    {
        name: "Sailor Moon",
        years: "Debut 1991",
        role: "Guardian of love and justice",
        tag: "Anime",
        image: "images/sailor-moon.jpg",
        wiki: "Sailor Moon"
    },
    {
        name: "Pikachu",
        years: "Debut 1996",
        role: "Electric-type Pokemon mascot",
        tag: "Anime",
        image: "images/pikachu.jpg",
        wiki: "Pikachu"
    },
    {
        name: "Monkey D. Luffy",
        years: "Debut 1997",
        role: "Pirate captain of the Straw Hats",
        tag: "Anime",
        image: "images/monkey-d-luffy.jpg",
        wiki: "Monkey D. Luffy"
    }
];

// Allow tools/build.mjs style tooling to read this file too.
if (typeof module !== "undefined") {
    module.exports = ROSTER;
}
