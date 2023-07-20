import { useEffect, useState } from 'react';
import { itemCharacterSplitResponce } from 'src/types';
import { Button } from 'src/components/Button';
import { ItemCharacterSplitModal } from 'src/components/ItemCharacterSplit/ItemCharacterSplitModal';
import { ItemCharacterSplitItem } from './ItemCharacterSplitItem';

interface Props {
  itemCharacterSplits?: itemCharacterSplitResponce[];
  onIcsChange: (ics: itemCharacterSplitResponce[]) => void;
  showHint?: boolean;
  loading?: boolean;
}

export const ItemCharacterSplits = ({ itemCharacterSplits, onIcsChange, showHint, loading }: Props) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [editedNumber, setEditedNumber] = useState<number | null>(null);
  const [currentICS, setCurrentICS] = useState<itemCharacterSplitResponce[]>(itemCharacterSplits || []);

  useEffect(() => {
    if (itemCharacterSplits) {
      setCurrentICS(itemCharacterSplits);
    }
  }, [itemCharacterSplits]);

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
            },
          ]
        : currentICS.map((ic, i) => {
            if (i === editedNumber) {
              return {
                item: input.item,
                characterLeft: input.characterLeft.replace(/\s/g, '').split(','),
                characterRight: input.characterRight.replace(/\s/g, '').split(','),
                ok: currentICS[editedNumber].ok,
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
    <div className="h-full text-center relative overflow-auto">
      <Button
        className="m-auto px-6 mb-3"
        onClick={() => {
          setIsAdd(true);
        }}
      >
        Add item
      </Button>
      <div className="text-center">
        {currentICS.map((ics, index) => (
          <ItemCharacterSplitItem
            ics={ics}
            onDelete={() => onDelete(index)}
            onEdit={() => onEdit(index)}
            loading={loading}
          />
        ))}
      </div>
      {!!showHint && (
        <div className="text-xs text-slate-500 text-center mt-2">
          Changing these item characters splits will not be saved for the Setup page. They are valid only for this
          split.
        </div>
      )}

      {isAdd && (
        <ItemCharacterSplitModal
          onCancel={onCancel}
          onSave={onSave}
          presetItem={editedNumber ? currentICS[editedNumber].item : undefined}
          presetCharacterLeft={editedNumber ? currentICS[editedNumber].characterLeft.join(', ') : undefined}
          presetCharacterRight={editedNumber ? currentICS[editedNumber].characterRight.join(', ') : undefined}
        />
      )}
    </div>
  );
};
