const albums = [
    {
        "album_id": "6ZB8qaR9JNuS0Q0bG1nbcH",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "151",
        "2020_rank": "500",
        "2023_rank": "500",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Funeral",
        "artist_name": "Arcade Fire",
        "record_label": "Merge",
        "release_year": "2004"
    },
    {
        "album_id": "3ZJJdnvxztzpOvwvzUzUxC",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "499",
        "2023_rank": "499",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Ask Rufus",
        "artist_name": "Rufus, Chaka Khan",
        "record_label": "ABC",
        "release_year": "1977"
    },
    {
        "album_id": "46kw5FsFdJhNRL8wfHM9Bp",
        "2003_rank": "446",
        "2005_rank": "438",
        "2012_rank": "441",
        "2020_rank": "498",
        "2023_rank": "498",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Suicide",
        "artist_name": "Suicide",
        "record_label": "Red Star",
        "release_year": "1977"
    },
    {
        "album_id": "1DIr8JMRBnm1cZMYIGKb8t",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "388",
        "2020_rank": "497",
        "2023_rank": "497",
        "album_type": "Compilation",
        "album_genre": "",
        "album_title": "The Indestructible Beat of Soweto",
        "artist_name": "Various Artists",
        "record_label": "Earthworks",
        "release_year": "1985"
    },
    {
        "album_id": "5hcKSTqKOLuzJgYIQileAe",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "496",
        "2023_rank": "496",
        "album_type": "Studio",
        "album_genre": "Latin",
        "album_title": "Dónde Están los Ladrones",
        "artist_name": "Shakira",
        "record_label": "Columbia",
        "release_year": "1998"
    },
    {
        "album_id": "1IWhZEOwEoXbOB4a40XaR3",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "495",
        "2023_rank": "495",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "II",
        "artist_name": "Boyz II Men",
        "record_label": "Motown",
        "release_year": "1991"
    },
    {
        "album_id": "0CoNLgOwcZGBUSwd9fAZuy",
        "2003_rank": "427",
        "2005_rank": "419",
        "2012_rank": "422",
        "2020_rank": "494",
        "2023_rank": "494",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Presenting the Fabulous Ronettes",
        "artist_name": "The Ronettes",
        "record_label": "Philles",
        "release_year": "1964"
    },
    {
        "album_id": "1iVf41qWHZsAk9DwY43WnV",
        "2003_rank": "462",
        "2005_rank": "454",
        "2012_rank": "456",
        "2020_rank": "493",
        "2023_rank": "493",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Here, My Dear",
        "artist_name": "Marvin Gaye",
        "record_label": "Tamla/Motown",
        "release_year": "1978"
    },
    {
        "album_id": "6wxpS5o0ty5CLqyH5fIRln",
        "2003_rank": "229",
        "2005_rank": "225",
        "2012_rank": "230",
        "2020_rank": "492",
        "2023_rank": "492",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Nick of Time",
        "artist_name": "Bonnie Raitt",
        "record_label": "Capitol",
        "release_year": "1989"
    },
    {
        "album_id": "5r36AJ6VOJtp00oxSkBZ5h",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "Not Ranked",
        "2023_rank": "491",
        "album_type": "Unknown Type",
        "album_genre": "Unknown Genre",
        "album_title": "Harry's House",
        "artist_name": "Harry Styles",
        "record_label": "Columbia",
        "release_year": "2022"
    },
    {
        "album_id": "7upKDUGJUjsvfIe6vuVB0b",
        "2003_rank": "164",
        "2005_rank": "163",
        "2012_rank": "Not Ranked",
        "2020_rank": "490",
        "2023_rank": "490",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Heart Like a Wheel",
        "artist_name": "Linda Ronstadt",
        "record_label": "Capitol",
        "release_year": "1975"
    },
    {
        "album_id": "NOS123",
        "2003_rank": "64",
        "2005_rank": "64",
        "2012_rank": "65",
        "2020_rank": "489",
        "2023_rank": "489",
        "album_type": "Compilation",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Back to Mono (1958-1969)",
        "artist_name": "Phil Spector and Various Artists",
        "record_label": "ABKCO",
        "release_year": "1991"
    },
    {
        "album_id": "0Z1Y5L90NjqUD351YUQWdA",
        "2003_rank": "185",
        "2005_rank": "183",
        "2012_rank": "185",
        "2020_rank": "488",
        "2023_rank": "488",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "The Stooges",
        "artist_name": "The Stooges",
        "record_label": "Elektra",
        "release_year": "1969"
    },
    {
        "album_id": "34aFnrFRBlErcbU6moRZR3",
        "2003_rank": "340",
        "2005_rank": "336",
        "2012_rank": "340",
        "2020_rank": "487",
        "2023_rank": "487",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Damaged",
        "artist_name": "Black Flag",
        "record_label": "SST",
        "release_year": "1981"
    },
    {
        "album_id": "1Xsprdt1q9rOzTic7b9zYM",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "486",
        "2023_rank": "486",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Continuum",
        "artist_name": "John Mayer",
        "record_label": "Columbia",
        "release_year": "2006"
    },
    {
        "album_id": "1K1Qdd60pW48wEgWGQLeRt",
        "2003_rank": "479",
        "2005_rank": "471",
        "2012_rank": "471",
        "2020_rank": "485",
        "2023_rank": "485",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "I Want to See the Bright Lights Tonight",
        "artist_name": "Richard and Linda Thompson",
        "record_label": "Island",
        "release_year": "1974"
    },
    {
        "album_id": "2KkMVsxymoNR7hRmBcMttd",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "484",
        "2023_rank": "484",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Born This Way",
        "artist_name": "Lady Gaga",
        "record_label": "Interscope",
        "release_year": "2011"
    },
    {
        "album_id": "3nwUyORzdqWdwDidxetjD4",
        "2003_rank": "38",
        "2005_rank": "38",
        "2012_rank": "38",
        "2020_rank": "483",
        "2023_rank": "483",
        "album_type": "Compilation",
        "album_genre": "Blues/Blues Rock",
        "album_title": "The Anthology",
        "artist_name": "Muddy Waters",
        "record_label": "MCA",
        "release_year": "2001"
    },
    {
        "album_id": "48kU5gP41TqZEw32Cwhsna",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "482",
        "2023_rank": "482",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Bizarre Ride II the Pharcyde",
        "artist_name": "The Pharcyde",
        "record_label": "Delicious Vinyl",
        "release_year": "1992"
    },
    {
        "album_id": "3e9VtbXnl6tqrFKrnNyxaI",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "481",
        "2023_rank": "481",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "If You’re Feeling Sinister",
        "artist_name": "Belle and Sebastian",
        "record_label": "Jeepster",
        "release_year": "1996"
    },
    {
        "album_id": "563h536tB6n8Dn62jr4RZG",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "480",
        "2023_rank": "480",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "The Weight of These Wings",
        "artist_name": "Miranda Lambert",
        "record_label": "ERCA Nashville",
        "release_year": "2016"
    },
    {
        "album_id": "6iv9WTw1nhNxSsgKaxMp4E",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "479",
        "2023_rank": "479",
        "album_type": "Studio",
        "album_genre": "Latin",
        "album_title": "Amor Prohibido",
        "artist_name": "Selena",
        "record_label": "EMA Latin",
        "release_year": "1994"
    },
    {
        "album_id": "3n0mKh1yuR5QjX6Vm0GKj2",
        "2003_rank": "288",
        "2005_rank": "285",
        "2012_rank": "289",
        "2020_rank": "478",
        "2023_rank": "478",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Something Else by the Kinks",
        "artist_name": "The Kinks",
        "record_label": "Pye",
        "release_year": "1968"
    },
    {
        "album_id": "76MT4lqzC1oSvSYnHHjMam",
        "2003_rank": "153",
        "2005_rank": "153",
        "2012_rank": "154",
        "2020_rank": "477",
        "2023_rank": "477",
        "album_type": "Compilation",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Moanin' in the Moonlight",
        "artist_name": "Howlin’ Wolf",
        "record_label": "Chess",
        "release_year": "1959"
    },
    {
        "album_id": "7KOmuu3cbJQEQYGt3XmLmY",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "476",
        "2023_rank": "476",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Kimono My House",
        "artist_name": "Sparks",
        "record_label": "Island",
        "release_year": "1974"
    },
    {
        "album_id": "3w7TTi80vZApF0rQE5DMYb",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "475",
        "2023_rank": "475",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Sheryl Crow",
        "artist_name": "Sheryl Crow",
        "record_label": "A&M",
        "release_year": "1996"
    },
    {
        "album_id": "1BumwwIEw1EC3xAHyf1ive",
        "2003_rank": "438",
        "2005_rank": "430",
        "2012_rank": "434",
        "2020_rank": "474",
        "2023_rank": "474",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "#1 Record",
        "artist_name": "Big Star",
        "record_label": "Ardent",
        "release_year": "1972"
    },
    {
        "album_id": "4pLuE50wL9T26lSv42X0J2",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "473",
        "2023_rank": "473",
        "album_type": "Studio",
        "album_genre": "Latin",
        "album_title": "Barrio Fino",
        "artist_name": "Daddy Yankee",
        "record_label": "V.I. Music",
        "release_year": "2004"
    },
    {
        "album_id": "6OgQ8QxV9rrdtmRmzGvwiT",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "472",
        "2023_rank": "472",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Ctrl",
        "artist_name": "SZA",
        "record_label": "RCA",
        "release_year": "2017"
    },
    {
        "album_id": "6lPb7Eoon6QPbscWbMsk6a",
        "2003_rank": "146",
        "2005_rank": "146",
        "2012_rank": "146",
        "2020_rank": "471",
        "2023_rank": "471",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Surrealistic Pillow",
        "artist_name": "Jefferson Airplane",
        "record_label": "RCA",
        "release_year": "1967"
    },
    {
        "album_id": "6wpqS71CJr3I0dLguYiZdJ",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "470",
        "2023_rank": "470",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "400 Degreez",
        "artist_name": "Juvenile",
        "record_label": "Cash Money",
        "release_year": "1998"
    },
    {
        "album_id": "3xoAUqjKs7Ps7wR26VAMbq",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "469",
        "2023_rank": "469",
        "album_type": "Studio",
        "album_genre": "Latin",
        "album_title": "Clandestino",
        "artist_name": "Manu Chao",
        "record_label": "Virgin",
        "release_year": "1998"
    },
    {
        "album_id": "1Jv2AqzhgsduUik2p4k3cS",
        "2003_rank": "269",
        "2005_rank": "266",
        "2012_rank": "270",
        "2020_rank": "468",
        "2023_rank": "468",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Some Girls",
        "artist_name": "The Rolling Stones",
        "record_label": "Rolling Stones",
        "release_year": "1978"
    },
    {
        "album_id": "1cXFSOdjxmS13cOTtnNQAo",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "467",
        "2023_rank": "467",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "BLACKsummers’night",
        "artist_name": "Maxwell",
        "record_label": "Columbia",
        "release_year": "2009"
    },
    {
        "album_id": "0ecABo0muTkic5Pu7b5u13",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "Not Ranked",
        "2023_rank": "466",
        "album_type": "Unknown Type",
        "album_genre": "Unknown Genre",
        "album_title": "Red",
        "artist_name": "Black Uhuru",
        "record_label": "Mango/Island",
        "release_year": "1981"
    },
    {
        "album_id": "6Y5SoiYENbNuTBc6mTUKG9",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "465",
        "2023_rank": "465",
        "album_type": "Compilation",
        "album_genre": "Afrobeat",
        "album_title": "The Best of the Classic Years",
        "artist_name": "King Sunny Adé",
        "record_label": "Shanachie",
        "release_year": "2003"
    },
    {
        "album_id": "27eI33obJuyKebMTxAJJam",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "464",
        "2023_rank": "464",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "3 + 3",
        "artist_name": "The Isley Brothers",
        "record_label": "T-Neck",
        "release_year": "1973"
    },
    {
        "album_id": "533zqKatpy90jse2K5IaiQ",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "463",
        "2023_rank": "463",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Eli & the 13th Confession",
        "artist_name": "Laura Nyro",
        "record_label": "Columbia",
        "release_year": "1968"
    },
    {
        "album_id": "6VWKy5o2OcdeWa7yolazjU",
        "2003_rank": "192",
        "2005_rank": "190",
        "2012_rank": "192",
        "2020_rank": "462",
        "2023_rank": "462",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Gilded Palace of Sin",
        "artist_name": "The Flying Burrito Brothers",
        "record_label": "A&M",
        "release_year": "1969"
    },
    {
        "album_id": "7EJ0OT5ZqybXxcYRa6mccM",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "461",
        "2023_rank": "461",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "For Emma, Forever Ago",
        "artist_name": "Bon Iver",
        "record_label": "Jagjaguwar",
        "release_year": "2008"
    },
    {
        "album_id": "2B87zXm9bOWvAJdkJBTpzF",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "460",
        "2023_rank": "460",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Melodrama",
        "artist_name": "Lorde",
        "record_label": "Universal",
        "release_year": "2017"
    },
    {
        "album_id": "2ydhEMN7Cwl2Zjta7yqIgE",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "459",
        "2023_rank": "459",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Man on the Moon: The End of the Day",
        "artist_name": "Kid Cudi",
        "record_label": "Dream On",
        "release_year": "2009"
    },
    {
        "album_id": "1bg476ZQn7hmcXaU05SHV4",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "458",
        "2023_rank": "458",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Southeastern",
        "artist_name": "Jason Isbell",
        "record_label": "Southeastern",
        "release_year": "2013"
    },
    {
        "album_id": "0fV9DAddjwNZcmCP1Q8b01",
        "2003_rank": "406",
        "2005_rank": "402",
        "2012_rank": "408",
        "2020_rank": "457",
        "2023_rank": "457",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "I Do Not Want What I Haven’t Got",
        "artist_name": "Sinéad O’Connor",
        "record_label": "Ensign/Chrysalis",
        "release_year": "1990"
    },
    {
        "album_id": "6W0V8B0fJItvOwC8v114rZ",
        "2003_rank": "52",
        "2005_rank": "52",
        "2012_rank": "52",
        "2020_rank": "456",
        "2023_rank": "456",
        "album_type": "Greatest Hits",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Greatest Hits",
        "artist_name": "Al Green",
        "record_label": "Hi/EMI",
        "release_year": "1975"
    },
    {
        "album_id": "1cbtDEwxCjMhglb49OgNBR",
        "2003_rank": "214",
        "2005_rank": "212",
        "2012_rank": "216",
        "2020_rank": "455",
        "2023_rank": "455",
        "album_type": "Studio",
        "album_genre": "Rock n' Roll/Rhythm & Blues",
        "album_title": "Bo Diddley/Go Bo Diddley",
        "artist_name": "Bo Diddley",
        "record_label": "Chess",
        "release_year": "1958"
    },
    {
        "album_id": "3Qa2CdymyGvXkqoqIZykmT",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "454",
        "2023_rank": "454",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Ege Bamyasi",
        "artist_name": "Can",
        "record_label": "United Artists",
        "release_year": "1972"
    },
    {
        "album_id": "3umFHeEpc4yLXtrRcv9gLN",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "453",
        "2023_rank": "453",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Pretty Hate Machine",
        "artist_name": "Nine Inch Nails",
        "record_label": "TVT",
        "release_year": "1989"
    },
    {
        "album_id": "5gX0Oedkr1IgRO8OXhUR5k",
        "2003_rank": "431",
        "2005_rank": "423",
        "2012_rank": "423",
        "2020_rank": "452",
        "2023_rank": "452",
        "album_type": "Greatest Hits",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Anthology",
        "artist_name": "Diana Ross and the Supremes",
        "record_label": "Tamla/Motown",
        "release_year": "1974"
    },
    {
        "album_id": "2ARWEOvaUgm4FSj25MpY6F",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "451",
        "2023_rank": "451",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "First Take",
        "artist_name": "Roberta Flack",
        "record_label": "Atlantic",
        "release_year": "1969"
    },
    {
        "album_id": "4ZLVPyXVXeMbnxyhxvsF7m",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "450",
        "2023_rank": "450",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Ram",
        "artist_name": "Paul and Linda McCartney",
        "record_label": "Apple",
        "release_year": "1971"
    },
    {
        "album_id": "6D9urpsOWWKtYvF6PaorGE",
        "2003_rank": "390",
        "2005_rank": "386",
        "2012_rank": "390",
        "2020_rank": "449",
        "2023_rank": "449",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Elephant",
        "artist_name": "The White Stripes",
        "record_label": "V2/XL/Third Man",
        "release_year": "2003"
    },
    {
        "album_id": "0WfED1nqBzTMxv0NvnUNjf",
        "2003_rank": "251",
        "2005_rank": "248",
        "2012_rank": "254",
        "2020_rank": "448",
        "2023_rank": "448",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Dictionary of Soul",
        "artist_name": "Otis Redding",
        "record_label": "Volt",
        "release_year": "1966"
    },
    {
        "album_id": "7CjJb2mikwAWA1V6kewFBF",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "447",
        "2023_rank": "447",
        "album_type": "Studio",
        "album_genre": "Latin",
        "album_title": "X 100pre",
        "artist_name": "Bad Bunny",
        "record_label": "Rimas",
        "release_year": "2018"
    },
    {
        "album_id": "6zV55F6W8kh1qe8LHhqRbz",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "446",
        "2023_rank": "446",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "Journey in Satchidanada",
        "artist_name": "Alice Coltrane",
        "record_label": "Impulse!",
        "release_year": "1971"
    },
    {
        "album_id": "252LyflX4wUeISSzgL392F",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "445",
        "2023_rank": "445",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Close to the Edge",
        "artist_name": "Yes",
        "record_label": "Atlantic",
        "release_year": "1972"
    },
    {
        "album_id": "1z0O8lKuQRs974S8wcRiAs",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "444",
        "2023_rank": "444",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Extraordinary Machine",
        "artist_name": "Fiona Apple",
        "record_label": "Epic",
        "release_year": "2005"
    },
    {
        "album_id": "5fxvWHvIDPIALfTfRiwyB0",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "443",
        "2023_rank": "443",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Scary Monsters",
        "artist_name": "David Bowie",
        "record_label": "RCA",
        "release_year": "1980"
    },
    {
        "album_id": "0P3oVJBFOv3TDXlYRhGL7s",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "442",
        "2023_rank": "442",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Beauty Behind the Madness",
        "artist_name": "The Weeknd",
        "record_label": "XO",
        "release_year": "2015"
    },
    {
        "album_id": "1ePkYcH5ZQCb1b4tQeiEDj",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "441",
        "2023_rank": "441",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Blackout",
        "artist_name": "Britney Spears",
        "record_label": "Jive",
        "release_year": "2007"
    },
    {
        "album_id": "2SayIIdZkrtb9I4BbdnyOr",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "440",
        "2023_rank": "440",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Coal Miner's Daughter",
        "artist_name": "Loretta Lynn",
        "record_label": "Decca",
        "release_year": "1971"
    },
    {
        "album_id": "3CVie3TkZ0VHgT6mlwy7cp",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "439",
        "2023_rank": "439",
        "album_type": "Live",
        "album_genre": "Funk/Disco",
        "album_title": "Sex Machine",
        "artist_name": "James Brown",
        "record_label": "King",
        "release_year": "1970"
    },
    {
        "album_id": "0YS25Dr3hMtMFlVTfuvzl4",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "438",
        "2023_rank": "438",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Parklife",
        "artist_name": "Blur",
        "record_label": "Food",
        "release_year": "1994"
    },
    {
        "album_id": "0bUTHlWbkSQysoM3VsWldT",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "Not Ranked",
        "2023_rank": "437",
        "album_type": "Unknown Type",
        "album_genre": "Unknown Genre",
        "album_title": "Demon Days",
        "artist_name": "Gorillaz",
        "record_label": "EMI.",
        "release_year": "2005"
    },
    {
        "album_id": "78iX7tMceN0FsnmabAtlOC",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "436",
        "2023_rank": "436",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "All Eyez on Me",
        "artist_name": "2Pac",
        "record_label": "Death Row",
        "release_year": "1996"
    },
    {
        "album_id": "0p5QwhEke5P9mFY4CY9u4j",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "435",
        "2023_rank": "435",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Actually",
        "artist_name": "Pet Shop Boys",
        "record_label": "EMI Manhattan",
        "release_year": "1987"
    },
    {
        "album_id": "1XFNz6KIvLyIsLFOiLRKqP",
        "2003_rank": "210",
        "2005_rank": "208",
        "2012_rank": "212",
        "2020_rank": "434",
        "2023_rank": "434",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Crooked Rain, Crooked Rain",
        "artist_name": "Pavement",
        "record_label": "Matador",
        "release_year": "1994"
    },
    {
        "album_id": "1R8kkopLT4IAxzMMkjic6X",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "395",
        "2020_rank": "433",
        "2023_rank": "433",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Sound of Silver",
        "artist_name": "LCD Soundsystem",
        "record_label": "DFA/Capitol",
        "release_year": "2007"
    },
    {
        "album_id": "1RM6MGv6bcl6NrAG8PGoZk",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "432",
        "2023_rank": "432",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Confessions",
        "artist_name": "Usher",
        "record_label": "Arista",
        "release_year": "2004"
    },
    {
        "album_id": "5dl01XDIMXrmjJ22obqfhQ",
        "2003_rank": "461",
        "2005_rank": "453",
        "2012_rank": "455",
        "2020_rank": "431",
        "2023_rank": "431",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "How Will the Wolf Survive?",
        "artist_name": "Los Lobos",
        "record_label": "Slash/Warner Bros.",
        "release_year": "1984"
    },
    {
        "album_id": "3RQQmkQEvNCY4prGKE6oc5",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "Not Ranked",
        "2023_rank": "430",
        "album_type": "Unknown Type",
        "album_genre": "Unknown Genre",
        "album_title": "Un Verano Sin Ti",
        "artist_name": "Bad Bunny",
        "record_label": "RIMAS",
        "release_year": "2022"
    },
    {
        "album_id": "4Jw0RycAqlXeAoymbc0CYp",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "429",
        "2023_rank": "429",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Reach Out",
        "artist_name": "The Four Tops",
        "record_label": "Tamla/Motown",
        "release_year": "1967"
    },
    {
        "album_id": "2eOu9QDLP2MoO04ZtII2Vm",
        "2003_rank": "495",
        "2005_rank": "487",
        "2012_rank": "488",
        "2020_rank": "428",
        "2023_rank": "428",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "New Day Rising",
        "artist_name": "Hüsker Dü",
        "record_label": "SST",
        "release_year": "1985"
    },
    {
        "album_id": "1hryVGXoRLV9WAhO97xEDJ",
        "2003_rank": "289",
        "2005_rank": "286",
        "2012_rank": "290",
        "2020_rank": "427",
        "2023_rank": "427",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Call Me",
        "artist_name": "Al Green",
        "record_label": "Hi",
        "release_year": "1973"
    },
    {
        "album_id": "63498KErJdRts4KWrgv2dT",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "426",
        "2023_rank": "426",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Lucinda Williams",
        "artist_name": "Lucinda Williams",
        "record_label": "Rough Trade",
        "release_year": "1988"
    },
    {
        "album_id": "7npBPiCHjPj8PVIGPuHXep",
        "2003_rank": "267",
        "2005_rank": "264",
        "2012_rank": "268",
        "2020_rank": "425",
        "2023_rank": "425",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Paul Simon",
        "artist_name": "Paul Simon",
        "record_label": "Columbia",
        "release_year": "1972"
    },
    {
        "album_id": "1Pus5h1qGedCn4CtOuPVtp",
        "2003_rank": "305",
        "2005_rank": "301",
        "2012_rank": "306",
        "2020_rank": "424",
        "2023_rank": "424",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Odelay",
        "artist_name": "Beck",
        "record_label": "Geffen",
        "release_year": "1996"
    },
    {
        "album_id": "3V18DIKvRuwdxc2LE4wuac",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "423",
        "2023_rank": "423",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "I Can Hear the Heart Beating As One",
        "artist_name": "Yo La Tengo",
        "record_label": "Matador",
        "release_year": "1997"
    },
    {
        "album_id": "1oIICL75sMuInkEhX8jj3b",
        "2003_rank": "165",
        "2005_rank": "164",
        "2012_rank": "165",
        "2020_rank": "422",
        "2023_rank": "422",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Let's Get It On",
        "artist_name": "Marvin Gaye",
        "record_label": "Tamla/Motown",
        "release_year": "1973"
    },
    {
        "album_id": "7CzEknt9gJwe0QC89ir1JX",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "421",
        "2023_rank": "421",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Arular",
        "artist_name": "M.I.A.",
        "record_label": "Interscope",
        "release_year": "2005"
    },
    {
        "album_id": "5tXZfxvr2VaWibD74nw8VL",
        "2003_rank": "493",
        "2005_rank": "485",
        "2012_rank": "486",
        "2020_rank": "420",
        "2023_rank": "420",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "That’s the Way of the World",
        "artist_name": "Earth, Wind and Fire",
        "record_label": "Columbia",
        "release_year": "1975"
    },
    {
        "album_id": "5dtw6CoMhbrSj01YUvdQOF",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "419",
        "2023_rank": "419",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Chief",
        "artist_name": "Eric Church",
        "record_label": "EMI Nashville",
        "release_year": "2011"
    },
    {
        "album_id": "7jvcSnCnugLcisBCNBm60s",
        "2003_rank": "351",
        "2005_rank": "347",
        "2012_rank": "352",
        "2020_rank": "418",
        "2023_rank": "418",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Brothers in Arms",
        "artist_name": "Dire Straits",
        "record_label": "Warner Bros.",
        "release_year": "1985"
    },
    {
        "album_id": "2iPH3iUmpa9ufIpwY76keF",
        "2003_rank": "246",
        "2005_rank": "243",
        "2012_rank": "248",
        "2020_rank": "417",
        "2023_rank": "417",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "The Shape of Jazz to Come",
        "artist_name": "Ornette Coleman",
        "record_label": "Atlantic",
        "release_year": "1959"
    },
    {
        "album_id": "0qbl8aNaCUOvX8HGsZYLfh",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "416",
        "2023_rank": "416",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Things Fall Apart",
        "artist_name": "The Roots",
        "record_label": "MCA",
        "release_year": "1999"
    },
    {
        "album_id": "6mGpQtwteyjKS4Up9tXuND",
        "2003_rank": "218",
        "2005_rank": "216",
        "2012_rank": "220",
        "2020_rank": "415",
        "2023_rank": "415",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Looka Py Py",
        "artist_name": "The Meters",
        "record_label": "Josie",
        "release_year": "1969"
    },
    {
        "album_id": "7rAk4WPpYlYr0fElVfXTOF",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "414",
        "2023_rank": "414",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Risqué",
        "artist_name": "Chic",
        "record_label": "Atlantic",
        "release_year": "1979"
    },
    {
        "album_id": "5w2X5ZmdE4u0XGkOU7BiLG",
        "2003_rank": "265",
        "2005_rank": "262",
        "2012_rank": "Not Ranked",
        "2020_rank": "413",
        "2023_rank": "413",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Cosmo's Factory",
        "artist_name": "Creedence Clearwater Revival",
        "record_label": "Fantasy",
        "release_year": "1970"
    },
    {
        "album_id": "2NT1Pc0MXlXORHLBkHyKQW",
        "2003_rank": "271",
        "2005_rank": "268",
        "2012_rank": "273",
        "2020_rank": "412",
        "2023_rank": "412",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Going to a Go Go",
        "artist_name": "Smokey Robinson and the Miracles",
        "record_label": "Tamla/Motown",
        "release_year": "1965"
    },
    {
        "album_id": "4BcfuxQ4EO07Y53yr6YhAJ",
        "2003_rank": "467",
        "2005_rank": "459",
        "2012_rank": "385",
        "2020_rank": "411",
        "2023_rank": "411",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Love and Theft",
        "artist_name": "Bob Dylan",
        "record_label": "Columbia",
        "release_year": "2001"
    },
    {
        "album_id": "01uTaEF0YlcBgNwaSS9iIl",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "410",
        "2023_rank": "410",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Wild Honey",
        "artist_name": "The Beach Boys",
        "record_label": "Capitol",
        "release_year": "1967"
    },
    {
        "album_id": "4jxokHekH1qSad1DcC82ku",
        "2003_rank": "262",
        "2005_rank": "259",
        "2012_rank": "264",
        "2020_rank": "409",
        "2023_rank": "409",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Workingman’s Dead",
        "artist_name": "Grateful Dead",
        "record_label": "Warner Bros.",
        "release_year": "1970"
    },
    {
        "album_id": "1LORPYoTiPGpJC37GqYSvC",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "408",
        "2023_rank": "408",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Ace of Spades",
        "artist_name": "Motörhead",
        "record_label": "Bronze",
        "release_year": "1980"
    },
    {
        "album_id": "70Yl2w1p00whfnC7fj94ox",
        "2003_rank": "208",
        "2005_rank": "206",
        "2012_rank": "210",
        "2020_rank": "407",
        "2023_rank": "407",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Everybody Knows This Is Nowhere",
        "artist_name": "Neil Young",
        "record_label": "Reprise",
        "release_year": "1969"
    },
    {
        "album_id": "2GuROKcqyHdpIDcgxml1C7",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "465",
        "2020_rank": "406",
        "2023_rank": "406",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "'69 Love Songs",
        "artist_name": "Magnetic Fields",
        "record_label": "Merge",
        "release_year": "1999"
    },
    {
        "album_id": "NOS119",
        "2003_rank": "196",
        "2005_rank": "194",
        "2012_rank": "196",
        "2020_rank": "405",
        "2023_rank": "405",
        "album_type": "Compilation",
        "album_genre": "",
        "album_title": "Nuggets: Original Artyfacts from the First Psychedelic Era",
        "artist_name": "Various",
        "record_label": "Elektra",
        "release_year": "1972"
    },
    {
        "album_id": "1C7VOpm96d77zf5yaRqJ2u",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "404",
        "2023_rank": "404",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Rapture",
        "artist_name": "Anita Baker",
        "record_label": "Elektra",
        "release_year": "1986"
    },
    {
        "album_id": "7eaQqVyq6xzAVgsxSzSP83",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "403",
        "2023_rank": "403",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Supreme Clientele",
        "artist_name": "Ghostface Killah",
        "record_label": "Epic",
        "release_year": "2000"
    },
    {
        "album_id": "6zZXBV5eC1oISyUGZFfthw",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "402",
        "2023_rank": "402",
        "album_type": "Studio",
        "album_genre": "Afrobeat",
        "album_title": "Expensive Shit",
        "artist_name": "Fela Kuti and Africa 70",
        "record_label": "Sounds Workshop",
        "release_year": "1975"
    },
    {
        "album_id": "54V45InMvJ6uVtRtO6h1Co",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "401",
        "2023_rank": "401",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Blondie",
        "artist_name": "Blondie",
        "record_label": "Private Stock",
        "release_year": "1977"
    },
    {
        "album_id": "1L4HE00En7eNK74voVZums",
        "2003_rank": "413",
        "2005_rank": "409",
        "2012_rank": "414",
        "2020_rank": "400",
        "2023_rank": "400",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Beauty and the Beat",
        "artist_name": "The Go-Go’s",
        "record_label": "I.R.S.",
        "release_year": "1981"
    },
    {
        "album_id": "4Uc6YCjpfyjj02rZfg2EUv",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "399",
        "2023_rank": "399",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Smile",
        "artist_name": "Brian Wilson",
        "record_label": "Nonesuch",
        "release_year": "2004"
    },
    {
        "album_id": "190Tx9jPHndq0qUlq79BJJ",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "398",
        "2023_rank": "398",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "The Raincoats",
        "artist_name": "The Raincoats",
        "record_label": "Rough Trade",
        "release_year": "1979"
    },
    {
        "album_id": "0S0KGZnfBGSIssfF54WSJh",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "397",
        "2023_rank": "397",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "When We All Fall Asleep, Where Do We Go?",
        "artist_name": "Billie Eilish",
        "record_label": "Interscope",
        "release_year": "2019"
    },
    {
        "album_id": "3fRCOoTbBsOITBWlCRCJQr",
        "2003_rank": "173",
        "2005_rank": "172",
        "2012_rank": "173",
        "2020_rank": "396",
        "2023_rank": "396",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Something/Anything?",
        "artist_name": "Todd Rundgren",
        "record_label": "Bearsville",
        "release_year": "1972"
    },
    {
        "album_id": "5Hfbag0SsHxafx1SySFSX6",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "395",
        "2023_rank": "395",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Black Messiah",
        "artist_name": "D’Angelo and the Vanguard",
        "record_label": "RCA",
        "release_year": "2014"
    },
    {
        "album_id": "3zgDLoVcpVGfFbDZJf3uHI",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "394",
        "2023_rank": "394",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Diana",
        "artist_name": "Diana Ross",
        "record_label": "Motown",
        "release_year": "1980"
    },
    {
        "album_id": "2QJmrSgbdM35R67eoGQo4j",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "393",
        "2023_rank": "393",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "1989",
        "artist_name": "Taylor Swift",
        "record_label": "Big Machine",
        "release_year": "2014"
    },
    {
        "album_id": "2UCdfQEDgzWtbzpaD4Mo47",
        "2003_rank": "212",
        "2005_rank": "210",
        "2012_rank": "214",
        "2020_rank": "392",
        "2023_rank": "392",
        "album_type": "Greatest Hits",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Proud Mary: The Best of Ike and Tina Turner",
        "artist_name": "Ike and Tina Turner",
        "record_label": "EMI",
        "release_year": "1991"
    },
    {
        "album_id": "2QFua4q4idl0jgRavneYZ9",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "391",
        "2023_rank": "391",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Kaleidoscope",
        "artist_name": "Kelis",
        "record_label": "Virgin",
        "release_year": "1999"
    },
    {
        "album_id": "50j4Wm1b9hLpSpPIA39Vp9",
        "2003_rank": "315",
        "2005_rank": "311",
        "2012_rank": "317",
        "2020_rank": "390",
        "2023_rank": "390",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Surfer Rosa",
        "artist_name": "Pixies",
        "record_label": "4AD",
        "release_year": "1988"
    },
    {
        "album_id": "43iBTEWECK7hSnE0p6GgNo",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "389",
        "2023_rank": "389",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "The Emancipation of Mimi",
        "artist_name": "Mariah Carey",
        "record_label": "Island",
        "release_year": "2005"
    },
    {
        "album_id": "0k5C3Z7w7uQpyGFQEzl7yB",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "388",
        "2023_rank": "388",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Young, Gifted and Black",
        "artist_name": "Aretha Franklin",
        "record_label": "Atlantic",
        "release_year": "1972"
    },
    {
        "album_id": "5vkqYmiPBYLaalcmjujWxK",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "336",
        "2020_rank": "387",
        "2023_rank": "387",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "In Rainbows",
        "artist_name": "Radiohead",
        "record_label": "XL",
        "release_year": "2007"
    },
    {
        "album_id": "5fMlysqhFE0itGn4KezMBW",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "386",
        "2023_rank": "386",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Donuts",
        "artist_name": "J Dilla",
        "record_label": "Stones Throw",
        "release_year": "2006"
    },
    {
        "album_id": "39H0vM2hB4QbzPHZON87t5",
        "2003_rank": "105",
        "2005_rank": "106",
        "2012_rank": "106",
        "2020_rank": "385",
        "2023_rank": "385",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Rocket to Russia",
        "artist_name": "Ramones",
        "record_label": "Sire",
        "release_year": "1977"
    },
    {
        "album_id": "10c0h2wJ40mTjfIM5B0Lwr",
        "2003_rank": "255",
        "2005_rank": "252",
        "2012_rank": "258",
        "2020_rank": "384",
        "2023_rank": "384",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Kinks Are the Village Green Preservation Society",
        "artist_name": "The Kinks",
        "record_label": "Reprise",
        "release_year": "1969"
    },
    {
        "album_id": "49MNmJhZQewjt06rpwp6QR",
        "2003_rank": "412",
        "2005_rank": "408",
        "2012_rank": "Not Ranked",
        "2020_rank": "383",
        "2023_rank": "383",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Mezzanine",
        "artist_name": "Massive Attack",
        "record_label": "Circa/Virgin",
        "release_year": "1998"
    },
    {
        "album_id": "79dL7FLiJFOO0EoehUHQBv",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "382",
        "2023_rank": "382",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Currents",
        "artist_name": "Tame Impala",
        "record_label": "Interscope",
        "release_year": "2015"
    },
    {
        "album_id": "6DExt1eX4lflLacVjHHbOs",
        "2003_rank": "401",
        "2005_rank": "397",
        "2012_rank": "403",
        "2020_rank": "381",
        "2023_rank": "381",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "(Pronounced Lĕh-nérd Skin-nérd)",
        "artist_name": "Lynyrd Skynyrd",
        "record_label": "MCA",
        "release_year": "1973"
    },
    {
        "album_id": "4Z8nWz3dGybOP7lhMZpcOo",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "380",
        "2023_rank": "380",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "Mingus Ah Um",
        "artist_name": "Charles Mingus",
        "record_label": "Columbia",
        "release_year": "1959"
    },
    {
        "album_id": "2xg7iIKoSqaDNpDbJnyCjY",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "379",
        "2023_rank": "379",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Moving Pictures",
        "artist_name": "Rush",
        "record_label": "Anthem",
        "release_year": "1981"
    },
    {
        "album_id": "05n0d2kfwGPhKpTonLHRpY",
        "2003_rank": "240",
        "2005_rank": "237",
        "2012_rank": "242",
        "2020_rank": "378",
        "2023_rank": "378",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Run-D.M.C.",
        "artist_name": "Run-DMC",
        "record_label": "Profile",
        "release_year": "1983"
    },
    {
        "album_id": "0EabZMx74C2wyXhvMMO1eI",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "377",
        "2023_rank": "377",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Fever to Tell",
        "artist_name": "Yeah Yeah Yeahs",
        "record_label": "Interscope",
        "release_year": "2003"
    },
    {
        "album_id": "0vVekV45lOaVKs6RZQQNob",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "376",
        "2023_rank": "376",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "In the Aeroplane Over the Sea",
        "artist_name": "Neutral Milk Hotel",
        "record_label": "Merge",
        "release_year": "1998"
    },
    {
        "album_id": "4uG8q3GPuWHQlRbswMIRS6",
        "2003_rank": "193",
        "2005_rank": "191",
        "2012_rank": "193",
        "2020_rank": "375",
        "2023_rank": "375",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Dookie",
        "artist_name": "Green Day",
        "record_label": "Reprise",
        "release_year": "1994"
    },
    {
        "album_id": "2IWaNq5o4tG1w6yxve5BMU",
        "2003_rank": "27",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "374",
        "2023_rank": "374",
        "album_type": "Compilation",
        "album_genre": "Blues/Blues Rock",
        "album_title": "King of the Delta Blues Singers",
        "artist_name": "Robert Johnson",
        "record_label": "Columbia",
        "release_year": "1961"
    },
    {
        "album_id": "71rxIr6MJYUzDG9ge6Jq3J",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "373",
        "2023_rank": "373",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Hot Buttered Soul",
        "artist_name": "Isaac Hayes",
        "record_label": "Enterprise",
        "release_year": "1969"
    },
    {
        "album_id": "2rogKfOpmCFuqNhtGKf2dX",
        "2003_rank": "338",
        "2005_rank": "334",
        "2012_rank": "338",
        "2020_rank": "372",
        "2023_rank": "372",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Cheap Thrills",
        "artist_name": "Big Brother and the Holding Company",
        "record_label": "Columbia",
        "release_year": "1968"
    },
    {
        "album_id": "6FHB7YdBkGKcKVf5XeSPnB",
        "2003_rank": "398",
        "2005_rank": "394",
        "2012_rank": "400",
        "2020_rank": "371",
        "2023_rank": "371",
        "album_type": "Greatest Hits",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Anthology",
        "artist_name": "The Temptations",
        "record_label": "Tamla/Motown",
        "release_year": "1973"
    },
    {
        "album_id": "7slHgsEMuJfnuft5LAPyw6",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "370",
        "2023_rank": "370",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Tha Carter II",
        "artist_name": "Lil Wayne",
        "record_label": "Cash Money/Universal",
        "release_year": "2005"
    },
    {
        "album_id": "1cCAb1vN8uUsdfEylVmTLs",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "369",
        "2023_rank": "369",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The Infamous",
        "artist_name": "Mobb Deep",
        "record_label": "Loud",
        "release_year": "1995"
    },
    {
        "album_id": "7j7lsExGJtBHLgDYzjclwk",
        "2003_rank": "437",
        "2005_rank": "429",
        "2012_rank": "433",
        "2020_rank": "368",
        "2023_rank": "368",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "All Things Must Pass",
        "artist_name": "George Harrison",
        "record_label": "Apple",
        "release_year": "1970"
    },
    {
        "album_id": "0ptlfJfwGTy0Yvrk14JK1I",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "367",
        "2023_rank": "367",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "If You're Reading This It's Too Late",
        "artist_name": "Drake",
        "record_label": "Cash Money",
        "release_year": "2015"
    },
    {
        "album_id": "4ldiyfqRvKiIasHHuDftuP",
        "2003_rank": "176",
        "2005_rank": "175",
        "2012_rank": "176",
        "2020_rank": "366",
        "2023_rank": "366",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Rocks",
        "artist_name": "Aerosmith",
        "record_label": "Columbia",
        "release_year": "1976"
    },
    {
        "album_id": "19bQiwEKhXUBJWY6oV3KZk",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "365",
        "2023_rank": "365",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Madvillainy",
        "artist_name": "Madvillain",
        "record_label": "Stones Throw",
        "release_year": "2004"
    },
    {
        "album_id": "39jsLMRmrTpfdq2vE4TCUe",
        "2003_rank": "382",
        "2005_rank": "378",
        "2012_rank": "383",
        "2020_rank": "364",
        "2023_rank": "364",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "More Songs About Buildings and Food",
        "artist_name": "Talking Heads",
        "record_label": "Sire",
        "release_year": "1978"
    },
    {
        "album_id": "4q1HNSka8CzuLvC8ydcsD2",
        "2003_rank": "274",
        "2005_rank": "271",
        "2012_rank": "276",
        "2020_rank": "363",
        "2023_rank": "363",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Mothership Connection",
        "artist_name": "Parliament",
        "record_label": "Casablanca",
        "release_year": "1975"
    },
    {
        "album_id": "1B4oPgG5ljWTRxsKcTHAYn",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "362",
        "2023_rank": "362",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Never Too Much",
        "artist_name": "Luther Vandross",
        "record_label": "Epic",
        "release_year": "1981"
    },
    {
        "album_id": "0FZK97MXMm5mUQ8mtudjuK",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "361",
        "2023_rank": "361",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "The Black Parade",
        "artist_name": "My Chemical Romance",
        "record_label": "Reprise",
        "release_year": "2006"
    },
    {
        "album_id": "0QLGc9YYoHIKpnprRURTdm",
        "2003_rank": "177",
        "2005_rank": "176",
        "2012_rank": "177",
        "2020_rank": "360",
        "2023_rank": "360",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "One Nation Under a Groove",
        "artist_name": "Funkadelic",
        "record_label": "Warner Bros.",
        "release_year": "1978"
    },
    {
        "album_id": "3mtVgumHx6y9I2UvW4lUd5",
        "2003_rank": "403",
        "2005_rank": "399",
        "2012_rank": "405",
        "2020_rank": "359",
        "2023_rank": "359",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Radio City",
        "artist_name": "Big Star",
        "record_label": "Ardent",
        "release_year": "1974"
    },
    {
        "album_id": "6s84u2TUpR3wdUv4NgKA2j",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "Not Ranked",
        "2023_rank": "358",
        "album_type": "Unknown Type",
        "album_genre": "Unknown Genre",
        "album_title": "Sour",
        "artist_name": "Olivia Rodrigo",
        "record_label": "Geffen",
        "release_year": "2021"
    },
    {
        "album_id": "51CvLH7MxsLuFgTwVvzApx",
        "2003_rank": "397",
        "2005_rank": "393",
        "2012_rank": "399",
        "2020_rank": "357",
        "2023_rank": "357",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Rain Dogs",
        "artist_name": "Tom Waits",
        "record_label": "Island",
        "release_year": "1985"
    },
    {
        "album_id": "1yBoaVrgcup2hX2DCYUajs",
        "2003_rank": "143",
        "2005_rank": "143",
        "2012_rank": "143",
        "2020_rank": "356",
        "2023_rank": "356",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Gris-Gris",
        "artist_name": "Dr. John",
        "record_label": "Atco",
        "release_year": "1968"
    },
    {
        "album_id": "4ZLy3U2q17Yjw7jkjXPJQj",
        "2003_rank": "241",
        "2005_rank": "238",
        "2012_rank": "243",
        "2020_rank": "355",
        "2023_rank": "355",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Black Sabbath",
        "artist_name": "Black Sabbath",
        "record_label": "Warner Bros.",
        "release_year": "1970"
    },
    {
        "album_id": "7nZ0F572fluFD4tQCFf3z7",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "354",
        "2023_rank": "354",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Germfree Adolescents",
        "artist_name": "X-Ray Spex",
        "record_label": "EMI",
        "release_year": "1978"
    },
    {
        "album_id": "4tJPWT4r4FSKwy784Qs1Fq",
        "2003_rank": "282",
        "2005_rank": "279",
        "2012_rank": "284",
        "2020_rank": "353",
        "2023_rank": "353",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "The Cars",
        "artist_name": "The Cars",
        "record_label": "Elektra",
        "release_year": "1978"
    },
    {
        "album_id": "0vE6mttRTBXRe9rKghyr1l",
        "2003_rank": "273",
        "2005_rank": "270",
        "2012_rank": "275",
        "2020_rank": "352",
        "2023_rank": "352",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The Slim Shady LP",
        "artist_name": "Eminem",
        "record_label": "Interscope",
        "release_year": "1999"
    },
    {
        "album_id": "07w0rG5TETcyihsEIZR3qG",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "Not Ranked",
        "2023_rank": "351",
        "album_type": "Unknown Type",
        "album_genre": "Unknown Genre",
        "album_title": "SOS",
        "artist_name": "SZA",
        "record_label": "Top Dawg/RCA",
        "release_year": "2022"
    },
    {
        "album_id": "7n0bcoRDylRw5PUKn2PlRJ",
        "2003_rank": "284",
        "2005_rank": "281",
        "2012_rank": "285",
        "2020_rank": "350",
        "2023_rank": "350",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Music of My Mind",
        "artist_name": "Stevie Wonder",
        "record_label": "Tamla/Motown",
        "release_year": "1972"
    },
    {
        "album_id": "0kT4F2mSpvTk3stwiaEStp",
        "2003_rank": "294",
        "2005_rank": "290",
        "2012_rank": "294",
        "2020_rank": "349",
        "2023_rank": "349",
        "album_type": "Live",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Kick Out the Jams",
        "artist_name": "MC5",
        "record_label": "Elektra",
        "release_year": "1969"
    },
    {
        "album_id": "55FP2ypQcghszSqylyBRbp",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "348",
        "2023_rank": "348",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Time (The Revelator)",
        "artist_name": "Gillian Welch",
        "record_label": "Acony",
        "release_year": "2001"
    },
    {
        "album_id": "3k8xoyOXkGgZxUKgpmxz4P",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "347",
        "2023_rank": "347",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Liquid Swords",
        "artist_name": "GZA",
        "record_label": "Geffen",
        "release_year": "1995"
    },
    {
        "album_id": "78bpIziExqiI9qztvNFlQu",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "346",
        "2023_rank": "346",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "AM",
        "artist_name": "Arctic Monkeys",
        "record_label": "Domino",
        "release_year": "2013"
    },
    {
        "album_id": "1rmhti8uHw21LnaWMQy608",
        "2003_rank": "132",
        "2005_rank": "132",
        "2012_rank": "133",
        "2020_rank": "345",
        "2023_rank": "345",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "The Wild, the Innocent & the E Street Shuffle",
        "artist_name": "Bruce Springsteen",
        "record_label": "Columbia",
        "release_year": "1973"
    },
    {
        "album_id": "7a341nZsSfwyBsq1tMPETz",
        "2003_rank": "378",
        "2005_rank": "374",
        "2012_rank": "380",
        "2020_rank": "344",
        "2023_rank": "344",
        "album_type": "Compilation",
        "album_genre": "Reggae",
        "album_title": "Funky Kingston",
        "artist_name": "Toots and the Maytals",
        "record_label": "Island",
        "release_year": "1973"
    },
    {
        "album_id": "0UM9SydcBtsklCTFgGLvcT",
        "2003_rank": "60",
        "2005_rank": "60",
        "2012_rank": "61",
        "2020_rank": "343",
        "2023_rank": "343",
        "album_type": "Greatest Hits",
        "album_genre": "Funk/Disco",
        "album_title": "Greatest Hits",
        "artist_name": "Sly and the Family Stone",
        "record_label": "Epic",
        "release_year": "1970"
    },
    {
        "album_id": "0jTGHV5xqHPvEcwL8f6YU5",
        "2003_rank": "86",
        "2005_rank": "86",
        "2012_rank": "392",
        "2020_rank": "342",
        "2023_rank": "342",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Let It Be",
        "artist_name": "The Beatles",
        "record_label": "Apple",
        "release_year": "1970"
    },
    {
        "album_id": "3YDm8Vu6IOjjVdLNHlJtj0",
        "2003_rank": "360",
        "2005_rank": "356",
        "2012_rank": "362",
        "2020_rank": "341",
        "2023_rank": "341",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Siamese Dream",
        "artist_name": "The Smashing Pumpkins",
        "record_label": "Virgin",
        "release_year": "1993"
    },
    {
        "album_id": "5IFOummNcGXY3qCBWRchqP",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "340",
        "2023_rank": "340",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Doggystyle",
        "artist_name": "Snoop Doggy Dogg",
        "record_label": "Death Row/Interscope",
        "release_year": "1993"
    },
    {
        "album_id": "4OD3LU6001esAtFshDX46M",
        "2003_rank": "275",
        "2005_rank": "272",
        "2012_rank": "277",
        "2020_rank": "339",
        "2023_rank": "339",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Rhythm Nation 1814",
        "artist_name": "Janet Jackson",
        "record_label": "A&M",
        "release_year": "1989"
    },
    {
        "album_id": "6uoeezh45SYEb8lcT8gDTY",
        "2003_rank": "433",
        "2005_rank": "425",
        "2012_rank": "429",
        "2020_rank": "338",
        "2023_rank": "338",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Another Green World",
        "artist_name": "Brian Eno",
        "record_label": "Island",
        "release_year": "1975"
    },
    {
        "album_id": "2KzCDxKpgLqBffHu1IZ7Kn",
        "2003_rank": "301",
        "2005_rank": "297",
        "2012_rank": "303",
        "2020_rank": "337",
        "2023_rank": "337",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "John Wesley Harding",
        "artist_name": "Bob Dylan",
        "record_label": "Columbia",
        "release_year": "1967"
    },
    {
        "album_id": "3JXODSjT9mUz2lIb4YIErw",
        "2003_rank": "307",
        "2005_rank": "303",
        "2012_rank": "Not Ranked",
        "2020_rank": "336",
        "2023_rank": "336",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Avalon",
        "artist_name": "Roxy Music",
        "record_label": "E.G./Warner Bros.",
        "release_year": "1982"
    },
    {
        "album_id": "6BOlD6UGUg45IsUXPSplkY",
        "2003_rank": "291",
        "2005_rank": "288",
        "2012_rank": "292",
        "2020_rank": "335",
        "2023_rank": "335",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "The Basement Tapes",
        "artist_name": "Bob Dylan and the Band",
        "record_label": "Columbia",
        "release_year": "1975"
    },
    {
        "album_id": "1CHUXwuge9A7L2KiA3vnR6",
        "2003_rank": "205",
        "2005_rank": "203",
        "2012_rank": "207",
        "2020_rank": "334",
        "2023_rank": "334",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Abraxas",
        "artist_name": "Santana",
        "record_label": "Columbia",
        "release_year": "1970"
    },
    {
        "album_id": "0sFuW4rH5mFZUjNKnckO3v",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "333",
        "2023_rank": "333",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Still Bill",
        "artist_name": "Bill Withers",
        "record_label": "Sussex",
        "release_year": "1972"
    },
    {
        "album_id": "7GXP5OhYyPVLmcVfO9Iqin",
        "2003_rank": "55",
        "2005_rank": "56",
        "2012_rank": "56",
        "2020_rank": "332",
        "2023_rank": "332",
        "album_type": "Studio",
        "album_genre": "Rock n' Roll/Rhythm & Blues",
        "album_title": "Elvis Presley",
        "artist_name": "Elvis Presley",
        "record_label": "RCA",
        "release_year": "1956"
    },
    {
        "album_id": "48AGkmM7iO4jrELRnNZGPV",
        "2003_rank": "237",
        "2005_rank": "234",
        "2012_rank": "239",
        "2020_rank": "331",
        "2023_rank": "331",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Like a Prayer",
        "artist_name": "Madonna",
        "record_label": "Sire",
        "release_year": "1989"
    },
    {
        "album_id": "79lrrUvUyIuOD12b5taQVP",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "Not Ranked",
        "2023_rank": "330",
        "album_type": "Unknown Type",
        "album_genre": "Unknown Genre",
        "album_title": "African Giant",
        "artist_name": "Burna Boy",
        "record_label": "Atlantic",
        "release_year": "2019"
    },
    {
        "album_id": "4tUVkNYSFrrEqqrxBQW9PN",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "329",
        "2023_rank": "329",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Endtroducing.....",
        "artist_name": "DJ Shadow",
        "record_label": "Mo’ Wax",
        "release_year": "1996"
    },
    {
        "album_id": "1GXMNFfoHF4sN7lG8gZq1j",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "328",
        "2023_rank": "328",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Modern Vampires of the City",
        "artist_name": "Vampire Weekend",
        "record_label": "XL",
        "release_year": "2013"
    },
    {
        "album_id": "6W3aTLI4B5UsPpWMvhT2W4",
        "2003_rank": "170",
        "2005_rank": "169",
        "2012_rank": "170",
        "2020_rank": "327",
        "2023_rank": "327",
        "album_type": "Live",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Live at Leeds",
        "artist_name": "The Who",
        "record_label": "Decca",
        "release_year": "1970"
    },
    {
        "album_id": "4JsSbaggaprB1AfDylXnxO",
        "2003_rank": "204",
        "2005_rank": "202",
        "2012_rank": "206",
        "2020_rank": "326",
        "2023_rank": "326",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Dirty Mind",
        "artist_name": "Prince",
        "record_label": "Warner Bros.",
        "release_year": "1980"
    },
    {
        "album_id": "NOS115",
        "2003_rank": "242",
        "2005_rank": "239",
        "2012_rank": "245",
        "2020_rank": "325",
        "2023_rank": "325",
        "album_type": "Compilation",
        "album_genre": "Rock n' Roll/Rhythm & Blues",
        "album_title": "All Killer No Filler!",
        "artist_name": "Jerry Lee Lewis",
        "record_label": "Rhino",
        "release_year": "1993"
    },
    {
        "album_id": "0RHX9XECH8IVI3LNgWDpmQ",
        "2003_rank": "473",
        "2005_rank": "465",
        "2012_rank": "466",
        "2020_rank": "324",
        "2023_rank": "324",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "A Rush of Blood to the Head",
        "artist_name": "Coldplay",
        "record_label": "Capitol",
        "release_year": "2002"
    },
    {
        "album_id": "2UxN3UKyS3Z5r0Sra8A5RF",
        "2003_rank": "404",
        "2005_rank": "400",
        "2012_rank": "407",
        "2020_rank": "323",
        "2023_rank": "323",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Sandinista!",
        "artist_name": "The Clash",
        "record_label": "Epic",
        "release_year": "1980"
    },
    {
        "album_id": "3ekkFrfotMsEAKc5g71GHk",
        "2003_rank": "190",
        "2005_rank": "188",
        "2012_rank": "190",
        "2020_rank": "322",
        "2023_rank": "322",
        "album_type": "Studio",
        "album_genre": "Rock n' Roll/Rhythm & Blues",
        "album_title": "From Elvis in Memphis",
        "artist_name": "Elvis Presley",
        "record_label": "RCA",
        "release_year": "1969"
    },
    {
        "album_id": "5XpEKORZ4y6OrCZSKsi46A",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "321",
        "2023_rank": "321",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Norman Fucking Rockwell!",
        "artist_name": "Lana Del Rey",
        "record_label": "Polydor/Interscope",
        "release_year": "2019"
    },
    {
        "album_id": "1qs5rB2gsrAWDLrUlyjFUD",
        "2003_rank": "286",
        "2005_rank": "283",
        "2012_rank": "287",
        "2020_rank": "320",
        "2023_rank": "320",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Los Angeles",
        "artist_name": "X",
        "record_label": "Slash",
        "release_year": "1980"
    },
    {
        "album_id": "0um9FI6BLBldL5POP4D4Cw",
        "2003_rank": "Not Ranked",
        "2005_rank": "497",
        "2012_rank": "498",
        "2020_rank": "319",
        "2023_rank": "319",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "The Stone Roses",
        "artist_name": "The Stone Roses",
        "record_label": "Silvertone",
        "release_year": "1989"
    },
    {
        "album_id": "1uFp52Q9EXLNA6DTRYnpTj",
        "2003_rank": "256",
        "2005_rank": "253",
        "2012_rank": "259",
        "2020_rank": "318",
        "2023_rank": "318",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "The Velvet Rope",
        "artist_name": "Janet Jackson",
        "record_label": "Virgin",
        "release_year": "1997"
    },
    {
        "album_id": "4LrLP7DM1KBj8r2Sc098JA",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "317",
        "2023_rank": "317",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "Lady in Satin",
        "artist_name": "Billie Holiday",
        "record_label": "Columbia",
        "release_year": "1958"
    },
    {
        "album_id": "2nSduHVT17MPQCehfMRPG6",
        "2003_rank": "113",
        "2005_rank": "115",
        "2012_rank": "115",
        "2020_rank": "316",
        "2023_rank": "316",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Who Sell Out",
        "artist_name": "The Who",
        "record_label": "Decca",
        "release_year": "1967"
    },
    {
        "album_id": "355bjCHzRJztCzaG5Za4gq",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "315",
        "2023_rank": "315",
        "album_type": "Studio",
        "album_genre": "Latin",
        "album_title": "El Mal Querer",
        "artist_name": "Rosalía",
        "record_label": "Sony",
        "release_year": "2018"
    },
    {
        "album_id": "79EIRdmpPSIWfRlxaZdJbG",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "314",
        "2023_rank": "314",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "One in a Million",
        "artist_name": "Aaliyah",
        "record_label": "Blackground/Atlantic",
        "release_year": "1996"
    },
    {
        "album_id": "0hBWhJEmVyNPG2Jq71CJXz",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "431",
        "2020_rank": "313",
        "2023_rank": "313",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Stories From the City, Stories From the Sea",
        "artist_name": "PJ Harvey",
        "record_label": "Island",
        "release_year": "2000"
    },
    {
        "album_id": "3Yko2SxDk4hc6fncIBQlcM",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "312",
        "2023_rank": "312",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "A Seat at the Table",
        "artist_name": "Solange",
        "record_label": "Saint/Columbia",
        "release_year": "2016"
    },
    {
        "album_id": "3w5Hok05AFjCLy269xXM7e",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "311",
        "2023_rank": "311",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "On the Beach",
        "artist_name": "Neil Young",
        "record_label": "Reprise",
        "release_year": "1974"
    },
    {
        "album_id": "4WXqZZ28geJSPtqLcCF56L",
        "2003_rank": "410",
        "2005_rank": "406",
        "2012_rank": "412",
        "2020_rank": "310",
        "2023_rank": "310",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Pink Flag",
        "artist_name": "Wire",
        "record_label": "Harvest",
        "release_year": "1977"
    },
    {
        "album_id": "0KBdfMTMxi0oD1oVqApTjr",
        "2003_rank": "157",
        "2005_rank": "156",
        "2012_rank": "157",
        "2020_rank": "309",
        "2023_rank": "309",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Closer",
        "artist_name": "Joy Division",
        "record_label": "Factory",
        "release_year": "1980"
    },
    {
        "album_id": "74jn28Kr29iyh8eZXSvnwi",
        "2003_rank": "436",
        "2005_rank": "428",
        "2012_rank": "432",
        "2020_rank": "308",
        "2023_rank": "308",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Here Come the Warm Jets",
        "artist_name": "Brian Eno",
        "record_label": "Island",
        "release_year": "1974"
    },
    {
        "album_id": "4jiO2jRz7g50ESvYYKsKwZ",
        "2003_rank": "106",
        "2005_rank": "107",
        "2012_rank": "107",
        "2020_rank": "307",
        "2023_rank": "307",
        "album_type": "Greatest Hits",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Portrait of a Legend",
        "artist_name": "Sam Cooke",
        "record_label": "ABKCO",
        "release_year": "2003"
    },
    {
        "album_id": "7hI0QCwcx9GB8MZK24IfTT",
        "2003_rank": "285",
        "2005_rank": "282",
        "2012_rank": "286",
        "2020_rank": "306",
        "2023_rank": "306",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "I'm Still in Love With You",
        "artist_name": "Al Green",
        "record_label": "Hi",
        "release_year": "1972"
    },
    {
        "album_id": "6TRmLIsPKSPS71Cnq8FiMc",
        "2003_rank": "159",
        "2005_rank": "158",
        "2012_rank": "159",
        "2020_rank": "305",
        "2023_rank": "305",
        "album_type": "Live",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Alive!",
        "artist_name": "Kiss",
        "record_label": "Casablanca",
        "release_year": "1975"
    },
    {
        "album_id": "6N8uPmDqbgXD3ztkCCfxoo",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "304",
        "2023_rank": "304",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Just As I Am",
        "artist_name": "Bill Withers",
        "record_label": "Sussex",
        "release_year": "1971"
    },
    {
        "album_id": "34lTW6LuORpuIiYfqsetuq",
        "2003_rank": "180",
        "2005_rank": "178",
        "2012_rank": "179",
        "2020_rank": "303",
        "2023_rank": "303",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Definitive Collection",
        "artist_name": "ABBA",
        "record_label": "Universal",
        "release_year": "2001"
    },
    {
        "album_id": "2wjrhhAibIUwC40oFMALtr",
        "2003_rank": "331",
        "2005_rank": "327",
        "2012_rank": "330",
        "2020_rank": "302",
        "2023_rank": "302",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Tonight's the Night",
        "artist_name": "Neil Young",
        "record_label": "Reprise",
        "release_year": "1975"
    },
    {
        "album_id": "2xbTV0Awe4Qm5caUVuPbMr",
        "2003_rank": "213",
        "2005_rank": "211",
        "2012_rank": "215",
        "2020_rank": "301",
        "2023_rank": "301",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "New York Dolls",
        "artist_name": "New York Dolls",
        "record_label": "Mercury",
        "release_year": "1973"
    },
    {
        "album_id": "4UMe0Ods7kygK6OISasZe9",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "300",
        "2023_rank": "300",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Come on Over",
        "artist_name": "Shania Twain",
        "record_label": "Mercury",
        "release_year": "1997"
    },
    {
        "album_id": "7njGz7ZeDXL6cH3VnflcQ2",
        "2003_rank": "141",
        "2005_rank": "141",
        "2012_rank": "141",
        "2020_rank": "299",
        "2023_rank": "299",
        "album_type": "Live",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Live at the Regal",
        "artist_name": "B.B. King",
        "record_label": "ABC-Paramount",
        "release_year": "1965"
    },
    {
        "album_id": "5d71Imt5CIb7LpQwDMQ093",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "298",
        "2023_rank": "298",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Full Moon Fever",
        "artist_name": "Tom Petty",
        "record_label": "MCA",
        "release_year": "1989"
    },
    {
        "album_id": "2ikq6LspaBbUG2qyiV5qdx",
        "2003_rank": "187",
        "2005_rank": "185",
        "2012_rank": "187",
        "2020_rank": "297",
        "2023_rank": "297",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "So",
        "artist_name": "Peter Gabriel",
        "record_label": "Geffen",
        "release_year": "1986"
    },
    {
        "album_id": "2QqocFdpBkxOBLcIRo6UuJ",
        "2003_rank": "350",
        "2005_rank": "346",
        "2012_rank": "351",
        "2020_rank": "296",
        "2023_rank": "296",
        "album_type": "Live",
        "album_genre": "",
        "album_title": "Rust Never Sleeps",
        "artist_name": "Neil Young",
        "record_label": "Reprise",
        "release_year": "1979"
    },
    {
        "album_id": "4m2880jivSbbyEGAKfITCa",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "295",
        "2023_rank": "295",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Random Access Memories",
        "artist_name": "Daft Punk",
        "record_label": "Columbia",
        "release_year": "2013"
    },
    {
        "album_id": "1xpGyKyV26uPstk1Elgp9Q",
        "2003_rank": "297",
        "2005_rank": "293",
        "2012_rank": "299",
        "2020_rank": "294",
        "2023_rank": "294",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Weezer (The Blue Album)",
        "artist_name": "Weezer",
        "record_label": "Geffen",
        "release_year": "1994"
    },
    {
        "album_id": "57F44c0MTziVzHPEuJtH9A",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "293",
        "2023_rank": "293",
        "album_type": "Compilation",
        "album_genre": "",
        "album_title": "Last Splash",
        "artist_name": "The Breeders",
        "record_label": "Elektra",
        "release_year": "1993"
    },
    {
        "album_id": "7DdEbYFPKTZ8KB4z6L4UnQ",
        "2003_rank": "415",
        "2005_rank": "410",
        "2012_rank": "415",
        "2020_rank": "292",
        "2023_rank": "292",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Van Halen",
        "artist_name": "Van Halen",
        "record_label": "Warner Bros.",
        "release_year": "1978"
    },
    {
        "album_id": "283NWqNsCA9GwVHrJk59CG",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "291",
        "2023_rank": "291",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Writing’s on the Wall",
        "artist_name": "Destiny's Child",
        "record_label": "Columbia",
        "release_year": "1999"
    },
    {
        "album_id": "1UsmQ3bpJTyK6ygoOOjG1r",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "290",
        "2023_rank": "290",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Speakerboxxx/The Love Below",
        "artist_name": "OutKast",
        "record_label": "LaFace",
        "release_year": "2003"
    },
    {
        "album_id": "2Ul7B1LEHxXzYubtkTMENs",
        "2003_rank": "373",
        "2005_rank": "369",
        "2012_rank": "376",
        "2020_rank": "289",
        "2023_rank": "289",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Post",
        "artist_name": "Björk",
        "record_label": "Elektra",
        "release_year": "1995"
    },
    {
        "album_id": "7ro1W6lc4tuTaRyA8rnVm1",
        "2003_rank": "381",
        "2005_rank": "377",
        "2012_rank": "382",
        "2020_rank": "288",
        "2023_rank": "288",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Modern Lovers",
        "artist_name": "The Modern Lovers",
        "record_label": "Beserkley",
        "release_year": "1976"
    },
    {
        "album_id": "0pkrqPjeq9K5KD0hFqAKNa",
        "2003_rank": "232",
        "2005_rank": "228",
        "2012_rank": "233",
        "2020_rank": "287",
        "2023_rank": "287",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Mr. Tambourine Man",
        "artist_name": "The Byrds",
        "record_label": "Columbia",
        "release_year": "1965"
    },
    {
        "album_id": "0fLhefnjlIV3pGNF9Wo8CD",
        "2003_rank": "399",
        "2005_rank": "395",
        "2012_rank": "401",
        "2020_rank": "286",
        "2023_rank": "286",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Californication",
        "artist_name": "Red Hot Chili Peppers",
        "record_label": "Warner Bros.",
        "release_year": "1999"
    },
    {
        "album_id": "0NJYYhhvOATAkUipSJEBDb",
        "2003_rank": "456",
        "2005_rank": "448",
        "2012_rank": "449",
        "2020_rank": "285",
        "2023_rank": "285",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Third/Sister Lovers",
        "artist_name": "Big Star",
        "record_label": "PVC",
        "release_year": "1978"
    },
    {
        "album_id": "40Wi0Ej08sw9B4URIOabOI",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "477",
        "2020_rank": "284",
        "2023_rank": "284",
        "album_type": "Compilation",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Down Every Road 1962-1994",
        "artist_name": "Merle Haggard",
        "record_label": "Capitol",
        "release_year": "1996"
    },
    {
        "album_id": "58GjBhQvLHwfQFJtdP9Oxg",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "283",
        "2023_rank": "283",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Bad Girls",
        "artist_name": "Donna Summer",
        "record_label": "Casablanca",
        "release_year": "1975"
    },
    {
        "album_id": "3GmwKB1tgPZgXeRJZSm9WX",
        "2003_rank": "100",
        "2005_rank": "101",
        "2012_rank": "101",
        "2020_rank": "282",
        "2023_rank": "282",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "In the Wee Small Hours",
        "artist_name": "Frank Sinatra",
        "record_label": "Capitol",
        "release_year": "1955"
    },
    {
        "album_id": "3EfpOFKjotrMQTFTnxrXaB",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "281",
        "2023_rank": "281",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Nilsson Schmilsson",
        "artist_name": "Harry Nilsson",
        "record_label": "RCA",
        "release_year": "1971"
    },
    {
        "album_id": "4ycNE7y1rp5215g1kkqk1P",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "280",
        "2023_rank": "280",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Get Rich or Die Tryin'",
        "artist_name": "50 Cent",
        "record_label": "Interscope",
        "release_year": "2002"
    },
    {
        "album_id": "1To7kv722A8SpZF789MZy7",
        "2003_rank": "311",
        "2005_rank": "307",
        "2012_rank": "313",
        "2020_rank": "279",
        "2023_rank": "279",
        "album_type": "Live",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "MTV Unplugged in New York",
        "artist_name": "Nirvana",
        "record_label": "Geffen",
        "release_year": "1994"
    },
    {
        "album_id": "0GqpoHJREPp0iuXK3HzrHk",
        "2003_rank": "149",
        "2005_rank": "148",
        "2012_rank": "148",
        "2020_rank": "278",
        "2023_rank": "278",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Houses of the Holy",
        "artist_name": "Led Zeppelin",
        "record_label": "Atlantic",
        "release_year": "1973"
    },
    {
        "album_id": "6TqRKHLjDu5QZuC8u5Woij",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "277",
        "2023_rank": "277",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "The Diary of Alicia Keys",
        "artist_name": "Alicia Keys",
        "record_label": "J Records",
        "release_year": "2003"
    },
    {
        "album_id": "35UJLpClj5EDrhpNIi4DFg",
        "2003_rank": "110",
        "2005_rank": "111",
        "2012_rank": "111",
        "2020_rank": "276",
        "2023_rank": "276",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "The Bends",
        "artist_name": "Radiohead",
        "record_label": "Capitol",
        "release_year": "1995"
    },
    {
        "album_id": "1e7dJKGZZaPEsge725g2S8",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "275",
        "2023_rank": "275",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Curtis",
        "artist_name": "Curtis Mayfield",
        "record_label": "Curtom",
        "release_year": "1970"
    },
    {
        "album_id": "02XyFDfvHfIwtqOC3o0PcK",
        "2003_rank": "117",
        "2005_rank": "119",
        "2012_rank": "120",
        "2020_rank": "274",
        "2023_rank": "274",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Sweetheart of the Rodeo",
        "artist_name": "The Byrds",
        "record_label": "Columbia",
        "release_year": "1968"
    },
    {
        "album_id": "7LMOo068Ndv0wjTGUDtYqK",
        "2003_rank": "490",
        "2005_rank": "482",
        "2012_rank": "483",
        "2020_rank": "273",
        "2023_rank": "273",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Entertainment!",
        "artist_name": "Gang of Four",
        "record_label": "Warner Bros.",
        "release_year": "1979"
    },
    {
        "album_id": "2a5vbe7uTRGAshFI80sfAl",
        "2003_rank": "292",
        "2005_rank": "289",
        "2012_rank": "293",
        "2020_rank": "272",
        "2023_rank": "272",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "White Light/White Heat",
        "artist_name": "The Velvet Underground",
        "record_label": "Verve",
        "release_year": "1968"
    },
    {
        "album_id": "5Q3xLiKnY4ShDuQda7qfg2",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "271",
        "2023_rank": "271",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "What’s the 411?",
        "artist_name": "Mary J. Blige",
        "record_label": "Uptown/MCA",
        "release_year": "1992"
    },
    {
        "album_id": "7f6xPqyaolTiziKf5R5Z0c",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "270",
        "2023_rank": "270",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Golden Hour",
        "artist_name": "Kacey Musgraves",
        "record_label": "MCA Nashville",
        "release_year": "2018"
    },
    {
        "album_id": "7D2NdGvBHIavgLhmcwhluK",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "269",
        "2023_rank": "269",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Yeezus",
        "artist_name": "Kanye West",
        "record_label": "Roc-A-Fella",
        "release_year": "2013"
    },
    {
        "album_id": "7ojNQckNp7Tj2BkLJCiiUL",
        "2003_rank": "321",
        "2005_rank": "317",
        "2012_rank": "322",
        "2020_rank": "268",
        "2023_rank": "268",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Sail Away",
        "artist_name": "Randy Newman",
        "record_label": "Reprise",
        "release_year": "1972"
    },
    {
        "album_id": "5viZ5HyYtV0wafK7DoXmgF",
        "2003_rank": "411",
        "2005_rank": "407",
        "2012_rank": "413",
        "2020_rank": "267",
        "2023_rank": "267",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Double Nickels on the Dime",
        "artist_name": "Minutemen",
        "record_label": "SST",
        "release_year": "1984"
    },
    {
        "album_id": "0PT5m6hwPRrpBwIHVnvbFX",
        "2003_rank": "332",
        "2005_rank": "328",
        "2012_rank": "331",
        "2020_rank": "266",
        "2023_rank": "266",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Help!",
        "artist_name": "The Beatles",
        "record_label": "Capitol",
        "release_year": "1965"
    },
    {
        "album_id": "0OHDiDMyxzWJfwtoeHNCf4",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "265",
        "2023_rank": "265",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Wowee Zowee",
        "artist_name": "Pavement",
        "record_label": "Matador",
        "release_year": "1995"
    },
    {
        "album_id": "0bCAjiUamIFqKJsekOYuRw",
        "2003_rank": "209",
        "2005_rank": "207",
        "2012_rank": "211",
        "2020_rank": "264",
        "2023_rank": "264",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Wish You Were Here",
        "artist_name": "Pink Floyd",
        "record_label": "Columbia",
        "release_year": "1975"
    },
    {
        "album_id": "6wCttLq0ADzkPgtRnUihLV",
        "2003_rank": "388",
        "2005_rank": "384",
        "2012_rank": "307",
        "2020_rank": "263",
        "2023_rank": "263",
        "album_type": "Studio",
        "album_genre": "Rock n' Roll/Rhythm & Blues",
        "album_title": "Hard Day's Night",
        "artist_name": "The Beatles",
        "record_label": "United Artists",
        "release_year": "1964"
    },
    {
        "album_id": "6NTrwu1XJ56jBPx7HMksbZ",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "262",
        "2023_rank": "262",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Power, Corruption & Lies",
        "artist_name": "New Order",
        "record_label": "Factory",
        "release_year": "1983"
    },
    {
        "album_id": "7CSP7J60QKIBCqOV64qILq",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "261",
        "2023_rank": "261",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Check Your Head",
        "artist_name": "Beastie Boys",
        "record_label": "Capitol",
        "release_year": "1992"
    },
    {
        "album_id": "0TfUvdJAj5ggwaLihQQ5qs",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "260",
        "2023_rank": "260",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Cut",
        "artist_name": "The Slits",
        "record_label": "Antilles",
        "release_year": "1979"
    },
    {
        "album_id": "6JltsW8Goc3cZQ0GOtTX2z",
        "2003_rank": "122",
        "2005_rank": "124",
        "2012_rank": "125",
        "2020_rank": "259",
        "2023_rank": "259",
        "album_type": "Studio",
        "album_genre": "Blues/Blues ROck",
        "album_title": "Pearl",
        "artist_name": "Janis Joplin",
        "record_label": "Columbia",
        "release_year": "1971"
    },
    {
        "album_id": "3gUlFM3azK6ZIkKz1zK7Nj",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "258",
        "2023_rank": "258",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Hissing of Summer Lawns",
        "artist_name": "Joni Mitchell",
        "record_label": "Asylum",
        "release_year": "1975"
    },
    {
        "album_id": "17CT6ru3CyDXAi6xVaSUzg",
        "2003_rank": "299",
        "2005_rank": "295",
        "2012_rank": "301",
        "2020_rank": "257",
        "2023_rank": "257",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Coat of Many Colors",
        "artist_name": "Dolly Parton",
        "record_label": "RCA",
        "release_year": "1971"
    },
    {
        "album_id": "6hmmX5UP4rIvOpGSaPerV8",
        "2003_rank": "261",
        "2005_rank": "258",
        "2012_rank": "263",
        "2020_rank": "256",
        "2023_rank": "256",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Tracy Chapman",
        "artist_name": "Tracy Chapman",
        "record_label": "Elektra",
        "release_year": "1988"
    },
    {
        "album_id": "0o1uFxZ1VTviqvNaYkTJek",
        "2003_rank": "97",
        "2005_rank": "98",
        "2012_rank": "97",
        "2020_rank": "255",
        "2023_rank": "255",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "The Freewheelin' Bob Dylan",
        "artist_name": "Bob Dylan",
        "record_label": "Columbia",
        "release_year": "1963"
    },
    {
        "album_id": "5fmIolILp5NAtNYiRPjhzA",
        "2003_rank": "Not Ranked",
        "2005_rank": "498",
        "2012_rank": "Not Ranked",
        "2020_rank": "254",
        "2023_rank": "254",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "Head Hunters",
        "artist_name": "Herbie Hancock",
        "record_label": "Columbia",
        "release_year": "1973"
    },
    {
        "album_id": "2Se4ZylF9NkFGD92yv1aZC",
        "2003_rank": "347",
        "2005_rank": "343",
        "2012_rank": "347",
        "2020_rank": "253",
        "2023_rank": "253",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Piper at the Gates of Dawn",
        "artist_name": "Pink Floyd",
        "record_label": "EMI/Columbia",
        "release_year": "1967"
    },
    {
        "album_id": "1u2Qni8cVRptDTaA00fmBC",
        "2003_rank": "447",
        "2005_rank": "439",
        "2012_rank": "442",
        "2020_rank": "252",
        "2023_rank": "252",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Q: Are We Not Men? A: We Are Devo!",
        "artist_name": "Devo",
        "record_label": "Warner Bros.",
        "release_year": "1978"
    },
    {
        "album_id": "2ei2X6ghPnw7YRwQtAH075",
        "2003_rank": "357",
        "2005_rank": "353",
        "2012_rank": "359",
        "2020_rank": "251",
        "2023_rank": "251",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Honky Château",
        "artist_name": "Elton John",
        "record_label": "Uni",
        "release_year": "1972"
    },
    {
        "album_id": "6TxgQwGrbG3XZLNPOEhg7E",
        "2003_rank": "358",
        "2005_rank": "354",
        "2012_rank": "360",
        "2020_rank": "250",
        "2023_rank": "250",
        "album_type": "Compilation",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Singles Going Steady",
        "artist_name": "Buzzcocks",
        "record_label": "I.R.S.",
        "release_year": "1979"
    },
    {
        "album_id": "2MH37enG6IPvNK5QFLyKes",
        "2003_rank": "254",
        "2005_rank": "251",
        "2012_rank": "257",
        "2020_rank": "249",
        "2023_rank": "249",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Whitney Houston",
        "artist_name": "Whitney Houston",
        "record_label": "Arista",
        "release_year": "1985"
    },
    {
        "album_id": "5dN7F9DV0Qg1XRdIgW8rke",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "225",
        "2020_rank": "248",
        "2023_rank": "248",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "American Idiot",
        "artist_name": "Green Day",
        "record_label": "Reprise",
        "release_year": "2004"
    },
    {
        "album_id": "2PfGKHtqEX58bHtkQxJnWG",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "247",
        "2023_rank": "247",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Love Deluxe",
        "artist_name": "Sade",
        "record_label": "Epic",
        "release_year": "1992"
    },
    {
        "album_id": "7p7kcsrdoJ8DKQIMouujcb",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "246",
        "2023_rank": "246",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Mama Said Knock You Out",
        "artist_name": "LL Cool J",
        "record_label": "Def Jam/Columbia",
        "release_year": "1991"
    },
    {
        "album_id": "5lEphbceIgaK1XxWeSrC9E",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "245",
        "2023_rank": "245",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Heaven or Las Vegas",
        "artist_name": "Cocteau Twins",
        "record_label": "4AD",
        "release_year": "1990"
    },
    {
        "album_id": "3WFTGIO6E3Xh4paEOBY9OU",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "244",
        "2023_rank": "244",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "808s & Heartbreak",
        "artist_name": "Kanye West",
        "record_label": "Roc-A-Fella",
        "release_year": "2008"
    },
    {
        "album_id": "6XqM4NINcx3oc7NhOUKxXp",
        "2003_rank": "80",
        "2005_rank": "80",
        "2012_rank": "100",
        "2020_rank": "243",
        "2023_rank": "243",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Odessey and Oracle",
        "artist_name": "The Zombies",
        "record_label": "Date",
        "release_year": "1968"
    },
    {
        "album_id": "4RMGrhJRnGiNqmKqhqpLlX",
        "2003_rank": "109",
        "2005_rank": "110",
        "2012_rank": "110",
        "2020_rank": "242",
        "2023_rank": "242",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Loaded",
        "artist_name": "The Velvet Underground",
        "record_label": "Cotillion",
        "release_year": "1970"
    },
    {
        "album_id": "5mAPk4qeNqVLtNydaWbWlf",
        "2003_rank": "395",
        "2005_rank": "391",
        "2012_rank": "397",
        "2020_rank": "241",
        "2023_rank": "241",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Blue Lines",
        "artist_name": "Massive Attack",
        "record_label": "Wildbunch/Virgin",
        "release_year": "1991"
    },
    {
        "album_id": "3nTXqOEHr6AfTb1WSaB4Pm",
        "2003_rank": "443",
        "2005_rank": "435",
        "2012_rank": "439",
        "2020_rank": "240",
        "2023_rank": "240",
        "album_type": "Live",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Live at the Harlem Square Club, 1963",
        "artist_name": "Sam Cooke",
        "record_label": "RCA",
        "release_year": "1985"
    },
    {
        "album_id": "3AJ15ysr4Hz5p0N2tnNb1F",
        "2003_rank": "444",
        "2005_rank": "436",
        "2012_rank": "Not Ranked",
        "2020_rank": "239",
        "2023_rank": "239",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Criminal Minded",
        "artist_name": "Boogie Down Productions",
        "record_label": "B-Boy",
        "release_year": "1987"
    },
    {
        "album_id": "0HHRIVjvBcnTepfeRVgS2f",
        "2003_rank": "253",
        "2005_rank": "250",
        "2012_rank": "256",
        "2020_rank": "238",
        "2023_rank": "238",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Trans Europe Express",
        "artist_name": "Kraftwerk",
        "record_label": "Kling Klang",
        "release_year": "1977"
    },
    {
        "album_id": "5aEtg4dxdBk4pj6SJ3hNsM",
        "2003_rank": "184",
        "2005_rank": "182",
        "2012_rank": "183",
        "2020_rank": "237",
        "2023_rank": "237",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Red Headed Stranger",
        "artist_name": "Willie Nelson",
        "record_label": "Columbia",
        "release_year": "1975"
    },
    {
        "album_id": "2noRn2Aes5aoNVsU6iWThc",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "236",
        "2023_rank": "236",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Discovery",
        "artist_name": "Daft Punk",
        "record_label": "Virgin",
        "release_year": "2001"
    },
    {
        "album_id": "55fq75UfkYbGMq4CncCtOH",
        "2003_rank": "252",
        "2005_rank": "249",
        "2012_rank": "255",
        "2020_rank": "235",
        "2023_rank": "235",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Metallica (The Black Album)",
        "artist_name": "Metallica",
        "record_label": "Elektra",
        "release_year": "1991"
    },
    {
        "album_id": "7pGb2cOGVz6vLyaZaKOQ7D",
        "2003_rank": "298",
        "2005_rank": "294",
        "2012_rank": "300",
        "2020_rank": "234",
        "2023_rank": "234",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Master of Reality",
        "artist_name": "Black Sabbath",
        "record_label": "Veritgo",
        "release_year": "1971"
    },
    {
        "album_id": "1pFUGy3ABpLRRE3oNMPbDb",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "233",
        "2023_rank": "233",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Little Earthquakes",
        "artist_name": "Tori Amos",
        "record_label": "Atlantic",
        "release_year": "1992"
    },
    {
        "album_id": "6NkgPYCMAzttRIKDpuJrFp",
        "2003_rank": "102",
        "2005_rank": "103",
        "2012_rank": "103",
        "2020_rank": "232",
        "2023_rank": "232",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "Giant Steps",
        "artist_name": "John Coltrane",
        "record_label": "Atlantic",
        "release_year": "1960"
    },
    {
        "album_id": "0qKA3aqubD47jfFVoPfsiy",
        "2003_rank": "314",
        "2005_rank": "309",
        "2012_rank": "315",
        "2020_rank": "231",
        "2023_rank": "231",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Damn the Torpedoes",
        "artist_name": "Tom Petty and the Heartbreakers",
        "record_label": "Backstreet",
        "release_year": "1979"
    },
    {
        "album_id": "48i37aZTC1prDr4EcpQeEa",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "230",
        "2023_rank": "230",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Anti",
        "artist_name": "Rihanna",
        "record_label": "Roc Nation",
        "release_year": "2016"
    },
    {
        "album_id": "1rKW8EB3mRIFqnVRo0Zcot",
        "2003_rank": "234",
        "2005_rank": "230",
        "2012_rank": "235",
        "2020_rank": "229",
        "2023_rank": "229",
        "album_type": "Greatest Hits",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "The Ultimate Collection",
        "artist_name": "Patsy Cline",
        "record_label": "Universal",
        "release_year": "2000"
    },
    {
        "album_id": "5F3GEttPPR58Gg15BKUsTd",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "228",
        "2023_rank": "228",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "De La Soul Is Dead",
        "artist_name": "De La Soul",
        "record_label": "Tommy Boy",
        "release_year": "1991"
    },
    {
        "album_id": "18tV6PLXYvVjsdOVk0S7M8",
        "2003_rank": "50",
        "2005_rank": "50",
        "2012_rank": "50",
        "2020_rank": "227",
        "2023_rank": "227",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Here’s Little Richard",
        "artist_name": "Little Richard",
        "record_label": "Specialty",
        "release_year": "1957"
    },
    {
        "album_id": "5iIWnMgvSM8uEBwXKsPcXM",
        "2003_rank": "115",
        "2005_rank": "117",
        "2012_rank": "117",
        "2020_rank": "226",
        "2023_rank": "226",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Layla and Other Assorted Love Songs",
        "artist_name": "Derek and the Dominos",
        "record_label": "Atco",
        "release_year": "1970"
    },
    {
        "album_id": "0rPtXOMN42nsLDiShvGamv",
        "2003_rank": "Not Ranked",
        "2005_rank": "493",
        "2012_rank": "493",
        "2020_rank": "225",
        "2023_rank": "225",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Yankee Hotel Foxtrot",
        "artist_name": "Wilco",
        "record_label": "Nonesuch",
        "release_year": "2001"
    },
    {
        "album_id": "3y6G5El2I6QrJA9BdfAbqA",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "224",
        "2023_rank": "224",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Fly",
        "artist_name": "Dixie Chicks",
        "record_label": "Monument",
        "release_year": "1999"
    },
    {
        "album_id": "0xzaemKucrJpYhyl7TltAk",
        "2003_rank": "76",
        "2005_rank": "77",
        "2012_rank": "80",
        "2020_rank": "223",
        "2023_rank": "223",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Imagine",
        "artist_name": "John Lennon",
        "record_label": "Apple",
        "release_year": "1971"
    },
    {
        "album_id": "6cuNyrSmRjBeekioLdLkvI",
        "2003_rank": "363",
        "2005_rank": "359",
        "2012_rank": "367",
        "2020_rank": "222",
        "2023_rank": "222",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Ray of Light",
        "artist_name": "Madonna",
        "record_label": "Maverick",
        "release_year": "1998"
    },
    {
        "album_id": "4LaRYkT4oy47wEuQgkLBul",
        "2003_rank": "368",
        "2005_rank": "364",
        "2012_rank": "365",
        "2020_rank": "221",
        "2023_rank": "221",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Rage Against the Machine",
        "artist_name": "Rage Against the Machine",
        "record_label": "Epic",
        "release_year": "1992"
    },
    {
        "album_id": "5bHkK1X4WEOzNvRhehvOcb",
        "2003_rank": "148",
        "2005_rank": "147",
        "2012_rank": "147",
        "2020_rank": "220",
        "2023_rank": "220",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Déjà Vu",
        "artist_name": "Crosby, Stills, Nash, and Young",
        "record_label": "Epic",
        "release_year": "1970"
    },
    {
        "album_id": "7btiyhWzUfzxN3ijSiBpC8",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "480",
        "2020_rank": "219",
        "2023_rank": "219",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Only Built 4 Cuban Linx",
        "artist_name": "Raekwon",
        "record_label": "Loud/RCA",
        "release_year": "1995"
    },
    {
        "album_id": "5eg56dCpFn32neJak2vk0f",
        "2003_rank": "377",
        "2005_rank": "373",
        "2012_rank": "379",
        "2020_rank": "218",
        "2023_rank": "218",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "CrazySexyCool",
        "artist_name": "TLC",
        "record_label": "LaFace",
        "release_year": "1994"
    },
    {
        "album_id": "3AMHMM2aNG6k3d7ybcQ5bY",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "217",
        "2023_rank": "217",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Definitely Maybe",
        "artist_name": "Oasis",
        "record_label": "Epic",
        "release_year": "1994"
    },
    {
        "album_id": "5bmpvyP7UGqB4VuXmrJUMy",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "216",
        "2023_rank": "216",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Either/Or",
        "artist_name": "Elliott Smith",
        "record_label": "Kill Rock Stars",
        "release_year": "1997"
    },
    {
        "album_id": "7rqgm1BnAZ8I4d6hukpkdg",
        "2003_rank": "258",
        "2005_rank": "255",
        "2012_rank": "261",
        "2020_rank": "215",
        "2023_rank": "215",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "American Beauty",
        "artist_name": "Grateful Dead",
        "record_label": "Warner Bros.",
        "release_year": "1970"
    },
    {
        "album_id": "3ZGUBwDiY5HPOcWv4SBPQg",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "214",
        "2023_rank": "214",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Wildflowers",
        "artist_name": "Tom Petty",
        "record_label": "Warner Bros.",
        "release_year": "1994"
    },
    {
        "album_id": "6B5favhKTShFTjRLsKIUfa",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "213",
        "2023_rank": "213",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "The Idler Wheel",
        "artist_name": "Fiona Apple",
        "record_label": "Epic",
        "release_year": "2012"
    },
    {
        "album_id": "2EYVXfypcucR62WMKJl6Mr",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "212",
        "2023_rank": "212",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Wild Is the Wind",
        "artist_name": "Nina Simone",
        "record_label": "Philips",
        "release_year": "1966"
    },
    {
        "album_id": "5Dgqy4bBg09Rdw7CQM545s",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "211",
        "2023_rank": "211",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Unknown Pleasures",
        "artist_name": "Joy Divison",
        "record_label": "Factory",
        "release_year": "1980"
    },
    {
        "album_id": "3RPMCDSd1yj37hlqbizmeT",
        "2003_rank": "53",
        "2005_rank": "54",
        "2012_rank": "54",
        "2020_rank": "210",
        "2023_rank": "210",
        "album_type": "Compilation",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "The Birth of Soul",
        "artist_name": "Ray Charles",
        "record_label": "Atlantic",
        "release_year": "1991"
    },
    {
        "album_id": "7AFsTiojVaB2I58oZ1tMRg",
        "2003_rank": "120",
        "2005_rank": "122",
        "2012_rank": "123",
        "2020_rank": "209",
        "2023_rank": "209",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Raising Hell",
        "artist_name": "Run-DMC",
        "record_label": "Profile",
        "release_year": "1986"
    },
    {
        "album_id": "5BGzOpea6At0Nd7tYtYZOP",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "437",
        "2020_rank": "208",
        "2023_rank": "208",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Tha Carter III",
        "artist_name": "Lil Wayne",
        "record_label": "Cash Money/Universal Motown",
        "release_year": "2008"
    },
    {
        "album_id": "51B7LbLWgYLKBVSpkan8Z7",
        "2003_rank": "374",
        "2005_rank": "370",
        "2012_rank": "368",
        "2020_rank": "207",
        "2023_rank": "207",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Eagles",
        "artist_name": "Eagles",
        "record_label": "Asylum",
        "release_year": "1972"
    },
    {
        "album_id": "2de6LD7eOW8zrlorbS28na",
        "2003_rank": "249",
        "2005_rank": "246",
        "2012_rank": "251",
        "2020_rank": "206",
        "2023_rank": "206",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Low",
        "artist_name": "David Bowie",
        "record_label": "RCA",
        "release_year": "1977"
    },
    {
        "album_id": "44VxbAytHpVi3Rq8hRhild",
        "2003_rank": "206",
        "2005_rank": "204",
        "2012_rank": "208",
        "2020_rank": "205",
        "2023_rank": "205",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Tea for the Tillerman",
        "artist_name": "Cat Stevens",
        "record_label": "A&M",
        "release_year": "1970"
    },
    {
        "album_id": "4SZko61aMnmgvNhfhgTuD3",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "204",
        "2023_rank": "204",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Graduation",
        "artist_name": "Kanye West",
        "record_label": "Roc-A-Fella",
        "release_year": "2007"
    },
    {
        "album_id": "5mwOo1zikswhmfHvtqVSXg",
        "2003_rank": "320",
        "2005_rank": "316",
        "2012_rank": "321",
        "2020_rank": "203",
        "2023_rank": "203",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Pink Moon",
        "artist_name": "Nick Drake",
        "record_label": "Island",
        "release_year": "1979"
    },
    {
        "album_id": "0HMsmYvoT1h2x1C4di5faf",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "202",
        "2023_rank": "202",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Homogenic",
        "artist_name": "Björk",
        "record_label": "Elektra",
        "release_year": "1997"
    },
    {
        "album_id": "4v5x3Oo3UjQ9YmF3hRAip5",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "201",
        "2023_rank": "201",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Midnight Marauders",
        "artist_name": "A Tribe Called Quest",
        "record_label": "Jive",
        "release_year": "1993"
    },
    {
        "album_id": "3JcNnjMVSKiNpqhErZarW0",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "200",
        "2023_rank": "200",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Diamond Life",
        "artist_name": "Sade",
        "record_label": "Epic",
        "release_year": "1984"
    },
    {
        "album_id": "7o14zVcXSRk7clV6QCEdOD",
        "2003_rank": "134",
        "2005_rank": "134",
        "2012_rank": "135",
        "2020_rank": "199",
        "2023_rank": "199",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Slanted and Enchanted",
        "artist_name": "Pavement",
        "record_label": "Matador",
        "release_year": "1993"
    },
    {
        "album_id": "3eXETk1esvZPRluDCWH3GN",
        "2003_rank": "152",
        "2005_rank": "151",
        "2012_rank": "152",
        "2020_rank": "198",
        "2023_rank": "198",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "The B-52's",
        "artist_name": "The B-52's",
        "record_label": "Warner Bros.",
        "release_year": "1979"
    },
    {
        "album_id": "1aYdiJk6XKeHWGO3FzHHTr",
        "2003_rank": "59",
        "2005_rank": "53",
        "2012_rank": "53",
        "2020_rank": "197",
        "2023_rank": "197",
        "album_type": "Studio",
        "album_genre": "Rock n' Roll/Rhythm & Blues",
        "album_title": "Meet the Beatles!",
        "artist_name": "The Beatles",
        "record_label": "Capitol",
        "release_year": "1964"
    },
    {
        "album_id": "0Rzg7fqyWE39G6wKipxrns",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "196",
        "2023_rank": "196",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Body Talk",
        "artist_name": "Robyn",
        "record_label": "Konichiwa",
        "release_year": "2010"
    },
    {
        "album_id": "2Om4oR7plGGub1aYe5uB7B",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "295",
        "2020_rank": "195",
        "2023_rank": "195",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Songs of Leonard Cohen",
        "artist_name": "Leonard Cohen",
        "record_label": "Columbia",
        "release_year": "1967"
    },
    {
        "album_id": "3Us57CjssWnHjTUIXBuIeH",
        "2003_rank": "202",
        "2005_rank": "200",
        "2012_rank": "203",
        "2020_rank": "194",
        "2023_rank": "194",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Bad",
        "artist_name": "Michael Jackson",
        "record_label": "Epic",
        "release_year": "1987"
    },
    {
        "album_id": "5hW8vgOySUKEglHdGmNALK",
        "2003_rank": "392",
        "2005_rank": "388",
        "2012_rank": "309",
        "2020_rank": "193",
        "2023_rank": "193",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Willy and the Poor Boys",
        "artist_name": "Creedence Clearwater Revival",
        "record_label": "Fantasy",
        "release_year": "1969"
    },
    {
        "album_id": "11oR0ZuqB3ucZwb5TGbZxb",
        "2003_rank": "217",
        "2005_rank": "215",
        "2012_rank": "219",
        "2020_rank": "192",
        "2023_rank": "192",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Licensed to Ill",
        "artist_name": "Beastie Boys",
        "record_label": "Def Jam/Columbia",
        "release_year": "1986"
    },
    {
        "album_id": "7rd4PorIOPjPTy7qdUeeCt",
        "2003_rank": "116",
        "2005_rank": "118",
        "2012_rank": "119",
        "2020_rank": "191",
        "2023_rank": "191",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "At Last!",
        "artist_name": "Etta James",
        "record_label": "Argo",
        "release_year": "1961"
    },
    {
        "album_id": "2srjzxgFaYLNh8UlJPAJ8b",
        "2003_rank": "96",
        "2005_rank": "97",
        "2012_rank": "96",
        "2020_rank": "190",
        "2023_rank": "190",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Tommy",
        "artist_name": "The Who",
        "record_label": "Decca",
        "release_year": "1969"
    },
    {
        "album_id": "3tshnNFNhHrO6NUQ0BHw42",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "272",
        "2020_rank": "189",
        "2023_rank": "189",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Dig Me Out",
        "artist_name": "Sleater-Kinney",
        "record_label": "Kill Rock Stars",
        "release_year": "1997"
    },
    {
        "album_id": "4Yw5uS8at8GkWmH2gZmLY0",
        "2003_rank": "160",
        "2005_rank": "159",
        "2012_rank": "160",
        "2020_rank": "188",
        "2023_rank": "188",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Electric Warrior",
        "artist_name": "T. Rex",
        "record_label": "Reprise",
        "release_year": "1971"
    },
    {
        "album_id": "3AI5kAUjgNtZBwFRi6opDc",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "187",
        "2023_rank": "187",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "AmeriKKKa’s Most Wanted",
        "artist_name": "Ice Cube",
        "record_label": "Priority",
        "release_year": "1990"
    },
    {
        "album_id": "1DCI2yWmV4UI7Aga71yx9B",
        "2003_rank": "310",
        "2005_rank": "306",
        "2012_rank": "310",
        "2020_rank": "186",
        "2023_rank": "186",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Blood Sugar Sex Magik",
        "artist_name": "Red Hot Chili Peppers",
        "record_label": "Warner Bros.",
        "release_year": "1991"
    },
    {
        "album_id": "6OHri5qNxwCdVSdyCslspd",
        "2003_rank": "57",
        "2005_rank": "58",
        "2012_rank": "58",
        "2020_rank": "185",
        "2023_rank": "185",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Beggars Banquet",
        "artist_name": "The Rolling Stones",
        "record_label": "Decca",
        "release_year": "1968"
    },
    {
        "album_id": "1FvdZ1oizXwF9bxogujoF0",
        "2003_rank": "494",
        "2005_rank": "486",
        "2012_rank": "487",
        "2020_rank": "184",
        "2023_rank": "184",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "She’s So Unusual",
        "artist_name": "Cyndi Lauper",
        "record_label": "Portrait",
        "release_year": "1983"
    },
    {
        "album_id": "4HTVABUq8amDUxBv3zJbX4",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "183",
        "2023_rank": "183",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Brown Sugar",
        "artist_name": "D'Angelo",
        "record_label": "EMI",
        "release_year": "1995"
    },
    {
        "album_id": "1HiG0ukRmFPN13EVcf98Jx",
        "2003_rank": "103",
        "2005_rank": "104",
        "2012_rank": "104",
        "2020_rank": "182",
        "2023_rank": "182",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Sweet Baby James",
        "artist_name": "James Taylor",
        "record_label": "Warner Bros.",
        "release_year": "1970"
    },
    {
        "album_id": "1lPoRKSgZHQAYXxzBsOQ7v",
        "2003_rank": "31",
        "2005_rank": "31",
        "2012_rank": "31",
        "2020_rank": "181",
        "2023_rank": "181",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Bringing It All Back Home",
        "artist_name": "Bob Dylan",
        "record_label": "Columbia",
        "release_year": "1965"
    },
    {
        "album_id": "2amHBpP8C0EUy6yBNy6nN6",
        "2003_rank": "40",
        "2005_rank": "40",
        "2012_rank": "40",
        "2020_rank": "180",
        "2023_rank": "180",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Forever Changes",
        "artist_name": "Love",
        "record_label": "Elektra",
        "release_year": "1967"
    },
    {
        "album_id": "7dRdaGSxgcBdJnrOviQRuB",
        "2003_rank": "483",
        "2005_rank": "475",
        "2012_rank": "476",
        "2020_rank": "179",
        "2023_rank": "179",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Life After Death",
        "artist_name": "Notorious B.I.G.",
        "record_label": "Bad Boy",
        "release_year": "1997"
    },
    {
        "album_id": "68BCjMsHX4Gf11BJSkjwGz",
        "2003_rank": "74",
        "2005_rank": "75",
        "2012_rank": "78",
        "2020_rank": "178",
        "2023_rank": "178",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Otis Blue",
        "artist_name": "Otis Redding",
        "record_label": "Volt",
        "release_year": "1965"
    },
    {
        "album_id": "4VykjLwkyfKMZVLrJJVrYh",
        "2003_rank": "172",
        "2005_rank": "171",
        "2012_rank": "172",
        "2020_rank": "177",
        "2023_rank": "177",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Every Picture Tells a Story",
        "artist_name": "Rod Stewart",
        "record_label": "Mercury",
        "release_year": "1971"
    },
    {
        "album_id": "0aFNb4RDk2hmKKLa0bzXNz",
        "2003_rank": "300",
        "2005_rank": "296",
        "2012_rank": "302",
        "2020_rank": "176",
        "2023_rank": "176",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Fear of a Black Planet",
        "artist_name": "Public Enemy",
        "record_label": "Def Jam/Columbia",
        "release_year": "1990"
    },
    {
        "album_id": "4eLPsYPBmXABThSJ821sqY",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "175",
        "2023_rank": "175",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "DAMN.",
        "artist_name": "Kendrick Lamar",
        "record_label": "TDE",
        "release_year": "2017"
    },
    {
        "album_id": "4oxdKcC9epGo9viy1j8fN7",
        "2003_rank": "119",
        "2005_rank": "121",
        "2012_rank": "122",
        "2020_rank": "174",
        "2023_rank": "174",
        "album_type": "Soundtrack",
        "album_genre": "Reggae",
        "album_title": "The Harder They Come: Original Soundtrack",
        "artist_name": "Jimmy Cliff and Various Artists",
        "record_label": "Mango",
        "release_year": "1972"
    },
    {
        "album_id": "7wOOA7l306K8HfBKfPoafr",
        "2003_rank": "439",
        "2005_rank": "431",
        "2012_rank": "435",
        "2020_rank": "173",
        "2023_rank": "173",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "In Utero",
        "artist_name": "Nirvana",
        "record_label": "Geffen",
        "release_year": "1993"
    },
    {
        "album_id": "0JwHz5SSvpYWuuCNbtYZoV",
        "2003_rank": "51",
        "2005_rank": "51",
        "2012_rank": "51",
        "2020_rank": "172",
        "2023_rank": "172",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Bridge Over Troubled Water",
        "artist_name": "Simon and Garfunkel",
        "record_label": "Columbia",
        "release_year": "1970"
    },
    {
        "album_id": "3BYlBcND6PeKoW6ZODjZO3",
        "2003_rank": "329",
        "2005_rank": "325",
        "2012_rank": "328",
        "2020_rank": "171",
        "2023_rank": "171",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Daydream Nation",
        "artist_name": "Sonic Youth",
        "record_label": "Enigma",
        "release_year": "1988"
    },
    {
        "album_id": "2fenSS68JI1h4Fo296JfGr",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "Not Ranked",
        "2023_rank": "170",
        "album_type": "Unknown Type",
        "album_genre": "Unknown Genre",
        "album_title": "Folklore",
        "artist_name": "Taylor Swift",
        "record_label": "Republic",
        "release_year": "2020"
    },
    {
        "album_id": "3IILMjMMnoN2sKzgesX8KV",
        "2003_rank": "67",
        "2005_rank": "67",
        "2012_rank": "70",
        "2020_rank": "169",
        "2023_rank": "169",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "The Stranger",
        "artist_name": "Billy Joel",
        "record_label": "Columbia",
        "release_year": "1977"
    },
    {
        "album_id": "6DlSUW5gmq6Byc3osKDJ2p",
        "2003_rank": "238",
        "2005_rank": "235",
        "2012_rank": "240",
        "2020_rank": "168",
        "2023_rank": "168",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Can’t Buy a Thrill",
        "artist_name": "Steely Dan",
        "record_label": "ABC",
        "release_year": "1972"
    },
    {
        "album_id": "5g3Yi15plTSMaq6tYiuw8p",
        "2003_rank": "342",
        "2005_rank": "338",
        "2012_rank": "342",
        "2020_rank": "167",
        "2023_rank": "167",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Violator",
        "artist_name": "Depeche Mode",
        "record_label": "Sire",
        "release_year": "1990"
    },
    {
        "album_id": "2MwhKwYfaGXfCMNKJQr6VA",
        "2003_rank": "92",
        "2005_rank": "92",
        "2012_rank": "92",
        "2020_rank": "166",
        "2023_rank": "166",
        "album_type": "Greatest Hits",
        "album_genre": "Rock n' Roll/Rhythm & Blues",
        "album_title": "20 Golden Greats",
        "artist_name": "Buddy Holly",
        "record_label": "MCA",
        "release_year": "1978"
    },
    {
        "album_id": "4Mw9Gcu1LT7JaipXdwrq1Q",
        "2003_rank": "197",
        "2005_rank": "195",
        "2012_rank": "197",
        "2020_rank": "165",
        "2023_rank": "165",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Murmur",
        "artist_name": "R.E.M.",
        "record_label": "I.R.S.",
        "release_year": "1983"
    },
    {
        "album_id": "4TJIdlY9hGSSTO1kUs1neh",
        "2003_rank": "88",
        "2005_rank": "88",
        "2012_rank": "88",
        "2020_rank": "164",
        "2023_rank": "164",
        "album_type": "Live",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "At Folsom Prison",
        "artist_name": "Johnny Cash",
        "record_label": "Columbia",
        "release_year": "1968"
    },
    {
        "album_id": "3xaCKtqadm4KnviPFKEjs7",
        "2003_rank": "131",
        "2005_rank": "131",
        "2012_rank": "132",
        "2020_rank": "163",
        "2023_rank": "163",
        "album_type": "Soundtrack",
        "album_genre": "Funk/Disco",
        "album_title": "Saturday Night Fever",
        "artist_name": "Various Artists",
        "record_label": "RSO",
        "release_year": "1977"
    },
    {
        "album_id": "3ly9T2L4pqTZijFgQssd3x",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "162",
        "2023_rank": "162",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Different Class",
        "artist_name": "Pulp",
        "record_label": "Island",
        "release_year": "1995"
    },
    {
        "album_id": "6vUWpE8qciYHOhf7mgaGny",
        "2003_rank": "259",
        "2005_rank": "256",
        "2012_rank": "262",
        "2020_rank": "161",
        "2023_rank": "161",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Crosby, Stills & Nash",
        "artist_name": "Crosby, Stills & Nash",
        "record_label": "Atlantic",
        "release_year": "1969"
    },
    {
        "album_id": "5B4PYA7wNN4WdEXdIJu58a",
        "2003_rank": "207",
        "2005_rank": "205",
        "2012_rank": "209",
        "2020_rank": "160",
        "2023_rank": "160",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Ten",
        "artist_name": "Pearl Jam",
        "record_label": "Epic",
        "release_year": "1991"
    },
    {
        "album_id": "5W9OT0a5iZlBr83a9WMKFY",
        "2003_rank": "455",
        "2005_rank": "447",
        "2012_rank": "448",
        "2020_rank": "159",
        "2023_rank": "159",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Synchronicity",
        "artist_name": "The Police",
        "record_label": "A&M",
        "release_year": "1983"
    },
    {
        "album_id": "3cADvHRdKniF9ELCn1zbGH",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "158",
        "2023_rank": "158",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Mama's Gun",
        "artist_name": "Erykah Badu",
        "record_label": "Motown",
        "release_year": "2000"
    },
    {
        "album_id": "2u30gztZTylY4RG7IvfXs8",
        "2003_rank": "376",
        "2005_rank": "372",
        "2012_rank": "378",
        "2020_rank": "157",
        "2023_rank": "157",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "(What's the Story) Morning Glory?",
        "artist_name": "Oasis",
        "record_label": "Epic",
        "release_year": "1995"
    },
    {
        "album_id": "2sOLW5TSgXiLZBacdHxO6m",
        "2003_rank": "239",
        "2005_rank": "236",
        "2012_rank": "241",
        "2020_rank": "156",
        "2023_rank": "156",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Let It Be",
        "artist_name": "The Replacements",
        "record_label": "Twin/Tone",
        "release_year": "1984"
    },
    {
        "album_id": "4FWvo9oS4gRgHtAwDwUjiO",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "349",
        "2020_rank": "155",
        "2023_rank": "155",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The Black Album",
        "artist_name": "Jay-Z",
        "record_label": "Roc-A-Fella",
        "release_year": "2003"
    },
    {
        "album_id": "5pIUimaQ6XePPXbMUi3te0",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "154",
        "2023_rank": "154",
        "album_type": "Live",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Amazing Grace",
        "artist_name": "Aretha Franklin",
        "record_label": "Atlantic",
        "release_year": "1972"
    },
    {
        "album_id": "2fDJpBJhtloxzUENHlU9JB",
        "2003_rank": "405",
        "2005_rank": "401",
        "2012_rank": "406",
        "2020_rank": "153",
        "2023_rank": "153",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Rid of Me",
        "artist_name": "PJ Harvey",
        "record_label": "Island",
        "release_year": "1993"
    },
    {
        "album_id": "6AFFu3ilmlEDz1I9ZaNOZw",
        "2003_rank": "155",
        "2005_rank": "154",
        "2012_rank": "155",
        "2020_rank": "152",
        "2023_rank": "152",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Pretenders",
        "artist_name": "The Pretenders",
        "record_label": "Sire",
        "release_year": "1980"
    },
    {
        "album_id": "34K1Kvskt9arWy8E1Gz3Lw",
        "2003_rank": "480",
        "2005_rank": "472",
        "2012_rank": "472",
        "2020_rank": "151",
        "2023_rank": "151",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Faith",
        "artist_name": "George Michael",
        "record_label": "Columbia",
        "release_year": "1987"
    },
    {
        "album_id": "6yskFQZNlLYhkchAxELHi6",
        "2003_rank": "224",
        "2005_rank": "221",
        "2012_rank": "226",
        "2020_rank": "150",
        "2023_rank": "150",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Nebraska",
        "artist_name": "Bruce Springsteen",
        "record_label": "Columbia",
        "release_year": "1982"
    },
    {
        "album_id": "5t4FHrIAHI8nolSAOBRgPp",
        "2003_rank": "458",
        "2005_rank": "450",
        "2012_rank": "452",
        "2020_rank": "149",
        "2023_rank": "149",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "John Prine",
        "artist_name": "John Prine",
        "record_label": "Atlantic",
        "release_year": "1971"
    },
    {
        "album_id": "392p3shh2jkxUxY2VHvlH8",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "148",
        "2023_rank": "148",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Channel Orange",
        "artist_name": "Frank Ocean",
        "record_label": "Def Jam",
        "release_year": "2012"
    },
    {
        "album_id": "7yQtjAjhtNi76KRu05XWFS",
        "2003_rank": "303",
        "2005_rank": "299",
        "2012_rank": "304",
        "2020_rank": "147",
        "2023_rank": "147",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Grace",
        "artist_name": "Jeff Buckley",
        "record_label": "Columbia",
        "release_year": "1994"
    },
    {
        "album_id": "4M6s2jbhKWEcOdXZ8WiHts",
        "2003_rank": "140",
        "2005_rank": "140",
        "2012_rank": "140",
        "2020_rank": "146",
        "2023_rank": "146",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Parallel Lines",
        "artist_name": "Blondie",
        "record_label": "Chrysalis",
        "release_year": "1978"
    },
    {
        "album_id": "6t7956yu5zYf5A829XRiHC",
        "2003_rank": "302",
        "2005_rank": "298",
        "2012_rank": "244",
        "2020_rank": "145",
        "2023_rank": "145",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The Marshall Mathers LP",
        "artist_name": "Eminem",
        "record_label": "Interscope",
        "release_year": "2000"
    },
    {
        "album_id": "4Q7cPyiP8cMIlUEHAqeYfd",
        "2003_rank": "70",
        "2005_rank": "70",
        "2012_rank": "73",
        "2020_rank": "144",
        "2023_rank": "144",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Physical Graffiti",
        "artist_name": "Led Zeppelin",
        "record_label": "Swan Song",
        "release_year": "1975"
    },
    {
        "album_id": "2Cdd4W17oumNihEt2aPNJB",
        "2003_rank": "314",
        "2005_rank": "310",
        "2012_rank": "316",
        "2020_rank": "143",
        "2023_rank": "143",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "The Velvet Underground",
        "artist_name": "The Velvet Underground",
        "record_label": "MGM",
        "release_year": "1969"
    },
    {
        "album_id": "0PMasrHdpaoIRuHuhHp72O",
        "2003_rank": "85",
        "2005_rank": "85",
        "2012_rank": "86",
        "2020_rank": "142",
        "2023_rank": "142",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Born in the U.S.A.",
        "artist_name": "Bruce Springsteen",
        "record_label": "Columbia",
        "release_year": "1984"
    },
    {
        "album_id": "0DQyTVcDhK9wm0f6RaErWO",
        "2003_rank": "226",
        "2005_rank": "222",
        "2012_rank": "227",
        "2020_rank": "141",
        "2023_rank": "141",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Doolittle",
        "artist_name": "Pixies",
        "record_label": "4AD/Elektra",
        "release_year": "1989"
    },
    {
        "album_id": "39kLAVdcgW7jbMcTEaY2qy",
        "2003_rank": "123",
        "2005_rank": "125",
        "2012_rank": "126",
        "2020_rank": "140",
        "2023_rank": "140",
        "album_type": "Studio",
        "album_genre": "Reggae",
        "album_title": "Catch a Fire",
        "artist_name": "Bob Marley and the Wailers",
        "record_label": "Island",
        "release_year": "1973"
    },
    {
        "album_id": "6r7LZXAVueS5DqdrvXJJK7",
        "2003_rank": "130",
        "2005_rank": "130",
        "2012_rank": "131",
        "2020_rank": "139",
        "2023_rank": "139",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Paranoid",
        "artist_name": "Black Sabbath",
        "record_label": "Vertigo",
        "release_year": "1970"
    },
    {
        "album_id": "5MzwGwnO9gkh0z6Nl4FF8h",
        "2003_rank": "278",
        "2005_rank": "275",
        "2012_rank": "184",
        "2020_rank": "138",
        "2023_rank": "138",
        "album_type": "Greatest Hits",
        "album_genre": "",
        "album_title": "The Immaculate Collection",
        "artist_name": "Madonna",
        "record_label": "Sire",
        "release_year": "1990"
    },
    {
        "album_id": "0Lg1uZvI312TPqxNWShFXL",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "137",
        "2023_rank": "137",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "'21",
        "artist_name": "Adele",
        "record_label": "Columbia",
        "release_year": "2011"
    },
    {
        "album_id": "3ywVzrwMQ3Kq43N9zBdBQm",
        "2003_rank": "486",
        "2005_rank": "478",
        "2012_rank": "479",
        "2020_rank": "136",
        "2023_rank": "136",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Maggot Brain",
        "artist_name": "Funkadelic",
        "record_label": "Westbound",
        "release_year": "1971"
    },
    {
        "album_id": "5vBZRYu2GLA65nfxBvG1a7",
        "2003_rank": "26",
        "2005_rank": "27",
        "2012_rank": "27",
        "2020_rank": "135",
        "2023_rank": "135",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "The Joshua Tree",
        "artist_name": "U2",
        "record_label": "Island",
        "release_year": "1987"
    },
    {
        "album_id": "4z6F5s3RVaOsekuaegbLfD",
        "2003_rank": "477",
        "2005_rank": "469",
        "2012_rank": "469",
        "2020_rank": "134",
        "2023_rank": "134",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The Score",
        "artist_name": "Fugees",
        "record_label": "Columbia",
        "release_year": "1996"
    },
    {
        "album_id": "3Z0qQc09rmk4JYtIaxEx2J",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "133",
        "2023_rank": "133",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Hejira",
        "artist_name": "Joni Mitchell",
        "record_label": "Asylum",
        "release_year": "1976"
    },
    {
        "album_id": "6zIYEv6soMoaZiypsHB5dd",
        "2003_rank": "129",
        "2005_rank": "94",
        "2012_rank": "94",
        "2020_rank": "132",
        "2023_rank": "132",
        "album_type": "Greatest Hits",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "'40 Greatest Hits",
        "artist_name": "Hank Williams",
        "record_label": "Polydor",
        "release_year": "1978"
    },
    {
        "album_id": "3539EbNgIdEDGBKkUf4wno",
        "2003_rank": "419",
        "2005_rank": "414",
        "2012_rank": "419",
        "2020_rank": "131",
        "2023_rank": "131",
        "album_type": "Studio",
        "album_genre": "Electronic",
        "album_title": "Dummy",
        "artist_name": "Portishead",
        "record_label": "Go! Beat",
        "release_year": "1994"
    },
    {
        "album_id": "34MHuXONazzgSxI0cThpAg",
        "2003_rank": "163",
        "2005_rank": "162",
        "2012_rank": "163",
        "2020_rank": "130",
        "2023_rank": "130",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "1999",
        "artist_name": "Prince",
        "record_label": "Warner Bros.",
        "release_year": "1982"
    },
    {
        "album_id": "5Dbax7G8SWrP9xyzkOvy2F",
        "2003_rank": "87",
        "2005_rank": "87",
        "2012_rank": "87",
        "2020_rank": "129",
        "2023_rank": "129",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Wall",
        "artist_name": "Pink Floyd",
        "record_label": "Columbia",
        "release_year": "1979"
    },
    {
        "album_id": "7HVoV2lgVsmuiHsjbbUJB4",
        "2003_rank": "230",
        "2005_rank": "226",
        "2012_rank": "231",
        "2020_rank": "128",
        "2023_rank": "128",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "A Night at the Opera",
        "artist_name": "Queen",
        "record_label": "Elektra",
        "release_year": "1975"
    },
    {
        "album_id": "4j4w5DDWMKD7ePStAl19OF",
        "2003_rank": "104",
        "2005_rank": "105",
        "2012_rank": "105",
        "2020_rank": "127",
        "2023_rank": "127",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Modern Sounds in Country and Western Music",
        "artist_name": "Ray Charles",
        "record_label": "ABC-Paramount",
        "release_year": "1962"
    },
    {
        "album_id": "1OQ5l5rHKqUumPpn559zJC",
        "2003_rank": "279",
        "2005_rank": "276",
        "2012_rank": "281",
        "2020_rank": "126",
        "2023_rank": "126",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "My Life",
        "artist_name": "Mary J. Blige",
        "record_label": "Uptown",
        "release_year": "1994"
    },
    {
        "album_id": "1kmyirVya5fRxdjsPFDM05",
        "2003_rank": "156",
        "2005_rank": "155",
        "2012_rank": "156",
        "2020_rank": "125",
        "2023_rank": "125",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Paul's Boutique",
        "artist_name": "Beastie Boys",
        "record_label": "Capitol",
        "release_year": "1989"
    },
    {
        "album_id": "0ta5VdkJcpdVnNrn7g4cZe",
        "2003_rank": "62",
        "2005_rank": "62",
        "2012_rank": "63",
        "2020_rank": "124",
        "2023_rank": "124",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Achtung Baby",
        "artist_name": "U2",
        "record_label": "Island",
        "release_year": "1991"
    },
    {
        "album_id": "58MQ0PLijVHePUonQlK76Y",
        "2003_rank": "75",
        "2005_rank": "76",
        "2012_rank": "79",
        "2020_rank": "123",
        "2023_rank": "123",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Led Zeppelin II",
        "artist_name": "Led Zeppelin",
        "record_label": "Atlantic",
        "release_year": "1969"
    },
    {
        "album_id": "3nJnyDV8fwFpffo0EyHQto",
        "2003_rank": "200",
        "2005_rank": "198",
        "2012_rank": "201",
        "2020_rank": "122",
        "2023_rank": "122",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "The Downward Spiral",
        "artist_name": "Nine Inch Nails",
        "record_label": "Nothing/Interscope",
        "release_year": "1994"
    },
    {
        "album_id": "4RLIesiAVONV4fOUlOSmr4",
        "2003_rank": "98",
        "2005_rank": "99",
        "2012_rank": "98",
        "2020_rank": "121",
        "2023_rank": "121",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "This Year’s Model",
        "artist_name": "Elvis Costello",
        "record_label": "Columbia",
        "release_year": "1978"
    },
    {
        "album_id": "5PfnCqRbdfIDMb1x3MPQam",
        "2003_rank": "65",
        "2005_rank": "65",
        "2012_rank": "66",
        "2020_rank": "120",
        "2023_rank": "120",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Moondance",
        "artist_name": "Van Morrison",
        "record_label": "Warner Bros.",
        "release_year": "1970"
    },
    {
        "album_id": "7iwS1r6JHYJe9xpPjzmWqD",
        "2003_rank": "118",
        "2005_rank": "120",
        "2012_rank": "121",
        "2020_rank": "119",
        "2023_rank": "119",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Stand!",
        "artist_name": "Sly and the Family Stone",
        "record_label": "Epic",
        "release_year": "1969"
    },
    {
        "album_id": "2widuo17g5CEC66IbzveRu",
        "2003_rank": "37",
        "2005_rank": "37",
        "2012_rank": "37",
        "2020_rank": "118",
        "2023_rank": "118",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Hotel California",
        "artist_name": "The Eagles",
        "record_label": "Asylum",
        "release_year": "1976"
    },
    {
        "album_id": "5ll74bqtkcXlKE7wwkMq4g",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "118",
        "2020_rank": "117",
        "2023_rank": "117",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Late Registration",
        "artist_name": "Kanye West",
        "record_label": "Roc-A-Fella",
        "release_year": "2005"
    },
    {
        "album_id": "0A13JySVHzBoRZFk2o89Wl",
        "2003_rank": "326",
        "2005_rank": "322",
        "2012_rank": "326",
        "2020_rank": "116",
        "2023_rank": "116",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Disintegration",
        "artist_name": "The Cure",
        "record_label": "Fiction",
        "release_year": "1989"
    },
    {
        "album_id": "6PBZN8cbwkqm1ERj2BGXJ1",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "115",
        "2023_rank": "115",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "good kid, m.A.A.d city",
        "artist_name": "Kendrick Lamar",
        "record_label": "TDE",
        "release_year": "2012"
    },
    {
        "album_id": "2k8KgmDp9oHrmu0MIj4XDE",
        "2003_rank": "367",
        "2005_rank": "363",
        "2012_rank": "199",
        "2020_rank": "114",
        "2023_rank": "114",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Is This It",
        "artist_name": "The Strokes",
        "record_label": "RCA",
        "release_year": "2001"
    },
    {
        "album_id": "5Y0p2XCgRRIjna91aQE8q7",
        "2003_rank": "216",
        "2005_rank": "214",
        "2012_rank": "218",
        "2020_rank": "113",
        "2023_rank": "113",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "The Queen Is Dead",
        "artist_name": "The Smiths",
        "record_label": "Sire",
        "release_year": "1986"
    },
    {
        "album_id": "5WupqgR68HfuHt3BMJtgun",
        "2003_rank": "91",
        "2005_rank": "91",
        "2012_rank": "91",
        "2020_rank": "112",
        "2023_rank": "112",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Goodbye Yellow Brick Road",
        "artist_name": "Elton John",
        "record_label": "MCA",
        "release_year": "1973"
    },
    {
        "album_id": "7GWkceE5McMVfffd1RGL6Y",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "111",
        "2023_rank": "111",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Control",
        "artist_name": "Janet Jackson",
        "record_label": "A&M",
        "release_year": "1986"
    },
    {
        "album_id": "2akjxkzFolkeV72Yyv5KrM",
        "2003_rank": "111",
        "2005_rank": "113",
        "2012_rank": "113",
        "2020_rank": "110",
        "2023_rank": "110",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Court and Spark",
        "artist_name": "Joni Mitchell",
        "record_label": "Asylum",
        "release_year": "1974"
    },
    {
        "album_id": "5SqbMEyAt8332ISGiLX0St",
        "2003_rank": "194",
        "2005_rank": "192",
        "2012_rank": "194",
        "2020_rank": "109",
        "2023_rank": "109",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Transformer",
        "artist_name": "Lou Reed",
        "record_label": "RCA",
        "release_year": "1972"
    },
    {
        "album_id": "3o5EnVZNJXtfPV8tCoagjI",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "108",
        "2023_rank": "108",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "When the Pawn ...",
        "artist_name": "Fiona Apple",
        "record_label": "Epic",
        "release_year": "1999"
    },
    {
        "album_id": "630o1rKTDsLeIPreOY1jqP",
        "2003_rank": "128",
        "2005_rank": "139",
        "2012_rank": "130",
        "2020_rank": "107",
        "2023_rank": "107",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Marquee Moon",
        "artist_name": "Television",
        "record_label": "Elektra",
        "release_year": "1977"
    },
    {
        "album_id": "2Rwf2nPYZQ9aIe4QXACTC7",
        "2003_rank": "466",
        "2005_rank": "458",
        "2012_rank": "460",
        "2020_rank": "106",
        "2023_rank": "106",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Live Through This",
        "artist_name": "Hole",
        "record_label": "Geffen",
        "release_year": "1994"
    },
    {
        "album_id": "0Y5Wlv2OJKaW0uDJ5HnUfy",
        "2003_rank": "49",
        "2005_rank": "49",
        "2012_rank": "49",
        "2020_rank": "105",
        "2023_rank": "105",
        "album_type": "Live",
        "album_genre": "Blues/Blues Rock",
        "album_title": "At Fillmore East",
        "artist_name": "The Allman Brothers",
        "record_label": "Capricorn",
        "release_year": "1971"
    },
    {
        "album_id": "29m6DinzdaD0OPqWKGyMdz",
        "2003_rank": "63",
        "2005_rank": "63",
        "2012_rank": "64",
        "2020_rank": "104",
        "2023_rank": "104",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Sticky Fingers",
        "artist_name": "The Rolling Stones",
        "record_label": "Rolling Stones",
        "release_year": "1971"
    },
    {
        "album_id": "34LxHI9x14qXUOS8AWRrYD",
        "2003_rank": "346",
        "2005_rank": "342",
        "2012_rank": "346",
        "2020_rank": "103",
        "2023_rank": "103",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Three Feet High And Rising",
        "artist_name": "De La Soul",
        "record_label": "Tommy Boy",
        "release_year": "1989"
    },
    {
        "album_id": "49kzgMsxHU5CTeb2XmFHjo",
        "2003_rank": "77",
        "2005_rank": "78",
        "2012_rank": "81",
        "2020_rank": "102",
        "2023_rank": "102",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "The Clash",
        "artist_name": "The Clash",
        "record_label": "CBS",
        "release_year": "1977"
    },
    {
        "album_id": "1J8QW9qsMLx3staWaHpQmU",
        "2003_rank": "29",
        "2005_rank": "29",
        "2012_rank": "29",
        "2020_rank": "101",
        "2023_rank": "101",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Led Zeppelin",
        "artist_name": "Led Zeppelin",
        "record_label": "Atlantic",
        "release_year": "1969"
    },
    {
        "album_id": "0ky5kdvfPxSmSpj03hpSAE",
        "2003_rank": "34",
        "2005_rank": "34",
        "2012_rank": "34",
        "2020_rank": "100",
        "2023_rank": "100",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Music From Big Pink",
        "artist_name": "The Band",
        "record_label": "Capitol",
        "release_year": "1968"
    },
    {
        "album_id": "1EoDsNmgTLtmwe1BDAVxV5",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "99",
        "2023_rank": "99",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Red",
        "artist_name": "Taylor Swift",
        "record_label": "Big Machine",
        "release_year": "2012"
    },
    {
        "album_id": "3iC6dJobZulVXp0F4Bojig",
        "2003_rank": "304",
        "2005_rank": "300",
        "2012_rank": "305",
        "2020_rank": "98",
        "2023_rank": "98",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Car Wheels on a Gravel Road",
        "artist_name": "Lucinda Williams",
        "record_label": "Mercury",
        "release_year": "1998"
    },
    {
        "album_id": "5gzLOflH95LkKYE6XSXE9k",
        "2003_rank": "167",
        "2005_rank": "166",
        "2012_rank": "167",
        "2020_rank": "97",
        "2023_rank": "97",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Master of Puppets",
        "artist_name": "Metallica",
        "record_label": "Elektra",
        "release_year": "1986"
    },
    {
        "album_id": "0BiNb8HYR4JvuxUa31Z58Q",
        "2003_rank": "247",
        "2005_rank": "244",
        "2012_rank": "249",
        "2020_rank": "96",
        "2023_rank": "96",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Automatic for the People",
        "artist_name": "R.E.M.",
        "record_label": "Warner Bros.",
        "release_year": "1992"
    },
    {
        "album_id": "6X1x82kppWZmDzlXXK3y3q",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "95",
        "2023_rank": "95",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Take Care",
        "artist_name": "Drake",
        "record_label": "Cash Money",
        "release_year": "2011"
    },
    {
        "album_id": "5qhXaVIC5BdE4a5Kq1FMZG",
        "2003_rank": "191",
        "2005_rank": "189",
        "2012_rank": "191",
        "2020_rank": "94",
        "2023_rank": "94",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Fun House",
        "artist_name": "The Stooges",
        "record_label": "Elektra",
        "release_year": "1970"
    },
    {
        "album_id": "6UkdyvPElK6JDkyeRClbI2",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "93",
        "2023_rank": "93",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Supa Dupa Fly",
        "artist_name": "Missy “Misdemeanor” Elliott",
        "record_label": "Goldmind",
        "release_year": "1997"
    },
    {
        "album_id": "3uFZf8rykoHo7XMIQVYW6r",
        "2003_rank": "82",
        "2005_rank": "82",
        "2012_rank": "83",
        "2020_rank": "92",
        "2023_rank": "92",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Axis: Bold as Love",
        "artist_name": "The Jimi Hendrix Experience",
        "record_label": "Track",
        "release_year": "1967"
    },
    {
        "album_id": "4KT6G8fj8EEIfsyr75hbgc",
        "2003_rank": "151",
        "2005_rank": "150",
        "2012_rank": "150",
        "2020_rank": "91",
        "2023_rank": "91",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Darkness on the Edge of Town",
        "artist_name": "Bruce Springsteen",
        "record_label": "Columbia",
        "release_year": "1978"
    },
    {
        "album_id": "5EVlXlHbRQI8ybuNt4ArXI",
        "2003_rank": "71",
        "2005_rank": "71",
        "2012_rank": "74",
        "2020_rank": "90",
        "2023_rank": "90",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "After the Gold Rush",
        "artist_name": "Neil Young",
        "record_label": "Reprise",
        "release_year": "1970"
    },
    {
        "album_id": "3qr4pTBWEU1SVf01j6RAx3",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "89",
        "2023_rank": "89",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Baduizm",
        "artist_name": "Erykah Badu",
        "record_label": "Kedar",
        "release_year": "1997"
    },
    {
        "album_id": "6fQElzBNTiEMGdIeY0hy5l",
        "2003_rank": "107",
        "2005_rank": "108",
        "2012_rank": "108",
        "2020_rank": "88",
        "2023_rank": "88",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Hunky Dory",
        "artist_name": "David Bowie",
        "record_label": "RCA",
        "release_year": "1971"
    },
    {
        "album_id": "3Q0zkOZEOC855ErOOJ1AdO",
        "2003_rank": "94",
        "2005_rank": "95",
        "2012_rank": "95",
        "2020_rank": "87",
        "2023_rank": "87",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "Bitches Brew",
        "artist_name": "Miles Davis",
        "record_label": "Columbia",
        "release_year": "1970"
    },
    {
        "album_id": "1jWmEhn3ggaL6isoyLfwBn",
        "2003_rank": "42",
        "2005_rank": "42",
        "2012_rank": "42",
        "2020_rank": "86",
        "2023_rank": "86",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "The Doors",
        "artist_name": "The Doors",
        "record_label": "Elektra",
        "release_year": "1967"
    },
    {
        "album_id": "0DFYbYCcHCEJPcN1hODG6K",
        "2003_rank": "22",
        "2005_rank": "23",
        "2012_rank": "23",
        "2020_rank": "85",
        "2023_rank": "85",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Plastic Ono Band",
        "artist_name": "John Lennon",
        "record_label": "Apple",
        "release_year": "1970"
    },
    {
        "album_id": "6mUdeDZCsExyJLMdAfDuwh",
        "2003_rank": "73",
        "2005_rank": "74",
        "2012_rank": "77",
        "2020_rank": "84",
        "2023_rank": "84",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Back in Black",
        "artist_name": "AC/DC",
        "record_label": "Atlantic",
        "release_year": "1980"
    },
    {
        "album_id": "14UrtAcLym4a6f7IgXVGjF",
        "2003_rank": "89",
        "2005_rank": "89",
        "2012_rank": "89",
        "2020_rank": "83",
        "2023_rank": "83",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Dusty in Memphis",
        "artist_name": "Dusty Springfield",
        "record_label": "Atlantic",
        "release_year": "1969"
    },
    {
        "album_id": "29f2cOueckYE8Nc1pkJjrU",
        "2003_rank": "99",
        "2005_rank": "100",
        "2012_rank": "99",
        "2020_rank": "82",
        "2023_rank": "82",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "There’s a Riot Goin’ On",
        "artist_name": "Sly and the Family Stone",
        "record_label": "Epic",
        "release_year": "1971"
    },
    {
        "album_id": "2UJwKSBUz6rtW4QLK74kQu",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "81",
        "2023_rank": "81",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Beyoncé",
        "artist_name": "Beyoncé",
        "record_label": "Parkwood/Columbia",
        "release_year": "2013"
    },
    {
        "album_id": "5fxYu3rqjCNTSPKN8mtEl2",
        "2003_rank": "41",
        "2005_rank": "41",
        "2012_rank": "41",
        "2020_rank": "80",
        "2023_rank": "80",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Never Mind the Bollocks Here’s the Sex Pistols",
        "artist_name": "The Sex Pistols",
        "record_label": "Warner Bros.",
        "release_year": "1977"
    },
    {
        "album_id": "3mH6qwIy9crq0I9YQbOuDf",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "79",
        "2023_rank": "79",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Blond",
        "artist_name": "Frank Ocean",
        "record_label": "Boys Don’t Cry",
        "release_year": "2016"
    },
    {
        "album_id": "15EIDy59KY8d0qVPrWSwoX",
        "2003_rank": "11",
        "2005_rank": "11",
        "2012_rank": "11",
        "2020_rank": "78",
        "2023_rank": "78",
        "album_type": "Compilation",
        "album_genre": "Rock n' Roll/Rhythm & Blues",
        "album_title": "The Sun Sessions",
        "artist_name": "Elvis Presley",
        "record_label": "RCA",
        "release_year": "1976"
    },
    {
        "album_id": "5mQnSrc0cFV6greyhJJIR6",
        "2003_rank": "28",
        "2005_rank": "28",
        "2012_rank": "28",
        "2020_rank": "77",
        "2023_rank": "77",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Who's Next",
        "artist_name": "The Who",
        "record_label": "Decca",
        "release_year": "1971"
    },
    {
        "album_id": "5ljIGCRRvS48V4ADzPGav2",
        "2003_rank": "69",
        "2005_rank": "69",
        "2012_rank": "72",
        "2020_rank": "76",
        "2023_rank": "76",
        "album_type": "Soundtrack",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Superfly",
        "artist_name": "Curtis Mayfield",
        "record_label": "Curtom",
        "release_year": "1972"
    },
    {
        "album_id": "7lEOKZaOpqP70UYqdLPejG",
        "2003_rank": "84",
        "2005_rank": "84",
        "2012_rank": "85",
        "2020_rank": "75",
        "2023_rank": "75",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Lady Soul",
        "artist_name": "Aretha Franklin",
        "record_label": "Atlantic",
        "release_year": "1968"
    },
    {
        "album_id": "4Uv86qWpGTxf7fU7lG5X6F",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "298",
        "2020_rank": "74",
        "2023_rank": "74",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The College Dropout",
        "artist_name": "Kanye West",
        "record_label": "Roc-A-Fella",
        "release_year": "2004"
    },
    {
        "album_id": "3GH4IiI6jQAIvnHVdb5FB6",
        "2003_rank": "219",
        "2005_rank": "217",
        "2012_rank": "221",
        "2020_rank": "73",
        "2023_rank": "73",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Loveless",
        "artist_name": "My Bloody Valentine",
        "record_label": "Sire",
        "release_year": "1991"
    },
    {
        "album_id": "2l3QxNo4QubBNmVKxLeum0",
        "2003_rank": "78",
        "2005_rank": "79",
        "2012_rank": "82",
        "2020_rank": "72",
        "2023_rank": "72",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Harvest",
        "artist_name": "Neil Young",
        "record_label": "Reprise",
        "release_year": "1972"
    },
    {
        "album_id": "6FJxoadUE4JNVwWHghBwnb",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "Not Ranked",
        "2023_rank": "71",
        "album_type": "Unknown Type",
        "album_genre": "Unknown Genre",
        "album_title": "Renaissance",
        "artist_name": "Beyonce",
        "record_label": "Parkwood/Columbia",
        "release_year": "2022"
    },
    {
        "album_id": "0Y7qkJVZ06tS2GUCDptzyW",
        "2003_rank": "144",
        "2005_rank": "144",
        "2012_rank": "144",
        "2020_rank": "70",
        "2023_rank": "70",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Straight Outta Compton",
        "artist_name": "N.W.A",
        "record_label": "Ruthless",
        "release_year": "1988"
    },
    {
        "album_id": "09AwlP99cHfKVNKv4FC8VW",
        "2003_rank": "327",
        "2005_rank": "323",
        "2012_rank": "Not Ranked",
        "2020_rank": "69",
        "2023_rank": "69",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Jagged Little Pill",
        "artist_name": "Alanis Morissette",
        "record_label": "Maverick",
        "release_year": "1995"
    },
    {
        "album_id": "5G5UwqPsxDKpxJLX4xsyuh",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "68",
        "2023_rank": "68",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Hounds of Love",
        "artist_name": "Kate Bush",
        "record_label": "EMI",
        "release_year": "1985"
    },
    {
        "album_id": "3YPK0bNOuayhmSrs0sIIBR",
        "2003_rank": "248",
        "2005_rank": "245",
        "2012_rank": "250",
        "2020_rank": "67",
        "2023_rank": "67",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Reasonable Doubt",
        "artist_name": "Jay-Z",
        "record_label": "Roc-A-Fella",
        "release_year": "1996"
    },
    {
        "album_id": "7Eoz7hJvaX1eFkbpQxC5PA",
        "2003_rank": "47",
        "2005_rank": "47",
        "2012_rank": "47",
        "2020_rank": "66",
        "2023_rank": "66",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "A Love Supreme",
        "artist_name": "John Coltrane",
        "record_label": "Impulse!",
        "release_year": "1965"
    },
    {
        "album_id": "0B6BbyElOe4bwziJrunOTe",
        "2003_rank": "24",
        "2005_rank": "25",
        "2012_rank": "25",
        "2020_rank": "65",
        "2023_rank": "65",
        "album_type": "Live",
        "album_genre": "Funk/Disco",
        "album_title": "Live at the Apollo",
        "artist_name": "James Brown",
        "record_label": "King",
        "release_year": "1963"
    },
    {
        "album_id": "2tm3Ht61kqqRZtIYsBjxEj",
        "2003_rank": "359",
        "2005_rank": "355",
        "2012_rank": "361",
        "2020_rank": "64",
        "2023_rank": "64",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Stankonia",
        "artist_name": "OutKast",
        "record_label": "LaFace",
        "release_year": "2000"
    },
    {
        "album_id": "1hOK2ey9W76x9GnftSRgrw",
        "2003_rank": "145",
        "2005_rank": "145",
        "2012_rank": "145",
        "2020_rank": "63",
        "2023_rank": "63",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Aja",
        "artist_name": "Steely Dan",
        "record_label": "ABC",
        "release_year": "1977"
    },
    {
        "album_id": "28yHV3Gdg30AiB8h8em1eW",
        "2003_rank": "61",
        "2005_rank": "61",
        "2012_rank": "62",
        "2020_rank": "62",
        "2023_rank": "62",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Appetite for Destruction",
        "artist_name": "Guns N’ Roses",
        "record_label": "Geffen",
        "release_year": "1987"
    },
    {
        "album_id": "3miZDfDnP7SmOXAJXWdFmz",
        "2003_rank": "227",
        "2005_rank": "223",
        "2012_rank": "228",
        "2020_rank": "61",
        "2023_rank": "61",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Paid in Full",
        "artist_name": "Eric B. and Rakim",
        "record_label": "4th & B’way",
        "release_year": "1987"
    },
    {
        "album_id": "4pG3bKkbmReDt5QTDn3JDz",
        "2003_rank": "19",
        "2005_rank": "19",
        "2012_rank": "19",
        "2020_rank": "60",
        "2023_rank": "60",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Astral Weeks",
        "artist_name": "Van Morrison",
        "record_label": "Warner Bros.",
        "release_year": "1968"
    },
    {
        "album_id": "3PResMqFgQYBfzTnqTKwQw",
        "2003_rank": "90",
        "2005_rank": "90",
        "2012_rank": "90",
        "2020_rank": "59",
        "2023_rank": "59",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Talking Book",
        "artist_name": "Stevie Wonder",
        "record_label": "Tamla/Motown",
        "release_year": "1972"
    },
    {
        "album_id": "5EyIDBAqhnlkAHqvPRwdbX",
        "2003_rank": "66",
        "2005_rank": "66",
        "2012_rank": "69",
        "2020_rank": "58",
        "2023_rank": "58",
        "album_type": "Studio",
        "album_genre": "Hard Rock/Metal",
        "album_title": "Led Zeppelin IV",
        "artist_name": "Led Zeppelin",
        "record_label": "Atlantic",
        "release_year": "1971"
    },
    {
        "album_id": "4vXFiaDS8zuEl5bOUbW53x",
        "2003_rank": "45",
        "2005_rank": "45",
        "2012_rank": "45",
        "2020_rank": "57",
        "2023_rank": "57",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "The Band",
        "artist_name": "The Band",
        "record_label": "Capitol",
        "release_year": "1969"
    },
    {
        "album_id": "7sCpW2cLGcRk1zf9zi0Yqd",
        "2003_rank": "328",
        "2005_rank": "324",
        "2012_rank": "327",
        "2020_rank": "56",
        "2023_rank": "56",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Exile in Guyville",
        "artist_name": "Liz Phair",
        "record_label": "Matador",
        "release_year": "1993"
    },
    {
        "album_id": "4LH4d3cOWNNsVw41Gqt2kv",
        "2003_rank": "43",
        "2005_rank": "43",
        "2012_rank": "43",
        "2020_rank": "55",
        "2023_rank": "55",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Dark Side of the Moon",
        "artist_name": "Pink Floyd",
        "record_label": "EMI",
        "release_year": "1973"
    },
    {
        "album_id": "2yuTyv0L51qvYuI5RIktlA",
        "2003_rank": "79",
        "2005_rank": "72",
        "2012_rank": "75",
        "2020_rank": "54",
        "2023_rank": "54",
        "album_type": "Compilation",
        "album_genre": "Funk/Disco",
        "album_title": "Star Time",
        "artist_name": "James Brown",
        "record_label": "Polydor",
        "release_year": "1991"
    },
    {
        "album_id": "5z090LQztiqh13wYspQvKQ",
        "2003_rank": "54",
        "2005_rank": "55",
        "2012_rank": "55",
        "2020_rank": "53",
        "2023_rank": "53",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Electric Ladyland",
        "artist_name": "Jimi Hendrix",
        "record_label": "Reprise",
        "release_year": "1968"
    },
    {
        "album_id": "0MWrKayUshRuT8maG4ZAOU",
        "2003_rank": "323",
        "2005_rank": "319",
        "2012_rank": "324",
        "2020_rank": "52",
        "2023_rank": "52",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Station to Station",
        "artist_name": "David Bowie",
        "record_label": "RCA",
        "release_year": "1976"
    },
    {
        "album_id": "4hQtcgvaybCqBsTrfiL1jC",
        "2003_rank": "21",
        "2005_rank": "21",
        "2012_rank": "21",
        "2020_rank": "51",
        "2023_rank": "51",
        "album_type": "Greatest Hits",
        "album_genre": "Rock n' Roll/Rhythm & Blues",
        "album_title": "The Great Twenty-Eight",
        "artist_name": "Chuck Berry",
        "record_label": "Chess",
        "release_year": "1982"
    },
    {
        "album_id": "69CmkikTHkGKdkrUZTtyWl",
        "2003_rank": "464",
        "2005_rank": "456",
        "2012_rank": "252",
        "2020_rank": "50",
        "2023_rank": "50",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The Blueprint",
        "artist_name": "Jay-Z",
        "record_label": "Roc-A-Fella",
        "release_year": "2001"
    },
    {
        "album_id": "5ceB3rxgXqIRpsOvVzTG28",
        "2003_rank": "Not Ranked",
        "2005_rank": "500",
        "2012_rank": "500",
        "2020_rank": "49",
        "2023_rank": "49",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Aquemini",
        "artist_name": "OutKast",
        "record_label": "LaFace",
        "release_year": "1998"
    },
    {
        "album_id": "2mBbV0Ad6B4ydHMZlzAY7S",
        "2003_rank": "169",
        "2005_rank": "168",
        "2012_rank": "169",
        "2020_rank": "71",
        "2023_rank": "48",
        "album_type": "Studio",
        "album_genre": "Reggae",
        "album_title": "Exodus",
        "artist_name": "Bob Marley and the Wailers",
        "record_label": "Island",
        "release_year": "1977"
    },
    {
        "album_id": "3ToX9inehiXTv17hpaOyie",
        "2003_rank": "33",
        "2005_rank": "33",
        "2012_rank": "33",
        "2020_rank": "47",
        "2023_rank": "47",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Ramones",
        "artist_name": "Ramones",
        "record_label": "Sire",
        "release_year": "1976"
    },
    {
        "album_id": "4WoQ94qzwQj28n3nlSOVLB",
        "2003_rank": "81",
        "2005_rank": "81",
        "2012_rank": "71",
        "2020_rank": "46",
        "2023_rank": "46",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Graceland",
        "artist_name": "Paul Simon",
        "record_label": "Columbia",
        "release_year": "1986"
    },
    {
        "album_id": "2QuHyvguNhl5kfdoE17RRe",
        "2003_rank": "93",
        "2005_rank": "93",
        "2012_rank": "93",
        "2020_rank": "45",
        "2023_rank": "45",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Sign O' the Times",
        "artist_name": "Prince",
        "record_label": "Paisley Park/Warner Bros.",
        "release_year": "1987"
    },
    {
        "album_id": "3kEtdS2pH6hKcMU9Wioob1",
        "2003_rank": "400",
        "2005_rank": "396",
        "2012_rank": "402",
        "2020_rank": "44",
        "2023_rank": "44",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Illmatic",
        "artist_name": "Nas",
        "record_label": "Columbia",
        "release_year": "1994"
    },
    {
        "album_id": "1p12OAWwudgMqfMzjMvl2a",
        "2003_rank": "154",
        "2005_rank": "152",
        "2012_rank": "153",
        "2020_rank": "43",
        "2023_rank": "43",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The Low End Theory",
        "artist_name": "A Tribe Called Quest",
        "record_label": "Jive",
        "release_year": "1991"
    },
    {
        "album_id": "6dVIqQ8qmQ5GBnJ9shOYGE",
        "2003_rank": "162",
        "2005_rank": "161",
        "2012_rank": "162",
        "2020_rank": "42",
        "2023_rank": "42",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "OK Computer",
        "artist_name": "Radiohead",
        "record_label": "Capitol",
        "release_year": "1997"
    },
    {
        "album_id": "47hOpZQfXVIRzTiv0Ef8pO",
        "2003_rank": "32",
        "2005_rank": "32",
        "2012_rank": "32",
        "2020_rank": "41",
        "2023_rank": "41",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Let It Bleed",
        "artist_name": "The Rolling Stones",
        "record_label": "ABKCO",
        "release_year": "1969"
    },
    {
        "album_id": "48D1hRORqJq52qsnUYZX56",
        "2003_rank": "35",
        "2005_rank": "35",
        "2012_rank": "35",
        "2020_rank": "40",
        "2023_rank": "40",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
        "artist_name": "David Bowie",
        "record_label": "RCA",
        "release_year": "1972"
    },
    {
        "album_id": "1JvXxLsm0PxlGH4LXzqMGq",
        "2003_rank": "126",
        "2005_rank": "128",
        "2012_rank": "129",
        "2020_rank": "39",
        "2023_rank": "39",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Remain in Light",
        "artist_name": "Talking Heads",
        "record_label": "Sire",
        "release_year": "1980"
    },
    {
        "album_id": "4NP1rhnsPdYpnyJP0p0k0L",
        "2003_rank": "9",
        "2005_rank": "9",
        "2012_rank": "9",
        "2020_rank": "38",
        "2023_rank": "38",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Blonde on Blonde",
        "artist_name": "Bob Dylan",
        "record_label": "Columbia",
        "release_year": "1966"
    },
    {
        "album_id": "2V5rhszUpCudPcb01zevOt",
        "2003_rank": "137",
        "2005_rank": "137",
        "2012_rank": "138",
        "2020_rank": "37",
        "2023_rank": "37",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The Chronic",
        "artist_name": "Dr. Dre",
        "record_label": "Deathrow",
        "release_year": "1992"
    },
    {
        "album_id": "2ZytN2cY4Zjrr9ukb2rqTP",
        "2003_rank": "68",
        "2005_rank": "68",
        "2012_rank": "68",
        "2020_rank": "36",
        "2023_rank": "36",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Off the Wall",
        "artist_name": "Michael Jackson",
        "record_label": "Epic",
        "release_year": "1979"
    },
    {
        "album_id": "50o7kf2wLwVmOTVYJOTplm",
        "2003_rank": "5",
        "2005_rank": "5",
        "2012_rank": "5",
        "2020_rank": "35",
        "2023_rank": "35",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Rubber Soul",
        "artist_name": "The Beatles",
        "record_label": "Parlophone",
        "release_year": "1965"
    },
    {
        "album_id": "5jgI8Eminx9MmLBontDWq8",
        "2003_rank": "23",
        "2005_rank": "24",
        "2012_rank": "24",
        "2020_rank": "34",
        "2023_rank": "34",
        "album_type": "Studio",
        "album_genre": "Funk/Disco",
        "album_title": "Innervisions",
        "artist_name": "Stevie Wonder",
        "record_label": "Tamla/Motown",
        "release_year": "1973"
    },
    {
        "album_id": "097eYvf9NKjFnv4xA9s2oV",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "451",
        "2020_rank": "33",
        "2023_rank": "33",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Back to Black",
        "artist_name": "Amy Winehouse",
        "record_label": "Island",
        "release_year": "2006"
    },
    {
        "album_id": "7dK54iZuOxXFarGhXwEXfF",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "32",
        "2023_rank": "32",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Lemonade",
        "artist_name": "Beyoncé",
        "record_label": "Parkwood/Columbia",
        "release_year": "2016"
    },
    {
        "album_id": "1weenld61qoidwYuZ1GESA",
        "2003_rank": "12",
        "2005_rank": "12",
        "2012_rank": "12",
        "2020_rank": "31",
        "2023_rank": "31",
        "album_type": "Studio",
        "album_genre": "Big Band/Jazz",
        "album_title": "Kind of Blue",
        "artist_name": "Miles Davis",
        "record_label": "Columbia",
        "release_year": "1959"
    },
    {
        "album_id": "7rSZXXHHvIhF4yUFdaOCy9",
        "2003_rank": "15",
        "2005_rank": "15",
        "2012_rank": "15",
        "2020_rank": "30",
        "2023_rank": "30",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Are You Experienced",
        "artist_name": "Jimi Hendrix",
        "record_label": "Track",
        "release_year": "1967"
    },
    {
        "album_id": "1klALx0u4AavZNEvC4LrTL",
        "2003_rank": "10",
        "2005_rank": "10",
        "2012_rank": "10",
        "2020_rank": "29",
        "2023_rank": "29",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "White Album",
        "artist_name": "The Beatles",
        "record_label": "Apple",
        "release_year": "1968"
    },
    {
        "album_id": "2lO9yuuIDgBpSJzxTh3ai8",
        "2003_rank": "488",
        "2005_rank": "480",
        "2012_rank": "481",
        "2020_rank": "28",
        "2023_rank": "28",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Voodoo",
        "artist_name": "D’Angelo",
        "record_label": "EMI",
        "release_year": "2000"
    },
    {
        "album_id": "6acGx168JViE5LLFR1rGRE",
        "2003_rank": "386",
        "2005_rank": "382",
        "2012_rank": "387",
        "2020_rank": "27",
        "2023_rank": "27",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Enter the Wu-Tang(36 Chambers)",
        "artist_name": "Wu-Tang Clan",
        "record_label": "Loud",
        "release_year": "1993"
    },
    {
        "album_id": "0OeuSeP8wp8n8OuTqYb61C",
        "2003_rank": "44",
        "2005_rank": "44",
        "2012_rank": "44",
        "2020_rank": "26",
        "2023_rank": "26",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "Horses",
        "artist_name": "Patti Smith",
        "record_label": "Arista",
        "release_year": "1975"
    },
    {
        "album_id": "12n11cgnpjXKLeqrnIERoS",
        "2003_rank": "36",
        "2005_rank": "36",
        "2012_rank": "36",
        "2020_rank": "25",
        "2023_rank": "25",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Tapestry",
        "artist_name": "Carole King",
        "record_label": "Sony",
        "release_year": "1971"
    },
    {
        "album_id": "6QaVfG1pHYl1z15ZxkvVDW",
        "2003_rank": "1",
        "2005_rank": "1",
        "2012_rank": "1",
        "2020_rank": "24",
        "2023_rank": "24",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Sgt. Pepper’s Lonely Hearts Club Band",
        "artist_name": "The Beatles",
        "record_label": "Capitol",
        "release_year": "1967"
    },
    {
        "album_id": "4xwx0x7k6c5VuThz5qVqmV",
        "2003_rank": "13",
        "2005_rank": "13",
        "2012_rank": "13",
        "2020_rank": "23",
        "2023_rank": "23",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "The Velvet Underground and Nico",
        "artist_name": "The Velvet Underground",
        "record_label": "Verve",
        "release_year": "1967"
    },
    {
        "album_id": "2HTbQ0RHwukKVXAlTmCZP2",
        "2003_rank": "133",
        "2005_rank": "133",
        "2012_rank": "134",
        "2020_rank": "22",
        "2023_rank": "22",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "Ready to Die",
        "artist_name": "The Notorious B.I.G.",
        "record_label": "Bad Boy",
        "release_year": "1994"
    },
    {
        "album_id": "43YIoHKSrEw2GJsWmhZIpu",
        "2003_rank": "18",
        "2005_rank": "18",
        "2012_rank": "18",
        "2020_rank": "21",
        "2023_rank": "21",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Born to Run",
        "artist_name": "Bruce Springsteen",
        "record_label": "Columbia",
        "release_year": "1975"
    },
    {
        "album_id": "6GjwtEZcfenmOf6l18N7T7",
        "2003_rank": "428",
        "2005_rank": "420",
        "2012_rank": "67",
        "2020_rank": "20",
        "2023_rank": "20",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Kid A",
        "artist_name": "Radiohead",
        "record_label": "Parlophone",
        "release_year": "2000"
    },
    {
        "album_id": "7ycBtnsMtyVbbwTfJwRjSP",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "Not Ranked",
        "2020_rank": "19",
        "2023_rank": "19",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "To Pimp a Butterfly",
        "artist_name": "Kendrick Lamar",
        "record_label": "TDE",
        "release_year": "2015"
    },
    {
        "album_id": "6YabPKtZAjxwyWbuO9p4ZD",
        "2003_rank": "4",
        "2005_rank": "4",
        "2012_rank": "4",
        "2020_rank": "18",
        "2023_rank": "18",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Highway 61 Revisited",
        "artist_name": "Bob Dylan",
        "record_label": "Columbia",
        "release_year": "1965"
    },
    {
        "album_id": "20r762YmB5HeofjMCiPMLv",
        "2003_rank": "Not Ranked",
        "2005_rank": "Not Ranked",
        "2012_rank": "353",
        "2020_rank": "17",
        "2023_rank": "17",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "My Beautiful Dark Twisted Fantasy",
        "artist_name": "Kanye West",
        "record_label": "Roc-A-Fella",
        "release_year": "2010"
    },
    {
        "album_id": "6FCzvataOZh68j8OKzOt9a",
        "2003_rank": "8",
        "2005_rank": "8",
        "2012_rank": "8",
        "2020_rank": "16",
        "2023_rank": "16",
        "album_type": "Studio",
        "album_genre": "Punk/Post-Punk/New Wave/Power Pop",
        "album_title": "London Calling",
        "artist_name": "The Clash",
        "record_label": "CBS",
        "release_year": "1979"
    },
    {
        "album_id": "1Rj1daFzMlYzLv7lJl14hz",
        "2003_rank": "48",
        "2005_rank": "48",
        "2012_rank": "48",
        "2020_rank": "15",
        "2023_rank": "15",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "It Takes a Nation of Millions to Hold Us Back",
        "artist_name": "Public Enemy",
        "record_label": "Def Jam",
        "release_year": "1988"
    },
    {
        "album_id": "5U4dnRZsfW8NmwBBkELFPh",
        "2003_rank": "7",
        "2005_rank": "7",
        "2012_rank": "7",
        "2020_rank": "14",
        "2023_rank": "14",
        "album_type": "Studio",
        "album_genre": "Blues/Blues Rock",
        "album_title": "Exile on Main Street",
        "artist_name": "The Rolling Stones",
        "record_label": "Rolling Stones Records",
        "release_year": "1972"
    },
    {
        "album_id": "5WndWfzGwCkHzAbQXVkg2V",
        "2003_rank": "83",
        "2005_rank": "83",
        "2012_rank": "84",
        "2020_rank": "13",
        "2023_rank": "13",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "I Never Loved a Man the Way I Love You",
        "artist_name": "Aretha Franklin",
        "record_label": "Atlantic",
        "release_year": "1967"
    },
    {
        "album_id": "2ANVost0y2y52ema1E9xAZ",
        "2003_rank": "20",
        "2005_rank": "20",
        "2012_rank": "20",
        "2020_rank": "12",
        "2023_rank": "12",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Thriller",
        "artist_name": "Michael Jackson",
        "record_label": "Epic",
        "release_year": "1982"
    },
    {
        "album_id": "3PRoXYsngSwjEQWR5PsHWR",
        "2003_rank": "3",
        "2005_rank": "3",
        "2012_rank": "3",
        "2020_rank": "11",
        "2023_rank": "11",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Revolver",
        "artist_name": "The Beatles",
        "record_label": "Apple",
        "release_year": "1966"
    },
    {
        "album_id": "1BZoqf8Zje5nGdwZhOjAtD",
        "2003_rank": "312",
        "2005_rank": "308",
        "2012_rank": "314",
        "2020_rank": "10",
        "2023_rank": "10",
        "album_type": "Studio",
        "album_genre": "Hip-Hop/Rap",
        "album_title": "The Miseducation of Lauryn Hill",
        "artist_name": "Lauryn Hill",
        "record_label": "Ruffhouse/Columbia",
        "release_year": "1998"
    },
    {
        "album_id": "4WD4pslu83FF6oMa1e19mF",
        "2003_rank": "16",
        "2005_rank": "16",
        "2012_rank": "16",
        "2020_rank": "9",
        "2023_rank": "9",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Blood on the Tracks",
        "artist_name": "Bob Dylan",
        "record_label": "Columbia",
        "release_year": "1975"
    },
    {
        "album_id": "7nXJ5k4XgRj5OLg9m8V3zc",
        "2003_rank": "72",
        "2005_rank": "73",
        "2012_rank": "76",
        "2020_rank": "8",
        "2023_rank": "8",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Purple Rain",
        "artist_name": "Prince and the Revolution",
        "record_label": "Warner Bros.",
        "release_year": "1984"
    },
    {
        "album_id": "1bt6q2SruMsBtcerNVtpZB",
        "2003_rank": "25",
        "2005_rank": "26",
        "2012_rank": "26",
        "2020_rank": "7",
        "2023_rank": "7",
        "album_type": "Studio",
        "album_genre": "Singer-Songwriter/Heartland Rock",
        "album_title": "Rumours",
        "artist_name": "Fleetwood Mac",
        "record_label": "Warner Bros.",
        "release_year": "1977"
    },
    {
        "album_id": "2guirTSEqLizK7j9i1MTTZ",
        "2003_rank": "17",
        "2005_rank": "17",
        "2012_rank": "17",
        "2020_rank": "6",
        "2023_rank": "6",
        "album_type": "Studio",
        "album_genre": "Indie/Alternative Rock",
        "album_title": "Nevermind",
        "artist_name": "Nirvana",
        "record_label": "Geffen",
        "release_year": "1991"
    },
    {
        "album_id": "0ETFjACtuP2ADo6LFhL6HN",
        "2003_rank": "14",
        "2005_rank": "14",
        "2012_rank": "14",
        "2020_rank": "5",
        "2023_rank": "5",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Abbey Road",
        "artist_name": "The Beatles",
        "record_label": "Apple",
        "release_year": "1969"
    },
    {
        "album_id": "6YUCc2RiXcEKS9ibuZxjt0",
        "2003_rank": "56",
        "2005_rank": "57",
        "2012_rank": "57",
        "2020_rank": "4",
        "2023_rank": "4",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "Songs in the Key of Life",
        "artist_name": "Stevie Wonder",
        "record_label": "Tamla/Motown",
        "release_year": "1976"
    },
    {
        "album_id": "1vz94WpXDVYIEGja8cjFNa",
        "2003_rank": "30",
        "2005_rank": "30",
        "2012_rank": "30",
        "2020_rank": "3",
        "2023_rank": "3",
        "album_type": "Studio",
        "album_genre": "Country/Folk/Country Rock/Folk Rock",
        "album_title": "Blue",
        "artist_name": "Joni Mitchell",
        "record_label": "Reprise",
        "release_year": "1971"
    },
    {
        "album_id": "2CNEkSE8TADXRT2AzcEt1b",
        "2003_rank": "2",
        "2005_rank": "2",
        "2012_rank": "2",
        "2020_rank": "2",
        "2023_rank": "2",
        "album_type": "Studio",
        "album_genre": "",
        "album_title": "Pet Sounds",
        "artist_name": "The Beach Boys",
        "record_label": "Capitol",
        "release_year": "1966"
    },
    {
        "album_id": "2v6ANhWhZBUKkg6pJJBs3B",
        "2003_rank": "6",
        "2005_rank": "6",
        "2012_rank": "6",
        "2020_rank": "1",
        "2023_rank": "1",
        "album_type": "Studio",
        "album_genre": "Soul/Gospel/R&B",
        "album_title": "What's Going On",
        "artist_name": "Marvin Gaye",
        "record_label": "Tamla/Motown",
        "release_year": "1971"
    }
];

const artistName = document.getElementById('artist-name');
const albumTitle = document.getElementById('album-title');
const recordLabel = document.getElementById('record-label');
const releaseYear = document.getElementById('release-year');
const rank = document.getElementById('rank');
const randomAlbumButton = document.getElementById('random-album-button');
let currentAlbum;
let rankingHistoryChart; // To store the chart instance
let popularityGaugeChart; // To store the popularity gauge instance

Chart.defaults.font.family = 'Arial, sans-serif';
Chart.defaults.color = '#666';
Chart.defaults.plugins.legend.display = true;

// Function to get a random album
function getRandomAlbum() {
    const randomIndex = Math.floor(Math.random() * albums.length);
    return albums[randomIndex];
}

function toggleInfo() {
    const containerBottom = document.querySelector('.container-bottom');
    containerBottom.classList.toggle('expanded'); // Toggle expanded class
}

// Function to display the album information with the desired formatting
async function displayAlbum(album) {
    artistName.textContent = album.artist_name;
    albumTitle.textContent = album.album_title;
    recordLabel.textContent = `${album.record_label}`;
    releaseYear.textContent = `${album.release_year}`;
    document.getElementById('spotify-link').href = `https://open.spotify.com/album/${album.album_id}`;
    document.getElementById('youtube-link').href = `https://music.youtube.com/search?q=${album.album_title} ${album.artist_name}`;
    document.getElementById('apple-music-link').href = `https://music.apple.com/search?term=${encodeURIComponent(album.album_title)}+${encodeURIComponent(album.artist_name)}`;

    // Fetch and display artist details
    const accessToken = await fetchAccessToken();
    const artistData = await fetchArtistData(album.artist_name, accessToken);
    displayArtistData(artistData);

    if (artistData) {
        // Call displayGenreCloud to render the genre tags and related artist images
        displayGenreCloud(artistData, accessToken);
    
        displayPopularityGaugeInTooltip(artistData.popularity);

        // Fetch related artists' follower counts and display the chart
        const relatedArtists = await fetchRelatedArtistsData(artistData.id, accessToken);
        displayFollowersComparisonChart(artistData.name, artistData.followers.total, relatedArtists);
    }

    // Display current rank for 2023
    let currentRankText = `<strong>${album['2023_rank']}</strong>`;
    document.getElementById('current-rank').innerHTML = currentRankText;

    // Display the timeline for previous years
    let timelineText = `<div class="timeline-container">`;
    timelineText += `<div class="timeline-item ${album['2003_rank'] === "Not Ranked" ? 'disabled' : ''}"><p><strong>${album['2003_rank'] || "Not ranked"}</strong></p><span>(2003)</span></div>`;
    timelineText += `<div class="timeline-item ${album['2005_rank'] === "Not Ranked" ? 'disabled' : ''}"><p><strong>${album['2005_rank'] || "Not ranked"}</strong></p><span>(2005)</span></div>`;
    timelineText += `<div class="timeline-item ${album['2012_rank'] === "Not Ranked" ? 'disabled' : ''}"><p><strong>${album['2012_rank'] || "Not ranked"}</strong></p><span>(2012)</span></div>`;
    timelineText += `<div class="timeline-item ${album['2020_rank'] === "Not Ranked" ? 'disabled' : ''}"><p><strong>${album['2020_rank'] || "Not ranked"}</strong></p><span>(2020)</span></div>`;
    timelineText += `<div class="timeline-item ${album['2023_rank'] === "Not Ranked" ? 'disabled' : ''}"><p><strong>${album['2023_rank'] || "Not ranked"}</strong></p><span>(2023)</span></div>`;
    timelineText += `</div>`;
    document.getElementById('rank-timeline').innerHTML = timelineText;

    // Prepare ranking data for the chart
    const years = ['2003', '2005', '2012', '2020', '2023'];
    const ranks = years.map(year => {
        const rankValue = album[`${year}_rank`];
        return rankValue === "Not Ranked" ? null : parseInt(rankValue);
    });

    displayChart(years, ranks);

// Select top-tag element and its container
const topTag = document.getElementById("top-tag");
const topTagContainer = topTag.parentElement;

// Parse rank for conditions
const rank2023 = parseInt(album["2023_rank"]);

function setTopTag(rank2023) {
    // Reset topTag content and remove any residual class
    topTag.textContent = "";
    topTag.className = "";
    topTagContainer.classList.remove("hide"); // Ensure it's visible by default

    // Apply top-tag conditions
    if (rank2023 <= 10) {
        topTag.textContent = "Top 10";
        topTag.className = "top-10";
    } else if (rank2023 <= 20) {
        topTag.textContent = "Top 20";
        topTag.className = "top-20";
    } else if (rank2023 <= 50) {
        topTag.textContent = "Top 50";
        topTag.className = "top-50";
    } else if (rank2023 <= 100) {
        topTag.textContent = "Top 100";
        topTag.className = "top-100";
    } else if (rank2023 <= 200) {
        topTag.textContent = "Top 200";
        topTag.className = "top-200";
    } else {
        // Hide the container if no condition is met
        topTagContainer.classList.add("hide");
        return; // Exit the function early
    }

    // If a tag is set, ensure the container is visible
    topTagContainer.classList.remove("hide");
}

// Call the function to set the top tag based on the rank
setTopTag(rank2023);



    // Calculate and display rank delta
    const pastRanks = [
        album["2003_rank"] === "Not Ranked" ? null : parseInt(album["2003_rank"]),
        album["2005_rank"] === "Not Ranked" ? null : parseInt(album["2005_rank"]),
        album["2012_rank"] === "Not Ranked" ? null : parseInt(album["2012_rank"]),
        album["2020_rank"] === "Not Ranked" ? null : parseInt(album["2020_rank"])
    ];
    const currentRank = album["2023_rank"] === "Not Ranked" ? null : parseInt(album["2023_rank"]);
    const delta = calculateRankDelta(pastRanks, currentRank);
    const recognitionTag = determineRecognitionTag(album, delta);

    const recognitionTagElement = document.getElementById("recognition-tag");
    recognitionTagElement.textContent = recognitionTag;
    recognitionTagElement.style.display = recognitionTag ? "block" : "none";

    // Display the popularity gauge
    if (artistData) {
        displayPopularityGauge(artistData.popularity);
    }
}

// Fetch the access token from your backend (Vercel API endpoint)
async function fetchAccessToken() {
    try {
        const apiUrl = '/api/spotify-token';
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        return null;
    }
}

// Function to search and fetch artist data from Spotify by name
async function fetchArtistData(artistName, accessToken) {
    try {
        // Fetch artist search data from Spotify API
        const searchResponse = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        const searchData = await searchResponse.json();

        // Ensure that 'artists' and 'items' exist and the 'items' array is not empty
        if (searchData.artists && searchData.artists.items.length > 0) {
            const artistId = searchData.artists.items[0].id;

            // Fetch detailed artist data using the artistId
            const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            });
            const artistData = await artistResponse.json();

            return artistData; // Return the artist data
        } else {
            console.warn(`Artist not found: ${artistName}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching artist data:', error);
        return null;
    }
}


// Function to Fetch Related Artist's Follower Data
async function fetchRelatedArtistsData(artistId, accessToken) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        const data = await response.json();

        // Return the basic related artist data needed for the followers chart
        return data.artists.slice(0, 5).map(artist => ({
            name: artist.name,
            followers: artist.followers.total,
            url: artist.external_urls.spotify // Ensure URL is correct
        }));
    } catch (error) {
        console.error('Error fetching related artists data:', error);
        return [];
    }
}


async function fetchRelatedArtistsWithGenres(artistId, accessToken) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        const data = await response.json();

        // Return detailed related artist data for Genre Cloud
        return data.artists.map(artist => ({
            id: artist.id,
            name: artist.name,
            genres: artist.genres,
            url: artist.external_urls.spotify,
            images: artist.images
        }));
    } catch (error) {
        console.error('Error fetching related artists data with genres:', error);
        return [];
    }
}

async function fetchMostPopularTrack(artistId, accessToken) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        const data = await response.json();

        // Find the track with the highest popularity score
        const mostPopularTrack = data.tracks.reduce((maxTrack, track) => {
            return (track.popularity > (maxTrack?.popularity || 0)) ? track : maxTrack;
        }, null);

        return mostPopularTrack;
    } catch (error) {
        console.error('Error fetching most popular track:', error);
        return null;
    }
}


async function fetchBestAlbum(artistId, accessToken) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=1`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        const data = await response.json();

        // Return the top album if available
        const album = data.items[0];
        return album ? {
            name: album.name,
            url: album.external_urls.spotify,
            images: album.images
        } : null;
    } catch (error) {
        console.error('Error fetching best album:', error);
        return null;
    }
}
async function displayGenreCloud(artistData, accessToken) {
    const genreCloudContainer = document.getElementById('genre-tags');
    genreCloudContainer.innerHTML = ''; // Clear existing content

    const relatedArtistsWithGenres = await fetchRelatedArtistsWithGenres(artistData.id, accessToken);

    const usedArtists = new Set();
    const usedAlbums = new Set();

    for (const genre of artistData.genres.slice(0, 5)) { // Limit to top 5 genres
        const relatedArtist = relatedArtistsWithGenres.find(
            artist => !usedArtists.has(artist.id) && artist.genres.includes(genre)
        );

        if (relatedArtist) {
            usedArtists.add(relatedArtist.id);

            const popularTrack = await fetchMostPopularTrack(relatedArtist.id, accessToken);

            if (popularTrack && popularTrack.album && !usedAlbums.has(popularTrack.album.id)) {
                usedAlbums.add(popularTrack.album.id);
                
                // Create genre tag only if a unique album is found
                const genreTag = document.createElement('div');
                genreTag.className = 'genre-tag';
                genreTag.textContent = genre;

                const albumImg = document.createElement('img');
                albumImg.src = popularTrack.album.images[0]?.url || 'https://iili.io/HlHy9Yx.png';
                albumImg.alt = `${popularTrack.album.name} album cover`;
                albumImg.className = 'related-album-image';
                albumImg.onclick = () => window.open(popularTrack.album.external_urls.spotify, '_blank');

                genreTag.appendChild(albumImg);
                genreCloudContainer.appendChild(genreTag); // Append only if an album is found
            }
        }
    }
}



// Function to display the popularity gauge
function displayPopularityGaugeInTooltip(popularity) {
    const gaugeCanvas = document.getElementById('popularityGaugeTooltip');
    const gaugeCtx = gaugeCanvas.getContext('2d');

    // Reset any existing chart instance in the tooltip
    if (gaugeCanvas.chart) {
        gaugeCanvas.chart.destroy();
    }

    // Create the new gauge chart in the tooltip
    gaugeCanvas.chart = new Chart(gaugeCtx, {
        type: 'doughnut',
        data: {
            labels: ['Popularity'],
            datasets: [{
                data: [popularity, 100 - popularity],
                backgroundColor: [
                    popularity <= 35 ? 'red' :
                    popularity <= 75 ? 'yellow' : 'green',
                    'rgba(200, 200, 200, 0.3)' // Background color
                ],
                borderWidth: 0
            }]
        },
        options: {
            rotation: -90,
            circumference: 180,
            cutout: '70%',
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false }
            }
        }
    });

    // Update the popularity score in the tooltip
    const popularityScoreElement = document.getElementById('popularity-score-tooltip');
    popularityScoreElement.textContent = `Score: ${popularity}`;
}

// Function to display artist data
function displayArtistData(artistData) {
    if (!artistData) {
        //document.getElementById('artist-popularity').textContent = "Popularity: N/A";
        //document.getElementById('artist-followers').textContent = "Followers: N/A";
        //document.getElementById('artist-genres').textContent = "Genres: N/A";
        //document.getElementById('related-artists').textContent = "Related Artists: N/A";
        return;
    }

    //document.getElementById('artist-popularity').textContent = `Popularity: ${artistData.popularity}`;
    //document.getElementById('artist-followers').textContent = `Followers: ${artistData.followers.total.toLocaleString()}`;
    //document.getElementById('artist-genres').textContent = `Genres: ${artistData.genres.join(', ')}`;
    //document.getElementById('related-artists').textContent = `Related Artists: ${artistData.relatedArtists.join(', ')}`;
}

// Function to calculate rank delta and display delta message
function calculateRankDelta(pastRanks, currentRank) {
    const validPastRanks = pastRanks.filter(rank => rank !== null && rank !== currentRank);
    const minRank = validPastRanks.length > 0 ? Math.min(...validPastRanks) : currentRank;
    const delta = minRank - currentRank;
    const deltaTag = document.getElementById("delta-tag");

    let deltaMessage;
    if (validPastRanks.length === 0 || (validPastRanks.length === 1 && validPastRanks[0] === currentRank)) {
        deltaMessage = `Debuted at ${currentRank}`;
        deltaTag.className = "debut";
    } else if (delta > 0) {
        deltaMessage = `↑ ${delta} rank${delta === 1 ? "" : "s"}`;
        deltaTag.className = "up";
    } else if (delta === 0) {
        deltaMessage = `Ranked the same as previous best (${currentRank})`;
        deltaTag.className = "";
    } else {
        deltaMessage = `↓ ${Math.abs(delta)} rank${Math.abs(delta) === 1 ? "" : "s"} from top`;
        deltaTag.className = "down";
    }

    deltaTag.textContent = deltaMessage;
    return delta;
}

// Function to determine the recognition tag based on ranking rules
function determineRecognitionTag(album, delta) {
    const rank2023 = parseInt(album["2023_rank"]);
    const previousRanks = [
        album["2003_rank"] === "Not Ranked" ? null : parseInt(album["2003_rank"]),
        album["2005_rank"] === "Not Ranked" ? null : parseInt(album["2005_rank"]),
        album["2012_rank"] === "Not Ranked" ? null : parseInt(album["2012_rank"])
    ].filter(rank => rank !== null);

    const hasRecentRanksOnly = previousRanks.length === 0 && (album["2020_rank"] || album["2023_rank"]);

    // Business Rule 1: New Entry
    if (hasRecentRanksOnly) {
        return "New Entry";
    }

    // Business Rule 2: Climbing the Pantheon
    if (rank2023 <= 20 && previousRanks.every(r => rank2023 < r) && previousRanks.length === 4) {
        return "Climbing the Pantheon";
    }

    // Positive delta: Improvements in rank
    if (delta > 0) {
        if (delta >= 150) {
            return "Major Rise in Recognition";
        } else if (delta >= 51) {
            return "Rise in Recognition";
        } else if (delta >= 20) {
            return "Upward Correction";
        }
    }

    // Negative delta: Declines in rank
    if (delta < 0) {
        if (delta <= -150) {
            return "Sharp Decline in Recognition";
        } else if (delta <= -51) {
            return "Decline in Recognition";
        } else if (delta <= -20) {
            return "Downward Correction";
        }
    }

    // Stable Mainstay: Only applies if the delta is within ±20
    if (Math.abs(delta) <= 20) {
        return "Stable Mainstay";
    }

    // Business Rule 10: Return to Glory
    if (album["2023_rank"] && album["2020_rank"] && album["2012_rank"] && !album["2003_rank"] && !album["2005_rank"]) {
        return "Return to Glory";
    }

    return ""; // Default: no tag if none of the conditions are met
}

// Function to display album cover and other details
async function displayAlbumWithCover(album) {
    const accessToken = await fetchAccessToken();
    try {
        const coverUrl = await getAlbumCover(album.album_title, album.artist_name, accessToken);
        document.getElementById('album-cover').src = coverUrl || 'path/to/default-image.jpg';
    } catch (error) {
        document.getElementById('album-cover').src = 'path/to/default-image.jpg';
    }
    displayAlbum(album);
}

// Function to fetch album cover
async function getAlbumCover(albumTitle, artistName, accessToken) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=album:${encodeURIComponent(albumTitle)}%20artist:${encodeURIComponent(artistName)}&type=album&limit=1`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        
        // Check if album cover is available
        if (data.albums.items.length > 0) {
            return data.albums.items[0].images[0].url;
        } else {
            // No album cover found, fetch artist image as a fallback
            return await getArtistImage(artistName, accessToken);
        }
    } catch (error) {
        console.error('Error fetching album cover:', error);
        return null;
    }
}

// Function to fetch artist image
async function getArtistImage(artistName, accessToken) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = await response.json();

        // Check if artist image is available
        if (data.artists.items.length > 0) {
            return data.artists.items[0].images[0].url;
        } else {
            // Fallback image if neither album nor artist image is found
            return 'path/to/default-image.jpg';
        }
    } catch (error) {
        console.error('Error fetching artist image:', error);
        return 'path/to/default-image.jpg';
    }
}


// Function to display the ranking history chart
function displayChart(labels, data) {
    if (rankingHistoryChart) {
        rankingHistoryChart.destroy();
    }

    const ctx = document.getElementById('rankingHistoryChart').getContext('2d');
    rankingHistoryChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Ranking Over Time',
                data: data,
                fill: 'start',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 1,
                pointRadius: 5,
                tension: 0.1,
                spanGaps: true
            }]
        },
        options: {
            animation: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#333',
                        font: {
                            size: 14,
                            family: 'Arial, sans-serif',
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    reverse: true,
                    min: 0,
                    max: 500,
                    ticks: {
                        stepSize: 50,
                        color: '#666',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Ranking',
                        color: '#444',
                        font: {
                            size: 14
                        }
                    }
                },
                x: {
                    ticks: {
                        color: '#666',
                        font: {
                            size: 12
                        }
                    },
                    title: {
                        display: true,
                        text: 'Year',
                        color: '#444',
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });
}

//Function for the bar chart
let followerComparisonChart; // Store the chart instance globally for updates

async function displayFollowersComparisonChart(artistName, artistFollowers, relatedArtists) {
    const ctx = document.getElementById('followerComparisonChart').getContext('2d');

    // Destroy the existing chart instance if it exists
    if (followerComparisonChart) {
        followerComparisonChart.destroy();
    }

    // Prepare data for the new chart
    const artistNames = [artistName, ...relatedArtists.map(artist => artist.name)];
    const followersCounts = [artistFollowers, ...relatedArtists.map(artist => artist.followers)];
    const artistUrls = [null, ...relatedArtists.map(artist => artist.url)];

    // Create a new chart instance with updated data
    followerComparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: artistNames,
            datasets: [{
                label: 'Follower Count',
                data: followersCounts,
                backgroundColor: ['#a29bfe', '#81ecec', '#fd79a8', '#ffeaa7', '#fab1a0', '#74b9ff'],
                borderColor: '#2d3436',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const url = artistUrls[index];
                    if (url) {
                        window.open(url, '_blank'); // Open the artist's Spotify page
                    }
                }
            },
            onHover: (event, chartElement) => {
                // Change cursor to pointer on hover if hovering over a chart element
                const chart = event.chart;
                chart.canvas.style.cursor = chartElement[0] ? 'pointer' : 'default';
            },
            plugins: {
                title: {
                    display: true,
                    text: `Spotify Followers: ${artistName} vs. Similar Artists`
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Followers Count'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Artists'
                    }
                }
            }
        }
    });

    // Add custom click event handling for label clicks
    document.getElementById('followerComparisonChart').addEventListener('click', function(event) {
        const chart = followerComparisonChart;
        const elements = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true });

        // Check if a label (artist name) was clicked
        if (elements.length > 0) {
            const index = elements[0].index; // Get index of clicked label
            const url = artistUrls[index]; // Get the corresponding Spotify URL
            if (url) {
                window.open(url, '_blank'); // Open Spotify link in a new tab
            }
        }
    });

    // Ensure cursor change for bars and labels
    document.getElementById('followerComparisonChart').addEventListener('mousemove', function(event) {
        const chart = followerComparisonChart;
        const elementsAtEvent = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true });

        // Change cursor to pointer when hovering over bars or labels
        if (elementsAtEvent.length > 0) {
            chart.canvas.style.cursor = 'pointer'; // Pointer on bar or label hover
        } else {
            chart.canvas.style.cursor = 'default'; // Default cursor outside chart area
        }
    });
}

// Initialize a random album on page load
function initializeRandomAlbum() {
    currentAlbum = getRandomAlbum();
    displayAlbumWithCover(currentAlbum);
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', initializeRandomAlbum);

// Event listener for the random album button
randomAlbumButton.onclick = function() {
    currentAlbum = getRandomAlbum();
    displayAlbumWithCover(currentAlbum);
};

// Search Bar and Autocomplete
const searchBar = document.getElementById('search-bar');
const autocompleteList = document.getElementById('autocomplete-list');

searchBar.addEventListener('input', function() {
    const term = this.value.toLowerCase();
    autocompleteList.innerHTML = '';

    if (term) {
        const suggestions = albums.filter(album =>
            album.artist_name.toLowerCase().includes(term) ||
            album.album_title.toLowerCase().includes(term)
        );

        suggestions.slice(0, 10).forEach(album => {
            const suggestionItem = document.createElement('div');
            suggestionItem.innerHTML = `<strong>${album.artist_name}</strong> - ${album.album_title}`;
            suggestionItem.addEventListener('click', async () => {
                currentAlbum = album;
                await displayAlbumWithCover(currentAlbum);
                searchBar.value = '';
                autocompleteList.innerHTML = '';
            });
            autocompleteList.appendChild(suggestionItem);
        });
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== searchBar) {
        autocompleteList.innerHTML = '';
    }
});
