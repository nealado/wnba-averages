//HELPERS
var data = [{
    "fn": "Shay",
    "ln": "Murphy",
    "pid": "201062",
    "pos": "G",
    "avg": {
      "gp": 17,
      "gs": 0,
      "min": 7.4,
      "fgp": 0.4,
      "tpp": 0.45,
      "ftp": 0.667,
      "oreb": 0.2,
      "dreb": 0.7,
      "reb": 0.9,
      "ast": 0.6,
      "stl": 0.2,
      "blk": 0.1,
      "tov": 0.4,
      "pf": 0.8,
      "pts": 2.2
    },
    "hcc": "USC",
    "ht": "5-11",
    "dob": "1985-04-15",
    "num": "7",
    "y": 9,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Sequoia",
    "ln": "Holmes",
    "pid": "201530",
    "pos": "G",
    "avg": {
      "gp": 27,
      "gs": 3,
      "min": 11.3,
      "fgp": 0.344,
      "tpp": 0.292,
      "ftp": 0.615,
      "oreb": 0.5,
      "dreb": 0.4,
      "reb": 0.9,
      "ast": 0.9,
      "stl": 0.5,
      "blk": 0.2,
      "tov": 0.4,
      "pf": 0.9,
      "pts": 3.3
    },
    "hcc": "Nevada-Las Vegas",
    "ht": "6-1",
    "dob": "1986-06-13",
    "num": "17",
    "y": 3,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Sydney",
    "ln": "Colson",
    "pid": "202641",
    "pos": "G",
    "avg": {
      "gp": 28,
      "gs": 4,
      "min": 11.6,
      "fgp": 0.33,
      "tpp": 0.2,
      "ftp": 0.688,
      "oreb": 0.1,
      "dreb": 0.4,
      "reb": 0.5,
      "ast": 2,
      "stl": 0.5,
      "blk": 0.1,
      "tov": 1,
      "pf": 1.3,
      "pts": 2.9
    },
    "hcc": "Texas A&M",
    "ht": "5-8",
    "dob": "1989-08-06",
    "num": "51",
    "y": 4,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Alex",
    "ln": "Montgomery",
    "pid": "202652",
    "pos": "G-F",
    "avg": {
      "gp": 34,
      "gs": 31,
      "min": 23.5,
      "fgp": 0.37,
      "tpp": 0.307,
      "ftp": 0.826,
      "oreb": 1.1,
      "dreb": 4.6,
      "reb": 5.7,
      "ast": 2.1,
      "stl": 0.6,
      "blk": 0.3,
      "tov": 1.4,
      "pf": 2.4,
      "pts": 6
    },
    "hcc": "Georgia Tech",
    "ht": "6-1",
    "dob": "1988-11-12",
    "num": "6",
    "y": 7,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Kayla",
    "ln": "Alexander",
    "pid": "203405",
    "pos": "C",
    "avg": {
      "gp": 34,
      "gs": 10,
      "min": 15.4,
      "fgp": 0.582,
      "tpp": 0,
      "ftp": 0.909,
      "oreb": 1.3,
      "dreb": 1.8,
      "reb": 3.1,
      "ast": 0.5,
      "stl": 0.4,
      "blk": 0.5,
      "tov": 0.9,
      "pf": 2,
      "pts": 6.2
    },
    "hcc": "Syracuse",
    "ht": "6-4",
    "dob": "1991-01-05",
    "num": "40",
    "y": 5,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Kayla",
    "ln": "McBride",
    "pid": "203825",
    "pos": "G",
    "avg": {
      "gp": 30,
      "gs": 29,
      "min": 33.2,
      "fgp": 0.381,
      "tpp": 0.31,
      "ftp": 0.925,
      "oreb": 0.5,
      "dreb": 3.7,
      "reb": 4.1,
      "ast": 2.6,
      "stl": 1.1,
      "blk": 0.2,
      "tov": 1.9,
      "pf": 1.4,
      "pts": 15.4
    },
    "hcc": "Notre Dame",
    "ht": "5-11",
    "dob": "1992-06-25",
    "num": "21",
    "y": 4,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Dearica",
    "ln": "Hamby",
    "pid": "204324",
    "pos": "F",
    "avg": {
      "gp": 34,
      "gs": 3,
      "min": 20.2,
      "fgp": 0.457,
      "tpp": 0.375,
      "ftp": 0.608,
      "oreb": 1.5,
      "dreb": 2.8,
      "reb": 4.2,
      "ast": 1,
      "stl": 0.9,
      "blk": 0.3,
      "tov": 1.4,
      "pf": 2.1,
      "pts": 7.8
    },
    "hcc": "Wake Forest",
    "ht": "6-3",
    "dob": "1993-11-06",
    "num": "5",
    "y": 3,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Isabelle",
    "ln": "Harrison",
    "pid": "204330",
    "pos": "C",
    "avg": {
      "gp": 34,
      "gs": 33,
      "min": 26.6,
      "fgp": 0.5,
      "tpp": 0.5,
      "ftp": 0.635,
      "oreb": 2.1,
      "dreb": 4.2,
      "reb": 6.4,
      "ast": 1.4,
      "stl": 0.8,
      "blk": 0.7,
      "tov": 2,
      "pf": 3,
      "pts": 11.4
    },
    "hcc": "Tennessee",
    "ht": "6-3",
    "dob": "1993-09-27",
    "num": "20",
    "y": 2,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Cierra",
    "ln": "Burdick",
    "pid": "204332",
    "pos": "F",
    "avg": {
      "gp": 4,
      "gs": 0,
      "min": 12.5,
      "fgp": 0.818,
      "tpp": 0,
      "ftp": 0,
      "oreb": 0.5,
      "dreb": 1,
      "reb": 1.5,
      "ast": 1.3,
      "stl": 0.3,
      "blk": 0,
      "tov": 1,
      "pf": 3.3,
      "pts": 4.5
    },
    "hcc": "Tennessee",
    "ht": "6-2",
    "dob": "1993-09-30",
    "num": "11",
    "y": 3,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Moriah",
    "ln": "Jefferson",
    "pid": "1627669",
    "pos": "G",
    "avg": {
      "gp": 21,
      "gs": 9,
      "min": 24.5,
      "fgp": 0.523,
      "tpp": 0.45,
      "ftp": 0.741,
      "oreb": 0.3,
      "dreb": 1.5,
      "reb": 1.8,
      "ast": 4.4,
      "stl": 1.6,
      "blk": 0.1,
      "tov": 2,
      "pf": 1.7,
      "pts": 9.1
    },
    "hcc": "Connecticut",
    "ht": "5-6",
    "dob": "1994-03-08",
    "num": "4",
    "y": 2,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Nia",
    "ln": "Coffey",
    "pid": "1628269",
    "pos": "F",
    "avg": {
      "gp": 27,
      "gs": 1,
      "min": 7.8,
      "fgp": 0.271,
      "tpp": 0,
      "ftp": 0.727,
      "oreb": 0.6,
      "dreb": 1.2,
      "reb": 1.9,
      "ast": 0.2,
      "stl": 0.2,
      "blk": 0.2,
      "tov": 0.6,
      "pf": 1.3,
      "pts": 1.8
    },
    "hcc": "Northwestern",
    "ht": "6-1",
    "dob": "1995-06-11",
    "num": "12",
    "y": 1,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Kelsey",
    "ln": "Plum",
    "pid": "1628276",
    "pos": "G",
    "avg": {
      "gp": 31,
      "gs": 23,
      "min": 22.9,
      "fgp": 0.346,
      "tpp": 0.365,
      "ftp": 0.87,
      "oreb": 0.4,
      "dreb": 1.5,
      "reb": 1.9,
      "ast": 3.4,
      "stl": 0.5,
      "blk": 0.1,
      "tov": 2.5,
      "pf": 1.8,
      "pts": 8.5
    },
    "hcc": "Washington",
    "ht": "5-8",
    "dob": "1994-08-24",
    "num": "10",
    "y": 1,
    "tn": "Aces 🎰",
    "tc": "Las Vegas"
  },
  {
    "fn": "Sancho",
    "ln": "Lyttle",
    "pid": "101023",
    "pos": "F",
    "avg": {
      "ftp": 0.759,
      "gs": 28,
      "gp": 29,
      "stl": 1.6,
      "fgp": 0.435,
      "min": 28.3,
      "tov": 1.3,
      "oreb": 1.7,
      "ast": 1.6,
      "pf": 2.8,
      "blk": 0.6,
      "tpp": 0.25,
      "reb": 7.1,
      "dreb": 5.4,
      "pts": 6.4
    },
    "hcc": "Houston",
    "ht": "6-4",
    "dob": "1983-09-20",
    "num": "20",
    "y": 12,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Tamera",
    "ln": "Young",
    "pid": "201477",
    "pos": "F",
    "avg": {
      "ftp": 0.615,
      "gs": 1,
      "gp": 11,
      "stl": 0.3,
      "fgp": 0.322,
      "min": 15.5,
      "tov": 0.7,
      "oreb": 0.5,
      "ast": 0.7,
      "pf": 1.4,
      "blk": 0.5,
      "tpp": 0.333,
      "reb": 2.3,
      "dreb": 1.8,
      "pts": 4.5
    },
    "hcc": "James Madison",
    "ht": "6-2",
    "dob": "1986-10-30",
    "num": "11",
    "y": 9,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Matee",
    "ln": "Ajavon",
    "pid": "201492",
    "pos": "G",
    "avg": {
      "ftp": 0.795,
      "gs": 2,
      "gp": 31,
      "stl": 0.4,
      "fgp": 0.289,
      "min": 8.1,
      "tov": 0.9,
      "oreb": 0.3,
      "ast": 1,
      "pf": 1,
      "blk": 0,
      "tpp": 0,
      "reb": 1.2,
      "dreb": 0.9,
      "pts": 2.4
    },
    "hcc": "Rutgers",
    "ht": "5-8",
    "dob": "1986-05-07",
    "num": "10",
    "y": 9,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Aneika",
    "ln": "Morello",
    "pid": "202623",
    "pos": "F-C",
    "avg": {
      "ftp": 0,
      "gs": 0,
      "gp": 6,
      "stl": 0.3,
      "fgp": 0.857,
      "min": 5.2,
      "tov": 0.5,
      "oreb": 0.2,
      "ast": 0.3,
      "pf": 1.2,
      "blk": 0,
      "tpp": 0,
      "reb": 1,
      "dreb": 0.8,
      "pts": 2
    },
    "hcc": "Florida",
    "ht": "6-4",
    "dob": "1986-02-13",
    "num": "13",
    "y": 5,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Damiris",
    "ln": "Dantas",
    "pid": "203024",
    "pos": "F",
    "avg": {
      "ftp": 0.767,
      "gs": 2,
      "gp": 34,
      "stl": 0.5,
      "fgp": 0.392,
      "min": 18.1,
      "tov": 0.8,
      "oreb": 1,
      "ast": 0.7,
      "pf": 2.3,
      "blk": 0.6,
      "tpp": 0.265,
      "reb": 3.6,
      "dreb": 2.6,
      "pts": 7.7
    },
    "hcc": "Brazil",
    "ht": "6-3",
    "dob": "1992-11-17",
    "num": "12",
    "y": 2,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Tiffany",
    "ln": "Hayes",
    "pid": "203026",
    "pos": "G",
    "avg": {
      "ftp": 0.854,
      "gs": 33,
      "gp": 33,
      "stl": 1.2,
      "fgp": 0.436,
      "min": 29.9,
      "tov": 1.9,
      "oreb": 0.9,
      "ast": 2.4,
      "pf": 3.1,
      "blk": 0.2,
      "tpp": 0.372,
      "reb": 3.8,
      "dreb": 2.9,
      "pts": 16.3
    },
    "hcc": "Connecticut",
    "ht": "5-10",
    "dob": "1989-09-20",
    "num": "15",
    "y": 5,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Layshia",
    "ln": "Clarendon",
    "pid": "203406",
    "pos": "G",
    "avg": {
      "ftp": 0.879,
      "gs": 33,
      "gp": 34,
      "stl": 0.9,
      "fgp": 0.378,
      "min": 29.9,
      "tov": 2.6,
      "oreb": 0.9,
      "ast": 6.6,
      "pf": 2.9,
      "blk": 0.1,
      "tpp": 0.18,
      "reb": 3.8,
      "dreb": 2.9,
      "pts": 10.7
    },
    "hcc": "California",
    "ht": "5-9",
    "dob": "1991-05-02",
    "num": "23",
    "y": 4,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Elizabeth",
    "ln": "Williams",
    "pid": "204322",
    "pos": "C-F",
    "avg": {
      "ftp": 0.659,
      "gs": 34,
      "gp": 34,
      "stl": 1.1,
      "fgp": 0.485,
      "min": 31.4,
      "tov": 1.4,
      "oreb": 3.1,
      "ast": 1.4,
      "pf": 2.4,
      "blk": 2,
      "tpp": 0,
      "reb": 7.2,
      "dreb": 4.1,
      "pts": 10.4
    },
    "hcc": "Duke",
    "ht": "6-3",
    "dob": "1993-06-23",
    "num": "1",
    "y": 2,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Imani",
    "ln": "Boyette",
    "pid": "1627677",
    "pos": "C",
    "avg": {
      "ftp": 0.5,
      "gs": 0,
      "gp": 10,
      "stl": 0.1,
      "fgp": 0.542,
      "min": 9,
      "tov": 0.3,
      "oreb": 1.2,
      "ast": 0.2,
      "pf": 1,
      "blk": 0.7,
      "tpp": 0,
      "reb": 2.9,
      "dreb": 1.7,
      "pts": 2.9
    },
    "hcc": "Texas",
    "ht": "6-7",
    "dob": "1994-10-11",
    "num": "34",
    "y": 1,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Bria",
    "ln": "Holmes",
    "pid": "1627678",
    "pos": "F",
    "avg": {
      "ftp": 0.64,
      "gs": 13,
      "gp": 32,
      "stl": 0.7,
      "fgp": 0.378,
      "min": 22.2,
      "tov": 1.1,
      "oreb": 1,
      "ast": 1.8,
      "pf": 1.4,
      "blk": 0.2,
      "tpp": 0.189,
      "reb": 2.9,
      "dreb": 1.9,
      "pts": 7.8
    },
    "hcc": "West Virginia",
    "ht": "6-1",
    "dob": "1994-04-19",
    "num": "32",
    "y": 1,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Brittney",
    "ln": "Sykes",
    "pid": "1628279",
    "pos": "G",
    "avg": {
      "ftp": 0.729,
      "gs": 23,
      "gp": 34,
      "stl": 0.6,
      "fgp": 0.408,
      "min": 25.4,
      "tov": 1.7,
      "oreb": 0.8,
      "ast": 1.9,
      "pf": 2.5,
      "blk": 0.5,
      "tpp": 0.336,
      "reb": 4.1,
      "dreb": 3.3,
      "pts": 13.9
    },
    "hcc": "Syracuse",
    "ht": "5-9",
    "dob": "1994-02-07",
    "num": "7",
    "y": 0,
    "tn": "Dream 💤",
    "tc": "Atlanta"
  },
  {
    "fn": "Candice",
    "ln": "Dupree",
    "pid": "200676",
    "pos": "F",
    "avg": {
      "ftp": 0.882,
      "gs": 33,
      "gp": 33,
      "stl": 0.9,
      "fgp": 0.494,
      "min": 31.8,
      "tov": 1.4,
      "oreb": 1.1,
      "ast": 1.6,
      "pf": 1.9,
      "blk": 0.5,
      "tpp": 0,
      "reb": 5.8,
      "dreb": 4.7,
      "pts": 15
    },
    "hcc": "Temple",
    "ht": "6-2",
    "dob": "1984-08-16",
    "num": "4",
    "y": 11,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Erlana",
    "ln": "Larkins",
    "pid": "201503",
    "pos": "F",
    "avg": {
      "ftp": 0.912,
      "gs": 17,
      "gp": 34,
      "stl": 0.5,
      "fgp": 0.581,
      "min": 18.8,
      "tov": 1.2,
      "oreb": 1.9,
      "ast": 1.1,
      "pf": 2.1,
      "blk": 0.3,
      "tpp": 0,
      "reb": 4.2,
      "dreb": 2.3,
      "pts": 4.9
    },
    "hcc": "North Carolina",
    "ht": "6-1",
    "dob": "1986-04-02",
    "num": "2",
    "y": 7,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Marissa",
    "ln": "Coleman",
    "pid": "201889",
    "pos": "G-F",
    "avg": {
      "ftp": 0.833,
      "gs": 23,
      "gp": 34,
      "stl": 0.3,
      "fgp": 0.327,
      "min": 18.7,
      "tov": 1.1,
      "oreb": 0.2,
      "ast": 1,
      "pf": 1.2,
      "blk": 0.1,
      "tpp": 0.322,
      "reb": 2,
      "dreb": 1.8,
      "pts": 4.9
    },
    "hcc": "Maryland",
    "ht": "6-1",
    "dob": "1987-01-04",
    "num": "25",
    "y": 8,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Briann",
    "ln": "January",
    "pid": "201896",
    "pos": "G",
    "avg": {
      "ftp": 0.817,
      "gs": 24,
      "gp": 25,
      "stl": 0.9,
      "fgp": 0.395,
      "min": 26.3,
      "tov": 2.1,
      "oreb": 0.5,
      "ast": 3.9,
      "pf": 2.8,
      "blk": 0.2,
      "tpp": 0.316,
      "reb": 1.5,
      "dreb": 1,
      "pts": 9.5
    },
    "hcc": "Arizona State",
    "ht": "5-8",
    "dob": "1987-01-11",
    "num": "20",
    "y": 8,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Jeanette",
    "ln": "Pohlen-Mavunga",
    "pid": "202656",
    "pos": "G",
    "avg": {
      "ftp": 0.826,
      "gs": 0,
      "gp": 29,
      "stl": 0.2,
      "fgp": 0.405,
      "min": 12.9,
      "tov": 0.6,
      "oreb": 0.1,
      "ast": 0.7,
      "pf": 0.8,
      "blk": 0,
      "tpp": 0.385,
      "reb": 1,
      "dreb": 0.8,
      "pts": 3.4
    },
    "hcc": "Stanford",
    "ht": "6-0",
    "dob": "1989-05-02",
    "num": "32",
    "y": 5,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Shenise",
    "ln": "Johnson",
    "pid": "203018",
    "pos": "G",
    "avg": {
      "ftp": 0.95,
      "gs": 13,
      "gp": 14,
      "stl": 1.5,
      "fgp": 0.433,
      "min": 24.9,
      "tov": 1.3,
      "oreb": 0.9,
      "ast": 2.5,
      "pf": 1.9,
      "blk": 0.3,
      "tpp": 0.333,
      "reb": 3.4,
      "dreb": 2.5,
      "pts": 11.3
    },
    "hcc": "Miami (Fla.)",
    "ht": "5-11",
    "dob": "1990-12-08",
    "num": "42",
    "y": 5,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Natalie",
    "ln": "Achonwa",
    "pid": "203831",
    "pos": "C",
    "avg": {
      "ftp": 0.763,
      "gs": 17,
      "gp": 34,
      "stl": 0.4,
      "fgp": 0.557,
      "min": 18.3,
      "tov": 0.9,
      "oreb": 1.1,
      "ast": 0.7,
      "pf": 2.2,
      "blk": 0.5,
      "tpp": 0,
      "reb": 3.7,
      "dreb": 2.6,
      "pts": 7.1
    },
    "hcc": "Notre Dame",
    "ht": "6-4",
    "dob": "1992-11-22",
    "num": "11",
    "y": 2,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Jennifer",
    "ln": "Hamson",
    "pid": "203845",
    "pos": "C",
    "avg": {
      "ftp": 0.857,
      "gs": 0,
      "gp": 12,
      "stl": 0.1,
      "fgp": 0.556,
      "min": 7.2,
      "tov": 0.4,
      "oreb": 0.5,
      "ast": 0.2,
      "pf": 1.1,
      "blk": 0.9,
      "tpp": 0,
      "reb": 2.1,
      "dreb": 1.6,
      "pts": 2.2
    },
    "hcc": "Brigham Young",
    "ht": "6-7",
    "dob": "1992-01-23",
    "num": "5",
    "y": 1,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Erica",
    "ln": "Wheeler",
    "pid": "204365",
    "pos": "G",
    "avg": {
      "ftp": 0.792,
      "gs": 26,
      "gp": 34,
      "stl": 1.4,
      "fgp": 0.4,
      "min": 26.4,
      "tov": 2.3,
      "oreb": 0.3,
      "ast": 4.1,
      "pf": 2.3,
      "blk": 0,
      "tpp": 0.331,
      "reb": 2.2,
      "dreb": 1.9,
      "pts": 11.8
    },
    "hcc": "Rutgers",
    "ht": "5-7",
    "dob": "1991-05-02",
    "num": "17",
    "y": 2,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Tiffany",
    "ln": "Mitchell",
    "pid": "1627676",
    "pos": "G",
    "avg": {
      "ftp": 0.922,
      "gs": 9,
      "gp": 27,
      "stl": 1.1,
      "fgp": 0.349,
      "min": 24.9,
      "tov": 1.5,
      "oreb": 0.6,
      "ast": 1.4,
      "pf": 2.2,
      "blk": 0.2,
      "tpp": 0.246,
      "reb": 3.2,
      "dreb": 2.6,
      "pts": 10.3
    },
    "hcc": "South Carolina",
    "ht": "5-9",
    "dob": "1994-09-23",
    "num": "3",
    "y": 1,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Jazmon",
    "ln": "Gwathmey",
    "pid": "1627681",
    "pos": "G",
    "avg": {
      "ftp": 0.75,
      "gs": 7,
      "gp": 28,
      "stl": 0.5,
      "fgp": 0.36,
      "min": 17.1,
      "tov": 1.3,
      "oreb": 0.6,
      "ast": 0.8,
      "pf": 2.8,
      "blk": 0.8,
      "tpp": 0.236,
      "reb": 2,
      "dreb": 1.4,
      "pts": 6.2
    },
    "hcc": "James Madison",
    "ht": "6-2",
    "dob": "1993-01-24",
    "num": "1",
    "y": 1,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Erica",
    "ln": "McCall",
    "pid": "1628286",
    "pos": "F",
    "avg": {
      "ftp": 0.682,
      "gs": 1,
      "gp": 30,
      "stl": 0.1,
      "fgp": 0.406,
      "min": 10.7,
      "tov": 0.7,
      "oreb": 0.7,
      "ast": 0.2,
      "pf": 1.2,
      "blk": 0.3,
      "tpp": 0.333,
      "reb": 2.3,
      "dreb": 1.6,
      "pts": 3.3
    },
    "hcc": "Stanford",
    "ht": "6-2",
    "dob": "1995-08-21",
    "num": "22",
    "y": 0,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Jennie",
    "ln": "Simms",
    "pid": "1628287",
    "pos": "G",
    "avg": {
      "ftp": 0.5,
      "gs": 0,
      "gp": 4,
      "stl": 0.5,
      "fgp": 0.308,
      "min": 13.5,
      "tov": 0.8,
      "oreb": 0.3,
      "ast": 0.5,
      "pf": 1.3,
      "blk": 0,
      "tpp": 0.333,
      "reb": 1.3,
      "dreb": 1,
      "pts": 2.8
    },
    "hcc": "Old Dominion",
    "ht": "6-0",
    "dob": "1994-04-21",
    "num": "7",
    "y": 0,
    "tn": "Fever 🌡",
    "tc": "Indiana"
  },
  {
    "fn": "Kia",
    "ln": "Vaughn",
    "pid": "201913",
    "pos": "C",
    "avg": {
      "ftp": 0.583,
      "gs": 22,
      "gp": 28,
      "stl": 0.4,
      "fgp": 0.536,
      "min": 19.6,
      "tov": 0.8,
      "oreb": 1.9,
      "ast": 0.7,
      "pf": 2,
      "blk": 0.4,
      "tpp": 0,
      "reb": 4.9,
      "dreb": 3,
      "pts": 5.8
    },
    "hcc": "Rutgers",
    "ht": "6-4",
    "dob": "1987-01-24",
    "num": "7",
    "y": 8,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Shavonte",
    "ln": "Zellous",
    "pid": "201919",
    "pos": "G",
    "avg": {
      "ftp": 0.823,
      "gs": 34,
      "gp": 34,
      "stl": 0.9,
      "fgp": 0.423,
      "min": 29.1,
      "tov": 1.9,
      "oreb": 1,
      "ast": 2.8,
      "pf": 3.4,
      "blk": 0.2,
      "tpp": 0.333,
      "reb": 4,
      "dreb": 3,
      "pts": 11.7
    },
    "hcc": "Pittsburgh",
    "ht": "5-10",
    "dob": "1986-08-28",
    "num": "1",
    "y": 8,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Tina",
    "ln": "Charles",
    "pid": "202250",
    "pos": "C",
    "avg": {
      "ftp": 0.804,
      "gs": 34,
      "gp": 34,
      "stl": 0.8,
      "fgp": 0.442,
      "min": 32.2,
      "tov": 2.4,
      "oreb": 2,
      "ast": 2.6,
      "pf": 2.2,
      "blk": 0.7,
      "tpp": 0.348,
      "reb": 9.4,
      "dreb": 7.3,
      "pts": 19.7
    },
    "hcc": "Connecticut",
    "ht": "6-4",
    "dob": "1988-12-05",
    "num": "31",
    "y": 7,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Epiphanny",
    "ln": "Prince",
    "pid": "202259",
    "pos": "G",
    "avg": {
      "ftp": 0.878,
      "gs": 25,
      "gp": 28,
      "stl": 1.3,
      "fgp": 0.401,
      "min": 26.8,
      "tov": 1.3,
      "oreb": 1.1,
      "ast": 2.9,
      "pf": 1.8,
      "blk": 0.3,
      "tpp": 0.344,
      "reb": 3.6,
      "dreb": 2.5,
      "pts": 12
    },
    "hcc": "Rutgers",
    "ht": "5-9",
    "dob": "1988-01-11",
    "num": "10",
    "y": 7,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Sugar",
    "ln": "Rodgers",
    "pid": "203411",
    "pos": "G",
    "avg": {
      "ftp": 0.815,
      "gs": 15,
      "gp": 33,
      "stl": 0.9,
      "fgp": 0.339,
      "min": 25.6,
      "tov": 1.6,
      "oreb": 0.7,
      "ast": 2.3,
      "pf": 2.3,
      "blk": 0.5,
      "tpp": 0.342,
      "reb": 3.8,
      "dreb": 3.1,
      "pts": 10.5
    },
    "hcc": "Georgetown",
    "ht": "5-9",
    "dob": "1989-12-08",
    "num": "14",
    "y": 4,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Bria",
    "ln": "Hartley",
    "pid": "203829",
    "pos": "G",
    "avg": {
      "ftp": 0.744,
      "gs": 24,
      "gp": 34,
      "stl": 0.6,
      "fgp": 0.416,
      "min": 21.4,
      "tov": 1.4,
      "oreb": 0.3,
      "ast": 2.1,
      "pf": 1.6,
      "blk": 0.1,
      "tpp": 0.345,
      "reb": 2.1,
      "dreb": 1.8,
      "pts": 7.8
    },
    "hcc": "Connecticut",
    "ht": "5-8",
    "dob": "1992-09-30",
    "num": "8",
    "y": 3,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Rebecca",
    "ln": "Allen",
    "pid": "204296",
    "pos": "G",
    "avg": {
      "ftp": 0.333,
      "gs": 0,
      "gp": 33,
      "stl": 0.4,
      "fgp": 0.376,
      "min": 9.2,
      "tov": 0.5,
      "oreb": 0.4,
      "ast": 0.5,
      "pf": 1.1,
      "blk": 0.4,
      "tpp": 0.341,
      "reb": 2,
      "dreb": 1.6,
      "pts": 2.8
    },
    "hcc": "Australia",
    "ht": "6-2",
    "dob": "1992-11-06",
    "num": "9",
    "y": 2,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Amanda",
    "ln": "Zahui B",
    "pid": "204320",
    "pos": "C",
    "avg": {
      "ftp": 0.75,
      "gs": 0,
      "gp": 29,
      "stl": 0.2,
      "fgp": 0.4,
      "min": 5.3,
      "tov": 0.5,
      "oreb": 0.3,
      "ast": 0.3,
      "pf": 1.2,
      "blk": 0.2,
      "tpp": 0.25,
      "reb": 1.1,
      "dreb": 0.8,
      "pts": 2.2
    },
    "hcc": "Minnesota",
    "ht": "6-5",
    "dob": "1993-09-08",
    "num": "17",
    "y": 2,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Brittany",
    "ln": "Boyd",
    "pid": "204327",
    "pos": "G",
    "avg": {
      "ftp": 0.727,
      "gs": 2,
      "gp": 2,
      "stl": 1.5,
      "fgp": 0.6,
      "min": 16,
      "tov": 1,
      "oreb": 1.5,
      "ast": 2.5,
      "pf": 2.5,
      "blk": 0,
      "tpp": 0,
      "reb": 4,
      "dreb": 2.5,
      "pts": 13
    },
    "hcc": "California",
    "ht": "5-9",
    "dob": "1993-06-11",
    "num": "15",
    "y": 2,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Kiah",
    "ln": "Stokes",
    "pid": "204329",
    "pos": "C",
    "avg": {
      "ftp": 0.796,
      "gs": 12,
      "gp": 34,
      "stl": 0.4,
      "fgp": 0.531,
      "min": 19.6,
      "tov": 1.2,
      "oreb": 2.3,
      "ast": 0.9,
      "pf": 2.8,
      "blk": 1.1,
      "tpp": 0,
      "reb": 6.3,
      "dreb": 4,
      "pts": 4.8
    },
    "hcc": "Connecticut",
    "ht": "6-3",
    "dob": "1993-03-30",
    "num": "41",
    "y": 2,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Nayo",
    "ln": "Raincock-Ekunwe",
    "pid": "1628248",
    "pos": "F-C",
    "avg": {
      "ftp": 0.59,
      "gs": 2,
      "gp": 32,
      "stl": 0.2,
      "fgp": 0.526,
      "min": 9.2,
      "tov": 0.5,
      "oreb": 0.9,
      "ast": 0.3,
      "pf": 1.5,
      "blk": 0,
      "tpp": 0,
      "reb": 1.8,
      "dreb": 0.9,
      "pts": 3.7
    },
    "hcc": "Simon Fraser (Canada)",
    "ht": "6-2",
    "dob": "1991-08-29",
    "num": "4",
    "y": 0,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Lindsay",
    "ln": "Allen",
    "pid": "1628263",
    "pos": "G",
    "avg": {
      "ftp": 0.7,
      "gs": 0,
      "gp": 28,
      "stl": 0.6,
      "fgp": 0.371,
      "min": 13.4,
      "tov": 0.7,
      "oreb": 0.4,
      "ast": 2.2,
      "pf": 0.9,
      "blk": 0,
      "tpp": 0,
      "reb": 1.5,
      "dreb": 1.1,
      "pts": 1.9
    },
    "hcc": "Notre Dame",
    "ht": "5-8",
    "dob": "1995-03-20",
    "num": "12",
    "y": 0,
    "tn": "Liberty 🗽",
    "tc": "New York"
  },
  {
    "fn": "Plenette",
    "ln": "Pierson",
    "pid": "100888",
    "pos": "F",
    "avg": {
      "ftp": 0.792,
      "gs": 4,
      "gp": 34,
      "stl": 0.4,
      "fgp": 0.427,
      "min": 13.7,
      "tov": 1,
      "oreb": 0.4,
      "ast": 1.5,
      "pf": 1.4,
      "blk": 0.1,
      "tpp": 0.339,
      "reb": 2.2,
      "dreb": 1.8,
      "pts": 5.2
    },
    "hcc": "Texas Tech",
    "ht": "6-2",
    "dob": "1981-08-31",
    "num": "22",
    "y": 14,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Lindsay",
    "ln": "Whalen",
    "pid": "100915",
    "pos": "G",
    "avg": {
      "ftp": 0.75,
      "gs": 22,
      "gp": 22,
      "stl": 0.5,
      "fgp": 0.451,
      "min": 23.6,
      "tov": 2,
      "oreb": 0.4,
      "ast": 4.1,
      "pf": 1.7,
      "blk": 0.1,
      "tpp": 0.353,
      "reb": 2.5,
      "dreb": 2.1,
      "pts": 8
    },
    "hcc": "Minnesota",
    "ht": "5-9",
    "dob": "1982-05-09",
    "num": "13",
    "y": 13,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Rebekkah",
    "ln": "Brunson",
    "pid": "100944",
    "pos": "F",
    "avg": {
      "ftp": 0.711,
      "gs": 30,
      "gp": 30,
      "stl": 1.1,
      "fgp": 0.449,
      "min": 26.9,
      "tov": 1.6,
      "oreb": 1.7,
      "ast": 1.5,
      "pf": 2.3,
      "blk": 0.4,
      "tpp": 0.348,
      "reb": 6.7,
      "dreb": 5,
      "pts": 10.2
    },
    "hcc": "Georgetown",
    "ht": "6-2",
    "dob": "1981-12-11",
    "num": "32",
    "y": 13,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Jia",
    "ln": "Perkins",
    "pid": "100952",
    "pos": "G",
    "avg": {
      "ftp": 0.833,
      "gs": 2,
      "gp": 34,
      "stl": 1.1,
      "fgp": 0.369,
      "min": 16.3,
      "tov": 0.8,
      "oreb": 0.3,
      "ast": 1.4,
      "pf": 1.2,
      "blk": 0,
      "tpp": 0.316,
      "reb": 2,
      "dreb": 1.7,
      "pts": 4.2
    },
    "hcc": "Texas Tech",
    "ht": "5-8",
    "dob": "1982-02-23",
    "num": "7",
    "y": 13,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Seimone",
    "ln": "Augustus",
    "pid": "200671",
    "pos": "G-F",
    "avg": {
      "ftp": 0.868,
      "gs": 32,
      "gp": 32,
      "stl": 0.6,
      "fgp": 0.502,
      "min": 27.7,
      "tov": 1.4,
      "oreb": 0.4,
      "ast": 4,
      "pf": 1,
      "blk": 0.1,
      "tpp": 0.432,
      "reb": 2.9,
      "dreb": 2.5,
      "pts": 10.9
    },
    "hcc": "Louisiana State",
    "ht": "6-0",
    "dob": "1984-04-30",
    "num": "33",
    "y": 11,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Sylvia",
    "ln": "Fowles",
    "pid": "201480",
    "pos": "C",
    "avg": {
      "ftp": 0.768,
      "gs": 34,
      "gp": 34,
      "stl": 1.3,
      "fgp": 0.655,
      "min": 30.8,
      "tov": 2.4,
      "oreb": 3.6,
      "ast": 1.5,
      "pf": 2.7,
      "blk": 2,
      "tpp": 0,
      "reb": 10.4,
      "dreb": 6.8,
      "pts": 18.9
    },
    "hcc": "Louisiana State",
    "ht": "6-6",
    "dob": "1985-10-06",
    "num": "34",
    "y": 9,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Renee",
    "ln": "Montgomery",
    "pid": "201904",
    "pos": "G",
    "avg": {
      "ftp": 0.842,
      "gs": 12,
      "gp": 34,
      "stl": 0.7,
      "fgp": 0.424,
      "min": 21.9,
      "tov": 1.7,
      "oreb": 0.4,
      "ast": 3.4,
      "pf": 1.4,
      "blk": 0.1,
      "tpp": 0.358,
      "reb": 1.6,
      "dreb": 1.1,
      "pts": 8
    },
    "hcc": "Connecticut",
    "ht": "5-7",
    "dob": "1986-12-02",
    "num": "21",
    "y": 8,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Maya",
    "ln": "Moore",
    "pid": "202632",
    "pos": "F",
    "avg": {
      "ftp": 0.858,
      "gs": 34,
      "gp": 34,
      "stl": 1.9,
      "fgp": 0.442,
      "min": 31.3,
      "tov": 1.8,
      "oreb": 1.5,
      "ast": 3.5,
      "pf": 2.4,
      "blk": 0.4,
      "tpp": 0.411,
      "reb": 5,
      "dreb": 3.5,
      "pts": 17.3
    },
    "hcc": "Connecticut",
    "ht": "6-0",
    "dob": "1989-06-11",
    "num": "23",
    "y": 6,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Natasha",
    "ln": "Howard",
    "pid": "203827",
    "pos": "F",
    "avg": {
      "ftp": 0.733,
      "gs": 0,
      "gp": 34,
      "stl": 0.5,
      "fgp": 0.484,
      "min": 11.7,
      "tov": 0.8,
      "oreb": 0.9,
      "ast": 0.7,
      "pf": 1.6,
      "blk": 0.6,
      "tpp": 0.214,
      "reb": 2.4,
      "dreb": 1.5,
      "pts": 4.3
    },
    "hcc": "Florida State",
    "ht": "6-2",
    "dob": "1991-09-02",
    "num": "3",
    "y": 3,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Temi",
    "ln": "Fagbenle",
    "pid": "1627701",
    "pos": "C",
    "avg": {
      "ftp": 0.778,
      "gs": 0,
      "gp": 21,
      "stl": 0.1,
      "fgp": 0.5,
      "min": 4.2,
      "tov": 0.4,
      "oreb": 0.2,
      "ast": 0,
      "pf": 0.6,
      "blk": 0.2,
      "tpp": 0,
      "reb": 1,
      "dreb": 0.8,
      "pts": 1.2
    },
    "hcc": "USC",
    "ht": "6-4",
    "dob": "1992-09-08",
    "num": "14",
    "y": 0,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Alexis",
    "ln": "Jones",
    "pid": "1628283",
    "pos": "G",
    "avg": {
      "ftp": 0.857,
      "gs": 0,
      "gp": 29,
      "stl": 0.3,
      "fgp": 0.342,
      "min": 7.3,
      "tov": 0.7,
      "oreb": 0.1,
      "ast": 0.8,
      "pf": 0.8,
      "blk": 0,
      "tpp": 0.379,
      "reb": 0.8,
      "dreb": 0.6,
      "pts": 2.6
    },
    "hcc": "Baylor",
    "ht": "5-8",
    "dob": "1994-05-08",
    "num": "12",
    "y": 0,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Cecilia",
    "ln": "Zandalasini",
    "pid": "1628508",
    "pos": "F",
    "avg": {
      "ftp": 0,
      "gs": 0,
      "gp": 3,
      "stl": 0,
      "fgp": 0.25,
      "min": 6.3,
      "tov": 0.7,
      "oreb": 0,
      "ast": 0,
      "pf": 0.7,
      "blk": 0,
      "tpp": 0,
      "reb": 0.3,
      "dreb": 0.3,
      "pts": 0.7
    },
    "hcc": "Italy",
    "ht": "6-1",
    "dob": "1996-03-16",
    "num": "9",
    "y": 0,
    "tn": "Lynx 🐯",
    "tc": "Minnesota"
  },
  {
    "fn": "Diana",
    "ln": "Taurasi",
    "pid": "100940",
    "pos": "G",
    "avg": {
      "ftp": 0.912,
      "gs": 31,
      "gp": 31,
      "stl": 0.5,
      "fgp": 0.4,
      "min": 28.5,
      "tov": 2,
      "oreb": 0.3,
      "ast": 2.7,
      "pf": 2.8,
      "blk": 0.3,
      "tpp": 0.384,
      "reb": 3,
      "dreb": 2.6,
      "pts": 17.9
    },
    "hcc": "Connecticut",
    "ht": "6-0",
    "dob": "1982-06-11",
    "num": "3",
    "y": 12,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Monique",
    "ln": "Currie",
    "pid": "200673",
    "pos": "G-F",
    "avg": {
      "ftp": 0.824,
      "gs": 7,
      "gp": 22,
      "stl": 0.8,
      "fgp": 0.424,
      "min": 20.9,
      "tov": 1,
      "oreb": 0.5,
      "ast": 2.2,
      "pf": 2.2,
      "blk": 0.3,
      "tpp": 0.424,
      "reb": 3,
      "dreb": 2.5,
      "pts": 10.2
    },
    "hcc": "Duke",
    "ht": "6-0",
    "dob": "1983-02-25",
    "num": "25",
    "y": 11,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Camille",
    "ln": "Little",
    "pid": "201067",
    "pos": "F",
    "avg": {
      "ftp": 0.607,
      "gs": 34,
      "gp": 34,
      "stl": 0.9,
      "fgp": 0.419,
      "min": 25.4,
      "tov": 1.6,
      "oreb": 1.3,
      "ast": 1.4,
      "pf": 2.9,
      "blk": 0.4,
      "tpp": 0.224,
      "reb": 3.8,
      "dreb": 2.5,
      "pts": 7.1
    },
    "hcc": "North Carolina",
    "ht": "6-2",
    "dob": "1985-01-18",
    "num": "20",
    "y": 10,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Leilani",
    "ln": "Mitchell",
    "pid": "201507",
    "pos": "G",
    "avg": {
      "ftp": 0.824,
      "gs": 7,
      "gp": 34,
      "stl": 0.9,
      "fgp": 0.389,
      "min": 21.4,
      "tov": 1.6,
      "oreb": 0.4,
      "ast": 3.6,
      "pf": 1.4,
      "blk": 0.3,
      "tpp": 0.36,
      "reb": 2.4,
      "dreb": 2,
      "pts": 8
    },
    "hcc": "Utah",
    "ht": "5-5",
    "dob": "1985-06-15",
    "num": "5",
    "y": 8,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Angel",
    "ln": "Robinson",
    "pid": "202657",
    "pos": "F",
    "avg": {
      "ftp": 1,
      "gs": 8,
      "gp": 15,
      "stl": 0.1,
      "fgp": 0.568,
      "min": 15.8,
      "tov": 1.1,
      "oreb": 1.1,
      "ast": 0.5,
      "pf": 2.4,
      "blk": 0.7,
      "tpp": 1,
      "reb": 3.9,
      "dreb": 2.8,
      "pts": 3.9
    },
    "hcc": "Marquette University",
    "ht": "6-6",
    "dob": "1987-04-20",
    "num": "0",
    "y": 1,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Danielle",
    "ln": "Robinson",
    "pid": "202658",
    "pos": "G",
    "avg": {
      "ftp": 0.846,
      "gs": 29,
      "gp": 32,
      "stl": 1.1,
      "fgp": 0.432,
      "min": 23.5,
      "tov": 1.9,
      "oreb": 0.4,
      "ast": 3.4,
      "pf": 2,
      "blk": 0.2,
      "tpp": 0,
      "reb": 2.9,
      "dreb": 2.5,
      "pts": 6.9
    },
    "hcc": "Oklahoma",
    "ht": "5-9",
    "dob": "1989-05-10",
    "num": "11",
    "y": 5,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Yvonne",
    "ln": "Turner",
    "pid": "203389",
    "pos": "G",
    "avg": {
      "ftp": 0.763,
      "gs": 4,
      "gp": 34,
      "stl": 0.6,
      "fgp": 0.41,
      "min": 12.8,
      "tov": 1.1,
      "oreb": 0.4,
      "ast": 1.1,
      "pf": 1.1,
      "blk": 0,
      "tpp": 0.241,
      "reb": 1,
      "dreb": 0.6,
      "pts": 5.1
    },
    "hcc": "Nebraska",
    "ht": "5-10",
    "dob": "1987-10-13",
    "num": "6",
    "y": 0,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Brittney",
    "ln": "Griner",
    "pid": "203398",
    "pos": "C",
    "avg": {
      "ftp": 0.812,
      "gs": 26,
      "gp": 26,
      "stl": 0.7,
      "fgp": 0.577,
      "min": 31.5,
      "tov": 2.5,
      "oreb": 1.7,
      "ast": 1.9,
      "pf": 3.4,
      "blk": 2.5,
      "tpp": 0,
      "reb": 7.6,
      "dreb": 5.9,
      "pts": 21.9
    },
    "hcc": "Baylor",
    "ht": "6-9",
    "dob": "1990-10-18",
    "num": "42",
    "y": 4,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Stephanie",
    "ln": "Talbot",
    "pid": "203855",
    "pos": "G",
    "avg": {
      "ftp": 0.652,
      "gs": 24,
      "gp": 34,
      "stl": 0.7,
      "fgp": 0.415,
      "min": 17.9,
      "tov": 0.9,
      "oreb": 0.9,
      "ast": 1.6,
      "pf": 1.9,
      "blk": 0.3,
      "tpp": 0.381,
      "reb": 2.7,
      "dreb": 1.8,
      "pts": 4.4
    },
    "hcc": "Australia",
    "ht": "6-2",
    "dob": "1994-06-15",
    "num": "8",
    "y": 0,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Cayla",
    "ln": "George",
    "pid": "204297",
    "pos": "F-C",
    "avg": {
      "ftp": 0.643,
      "gs": 0,
      "gp": 32,
      "stl": 0.3,
      "fgp": 0.376,
      "min": 11.9,
      "tov": 0.5,
      "oreb": 0.3,
      "ast": 0.5,
      "pf": 1.9,
      "blk": 0.4,
      "tpp": 0.283,
      "reb": 2.7,
      "dreb": 2.3,
      "pts": 3.3
    },
    "hcc": "Australia",
    "ht": "6-4",
    "dob": "1989-05-01",
    "num": "23",
    "y": 1,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Emma",
    "ln": "Cannon",
    "pid": "1628242",
    "pos": "F",
    "avg": {
      "ftp": 0.587,
      "gs": 0,
      "gp": 34,
      "stl": 0.1,
      "fgp": 0.491,
      "min": 12.9,
      "tov": 0.9,
      "oreb": 1.3,
      "ast": 0.3,
      "pf": 2.1,
      "blk": 0.1,
      "tpp": 0,
      "reb": 3.6,
      "dreb": 2.3,
      "pts": 4.4
    },
    "hcc": "Florida Southern",
    "ht": "6-2",
    "dob": "1989-06-01",
    "num": "10",
    "y": 0,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Alexis",
    "ln": "Prince",
    "pid": "1628297",
    "pos": "G",
    "avg": {
      "ftp": 1,
      "gs": 0,
      "gp": 18,
      "stl": 0.2,
      "fgp": 0.341,
      "min": 7.2,
      "tov": 0.2,
      "oreb": 0.1,
      "ast": 0.4,
      "pf": 0.4,
      "blk": 0.2,
      "tpp": 0.313,
      "reb": 1,
      "dreb": 0.9,
      "pts": 1.9
    },
    "hcc": "Baylor",
    "ht": "6-2",
    "dob": "1994-02-05",
    "num": "15",
    "y": 0,
    "tn": "Mercury 🌌",
    "tc": "Phoenix"
  },
  {
    "fn": "Ivory",
    "ln": "Latta",
    "pid": "201056",
    "pos": "G",
    "avg": {
      "ftp": 0.871,
      "gs": 1,
      "gp": 34,
      "stl": 0.4,
      "fgp": 0.349,
      "min": 17,
      "tov": 0.9,
      "oreb": 0.2,
      "ast": 1.7,
      "pf": 1.2,
      "blk": 0,
      "tpp": 0.328,
      "reb": 0.8,
      "dreb": 0.6,
      "pts": 8
    },
    "hcc": "North Carolina",
    "ht": "5-6",
    "dob": "1984-09-25",
    "num": "12",
    "y": 10,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Kristi",
    "ln": "Toliver",
    "pid": "201911",
    "pos": "G",
    "avg": {
      "ftp": 0.867,
      "gs": 34,
      "gp": 34,
      "stl": 0.7,
      "fgp": 0.407,
      "min": 29.1,
      "tov": 1.8,
      "oreb": 0.3,
      "ast": 3.4,
      "pf": 1.9,
      "blk": 0.2,
      "tpp": 0.338,
      "reb": 2,
      "dreb": 1.6,
      "pts": 11.9
    },
    "hcc": "Maryland",
    "ht": "5-7",
    "dob": "1987-01-27",
    "num": "20",
    "y": 8,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Allison",
    "ln": "Hightower",
    "pid": "202255",
    "pos": "G",
    "avg": {
      "ftp": 0.875,
      "gs": 0,
      "gp": 11,
      "stl": 0.7,
      "fgp": 0.362,
      "min": 13.2,
      "tov": 0.4,
      "oreb": 0.4,
      "ast": 1.1,
      "pf": 0.7,
      "blk": 0,
      "tpp": 0.2,
      "reb": 1.3,
      "dreb": 0.9,
      "pts": 4.7
    },
    "hcc": "Louisiana State",
    "ht": "5-10",
    "dob": "1988-04-06",
    "num": "23",
    "y": 5,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Krystal",
    "ln": "Thomas",
    "pid": "202663",
    "pos": "C",
    "avg": {
      "ftp": 0.603,
      "gs": 30,
      "gp": 34,
      "stl": 0.5,
      "fgp": 0.544,
      "min": 26.1,
      "tov": 1.4,
      "oreb": 3.3,
      "ast": 1,
      "pf": 2.8,
      "blk": 1.1,
      "tpp": 0,
      "reb": 9.6,
      "dreb": 6.4,
      "pts": 7
    },
    "hcc": "Duke",
    "ht": "6-5",
    "dob": "1989-06-10",
    "num": "34",
    "y": 5,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Elena",
    "ln": "Delle Donne",
    "pid": "203399",
    "pos": "F-G",
    "avg": {
      "ftp": 0.953,
      "gs": 25,
      "gp": 25,
      "stl": 0.8,
      "fgp": 0.494,
      "min": 30.3,
      "tov": 1.5,
      "oreb": 1.6,
      "ast": 1.6,
      "pf": 2,
      "blk": 1.4,
      "tpp": 0.388,
      "reb": 6.8,
      "dreb": 5.2,
      "pts": 19.7
    },
    "hcc": "Delaware",
    "ht": "6-5",
    "dob": "1989-09-05",
    "num": "11",
    "y": 4,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Tayler",
    "ln": "Hill",
    "pid": "203401",
    "pos": "G",
    "avg": {
      "ftp": 0.938,
      "gs": 16,
      "gp": 18,
      "stl": 0.9,
      "fgp": 0.361,
      "min": 25.7,
      "tov": 1.4,
      "oreb": 0.3,
      "ast": 2.6,
      "pf": 1.7,
      "blk": 0.1,
      "tpp": 0.303,
      "reb": 1.9,
      "dreb": 1.6,
      "pts": 13.3
    },
    "hcc": "Ohio State",
    "ht": "5-9",
    "dob": "1990-10-23",
    "num": "4",
    "y": 4,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Tianna",
    "ln": "Hawkins",
    "pid": "203403",
    "pos": "F",
    "avg": {
      "ftp": 0.953,
      "gs": 1,
      "gp": 33,
      "stl": 0.5,
      "fgp": 0.471,
      "min": 16.6,
      "tov": 0.8,
      "oreb": 1.3,
      "ast": 0.3,
      "pf": 2.4,
      "blk": 0.2,
      "tpp": 0.261,
      "reb": 4.2,
      "dreb": 2.9,
      "pts": 6.9
    },
    "hcc": "Maryland",
    "ht": "6-3",
    "dob": "1991-03-02",
    "num": "21",
    "y": 3,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Emma",
    "ln": "Meesseman",
    "pid": "203416",
    "pos": "F",
    "avg": {
      "ftp": 0.87,
      "gs": 21,
      "gp": 23,
      "stl": 1,
      "fgp": 0.482,
      "min": 28.4,
      "tov": 1.7,
      "oreb": 1.7,
      "ast": 2.8,
      "pf": 3.1,
      "blk": 1.5,
      "tpp": 0.318,
      "reb": 5.7,
      "dreb": 4,
      "pts": 14.1
    },
    "hcc": "Belgium",
    "ht": "6-4",
    "dob": "1993-05-13",
    "num": "33",
    "y": 4,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Tierra",
    "ln": "Ruffin-Pratt",
    "pid": "203437",
    "pos": "G",
    "avg": {
      "ftp": 0.738,
      "gs": 34,
      "gp": 34,
      "stl": 1,
      "fgp": 0.337,
      "min": 24.3,
      "tov": 1.5,
      "oreb": 1.5,
      "ast": 2.3,
      "pf": 2.9,
      "blk": 0.5,
      "tpp": 0,
      "reb": 5.3,
      "dreb": 3.8,
      "pts": 7.3
    },
    "hcc": "North Carolina",
    "ht": "5-10",
    "dob": "1991-04-11",
    "num": "14",
    "y": 4,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Asia",
    "ln": "Taylor",
    "pid": "203859",
    "pos": "F",
    "avg": {
      "ftp": 0.731,
      "gs": 0,
      "gp": 24,
      "stl": 0.3,
      "fgp": 0.325,
      "min": 6.7,
      "tov": 0.5,
      "oreb": 0.8,
      "ast": 0.4,
      "pf": 0.8,
      "blk": 0.1,
      "tpp": 0,
      "reb": 1.8,
      "dreb": 1.1,
      "pts": 1.9
    },
    "hcc": "Louisville",
    "ht": "6-1",
    "dob": "1991-08-22",
    "num": "31",
    "y": 2,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Natasha",
    "ln": "Cloud",
    "pid": "204333",
    "pos": "G",
    "avg": {
      "ftp": 0.741,
      "gs": 0,
      "gp": 24,
      "stl": 0.7,
      "fgp": 0.314,
      "min": 18.7,
      "tov": 1,
      "oreb": 0.3,
      "ast": 2.9,
      "pf": 1.6,
      "blk": 0.1,
      "tpp": 0.235,
      "reb": 2.5,
      "dreb": 2.2,
      "pts": 4.4
    },
    "hcc": "St. Joseph's (PA)",
    "ht": "6-0",
    "dob": "1992-02-22",
    "num": "9",
    "y": 2,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Shatori",
    "ln": "Walker-Kimbrough",
    "pid": "1628278",
    "pos": "G",
    "avg": {
      "ftp": 0.854,
      "gs": 8,
      "gp": 27,
      "stl": 0.6,
      "fgp": 0.371,
      "min": 12.4,
      "tov": 0.6,
      "oreb": 0.3,
      "ast": 0.4,
      "pf": 1,
      "blk": 0.1,
      "tpp": 0.333,
      "reb": 1.1,
      "dreb": 0.9,
      "pts": 4.4
    },
    "hcc": "Maryland",
    "ht": "5-11",
    "dob": "1995-05-18",
    "num": "32",
    "y": 0,
    "tn": "Mystics 🧙‍♀️",
    "tc": "Washington"
  },
  {
    "fn": "Cappie",
    "ln": "Pondexter",
    "pid": "200665",
    "pos": "G",
    "avg": {
      "ftp": 0.795,
      "gs": 15,
      "gp": 29,
      "stl": 0.7,
      "fgp": 0.367,
      "min": 27.2,
      "tov": 2.3,
      "oreb": 0.4,
      "ast": 4.3,
      "pf": 2.3,
      "blk": 0.2,
      "tpp": 0.257,
      "reb": 2.9,
      "dreb": 2.5,
      "pts": 9.6
    },
    "hcc": "Rutgers",
    "ht": "5-9",
    "dob": "1983-01-07",
    "num": "23",
    "y": 11,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Allie",
    "ln": "Quigley",
    "pid": "201516",
    "pos": "G",
    "avg": {
      "ftp": 0.893,
      "gs": 31,
      "gp": 31,
      "stl": 0.8,
      "fgp": 0.505,
      "min": 32.3,
      "tov": 2.4,
      "oreb": 0.3,
      "ast": 3.6,
      "pf": 2,
      "blk": 0.5,
      "tpp": 0.43,
      "reb": 3.3,
      "dreb": 3,
      "pts": 16.4
    },
    "hcc": "DePaul",
    "ht": "5-10",
    "dob": "1986-06-20",
    "num": "14",
    "y": 8,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Jessica",
    "ln": "Breland",
    "pid": "202638",
    "pos": "F",
    "avg": {
      "ftp": 0.787,
      "gs": 33,
      "gp": 34,
      "stl": 0.6,
      "fgp": 0.476,
      "min": 24.5,
      "tov": 1.8,
      "oreb": 1.6,
      "ast": 1.6,
      "pf": 2.1,
      "blk": 1.7,
      "tpp": 0.381,
      "reb": 6.3,
      "dreb": 4.7,
      "pts": 9.5
    },
    "hcc": "North Carolina",
    "ht": "6-3",
    "dob": "1988-02-23",
    "num": "51",
    "y": 5,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Amber",
    "ln": "Harris",
    "pid": "202644",
    "pos": "F",
    "avg": {
      "ftp": 0.625,
      "gs": 0,
      "gp": 27,
      "stl": 0.1,
      "fgp": 0.396,
      "min": 5.9,
      "tov": 0.3,
      "oreb": 0.4,
      "ast": 0.2,
      "pf": 0.5,
      "blk": 0.3,
      "tpp": 0,
      "reb": 1.6,
      "dreb": 1.1,
      "pts": 1.6
    },
    "hcc": "Xavier (Ohio)",
    "ht": "6-5",
    "dob": "1988-01-16",
    "num": "11",
    "y": 3,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Courtney",
    "ln": "Vandersloot",
    "pid": "202664",
    "pos": "G",
    "avg": {
      "ftp": 0.861,
      "gs": 22,
      "gp": 27,
      "stl": 1.2,
      "fgp": 0.516,
      "min": 30.3,
      "tov": 3,
      "oreb": 0.6,
      "ast": 8.1,
      "pf": 2.2,
      "blk": 0.2,
      "tpp": 0.382,
      "reb": 3.7,
      "dreb": 3.1,
      "pts": 11.5
    },
    "hcc": "Gonzaga",
    "ht": "5-8",
    "dob": "1989-02-08",
    "num": "22",
    "y": 6,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Stefanie",
    "ln": "Dolson",
    "pid": "203828",
    "pos": "C-F",
    "avg": {
      "ftp": 0.87,
      "gs": 33,
      "gp": 33,
      "stl": 0.5,
      "fgp": 0.561,
      "min": 29.3,
      "tov": 2.5,
      "oreb": 1.3,
      "ast": 2.6,
      "pf": 3.6,
      "blk": 1.3,
      "tpp": 0.437,
      "reb": 5.8,
      "dreb": 4.6,
      "pts": 14.5
    },
    "hcc": "Connecticut",
    "ht": "6-5",
    "dob": "1992-01-08",
    "num": "31",
    "y": 3,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Jordan",
    "ln": "Hooper",
    "pid": "203835",
    "pos": "F",
    "avg": {
      "ftp": 0.5,
      "gs": 0,
      "gp": 10,
      "stl": 0.5,
      "fgp": 0.368,
      "min": 18.6,
      "tov": 0.5,
      "oreb": 0.1,
      "ast": 0.6,
      "pf": 0.9,
      "blk": 0.1,
      "tpp": 0.37,
      "reb": 2.2,
      "dreb": 2.1,
      "pts": 6
    },
    "hcc": "Nebraska",
    "ht": "6-2",
    "dob": "1992-02-20",
    "num": "35",
    "y": 3,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Cheyenne",
    "ln": "Parker",
    "pid": "204323",
    "pos": "F",
    "avg": {
      "ftp": 0.639,
      "gs": 0,
      "gp": 23,
      "stl": 0.3,
      "fgp": 0.464,
      "min": 12.4,
      "tov": 0.9,
      "oreb": 1.3,
      "ast": 0.6,
      "pf": 1.7,
      "blk": 0.7,
      "tpp": 0,
      "reb": 3.4,
      "dreb": 2,
      "pts": 3.8
    },
    "hcc": "Middle Tennessee State",
    "ht": "6-4",
    "dob": "1992-08-22",
    "num": "32",
    "y": 2,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Kahleah",
    "ln": "Copper",
    "pid": "1627674",
    "pos": "G",
    "avg": {
      "ftp": 0.83,
      "gs": 10,
      "gp": 34,
      "stl": 0.3,
      "fgp": 0.465,
      "min": 14.3,
      "tov": 0.8,
      "oreb": 0.3,
      "ast": 0.4,
      "pf": 1.6,
      "blk": 0.1,
      "tpp": 0.294,
      "reb": 1.9,
      "dreb": 1.6,
      "pts": 6.7
    },
    "hcc": "Rutgers",
    "ht": "6-1",
    "dob": "1994-08-28",
    "num": "2",
    "y": 1,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Adut",
    "ln": "Bulgak",
    "pid": "1627679",
    "pos": "C",
    "avg": {
      "ftp": 0.6,
      "gs": 0,
      "gp": 5,
      "stl": 1,
      "fgp": 0.409,
      "min": 12.2,
      "tov": 0.6,
      "oreb": 0.8,
      "ast": 0,
      "pf": 2.2,
      "blk": 0.4,
      "tpp": 0.333,
      "reb": 4,
      "dreb": 3.2,
      "pts": 4.4
    },
    "hcc": "Florida State",
    "ht": "6-4",
    "dob": "1992-12-20",
    "num": "3",
    "y": 1,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Bashaara",
    "ln": "Graves",
    "pid": "1627689",
    "pos": "F",
    "avg": {
      "ftp": 0.571,
      "gs": 0,
      "gp": 10,
      "stl": 0.2,
      "fgp": 0.5,
      "min": 9.2,
      "tov": 0.6,
      "oreb": 0.6,
      "ast": 0.5,
      "pf": 0.8,
      "blk": 0.1,
      "tpp": 0,
      "reb": 2.3,
      "dreb": 1.7,
      "pts": 2.6
    },
    "hcc": "Tennessee",
    "ht": "6-2",
    "dob": "1994-03-17",
    "num": "12",
    "y": 1,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Makayla",
    "ln": "Epps",
    "pid": "1628300",
    "pos": "G",
    "avg": {
      "ftp": 0.556,
      "gs": 0,
      "gp": 17,
      "stl": 0.1,
      "fgp": 0.167,
      "min": 3.8,
      "tov": 0.3,
      "oreb": 0.1,
      "ast": 0.4,
      "pf": 0.4,
      "blk": 0,
      "tpp": 0,
      "reb": 0.2,
      "dreb": 0.1,
      "pts": 0.6
    },
    "hcc": "Kentucky",
    "ht": "5-10",
    "dob": "1995-06-06",
    "num": "25",
    "y": 0,
    "tn": "Sky 🌇",
    "tc": "Chicago"
  },
  {
    "fn": "Alana",
    "ln": "Beard",
    "pid": "100949",
    "pos": "G-F",
    "avg": {
      "ftp": 0.804,
      "gs": 34,
      "gp": 34,
      "stl": 2.1,
      "fgp": 0.497,
      "min": 30.8,
      "tov": 1.3,
      "oreb": 0.6,
      "ast": 2.2,
      "pf": 2.7,
      "blk": 0.5,
      "tpp": 0.316,
      "reb": 3.3,
      "dreb": 2.7,
      "pts": 6.9
    },
    "hcc": "Duke",
    "ht": "5-11",
    "dob": "1982-05-14",
    "num": "0",
    "y": 11,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Tiffany",
    "ln": "Jackson-Jones",
    "pid": "201050",
    "pos": "F",
    "avg": {
      "ftp": 0.625,
      "gs": 1,
      "gp": 26,
      "stl": 0.1,
      "fgp": 0.462,
      "min": 5.7,
      "tov": 0.5,
      "oreb": 0.3,
      "ast": 0.1,
      "pf": 0.8,
      "blk": 0.1,
      "tpp": 0,
      "reb": 1.2,
      "dreb": 0.9,
      "pts": 1.1
    },
    "hcc": "Texas",
    "ht": "6-3",
    "dob": "1985-04-26",
    "num": "33",
    "y": 8,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Sandrine",
    "ln": "Gruda",
    "pid": "201058",
    "pos": "F-C",
    "avg": {
      "ftp": 0,
      "gs": 0,
      "gp": 7,
      "stl": 0,
      "fgp": 0.364,
      "min": 4,
      "tov": 0.7,
      "oreb": 0.1,
      "ast": 0,
      "pf": 0.6,
      "blk": 0,
      "tpp": 0,
      "reb": 0.6,
      "dreb": 0.4,
      "pts": 1.1
    },
    "hcc": "US Valenciennes/France",
    "ht": "6-4",
    "dob": "1987-06-25",
    "num": "7",
    "y": 5,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Candace",
    "ln": "Parker",
    "pid": "201496",
    "pos": "F-C",
    "avg": {
      "ftp": 0.756,
      "gs": 33,
      "gp": 33,
      "stl": 1.5,
      "fgp": 0.478,
      "min": 30.5,
      "tov": 2.7,
      "oreb": 1.2,
      "ast": 4.3,
      "pf": 2.3,
      "blk": 1.7,
      "tpp": 0.354,
      "reb": 8.4,
      "dreb": 7.2,
      "pts": 16.9
    },
    "hcc": "Tennessee",
    "ht": "6-4",
    "dob": "1986-04-19",
    "num": "3",
    "y": 9,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Essence",
    "ln": "Carson",
    "pid": "201502",
    "pos": "F-G",
    "avg": {
      "ftp": 0.875,
      "gs": 14,
      "gp": 24,
      "stl": 0.6,
      "fgp": 0.404,
      "min": 19.3,
      "tov": 0.8,
      "oreb": 0.5,
      "ast": 1.2,
      "pf": 1.2,
      "blk": 0.3,
      "tpp": 0.25,
      "reb": 1.7,
      "dreb": 1.2,
      "pts": 4.8
    },
    "hcc": "Rutgers",
    "ht": "6-0",
    "dob": "1986-07-28",
    "num": "17",
    "y": 9,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Jantel",
    "ln": "Lavender",
    "pid": "202650",
    "pos": "C",
    "avg": {
      "ftp": 0.846,
      "gs": 0,
      "gp": 32,
      "stl": 0.3,
      "fgp": 0.488,
      "min": 17.3,
      "tov": 1.3,
      "oreb": 1,
      "ast": 0.9,
      "pf": 1.3,
      "blk": 0.2,
      "tpp": 0.313,
      "reb": 3,
      "dreb": 2,
      "pts": 7.3
    },
    "hcc": "Ohio State",
    "ht": "6-4",
    "dob": "1988-11-12",
    "num": "42",
    "y": 6,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Nneka",
    "ln": "Ogwumike",
    "pid": "203014",
    "pos": "F",
    "avg": {
      "ftp": 0.87,
      "gs": 34,
      "gp": 34,
      "stl": 1.9,
      "fgp": 0.561,
      "min": 30.9,
      "tov": 1.5,
      "oreb": 1.8,
      "ast": 2.1,
      "pf": 2.9,
      "blk": 0.5,
      "tpp": 0.34,
      "reb": 7.7,
      "dreb": 5.9,
      "pts": 18.8
    },
    "hcc": "Stanford",
    "ht": "6-2",
    "dob": "1990-07-02",
    "num": "30",
    "y": 5,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Riquna",
    "ln": "Williams",
    "pid": "203029",
    "pos": "G",
    "avg": {
      "ftp": 0.864,
      "gs": 6,
      "gp": 23,
      "stl": 0.8,
      "fgp": 0.321,
      "min": 17.7,
      "tov": 1.1,
      "oreb": 0.3,
      "ast": 0.7,
      "pf": 1.8,
      "blk": 0.1,
      "tpp": 0.27,
      "reb": 1.4,
      "dreb": 1.1,
      "pts": 6.4
    },
    "hcc": "Miami (Fla.)",
    "ht": "5-7",
    "dob": "1990-05-28",
    "num": "2",
    "y": 4,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Odyssey",
    "ln": "Sims",
    "pid": "203824",
    "pos": "G",
    "avg": {
      "ftp": 0.886,
      "gs": 14,
      "gp": 31,
      "stl": 1.5,
      "fgp": 0.447,
      "min": 24.3,
      "tov": 1.4,
      "oreb": 0.5,
      "ast": 3.5,
      "pf": 1.9,
      "blk": 0.2,
      "tpp": 0.19,
      "reb": 1.9,
      "dreb": 1.5,
      "pts": 9.6
    },
    "hcc": "Baylor",
    "ht": "5-8",
    "dob": "1992-07-13",
    "num": "1",
    "y": 3,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Chelsea",
    "ln": "Gray",
    "pid": "203833",
    "pos": "G",
    "avg": {
      "ftp": 0.827,
      "gs": 34,
      "gp": 34,
      "stl": 1.1,
      "fgp": 0.507,
      "min": 33.1,
      "tov": 1.9,
      "oreb": 0.6,
      "ast": 4.4,
      "pf": 2.2,
      "blk": 0.2,
      "tpp": 0.482,
      "reb": 3.3,
      "dreb": 2.7,
      "pts": 14.8
    },
    "hcc": "Duke",
    "ht": "5-11",
    "dob": "1992-10-08",
    "num": "12",
    "y": 2,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Sydney",
    "ln": "Wiese",
    "pid": "1628282",
    "pos": "G",
    "avg": {
      "ftp": 0.5,
      "gs": 0,
      "gp": 28,
      "stl": 0.2,
      "fgp": 0.383,
      "min": 7.9,
      "tov": 0.1,
      "oreb": 0.1,
      "ast": 0.3,
      "pf": 0.7,
      "blk": 0.1,
      "tpp": 0.4,
      "reb": 0.8,
      "dreb": 0.7,
      "pts": 2.3
    },
    "hcc": "Oregon State",
    "ht": "6-0",
    "dob": "1995-06-16",
    "num": "24",
    "y": 0,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Maimouna",
    "ln": "Diarra",
    "pid": "1628358",
    "pos": "C",
    "avg": {
      "ftp": 0.5,
      "gs": 0,
      "gp": 10,
      "stl": 0.2,
      "fgp": 0.2,
      "min": 2,
      "tov": 0.3,
      "oreb": 0.4,
      "ast": 0.1,
      "pf": 0.5,
      "blk": 0,
      "tpp": 0,
      "reb": 1.1,
      "dreb": 0.7,
      "pts": 0.3
    },
    "hcc": "Senegal",
    "ht": "6-6",
    "dob": "1991-01-30",
    "num": "26",
    "y": 0,
    "tn": "Sparks ⚡️",
    "tc": "Los Angeles"
  },
  {
    "fn": "Sue",
    "ln": "Bird",
    "pid": "100720",
    "pos": "G",
    "avg": {
      "ftp": 0.774,
      "gs": 30,
      "gp": 30,
      "stl": 1.2,
      "fgp": 0.427,
      "min": 30,
      "tov": 2.1,
      "oreb": 0.2,
      "ast": 6.6,
      "pf": 1.3,
      "blk": 0.1,
      "tpp": 0.393,
      "reb": 2,
      "dreb": 1.8,
      "pts": 10.6
    },
    "hcc": "Connecticut",
    "ht": "5-9",
    "dob": "1980-10-16",
    "num": "10",
    "y": 14,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Noelle",
    "ln": "Quinn",
    "pid": "201049",
    "pos": "G",
    "avg": {
      "ftp": 0.952,
      "gs": 4,
      "gp": 32,
      "stl": 0.4,
      "fgp": 0.403,
      "min": 15.8,
      "tov": 0.9,
      "oreb": 0,
      "ast": 2.8,
      "pf": 1.1,
      "blk": 0.2,
      "tpp": 0.385,
      "reb": 1.6,
      "dreb": 1.6,
      "pts": 2.7
    },
    "hcc": "UCLA",
    "ht": "6-0",
    "dob": "1985-01-03",
    "num": "45",
    "y": 10,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Crystal",
    "ln": "Langhorne",
    "pid": "201518",
    "pos": "F",
    "avg": {
      "ftp": 0.735,
      "gs": 34,
      "gp": 34,
      "stl": 0.6,
      "fgp": 0.647,
      "min": 28.4,
      "tov": 1.7,
      "oreb": 1.3,
      "ast": 1.5,
      "pf": 2,
      "blk": 0.4,
      "tpp": 0.5,
      "reb": 6.1,
      "dreb": 4.8,
      "pts": 12.4
    },
    "hcc": "Maryland",
    "ht": "6-2",
    "dob": "1986-10-27",
    "num": "1",
    "y": 9,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Alysha",
    "ln": "Clark",
    "pid": "202252",
    "pos": "F",
    "avg": {
      "ftp": 0.745,
      "gs": 33,
      "gp": 33,
      "stl": 0.7,
      "fgp": 0.525,
      "min": 28.3,
      "tov": 1,
      "oreb": 1,
      "ast": 1.6,
      "pf": 2.4,
      "blk": 0.1,
      "tpp": 0.328,
      "reb": 4.2,
      "dreb": 3.2,
      "pts": 8.2
    },
    "hcc": "Middle Tennessee State",
    "ht": "5-11",
    "dob": "1987-07-07",
    "num": "32",
    "y": 5,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Carolyn",
    "ln": "Swords",
    "pid": "202670",
    "pos": "C",
    "avg": {
      "ftp": 0.773,
      "gs": 0,
      "gp": 30,
      "stl": 0.2,
      "fgp": 0.545,
      "min": 8.7,
      "tov": 0.8,
      "oreb": 0.4,
      "ast": 0.3,
      "pf": 1.8,
      "blk": 0.2,
      "tpp": 0,
      "reb": 1.5,
      "dreb": 1.2,
      "pts": 2.6
    },
    "hcc": "Boston College",
    "ht": "6-6",
    "dob": "1989-07-19",
    "num": "8",
    "y": 5,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Ramu",
    "ln": "Tokashiki",
    "pid": "204317",
    "pos": "F",
    "avg": {
      "ftp": 0.815,
      "gs": 1,
      "gp": 33,
      "stl": 0.3,
      "fgp": 0.442,
      "min": 12.5,
      "tov": 0.8,
      "oreb": 0.6,
      "ast": 0.6,
      "pf": 2.2,
      "blk": 0.3,
      "tpp": 0,
      "reb": 1.6,
      "dreb": 1.1,
      "pts": 3.2
    },
    "hcc": "Japan",
    "ht": "6-3",
    "dob": "1991-06-11",
    "num": "7",
    "y": 2,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Jewell",
    "ln": "Loyd",
    "pid": "204319",
    "pos": "G",
    "avg": {
      "ftp": 0.863,
      "gs": 34,
      "gp": 34,
      "stl": 1.3,
      "fgp": 0.431,
      "min": 31.1,
      "tov": 2.5,
      "oreb": 0.9,
      "ast": 3.4,
      "pf": 1.8,
      "blk": 0.4,
      "tpp": 0.386,
      "reb": 3.2,
      "dreb": 2.2,
      "pts": 17.7
    },
    "hcc": "Notre Dame",
    "ht": "5-10",
    "dob": "1993-10-05",
    "num": "24",
    "y": 2,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Kaleena",
    "ln": "Mosqueda-Lewis",
    "pid": "204321",
    "pos": "F",
    "avg": {
      "ftp": 1,
      "gs": 1,
      "gp": 18,
      "stl": 0.2,
      "fgp": 0.456,
      "min": 11.1,
      "tov": 0.8,
      "oreb": 0.2,
      "ast": 0.5,
      "pf": 1.3,
      "blk": 0.1,
      "tpp": 0.294,
      "reb": 1.2,
      "dreb": 0.9,
      "pts": 4.6
    },
    "hcc": "Connecticut",
    "ht": "5-11",
    "dob": "1993-11-03",
    "num": "23",
    "y": 2,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Breanna",
    "ln": "Stewart",
    "pid": "1627668",
    "pos": "F",
    "avg": {
      "ftp": 0.787,
      "gs": 33,
      "gp": 33,
      "stl": 1.2,
      "fgp": 0.475,
      "min": 32.9,
      "tov": 2.4,
      "oreb": 1.5,
      "ast": 2.7,
      "pf": 3.2,
      "blk": 1.6,
      "tpp": 0.371,
      "reb": 8.7,
      "dreb": 7.2,
      "pts": 19.9
    },
    "hcc": "Connecticut",
    "ht": "6-4",
    "dob": "1994-08-27",
    "num": "30",
    "y": 1,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Sami",
    "ln": "Whitcomb",
    "pid": "1628244",
    "pos": "G",
    "avg": {
      "ftp": 0.81,
      "gs": 0,
      "gp": 33,
      "stl": 0.7,
      "fgp": 0.361,
      "min": 12.2,
      "tov": 0.9,
      "oreb": 0.4,
      "ast": 1,
      "pf": 1.5,
      "blk": 0,
      "tpp": 0.333,
      "reb": 1.7,
      "dreb": 1.3,
      "pts": 4.5
    },
    "hcc": "Washington",
    "ht": "5-10",
    "dob": "1988-07-20",
    "num": "3",
    "y": 0,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Alexis",
    "ln": "Peterson",
    "pid": "1628284",
    "pos": "G",
    "avg": {
      "ftp": 1,
      "gs": 0,
      "gp": 17,
      "stl": 0.3,
      "fgp": 0.295,
      "min": 7.1,
      "tov": 0.8,
      "oreb": 0.2,
      "ast": 0.8,
      "pf": 1.1,
      "blk": 0,
      "tpp": 0.25,
      "reb": 1.2,
      "dreb": 1.1,
      "pts": 2.1
    },
    "hcc": "Syracuse",
    "ht": "5-7",
    "dob": "1995-06-20",
    "num": "2",
    "y": 0,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Lanay",
    "ln": "Montgomery",
    "pid": "1628298",
    "pos": "C",
    "avg": {
      "ftp": 0,
      "gs": 0,
      "gp": 7,
      "stl": 0.1,
      "fgp": 0.429,
      "min": 4,
      "tov": 0.3,
      "oreb": 0,
      "ast": 0,
      "pf": 0.7,
      "blk": 0.6,
      "tpp": 0,
      "reb": 0.7,
      "dreb": 0.7,
      "pts": 0.9
    },
    "hcc": "West Virginia",
    "ht": "6-5",
    "dob": "1993-09-17",
    "num": "11",
    "y": 0,
    "tn": "Storm ⛈",
    "tc": "Seattle"
  },
  {
    "fn": "Danielle",
    "ln": "Adams",
    "pid": "202634",
    "pos": "F-C",
    "avg": {
      "ftp": 1,
      "gs": 0,
      "gp": 19,
      "stl": 0.2,
      "fgp": 0.356,
      "min": 4.4,
      "tov": 0.4,
      "oreb": 0.4,
      "ast": 0.2,
      "pf": 1.3,
      "blk": 0.2,
      "tpp": 0.387,
      "reb": 0.6,
      "dreb": 0.2,
      "pts": 2.6
    },
    "hcc": "Texas A&M",
    "ht": "6-1",
    "dob": "1989-02-19",
    "num": "11",
    "y": 5,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Kayla",
    "ln": "Pedersen",
    "pid": "202653",
    "pos": "F",
    "avg": {
      "ftp": 0.706,
      "gs": 0,
      "gp": 26,
      "stl": 0.3,
      "fgp": 0.371,
      "min": 10.2,
      "tov": 0.4,
      "oreb": 0.9,
      "ast": 0.6,
      "pf": 1.5,
      "blk": 0.1,
      "tpp": 0,
      "reb": 2.3,
      "dreb": 1.4,
      "pts": 1.5
    },
    "hcc": "Stanford",
    "ht": "6-4",
    "dob": "1989-04-14",
    "num": "7",
    "y": 5,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Jasmine",
    "ln": "Thomas",
    "pid": "202662",
    "pos": "G",
    "avg": {
      "ftp": 0.781,
      "gs": 31,
      "gp": 32,
      "stl": 1.6,
      "fgp": 0.421,
      "min": 28.2,
      "tov": 2.4,
      "oreb": 0.4,
      "ast": 4.3,
      "pf": 1.6,
      "blk": 0.1,
      "tpp": 0.403,
      "reb": 2.3,
      "dreb": 1.9,
      "pts": 14.2
    },
    "hcc": "Duke",
    "ht": "5-9",
    "dob": "1989-09-30",
    "num": "5",
    "y": 6,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Shekinna",
    "ln": "Stricklen",
    "pid": "203015",
    "pos": "G-F",
    "avg": {
      "ftp": 0.865,
      "gs": 29,
      "gp": 34,
      "stl": 1.2,
      "fgp": 0.411,
      "min": 27.2,
      "tov": 0.9,
      "oreb": 0.5,
      "ast": 1.1,
      "pf": 1.6,
      "blk": 0.1,
      "tpp": 0.41,
      "reb": 3.1,
      "dreb": 2.6,
      "pts": 8.6
    },
    "hcc": "Tennessee",
    "ht": "6-2",
    "dob": "1990-07-30",
    "num": "40",
    "y": 5,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Lynetta",
    "ln": "Kizer",
    "pid": "203041",
    "pos": "F",
    "avg": {
      "ftp": 0.767,
      "gs": 1,
      "gp": 20,
      "stl": 0.6,
      "fgp": 0.48,
      "min": 11.9,
      "tov": 0.5,
      "oreb": 1.1,
      "ast": 0.3,
      "pf": 1.9,
      "blk": 0.4,
      "tpp": 0,
      "reb": 2.9,
      "dreb": 1.8,
      "pts": 6
    },
    "hcc": "Maryland",
    "ht": "6-4",
    "dob": "1990-04-04",
    "num": "12",
    "y": 5,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Alex",
    "ln": "Bentley",
    "pid": "203410",
    "pos": "G",
    "avg": {
      "ftp": 0.809,
      "gs": 9,
      "gp": 31,
      "stl": 0.8,
      "fgp": 0.38,
      "min": 23.7,
      "tov": 0.9,
      "oreb": 0.1,
      "ast": 2.9,
      "pf": 2.2,
      "blk": 0.1,
      "tpp": 0.278,
      "reb": 1.5,
      "dreb": 1.3,
      "pts": 8.4
    },
    "hcc": "Penn State",
    "ht": "5-7",
    "dob": "1990-10-27",
    "num": "20",
    "y": 4,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Alyssa",
    "ln": "Thomas",
    "pid": "203826",
    "pos": "F",
    "avg": {
      "ftp": 0.567,
      "gs": 33,
      "gp": 33,
      "stl": 1.6,
      "fgp": 0.509,
      "min": 29.8,
      "tov": 3,
      "oreb": 1.4,
      "ast": 4.5,
      "pf": 3.2,
      "blk": 0.4,
      "tpp": 0,
      "reb": 6.8,
      "dreb": 5.4,
      "pts": 14.8
    },
    "hcc": "Maryland",
    "ht": "6-2",
    "dob": "1992-04-12",
    "num": "25",
    "y": 3,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Morgan",
    "ln": "Tuck",
    "pid": "1627670",
    "pos": "F",
    "avg": {
      "ftp": 0.81,
      "gs": 5,
      "gp": 22,
      "stl": 0.4,
      "fgp": 0.354,
      "min": 16.6,
      "tov": 1,
      "oreb": 0.5,
      "ast": 0.9,
      "pf": 1.6,
      "blk": 0,
      "tpp": 0.289,
      "reb": 2.2,
      "dreb": 1.7,
      "pts": 5.4
    },
    "hcc": "Connecticut",
    "ht": "6-2",
    "dob": "1994-04-30",
    "num": "33",
    "y": 1,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Rachel",
    "ln": "Banham",
    "pid": "1627671",
    "pos": "G",
    "avg": {
      "ftp": 0.8,
      "gs": 0,
      "gp": 30,
      "stl": 0.1,
      "fgp": 0.327,
      "min": 9.4,
      "tov": 0.4,
      "oreb": 0.1,
      "ast": 0.7,
      "pf": 0.9,
      "blk": 0,
      "tpp": 0.281,
      "reb": 1.1,
      "dreb": 1.1,
      "pts": 3.3
    },
    "hcc": "Minnesota",
    "ht": "5-9",
    "dob": "1993-07-15",
    "num": "1",
    "y": 1,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Jonquel",
    "ln": "Jones",
    "pid": "1627673",
    "pos": "F-C",
    "avg": {
      "ftp": 0.818,
      "gs": 34,
      "gp": 34,
      "stl": 0.9,
      "fgp": 0.534,
      "min": 28.5,
      "tov": 1.7,
      "oreb": 3.6,
      "ast": 1.5,
      "pf": 3.4,
      "blk": 1.5,
      "tpp": 0.446,
      "reb": 11.9,
      "dreb": 8.2,
      "pts": 15.4
    },
    "hcc": "George Washington",
    "ht": "6-6",
    "dob": "1994-01-05",
    "num": "35",
    "y": 1,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Courtney",
    "ln": "Williams",
    "pid": "1627675",
    "pos": "G",
    "avg": {
      "ftp": 0.878,
      "gs": 28,
      "gp": 34,
      "stl": 0.5,
      "fgp": 0.473,
      "min": 26,
      "tov": 1.4,
      "oreb": 1.4,
      "ast": 2.1,
      "pf": 1.6,
      "blk": 0.2,
      "tpp": 0.324,
      "reb": 4.2,
      "dreb": 2.9,
      "pts": 12.3
    },
    "hcc": "South Florida",
    "ht": "5-8",
    "dob": "1994-05-11",
    "num": "10",
    "y": 1,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Brionna",
    "ln": "Jones",
    "pid": "1628280",
    "pos": "F",
    "avg": {
      "ftp": 0.833,
      "gs": 0,
      "gp": 23,
      "stl": 0.4,
      "fgp": 0.575,
      "min": 6.4,
      "tov": 0.4,
      "oreb": 0.7,
      "ast": 0.1,
      "pf": 1.2,
      "blk": 0.1,
      "tpp": 0,
      "reb": 1.7,
      "dreb": 1,
      "pts": 2.9
    },
    "hcc": "Maryland",
    "ht": "6-3",
    "dob": "1995-12-18",
    "num": "42",
    "y": 0,
    "tn": "Sun ☀️",
    "tc": "Connecticut"
  },
  {
    "fn": "Courtney",
    "ln": "Paris",
    "pid": "201907",
    "pos": "C",
    "avg": {
      "ftp": 0.5,
      "gs": 8,
      "gp": 20,
      "stl": 0.4,
      "fgp": 0.559,
      "min": 13.7,
      "tov": 1,
      "oreb": 1.7,
      "ast": 0.7,
      "pf": 2.7,
      "blk": 0.6,
      "tpp": 0,
      "reb": 3.7,
      "dreb": 2.1,
      "pts": 4.2
    },
    "hcc": "Oklahoma",
    "ht": "6-4",
    "dob": "1987-09-21",
    "num": "3",
    "y": 7,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Karima",
    "ln": "Christmas-Kelly",
    "pid": "202640",
    "pos": "F",
    "avg": {
      "ftp": 0.851,
      "gs": 34,
      "gp": 34,
      "stl": 1.2,
      "fgp": 0.38,
      "min": 29.7,
      "tov": 1.6,
      "oreb": 1.7,
      "ast": 2.2,
      "pf": 2.9,
      "blk": 0.2,
      "tpp": 0.292,
      "reb": 4.2,
      "dreb": 2.5,
      "pts": 10.4
    },
    "hcc": "Duke",
    "ht": "6-0",
    "dob": "1989-09-11",
    "num": "13",
    "y": 6,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Glory",
    "ln": "Johnson",
    "pid": "203017",
    "pos": "F",
    "avg": {
      "ftp": 0.766,
      "gs": 33,
      "gp": 33,
      "stl": 1.2,
      "fgp": 0.464,
      "min": 31,
      "tov": 2.2,
      "oreb": 2.4,
      "ast": 1.6,
      "pf": 2.9,
      "blk": 0.4,
      "tpp": 0.313,
      "reb": 9.1,
      "dreb": 6.7,
      "pts": 14.9
    },
    "hcc": "Tennessee",
    "ht": "6-3",
    "dob": "1990-07-27",
    "num": "25",
    "y": 4,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Skylar",
    "ln": "Diggins-Smith",
    "pid": "203400",
    "pos": "G",
    "avg": {
      "ftp": 0.894,
      "gs": 34,
      "gp": 34,
      "stl": 1.3,
      "fgp": 0.422,
      "min": 34.2,
      "tov": 2.8,
      "oreb": 0.7,
      "ast": 5.8,
      "pf": 2.4,
      "blk": 0.8,
      "tpp": 0.35,
      "reb": 3.5,
      "dreb": 2.8,
      "pts": 18.5
    },
    "hcc": "Notre Dame",
    "ht": "5-9",
    "dob": "1990-08-02",
    "num": "4",
    "y": 4,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Theresa",
    "ln": "Plaisance",
    "pid": "203849",
    "pos": "F",
    "avg": {
      "ftp": 0.862,
      "gs": 25,
      "gp": 34,
      "stl": 0.7,
      "fgp": 0.38,
      "min": 20.3,
      "tov": 0.9,
      "oreb": 1.3,
      "ast": 0.9,
      "pf": 2.8,
      "blk": 0.7,
      "tpp": 0.344,
      "reb": 4.3,
      "dreb": 3.1,
      "pts": 7.7
    },
    "hcc": "Louisiana State",
    "ht": "6-5",
    "dob": "1992-05-18",
    "num": "55",
    "y": 3,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Kayla",
    "ln": "Thornton",
    "pid": "203866",
    "pos": "F",
    "avg": {
      "ftp": 0.8,
      "gs": 1,
      "gp": 34,
      "stl": 0.6,
      "fgp": 0.412,
      "min": 17.2,
      "tov": 0.7,
      "oreb": 1.2,
      "ast": 0.9,
      "pf": 2.2,
      "blk": 0.2,
      "tpp": 0.279,
      "reb": 3.3,
      "dreb": 2.1,
      "pts": 6.8
    },
    "hcc": "Texas-El Paso",
    "ht": "6-1",
    "dob": "1992-10-20",
    "num": "6",
    "y": 1,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Aerial",
    "ln": "Powers",
    "pid": "1627672",
    "pos": "G",
    "avg": {
      "ftp": 0.818,
      "gs": 1,
      "gp": 12,
      "stl": 0.4,
      "fgp": 0.339,
      "min": 20.3,
      "tov": 1.5,
      "oreb": 1.4,
      "ast": 1.5,
      "pf": 1.7,
      "blk": 0.5,
      "tpp": 0.31,
      "reb": 4.2,
      "dreb": 2.8,
      "pts": 10.8
    },
    "hcc": "Michigan State",
    "ht": "6-0",
    "dob": "1994-01-17",
    "num": "23",
    "y": 1,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Evelyn",
    "ln": "Akhator",
    "pid": "1628262",
    "pos": "F",
    "avg": {
      "ftp": 0.833,
      "gs": 0,
      "gp": 15,
      "stl": 0.1,
      "fgp": 0.25,
      "min": 4.1,
      "tov": 0.3,
      "oreb": 0.5,
      "ast": 0,
      "pf": 0.4,
      "blk": 0.2,
      "tpp": 0,
      "reb": 0.6,
      "dreb": 0.1,
      "pts": 0.9
    },
    "hcc": "Kentucky",
    "ht": "6-3",
    "dob": "1995-02-03",
    "num": "9",
    "y": 0,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Saniya",
    "ln": "Chong",
    "pid": "1628267",
    "pos": "G",
    "avg": {
      "ftp": 0.862,
      "gs": 0,
      "gp": 33,
      "stl": 0.7,
      "fgp": 0.359,
      "min": 11,
      "tov": 0.8,
      "oreb": 0.3,
      "ast": 1,
      "pf": 0.6,
      "blk": 0.1,
      "tpp": 0.237,
      "reb": 0.9,
      "dreb": 0.6,
      "pts": 2.7
    },
    "hcc": "Connecticut",
    "ht": "5-8",
    "dob": "1994-06-27",
    "num": "12",
    "y": 0,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Kaela",
    "ln": "Davis",
    "pid": "1628273",
    "pos": "G",
    "avg": {
      "ftp": 0.754,
      "gs": 0,
      "gp": 33,
      "stl": 0.5,
      "fgp": 0.389,
      "min": 15.5,
      "tov": 1.5,
      "oreb": 0.3,
      "ast": 1,
      "pf": 1.7,
      "blk": 0.1,
      "tpp": 0.429,
      "reb": 1.4,
      "dreb": 1.1,
      "pts": 6.1
    },
    "hcc": "South Carolina",
    "ht": "6-2",
    "dob": "1995-03-15",
    "num": "10",
    "y": 0,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Allisha",
    "ln": "Gray",
    "pid": "1628277",
    "pos": "G",
    "avg": {
      "ftp": 0.803,
      "gs": 34,
      "gp": 34,
      "stl": 1.5,
      "fgp": 0.381,
      "min": 27.2,
      "tov": 1.2,
      "oreb": 1.6,
      "ast": 1.3,
      "pf": 2.1,
      "blk": 0.6,
      "tpp": 0.299,
      "reb": 3.9,
      "dreb": 2.3,
      "pts": 13
    },
    "hcc": "South Carolina",
    "ht": "6-0",
    "dob": "1995-01-12",
    "num": "15",
    "y": 0,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  },
  {
    "fn": "Breanna",
    "ln": "Lewis",
    "pid": "1628292",
    "pos": "C",
    "avg": {
      "ftp": 0.75,
      "gs": 0,
      "gp": 13,
      "stl": 0,
      "fgp": 0.167,
      "min": 4,
      "tov": 0.5,
      "oreb": 0.2,
      "ast": 0.2,
      "pf": 1.2,
      "blk": 0,
      "tpp": 0,
      "reb": 0.7,
      "dreb": 0.5,
      "pts": 0.5
    },
    "hcc": "Kansas State",
    "ht": "6-5",
    "dob": "1994-06-22",
    "num": "22",
    "y": 0,
    "tn": "Wings 🐴",
    "tc": "Dallas"
  }
];

function calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function getMode(arr) {
  return arr.sort((a, b) =>
    arr.filter(v => v === a).length -
    arr.filter(v => v === b).length
  ).pop();
}

function getAvgOfArr(arr) {
  let sum = arr.reduce((previous, current) => current += previous);
  return Math.floor(sum / arr.length);
}

function getHeightInFeet(heightInches) {
  if (heightInches % 12 === 0) {
    return (heightInches / 12) + ' feet';
  } else {
    let feet = Math.floor(heightInches / 12);
    let inches = heightInches % 12;

    return feet + "'" + inches + '"';
  }
}

function isBigEnough(value) {
  if ((value.key >= userInput[0]) && (value.key <= userInput[1])) {
    return true;
  };
}

var parser = d3.time.format("%Y-%m-%d");
var formatter = new Intl.DateTimeFormat("en", {
  month: "long"
});


//ENDS HELPERS

//filter everything by the number of years they have in the WNBA 
var userInput = [0, 20];
var ageRanges = [
  [0, 3],
  [4, 6],
  [7, 9],
  [10, 20],
  [0, 20]
];
var buttonContainer = document.getElementsByClassName("container__buttons")[0];

function appendButtons() {
  for (var i = 0; i < ageRanges.length; i++) {
    var button = document.createElement("button");
    button.dataset.value = ageRanges[i];

    if (i === 3) {
      button.innerHTML = "10+ years";
    } else if (i === 4) {
      button.innerHTML = "all";
    } else {
      button.innerHTML = ageRanges[i][0] + '-' + ageRanges[i][1] + " years";
    }

    button.className = "btn";
    buttonContainer.appendChild(button);

    button.addEventListener("click", function (e) {
      userInput = (e.originalTarget.dataset.value).split(",");
      updateData()
    });
  }
}

appendButtons()

// main logic

function updateData() {
    function findPropertyMode(property) {
      return getMode(makeArray(property));
    }

    var players = data;
    var playersArr = [].concat.apply([], players);

    //organizes by years
    var playersByYearsOfExperience = d3.nest()
      .key(function (d) {
        return d.y
      })
      .entries(playersArr);
    var filteredPlayers = playersByYearsOfExperience.filter(isBigEnough);

    //make arrays from json keys
    function makeArray(property) {
      var arr = filteredPlayers.map(function (year) {
        return year.values.map(function (player) {
          return player[property]
        })
      });
      return [].concat.apply([], arr);
    }

    function getAvgAge() {
      var playerBirthdays = makeArray('dob').map(function (dob) {
        return parser.parse(dob)
      })

      var playerAges = playerBirthdays.map(function (dob) {
        if (dob) {
          return calculateAge(dob)
        }
      })

      return playerAges
    }

    function getBirthdayData() {
      var arr = getPlayersArr();

      arr.forEach(function (item) {
        item.birthMonth = formatter.format(parser.parse(item.dob))
        item.dob = parser.parse(item.dob);
      })

      arr.sort(sortByDateAscending);

      function sortByDateAscending(a, b) {
        // Dates will be cast to numbers automagically:
        return a.dob.getMonth() - b.dob.getMonth();
      }

      return getCountByProp(arr, 'birthMonth', 0);
    }

    function getAvgHeight() {

      var playersHeights = makeArray('ht');

      //iterate through each player playersHeights  
      var heightsInInches = playersHeights.map(function (height) {
        var heightArr = height.split('-')
        var inches = ((heightArr[0] * 12) + (heightArr[1] * 1))

        return inches
      })

      var avgHeightInches = getAvgOfArr(heightsInInches);

      return getHeightInFeet(avgHeightInches);

    }

    function getExperienceData() {

      var arr = getPlayersArr();

      arr.sort(function (a, b) {
        return a.y - b.y;
      });

      return getCountByProp(arr, 'y', 0);
    }

    function filterArrByCount(arr, countMin) {
      var newArr = [];

      arr.map(function (item) {

        if (item.values.length > countMin) {
          newArr.push(item);
        }
      })

      return newArr;

    }

    function filterUniversities() {

      var top5University = [];
      var other = {
        key: "Other",
        values: []
      };

      getCountByProp(getPlayersArr(), 'hcc', 0).map(function (university) {
        university.values.map(function (uni) {
          if (uni.values.length > 2) {
            top5University.push(uni);
          } else {
            other.values.push(uni)
          }
        })
      })

      top5University.push(other);

      return top5University;

    }

    function appendPlayerNamesFromPID(pid, parentChart) {

      const playerIDs = pid.map(values => values.key)

      var newArr = [];

      playerIDs.forEach(function (id) {
        newArr.push(playersArr.filter(player => player.pid == id))
      })

      d3.selectAll(".names p").remove();

      newArr.map(function (player) {
        player.map(function (person) {
          d3.select(parentChart + ".names").append("p").html(
            `<a href="http://www.wnba.com/player/${person.fn}-${person.ln}/#/career" <p>  ${person.fn} ${person.ln}, ${person.tc} ${person.tn} </p></a>`
          )
        })
      })

    }

    function getCountByProp(arr, prop, countMin) {

      var playersByProp = d3.nest()
        .key(function (d) {
          return d[prop];
        })
        .key(function (d) {
          return d.pid;
        })
        .rollup(function (v) {
          return v.length
        })
        .entries(arr);

      return [{
        key: `Players by ${prop}`,
        values: filterArrByCount(playersByProp, countMin)
      }]

    }

    function getPlayersArr() {

      var arr = [];

      filteredPlayers.forEach(function (year) {
        year.values.map(function (player) {
          arr.push(player)
        })
      })

      return arr

    }

    //NV CHARTS
    function makeBarChart(parentChart) {
      var chart = nv.models.discreteBarChart()
        .x(function (d) {
          return d.key
        })
        .y(function (d) {
          return d.values.length
        })
        .staggerLabels(true); //TODO actually just rotate labels

      chart.margin().left = 20;
      chart.margin({
        bottom: 60
      });

      chart.valueFormat(d3.format('.0f'));
      chart.yAxis.tickFormat(d3.format('.0f'));
      chart.noData("Not enough players for duplicates, sorry!");

      chart.discretebar.dispatch.on("elementClick", function (e) {

        chartOnClick(parentChart, e)

        chart.update();

      });

      return chart
    }

    function chartOnClick(parentChart, e) {

      appendPlayerNamesFromPID(e.data.values, parentChart);

      d3.selectAll('.grid')
        .classed('names--active', false)

      d3.select(parentChart + '.grid')
        .classed('names--active', true)

      if (parentChart === '.chart__universities') {

        d3.select(parentChart + ' svg')
          .attr('width', "600")
          .attr('height', "600");

      } else {

        d3.select(parentChart + ' svg')
          .attr('width', "1000")
          .attr('height', "500");
      }


      window.dispatchEvent(new Event('resize'));

    }

    //first name chart
    nv.addGraph(function () {
      var chart = makeBarChart('.chart__firstnames');

      d3.select('.chart__firstnames svg')
        .datum(getCountByProp(getPlayersArr(), 'fn', 1))
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    })

    //last name chart
    nv.addGraph(function () {
      var chart = makeBarChart('.chart__lastnames');

      d3.select('.chart__lastnames svg')
        .datum(getCountByProp(getPlayersArr(), 'ln', 1))
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    })

    //university chart
    nv.addGraph(function () {
      var chart = nv.models.pieChart()
        .x(function (d) {
          return d.key
        })
        .y(function (d) {
          return d.values.length
        })
        .showLabels(true)
        .labelsOutside(true)
        .labelSunbeamLayout(true)
        .showLegend(false);

      chart.valueFormat(d3.format('.0f'));
      chart.pie.dispatch.on("elementClick", function (e) {
        chartOnClick('.chart__universities', e)
        chart.update();
      });

      d3.select(".chart__universities svg")
        .datum(filterUniversities())
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });

    //experience chart
    nv.addGraph(function () {

      var chart = makeBarChart('.chart__experience');

      chart.discretebar.dispatch.on("elementClick", function (e) {
        chartOnClick('.chart__experience', e)
        chart.update();
      });

      d3.select('.chart__experience svg')
        .datum(getExperienceData())
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    })

    //birth month chart
    nv.addGraph(function () {
      var chart = makeBarChart('.chart__birthmonth');

      chart.discretebar.dispatch.on("elementClick", function (e) {
        chartOnClick('.chart__birthmonth', e)
        chart.update();
      });


      d3.select('.chart__birthmonth svg')
        .datum(getBirthdayData())
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    })

    //Avgs 
    var avgPlayerAge = getAvgOfArr(getAvgAge());
    var avgHeight = getAvgHeight();
    var modePlayerFirstNames = findPropertyMode('fn');
    var modePlayerLastNames = findPropertyMode('ln');
    var modePlayerSchool = findPropertyMode('hcc');
    var modePlayerNumber = findPropertyMode('num');
    var playersYearsExperience = makeArray('y');
    var playersYearsExpeienceAvg = getAvgOfArr(playersYearsExperience);

    //append Avgs to DOM
    d3.select(".age").text(avgPlayerAge);
    d3.select(".height").text(avgHeight);
    d3.select(".college").text(modePlayerSchool);
    d3.select(".first-name").text(modePlayerFirstNames);
    d3.select(".last-name").text(modePlayerLastNames);
    d3.select(".experience").text(playersYearsExpeienceAvg);

}

updateData()
