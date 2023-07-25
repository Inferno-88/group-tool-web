import { useEffect, useState } from 'react';
import { itemCharacterSplit, localStorageICSKey, newLocalStorageICSKey, itemCharacterSplitResponce } from 'src/types';
import { ItemCharacterSplits } from 'src/components/ItemCharacterSplit/ItemCharacterSplits';

export const ItemCharacterSplitLayout = () => {
  const [currentICS, setCurrentICS] = useState<itemCharacterSplitResponce[]>([]);

  useEffect(() => {
    const currentOld = localStorage.getItem(localStorageICSKey);
    const currentNew = localStorage.getItem(newLocalStorageICSKey);
    if (currentNew) {
      //localStorage.removeItem(localStorageICSKey);
      try {
        const currentJson = JSON.parse(currentNew) as itemCharacterSplitResponce[];
        setCurrentICS(currentJson);
      } catch (e) {
        localStorage.removeItem(newLocalStorageICSKey);
      }
      return;
    }

    // TODO remove after migration
    if (!currentNew && currentOld) {
      let currentJson: itemCharacterSplit[];
      try {
        currentJson = JSON.parse(currentOld) as itemCharacterSplit[];
      } catch (e) {
        localStorage.removeItem(localStorageICSKey);
        return;
      }

      const newICS: itemCharacterSplitResponce[] = currentJson.map(ics => {
        return {
          ...ics,
          characterLeft: ics.characterLeft.replace(/\s/g, '').split(','),
          characterRight: ics.characterRight.replace(/\s/g, '').split(','),
        };
      });
      localStorage.setItem(newLocalStorageICSKey, JSON.stringify(newICS));
      //localStorage.removeItem(localStorageICSKey);
      setCurrentICS(newICS);
      return;
    }
  }, []);

  const onIcsChange = (ics: itemCharacterSplitResponce[]) => {
    localStorage.setItem(newLocalStorageICSKey, JSON.stringify(ics));
    setCurrentICS(ics);
  };

  return <ItemCharacterSplits itemCharacterSplits={currentICS} onIcsChange={onIcsChange} />;
};
