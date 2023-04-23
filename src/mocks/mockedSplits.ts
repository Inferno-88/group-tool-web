import { Person, Raid, Split } from "../types";

const raid1: Raid = {
  tanks: [
    {
      name: "davetta",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "tjbaracus",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: false,
      items: [],
    },
  ],
  healers: [
    {
      name: "arusha",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "palenian",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bullette",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "kaboodles",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "arylpog",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
  ],
  dps: [
    {
      name: "deadlyfaith",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "misto",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 25,
            url: null,
            name: "Golden Saronite Dragon",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "tadano",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "erm",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mayv",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bride",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nurgl",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Combat",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "ethupan",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeypx",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kelthal",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "shilke",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "doggle",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "Balance",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "nagosa",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: "Drape of Mortal Downfall",
          },
          status: "BIS",
        },
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "koobo",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "khayo",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kondaddicted",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "emipian",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  occupiedCharacters: [
    {
      name: "davetta",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "tjbaracus",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "arusha",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "palenian",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bullette",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "kaboodles",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "arylpog",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "deadlyfaith",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "misto",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 25,
            url: null,
            name: "Golden Saronite Dragon",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "tadano",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "erm",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mayv",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bride",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nurgl",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Combat",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "ethupan",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeypx",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kelthal",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "shilke",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "doggle",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "Balance",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "nagosa",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: "Drape of Mortal Downfall",
          },
          status: "BIS",
        },
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "koobo",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "khayo",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kondaddicted",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "emipian",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  raidAvailableChars: [
    {
      name: "gorosm",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "Balance",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "aandariel",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "salabonobo",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "averonth",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "barrioustwo",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Combat",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 25,
            url: null,
            name: "Golden Saronite Dragon",
          },
          status: "BIS",
        },
        {
          item: {
            id: 24,
            url: null,
            name: "Bladetwister",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "dauran",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "OS",
        },
        {
          item: {
            id: 4,
            url: null,
            name: "Sapphire Amulet of Renewal",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nutkin",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Demonology",
        },
      ],
      main: true,
      items: [],
    },
  ],
  itemCharactersMap: {
    "Breastplate of the Devoted": [
      {
        name: "arylpog",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
          {
            item: {
              id: 8,
              url: null,
              name: "Breastplate of the Devoted",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Wisdom's Hold": [
      {
        name: "palenian",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Valanyr: [
      {
        name: "bullette",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "RestorationDruid",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Voldrethar, Dark Blade of Oblivion": [
      {
        name: "kelthal",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Dreambinder: [
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Sabatons of Lifeless Night": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Legguards of Cunning Deception": [
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Golden Saronite Dragon": [
      {
        name: "misto",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 25,
              url: null,
              name: "Golden Saronite Dragon",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Belt of the Fallen Wyrm": [
      {
        name: "palenian",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "kaboodles",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Drape of Mortal Downfall": [
      {
        name: "nagosa",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Elemental",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 6,
              url: null,
              name: "Drape of Mortal Downfall",
            },
            status: "BIS",
          },
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Star-beaded Clutch": [
      {
        name: "arylpog",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
          {
            item: {
              id: 8,
              url: null,
              name: "Breastplate of the Devoted",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nagosa",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Elemental",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 6,
              url: null,
              name: "Drape of Mortal Downfall",
            },
            status: "BIS",
          },
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Pyrelight Circle": [
      {
        name: "palenian",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "kaboodles",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Belt of Colossal Rage": [
      {
        name: "mayv",
        className: "DK",
        specs: [
          {
            main: true,
            type: "FrostDk",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Solar Bindings": [
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Seal of the Betrayed King": [
      {
        name: "mayv",
        className: "DK",
        specs: [
          {
            main: true,
            type: "FrostDk",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Drape of Icy Intent": [
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Skyforge Crossbow": [
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Show of Faith": [
      {
        name: "bullette",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "RestorationDruid",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Boundless Gaze": [
      {
        name: "misto",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 25,
              url: null,
              name: "Golden Saronite Dragon",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Plated Leggings of Ruination": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "mayv",
        className: "DK",
        specs: [
          {
            main: true,
            type: "FrostDk",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Frigid Strength of Hodir": [
      {
        name: "kelthal",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Comet's Trail": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "misto",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 25,
              url: null,
              name: "Golden Saronite Dragon",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Warhelm of the Champion": [
      {
        name: "erm",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Embrace of the Gladiator": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Shoulderpads of the Intruder": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Constellus: [
      {
        name: "arusha",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Discipline",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 5,
              url: null,
              name: "Constellus",
            },
            status: "BIS",
          },
        ],
      },
    ],
  },
};

const raid2: Raid = {
  tanks: [
    {
      name: "pacoknight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "OS",
        },
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "holynut",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "BIS",
        },
      ],
    },
  ],
  healers: [
    {
      name: "khaya",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "RestorationShaman",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 1,
            url: null,
            name: "Bindings of Winter Gale",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "aryllene",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeyp",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 4,
            url: null,
            name: "Sapphire Amulet of Renewal",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "cowran",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "tjholy",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
  ],
  dps: [
    {
      name: "mayvi",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "haumea",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "littlemist",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "deadlyblight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nagodk",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "frostyboy",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "barrious",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bridew",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 24,
            url: null,
            name: "Bladetwister",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "salabenji",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "fiachna",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "hallheim",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "OS",
        },
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "pariah",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "goll",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "edenian",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "kondoriano",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "komachi",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "swerved",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  occupiedCharacters: [
    {
      name: "pacoknight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "OS",
        },
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "holynut",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "khaya",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "RestorationShaman",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 1,
            url: null,
            name: "Bindings of Winter Gale",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "aryllene",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeyp",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 4,
            url: null,
            name: "Sapphire Amulet of Renewal",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "cowran",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "tjholy",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mayvi",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "haumea",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "littlemist",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "deadlyblight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nagodk",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "frostyboy",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "barrious",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bridew",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 24,
            url: null,
            name: "Bladetwister",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "salabenji",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "fiachna",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "hallheim",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "OS",
        },
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "pariah",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "goll",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "edenian",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "kondoriano",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "komachi",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "swerved",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  raidAvailableChars: [
    {
      name: "tekala",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "ethupanDk",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "zurgle",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "cotolento",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: "Drape of Mortal Downfall",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mithrandir",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: false,
      items: [],
    },
  ],
  itemCharactersMap: {
    "Greaves of Swift Vengeance": [
      {
        name: "salabenji",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 43,
              url: null,
              name: "Greaves of Swift Vengeance",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Breastplate of the Devoted": [
      {
        name: "tjholy",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 8,
              url: null,
              name: "Breastplate of the Devoted",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Wisdom's Hold": [
      {
        name: "aryllene",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Valanyr: [
      {
        name: "khaya",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "RestorationShaman",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 1,
              url: null,
              name: "Bindings of Winter Gale",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Voldrethar, Dark Blade of Oblivion": [
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Sabatons of Lifeless Night": [
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Dreambinder: [
      {
        name: "salabenji",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 43,
              url: null,
              name: "Greaves of Swift Vengeance",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Legguards of Cunning Deception": [
      {
        name: "salabenji",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 43,
              url: null,
              name: "Greaves of Swift Vengeance",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Seal of the Betrayed King": [
      {
        name: "pacoknight",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Blood",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "OS",
          },
          {
            item: {
              id: 35,
              url: null,
              name: "Armbands of Bedlam",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Belt of the Fallen Wyrm": [
      {
        name: "aryllene",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Pyrelight Circle": [
      {
        name: "aryllene",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Belt of Colossal Rage": [
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Bindings of Winter Gale": [
      {
        name: "khaya",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "RestorationShaman",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 1,
              url: null,
              name: "Bindings of Winter Gale",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Solar Bindings": [
      {
        name: "barrious",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Heart of Iron": [
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Bulwark of Algalon": [
      {
        name: "holynut",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "ProtectionPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Armbands of Bedlam": [
      {
        name: "pacoknight",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Blood",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "OS",
          },
          {
            item: {
              id: 35,
              url: null,
              name: "Armbands of Bedlam",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Drape of Icy Intent": [
      {
        name: "bridew",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 24,
              url: null,
              name: "Bladetwister",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Show of Faith": [
      {
        name: "jeyp",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Discipline",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 4,
              url: null,
              name: "Sapphire Amulet of Renewal",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Boundless Gaze": [
      {
        name: "haumea",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Plated Leggings of Ruination": [
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "deadlyblight",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Frigid Strength of Hodir": [
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Bladetwister: [
      {
        name: "bridew",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 24,
              url: null,
              name: "Bladetwister",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Comet's Trail": [
      {
        name: "haumea",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "barrious",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bridew",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 24,
              url: null,
              name: "Bladetwister",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Warhelm of the Champion": [
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Embrace of the Gladiator": [
      {
        name: "barrious",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Sapphire Amulet of Renewal": [
      {
        name: "jeyp",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Discipline",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 4,
              url: null,
              name: "Sapphire Amulet of Renewal",
            },
            status: "OS",
          },
        ],
      },
    ],
    Constellus: [
      {
        name: "pariah",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Shadow",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 5,
              url: null,
              name: "Constellus",
            },
            status: "BIS",
          },
        ],
      },
    ],
  },
};

const raid3: Raid = {
  tanks: [
    {
      name: "davetta",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "tjbaracus",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: false,
      items: [],
    },
  ],
  healers: [
    {
      name: "arusha",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "palenian",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bullette",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "kaboodles",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "arylpog",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
  ],
  dps: [
    {
      name: "deadlyfaith",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "misto",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 25,
            url: null,
            name: "Golden Saronite Dragon",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "tadano",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "erm",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mayv",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bride",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nurgl",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Combat",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "ethupan",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeypx",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kelthal",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "shilke",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "doggle",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "Balance",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "nagosa",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: "Drape of Mortal Downfall",
          },
          status: "BIS",
        },
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "koobo",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "khayo",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kondaddicted",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "emipian",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  occupiedCharacters: [
    {
      name: "davetta",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "tjbaracus",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "arusha",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "palenian",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bullette",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "kaboodles",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "arylpog",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "deadlyfaith",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "misto",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 25,
            url: null,
            name: "Golden Saronite Dragon",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "tadano",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "erm",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mayv",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bride",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nurgl",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Combat",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "ethupan",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeypx",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kelthal",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "shilke",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "doggle",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "Balance",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "nagosa",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: "Drape of Mortal Downfall",
          },
          status: "BIS",
        },
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "koobo",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "khayo",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kondaddicted",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "emipian",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  raidAvailableChars: [
    {
      name: "gorosm",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "Balance",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "aandariel",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "salabonobo",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "averonth",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "barrioustwo",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Combat",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 25,
            url: null,
            name: "Golden Saronite Dragon",
          },
          status: "BIS",
        },
        {
          item: {
            id: 24,
            url: null,
            name: "Bladetwister",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "dauran",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "OS",
        },
        {
          item: {
            id: 4,
            url: null,
            name: "Sapphire Amulet of Renewal",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nutkin",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Demonology",
        },
      ],
      main: true,
      items: [],
    },
  ],
  itemCharactersMap: {
    "Breastplate of the Devoted": [
      {
        name: "arylpog",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
          {
            item: {
              id: 8,
              url: null,
              name: "Breastplate of the Devoted",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Wisdom's Hold": [
      {
        name: "palenian",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Valanyr: [
      {
        name: "bullette",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "RestorationDruid",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Voldrethar, Dark Blade of Oblivion": [
      {
        name: "kelthal",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Dreambinder: [
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Sabatons of Lifeless Night": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Legguards of Cunning Deception": [
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Golden Saronite Dragon": [
      {
        name: "misto",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 25,
              url: null,
              name: "Golden Saronite Dragon",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Belt of the Fallen Wyrm": [
      {
        name: "palenian",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "kaboodles",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Drape of Mortal Downfall": [
      {
        name: "nagosa",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Elemental",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 6,
              url: null,
              name: "Drape of Mortal Downfall",
            },
            status: "BIS",
          },
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Star-beaded Clutch": [
      {
        name: "arylpog",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
          {
            item: {
              id: 8,
              url: null,
              name: "Breastplate of the Devoted",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nagosa",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Elemental",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 6,
              url: null,
              name: "Drape of Mortal Downfall",
            },
            status: "BIS",
          },
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Pyrelight Circle": [
      {
        name: "palenian",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "kaboodles",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Belt of Colossal Rage": [
      {
        name: "mayv",
        className: "DK",
        specs: [
          {
            main: true,
            type: "FrostDk",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Solar Bindings": [
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Seal of the Betrayed King": [
      {
        name: "mayv",
        className: "DK",
        specs: [
          {
            main: true,
            type: "FrostDk",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Drape of Icy Intent": [
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Skyforge Crossbow": [
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Show of Faith": [
      {
        name: "bullette",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "RestorationDruid",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Boundless Gaze": [
      {
        name: "misto",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 25,
              url: null,
              name: "Golden Saronite Dragon",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Plated Leggings of Ruination": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "mayv",
        className: "DK",
        specs: [
          {
            main: true,
            type: "FrostDk",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Frigid Strength of Hodir": [
      {
        name: "kelthal",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Comet's Trail": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "misto",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 25,
              url: null,
              name: "Golden Saronite Dragon",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Warhelm of the Champion": [
      {
        name: "erm",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Embrace of the Gladiator": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Shoulderpads of the Intruder": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Constellus: [
      {
        name: "arusha",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Discipline",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 5,
              url: null,
              name: "Constellus",
            },
            status: "BIS",
          },
        ],
      },
    ],
  },
};

const raid4: Raid = {
  tanks: [
    {
      name: "pacoknight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "OS",
        },
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "holynut",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "BIS",
        },
      ],
    },
  ],
  healers: [
    {
      name: "khaya",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "RestorationShaman",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 1,
            url: null,
            name: "Bindings of Winter Gale",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "aryllene",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeyp",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 4,
            url: null,
            name: "Sapphire Amulet of Renewal",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "cowran",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "tjholy",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
  ],
  dps: [
    {
      name: "mayvi",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "haumea",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "littlemist",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "deadlyblight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nagodk",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "frostyboy",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "barrious",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bridew",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 24,
            url: null,
            name: "Bladetwister",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "salabenji",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "fiachna",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "hallheim",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "OS",
        },
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "pariah",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "goll",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "edenian",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "kondoriano",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "komachi",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "swerved",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  occupiedCharacters: [
    {
      name: "pacoknight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "OS",
        },
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "holynut",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "khaya",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "RestorationShaman",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 1,
            url: null,
            name: "Bindings of Winter Gale",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "aryllene",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeyp",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 4,
            url: null,
            name: "Sapphire Amulet of Renewal",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "cowran",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "tjholy",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mayvi",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "haumea",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "littlemist",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "deadlyblight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nagodk",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "frostyboy",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "barrious",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bridew",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 24,
            url: null,
            name: "Bladetwister",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "salabenji",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "fiachna",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "hallheim",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "OS",
        },
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "pariah",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "goll",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "edenian",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "kondoriano",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "komachi",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "swerved",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  raidAvailableChars: [
    {
      name: "tekala",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "ethupanDk",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "zurgle",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "cotolento",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: "Drape of Mortal Downfall",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mithrandir",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: false,
      items: [],
    },
  ],
  itemCharactersMap: {
    "Greaves of Swift Vengeance": [
      {
        name: "salabenji",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 43,
              url: null,
              name: "Greaves of Swift Vengeance",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Breastplate of the Devoted": [
      {
        name: "tjholy",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 8,
              url: null,
              name: "Breastplate of the Devoted",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Wisdom's Hold": [
      {
        name: "aryllene",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Valanyr: [
      {
        name: "khaya",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "RestorationShaman",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 1,
              url: null,
              name: "Bindings of Winter Gale",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Voldrethar, Dark Blade of Oblivion": [
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Sabatons of Lifeless Night": [
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Dreambinder: [
      {
        name: "salabenji",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 43,
              url: null,
              name: "Greaves of Swift Vengeance",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Legguards of Cunning Deception": [
      {
        name: "salabenji",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 43,
              url: null,
              name: "Greaves of Swift Vengeance",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Seal of the Betrayed King": [
      {
        name: "pacoknight",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Blood",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "OS",
          },
          {
            item: {
              id: 35,
              url: null,
              name: "Armbands of Bedlam",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Belt of the Fallen Wyrm": [
      {
        name: "aryllene",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Pyrelight Circle": [
      {
        name: "aryllene",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Belt of Colossal Rage": [
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Bindings of Winter Gale": [
      {
        name: "khaya",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "RestorationShaman",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 1,
              url: null,
              name: "Bindings of Winter Gale",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Solar Bindings": [
      {
        name: "barrious",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Heart of Iron": [
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Bulwark of Algalon": [
      {
        name: "holynut",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "ProtectionPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Armbands of Bedlam": [
      {
        name: "pacoknight",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Blood",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "OS",
          },
          {
            item: {
              id: 35,
              url: null,
              name: "Armbands of Bedlam",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Drape of Icy Intent": [
      {
        name: "bridew",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 24,
              url: null,
              name: "Bladetwister",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Show of Faith": [
      {
        name: "jeyp",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Discipline",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 4,
              url: null,
              name: "Sapphire Amulet of Renewal",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Boundless Gaze": [
      {
        name: "haumea",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Plated Leggings of Ruination": [
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "deadlyblight",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Frigid Strength of Hodir": [
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Bladetwister: [
      {
        name: "bridew",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 24,
              url: null,
              name: "Bladetwister",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Comet's Trail": [
      {
        name: "haumea",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "barrious",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bridew",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 24,
              url: null,
              name: "Bladetwister",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Warhelm of the Champion": [
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Embrace of the Gladiator": [
      {
        name: "barrious",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Sapphire Amulet of Renewal": [
      {
        name: "jeyp",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Discipline",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 4,
              url: null,
              name: "Sapphire Amulet of Renewal",
            },
            status: "OS",
          },
        ],
      },
    ],
    Constellus: [
      {
        name: "pariah",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Shadow",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 5,
              url: null,
              name: "Constellus",
            },
            status: "BIS",
          },
        ],
      },
    ],
  },
};

const raid5: Raid = {
  tanks: [
    {
      name: "davetta",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "tjbaracus",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: false,
      items: [],
    },
  ],
  healers: [
    {
      name: "arusha",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "palenian",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bullette",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "kaboodles",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "arylpog",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
  ],
  dps: [
    {
      name: "deadlyfaith",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "misto",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 25,
            url: null,
            name: "Golden Saronite Dragon",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "tadano",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "erm",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mayv",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bride",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nurgl",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Combat",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "ethupan",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeypx",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kelthal",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "shilke",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "doggle",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "Balance",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "nagosa",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: "Drape of Mortal Downfall",
          },
          status: "BIS",
        },
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "koobo",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "khayo",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kondaddicted",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "emipian",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  occupiedCharacters: [
    {
      name: "davetta",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "tjbaracus",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "arusha",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "palenian",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bullette",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "kaboodles",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "arylpog",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "deadlyfaith",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "misto",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 25,
            url: null,
            name: "Golden Saronite Dragon",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "tadano",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "erm",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mayv",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bride",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nurgl",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Combat",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 32,
            url: null,
            name: "Shoulderpads of the Intruder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "ethupan",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 34,
            url: null,
            name: "Skyforge Crossbow",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeypx",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kelthal",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "shilke",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "doggle",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "Balance",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "nagosa",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: "Drape of Mortal Downfall",
          },
          status: "BIS",
        },
        {
          item: {
            id: 7,
            url: null,
            name: "Star-beaded Clutch",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "koobo",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "khayo",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "kondaddicted",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "emipian",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  raidAvailableChars: [
    {
      name: "gorosm",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "Balance",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "aandariel",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "salabonobo",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "averonth",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "barrioustwo",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Combat",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 25,
            url: null,
            name: "Golden Saronite Dragon",
          },
          status: "BIS",
        },
        {
          item: {
            id: 24,
            url: null,
            name: "Bladetwister",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "dauran",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "OS",
        },
        {
          item: {
            id: 4,
            url: null,
            name: "Sapphire Amulet of Renewal",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nutkin",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Demonology",
        },
      ],
      main: true,
      items: [],
    },
  ],
  itemCharactersMap: {
    "Breastplate of the Devoted": [
      {
        name: "arylpog",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
          {
            item: {
              id: 8,
              url: null,
              name: "Breastplate of the Devoted",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Wisdom's Hold": [
      {
        name: "palenian",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Valanyr: [
      {
        name: "bullette",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "RestorationDruid",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Voldrethar, Dark Blade of Oblivion": [
      {
        name: "kelthal",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Dreambinder: [
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Sabatons of Lifeless Night": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Legguards of Cunning Deception": [
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Golden Saronite Dragon": [
      {
        name: "misto",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 25,
              url: null,
              name: "Golden Saronite Dragon",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Belt of the Fallen Wyrm": [
      {
        name: "palenian",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "kaboodles",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Drape of Mortal Downfall": [
      {
        name: "nagosa",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Elemental",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 6,
              url: null,
              name: "Drape of Mortal Downfall",
            },
            status: "BIS",
          },
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Star-beaded Clutch": [
      {
        name: "arylpog",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
          {
            item: {
              id: 8,
              url: null,
              name: "Breastplate of the Devoted",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nagosa",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Elemental",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 6,
              url: null,
              name: "Drape of Mortal Downfall",
            },
            status: "BIS",
          },
          {
            item: {
              id: 7,
              url: null,
              name: "Star-beaded Clutch",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Pyrelight Circle": [
      {
        name: "palenian",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "kaboodles",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Belt of Colossal Rage": [
      {
        name: "mayv",
        className: "DK",
        specs: [
          {
            main: true,
            type: "FrostDk",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Solar Bindings": [
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Seal of the Betrayed King": [
      {
        name: "mayv",
        className: "DK",
        specs: [
          {
            main: true,
            type: "FrostDk",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Drape of Icy Intent": [
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Skyforge Crossbow": [
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Show of Faith": [
      {
        name: "bullette",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "RestorationDruid",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Boundless Gaze": [
      {
        name: "misto",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 25,
              url: null,
              name: "Golden Saronite Dragon",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Plated Leggings of Ruination": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "mayv",
        className: "DK",
        specs: [
          {
            main: true,
            type: "FrostDk",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Frigid Strength of Hodir": [
      {
        name: "kelthal",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Comet's Trail": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "misto",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 25,
              url: null,
              name: "Golden Saronite Dragon",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Warhelm of the Champion": [
      {
        name: "erm",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Embrace of the Gladiator": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "ethupan",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Shoulderpads of the Intruder": [
      {
        name: "deadlyfaith",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "Retribution",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bride",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 34,
              url: null,
              name: "Skyforge Crossbow",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "nurgl",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Combat",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 32,
              url: null,
              name: "Shoulderpads of the Intruder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Constellus: [
      {
        name: "arusha",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Discipline",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 5,
              url: null,
              name: "Constellus",
            },
            status: "BIS",
          },
        ],
      },
    ],
  },
};

const raid6: Raid = {
  tanks: [
    {
      name: "pacoknight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "OS",
        },
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "holynut",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "BIS",
        },
      ],
    },
  ],
  healers: [
    {
      name: "khaya",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "RestorationShaman",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 1,
            url: null,
            name: "Bindings of Winter Gale",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "aryllene",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeyp",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 4,
            url: null,
            name: "Sapphire Amulet of Renewal",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "cowran",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "tjholy",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
  ],
  dps: [
    {
      name: "mayvi",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "haumea",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "littlemist",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "deadlyblight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "frostyboy",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nambaruan",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "barrious",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bridew",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 24,
            url: null,
            name: "Bladetwister",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "salabenji",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "fiachna",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "hallheim",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "OS",
        },
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "pariah",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "goll",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "edenian",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "kondoriano",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "komachi",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "swerved",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  occupiedCharacters: [
    {
      name: "pacoknight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Blood",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 38,
            url: null,
            name: "Seal of the Betrayed King",
          },
          status: "OS",
        },
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "holynut",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "ProtectionPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "khaya",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "RestorationShaman",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 1,
            url: null,
            name: "Bindings of Winter Gale",
          },
          status: "BIS",
        },
        {
          item: {
            id: 2,
            url: null,
            name: "Valanyr",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "aryllene",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: "Belt of the Fallen Wyrm",
          },
          status: "BIS",
        },
        {
          item: {
            id: 10,
            url: null,
            name: "Pyrelight Circle",
          },
          status: "BIS",
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "jeyp",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Discipline",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: "Show of Faith",
          },
          status: "BIS",
        },
        {
          item: {
            id: 4,
            url: null,
            name: "Sapphire Amulet of Renewal",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "cowran",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "RestorationDruid",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "tjholy",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "HolyPaladin",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 8,
            url: null,
            name: "Breastplate of the Devoted",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mayvi",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "haumea",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Enhancement",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 40,
            url: null,
            name: "Boundless Gaze",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "littlemist",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 27,
            url: null,
            name: "Warhelm of the Champion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
        {
          item: {
            id: 28,
            url: null,
            name: "Belt of Colossal Rage",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "deadlyblight",
      className: "DK",
      specs: [
        {
          main: true,
          type: "Unholy",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: "Plated Leggings of Ruination",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "frostyboy",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 35,
            url: null,
            name: "Armbands of Bedlam",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "nambaruan",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "barrious",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "bridew",
      className: "ROGUE",
      specs: [
        {
          main: true,
          type: "Assassination",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 22,
            url: null,
            name: "Drape of Icy Intent",
          },
          status: "BIS",
        },
        {
          item: {
            id: 24,
            url: null,
            name: "Bladetwister",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "salabenji",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
        {
          item: {
            id: 19,
            url: null,
            name: "Dreambinder",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "fiachna",
      className: "DRUID",
      specs: [
        {
          main: true,
          type: "FeralDps",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 33,
            url: null,
            name: "Embrace of the Gladiator",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
      ],
    },
    {
      name: "hallheim",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: "Bulwark of Algalon",
          },
          status: "OS",
        },
        {
          item: {
            id: 37,
            url: null,
            name: "Legguards of Cunning Deception",
          },
          status: "BIS",
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: "BIS",
        },
        {
          item: {
            id: 42,
            url: null,
            name: "Frigid Strength of Hodir",
          },
          status: "BIS",
        },
        {
          item: {
            id: 39,
            url: null,
            name: "Solar Bindings",
          },
          status: "BIS",
        },
        {
          item: {
            id: 12,
            url: null,
            name: "Heart of Iron",
          },
          status: "OS",
        },
        {
          item: {
            id: 36,
            url: null,
            name: "Voldrethar, Dark Blade of Oblivion",
          },
          status: "BIS",
        },
        {
          item: {
            id: 41,
            url: null,
            name: "Sabatons of Lifeless Night",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "pariah",
      className: "PRIEST",
      specs: [
        {
          main: true,
          type: "Shadow",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: "Constellus",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "goll",
      className: "SHAMAN",
      specs: [
        {
          main: true,
          type: "Elemental",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "edenian",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "kondoriano",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
    {
      name: "komachi",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "swerved",
      className: "WARLOCK",
      specs: [
        {
          main: true,
          type: "Affliction",
        },
      ],
      main: true,
      items: [],
    },
  ],
  raidAvailableChars: [
    {
      name: "tekala",
      className: "HUNTER",
      specs: [
        {
          main: true,
          type: "Survival",
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 43,
            url: null,
            name: "Greaves of Swift Vengeance",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "ethupanDk",
      className: "DK",
      specs: [
        {
          main: true,
          type: "FrostDk",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "zurgle",
      className: "WARRIOR",
      specs: [
        {
          main: true,
          type: "Fury",
        },
      ],
      main: false,
      items: [],
    },
    {
      name: "cotolento",
      className: "MAGE",
      specs: [
        {
          main: true,
          type: "Fire",
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: "Drape of Mortal Downfall",
          },
          status: "BIS",
        },
      ],
    },
    {
      name: "mithrandir",
      className: "PALADIN",
      specs: [
        {
          main: true,
          type: "Retribution",
        },
      ],
      main: false,
      items: [],
    },
  ],
  itemCharactersMap: {
    "Greaves of Swift Vengeance": [
      {
        name: "salabenji",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 43,
              url: null,
              name: "Greaves of Swift Vengeance",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Breastplate of the Devoted": [
      {
        name: "tjholy",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 8,
              url: null,
              name: "Breastplate of the Devoted",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Wisdom's Hold": [
      {
        name: "aryllene",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Valanyr: [
      {
        name: "khaya",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "RestorationShaman",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 1,
              url: null,
              name: "Bindings of Winter Gale",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Voldrethar, Dark Blade of Oblivion": [
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Sabatons of Lifeless Night": [
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Dreambinder: [
      {
        name: "salabenji",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 43,
              url: null,
              name: "Greaves of Swift Vengeance",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Legguards of Cunning Deception": [
      {
        name: "salabenji",
        className: "HUNTER",
        specs: [
          {
            main: true,
            type: "Survival",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 43,
              url: null,
              name: "Greaves of Swift Vengeance",
            },
            status: "BIS",
          },
          {
            item: {
              id: 19,
              url: null,
              name: "Dreambinder",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Seal of the Betrayed King": [
      {
        name: "pacoknight",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Blood",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "OS",
          },
          {
            item: {
              id: 35,
              url: null,
              name: "Armbands of Bedlam",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Belt of the Fallen Wyrm": [
      {
        name: "aryllene",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Pyrelight Circle": [
      {
        name: "aryllene",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "HolyPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: "Belt of the Fallen Wyrm",
            },
            status: "BIS",
          },
          {
            item: {
              id: 10,
              url: null,
              name: "Pyrelight Circle",
            },
            status: "BIS",
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Belt of Colossal Rage": [
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Bindings of Winter Gale": [
      {
        name: "khaya",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "RestorationShaman",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 1,
              url: null,
              name: "Bindings of Winter Gale",
            },
            status: "BIS",
          },
          {
            item: {
              id: 2,
              url: null,
              name: "Valanyr",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Solar Bindings": [
      {
        name: "barrious",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Heart of Iron": [
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Bulwark of Algalon": [
      {
        name: "holynut",
        className: "PALADIN",
        specs: [
          {
            main: true,
            type: "ProtectionPaladin",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Armbands of Bedlam": [
      {
        name: "pacoknight",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Blood",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 38,
              url: null,
              name: "Seal of the Betrayed King",
            },
            status: "OS",
          },
          {
            item: {
              id: 35,
              url: null,
              name: "Armbands of Bedlam",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Drape of Icy Intent": [
      {
        name: "bridew",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 24,
              url: null,
              name: "Bladetwister",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Show of Faith": [
      {
        name: "jeyp",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Discipline",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 4,
              url: null,
              name: "Sapphire Amulet of Renewal",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Boundless Gaze": [
      {
        name: "haumea",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Plated Leggings of Ruination": [
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "deadlyblight",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Frigid Strength of Hodir": [
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    Bladetwister: [
      {
        name: "bridew",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 24,
              url: null,
              name: "Bladetwister",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Comet's Trail": [
      {
        name: "haumea",
        className: "SHAMAN",
        specs: [
          {
            main: true,
            type: "Enhancement",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 40,
              url: null,
              name: "Boundless Gaze",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "barrious",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "bridew",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 22,
              url: null,
              name: "Drape of Icy Intent",
            },
            status: "BIS",
          },
          {
            item: {
              id: 24,
              url: null,
              name: "Bladetwister",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
      {
        name: "hallheim",
        className: "WARRIOR",
        specs: [
          {
            main: true,
            type: "Fury",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: "Bulwark of Algalon",
            },
            status: "OS",
          },
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 42,
              url: null,
              name: "Frigid Strength of Hodir",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
          {
            item: {
              id: 36,
              url: null,
              name: "Voldrethar, Dark Blade of Oblivion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 41,
              url: null,
              name: "Sabatons of Lifeless Night",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Warhelm of the Champion": [
      {
        name: "littlemist",
        className: "DK",
        specs: [
          {
            main: true,
            type: "Unholy",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 27,
              url: null,
              name: "Warhelm of the Champion",
            },
            status: "BIS",
          },
          {
            item: {
              id: 31,
              url: null,
              name: "Plated Leggings of Ruination",
            },
            status: "BIS",
          },
          {
            item: {
              id: 28,
              url: null,
              name: "Belt of Colossal Rage",
            },
            status: "BIS",
          },
        ],
      },
    ],
    "Embrace of the Gladiator": [
      {
        name: "barrious",
        className: "ROGUE",
        specs: [
          {
            main: true,
            type: "Assassination",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
        ],
      },
      {
        name: "fiachna",
        className: "DRUID",
        specs: [
          {
            main: true,
            type: "FeralDps",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: "Legguards of Cunning Deception",
            },
            status: "BIS",
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: "BIS",
          },
          {
            item: {
              id: 33,
              url: null,
              name: "Embrace of the Gladiator",
            },
            status: "BIS",
          },
          {
            item: {
              id: 39,
              url: null,
              name: "Solar Bindings",
            },
            status: "BIS",
          },
          {
            item: {
              id: 12,
              url: null,
              name: "Heart of Iron",
            },
            status: "OS",
          },
        ],
      },
    ],
    "Sapphire Amulet of Renewal": [
      {
        name: "jeyp",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Discipline",
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: "Show of Faith",
            },
            status: "BIS",
          },
          {
            item: {
              id: 4,
              url: null,
              name: "Sapphire Amulet of Renewal",
            },
            status: "OS",
          },
        ],
      },
    ],
    Constellus: [
      {
        name: "pariah",
        className: "PRIEST",
        specs: [
          {
            main: true,
            type: "Shadow",
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 5,
              url: null,
              name: "Constellus",
            },
            status: "BIS",
          },
        ],
      },
    ],
  },
};

export const mockedSplits: Split[] = [
  {
    raid1,
    raid2,
  },
  {
    raid1: raid3,
    raid2: raid4,
  },
  {
    raid1: raid5,
    raid2: raid6,
  },
];

export const mockedPersons: Person[] = [
  { name: "dave" },
  { name: "paco" },
  { name: "bullette" },
  { name: "aryl" },
  { name: "tj" },
  { name: "jeyp" },
  { name: "khaya" },
  { name: "mist" },
  { name: "zul" },
  { name: "frostyboy" },
  { name: "mayv" },
  { name: "ethupan" },
  { name: "sala" },
  { name: "hallheim" },
  { name: "deadly" },
  { name: "fiachna" },
  { name: "nurgl" },
  { name: "bride" },
  { name: "barrious" },
  { name: "haumea" },
  { name: "doggle" },
  { name: "nagosa" },
  { name: "cotolento" },
  { name: "koobo" },
  { name: "edenian" },
  { name: "dauran" },
  { name: "emipian" },
  { name: "kondo" },
  { name: "jj" },
  { name: "swerved" },
  { name: "kelthal" },
];
