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
        score: 195,
        tag: "Activist",
        image: "images/martin-luther-king-jr.jpg",
        wiki: "Martin Luther King Jr."
    },
    {
        name: "Mahatma Gandhi",
        years: "1869-1948",
        role: "Indian independence leader",
        score: 183,
        tag: "Activist",
        image: "images/mahatma-gandhi.jpg",
        wiki: "Mahatma Gandhi"
    },
    {
        name: "Nelson Mandela",
        years: "1918-2013",
        role: "Anti-apartheid leader",
        score: 193,
        tag: "Activist",
        image: "images/nelson-mandela.jpg",
        wiki: "Nelson Mandela"
    },
    {
        name: "Malcolm X",
        years: "1925-1965",
        role: "Civil rights activist",
        score: 149,
        tag: "Activist",
        image: "images/malcolm-x.jpg",
        wiki: "Malcolm X"
    },
    {
        name: "Rosa Parks",
        years: "1913-2005",
        role: "Civil rights icon",
        score: 187,
        tag: "Activist",
        image: "images/rosa-parks.jpg",
        wiki: "Rosa Parks"
    },
    {
        name: "Harriet Tubman",
        years: "c. 1822-1913",
        role: "Underground Railroad conductor",
        score: 196,
        tag: "Activist",
        image: "images/harriet-tubman.jpg",
        wiki: "Harriet Tubman"
    },
    {
        name: "Susan B. Anthony",
        years: "1820-1906",
        role: "Women's suffrage leader",
        score: 175,
        tag: "Activist",
        image: "images/susan-b-anthony.jpg",
        wiki: "Susan B. Anthony"
    },
    {
        name: "Emmeline Pankhurst",
        years: "1858-1928",
        role: "Suffragette leader",
        score: 165,
        tag: "Activist",
        image: "images/emmeline-pankhurst.jpg",
        wiki: "Emmeline Pankhurst"
    },
    {
        name: "Desmond Tutu",
        years: "1931-2021",
        role: "Anti-apartheid archbishop",
        score: 178,
        tag: "Activist",
        image: "images/desmond-tutu.jpg",
        wiki: "Desmond Tutu"
    },
    {
        name: "B. R. Ambedkar",
        years: "1891-1956",
        role: "Constitutional reformer",
        score: 189,
        tag: "Activist",
        image: "images/b-r-ambedkar.jpg",
        wiki: "B. R. Ambedkar"
    },
    {
        name: "The Dalai Lama",
        years: "b. 1935",
        role: "Spiritual leader in exile",
        score: 160,
        tag: "Activist",
        image: "images/the-dalai-lama.jpg",
        wiki: "14th Dalai Lama"
    },
    {
        name: "Mother Teresa",
        years: "1910-1997",
        role: "Missionary of the poor",
        score: 105,
        tag: "Activist",
        image: "images/mother-teresa.jpg",
        wiki: "Mother Teresa"
    },
    {
        name: "Marcus Garvey",
        years: "1887-1940",
        role: "Pan-Africanist leader",
        score: 96,
        tag: "Activist",
        image: "images/marcus-garvey.jpg",
        wiki: "Marcus Garvey"
    },
    {
        name: "Abraham Lincoln",
        years: "1809-1865",
        role: "Ended slavery in the US",
        score: 169,
        tag: "Leader",
        image: "images/abraham-lincoln.jpg",
        wiki: "Abraham Lincoln"
    },
    {
        name: "Winston Churchill",
        years: "1874-1965",
        role: "Wartime British prime minister",
        score: 115,
        tag: "Leader",
        image: "images/winston-churchill.jpg",
        wiki: "Winston Churchill"
    },
    {
        name: "Franklin D. Roosevelt",
        years: "1882-1945",
        role: "US president, New Deal and WWII",
        score: 145,
        tag: "Leader",
        image: "images/franklin-d-roosevelt.jpg",
        wiki: "Franklin D. Roosevelt"
    },
    {
        name: "John F. Kennedy",
        years: "1917-1963",
        role: "US president",
        score: 123,
        tag: "Leader",
        image: "images/john-f-kennedy.jpg",
        wiki: "John F. Kennedy"
    },
    {
        name: "Ronald Reagan",
        years: "1911-2004",
        role: "US president",
        score: 84,
        tag: "Leader",
        image: "images/ronald-reagan.jpg",
        wiki: "Ronald Reagan"
    },
    {
        name: "Margaret Thatcher",
        years: "1925-2013",
        role: "British prime minister",
        score: 65,
        tag: "Leader",
        image: "images/margaret-thatcher.jpg",
        wiki: "Margaret Thatcher"
    },
    {
        name: "George Washington",
        years: "1732-1799",
        role: "First US president",
        score: 139,
        tag: "Leader",
        image: "images/george-washington.jpg",
        wiki: "George Washington"
    },
    {
        name: "Thomas Jefferson",
        years: "1743-1826",
        role: "US founding father",
        score: 101,
        tag: "Leader",
        image: "images/thomas-jefferson.jpg",
        wiki: "Thomas Jefferson"
    },
    {
        name: "Simon Bolivar",
        years: "1783-1830",
        role: "Liberator of South America",
        score: 120,
        tag: "Leader",
        image: "images/simon-bolivar.png",
        wiki: "Simón Bolívar"
    },
    {
        name: "Jawaharlal Nehru",
        years: "1889-1964",
        role: "First prime minister of India",
        score: 131,
        tag: "Leader",
        image: "images/jawaharlal-nehru.jpg",
        wiki: "Jawaharlal Nehru"
    },
    {
        name: "Haile Selassie",
        years: "1892-1975",
        role: "Emperor of Ethiopia",
        score: 52,
        tag: "Leader",
        image: "images/haile-selassie.jpg",
        wiki: "Haile Selassie"
    },
    {
        name: "Mustafa Kemal Ataturk",
        years: "1881-1938",
        role: "Founder of modern Turkey",
        score: 127,
        tag: "Leader",
        image: "images/mustafa-kemal-ataturk.jpg",
        wiki: "Mustafa Kemal Atatürk"
    },
    {
        name: "Cleopatra",
        years: "69-30 BC",
        role: "Queen of Egypt",
        score: 45,
        tag: "Leader",
        image: "images/cleopatra.jpg",
        wiki: "Cleopatra"
    },
    {
        name: "Elizabeth I",
        years: "1533-1603",
        role: "Queen of England",
        score: 90,
        tag: "Leader",
        image: "images/elizabeth-i.jpg",
        wiki: "Elizabeth I"
    },
    {
        name: "Queen Victoria",
        years: "1819-1901",
        role: "Queen of the United Kingdom",
        score: 76,
        tag: "Leader",
        image: "images/queen-victoria.jpg",
        wiki: "Queen Victoria"
    },
    {
        name: "Adolf Hitler",
        years: "1889-1945",
        role: "Nazi dictator",
        score: 1,
        tag: "Dictator",
        image: "images/adolf-hitler.jpg",
        wiki: "Adolf Hitler"
    },
    {
        name: "Joseph Stalin",
        years: "1878-1953",
        role: "Soviet dictator",
        score: 6,
        tag: "Dictator",
        image: "images/joseph-stalin.jpg",
        wiki: "Joseph Stalin"
    },
    {
        name: "Mao Zedong",
        years: "1893-1976",
        role: "Communist China's chairman",
        score: 7,
        tag: "Dictator",
        image: "images/mao-zedong.jpg",
        wiki: "Mao Zedong"
    },
    {
        name: "Vladimir Lenin",
        years: "1870-1924",
        role: "Bolshevik revolutionary",
        score: 11,
        tag: "Dictator",
        image: "images/vladimir-lenin.jpg",
        wiki: "Vladimir Lenin"
    },
    {
        name: "Pol Pot",
        years: "1925-1998",
        role: "Khmer Rouge leader",
        score: 2,
        tag: "Dictator",
        image: "images/pol-pot.png",
        wiki: "Pol Pot"
    },
    {
        name: "Idi Amin",
        years: "1925-2003",
        role: "Ugandan dictator",
        score: 4,
        tag: "Dictator",
        image: "images/idi-amin.jpg",
        wiki: "Idi Amin"
    },
    {
        name: "Leopold II",
        years: "1835-1909",
        role: "King of Belgium",
        score: 3,
        tag: "Dictator",
        image: "images/leopold-ii.jpg",
        wiki: "Leopold II of Belgium"
    },
    {
        name: "Saddam Hussein",
        years: "1937-2006",
        role: "Iraqi dictator",
        score: 5,
        tag: "Dictator",
        image: "images/saddam-hussein.jpg",
        wiki: "Saddam Hussein"
    },
    {
        name: "Caligula",
        years: "12-41",
        role: "Roman emperor",
        score: 8,
        tag: "Dictator",
        image: "images/caligula.jpg",
        wiki: "Caligula"
    },
    {
        name: "Nero",
        years: "37-68",
        role: "Roman emperor",
        score: 9,
        tag: "Dictator",
        image: "images/nero.jpg",
        wiki: "Nero"
    },
    {
        name: "Benedict Arnold",
        years: "1741-1801",
        role: "American traitor",
        score: 12,
        tag: "Dictator",
        image: "images/benedict-arnold.jpg",
        wiki: "Benedict Arnold"
    },
    {
        name: "Julius Caesar",
        years: "100-44 BC",
        role: "Roman general and dictator",
        score: 26,
        tag: "Ruler",
        image: "images/julius-caesar.jpg",
        wiki: "Julius Caesar"
    },
    {
        name: "Alexander the Great",
        years: "356-323 BC",
        role: "Macedonian king",
        score: 27,
        tag: "Ruler",
        image: "images/alexander-the-great.jpg",
        wiki: "Alexander the Great"
    },
    {
        name: "Genghis Khan",
        years: "c. 1162-1227",
        role: "Mongol emperor",
        score: 14,
        tag: "Ruler",
        image: "images/genghis-khan.jpg",
        wiki: "Genghis Khan"
    },
    {
        name: "Saladin",
        years: "1137-1193",
        role: "Sultan of Egypt and Syria",
        score: 130,
        tag: "Ruler",
        image: "images/saladin.jpg",
        wiki: "Saladin"
    },
    {
        name: "Charlemagne",
        years: "742-814",
        role: "Holy Roman Emperor",
        score: 32,
        tag: "Ruler",
        image: "images/charlemagne.jpg",
        wiki: "Charlemagne"
    },
    {
        name: "Catherine the Great",
        years: "1729-1796",
        role: "Empress of Russia",
        score: 41,
        tag: "Ruler",
        image: "images/catherine-the-great.jpg",
        wiki: "Catherine the Great"
    },
    {
        name: "Peter the Great",
        years: "1672-1725",
        role: "Tsar of Russia",
        score: 22,
        tag: "Ruler",
        image: "images/peter-the-great.jpg",
        wiki: "Peter the Great"
    },
    {
        name: "Henry VIII",
        years: "1491-1547",
        role: "King of England",
        score: 13,
        tag: "Ruler",
        image: "images/henry-viii.jpg",
        wiki: "Henry VIII of England"
    },
    {
        name: "Napoleon Bonaparte",
        years: "1769-1821",
        role: "Emperor of the French",
        score: 38,
        tag: "Ruler",
        image: "images/napoleon-bonaparte.jpg",
        wiki: "Napoleon"
    },
    {
        name: "Mansa Musa",
        years: "c. 1280-1337",
        role: "Emperor of Mali",
        score: 153,
        tag: "Ruler",
        image: "images/mansa-musa.jpg",
        wiki: "Mansa Musa"
    },
    {
        name: "Akbar",
        years: "1542-1605",
        role: "Mughal emperor",
        score: 142,
        tag: "Ruler",
        image: "images/akbar.jpg",
        wiki: "Akbar"
    },
    {
        name: "Ashoka",
        years: "304-232 BC",
        role: "Mauryan emperor",
        score: 161,
        tag: "Ruler",
        image: "images/ashoka.jpg",
        wiki: "Ashoka"
    },
    {
        name: "Confucius",
        years: "551-479 BC",
        role: "Chinese philosopher",
        score: 156,
        tag: "Thinker",
        image: "images/confucius.jpg",
        wiki: "Confucius"
    },
    {
        name: "Socrates",
        years: "470-399 BC",
        role: "Greek philosopher",
        score: 167,
        tag: "Thinker",
        image: "images/socrates.jpg",
        wiki: "Socrates"
    },
    {
        name: "Plato",
        years: "428-348 BC",
        role: "Greek philosopher",
        score: 138,
        tag: "Thinker",
        image: "images/plato.png",
        wiki: "Plato"
    },
    {
        name: "Aristotle",
        years: "384-322 BC",
        role: "Greek philosopher",
        score: 107,
        tag: "Thinker",
        image: "images/aristotle.jpg",
        wiki: "Aristotle"
    },
    {
        name: "Sun Tzu",
        years: "c. 544-496 BC",
        role: "Strategist and philosopher",
        score: 89,
        tag: "Thinker",
        image: "images/sun-tzu.jpg",
        wiki: "Sun Tzu"
    },
    {
        name: "Albert Einstein",
        years: "1879-1955",
        role: "Theoretical physicist",
        score: 177,
        tag: "Scientist",
        image: "images/albert-einstein.jpg",
        wiki: "Albert Einstein"
    },
    {
        name: "Isaac Newton",
        years: "1643-1727",
        role: "Physicist and mathematician",
        score: 122,
        tag: "Scientist",
        image: "images/isaac-newton.jpg",
        wiki: "Isaac Newton"
    },
    {
        name: "Marie Curie",
        years: "1867-1934",
        role: "Physicist and chemist",
        score: 192,
        tag: "Scientist",
        image: "images/marie-curie.jpg",
        wiki: "Marie Curie"
    },
    {
        name: "Nikola Tesla",
        years: "1856-1943",
        role: "Inventor and engineer",
        score: 151,
        tag: "Scientist",
        image: "images/nikola-tesla.jpeg",
        wiki: "Nikola Tesla"
    },
    {
        name: "Thomas Edison",
        years: "1847-1931",
        role: "Inventor",
        score: 81,
        tag: "Scientist",
        image: "images/thomas-edison.jpg",
        wiki: "Thomas Edison"
    },
    {
        name: "Galileo Galilei",
        years: "1564-1642",
        role: "Astronomer and physicist",
        score: 171,
        tag: "Scientist",
        image: "images/galileo-galilei.jpg",
        wiki: "Galileo Galilei"
    },
    {
        name: "Charles Darwin",
        years: "1809-1882",
        role: "Naturalist",
        score: 181,
        tag: "Scientist",
        image: "images/charles-darwin.jpg",
        wiki: "Charles Darwin"
    },
    {
        name: "Alan Turing",
        years: "1912-1954",
        role: "Mathematician and codebreaker",
        score: 188,
        tag: "Scientist",
        image: "images/alan-turing.jpg",
        wiki: "Alan Turing"
    },
    {
        name: "Rosalind Franklin",
        years: "1920-1958",
        role: "Chemist and crystallographer",
        score: 174,
        tag: "Scientist",
        image: "images/rosalind-franklin.jpg",
        wiki: "Rosalind Franklin"
    },
    {
        name: "Stephen Hawking",
        years: "1942-2018",
        role: "Theoretical physicist",
        score: 147,
        tag: "Scientist",
        image: "images/stephen-hawking.jpg",
        wiki: "Stephen Hawking"
    },
    {
        name: "Jonas Salk",
        years: "1914-1995",
        role: "Developed the polio vaccine",
        score: 197,
        tag: "Scientist",
        image: "images/jonas-salk.jpg",
        wiki: "Jonas Salk"
    },
    {
        name: "Louis Pasteur",
        years: "1822-1895",
        role: "Chemist and microbiologist",
        score: 185,
        tag: "Scientist",
        image: "images/louis-pasteur.jpg",
        wiki: "Louis Pasteur"
    },
    {
        name: "Emmy Noether",
        years: "1882-1935",
        role: "Mathematician",
        score: 163,
        tag: "Scientist",
        image: "images/emmy-noether.jpg",
        wiki: "Emmy Noether"
    },
    {
        name: "William Shakespeare",
        years: "1564-1616",
        role: "Playwright and poet",
        score: 144,
        tag: "Artist",
        image: "images/william-shakespeare.jpg",
        wiki: "William Shakespeare"
    },
    {
        name: "Leonardo da Vinci",
        years: "1452-1519",
        role: "Artist and inventor",
        score: 180,
        tag: "Artist",
        image: "images/leonardo-da-vinci.png",
        wiki: "Leonardo da Vinci"
    },
    {
        name: "Michelangelo",
        years: "1475-1564",
        role: "Artist and sculptor",
        score: 132,
        tag: "Artist",
        image: "images/michelangelo.jpg",
        wiki: "Michelangelo"
    },
    {
        name: "Vincent van Gogh",
        years: "1853-1890",
        role: "Painter",
        score: 155,
        tag: "Artist",
        image: "images/vincent-van-gogh.jpg",
        wiki: "Vincent van Gogh"
    },
    {
        name: "Pablo Picasso",
        years: "1881-1973",
        role: "Painter",
        score: 70,
        tag: "Artist",
        image: "images/pablo-picasso.jpg",
        wiki: "Pablo Picasso"
    },
    {
        name: "Ludwig van Beethoven",
        years: "1770-1827",
        role: "Composer",
        score: 157,
        tag: "Artist",
        image: "images/ludwig-van-beethoven.jpg",
        wiki: "Ludwig van Beethoven"
    },
    {
        name: "Wolfgang Amadeus Mozart",
        years: "1756-1791",
        role: "Composer",
        score: 176,
        tag: "Artist",
        image: "images/wolfgang-amadeus-mozart.jpg",
        wiki: "Wolfgang Amadeus Mozart"
    },
    {
        name: "Johann Sebastian Bach",
        years: "1685-1750",
        role: "Composer",
        score: 140,
        tag: "Artist",
        image: "images/johann-sebastian-bach.jpg",
        wiki: "Johann Sebastian Bach"
    },
    {
        name: "Jane Austen",
        years: "1775-1817",
        role: "Novelist",
        score: 128,
        tag: "Artist",
        image: "images/jane-austen.jpg",
        wiki: "Jane Austen"
    },
    {
        name: "Mark Twain",
        years: "1835-1910",
        role: "Author and humorist",
        score: 119,
        tag: "Artist",
        image: "images/mark-twain.jpg",
        wiki: "Mark Twain"
    },
    {
        name: "Fyodor Dostoevsky",
        years: "1821-1881",
        role: "Novelist",
        score: 111,
        tag: "Artist",
        image: "images/fyodor-dostoevsky.jpg",
        wiki: "Fyodor Dostoevsky"
    },
    {
        name: "Frida Kahlo",
        years: "1907-1954",
        role: "Painter",
        score: 136,
        tag: "Artist",
        image: "images/frida-kahlo.jpg",
        wiki: "Frida Kahlo"
    },
    {
        name: "Florence Nightingale",
        years: "1820-1910",
        role: "Founder of modern nursing",
        score: 194,
        tag: "Pioneer",
        image: "images/florence-nightingale.jpg",
        wiki: "Florence Nightingale"
    },
    {
        name: "Anne Frank",
        years: "1929-1945",
        role: "Diary writer, Holocaust victim",
        score: 198,
        tag: "Pioneer",
        image: "images/anne-frank.jpg",
        wiki: "Anne Frank"
    },
    {
        name: "Oskar Schindler",
        years: "1908-1974",
        role: "Saved around 1,200 Jews",
        score: 191,
        tag: "Pioneer",
        image: "images/oskar-schindler.jpg",
        wiki: "Oskar Schindler"
    },
    {
        name: "Christopher Columbus",
        years: "1451-1506",
        role: "Explorer",
        score: 10,
        tag: "Pioneer",
        image: "images/christopher-columbus.jpg",
        wiki: "Christopher Columbus"
    },
    {
        name: "Amelia Earhart",
        years: "1897-1937",
        role: "Aviation pioneer",
        score: 164,
        tag: "Pioneer",
        image: "images/amelia-earhart.jpg",
        wiki: "Amelia Earhart"
    },
    {
        name: "Sacagawea",
        years: "c. 1788-1812",
        role: "Interpreter and guide",
        score: 172,
        tag: "Pioneer",
        image: "images/sacagawea.jpg",
        wiki: "Sacagawea"
    },
    {
        name: "Muhammad Ali",
        years: "1942-2016",
        role: "Boxer and activist",
        score: 150,
        tag: "Pioneer",
        image: "images/muhammad-ali.jpg",
        wiki: "Muhammad Ali"
    },
    {
        name: "Jesse Owens",
        years: "1913-1980",
        role: "Olympic sprinter",
        score: 182,
        tag: "Pioneer",
        image: "images/jesse-owens.jpg",
        wiki: "Jesse Owens"
    },
    {
        name: "Michael Jackson",
        years: "1958-2009",
        role: "King of Pop",
        score: 129,
        tag: "Musician",
        image: "images/michael-jackson.jpg",
        wiki: "Michael Jackson"
    },
    {
        name: "Elvis Presley",
        years: "1935-1977",
        role: "King of Rock and Roll",
        score: 103,
        tag: "Musician",
        image: "images/elvis-presley.jpg",
        wiki: "Elvis Presley"
    },
    {
        name: "Freddie Mercury",
        years: "1946-1991",
        role: "Queen's frontman",
        score: 166,
        tag: "Musician",
        image: "images/freddie-mercury.jpg",
        wiki: "Freddie Mercury"
    },
    {
        name: "John Lennon",
        years: "1940-1980",
        role: "Beatle and peace campaigner",
        score: 112,
        tag: "Musician",
        image: "images/john-lennon.jpg",
        wiki: "John Lennon"
    },
    {
        name: "Paul McCartney",
        years: "b. 1942",
        role: "Beatle and songwriter",
        score: 158,
        tag: "Musician",
        image: "images/paul-mccartney.jpg",
        wiki: "Paul McCartney"
    },
    {
        name: "Beyonce",
        years: "b. 1981",
        role: "Singer and performer",
        score: 148,
        tag: "Musician",
        image: "images/beyonce.jpg",
        wiki: "Beyonce"
    },
    {
        name: "Taylor Swift",
        years: "b. 1989",
        role: "Singer-songwriter",
        score: 143,
        tag: "Musician",
        image: "images/taylor-swift.png",
        wiki: "Taylor Swift"
    },
    {
        name: "Rihanna",
        years: "b. 1988",
        role: "Singer and businesswoman",
        score: 124,
        tag: "Musician",
        image: "images/rihanna.png",
        wiki: "Rihanna"
    },
    {
        name: "Drake",
        years: "b. 1986",
        role: "Rapper and singer",
        score: 46,
        tag: "Musician",
        image: "images/drake.jpg",
        wiki: "Drake (musician)"
    },
    {
        name: "Kanye West",
        years: "b. 1977",
        role: "Rapper and producer",
        score: 15,
        tag: "Musician",
        image: "images/kanye-west.jpg",
        wiki: "Kanye West"
    },
    {
        name: "Eminem",
        years: "b. 1972",
        role: "Rapper",
        score: 36,
        tag: "Musician",
        image: "images/eminem.jpg",
        wiki: "Eminem"
    },
    {
        name: "Jay-Z",
        years: "b. 1969",
        role: "Rapper and businessman",
        score: 79,
        tag: "Musician",
        image: "images/jay-z.webp",
        wiki: "Jay-Z"
    },
    {
        name: "Madonna",
        years: "b. 1958",
        role: "Singer and pop icon",
        score: 95,
        tag: "Musician",
        image: "images/madonna.jpg",
        wiki: "Madonna (entertainer)"
    },
    {
        name: "Lady Gaga",
        years: "b. 1986",
        role: "Singer and actress",
        score: 137,
        tag: "Musician",
        image: "images/lady-gaga.jpg",
        wiki: "Lady Gaga"
    },
    {
        name: "Ariana Grande",
        years: "b. 1993",
        role: "Singer and actress",
        score: 116,
        tag: "Musician",
        image: "images/ariana-grande.jpg",
        wiki: "Ariana Grande"
    },
    {
        name: "Bruno Mars",
        years: "b. 1985",
        role: "Singer-songwriter",
        score: 125,
        tag: "Musician",
        image: "images/bruno-mars.jpg",
        wiki: "Bruno Mars"
    },
    {
        name: "Adele",
        years: "b. 1988",
        role: "Singer-songwriter",
        score: 152,
        tag: "Musician",
        image: "images/adele.jpg",
        wiki: "Adele"
    },
    {
        name: "Whitney Houston",
        years: "1963-2012",
        role: "Singer and actress",
        score: 134,
        tag: "Musician",
        image: "images/whitney-houston.jpeg",
        wiki: "Whitney Houston"
    },
    {
        name: "Aretha Franklin",
        years: "1942-2018",
        role: "Queen of Soul",
        score: 173,
        tag: "Musician",
        image: "images/aretha-franklin.jpg",
        wiki: "Aretha Franklin"
    },
    {
        name: "Bob Marley",
        years: "1945-1981",
        role: "Reggae pioneer",
        score: 170,
        tag: "Musician",
        image: "images/bob-marley.jpg",
        wiki: "Bob Marley"
    },
    {
        name: "Kurt Cobain",
        years: "1967-1994",
        role: "Nirvana frontman",
        score: 88,
        tag: "Musician",
        image: "images/kurt-cobain.jpg",
        wiki: "Kurt Cobain"
    },
    {
        name: "Jimi Hendrix",
        years: "1942-1970",
        role: "Guitarist",
        score: 108,
        tag: "Musician",
        image: "images/jimi-hendrix.jpg",
        wiki: "Jimi Hendrix"
    },
    {
        name: "Prince",
        years: "1958-2016",
        role: "Singer and multi-instrumentalist",
        score: 141,
        tag: "Musician",
        image: "images/prince.png",
        wiki: "Prince (musician)"
    },
    {
        name: "Dolly Parton",
        years: "b. 1946",
        role: "Country singer and philanthropist",
        score: 190,
        tag: "Musician",
        image: "images/dolly-parton.jpg",
        wiki: "Dolly Parton"
    },
    {
        name: "Johnny Cash",
        years: "1932-2003",
        role: "Country singer",
        score: 98,
        tag: "Musician",
        image: "images/johnny-cash.jpg",
        wiki: "Johnny Cash"
    },
    {
        name: "Frank Sinatra",
        years: "1915-1998",
        role: "Singer and actor",
        score: 92,
        tag: "Musician",
        image: "images/frank-sinatra.jpg",
        wiki: "Frank Sinatra"
    },
    {
        name: "Tupac Shakur",
        years: "1971-1996",
        role: "Rapper and actor",
        score: 61,
        tag: "Musician",
        image: "images/tupac-shakur.jpg",
        wiki: "Tupac Shakur"
    },
    {
        name: "The Notorious B.I.G.",
        years: "1972-1997",
        role: "Rapper",
        score: 55,
        tag: "Musician",
        image: "",
        wiki: "The Notorious B.I.G."
    },
    {
        name: "Snoop Dogg",
        years: "b. 1971",
        role: "Rapper and entertainer",
        score: 85,
        tag: "Musician",
        image: "images/snoop-dogg.jpg",
        wiki: "Snoop Dogg"
    },
    {
        name: "Billie Eilish",
        years: "b. 2001",
        role: "Singer-songwriter",
        score: 121,
        tag: "Musician",
        image: "images/billie-eilish.jpg",
        wiki: "Billie Eilish"
    },
    {
        name: "Olivia Rodrigo",
        years: "b. 2003",
        role: "Singer-songwriter",
        score: 113,
        tag: "Musician",
        image: "images/olivia-rodrigo.jpg",
        wiki: "Olivia Rodrigo"
    },
    {
        name: "The Weeknd",
        years: "b. 1990",
        role: "Singer and songwriter",
        score: 72,
        tag: "Musician",
        image: "images/the-weeknd.jpg",
        wiki: "The Weeknd"
    },
    {
        name: "Bad Bunny",
        years: "b. 1994",
        role: "Reggaeton artist",
        score: 63,
        tag: "Musician",
        image: "images/bad-bunny.jpg",
        wiki: "Bad Bunny"
    },
    {
        name: "Shakira",
        years: "b. 1977",
        role: "Singer and dancer",
        score: 146,
        tag: "Musician",
        image: "images/shakira.jpg",
        wiki: "Shakira"
    },
    {
        name: "Bruce Springsteen",
        years: "b. 1949",
        role: "Rock singer-songwriter",
        score: 162,
        tag: "Musician",
        image: "images/bruce-springsteen.jpg",
        wiki: "Bruce Springsteen"
    },
    {
        name: "Billy Joel",
        years: "b. 1949",
        role: "Singer-songwriter",
        score: 102,
        tag: "Musician",
        image: "images/billy-joel.jpg",
        wiki: "Billy Joel"
    },
    {
        name: "Elton John",
        years: "b. 1947",
        role: "Singer-songwriter",
        score: 179,
        tag: "Musician",
        image: "images/elton-john.jpg",
        wiki: "Elton John"
    },
    {
        name: "Stevie Wonder",
        years: "b. 1950",
        role: "Singer-songwriter",
        score: 184,
        tag: "Musician",
        image: "images/stevie-wonder.jpg",
        wiki: "Stevie Wonder"
    },
    {
        name: "Ray Charles",
        years: "1930-2004",
        role: "Singer and pianist",
        score: 154,
        tag: "Musician",
        image: "images/ray-charles.jpg",
        wiki: "Ray Charles"
    },
    {
        name: "Amy Winehouse",
        years: "1983-2011",
        role: "Singer-songwriter",
        score: 97,
        tag: "Musician",
        image: "images/amy-winehouse.jpg",
        wiki: "Amy Winehouse"
    },
    {
        name: "Selena Quintanilla",
        years: "1971-1995",
        role: "Singer-songwriter",
        score: 159,
        tag: "Musician",
        image: "images/selena-quintanilla.jpg",
        wiki: "Selena"
    },
    {
        name: "Tina Turner",
        years: "1939-2023",
        role: "Queen of Rock 'n' Roll",
        score: 168,
        tag: "Musician",
        image: "images/tina-turner.png",
        wiki: "Tina Turner"
    },
    {
        name: "Cher",
        years: "b. 1946",
        role: "Singer and actress",
        score: 117,
        tag: "Musician",
        image: "images/cher.jpg",
        wiki: "Cher"
    },
    {
        name: "Katy Perry",
        years: "b. 1984",
        role: "Singer",
        score: 42,
        tag: "Musician",
        image: "images/katy-perry.jpg",
        wiki: "Katy Perry"
    },
    {
        name: "Ed Sheeran",
        years: "b. 1991",
        role: "Singer-songwriter",
        score: 135,
        tag: "Musician",
        image: "images/ed-sheeran.jpg",
        wiki: "Ed Sheeran"
    },
    {
        name: "MrBeast",
        years: "b. 1998",
        role: "YouTuber and philanthropist",
        score: 186,
        tag: "Influencer",
        image: "images/mrbeast.png",
        wiki: "MrBeast"
    },
    {
        name: "PewDiePie",
        years: "b. 1989",
        role: "YouTuber",
        score: 133,
        tag: "Influencer",
        image: "images/pewdiepie.jpg",
        wiki: "PewDiePie"
    },
    {
        name: "Logan Paul",
        years: "b. 1995",
        role: "Influencer and boxer",
        score: 20,
        tag: "Influencer",
        image: "images/logan-paul.jpg",
        wiki: "Logan Paul"
    },
    {
        name: "Jake Paul",
        years: "b. 1997",
        role: "Influencer and boxer",
        score: 19,
        tag: "Influencer",
        image: "images/jake-paul.jpg",
        wiki: "Jake Paul"
    },
    {
        name: "KSI",
        years: "b. 1993",
        role: "Influencer and boxer",
        score: 37,
        tag: "Influencer",
        image: "images/ksi.png",
        wiki: "KSI"
    },
    {
        name: "Khaby Lame",
        years: "b. 2000",
        role: "Comedy creator",
        score: 94,
        tag: "Influencer",
        image: "images/khaby-lame.jpg",
        wiki: "Khaby Lame"
    },
    {
        name: "Charli D'Amelio",
        years: "b. 2004",
        role: "TikTok creator",
        score: 68,
        tag: "Influencer",
        image: "images/charli-d-amelio.jpg",
        wiki: "Charli D'Amelio"
    },
    {
        name: "Addison Rae",
        years: "b. 2000",
        role: "Creator and singer",
        score: 56,
        tag: "Influencer",
        image: "images/addison-rae.jpg",
        wiki: "Addison Rae"
    },
    {
        name: "Emma Chamberlain",
        years: "b. 2001",
        role: "Creator and entrepreneur",
        score: 104,
        tag: "Influencer",
        image: "images/emma-chamberlain.png",
        wiki: "Emma Chamberlain"
    },
    {
        name: "David Dobrik",
        years: "b. 1996",
        role: "YouTuber",
        score: 18,
        tag: "Influencer",
        image: "images/david-dobrik.jpg",
        wiki: "David Dobrik"
    },
    {
        name: "iShowSpeed",
        years: "b. 2005",
        role: "Streamer and YouTuber",
        score: 25,
        tag: "Influencer",
        image: "images/ishowspeed.jpg",
        wiki: "IShowSpeed"
    },
    {
        name: "Markiplier",
        years: "b. 1989",
        role: "Gaming YouTuber",
        score: 126,
        tag: "Influencer",
        image: "images/markiplier.png",
        wiki: "Markiplier"
    },
    {
        name: "Zoella",
        years: "b. 1990",
        role: "Vlogger and businesswoman",
        score: 82,
        tag: "Influencer",
        image: "images/zoella.jpg",
        wiki: "Zoe Sugg"
    },
    {
        name: "Andrew Tate",
        years: "b. 1986",
        role: "Internet personality",
        score: 17,
        tag: "Influencer",
        image: "images/andrew-tate.png",
        wiki: "Andrew Tate"
    },
    {
        name: "Dixie D'Amelio",
        years: "b. 2001",
        role: "TikTok creator",
        score: 29,
        tag: "Influencer",
        image: "images/dixie-d-amelio.jpg",
        wiki: "Dixie D'Amelio"
    },
    {
        name: "Bella Poarch",
        years: "b. 1997",
        role: "TikTok creator",
        score: 51,
        tag: "Influencer",
        image: "images/bella-poarch.jpg",
        wiki: "Bella Poarch"
    },
    {
        name: "Bretman Rock",
        years: "b. 1998",
        role: "Beauty creator",
        score: 86,
        tag: "Influencer",
        image: "images/bretman-rock.jpg",
        wiki: "Bretman Rock"
    },
    {
        name: "Fernanfloo",
        years: "b. 1993",
        role: "Gaming YouTuber",
        score: 91,
        tag: "Influencer",
        image: "images/fernanfloo.jpg",
        wiki: "Fernanfloo"
    },
    {
        name: "El Rubius",
        years: "b. 1990",
        role: "Gaming YouTuber",
        score: 74,
        tag: "Influencer",
        image: "images/el-rubius.jpg",
        wiki: "El Rubius"
    },
    {
        name: "DanTDM",
        years: "b. 1991",
        role: "Gaming YouTuber",
        score: 118,
        tag: "Influencer",
        image: "images/dantdm.jpg",
        wiki: "DanTDM"
    },
    {
        name: "MatPat",
        years: "b. 1986",
        role: "YouTuber and theorist",
        score: 109,
        tag: "Influencer",
        image: "images/matpat.jpg",
        wiki: "MatPat"
    },
    {
        name: "SSSniperWolf",
        years: "b. 1992",
        role: "YouTuber",
        score: 21,
        tag: "Influencer",
        image: "images/sssniperwolf.jpg",
        wiki: "SSSniperWolf"
    },
    {
        name: "Marzia",
        years: "b. 1992",
        role: "Creator and businesswoman",
        score: 100,
        tag: "Influencer",
        image: "images/marzia.jpg",
        wiki: "Marzia Kjellberg"
    },
    {
        name: "Piper Rockelle",
        years: "b. 2007",
        role: "Content creator and model",
        score: 48,
        tag: "Influencer",
        image: "",
        wiki: "Piper Rockelle"
    },
    {
        name: "Loren Gray",
        years: "b. 2002",
        role: "Social media personality",
        score: 64,
        tag: "Influencer",
        image: "images/loren-gray.jpg",
        wiki: "Loren Gray"
    },
    {
        name: "Baby Ariel",
        years: "b. 2000",
        role: "Social media personality",
        score: 57,
        tag: "Influencer",
        image: "images/baby-ariel.jpg",
        wiki: "Baby Ariel"
    },
    {
        name: "Jules LeBlanc",
        years: "b. 2004",
        role: "YouTuber, actress and singer",
        score: 80,
        tag: "Influencer",
        image: "images/jules-leblanc.png",
        wiki: "Jules LeBlanc"
    },
    {
        name: "Nessa Barrett",
        years: "b. 2002",
        role: "Singer and media personality",
        score: 75,
        tag: "Influencer",
        image: "images/nessa-barrett.jpg",
        wiki: "Nessa Barrett"
    },
    {
        name: "Noah Beck",
        years: "b. 2001",
        role: "Influencer",
        score: 34,
        tag: "Influencer",
        image: "images/noah-beck.png",
        wiki: "Noah Beck"
    },
    {
        name: "Ninja",
        years: "b. 1991",
        role: "Streamer and YouTuber",
        score: 83,
        tag: "Streamer",
        image: "images/ninja.jpg",
        wiki: "Ninja (gamer)"
    },
    {
        name: "Shroud",
        years: "b. 1994",
        role: "Streamer and ex-pro gamer",
        score: 77,
        tag: "Streamer",
        image: "images/shroud.jpg",
        wiki: "Shroud (gamer)"
    },
    {
        name: "Pokimane",
        years: "b. 1996",
        role: "Streamer and creator",
        score: 114,
        tag: "Streamer",
        image: "images/pokimane.png",
        wiki: "Pokimane"
    },
    {
        name: "xQc",
        years: "b. 1995",
        role: "Twitch streamer",
        score: 39,
        tag: "Streamer",
        image: "images/xqc.jpg",
        wiki: "XQc"
    },
    {
        name: "Tyler1",
        years: "b. 1995",
        role: "Twitch streamer",
        score: 24,
        tag: "Streamer",
        image: "images/tyler1.png",
        wiki: "Tyler1"
    },
    {
        name: "Summit1g",
        years: "b. 1987",
        role: "Twitch streamer",
        score: 49,
        tag: "Streamer",
        image: "images/summit1g.png",
        wiki: "Summit1g"
    },
    {
        name: "Kai Cenat",
        years: "b. 2001",
        role: "Streamer and entertainer",
        score: 93,
        tag: "Streamer",
        image: "images/kai-cenat.jpg",
        wiki: "Kai Cenat"
    },
    {
        name: "Disguised Toast",
        years: "b. 1991",
        role: "Streamer and YouTuber",
        score: 87,
        tag: "Streamer",
        image: "images/disguised-toast.jpg",
        wiki: "Disguised Toast"
    },
    {
        name: "Sykkuno",
        years: "b. 1991",
        role: "Streamer",
        score: 106,
        tag: "Streamer",
        image: "images/sykkuno.png",
        wiki: "Sykkuno"
    },
    {
        name: "Valkyrae",
        years: "b. 1992",
        role: "Streamer and YouTuber",
        score: 110,
        tag: "Streamer",
        image: "images/valkyrae.png",
        wiki: "Valkyrae"
    },
    {
        name: "TimTheTatman",
        years: "b. 1990",
        role: "Streamer",
        score: 60,
        tag: "Streamer",
        image: "images/timthetatman.jpg",
        wiki: "TimTheTatman"
    },
    {
        name: "NICKMERCS",
        years: "b. 1990",
        role: "Streamer and content creator",
        score: 33,
        tag: "Streamer",
        image: "images/nickmercs.png",
        wiki: "Nickmercs"
    },
    {
        name: "Tfue",
        years: "b. 1998",
        role: "Streamer and esports player",
        score: 23,
        tag: "Streamer",
        image: "images/tfue.png",
        wiki: "Tfue"
    },
    {
        name: "Sodapoppin",
        years: "b. 1994",
        role: "Twitch streamer",
        score: 30,
        tag: "Streamer",
        image: "images/sodapoppin.jpg",
        wiki: "Sodapoppin"
    },
    {
        name: "Hasan Piker",
        years: "b. 1991",
        role: "Political commentator and streamer",
        score: 53,
        tag: "Streamer",
        image: "images/hasan-piker.jpg",
        wiki: "Hasan Piker"
    },
    {
        name: "Dr Disrespect",
        years: "b. 1982",
        role: "Streamer",
        score: 16,
        tag: "Streamer",
        image: "images/dr-disrespect.jpg",
        wiki: "Dr Disrespect"
    },
    {
        name: "Myth",
        years: "b. 1999",
        role: "Streamer and esports player",
        score: 43,
        tag: "Streamer",
        image: "images/myth.jpg",
        wiki: "Myth (gamer)"
    },
    {
        name: "Ludwig",
        years: "b. 1995",
        role: "Streamer and YouTuber",
        score: 99,
        tag: "Streamer",
        image: "images/ludwig.jpg",
        wiki: "Ludwig Ahgren"
    },
    {
        name: "Bella Thorne",
        years: "b. 1997",
        role: "Actress, singer and creator",
        score: 44,
        tag: "OnlyFans",
        image: "images/bella-thorne.jpg",
        wiki: "Bella Thorne"
    },
    {
        name: "Amber Rose",
        years: "b. 1983",
        role: "Model and media personality",
        score: 35,
        tag: "OnlyFans",
        image: "images/amber-rose.jpg",
        wiki: "Amber Rose"
    },
    {
        name: "Blac Chyna",
        years: "b. 1988",
        role: "Model and media personality",
        score: 40,
        tag: "OnlyFans",
        image: "images/blac-chyna.jpg",
        wiki: "Blac Chyna"
    },
    {
        name: "Mia Khalifa",
        years: "b. 1993",
        role: "Media personality",
        score: 59,
        tag: "OnlyFans",
        image: "images/mia-khalifa.png",
        wiki: "Mia Khalifa"
    },
    {
        name: "Iggy Azalea",
        years: "b. 1990",
        role: "Rapper and creator",
        score: 58,
        tag: "OnlyFans",
        image: "images/iggy-azalea.jpg",
        wiki: "Iggy Azalea"
    },
    {
        name: "Denise Richards",
        years: "b. 1971",
        role: "Actress and creator",
        score: 69,
        tag: "OnlyFans",
        image: "images/denise-richards.jpg",
        wiki: "Denise Richards"
    },
    {
        name: "Amouranth",
        years: "b. 1993",
        role: "Streamer and creator",
        score: 62,
        tag: "OnlyFans",
        image: "images/amouranth.jpg",
        wiki: "Amouranth"
    },
    {
        name: "Bhad Bhabie",
        years: "b. 2003",
        role: "Rapper and internet personality",
        score: 28,
        tag: "OnlyFans",
        image: "images/bhad-bhabie.jpg",
        wiki: "Bhad Bhabie"
    },
    {
        name: "Malu Trevejo",
        years: "b. 2002",
        role: "Social media personality",
        score: 54,
        tag: "OnlyFans",
        image: "images/malu-trevejo.jpg",
        wiki: "Malu Trevejo"
    },
    {
        name: "Tana Mongeau",
        years: "b. 1998",
        role: "Internet personality",
        score: 71,
        tag: "OnlyFans",
        image: "images/tana-mongeau.png",
        wiki: "Tana Mongeau"
    },
    {
        name: "Sophie Rain",
        years: "b. 2004",
        role: "Internet personality",
        score: 78,
        tag: "OnlyFans",
        image: "",
        wiki: "Sophie Rain"
    },
    {
        name: "Bonnie Blue",
        years: "b. 1999",
        role: "Adult film actress",
        score: 31,
        tag: "OnlyFans",
        image: "images/bonnie-blue.jpg",
        wiki: "Bonnie Blue"
    },
    {
        name: "Riley Reid",
        years: "b. 1991",
        role: "Adult film actress",
        score: 67,
        tag: "OnlyFans",
        image: "images/riley-reid.jpg",
        wiki: "Riley Reid"
    },
    {
        name: "Mia Malkova",
        years: "b. 1992",
        role: "Adult film actress and media personality",
        score: 66,
        tag: "OnlyFans",
        image: "images/mia-malkova.jpg",
        wiki: "Mia Malkova"
    },
    {
        name: "Lily Phillips",
        years: "b. 2001",
        role: "Adult film actress",
        score: 47,
        tag: "OnlyFans",
        image: "images/lily-phillips.png",
        wiki: "Lily Phillips"
    },
    {
        name: "Angela White",
        years: "b. 1985",
        role: "Adult film actress and director",
        score: 73,
        tag: "OnlyFans",
        image: "images/angela-white.jpg",
        wiki: "Angela White"
    },
    {
        name: "Abella Danger",
        years: "b. 1995",
        role: "Adult film actress and director",
        score: 50,
        tag: "OnlyFans",
        image: "images/abella-danger.jpg",
        wiki: "Abella Danger"
    }
];

// Allow tools/build.mjs style tooling to read this file too.
if (typeof module !== "undefined") {
    module.exports = ROSTER;
}
