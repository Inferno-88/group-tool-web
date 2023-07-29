import { useEffect, useMemo, useState } from 'react';
import { ItemCharacterSplitResponce, ItemDictionary, RaidName } from 'src/types';
import { Button } from 'src/components/Button';
import { ItemCharacterSplitModal } from 'src/components/ItemCharacterSplit/ItemCharacterSplitModal';
import { ItemCharacterSplitItem } from './ItemCharacterSplitItem';
import { mockedItems } from 'src/mocks/mockedSplits';

interface Props {
  itemCharacterSplits?: ItemCharacterSplitResponce[];
  onIcsChange: (ics: ItemCharacterSplitResponce[]) => void;
  splitsView?: boolean;
  loading?: boolean;
  raidName?: RaidName;
}

function formatItemsByRaidHandler(
  itemCharacterSplits?: ItemCharacterSplitResponce[],
  items?: ItemDictionary[],
): ItemCharacterSplitResponce[] {
  if (!itemCharacterSplits) return [];
  if (!items) {
    return itemCharacterSplits;
  }

  const result = itemCharacterSplits.map(ics => {
    const fullIcs = items.find(item => item.name.toLowerCase() === ics.item.toLowerCase());

    return {
      ...ics,
      raidName: fullIcs?.raidName,
    };
  });

  return result;
}

export const ItemCharacterSplits = ({ itemCharacterSplits, onIcsChange, splitsView, loading, raidName }: Props) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [editedNumber, setEditedNumber] = useState<number | null>(null);
  const [itemsDictionary, setItemsDictionary] = useState<ItemDictionary[]>([]);
  const [currentICS, setCurrentICS] = useState<ItemCharacterSplitResponce[]>([]);

  const formatItemsByRaid = useMemo(
    () => formatItemsByRaidHandler(itemCharacterSplits, itemsDictionary),
    [itemCharacterSplits, itemsDictionary],
  );

  useEffect(() => {
    if (process.env.REACT_APP_USE_MOCKS === 'true') {
      // MOCKS
      setItemsDictionary(mockedItems);
      return;
    }

    fetch(`${process.env.REACT_APP_URL}/items`)
      .then(data => data.json() as Promise<ItemDictionary[]>)
      .then(data => {
        setItemsDictionary(data);
      });
  }, []);

  useEffect(() => {
    console.log('effect update ics on formated change', formatItemsByRaid);
    setCurrentICS(formatItemsByRaid);
    if (!splitsView) {
      onIcsChange(formatItemsByRaid);
    }
  }, [formatItemsByRaid, onIcsChange, splitsView]);

  const onDelete = (index: number) => {
    if (!currentICS.length) return;

    const newICS = currentICS.filter((ic, i) => i !== index);

    setCurrentICS(newICS);
    onIcsChange(newICS);
  };

  const onSave = (input: { item: string; characterLeft: string; characterRight: string }) => {
    const newICS =
      editedNumber === null
        ? [
            ...currentICS,
            {
              item: input.item,
              characterLeft: input.characterLeft.replace(/\s/g, '').split(','),
              characterRight: input.characterRight.replace(/\s/g, '').split(','),
              ok: false,
              raidName: itemsDictionary.find(item => item.name.toLowerCase() === input.item.toLowerCase())?.raidName,
            },
          ]
        : currentICS.map((ic, i) => {
            if (i === editedNumber) {
              return {
                item: input.item,
                characterLeft: input.characterLeft.replace(/\s/g, '').split(','),
                characterRight: input.characterRight.replace(/\s/g, '').split(','),
                ok: currentICS[editedNumber].ok,
                raidName: itemsDictionary.find(item => item.name.toLowerCase() === input.item.toLowerCase())?.raidName,
              };
            }
            return ic;
          });

    onIcsChange(newICS);
    setCurrentICS(newICS);
    setIsAdd(false);
    setEditedNumber(null);
  };

  const onEdit = (index: number) => {
    setIsAdd(true);
    setEditedNumber(index);
  };

  const onCancel = () => {
    setIsAdd(false);
    setEditedNumber(null);
  };

  return (
    <div className={`h-full text-center relative ${isAdd ? 'overflow-hidden' : 'overflow-auto'}`}>
      <Button
        className="m-auto px-6 mb-3"
        onClick={() => {
          setIsAdd(true);
        }}
        white={splitsView}
        small={splitsView}
      >
        Add item
      </Button>
      <div className="text-center">
        {currentICS.map((ics, index) => {
          if (!raidName || !ics.raidName || ics.raidName === raidName) {
            return (
              <ItemCharacterSplitItem
                key={ics.item + index}
                ics={ics}
                onDelete={() => onDelete(index)}
                onEdit={() => onEdit(index)}
                loading={loading}
                noStatus={!splitsView}
              />
            );
          }
          return null;
        })}
      </div>
      {!!splitsView && (
        <div className="text-xs text-slate-500 text-center mt-2">
          Changing these item characters splits will not be saved for the Setup page. They are valid only for this
          split.
        </div>
      )}

      {isAdd && (
        <ItemCharacterSplitModal
          onCancel={onCancel}
          onSave={onSave}
          presetItem={editedNumber !== undefined && editedNumber !== null ? currentICS[editedNumber].item : undefined}
          presetCharacterLeft={
            editedNumber !== undefined && editedNumber !== null
              ? currentICS[editedNumber].characterLeft.join(', ')
              : undefined
          }
          presetCharacterRight={
            editedNumber !== undefined && editedNumber !== null
              ? currentICS[editedNumber].characterRight.join(', ')
              : undefined
          }
          itemsList={itemsDictionary
            .filter(item => !raidName || item.raidName === raidName)
            .map(item => ({
              value: item.name,
              label: item.name,
            }))}
        />
      )}
    </div>
  );
};
