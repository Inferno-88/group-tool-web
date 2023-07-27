import { CharacterClass, Person, Raid, RaidName, Split, ItemDictionary } from '../types';

const raid1: Raid = {
  tanks: [
    {
      name: 'davetta',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'ProtectionPaladin',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'tjbaracus',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Blood',
        },
      ],
      main: false,
      items: [],
    },
  ],
  healers: [
    {
      name: 'arusha',
      className: 'PRIEST',
      specs: [
        {
          main: true,
          type: 'Discipline',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: 'Constellus',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'palenian',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: 'Belt of the Fallen Wyrm',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 10,
            url: null,
            name: 'Pyrelight Circle',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'bullette',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'RestorationDruid',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: 'Show of Faith',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 2,
            url: null,
            name: 'Valanyr',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'kaboodles',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: 'Belt of the Fallen Wyrm',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 10,
            url: null,
            name: 'Pyrelight Circle',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'arylpog',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 7,
            url: null,
            name: 'Star-beaded Clutch',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 8,
            url: null,
            name: 'Breastplate of the Devoted',
          },
          status: 'BIS',
        },
      ],
    },
  ],
  dps: [
    {
      name: 'deadlyfaith',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'Retribution',
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
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 32,
            url: null,
            name: 'Shoulderpads of the Intruder',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 31,
            url: null,
            name: 'Plated Leggings of Ruination',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 41,
            url: null,
            name: 'Sabatons of Lifeless Night',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'misto',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'Enhancement',
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
          status: 'BIS',
        },
        {
          item: {
            id: 25,
            url: null,
            name: 'Golden Saronite Dragon',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 40,
            url: null,
            name: 'Boundless Gaze',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'tadano',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Unholy',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'erm',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Unholy',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 27,
            url: null,
            name: 'Warhelm of the Champion',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'mayv',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'FrostDk',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: 'Plated Leggings of Ruination',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 28,
            url: null,
            name: 'Belt of Colossal Rage',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 38,
            url: null,
            name: 'Seal of the Betrayed King',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'bride',
      className: 'ROGUE',
      specs: [
        {
          main: true,
          type: 'Assassination',
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
          status: 'BIS',
        },
        {
          item: {
            id: 34,
            url: null,
            name: 'Skyforge Crossbow',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 32,
            url: null,
            name: 'Shoulderpads of the Intruder',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 39,
            url: null,
            name: 'Solar Bindings',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'nurgl',
      className: 'ROGUE',
      specs: [
        {
          main: true,
          type: 'Combat',
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
          status: 'BIS',
        },
        {
          item: {
            id: 22,
            url: null,
            name: 'Drape of Icy Intent',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 32,
            url: null,
            name: 'Shoulderpads of the Intruder',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'ethupan',
      className: 'HUNTER',
      specs: [
        {
          main: true,
          type: 'Survival',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: 'Legguards of Cunning Deception',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 34,
            url: null,
            name: 'Skyforge Crossbow',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 19,
            url: null,
            name: 'Dreambinder',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'jeypx',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'FeralDps',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'kelthal',
      className: 'WARRIOR',
      specs: [
        {
          main: true,
          type: 'Fury',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 42,
            url: null,
            name: 'Frigid Strength of Hodir',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 36,
            url: null,
            name: 'Voldrethar, Dark Blade of Oblivion',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'shilke',
      className: 'PRIEST',
      specs: [
        {
          main: true,
          type: 'Shadow',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'doggle',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'Balance',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'nagosa',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'Elemental',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: 'Drape of Mortal Downfall',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 7,
            url: null,
            name: 'Star-beaded Clutch',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'koobo',
      className: 'MAGE',
      specs: [
        {
          main: true,
          type: 'Fire',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'khayo',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'kondaddicted',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'emipian',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: true,
      items: [],
    },
  ],
  occupiedCharacters: [
    {
      name: 'davetta',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'ProtectionPaladin',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'tjbaracus',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Blood',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'arusha',
      className: 'PRIEST',
      specs: [
        {
          main: true,
          type: 'Discipline',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: 'Constellus',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'palenian',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: 'Belt of the Fallen Wyrm',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 10,
            url: null,
            name: 'Pyrelight Circle',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'bullette',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'RestorationDruid',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: 'Show of Faith',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 2,
            url: null,
            name: 'Valanyr',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'kaboodles',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: 'Belt of the Fallen Wyrm',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 10,
            url: null,
            name: 'Pyrelight Circle',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'arylpog',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 7,
            url: null,
            name: 'Star-beaded Clutch',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 8,
            url: null,
            name: 'Breastplate of the Devoted',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'deadlyfaith',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'Retribution',
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
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 32,
            url: null,
            name: 'Shoulderpads of the Intruder',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 31,
            url: null,
            name: 'Plated Leggings of Ruination',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 41,
            url: null,
            name: 'Sabatons of Lifeless Night',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'misto',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'Enhancement',
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
          status: 'BIS',
        },
        {
          item: {
            id: 25,
            url: null,
            name: 'Golden Saronite Dragon',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 40,
            url: null,
            name: 'Boundless Gaze',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'tadano',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Unholy',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'erm',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Unholy',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 27,
            url: null,
            name: 'Warhelm of the Champion',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'mayv',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'FrostDk',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: 'Plated Leggings of Ruination',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 28,
            url: null,
            name: 'Belt of Colossal Rage',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 38,
            url: null,
            name: 'Seal of the Betrayed King',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'bride',
      className: 'ROGUE',
      specs: [
        {
          main: true,
          type: 'Assassination',
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
          status: 'BIS',
        },
        {
          item: {
            id: 34,
            url: null,
            name: 'Skyforge Crossbow',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 32,
            url: null,
            name: 'Shoulderpads of the Intruder',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 39,
            url: null,
            name: 'Solar Bindings',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'nurgl',
      className: 'ROGUE',
      specs: [
        {
          main: true,
          type: 'Combat',
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
          status: 'BIS',
        },
        {
          item: {
            id: 22,
            url: null,
            name: 'Drape of Icy Intent',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 32,
            url: null,
            name: 'Shoulderpads of the Intruder',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'ethupan',
      className: 'HUNTER',
      specs: [
        {
          main: true,
          type: 'Survival',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: 'Legguards of Cunning Deception',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 34,
            url: null,
            name: 'Skyforge Crossbow',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 19,
            url: null,
            name: 'Dreambinder',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'jeypx',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'FeralDps',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'kelthal',
      className: 'WARRIOR',
      specs: [
        {
          main: true,
          type: 'Fury',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 42,
            url: null,
            name: 'Frigid Strength of Hodir',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 36,
            url: null,
            name: 'Voldrethar, Dark Blade of Oblivion',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'shilke',
      className: 'PRIEST',
      specs: [
        {
          main: true,
          type: 'Shadow',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'doggle',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'Balance',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'nagosa',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'Elemental',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: 'Drape of Mortal Downfall',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 7,
            url: null,
            name: 'Star-beaded Clutch',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'koobo',
      className: 'MAGE',
      specs: [
        {
          main: true,
          type: 'Fire',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'khayo',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'kondaddicted',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'emipian',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: true,
      items: [],
    },
  ],
  raidAvailableChars: [
    {
      name: 'gorosm',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'Balance',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'aandariel',
      className: 'MAGE',
      specs: [
        {
          main: true,
          type: 'Fire',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'salabonobo',
      className: 'HUNTER',
      specs: [
        {
          main: true,
          type: 'Survival',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 43,
            url: null,
            name: 'Greaves of Swift Vengeance',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'averonth',
      className: 'WARRIOR',
      specs: [
        {
          main: true,
          type: 'Fury',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'barrioustwo',
      className: 'ROGUE',
      specs: [
        {
          main: true,
          type: 'Combat',
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
          status: 'BIS',
        },
        {
          item: {
            id: 25,
            url: null,
            name: 'Golden Saronite Dragon',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 24,
            url: null,
            name: 'Bladetwister',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'dauran',
      className: 'PRIEST',
      specs: [
        {
          main: true,
          type: 'Shadow',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: 'Constellus',
          },
          status: 'OS',
        },
        {
          item: {
            id: 4,
            url: null,
            name: 'Sapphire Amulet of Renewal',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'nutkin',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Demonology',
        },
      ],
      main: true,
      items: [],
    },
  ],
  itemCharactersMap: {
    'Breastplate of the Devoted': [
      {
        name: 'arylpog',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 7,
              url: null,
              name: 'Star-beaded Clutch',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 8,
              url: null,
              name: 'Breastplate of the Devoted',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    "Wisdom's Hold": [
      {
        name: 'palenian',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: 'Belt of the Fallen Wyrm',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 10,
              url: null,
              name: 'Pyrelight Circle',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: 'BIS',
          },
        ],
      },
    ],
    Valanyr: [
      {
        name: 'bullette',
        className: 'DRUID',
        specs: [
          {
            main: true,
            type: 'RestorationDruid',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: 'Show of Faith',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 2,
              url: null,
              name: 'Valanyr',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Voldrethar, Dark Blade of Oblivion': [
      {
        name: 'kelthal',
        className: 'WARRIOR',
        specs: [
          {
            main: true,
            type: 'Fury',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 42,
              url: null,
              name: 'Frigid Strength of Hodir',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 36,
              url: null,
              name: 'Voldrethar, Dark Blade of Oblivion',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    Dreambinder: [
      {
        name: 'ethupan',
        className: 'HUNTER',
        specs: [
          {
            main: true,
            type: 'Survival',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 19,
              url: null,
              name: 'Dreambinder',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Sabatons of Lifeless Night': [
      {
        name: 'deadlyfaith',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'Retribution',
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
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Legguards of Cunning Deception': [
      {
        name: 'ethupan',
        className: 'HUNTER',
        specs: [
          {
            main: true,
            type: 'Survival',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 19,
              url: null,
              name: 'Dreambinder',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Golden Saronite Dragon': [
      {
        name: 'misto',
        className: 'SHAMAN',
        specs: [
          {
            main: true,
            type: 'Enhancement',
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
            status: 'BIS',
          },
          {
            item: {
              id: 25,
              url: null,
              name: 'Golden Saronite Dragon',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 40,
              url: null,
              name: 'Boundless Gaze',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Belt of the Fallen Wyrm': [
      {
        name: 'palenian',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: 'Belt of the Fallen Wyrm',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 10,
              url: null,
              name: 'Pyrelight Circle',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'kaboodles',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: 'Belt of the Fallen Wyrm',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 10,
              url: null,
              name: 'Pyrelight Circle',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Drape of Mortal Downfall': [
      {
        name: 'nagosa',
        className: 'SHAMAN',
        specs: [
          {
            main: true,
            type: 'Elemental',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 6,
              url: null,
              name: 'Drape of Mortal Downfall',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 7,
              url: null,
              name: 'Star-beaded Clutch',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Star-beaded Clutch': [
      {
        name: 'arylpog',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 7,
              url: null,
              name: 'Star-beaded Clutch',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 8,
              url: null,
              name: 'Breastplate of the Devoted',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'nagosa',
        className: 'SHAMAN',
        specs: [
          {
            main: true,
            type: 'Elemental',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 6,
              url: null,
              name: 'Drape of Mortal Downfall',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 7,
              url: null,
              name: 'Star-beaded Clutch',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Pyrelight Circle': [
      {
        name: 'palenian',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: 'Belt of the Fallen Wyrm',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 10,
              url: null,
              name: 'Pyrelight Circle',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'kaboodles',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: 'Belt of the Fallen Wyrm',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 10,
              url: null,
              name: 'Pyrelight Circle',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Belt of Colossal Rage': [
      {
        name: 'mayv',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'FrostDk',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 28,
              url: null,
              name: 'Belt of Colossal Rage',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 38,
              url: null,
              name: 'Seal of the Betrayed King',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Solar Bindings': [
      {
        name: 'bride',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Seal of the Betrayed King': [
      {
        name: 'mayv',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'FrostDk',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 28,
              url: null,
              name: 'Belt of Colossal Rage',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 38,
              url: null,
              name: 'Seal of the Betrayed King',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Drape of Icy Intent': [
      {
        name: 'nurgl',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Combat',
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
            status: 'BIS',
          },
          {
            item: {
              id: 22,
              url: null,
              name: 'Drape of Icy Intent',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Skyforge Crossbow': [
      {
        name: 'bride',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'ethupan',
        className: 'HUNTER',
        specs: [
          {
            main: true,
            type: 'Survival',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 19,
              url: null,
              name: 'Dreambinder',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Show of Faith': [
      {
        name: 'bullette',
        className: 'DRUID',
        specs: [
          {
            main: true,
            type: 'RestorationDruid',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: 'Show of Faith',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 2,
              url: null,
              name: 'Valanyr',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Boundless Gaze': [
      {
        name: 'misto',
        className: 'SHAMAN',
        specs: [
          {
            main: true,
            type: 'Enhancement',
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
            status: 'BIS',
          },
          {
            item: {
              id: 25,
              url: null,
              name: 'Golden Saronite Dragon',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 40,
              url: null,
              name: 'Boundless Gaze',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Plated Leggings of Ruination': [
      {
        name: 'deadlyfaith',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'Retribution',
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
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'mayv',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'FrostDk',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 28,
              url: null,
              name: 'Belt of Colossal Rage',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 38,
              url: null,
              name: 'Seal of the Betrayed King',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Frigid Strength of Hodir': [
      {
        name: 'kelthal',
        className: 'WARRIOR',
        specs: [
          {
            main: true,
            type: 'Fury',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 42,
              url: null,
              name: 'Frigid Strength of Hodir',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 36,
              url: null,
              name: 'Voldrethar, Dark Blade of Oblivion',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    "Comet's Trail": [
      {
        name: 'deadlyfaith',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'Retribution',
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
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'misto',
        className: 'SHAMAN',
        specs: [
          {
            main: true,
            type: 'Enhancement',
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
            status: 'BIS',
          },
          {
            item: {
              id: 25,
              url: null,
              name: 'Golden Saronite Dragon',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 40,
              url: null,
              name: 'Boundless Gaze',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'bride',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'nurgl',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Combat',
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
            status: 'BIS',
          },
          {
            item: {
              id: 22,
              url: null,
              name: 'Drape of Icy Intent',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Warhelm of the Champion': [
      {
        name: 'erm',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'Unholy',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 27,
              url: null,
              name: 'Warhelm of the Champion',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Embrace of the Gladiator': [
      {
        name: 'deadlyfaith',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'Retribution',
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
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'bride',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'nurgl',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Combat',
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
            status: 'BIS',
          },
          {
            item: {
              id: 22,
              url: null,
              name: 'Drape of Icy Intent',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'ethupan',
        className: 'HUNTER',
        specs: [
          {
            main: true,
            type: 'Survival',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 19,
              url: null,
              name: 'Dreambinder',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Shoulderpads of the Intruder': [
      {
        name: 'deadlyfaith',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'Retribution',
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
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'bride',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'bridelollol',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'bride',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 34,
              url: null,
              name: 'Skyforge Crossbow',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'nurgl',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Combat',
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
            status: 'BIS',
          },
          {
            item: {
              id: 22,
              url: null,
              name: 'Drape of Icy Intent',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 32,
              url: null,
              name: 'Shoulderpads of the Intruder',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    Constellus: [
      {
        name: 'arusha',
        className: 'PRIEST',
        specs: [
          {
            main: true,
            type: 'Discipline',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 5,
              url: null,
              name: 'Constellus',
            },
            status: 'BIS',
          },
        ],
      },
    ],
  },
  freeItems: [],
};

const raid2: Raid = {
  tanks: [
    {
      name: 'pacoknight',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Blood',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 38,
            url: null,
            name: 'Seal of the Betrayed King',
          },
          status: 'OS',
        },
        {
          item: {
            id: 35,
            url: null,
            name: 'Armbands of Bedlam',
          },
          status: 'OS',
        },
      ],
    },
    {
      name: 'holynut',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'ProtectionPaladin',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: 'Bulwark of Algalon',
          },
          status: 'BIS',
        },
      ],
    },
  ],
  healers: [
    {
      name: 'khaya',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'RestorationShaman',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 1,
            url: null,
            name: 'Bindings of Winter Gale',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 2,
            url: null,
            name: 'Valanyr',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'aryllene',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: 'Belt of the Fallen Wyrm',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 10,
            url: null,
            name: 'Pyrelight Circle',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'jeyp',
      className: 'PRIEST',
      specs: [
        {
          main: true,
          type: 'Discipline',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: 'Show of Faith',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 4,
            url: null,
            name: 'Sapphire Amulet of Renewal',
          },
          status: 'OS',
        },
      ],
    },
    {
      name: 'cowran',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'RestorationDruid',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'tjholy',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 8,
            url: null,
            name: 'Breastplate of the Devoted',
          },
          status: 'BIS',
        },
      ],
    },
  ],
  dps: [
    {
      name: 'mayvi',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'Retribution',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'haumea',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'Enhancement',
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
          status: 'BIS',
        },
        {
          item: {
            id: 40,
            url: null,
            name: 'Boundless Gaze',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'littlemist',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Unholy',
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
          status: 'BIS',
        },
        {
          item: {
            id: 27,
            url: null,
            name: 'Warhelm of the Champion',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 31,
            url: null,
            name: 'Plated Leggings of Ruination',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 28,
            url: null,
            name: 'Belt of Colossal Rage',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'deadlyblight',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Unholy',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: 'Plated Leggings of Ruination',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'nagodk',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'FrostDk',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'frostyboy',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'FrostDk',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 35,
            url: null,
            name: 'Armbands of Bedlam',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'barrious',
      className: 'ROGUE',
      specs: [
        {
          main: true,
          type: 'Assassination',
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
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 39,
            url: null,
            name: 'Solar Bindings',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'bridew',
      className: 'ROGUE',
      specs: [
        {
          main: true,
          type: 'Assassination',
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
          status: 'BIS',
        },
        {
          item: {
            id: 22,
            url: null,
            name: 'Drape of Icy Intent',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 24,
            url: null,
            name: 'Bladetwister',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'salabenji',
      className: 'HUNTER',
      specs: [
        {
          main: true,
          type: 'Survival',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: 'Legguards of Cunning Deception',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 43,
            url: null,
            name: 'Greaves of Swift Vengeance',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 19,
            url: null,
            name: 'Dreambinder',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'fiachna',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'FeralDps',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: 'Legguards of Cunning Deception',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 39,
            url: null,
            name: 'Solar Bindings',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 12,
            url: null,
            name: 'Heart of Iron',
          },
          status: 'OS',
        },
      ],
    },
    {
      name: 'hallheim',
      className: 'WARRIOR',
      specs: [
        {
          main: true,
          type: 'Fury',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: 'Bulwark of Algalon',
          },
          status: 'OS',
        },
        {
          item: {
            id: 37,
            url: null,
            name: 'Legguards of Cunning Deception',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: 'BIS',
        },
        {
          item: {
            id: 42,
            url: null,
            name: 'Frigid Strength of Hodir',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 39,
            url: null,
            name: 'Solar Bindings',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 12,
            url: null,
            name: 'Heart of Iron',
          },
          status: 'OS',
        },
        {
          item: {
            id: 36,
            url: null,
            name: 'Voldrethar, Dark Blade of Oblivion',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 41,
            url: null,
            name: 'Sabatons of Lifeless Night',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'pariah',
      className: 'PRIEST',
      specs: [
        {
          main: true,
          type: 'Shadow',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: 'Constellus',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'goll',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'Elemental',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'edenian',
      className: 'MAGE',
      specs: [
        {
          main: true,
          type: 'Fire',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'kondoriano',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'komachi',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'swerved',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: true,
      items: [],
    },
  ],
  occupiedCharacters: [
    {
      name: 'pacoknight',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Blood',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 38,
            url: null,
            name: 'Seal of the Betrayed King',
          },
          status: 'OS',
        },
        {
          item: {
            id: 35,
            url: null,
            name: 'Armbands of Bedlam',
          },
          status: 'OS',
        },
      ],
    },
    {
      name: 'holynut',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'ProtectionPaladin',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: 'Bulwark of Algalon',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'khaya',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'RestorationShaman',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 1,
            url: null,
            name: 'Bindings of Winter Gale',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 2,
            url: null,
            name: 'Valanyr',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'aryllene',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 11,
            url: null,
            name: 'Belt of the Fallen Wyrm',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 10,
            url: null,
            name: 'Pyrelight Circle',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 9,
            url: null,
            name: "Wisdom's Hold",
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'jeyp',
      className: 'PRIEST',
      specs: [
        {
          main: true,
          type: 'Discipline',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 3,
            url: null,
            name: 'Show of Faith',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 4,
            url: null,
            name: 'Sapphire Amulet of Renewal',
          },
          status: 'OS',
        },
      ],
    },
    {
      name: 'cowran',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'RestorationDruid',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'tjholy',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'HolyPaladin',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 8,
            url: null,
            name: 'Breastplate of the Devoted',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'mayvi',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'Retribution',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'haumea',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'Enhancement',
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
          status: 'BIS',
        },
        {
          item: {
            id: 40,
            url: null,
            name: 'Boundless Gaze',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'littlemist',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Unholy',
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
          status: 'BIS',
        },
        {
          item: {
            id: 27,
            url: null,
            name: 'Warhelm of the Champion',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 31,
            url: null,
            name: 'Plated Leggings of Ruination',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 28,
            url: null,
            name: 'Belt of Colossal Rage',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'deadlyblight',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'Unholy',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 31,
            url: null,
            name: 'Plated Leggings of Ruination',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'nagodk',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'FrostDk',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'frostyboy',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'FrostDk',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 35,
            url: null,
            name: 'Armbands of Bedlam',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'barrious',
      className: 'ROGUE',
      specs: [
        {
          main: true,
          type: 'Assassination',
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
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 39,
            url: null,
            name: 'Solar Bindings',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'bridew',
      className: 'ROGUE',
      specs: [
        {
          main: true,
          type: 'Assassination',
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
          status: 'BIS',
        },
        {
          item: {
            id: 22,
            url: null,
            name: 'Drape of Icy Intent',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 24,
            url: null,
            name: 'Bladetwister',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'salabenji',
      className: 'HUNTER',
      specs: [
        {
          main: true,
          type: 'Survival',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: 'Legguards of Cunning Deception',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 43,
            url: null,
            name: 'Greaves of Swift Vengeance',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 19,
            url: null,
            name: 'Dreambinder',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'fiachna',
      className: 'DRUID',
      specs: [
        {
          main: true,
          type: 'FeralDps',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 37,
            url: null,
            name: 'Legguards of Cunning Deception',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: 'BIS',
        },
        {
          item: {
            id: 33,
            url: null,
            name: 'Embrace of the Gladiator',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 39,
            url: null,
            name: 'Solar Bindings',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 12,
            url: null,
            name: 'Heart of Iron',
          },
          status: 'OS',
        },
      ],
    },
    {
      name: 'hallheim',
      className: 'WARRIOR',
      specs: [
        {
          main: true,
          type: 'Fury',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 13,
            url: null,
            name: 'Bulwark of Algalon',
          },
          status: 'OS',
        },
        {
          item: {
            id: 37,
            url: null,
            name: 'Legguards of Cunning Deception',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 26,
            url: null,
            name: "Comet's Trail",
          },
          status: 'BIS',
        },
        {
          item: {
            id: 42,
            url: null,
            name: 'Frigid Strength of Hodir',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 39,
            url: null,
            name: 'Solar Bindings',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 12,
            url: null,
            name: 'Heart of Iron',
          },
          status: 'OS',
        },
        {
          item: {
            id: 36,
            url: null,
            name: 'Voldrethar, Dark Blade of Oblivion',
          },
          status: 'BIS',
        },
        {
          item: {
            id: 41,
            url: null,
            name: 'Sabatons of Lifeless Night',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'pariah',
      className: 'PRIEST',
      specs: [
        {
          main: true,
          type: 'Shadow',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 5,
            url: null,
            name: 'Constellus',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'goll',
      className: 'SHAMAN',
      specs: [
        {
          main: true,
          type: 'Elemental',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'edenian',
      className: 'MAGE',
      specs: [
        {
          main: true,
          type: 'Fire',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'kondoriano',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: true,
      items: [],
    },
    {
      name: 'komachi',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'swerved',
      className: 'WARLOCK',
      specs: [
        {
          main: true,
          type: 'Affliction',
        },
      ],
      main: true,
      items: [],
    },
  ],
  raidAvailableChars: [
    {
      name: 'tekala',
      className: 'HUNTER',
      specs: [
        {
          main: true,
          type: 'Survival',
        },
      ],
      main: false,
      items: [
        {
          item: {
            id: 43,
            url: null,
            name: 'Greaves of Swift Vengeance',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'ethupanDk',
      className: 'DK',
      specs: [
        {
          main: true,
          type: 'FrostDk',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'zurgle',
      className: 'WARRIOR',
      specs: [
        {
          main: true,
          type: 'Fury',
        },
      ],
      main: false,
      items: [],
    },
    {
      name: 'cotolento',
      className: 'MAGE',
      specs: [
        {
          main: true,
          type: 'Fire',
        },
      ],
      main: true,
      items: [
        {
          item: {
            id: 6,
            url: null,
            name: 'Drape of Mortal Downfall',
          },
          status: 'BIS',
        },
      ],
    },
    {
      name: 'mithrandir',
      className: 'PALADIN',
      specs: [
        {
          main: true,
          type: 'Retribution',
        },
      ],
      main: false,
      items: [],
    },
  ],
  itemCharactersMap: {
    'Greaves of Swift Vengeance': [
      {
        name: 'salabenji',
        className: 'HUNTER',
        specs: [
          {
            main: true,
            type: 'Survival',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 43,
              url: null,
              name: 'Greaves of Swift Vengeance',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 19,
              url: null,
              name: 'Dreambinder',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Breastplate of the Devoted': [
      {
        name: 'tjholy',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 8,
              url: null,
              name: 'Breastplate of the Devoted',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    "Wisdom's Hold": [
      {
        name: 'aryllene',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: 'Belt of the Fallen Wyrm',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 10,
              url: null,
              name: 'Pyrelight Circle',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: 'BIS',
          },
        ],
      },
    ],
    Valanyr: [
      {
        name: 'khaya',
        className: 'SHAMAN',
        specs: [
          {
            main: true,
            type: 'RestorationShaman',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 1,
              url: null,
              name: 'Bindings of Winter Gale',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 2,
              url: null,
              name: 'Valanyr',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Voldrethar, Dark Blade of Oblivion': [
      {
        name: 'hallheim',
        className: 'WARRIOR',
        specs: [
          {
            main: true,
            type: 'Fury',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: 'Bulwark of Algalon',
            },
            status: 'OS',
          },
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 42,
              url: null,
              name: 'Frigid Strength of Hodir',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
          {
            item: {
              id: 36,
              url: null,
              name: 'Voldrethar, Dark Blade of Oblivion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Sabatons of Lifeless Night': [
      {
        name: 'hallheim',
        className: 'WARRIOR',
        specs: [
          {
            main: true,
            type: 'Fury',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: 'Bulwark of Algalon',
            },
            status: 'OS',
          },
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 42,
              url: null,
              name: 'Frigid Strength of Hodir',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
          {
            item: {
              id: 36,
              url: null,
              name: 'Voldrethar, Dark Blade of Oblivion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    Dreambinder: [
      {
        name: 'salabenji',
        className: 'HUNTER',
        specs: [
          {
            main: true,
            type: 'Survival',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 43,
              url: null,
              name: 'Greaves of Swift Vengeance',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 19,
              url: null,
              name: 'Dreambinder',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Legguards of Cunning Deception': [
      {
        name: 'salabenji',
        className: 'HUNTER',
        specs: [
          {
            main: true,
            type: 'Survival',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 43,
              url: null,
              name: 'Greaves of Swift Vengeance',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 19,
              url: null,
              name: 'Dreambinder',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'fiachna',
        className: 'DRUID',
        specs: [
          {
            main: true,
            type: 'FeralDps',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
        ],
      },
      {
        name: 'hallheim',
        className: 'WARRIOR',
        specs: [
          {
            main: true,
            type: 'Fury',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: 'Bulwark of Algalon',
            },
            status: 'OS',
          },
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 42,
              url: null,
              name: 'Frigid Strength of Hodir',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
          {
            item: {
              id: 36,
              url: null,
              name: 'Voldrethar, Dark Blade of Oblivion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Seal of the Betrayed King': [
      {
        name: 'pacoknight',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'Blood',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 38,
              url: null,
              name: 'Seal of the Betrayed King',
            },
            status: 'OS',
          },
          {
            item: {
              id: 35,
              url: null,
              name: 'Armbands of Bedlam',
            },
            status: 'OS',
          },
        ],
      },
    ],
    'Belt of the Fallen Wyrm': [
      {
        name: 'aryllene',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: 'Belt of the Fallen Wyrm',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 10,
              url: null,
              name: 'Pyrelight Circle',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Pyrelight Circle': [
      {
        name: 'aryllene',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'HolyPaladin',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 11,
              url: null,
              name: 'Belt of the Fallen Wyrm',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 10,
              url: null,
              name: 'Pyrelight Circle',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 9,
              url: null,
              name: "Wisdom's Hold",
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Belt of Colossal Rage': [
      {
        name: 'littlemist',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'Unholy',
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
            status: 'BIS',
          },
          {
            item: {
              id: 27,
              url: null,
              name: 'Warhelm of the Champion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 28,
              url: null,
              name: 'Belt of Colossal Rage',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Bindings of Winter Gale': [
      {
        name: 'khaya',
        className: 'SHAMAN',
        specs: [
          {
            main: true,
            type: 'RestorationShaman',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 1,
              url: null,
              name: 'Bindings of Winter Gale',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 2,
              url: null,
              name: 'Valanyr',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Solar Bindings': [
      {
        name: 'barrious',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'fiachna',
        className: 'DRUID',
        specs: [
          {
            main: true,
            type: 'FeralDps',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
        ],
      },
      {
        name: 'hallheim',
        className: 'WARRIOR',
        specs: [
          {
            main: true,
            type: 'Fury',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: 'Bulwark of Algalon',
            },
            status: 'OS',
          },
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 42,
              url: null,
              name: 'Frigid Strength of Hodir',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
          {
            item: {
              id: 36,
              url: null,
              name: 'Voldrethar, Dark Blade of Oblivion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Heart of Iron': [
      {
        name: 'fiachna',
        className: 'DRUID',
        specs: [
          {
            main: true,
            type: 'FeralDps',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
        ],
      },
      {
        name: 'hallheim',
        className: 'WARRIOR',
        specs: [
          {
            main: true,
            type: 'Fury',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: 'Bulwark of Algalon',
            },
            status: 'OS',
          },
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 42,
              url: null,
              name: 'Frigid Strength of Hodir',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
          {
            item: {
              id: 36,
              url: null,
              name: 'Voldrethar, Dark Blade of Oblivion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Bulwark of Algalon': [
      {
        name: 'holynut',
        className: 'PALADIN',
        specs: [
          {
            main: true,
            type: 'ProtectionPaladin',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: 'Bulwark of Algalon',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Armbands of Bedlam': [
      {
        name: 'pacoknight',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'Blood',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 38,
              url: null,
              name: 'Seal of the Betrayed King',
            },
            status: 'OS',
          },
          {
            item: {
              id: 35,
              url: null,
              name: 'Armbands of Bedlam',
            },
            status: 'OS',
          },
        ],
      },
    ],
    'Drape of Icy Intent': [
      {
        name: 'bridew',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 22,
              url: null,
              name: 'Drape of Icy Intent',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 24,
              url: null,
              name: 'Bladetwister',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Show of Faith': [
      {
        name: 'jeyp',
        className: 'PRIEST',
        specs: [
          {
            main: true,
            type: 'Discipline',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: 'Show of Faith',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 4,
              url: null,
              name: 'Sapphire Amulet of Renewal',
            },
            status: 'OS',
          },
        ],
      },
    ],
    'Boundless Gaze': [
      {
        name: 'haumea',
        className: 'SHAMAN',
        specs: [
          {
            main: true,
            type: 'Enhancement',
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
            status: 'BIS',
          },
          {
            item: {
              id: 40,
              url: null,
              name: 'Boundless Gaze',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Plated Leggings of Ruination': [
      {
        name: 'littlemist',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'Unholy',
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
            status: 'BIS',
          },
          {
            item: {
              id: 27,
              url: null,
              name: 'Warhelm of the Champion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 28,
              url: null,
              name: 'Belt of Colossal Rage',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'deadlyblight',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'Unholy',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Frigid Strength of Hodir': [
      {
        name: 'hallheim',
        className: 'WARRIOR',
        specs: [
          {
            main: true,
            type: 'Fury',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: 'Bulwark of Algalon',
            },
            status: 'OS',
          },
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 42,
              url: null,
              name: 'Frigid Strength of Hodir',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
          {
            item: {
              id: 36,
              url: null,
              name: 'Voldrethar, Dark Blade of Oblivion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    Bladetwister: [
      {
        name: 'bridew',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 22,
              url: null,
              name: 'Drape of Icy Intent',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 24,
              url: null,
              name: 'Bladetwister',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    "Comet's Trail": [
      {
        name: 'haumea',
        className: 'SHAMAN',
        specs: [
          {
            main: true,
            type: 'Enhancement',
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
            status: 'BIS',
          },
          {
            item: {
              id: 40,
              url: null,
              name: 'Boundless Gaze',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'littlemist',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'Unholy',
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
            status: 'BIS',
          },
          {
            item: {
              id: 27,
              url: null,
              name: 'Warhelm of the Champion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 28,
              url: null,
              name: 'Belt of Colossal Rage',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'barrious',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'bridew',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 22,
              url: null,
              name: 'Drape of Icy Intent',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 24,
              url: null,
              name: 'Bladetwister',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'fiachna',
        className: 'DRUID',
        specs: [
          {
            main: true,
            type: 'FeralDps',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
        ],
      },
      {
        name: 'hallheim',
        className: 'WARRIOR',
        specs: [
          {
            main: true,
            type: 'Fury',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 13,
              url: null,
              name: 'Bulwark of Algalon',
            },
            status: 'OS',
          },
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 42,
              url: null,
              name: 'Frigid Strength of Hodir',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
          {
            item: {
              id: 36,
              url: null,
              name: 'Voldrethar, Dark Blade of Oblivion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 41,
              url: null,
              name: 'Sabatons of Lifeless Night',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Warhelm of the Champion': [
      {
        name: 'littlemist',
        className: 'DK',
        specs: [
          {
            main: true,
            type: 'Unholy',
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
            status: 'BIS',
          },
          {
            item: {
              id: 27,
              url: null,
              name: 'Warhelm of the Champion',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 31,
              url: null,
              name: 'Plated Leggings of Ruination',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 28,
              url: null,
              name: 'Belt of Colossal Rage',
            },
            status: 'BIS',
          },
        ],
      },
    ],
    'Embrace of the Gladiator': [
      {
        name: 'barrious',
        className: 'ROGUE',
        specs: [
          {
            main: true,
            type: 'Assassination',
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
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
        ],
      },
      {
        name: 'fiachna',
        className: 'DRUID',
        specs: [
          {
            main: true,
            type: 'FeralDps',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 37,
              url: null,
              name: 'Legguards of Cunning Deception',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 26,
              url: null,
              name: "Comet's Trail",
            },
            status: 'BIS',
          },
          {
            item: {
              id: 33,
              url: null,
              name: 'Embrace of the Gladiator',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 39,
              url: null,
              name: 'Solar Bindings',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 12,
              url: null,
              name: 'Heart of Iron',
            },
            status: 'OS',
          },
        ],
      },
    ],
    'Sapphire Amulet of Renewal': [
      {
        name: 'jeyp',
        className: 'PRIEST',
        specs: [
          {
            main: true,
            type: 'Discipline',
          },
        ],
        main: true,
        items: [
          {
            item: {
              id: 3,
              url: null,
              name: 'Show of Faith',
            },
            status: 'BIS',
          },
          {
            item: {
              id: 4,
              url: null,
              name: 'Sapphire Amulet of Renewal',
            },
            status: 'OS',
          },
        ],
      },
    ],
    Constellus: [
      {
        name: 'pariah',
        className: 'PRIEST',
        specs: [
          {
            main: true,
            type: 'Shadow',
          },
        ],
        main: false,
        items: [
          {
            item: {
              id: 5,
              url: null,
              name: 'Constellus',
            },
            status: 'BIS',
          },
        ],
      },
    ],
  },
  freeItems: [],
};

export const mockedSplits: Split[] = [
  {
    raid1,
    raid2,
    raidName: RaidName.ULDUAR,
  }
];

export const mockedPersons: Person[] = [
  { name: 'aryl', mainClassName: 'PALADIN' as CharacterClass },
  { name: 'barrious', mainClassName: 'ROGUE' as CharacterClass },
  { name: 'bride', mainClassName: 'ROGUE' as CharacterClass },
  { name: 'bullette', mainClassName: 'DRUID' as CharacterClass },
  { name: 'cotolento', mainClassName: 'MAGE' as CharacterClass },
  { name: 'dauran', mainClassName: 'PRIEST' as CharacterClass },
  { name: 'dave', mainClassName: 'PALADIN' as CharacterClass },
  { name: 'deadly', mainClassName: 'PALADIN' as CharacterClass },
  { name: 'doggle', mainClassName: 'DRUID' as CharacterClass },
  { name: 'edenian', mainClassName: 'MAGE' as CharacterClass },
  { name: 'emipian', mainClassName: 'WARLOCK' as CharacterClass },
  { name: 'ethupan', mainClassName: 'HUNTER' as CharacterClass },
  { name: 'fiachna', mainClassName: 'DRUID' as CharacterClass },
  { name: 'frostyboy', mainClassName: 'DK' as CharacterClass },
  { name: 'hallheim', mainClassName: 'WARRIOR' as CharacterClass },
  { name: 'haumea', mainClassName: 'SHAMAN' as CharacterClass },
  { name: 'jeyp', mainClassName: 'PRIEST' as CharacterClass },
  { name: 'jj', mainClassName: 'WARLOCK' as CharacterClass },
  { name: 'kelthal', mainClassName: 'WARRIOR' as CharacterClass },
  { name: 'khaya', mainClassName: 'SHAMAN' as CharacterClass },
  { name: 'kondo', mainClassName: 'WARLOCK' as CharacterClass },
  { name: 'koobo', mainClassName: 'MAGE' as CharacterClass },
  { name: 'mayv', mainClassName: 'DK' as CharacterClass },
  { name: 'mist', mainClassName: 'DK' as CharacterClass },
  { name: 'nagosa', mainClassName: 'SHAMAN' as CharacterClass },
  { name: 'nurgl', mainClassName: 'ROGUE' as CharacterClass },
  { name: 'paco', mainClassName: 'DK' as CharacterClass },
  { name: 'sala', mainClassName: 'HUNTER' as CharacterClass },
  { name: 'swerved', mainClassName: 'WARLOCK' as CharacterClass },
  { name: 'tj', mainClassName: 'PALADIN' as CharacterClass },
  { name: 'zul', mainClassName: 'DK' as CharacterClass },
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