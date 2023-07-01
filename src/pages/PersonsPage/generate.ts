import {Character, itemCharacterSplit, localStorageICSKey, Split, RaidName} from 'src/types';

interface AvailablePersons {
  raid1: string[];
  raid2: string[];
}

export async function generate (available: AvailablePersons, raidName: RaidName) {
    try {
        const splitID = await fetch(`${process.env.REACT_APP_URL}/splits`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            raid1: available.raid1,
            raid2: available.raid2,
            itemCharacterSplit: getICS(),
            raidName,
            }),
        });
        return await splitID.json() as number;
    } catch (e) {
        console.log(e);
        alert('Something went wrong! Please try again');
        return await undefined;
}
};

const getICS = () => {
  const localICS = localStorage.getItem(localStorageICSKey);
  let localICSparsesd = [];
  if (localICS) {
    try {
      localICSparsesd = JSON.parse(localICS);
    } catch (e) {
      localStorage.removeItem(localStorageICSKey);
    }
  }
  return localICSparsesd.map((ic: itemCharacterSplit) => {
      const newCharLeft = ic.characterLeft
        .toLowerCase()
        .split(',')
        .map((c: string) => c.trim());
      const newCharRight = ic.characterRight
        .toLowerCase()
        .split(',')
        .map((c: string) => c.trim());
      return {
        item: ic.item.toLowerCase(),
        characterLeft: newCharLeft,
        characterRight: newCharRight,
      };
  });
};

