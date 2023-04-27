export interface Split {
  raid1: Raid;
  raid2: Raid;
}

export interface Raid {
  tanks: Character[];
  healers: Character[];
  dps: Character[];
  occupiedCharacters: Character[];
  raidAvailableChars: Character[];
  itemCharactersMap: ItemCharactersMap;
  freeItems: FreeItem[];
}

export type ItemCharactersMap = Record<string, Character[]>;

export interface FreeItem {
  item: {
    id: number;
    name: string;
    url: string | null;
  },
  status?: string;
}

export interface Character {
  name: string;
  className: string;
  specs: Spec[];
  main: boolean;
  items: CharsItem[];
}

interface CharsItem {
  item: Item;
  status: string;
}

interface Item {
  id: number;
  url: string | null;
  name: string;
}

interface Spec {
  main: boolean;
  type: string;
}

export enum CharacterClass {
  PALADIN = "PALADIN",
  PRIEST = "PRIEST",
  DRUID = "DRUID",
  SHAMAN = "SHAMAN",
  HUNTER = "HUNTER",
  ROGUE = "ROGUE",
  WARRIOR = "WARRIOR",
  DK = "DK",
  WARLOCK = "WARLOCK",
  MAGE = "MAGE",
  NONE = "NONE",
}

export const characterColors: Record<CharacterClass, string> = {
  [CharacterClass.PALADIN]: "#F58CBA",
  [CharacterClass.PRIEST]: "#FFFFFF",
  [CharacterClass.DRUID]: "#FF7D0A",
  [CharacterClass.SHAMAN]: "#0070DE",
  [CharacterClass.HUNTER]: "#ABD473",
  [CharacterClass.ROGUE]: "#FFF569",
  [CharacterClass.WARRIOR]: "#C79C6E",
  [CharacterClass.DK]: "#C41F3B",
  [CharacterClass.WARLOCK]: "#8787ED",
  [CharacterClass.MAGE]: "#69CCF0",
  [CharacterClass.NONE]: "#000000",
};

export const characterColorsText: Record<CharacterClass, string> = {
  [CharacterClass.PALADIN]: "bg-[#F58CBA]",
  [CharacterClass.PRIEST]: "bg-[#FFFFFF]",
  [CharacterClass.DRUID]: "bg-[#FF7D0A]",
  [CharacterClass.SHAMAN]: "bg-[#0070DE]",
  [CharacterClass.HUNTER]: "bg-[#ABD473]",
  [CharacterClass.ROGUE]: "bg-[#FFF569]",
  [CharacterClass.WARRIOR]: "bg-[#C79C6E]",
  [CharacterClass.DK]: "bg-[#C41F3B]",
  [CharacterClass.WARLOCK]: "bg-[#8787ED]",
  [CharacterClass.MAGE]: "bg-[#69CCF0]",
  [CharacterClass.NONE]: "bg-[#000000]",
};

export interface Person {
  name: string;
}

