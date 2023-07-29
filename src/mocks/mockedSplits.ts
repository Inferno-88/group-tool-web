import { CharacterClass, Person, Raid, RaidName, Split, ItemDictionary } from '../types';

const raid1: Raid = {
  "tanks": [
    {
      "name": "davetta",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "pacoknight",
      "className": "DK",
      "main": true
    }
  ],
  "healers": [
    {
      "name": "aryllene",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "tjholy",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "khaya",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "arusha",
      "className": "PRIEST",
      "main": false
    },
    {
      "name": "dauran",
      "className": "PRIEST",
      "main": true
    }
  ],
  "dps": [
    {
      "name": "deadlyfaith",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "misto",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "nagosa",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "koobonobo",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "tadano",
      "className": "DK",
      "main": true
    },
    {
      "name": "frostyboy",
      "className": "DK",
      "main": true
    },
    {
      "name": "subcom",
      "className": "DK",
      "main": true
    },
    {
      "name": "nurgl",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "barrious",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "tekala",
      "className": "HUNTER",
      "main": false
    },
    {
      "name": "hallheim",
      "className": "WARRIOR",
      "main": true
    },
    {
      "name": "fiachna",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "kororii",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "cotolento",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "nuubie",
      "className": "MAGE",
      "main": false
    },
    {
      "name": "kondoriano",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "nutkin",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "azmoroth",
      "className": "WARLOCK",
      "main": false
    }
  ],
  "occupiedCharacters": [
    {
      "name": "davetta",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "pacoknight",
      "className": "DK",
      "main": true
    },
    {
      "name": "aryllene",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "tjholy",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "khaya",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "arusha",
      "className": "PRIEST",
      "main": false
    },
    {
      "name": "dauran",
      "className": "PRIEST",
      "main": true
    },
    {
      "name": "tekala",
      "className": "HUNTER",
      "main": false
    },
    {
      "name": "misto",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "tadano",
      "className": "DK",
      "main": true
    },
    {
      "name": "frostyboy",
      "className": "DK",
      "main": true
    },
    {
      "name": "hallheim",
      "className": "WARRIOR",
      "main": true
    },
    {
      "name": "deadlyfaith",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "fiachna",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "nurgl",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "barrious",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "nagosa",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "cotolento",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "koobonobo",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "kondoriano",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "nutkin",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "nuubie",
      "className": "MAGE",
      "main": false
    },
    {
      "name": "azmoroth",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "kororii",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "subcom",
      "className": "DK",
      "main": true
    }
  ],
  "raidAvailableChars": [
    {
      "name": "bridew",
      "className": "ROGUE",
      "main": false
    },
    {
      "name": "palenian",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "salabonobo",
      "className": "HUNTER",
      "main": false
    }
  ],
  "originalRaidAvailableChars": [
    {
      "name": "davetta",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "pariah",
      "className": "PRIEST",
      "main": false
    },
    {
      "name": "pacoknight",
      "className": "DK",
      "main": true
    },
    {
      "name": "gorosm",
      "className": "DRUID",
      "main": false
    },
    {
      "name": "bullette",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "tekala",
      "className": "HUNTER",
      "main": false
    },
    {
      "name": "arylpog",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "aryllene",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "tjholy",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "tjcardinal",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "jeyp",
      "className": "PRIEST",
      "main": true
    },
    {
      "name": "khaya",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "khayaya",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "littlemist",
      "className": "DK",
      "main": true
    },
    {
      "name": "misto",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "tadano",
      "className": "DK",
      "main": true
    },
    {
      "name": "komachi",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "frostyboy",
      "className": "DK",
      "main": true
    },
    {
      "name": "salabenji",
      "className": "HUNTER",
      "main": true
    },
    {
      "name": "salabonobo",
      "className": "HUNTER",
      "main": false
    },
    {
      "name": "hallheim",
      "className": "WARRIOR",
      "main": true
    },
    {
      "name": "kaboodles",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "deadlyfaith",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "deadlyblight",
      "className": "DK",
      "main": false
    },
    {
      "name": "fiachna",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "nurgl",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "nurghoul",
      "className": "DK",
      "main": false
    },
    {
      "name": "bride",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "bridew",
      "className": "ROGUE",
      "main": false
    },
    {
      "name": "barrious",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "barrioustwo",
      "className": "ROGUE",
      "main": false
    },
    {
      "name": "haumea",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "arusha",
      "className": "PRIEST",
      "main": false
    },
    {
      "name": "doggle",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "nagosa",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "nagodk",
      "className": "DK",
      "main": false
    },
    {
      "name": "cotolento",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "koobo",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "koobonobo",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "edenian",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "palenian",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "dauran",
      "className": "PRIEST",
      "main": true
    },
    {
      "name": "cowran",
      "className": "DRUID",
      "main": false
    },
    {
      "name": "kondoriano",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "kondaddicted",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "nutkin",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "holynut",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "swerved",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "nuubie",
      "className": "MAGE",
      "main": false
    },
    {
      "name": "kelthal",
      "className": "WARRIOR",
      "main": true
    },
    {
      "name": "azmocow",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "azmoroth",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "shock",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "kororii",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "subcom",
      "className": "DK",
      "main": true
    },
    {
      "name": "notfife",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "notpolo",
      "className": "WARLOCK",
      "main": true
    }
  ],
  "raidName": RaidName.ULDUAR,
  "itemCharactersMap": {
    "Comet's Trail": [
      {
        "name": "hallheim",
        "className": "WARRIOR",
        "main": true
      },
      {
        "name": "fiachna",
        "className": "DRUID",
        "main": true
      },
      {
        "name": "nurgl",
        "className": "ROGUE",
        "main": true
      },
      {
        "name": "barrious",
        "className": "ROGUE",
        "main": true
      }
    ],
    "Star-beaded Clutch": [
      {
        "name": "aryllene",
        "className": "PALADIN",
        "main": false
      },
      {
        "name": "koobonobo",
        "className": "SHAMAN",
        "main": false
      }
    ],
    "Treads of the False Oracle": [
      {
        "name": "khaya",
        "className": "SHAMAN",
        "main": true
      },
      {
        "name": "cotolento",
        "className": "MAGE",
        "main": true
      }
    ],
    "Pharos Gloves": [
      {
        "name": "tjholy",
        "className": "PALADIN",
        "main": true
      },
      {
        "name": "khaya",
        "className": "SHAMAN",
        "main": true
      }
    ],
    "Seal of the Betrayed King": [
      {
        "name": "pacoknight",
        "className": "DK",
        "main": true
      }
    ],
    "Pendulum of Infinity": [
      {
        "name": "nurgl",
        "className": "ROGUE",
        "main": true
      }
    ],
    "Solar Bindings": [
      {
        "name": "fiachna",
        "className": "DRUID",
        "main": true
      }
    ],
    "Starshard Edge": [
      {
        "name": "nuubie",
        "className": "MAGE",
        "main": false
      }
    ],
    "Cosmos": [
      {
        "name": "nuubie",
        "className": "MAGE",
        "main": false
      }
    ],
    "Conductive Seal": [
      {
        "name": "nutkin",
        "className": "WARLOCK",
        "main": true
      }
    ],
    "Flare of the Heavens": [
      {
        "name": "khaya",
        "className": "SHAMAN",
        "main": true
      }
    ],
    "Show of Faith": [
      {
        "name": "dauran",
        "className": "PRIEST",
        "main": true
      }
    ]
  },
  "freeItems": [
    "Armbands of Bedlam",
    "Crown of Luminescence",
    "Dark Edge of Depravity",
    "Legguards of Cunning Deception",
    "Sabatons of Lifeless Night",
    "Starwatcher's Binding",
    "Titanskin Cloak",
    "Val'anyr, Hammer of Ancient Kings",
    "Voldrethar, Dark Blade of Oblivion"
  ]
};

const raid2: Raid ={
  "tanks": [
    {
      "name": "holynut",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "gorosm",
      "className": "DRUID",
      "main": false
    }
  ],
  "healers": [
    {
      "name": "arylpog",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "kaboodles",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "bullette",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "cowran",
      "className": "DRUID",
      "main": false
    },
    {
      "name": "jeyp",
      "className": "PRIEST",
      "main": true
    }
  ],
  "dps": [
    {
      "name": "notfife",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "haumea",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "shock",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "littlemist",
      "className": "DK",
      "main": true
    },
    {
      "name": "deadlyblight",
      "className": "DK",
      "main": false
    },
    {
      "name": "nagodk",
      "className": "DK",
      "main": false
    },
    {
      "name": "bride",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "barrioustwo",
      "className": "ROGUE",
      "main": false
    },
    {
      "name": "salabenji",
      "className": "HUNTER",
      "main": true
    },
    {
      "name": "kelthal",
      "className": "WARRIOR",
      "main": true
    },
    {
      "name": "doggle",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "azmocow",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "pariah",
      "className": "PRIEST",
      "main": false
    },
    {
      "name": "koobo",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "edenian",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "komachi",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "swerved",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "notpolo",
      "className": "WARLOCK",
      "main": true
    }
  ],
  "occupiedCharacters": [
    {
      "name": "gorosm",
      "className": "DRUID",
      "main": false
    },
    {
      "name": "holynut",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "bullette",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "arylpog",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "jeyp",
      "className": "PRIEST",
      "main": true
    },
    {
      "name": "kaboodles",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "cowran",
      "className": "DRUID",
      "main": false
    },
    {
      "name": "pariah",
      "className": "PRIEST",
      "main": false
    },
    {
      "name": "littlemist",
      "className": "DK",
      "main": true
    },
    {
      "name": "komachi",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "salabenji",
      "className": "HUNTER",
      "main": true
    },
    {
      "name": "deadlyblight",
      "className": "DK",
      "main": false
    },
    {
      "name": "bride",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "barrioustwo",
      "className": "ROGUE",
      "main": false
    },
    {
      "name": "haumea",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "doggle",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "nagodk",
      "className": "DK",
      "main": false
    },
    {
      "name": "koobo",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "edenian",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "swerved",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "kelthal",
      "className": "WARRIOR",
      "main": true
    },
    {
      "name": "azmocow",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "shock",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "notfife",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "notpolo",
      "className": "WARLOCK",
      "main": true
    }
  ],
  "raidAvailableChars": [
    {
      "name": "khayaya",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "kondaddicted",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "nurghoul",
      "className": "DK",
      "main": false
    },
    {
      "name": "tjcardinal",
      "className": "PALADIN",
      "main": false
    }
  ],
  "originalRaidAvailableChars": [
    {
      "name": "davetta",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "pariah",
      "className": "PRIEST",
      "main": false
    },
    {
      "name": "pacoknight",
      "className": "DK",
      "main": true
    },
    {
      "name": "gorosm",
      "className": "DRUID",
      "main": false
    },
    {
      "name": "bullette",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "tekala",
      "className": "HUNTER",
      "main": false
    },
    {
      "name": "arylpog",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "aryllene",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "tjholy",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "tjcardinal",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "jeyp",
      "className": "PRIEST",
      "main": true
    },
    {
      "name": "khaya",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "khayaya",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "littlemist",
      "className": "DK",
      "main": true
    },
    {
      "name": "misto",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "tadano",
      "className": "DK",
      "main": true
    },
    {
      "name": "komachi",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "frostyboy",
      "className": "DK",
      "main": true
    },
    {
      "name": "salabenji",
      "className": "HUNTER",
      "main": true
    },
    {
      "name": "salabonobo",
      "className": "HUNTER",
      "main": false
    },
    {
      "name": "hallheim",
      "className": "WARRIOR",
      "main": true
    },
    {
      "name": "kaboodles",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "deadlyfaith",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "deadlyblight",
      "className": "DK",
      "main": false
    },
    {
      "name": "fiachna",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "nurgl",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "nurghoul",
      "className": "DK",
      "main": false
    },
    {
      "name": "bride",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "bridew",
      "className": "ROGUE",
      "main": false
    },
    {
      "name": "barrious",
      "className": "ROGUE",
      "main": true
    },
    {
      "name": "barrioustwo",
      "className": "ROGUE",
      "main": false
    },
    {
      "name": "haumea",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "arusha",
      "className": "PRIEST",
      "main": false
    },
    {
      "name": "doggle",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "nagosa",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "nagodk",
      "className": "DK",
      "main": false
    },
    {
      "name": "cotolento",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "koobo",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "koobonobo",
      "className": "SHAMAN",
      "main": false
    },
    {
      "name": "edenian",
      "className": "MAGE",
      "main": true
    },
    {
      "name": "palenian",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "dauran",
      "className": "PRIEST",
      "main": true
    },
    {
      "name": "cowran",
      "className": "DRUID",
      "main": false
    },
    {
      "name": "kondoriano",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "kondaddicted",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "nutkin",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "holynut",
      "className": "PALADIN",
      "main": false
    },
    {
      "name": "swerved",
      "className": "WARLOCK",
      "main": true
    },
    {
      "name": "nuubie",
      "className": "MAGE",
      "main": false
    },
    {
      "name": "kelthal",
      "className": "WARRIOR",
      "main": true
    },
    {
      "name": "azmocow",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "azmoroth",
      "className": "WARLOCK",
      "main": false
    },
    {
      "name": "shock",
      "className": "SHAMAN",
      "main": true
    },
    {
      "name": "kororii",
      "className": "DRUID",
      "main": true
    },
    {
      "name": "subcom",
      "className": "DK",
      "main": true
    },
    {
      "name": "notfife",
      "className": "PALADIN",
      "main": true
    },
    {
      "name": "notpolo",
      "className": "WARLOCK",
      "main": true
    }
  ],
  "raidName": RaidName.ULDUAR,
  "itemCharactersMap": {
    "Legguards of Cunning Deception": [
      {
        "name": "azmocow",
        "className": "DRUID",
        "main": true
      },
      {
        "name": "barrioustwo",
        "className": "ROGUE",
        "main": false
      }
    ],
    "Star-beaded Clutch": [
      {
        "name": "kaboodles",
        "className": "PALADIN",
        "main": false
      },
      {
        "name": "cowran",
        "className": "DRUID",
        "main": false
      }
    ],
    "Starshard Edge": [
      {
        "name": "pariah",
        "className": "PRIEST",
        "main": false
      },
      {
        "name": "komachi",
        "className": "WARLOCK",
        "main": false
      }
    ],
    "Cosmos": [
      {
        "name": "pariah",
        "className": "PRIEST",
        "main": false
      },
      {
        "name": "komachi",
        "className": "WARLOCK",
        "main": false
      }
    ],
    "Flare of the Heavens": [
      {
        "name": "bullette",
        "className": "DRUID",
        "main": true
      },
      {
        "name": "jeyp",
        "className": "PRIEST",
        "main": true
      }
    ],
    "Pharos Gloves": [
      {
        "name": "jeyp",
        "className": "PRIEST",
        "main": true
      },
      {
        "name": "doggle",
        "className": "DRUID",
        "main": true
      }
    ],
    "Comet's Trail": [
      {
        "name": "bride",
        "className": "ROGUE",
        "main": true
      },
      {
        "name": "azmocow",
        "className": "DRUID",
        "main": true
      }
    ],
    "Starwatcher's Binding": [
      {
        "name": "bullette",
        "className": "DRUID",
        "main": true
      },
      {
        "name": "doggle",
        "className": "DRUID",
        "main": true
      }
    ],
    "Crown of Luminescence": [
      {
        "name": "bullette",
        "className": "DRUID",
        "main": true
      }
    ],
    "Treads of the False Oracle": [
      {
        "name": "bullette",
        "className": "DRUID",
        "main": true
      }
    ],
    "Sabatons of Lifeless Night": [
      {
        "name": "deadlyblight",
        "className": "DK",
        "main": false
      }
    ],
    "Val'anyr, Hammer of Ancient Kings": [
      {
        "name": "cowran",
        "className": "DRUID",
        "main": false
      }
    ],
    "Dark Edge of Depravity": [
      {
        "name": "gorosm",
        "className": "DRUID",
        "main": false
      }
    ],
    "Pendulum of Infinity": [
      {
        "name": "azmocow",
        "className": "DRUID",
        "main": true
      }
    ],
    "Solar Bindings": [
      {
        "name": "gorosm",
        "className": "DRUID",
        "main": false
      }
    ],
    "Conductive Seal": [
      {
        "name": "bullette",
        "className": "DRUID",
        "main": true
      }
    ],
    "Show of Faith": [
      {
        "name": "cowran",
        "className": "DRUID",
        "main": false
      }
    ]
  },
  "freeItems": [
    "Armbands of Bedlam",
    "Seal of the Betrayed King",
    "Titanskin Cloak",
    "Voldrethar, Dark Blade of Oblivion"
  ]
};

export const mockedSplits: Split[] = [
  {
    raid1,
    raid2,
    raidName: RaidName.ULDUAR,
  }
];

export const mockedPersons: Person[] = [
  {
    "name": "aryl",
    "mainClassName": CharacterClass.PALADIN,
    "characters": [
      {
        "name": "arylpog",
        "className": "PALADIN",
        "main": true
      },
      {
        "name": "aryllene",
        "className": "PALADIN",
        "main": false
      }
    ]
  },
  {
    "name": "azmo",
    "mainClassName": CharacterClass.DRUID,
    "characters": [
      {
        "name": "azmocow",
        "className": "DRUID",
        "main": true
      },
      {
        "name": "azmoroth",
        "className": "WARLOCK",
        "main": false
      }
    ]
  },
  {
    "name": "barrious",
    "mainClassName": CharacterClass.ROGUE,
    "characters": [
      {
        "name": "barrious",
        "className": "ROGUE",
        "main": true
      },
      {
        "name": "barrioustwo",
        "className": "ROGUE",
        "main": false
      }
    ]
  },
  {
    "name": "bride",
    "mainClassName": CharacterClass.ROGUE,
    "characters": [
      {
        "name": "bride",
        "className": "ROGUE",
        "main": true
      },
      {
        "name": "bridew",
        "className": "ROGUE",
        "main": false
      }
    ]
  },
  {
    "name": "bullette",
    "mainClassName": CharacterClass.DRUID,
    "characters": [
      {
        "name": "bullette",
        "className": "DRUID",
        "main": true
      },
      {
        "name": "tekala",
        "className": "HUNTER",
        "main": false
      }
    ]
  },
  {
    "name": "cotolento",
    "mainClassName": CharacterClass.MAGE,
    "characters": [
      {
        "name": "cotolento",
        "className": "MAGE",
        "main": true
      },
      {
        "name": "shilke",
        "className": "PRIEST",
        "main": false
      }
    ]
  },
  {
    "name": "dauran",
    "mainClassName": CharacterClass.PRIEST,
    "characters": [
      {
        "name": "dauran",
        "className": "PRIEST",
        "main": true
      },
      {
        "name": "cowran",
        "className": "DRUID",
        "main": false
      }
    ]
  },
  {
    "name": "dave",
    "mainClassName": CharacterClass.PALADIN,
    "characters": [
      {
        "name": "davetta",
        "className": "PALADIN",
        "main": true
      },
      {
        "name": "pariah",
        "className": "PRIEST",
        "main": false
      }
    ]
  },
  {
    "name": "deadly",
    "mainClassName": CharacterClass.PALADIN,
    "characters": [
      {
        "name": "deadlyfaith",
        "className": "PALADIN",
        "main": true
      },
      {
        "name": "deadlyblight",
        "className": "DK",
        "main": false
      }
    ]
  },
  {
    "name": "doggle",
    "mainClassName": CharacterClass.DRUID,
    "characters": [
      {
        "name": "doggle",
        "className": "DRUID",
        "main": true
      },
      {
        "name": "doggleplump",
        "className": "MAGE",
        "main": false
      }
    ]
  },
  {
    "name": "edenian",
    "mainClassName": CharacterClass.MAGE,
    "characters": [
      {
        "name": "edenian",
        "className": "MAGE",
        "main": true
      },
      {
        "name": "palenian",
        "className": "PALADIN",
        "main": false
      }
    ]
  },
  {
    "name": "fiachna",
    "mainClassName": CharacterClass.DRUID,
    "characters": [
      {
        "name": "fiachna",
        "className": "DRUID",
        "main": true
      },
      {
        "name": "averonth",
        "className": "WARRIOR",
        "main": false
      }
    ]
  },
  {
    "name": "frostyboy",
    "mainClassName": CharacterClass.DK,
    "characters": [
      {
        "name": "frostyboy",
        "className": "DK",
        "main": true
      },
      {
        "name": "aandariel",
        "className": "MAGE",
        "main": false
      }
    ]
  },
  {
    "name": "hallheim",
    "mainClassName": CharacterClass.WARRIOR,
    "characters": [
      {
        "name": "hallheim",
        "className": "WARRIOR",
        "main": true
      },
      {
        "name": "kaboodles",
        "className": "PALADIN",
        "main": false
      }
    ]
  },
  {
    "name": "haumea",
    "mainClassName": CharacterClass.SHAMAN,
    "characters": [
      {
        "name": "haumea",
        "className": "SHAMAN",
        "main": true
      },
      {
        "name": "arusha",
        "className": "PRIEST",
        "main": false
      }
    ]
  },
  {
    "name": "jeyp",
    "mainClassName": CharacterClass.PRIEST,
    "characters": [
      {
        "name": "jeyp",
        "className": "PRIEST",
        "main": true
      },
      {
        "name": "jeypx",
        "className": "DRUID",
        "main": false
      }
    ]
  },
  {
    "name": "jj",
    "mainClassName": CharacterClass.WARLOCK,
    "characters": [
      {
        "name": "nutkin",
        "className": "WARLOCK",
        "main": true
      },
      {
        "name": "holynut",
        "className": "PALADIN",
        "main": false
      }
    ]
  },
  {
    "name": "kelthal",
    "mainClassName": CharacterClass.WARRIOR,
    "characters": [
      {
        "name": "kelthal",
        "className": "WARRIOR",
        "main": true
      },
      {
        "name": "mithandir",
        "className": "PALADIN",
        "main": false
      }
    ]
  },
  {
    "name": "khaya",
    "mainClassName": CharacterClass.SHAMAN,
    "characters": [
      {
        "name": "khaya",
        "className": "SHAMAN",
        "main": true
      },
      {
        "name": "khayo",
        "className": "WARLOCK",
        "main": false
      },
      {
        "name": "khayaya",
        "className": "SHAMAN",
        "main": false
      }
    ]
  },
  {
    "name": "kondo",
    "mainClassName": CharacterClass.WARLOCK,
    "characters": [
      {
        "name": "kondoriano",
        "className": "WARLOCK",
        "main": true
      },
      {
        "name": "kondaddicted",
        "className": "WARLOCK",
        "main": false
      }
    ]
  },
  {
    "name": "koobo",
    "mainClassName": CharacterClass.MAGE,
    "characters": [
      {
        "name": "koobo",
        "className": "MAGE",
        "main": true
      },
      {
        "name": "koobonobo",
        "className": "SHAMAN",
        "main": false
      }
    ]
  },
  {
    "name": "kororii",
    "mainClassName": CharacterClass.DRUID,
    "characters": [
      {
        "name": "kororii",
        "className": "DRUID",
        "main": true
      }
    ]
  },
  {
    "name": "mist",
    "mainClassName": CharacterClass.DK,
    "characters": [
      {
        "name": "littlemist",
        "className": "DK",
        "main": true
      },
      {
        "name": "misto",
        "className": "SHAMAN",
        "main": false
      }
    ]
  },
  {
    "name": "nagosa",
    "mainClassName": CharacterClass.SHAMAN,
    "characters": [
      {
        "name": "nagosa",
        "className": "SHAMAN",
        "main": true
      },
      {
        "name": "nagodk",
        "className": "DK",
        "main": false
      }
    ]
  },
  {
    "name": "notfife",
    "mainClassName": CharacterClass.PALADIN,
    "characters": [
      {
        "name": "notfife",
        "className": "PALADIN",
        "main": true
      }
    ]
  },
  {
    "name": "notpolo",
    "mainClassName": CharacterClass.WARLOCK,
    "characters": [
      {
        "name": "notpolo",
        "className": "WARLOCK",
        "main": true
      }
    ]
  },
  {
    "name": "nurgl",
    "mainClassName": CharacterClass.ROGUE,
    "characters": [
      {
        "name": "nurgl",
        "className": "ROGUE",
        "main": true
      },
      {
        "name": "zurgl",
        "className": "WARRIOR",
        "main": false
      },
      {
        "name": "nurghoul",
        "className": "DK",
        "main": false
      }
    ]
  },
  {
    "name": "paco",
    "mainClassName": CharacterClass.DK,
    "characters": [
      {
        "name": "pacoknight",
        "className": "DK",
        "main": true
      },
      {
        "name": "gorosm",
        "className": "DRUID",
        "main": false
      }
    ]
  },
  {
    "name": "sala",
    "mainClassName": CharacterClass.HUNTER,
    "characters": [
      {
        "name": "salabenji",
        "className": "HUNTER",
        "main": true
      },
      {
        "name": "salabonobo",
        "className": "HUNTER",
        "main": false
      }
    ]
  },
  {
    "name": "shock",
    "mainClassName": CharacterClass.SHAMAN,
    "characters": [
      {
        "name": "shock",
        "className": "SHAMAN",
        "main": true
      }
    ]
  },
  {
    "name": "subcom",
    "mainClassName": CharacterClass.DK,
    "characters": [
      {
        "name": "subcom",
        "className": "DK",
        "main": true
      }
    ]
  },
  {
    "name": "swerved",
    "mainClassName": CharacterClass.WARLOCK,
    "characters": [
      {
        "name": "swerved",
        "className": "WARLOCK",
        "main": true
      },
      {
        "name": "nuubie",
        "className": "MAGE",
        "main": false
      },
      {
        "name": "erm",
        "className": "DK",
        "main": false
      }
    ]
  },
  {
    "name": "tj",
    "mainClassName": CharacterClass.PALADIN,
    "characters": [
      {
        "name": "tjholy",
        "className": "PALADIN",
        "main": true
      },
      {
        "name": "tjcardinal",
        "className": "PALADIN",
        "main": false
      },
      {
        "name": "tjbaracus",
        "className": "DK",
        "main": false
      }
    ]
  },
  {
    "name": "zul",
    "mainClassName": CharacterClass.DK,
    "characters": [
      {
        "name": "tadano",
        "className": "DK",
        "main": true
      },
      {
        "name": "komachi",
        "className": "WARLOCK",
        "main": false
      }
    ]
  }
];

export const mockedItems: ItemDictionary[] = [
  {"id":144,"url":"https://www.wowhead.com/wotlk/item=47551/aethas-intensity","name":"aethas' intensity","originalName":"Aethas' Intensity","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},
  {"id":129,"url":"https://www.wowhead.com/wotlk/item=45663/armbands-of-bedlam","name":"armbands of bedlam","originalName":"Armbands of Bedlam","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},
  {"id":177,"url":"https://www.wowhead.com/wotlk/item=47474/armbands-of-dark-determination","name":"armbands of dark determination","originalName":"Armbands of Dark Determination","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":196,"url":"https://www.wowhead.com/wotlk/item=47459/armguards-of-the-shieldmaiden","name":"armguards of the shieldmaiden","originalName":"Armguards of the Shieldmaiden","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":169,"url":"https://www.wowhead.com/wotlk/item=47443/band-of-callous-aggression","name":"band of callous aggression","originalName":"Band of Callous Aggression","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":141,"url":"https://www.wowhead.com/wotlk/item=47476/band-of-the-traitor-king","name":"band of the traitor king","originalName":"Band of the Traitor King","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":160,"url":"https://www.wowhead.com/wotlk/item=47422/barb-of-tarasque","name":"barb of tarasque","originalName":"Barb of Tarasque","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},
  {"id":194,"url":"https://www.wowhead.com/wotlk/item=47448/bastion-of-resolve","name":"bastion of resolve","originalName":"Bastion of Resolve","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},
  {"id":193,"url":"https://www.wowhead.com/wotlk/item=47447/belt-of-biting-cold","name":"belt of biting cold","originalName":"Belt of Biting Cold","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},
  {"id":213,"url":"https://www.wowhead.com/wotlk/item=47444/belt-of-bloodied-scars","name":"belt of bloodied scars","originalName":"Belt of Bloodied Scars","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":152,"url":"https://www.wowhead.com/wotlk/item=47469/belt-of-pale-thorns","name":"belt of pale thorns","originalName":"Belt of Pale Thorns","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":171,"url":"https://www.wowhead.com/wotlk/item=47460/belt-of-the-pitiless-killer","name":"belt of the pitiless killer","originalName":"Belt of the Pitiless Killer","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":187,"url":"https://www.wowhead.com/wotlk/item=47419/belt-of-the-tenebrous-mist","name":"belt of the tenebrous mist","originalName":"Belt of the Tenebrous Mist","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},
  {"id":198,"url":"https://www.wowhead.com/wotlk/item=47485/bindings-of-the-ashen-saint","name":"bindings of the ashen saint","originalName":"Bindings of the Ashen Saint","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},
  {"id":136,"url":"https://www.wowhead.com/wotlk/item=47427/blood-fury","name":"blood fury","originalName":"Blood Fury","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":163,"url":"https://www.wowhead.com/wotlk/item=47429/bloodbath-girdle","name":"bloodbath girdle","originalName":"Bloodbath Girdle","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":188,"url":"https://www.wowhead.com/wotlk/item=47423/boots-of-the-harsh-winter","name":"boots of the harsh winter","originalName":"Boots of the Harsh Winter","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},
  {"id":200,"url":"https://www.wowhead.com/wotlk/item=47482/boots-of-the-icy-floe","name":"boots of the icy floe","originalName":"Boots of the Icy Floe","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},
  {"id":212,"url":"https://www.wowhead.com/wotlk/item=47455/bracers-of-the-broken-bond","name":"bracers of the broken bond","originalName":"Bracers of the Broken Bond","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":167,"url":"https://www.wowhead.com/wotlk/item=47442/bracers-of-the-silent-massacre","name":"bracers of the silent massacre","originalName":"Bracers of the Silent Massacre","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC}
  ,{"id":215,"url":"https://www.wowhead.com/wotlk/item=47478/breeches-of-the-deepening-void","name":"breeches of the deepening void","originalName":"Breeches of the Deepening Void","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":221,"url":"https://www.wowhead.com/wotlk/item=47550/cairnes-endurance","name":"cairne's endurance","originalName":"Cairne's Endurance","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},
  {"id":164,"url":"https://www.wowhead.com/wotlk/item=47433/charge-of-the-eredar","name":"charge of the eredar","originalName":"Charge of the Eredar","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":211,"url":"https://www.wowhead.com/wotlk/item=47449/chestplate-of-the-frostwolf-hero","name":"chestplate of the frostwolf hero","originalName":"Chestplate of the Frostwolf Hero","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":195,"url":"https://www.wowhead.com/wotlk/item=47471/chestplate-of-the-frozen-lake","name":"chestplate of the frozen lake","originalName":"Chestplate of the Frozen Lake","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":208,"url":"https://www.wowhead.com/wotlk/item=47439/circle-of-the-darkmender","name":"circle of the darkmender","originalName":"Circle of the Darkmender","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":157,"url":"https://www.wowhead.com/wotlk/item=47418/cloak-of-the-untamed-predator","name":"cloak of the untamed predator","originalName":"Cloak of the Untamed Predator","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":105,"url":"https://www.wowhead.com/wotlk/item=45609/comets-trail","name":"comet's trail","originalName":"Comet's Trail","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},{"id":91,"url":"https://www.wowhead.com/wotlk/item=45495/conductive-seal","name":"conductive seal","originalName":"Conductive Seal","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":106,"url":"https://www.wowhead.com/wotlk/item=45617/cosmos","name":"cosmos","originalName":"Cosmos","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":90,"url":"https://www.wowhead.com/wotlk/item=45497/crown-of-luminescence","name":"crown of luminescence","originalName":"Crown of Luminescence","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":153,"url":"https://www.wowhead.com/wotlk/item=47468/cry-of-the-valkyr","name":"cry of the val'kyr","originalName":"Cry of the Val'kyr","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":143,"url":"https://www.wowhead.com/wotlk/item=47528/cudgel-of-the-damned","name":"cudgel of the damned","originalName":"Cudgel of the Damned","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":158,"url":"https://www.wowhead.com/wotlk/item=47412/cuirass-of-cruel-intent","name":"cuirass of cruel intent","originalName":"Cuirass of Cruel Intent","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":178,"url":"https://www.wowhead.com/wotlk/item=47486/cuirass-of-flowing-elements","name":"cuirass of flowing elements","originalName":"Cuirass of Flowing Elements","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":134,"url":"https://www.wowhead.com/wotlk/item=45533/dark-edge-of-depravity","name":"dark edge of depravity","originalName":"Dark Edge of Depravity","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},{"id":138,"url":"https://www.wowhead.com/wotlk/item=47467/dark-essence-bindings","name":"dark essence bindings","originalName":"Dark Essence Bindings","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":224,"url":"https://www.wowhead.com/wotlk/item=47430/dawnbreaker-sabatons","name":"dawnbreaker sabatons","originalName":"Dawnbreaker Sabatons","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":147,"url":"https://www.wowhead.com/wotlk/item=47464/deaths-choice","name":"death's choice","originalName":"Death's Choice","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":165,"url":"https://www.wowhead.com/wotlk/item=47428/deaths-head-crossbow","name":"death's head crossbow","originalName":"Death's Head Crossbow","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":185,"url":"https://www.wowhead.com/wotlk/item=47417/drape-of-the-refreshing-winds","name":"drape of the refreshing winds","originalName":"Drape of the Refreshing Winds","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":137,"url":"https://www.wowhead.com/wotlk/item=47446/dual-blade-butcher","name":"dual-blade butcher","originalName":"Dual-blade Butcher","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":218,"url":"https://www.wowhead.com/wotlk/item=47523/fezziks-autocannon","name":"fezzik's autocannon","originalName":"Fezzik's Autocannon","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":94,"url":"https://www.wowhead.com/wotlk/item=45518/flare-of-the-heavens","name":"flare of the heavens","originalName":"Flare of the Heavens","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":186,"url":"https://www.wowhead.com/wotlk/item=47425/flowing-robes-of-ascent","name":"flowing robes of ascent","originalName":"Flowing Robes of Ascent","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":206,"url":"https://www.wowhead.com/wotlk/item=47421/forlorn-barrier","name":"forlorn barrier","originalName":"Forlorn Barrier","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":184,"url":"https://www.wowhead.com/wotlk/item=47548/garroshs-rage","name":"garrosh's rage","originalName":"Garrosh's Rage","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":180,"url":"https://www.wowhead.com/wotlk/item=47492/gauntlets-of-bitter-reprisal","name":"gauntlets of bitter reprisal","originalName":"Gauntlets of Bitter Reprisal","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":202,"url":"https://www.wowhead.com/wotlk/item=47484/girdle-of-the-forgotten-martyr","name":"girdle of the forgotten martyr","originalName":"Girdle of the Forgotten Martyr","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":175,"url":"https://www.wowhead.com/wotlk/item=47461/gouge-of-the-frigid-heart","name":"gouge of the frigid heart","originalName":"Gouge of the Frigid Heart","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":172,"url":"https://www.wowhead.com/wotlk/item=47457/greaves-of-ruthless-judgment","name":"greaves of ruthless judgment","originalName":"Greaves of Ruthless Judgment","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":181,"url":"https://www.wowhead.com/wotlk/item=47473/greaves-of-the-saronite-citadel","name":"greaves of the saronite citadel","originalName":"Greaves of the Saronite Citadel","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":219,"url":"https://www.wowhead.com/wotlk/item=47520/grievance","name":"grievance","originalName":"Grievance","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":199,"url":"https://www.wowhead.com/wotlk/item=47487/handwraps-of-the-lifeless-touch","name":"handwraps of the lifeless touch","originalName":"Handwraps of the Lifeless Touch","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":149,"url":"https://www.wowhead.com/wotlk/item=47415/hauberk-of-the-towering-monstrosity","name":"hauberk of the towering monstrosity","originalName":"Hauberk of the Towering Monstrosity","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":155,"url":"https://www.wowhead.com/wotlk/item=47491/hellion-glaive","name":"hellion glaive","originalName":"Hellion Glaive","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":182,"url":"https://www.wowhead.com/wotlk/item=47475/hellscream-slicer","name":"hellscream slicer","originalName":"Hellscream Slicer","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":166,"url":"https://www.wowhead.com/wotlk/item=47445/icewalker-treads","name":"icewalker treads","originalName":"Icewalker Treads","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":170,"url":"https://www.wowhead.com/wotlk/item=47451/juggernauts-vitality","name":"juggernaut's vitality","originalName":"Juggernaut's Vitality","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":204,"url":"https://www.wowhead.com/wotlk/item=47554/lady-liadrins-conviction","name":"lady liadrin's conviction","originalName":"Lady Liadrin's Conviction","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":223,"url":"https://www.wowhead.com/wotlk/item=47440/leggings-of-failing-light","name":"leggings of failing light","originalName":"Leggings of Failing Light","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":201,"url":"https://www.wowhead.com/wotlk/item=47479/leggings-of-the-awakening","name":"leggings of the awakening","originalName":"Leggings of the Awakening","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":179,"url":"https://www.wowhead.com/wotlk/item=47480/leggings-of-the-lurking-threat","name":"leggings of the lurking threat","originalName":"Leggings of the Lurking Threat","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":97,"url":"https://www.wowhead.com/wotlk/item=45536/legguards-of-cunning-deception","name":"legguards of cunning deception","originalName":"Legguards of Cunning Deception","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},{"id":154,"url":"https://www.wowhead.com/wotlk/item=47466/legionnaires-gorget","name":"legionnaire's gorget","originalName":"Legionnaire's Gorget","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":173,"url":"https://www.wowhead.com/wotlk/item=47465/legplates-of-ascension","name":"legplates of ascension","originalName":"Legplates of Ascension","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":207,"url":"https://www.wowhead.com/wotlk/item=47434/legplates-of-feverish-dedication","name":"legplates of feverish dedication","originalName":"Legplates of Feverish Dedication","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":135,"url":"https://www.wowhead.com/wotlk/item=47420/legwraps-of-the-broken-beast","name":"legwraps of the broken beast","originalName":"Legwraps of the Broken Beast","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":142,"url":"https://www.wowhead.com/wotlk/item=47489/lurid-manifestation","name":"lurid manifestation","originalName":"Lurid Manifestation","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":197,"url":"https://www.wowhead.com/wotlk/item=47490/maidens-adoration","name":"maiden's adoration","originalName":"Maiden's Adoration","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":148,"url":"https://www.wowhead.com/wotlk/item=47481/might-of-the-nerub","name":"might of the nerub","originalName":"Might of the Nerub","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":220,"url":"https://www.wowhead.com/wotlk/item=47518/mortalis","name":"mortalis","originalName":"Mortalis","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":225,"url":"https://www.wowhead.com/wotlk/item=47470/mystifying-charm","name":"mystifying charm","originalName":"Mystifying Charm","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":183,"url":"https://www.wowhead.com/wotlk/item=47513/orgrims-deflector","name":"orgrim's deflector","originalName":"Orgrim's Deflector","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":222,"url":"https://www.wowhead.com/wotlk/item=47435/pants-of-the-soothing-touch","name":"pants of the soothing touch","originalName":"Pants of the Soothing Touch","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":93,"url":"https://www.wowhead.com/wotlk/item=45517/pendulum-of-infinity","name":"pendulum of infinity","originalName":"Pendulum of Infinity","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},{"id":100,"url":"https://www.wowhead.com/wotlk/item=45665/pharos-gloves","name":"pharos gloves","originalName":"Pharos Gloves","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":161,"url":"https://www.wowhead.com/wotlk/item=47436/pride-of-the-demon-lord","name":"pride of the demon lord","originalName":"Pride of the Demon Lord","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":159,"url":"https://www.wowhead.com/wotlk/item=47413/ring-of-the-violent-temperament","name":"ring of the violent temperament","originalName":"Ring of the Violent Temperament","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":210,"url":"https://www.wowhead.com/wotlk/item=47453/robes-of-the-shattered-fellowship","name":"robes of the shattered fellowship","originalName":"Robes of the Shattered Fellowship","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":104,"url":"https://www.wowhead.com/wotlk/item=45599/sabatons-of-lifeless-night","name":"sabatons of lifeless night","originalName":"Sabatons of Lifeless Night","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},{"id":205,"url":"https://www.wowhead.com/wotlk/item=47424/sabatons-of-the-courageous","name":"sabatons of the courageous","originalName":"Sabatons of the Courageous","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":168,"url":"https://www.wowhead.com/wotlk/item=47456/sabatons-of-tremoring-earth","name":"sabatons of tremoring earth","originalName":"Sabatons of Tremoring Earth","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":98,"url":"https://www.wowhead.com/wotlk/item=45534/seal-of-the-betrayed-king","name":"seal of the betrayed king","originalName":"Seal of the Betrayed King","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},{"id":99,"url":"https://www.wowhead.com/wotlk/item=45535/show-of-faith","name":"show of faith","originalName":"Show of Faith","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":209,"url":"https://www.wowhead.com/wotlk/item=47452/shroud-of-displacement","name":"shroud of displacement","originalName":"Shroud of Displacement","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":214,"url":"https://www.wowhead.com/wotlk/item=47462/skyweaver-vestments","name":"skyweaver vestments","originalName":"Skyweaver Vestments","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":191,"url":"https://www.wowhead.com/wotlk/item=47432/solace-of-the-fallen","name":"solace of the fallen","originalName":"Solace of the Fallen","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":102,"url":"https://www.wowhead.com/wotlk/item=45611/solar-bindings","name":"solar bindings","originalName":"Solar Bindings","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},{"id":103,"url":"https://www.wowhead.com/wotlk/item=45616/star-beaded-clutch","name":"star-beaded clutch","originalName":"Star-beaded Clutch","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":92,"url":"https://www.wowhead.com/wotlk/item=45620/starshard-edge","name":"starshard edge","originalName":"Starshard Edge","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":101,"url":"https://www.wowhead.com/wotlk/item=45619/starwatchers-binding","name":"starwatcher's binding","originalName":"Starwatcher's Binding","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":150,"url":"https://www.wowhead.com/wotlk/item=47416/stygian-bladebreaker","name":"stygian bladebreaker","originalName":"Stygian Bladebreaker","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":203,"url":"https://www.wowhead.com/wotlk/item=47525/sufferance","name":"sufferance","originalName":"Sufferance","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":217,"url":"https://www.wowhead.com/wotlk/item=47483/sufferings-end","name":"suffering's end","originalName":"Suffering's End","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":156,"url":"https://www.wowhead.com/wotlk/item=47546/sylvanas-cunning","name":"sylvanas' cunning","originalName":"Sylvanas' Cunning","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":192,"url":"https://www.wowhead.com/wotlk/item=47437/talisman-of-heedless-sins","name":"talisman of heedless sins","originalName":"Talisman of Heedless Sins","itemType":"CASTER","active":true,"raidName":RaidName.TOGC},{"id":174,"url":"https://www.wowhead.com/wotlk/item=47458/the-executioners-vice","name":"the executioner's vice","originalName":"The Executioner's Vice","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":128,"url":"https://www.wowhead.com/wotlk/item=45496/titanskin-cloak","name":"titanskin cloak","originalName":"Titanskin Cloak","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},{"id":96,"url":"https://www.wowhead.com/wotlk/item=45537/treads-of-the-false-oracle","name":"treads of the false oracle","originalName":"Treads of the False Oracle","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":176,"url":"https://www.wowhead.com/wotlk/item=47463/twins-pact","name":"twin's pact","originalName":"Twin's Pact","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":118,"url":"https://www.wowhead.com/wotlk/item=46017/valanyr","name":"valanyr","originalName":"Val'anyr, Hammer of Ancient Kings","itemType":"CASTER","active":true,"raidName":RaidName.ULDUAR},{"id":162,"url":"https://www.wowhead.com/wotlk/item=47431/vest-of-calamitous-fate","name":"vest of calamitous fate","originalName":"Vest of Calamitous Fate","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":95,"url":"https://www.wowhead.com/wotlk/item=45516/voldrethar-dark-blade-of-oblivion","name":"voldrethar, dark blade of oblivion","originalName":"Voldrethar, Dark Blade of Oblivion","itemType":"PHYSICAL","active":true,"raidName":RaidName.ULDUAR},{"id":216,"url":"https://www.wowhead.com/wotlk/item=47472/waistguard-of-deathly-dominion","name":"waistguard of deathly dominion","originalName":"Waistguard of Deathly Dominion","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC},{"id":190,"url":"https://www.wowhead.com/wotlk/item=47441/wristwraps-of-cloudy-omen","name":"wristwraps of cloudy omen","originalName":"Wristwraps of Cloudy Omen","itemType":"PHYSICAL","active":true,"raidName":RaidName.TOGC}
  ];