import {
  itemCharacterSplit,
  localStorageICSKey,
  newLocalStorageICSKey,
  ItemCharacterSplitResponce,
  RaidName,
} from 'src/types';
import { ItemCharacterSplits } from 'src/components/ItemCharacterSplit/ItemCharacterSplits';

export const ItemCharacterSplitLayout = ({
  raidName,
  charactersList,
}: {
  raidName: RaidName;
  charactersList: { value: string; label: string }[];
}) => {
  const getLocalStorageICS = (): ItemCharacterSplitResponce[] => {
    const currentOld = localStorage.getItem(localStorageICSKey);
    const currentNew = localStorage.getItem(newLocalStorageICSKey);
    if (currentNew) {
      let currentJson: ItemCharacterSplitResponce[];
      //localStorage.removeItem(localStorageICSKey);
      try {
        currentJson = JSON.parse(currentNew) as ItemCharacterSplitResponce[];
      } catch (e) {
        localStorage.removeItem(newLocalStorageICSKey);
        return [];
      }
      return currentJson;
    }

    // TODO remove after migration
    if (!currentNew && currentOld) {
      let currentJson: itemCharacterSplit[];
      try {
        currentJson = JSON.parse(currentOld) as itemCharacterSplit[];
      } catch (e) {
        localStorage.removeItem(localStorageICSKey);
        return [];
      }

      const newICS: ItemCharacterSplitResponce[] = currentJson.map(ics => {
        return {
          ...ics,
          characterLeft: ics.characterLeft.replace(/\s/g, '').split(','),
          characterRight: ics.characterRight.replace(/\s/g, '').split(','),
        };
      });
      localStorage.setItem(newLocalStorageICSKey, JSON.stringify(newICS));
      //localStorage.removeItem(localStorageICSKey);
      return newICS;
    }

    return [];
  };

  const onIcsChange = (ics: ItemCharacterSplitResponce[]) => {
    localStorage.setItem(newLocalStorageICSKey, JSON.stringify(ics));
  };

  return (
    <ItemCharacterSplits
      itemCharacterSplits={getLocalStorageICS()}
      onIcsChange={onIcsChange}
      raidName={raidName}
      charactersList={charactersList}
    />
  );
};
