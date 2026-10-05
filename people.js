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
        score: 96,
        image: "images/martin-luther-king-jr.jpg",
        wiki: "Martin Luther King Jr."
    },
    {
        name: "Mahatma Gandhi",
        years: "1869-1948",
        role: "Indian independence leader",
        score: 86,
        image: "images/mahatma-gandhi.jpg",
        wiki: "Mahatma Gandhi"
    },
    {
        name: "Nelson Mandela",
        years: "1918-2013",
        role: "Anti-apartheid leader",
        score: 93,
        image: "images/nelson-mandela.jpg",
        wiki: "Nelson Mandela"
    },
    {
        name: "Malcolm X",
        years: "1925-1965",
        role: "Civil rights activist",
        score: 59,
        image: "images/malcolm-x.jpg",
        wiki: "Malcolm X"
    },
    {
        name: "Rosa Parks",
        years: "1913-2005",
        role: "Civil rights icon",
        score: 88,
        image: "images/rosa-parks.jpg",
        wiki: "Rosa Parks"
    },
    {
        name: "Harriet Tubman",
        years: "c. 1822-1913",
        role: "Underground Railroad conductor",
        score: 97,
        image: "images/harriet-tubman.jpg",
        wiki: "Harriet Tubman"
    },
    {
        name: "Susan B. Anthony",
        years: "1820-1906",
        role: "Women's suffrage leader",
        score: 78,
        image: "images/susan-b-anthony.jpg",
        wiki: "Susan B. Anthony"
    },
    {
        name: "Emmeline Pankhurst",
        years: "1858-1928",
        role: "Suffragette leader",
        score: 71,
        image: "images/emmeline-pankhurst.jpg",
        wiki: "Emmeline Pankhurst"
    },
    {
        name: "Desmond Tutu",
        years: "1931-2021",
        role: "Anti-apartheid archbishop",
        score: 81,
        image: "images/desmond-tutu.jpg",
        wiki: "Desmond Tutu"
    },
    {
        name: "B. R. Ambedkar",
        years: "1891-1956",
        role: "Constitutional reformer",
        score: 90,
        image: "images/b-r-ambedkar.jpg",
        wiki: "B. R. Ambedkar"
    },
    {
        name: "The Dalai Lama",
        years: "b. 1935",
        role: "Spiritual leader in exile",
        score: 67,
        image: "images/the-dalai-lama.jpg",
        wiki: "14th Dalai Lama"
    },
    {
        name: "Mother Teresa",
        years: "1910-1997",
        role: "Missionary of the poor",
        score: 36,
        image: "images/mother-teresa.jpg",
        wiki: "Mother Teresa"
    },
    {
        name: "Marcus Garvey",
        years: "1887-1940",
        role: "Pan-Africanist leader",
        score: 34,
        image: "images/marcus-garvey.jpg",
        wiki: "Marcus Garvey"
    },
    {
        name: "Abraham Lincoln",
        years: "1809-1865",
        role: "Ended slavery in the US",
        score: 74,
        image: "images/abraham-lincoln.jpg",
        wiki: "Abraham Lincoln"
    },
    {
        name: "Winston Churchill",
        years: "1874-1965",
        role: "Wartime British prime minister",
        score: 39,
        image: "images/winston-churchill.jpg",
        wiki: "Winston Churchill"
    },
    {
        name: "Franklin D. Roosevelt",
        years: "1882-1945",
        role: "US president, New Deal and WWII",
        score: 57,
        image: "images/franklin-d-roosevelt.jpg",
        wiki: "Franklin D. Roosevelt"
    },
    {
        name: "John F. Kennedy",
        years: "1917-1963",
        role: "US president",
        score: 44,
        image: "images/john-f-kennedy.jpg",
        wiki: "John F. Kennedy"
    },
    {
        name: "Ronald Reagan",
        years: "1911-2004",
        role: "US president",
        score: 31,
        image: "images/ronald-reagan.jpg",
        wiki: "Ronald Reagan"
    },
    {
        name: "Margaret Thatcher",
        years: "1925-2013",
        role: "British prime minister",
        score: 26,
        image: "images/margaret-thatcher.jpg",
        wiki: "Margaret Thatcher"
    },
    {
        name: "George Washington",
        years: "1732-1799",
        role: "First US president",
        score: 53,
        image: "images/george-washington.jpg",
        wiki: "George Washington"
    },
    {
        name: "Thomas Jefferson",
        years: "1743-1826",
        role: "US founding father",
        score: 35,
        image: "images/thomas-jefferson.jpg",
        wiki: "Thomas Jefferson"
    },
    {
        name: "Simon Bolivar",
        years: "1783-1830",
        role: "Liberator of South America",
        score: 42,
        image: "images/simon-bolivar.png",
        wiki: "Simón Bolívar"
    },
    {
        name: "Jawaharlal Nehru",
        years: "1889-1964",
        role: "First prime minister of India",
        score: 48,
        image: "images/jawaharlal-nehru.jpg",
        wiki: "Jawaharlal Nehru"
    },
    {
        name: "Haile Selassie",
        years: "1892-1975",
        role: "Emperor of Ethiopia",
        score: 25,
        image: "images/haile-selassie.jpg",
        wiki: "Haile Selassie"
    },
    {
        name: "Mustafa Kemal Ataturk",
        years: "1881-1938",
        role: "Founder of modern Turkey",
        score: 45,
        image: "images/mustafa-kemal-ataturk.jpg",
        wiki: "Mustafa Kemal Atatürk"
    },
    {
        name: "Cleopatra",
        years: "69-30 BC",
        role: "Queen of Egypt",
        score: 24,
        image: "images/cleopatra.jpg",
        wiki: "Cleopatra"
    },
    {
        name: "Elizabeth I",
        years: "1533-1603",
        role: "Queen of England",
        score: 33,
        image: "images/elizabeth-i.jpg",
        wiki: "Elizabeth I"
    },
    {
        name: "Queen Victoria",
        years: "1819-1901",
        role: "Queen of the United Kingdom",
        score: 28,
        image: "images/queen-victoria.jpg",
        wiki: "Queen Victoria"
    },
    {
        name: "Adolf Hitler",
        years: "1889-1945",
        role: "Nazi dictator",
        score: 2,
        image: "images/adolf-hitler.jpg",
        wiki: "Adolf Hitler"
    },
    {
        name: "Joseph Stalin",
        years: "1878-1953",
        role: "Soviet dictator",
        score: 8,
        image: "images/joseph-stalin.jpg",
        wiki: "Joseph Stalin"
    },
    {
        name: "Mao Zedong",
        years: "1893-1976",
        role: "Communist China's chairman",
        score: 9,
        image: "images/mao-zedong.jpg",
        wiki: "Mao Zedong"
    },
    {
        name: "Vladimir Lenin",
        years: "1870-1924",
        role: "Bolshevik revolutionary",
        score: 13,
        image: "images/vladimir-lenin.jpg",
        wiki: "Vladimir Lenin"
    },
    {
        name: "Pol Pot",
        years: "1925-1998",
        role: "Khmer Rouge leader",
        score: 3,
        image: "images/pol-pot.png",
        wiki: "Pol Pot"
    },
    {
        name: "Idi Amin",
        years: "1925-2003",
        role: "Ugandan dictator",
        score: 5,
        image: "images/idi-amin.jpg",
        wiki: "Idi Amin"
    },
    {
        name: "Leopold II",
        years: "1835-1909",
        role: "King of Belgium",
        score: 4,
        image: "images/leopold-ii.jpg",
        wiki: "Leopold II of Belgium"
    },
    {
        name: "Saddam Hussein",
        years: "1937-2006",
        role: "Iraqi dictator",
        score: 6,
        image: "images/saddam-hussein.jpg",
        wiki: "Saddam Hussein"
    },
    {
        name: "Caligula",
        years: "12-41",
        role: "Roman emperor",
        score: 10,
        image: "images/caligula.jpg",
        wiki: "Caligula"
    },
    {
        name: "Nero",
        years: "37-68",
        role: "Roman emperor",
        score: 11,
        image: "images/nero.jpg",
        wiki: "Nero"
    },
    {
        name: "Benedict Arnold",
        years: "1741-1801",
        role: "American traitor",
        score: 14,
        image: "images/benedict-arnold.jpg",
        wiki: "Benedict Arnold"
    },
    {
        name: "Julius Caesar",
        years: "100-44 BC",
        role: "Roman general and dictator",
        score: 19,
        image: "images/julius-caesar.jpg",
        wiki: "Julius Caesar"
    },
    {
        name: "Alexander the Great",
        years: "356-323 BC",
        role: "Macedonian king",
        score: 20,
        image: "images/alexander-the-great.jpg",
        wiki: "Alexander the Great"
    },
    {
        name: "Genghis Khan",
        years: "c. 1162-1227",
        role: "Mongol emperor",
        score: 16,
        image: "images/genghis-khan.jpg",
        wiki: "Genghis Khan"
    },
    {
        name: "Saladin",
        years: "1137-1193",
        role: "Sultan of Egypt and Syria",
        score: 47,
        image: "images/saladin.jpg",
        wiki: "Saladin"
    },
    {
        name: "Charlemagne",
        years: "742-814",
        role: "Holy Roman Emperor",
        score: 21,
        image: "images/charlemagne.jpg",
        wiki: "Charlemagne"
    },
    {
        name: "Catherine the Great",
        years: "1729-1796",
        role: "Empress of Russia",
        score: 23,
        image: "images/catherine-the-great.jpg",
        wiki: "Catherine the Great"
    },
    {
        name: "Peter the Great",
        years: "1672-1725",
        role: "Tsar of Russia",
        score: 17,
        image: "images/peter-the-great.jpg",
        wiki: "Peter the Great"
    },
    {
        name: "Henry VIII",
        years: "1491-1547",
        role: "King of England",
        score: 15,
        image: "images/henry-viii.jpg",
        wiki: "Henry VIII of England"
    },
    {
        name: "Napoleon Bonaparte",
        years: "1769-1821",
        role: "Emperor of the French",
        score: 22,
        image: "images/napoleon-bonaparte.jpg",
        wiki: "Napoleon"
    },
    {
        name: "Mansa Musa",
        years: "c. 1280-1337",
        role: "Emperor of Mali",
        score: 63,
        image: "images/mansa-musa.jpg",
        wiki: "Mansa Musa"
    },
    {
        name: "Akbar",
        years: "1542-1605",
        role: "Mughal emperor",
        score: 55,
        image: "images/akbar.jpg",
        wiki: "Akbar"
    },
    {
        name: "Ashoka",
        years: "304-232 BC",
        role: "Mauryan emperor",
        score: 68,
        image: "images/ashoka.jpg",
        wiki: "Ashoka"
    },
    {
        name: "Confucius",
        years: "551-479 BC",
        role: "Chinese philosopher",
        score: 65,
        image: "images/confucius.jpg",
        wiki: "Confucius"
    },
    {
        name: "Socrates",
        years: "470-399 BC",
        role: "Greek philosopher",
        score: 73,
        image: "images/socrates.jpg",
        wiki: "Socrates"
    },
    {
        name: "Plato",
        years: "428-348 BC",
        role: "Greek philosopher",
        score: 52,
        image: "images/plato.png",
        wiki: "Plato"
    },
    {
        name: "Aristotle",
        years: "384-322 BC",
        role: "Greek philosopher",
        score: 37,
        image: "images/aristotle.jpg",
        wiki: "Aristotle"
    },
    {
        name: "Sun Tzu",
        years: "c. 544-496 BC",
        role: "Strategist and philosopher",
        score: 32,
        image: "images/sun-tzu.jpg",
        wiki: "Sun Tzu"
    },
    {
        name: "Albert Einstein",
        years: "1879-1955",
        role: "Theoretical physicist",
        score: 80,
        image: "images/albert-einstein.jpg",
        wiki: "Albert Einstein"
    },
    {
        name: "Isaac Newton",
        years: "1643-1727",
        role: "Physicist and mathematician",
        score: 43,
        image: "images/isaac-newton.jpg",
        wiki: "Isaac Newton"
    },
    {
        name: "Marie Curie",
        years: "1867-1934",
        role: "Physicist and chemist",
        score: 92,
        image: "images/marie-curie.jpg",
        wiki: "Marie Curie"
    },
    {
        name: "Nikola Tesla",
        years: "1856-1943",
        role: "Inventor and engineer",
        score: 62,
        image: "images/nikola-tesla.jpeg",
        wiki: "Nikola Tesla"
    },
    {
        name: "Thomas Edison",
        years: "1847-1931",
        role: "Inventor",
        score: 30,
        image: "images/thomas-edison.jpg",
        wiki: "Thomas Edison"
    },
    {
        name: "Galileo Galilei",
        years: "1564-1642",
        role: "Astronomer and physicist",
        score: 75,
        image: "images/galileo-galilei.jpg",
        wiki: "Galileo Galilei"
    },
    {
        name: "Charles Darwin",
        years: "1809-1882",
        role: "Naturalist",
        score: 84,
        image: "images/charles-darwin.jpg",
        wiki: "Charles Darwin"
    },
    {
        name: "Alan Turing",
        years: "1912-1954",
        role: "Mathematician and codebreaker",
        score: 89,
        image: "images/alan-turing.jpg",
        wiki: "Alan Turing"
    },
    {
        name: "Rosalind Franklin",
        years: "1920-1958",
        role: "Chemist and crystallographer",
        score: 77,
        image: "images/rosalind-franklin.jpg",
        wiki: "Rosalind Franklin"
    },
    {
        name: "Stephen Hawking",
        years: "1942-2018",
        role: "Theoretical physicist",
        score: 58,
        image: "images/stephen-hawking.jpg",
        wiki: "Stephen Hawking"
    },
    {
        name: "Jonas Salk",
        years: "1914-1995",
        role: "Developed the polio vaccine",
        score: 98,
        image: "images/jonas-salk.jpg",
        wiki: "Jonas Salk"
    },
    {
        name: "Louis Pasteur",
        years: "1822-1895",
        role: "Chemist and microbiologist",
        score: 87,
        image: "images/louis-pasteur.jpg",
        wiki: "Louis Pasteur"
    },
    {
        name: "Emmy Noether",
        years: "1882-1935",
        role: "Mathematician",
        score: 69,
        image: "images/emmy-noether.jpg",
        wiki: "Emmy Noether"
    },
    {
        name: "William Shakespeare",
        years: "1564-1616",
        role: "Playwright and poet",
        score: 56,
        image: "images/william-shakespeare.jpg",
        wiki: "William Shakespeare"
    },
    {
        name: "Leonardo da Vinci",
        years: "1452-1519",
        role: "Artist and inventor",
        score: 82,
        image: "images/leonardo-da-vinci.png",
        wiki: "Leonardo da Vinci"
    },
    {
        name: "Michelangelo",
        years: "1475-1564",
        role: "Artist and sculptor",
        score: 49,
        image: "images/michelangelo.jpg",
        wiki: "Michelangelo"
    },
    {
        name: "Vincent van Gogh",
        years: "1853-1890",
        role: "Painter",
        score: 64,
        image: "images/vincent-van-gogh.jpg",
        wiki: "Vincent van Gogh"
    },
    {
        name: "Pablo Picasso",
        years: "1881-1973",
        role: "Painter",
        score: 27,
        image: "images/pablo-picasso.jpg",
        wiki: "Pablo Picasso"
    },
    {
        name: "Ludwig van Beethoven",
        years: "1770-1827",
        role: "Composer",
        score: 66,
        image: "images/ludwig-van-beethoven.jpg",
        wiki: "Ludwig van Beethoven"
    },
    {
        name: "Wolfgang Amadeus Mozart",
        years: "1756-1791",
        role: "Composer",
        score: 79,
        image: "images/wolfgang-amadeus-mozart.jpg",
        wiki: "Wolfgang Amadeus Mozart"
    },
    {
        name: "Johann Sebastian Bach",
        years: "1685-1750",
        role: "Composer",
        score: 54,
        image: "images/johann-sebastian-bach.jpg",
        wiki: "Johann Sebastian Bach"
    },
    {
        name: "Jane Austen",
        years: "1775-1817",
        role: "Novelist",
        score: 46,
        image: "images/jane-austen.jpg",
        wiki: "Jane Austen"
    },
    {
        name: "Mark Twain",
        years: "1835-1910",
        role: "Author and humorist",
        score: 41,
        image: "images/mark-twain.jpg",
        wiki: "Mark Twain"
    },
    {
        name: "Fyodor Dostoevsky",
        years: "1821-1881",
        role: "Novelist",
        score: 38,
        image: "images/fyodor-dostoevsky.jpg",
        wiki: "Fyodor Dostoevsky"
    },
    {
        name: "Frida Kahlo",
        years: "1907-1954",
        role: "Painter",
        score: 51,
        image: "images/frida-kahlo.jpg",
        wiki: "Frida Kahlo"
    },
    {
        name: "Florence Nightingale",
        years: "1820-1910",
        role: "Founder of modern nursing",
        score: 95,
        image: "images/florence-nightingale.jpg",
        wiki: "Florence Nightingale"
    },
    {
        name: "Anne Frank",
        years: "1929-1945",
        role: "Diary writer, Holocaust victim",
        score: 99,
        image: "images/anne-frank.jpg",
        wiki: "Anne Frank"
    },
    {
        name: "Oskar Schindler",
        years: "1908-1974",
        role: "Saved around 1,200 Jews",
        score: 91,
        image: "images/oskar-schindler.jpg",
        wiki: "Oskar Schindler"
    },
    {
        name: "Christopher Columbus",
        years: "1451-1506",
        role: "Explorer",
        score: 12,
        image: "images/christopher-columbus.jpg",
        wiki: "Christopher Columbus"
    },
    {
        name: "Amelia Earhart",
        years: "1897-1937",
        role: "Aviation pioneer",
        score: 70,
        image: "images/amelia-earhart.jpg",
        wiki: "Amelia Earhart"
    },
    {
        name: "Sacagawea",
        years: "c. 1788-1812",
        role: "Interpreter and guide",
        score: 76,
        image: "images/sacagawea.jpg",
        wiki: "Sacagawea"
    },
    {
        name: "Muhammad Ali",
        years: "1942-2016",
        role: "Boxer and activist",
        score: 60,
        image: "images/muhammad-ali.jpg",
        wiki: "Muhammad Ali"
    },
    {
        name: "Jesse Owens",
        years: "1913-1980",
        role: "Olympic sprinter",
        score: 85,
        image: "images/jesse-owens.jpg",
        wiki: "Jesse Owens"
    }
];

// Allow tools/build.mjs style tooling to read this file too.
if (typeof module !== "undefined") {
    module.exports = ROSTER;
}
