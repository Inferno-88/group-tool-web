import { ItemCharacterSplitResponce, newLocalStorageICSKey, RaidName } from 'src/types';

interface AvailablePersons {
  raid1: string[];
  raid2: string[];
}

export async function generate(available: AvailablePersons, raidName: RaidName) {
  // MOCKS
  if (process.env.REACT_APP_USE_MOCKS === 'true') {
    return await 1;
  }

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
    return (await splitID.json()) as number;
  } catch (e) {
    console.log(e);
    alert('Something went wrong! Please try again');
    return await undefined;
  }
}

const getICS = () => {
  const localICS = localStorage.getItem(newLocalStorageICSKey);
  let localICSparsesd = [];
  if (localICS) {
    try {
      localICSparsesd = JSON.parse(localICS);
    } catch (e) {
      localStorage.removeItem(newLocalStorageICSKey);
    }
  }

  return localICSparsesd.map((ic: ItemCharacterSplitResponce) => {
    const newCharLeft = ic.characterLeft.map((c: string) => c.trim().toLowerCase());
    const newCharRight = ic.characterRight.map((c: string) => c.trim().toLowerCase());
    return {
      item: ic.item.toLowerCase(),
      characterLeft: newCharLeft,
      characterRight: newCharRight,
    };
  });
};
