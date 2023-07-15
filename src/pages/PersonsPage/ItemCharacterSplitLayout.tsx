import { useEffect, useState } from 'react';
import { itemCharacterSplit, localStorageICSKey } from 'src/types';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { Button } from 'src/components/Button';

export const ItemCharacterSplitLayout = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [editedNumber, setEditedNumber] = useState<number | null>(null);
  const [item, setItem] = useState<string>('');
  const [characterLeft, setCharacterLeft] = useState<string>('');
  const [characterRight, setCharacterRight] = useState<string>('');

  const [currentICS, setCurrentICS] = useState<itemCharacterSplit[]>([]);

  useEffect(() => {
    const current = localStorage.getItem(localStorageICSKey);
    if (current) {
      try {
        const currentJson = JSON.parse(current) as itemCharacterSplit[];
        setCurrentICS(currentJson);
      } catch (e) {
        localStorage.removeItem(localStorageICSKey);
      }
    }
  }, []);

  const onDelete = (index: number) => {
    if (!currentICS.length) return;

    const newICS = currentICS.filter((ic: itemCharacterSplit, i: number) => i !== index);

    localStorage.setItem(localStorageICSKey, JSON.stringify(newICS));
    setCurrentICS(newICS);
  };

  const onSave = () => {
    setIsAdd(false);

    const newICS =
      editedNumber === null
        ? [...currentICS, { item: item, characterLeft, characterRight }]
        : currentICS.map((ic: itemCharacterSplit, i: number) => {
            if (i === editedNumber) {
              return { item: item, characterLeft, characterRight };
            }
            return ic;
          });

    localStorage.setItem(localStorageICSKey, JSON.stringify(newICS));
    setCurrentICS(newICS);

    setItem('');
    setCharacterLeft('');
    setCharacterRight('');
    setEditedNumber(null);
  };

  const onEdit = (index: number) => {
    const ics = currentICS[index];
    setItem(ics.item);
    setCharacterLeft(ics.characterLeft);
    setCharacterRight(ics.characterRight);
    setIsAdd(true);
    setEditedNumber(index);
  };

  const onCancel = () => {
    setIsAdd(false);
    setItem('');
    setCharacterLeft('');
    setCharacterRight('');
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
        {currentICS.map((ics: itemCharacterSplit, index: number) => (
          <div className="border border-blue-300 text-sm mb-2 relative" key={ics.item+ics.characterLeft+ics.characterRight+index}>
            <p className="p-2 break-words font-medium">{ics.item}</p>
            <div className="flex justify-around gap-1">
              <p className="p-2 w-1/2 break-all">{ics.characterLeft}</p>
              <p className="p-2 w-1/2 break-all">{ics.characterRight}</p>
            </div>
            <div className="absolute top-0 right-0">
              <div
                onClick={() => onDelete(index)}
                className="w-5 h-5 mt-2  border border-transparent hover:border hover:border-[#003366] rounded-sm cursor-pointer inline-block"
              >
                <MdDelete className="w-4 h-4 m-auto text-[#003366]" />
              </div>
              <div
                onClick={() => onEdit(index)}
                className="w-5 h-5 mt-2 border border-transparent hover:border-[#003366] rounded-sm cursor-pointer inline-block mr-1"
              >
                <MdEdit className="w-4 h-4 m-auto text-[#003366]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isAdd && (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-slate-50/60">
          <div className="text-center mt-7 rounded border-2 border-blue-200 top-32 absolute p-2 bg-blue-50 w-full">
            <input
              type="text"
              placeholder="Item name"
              className="p-2 w-4/5"
              value={item}
              onChange={e => setItem(e.target.value)}
            />
            <div className="flex gap-2 m-3">
              <textarea
                placeholder="Characters left"
                className="p-2 w-full"
                value={characterLeft}
                onChange={e => setCharacterLeft(e.target.value)}
              />
              <textarea
                placeholder="Characters right"
                className="p-2 w-full"
                value={characterRight}
                onChange={e => setCharacterRight(e.target.value)}
              />
            </div>
            <div className="flex justify-center gap-2">
              <Button className="w-24" onClick={onCancel}>
                Cancel
              </Button>

              <Button
                className="w-24"
                primary
                onClick={onSave}
                disabled={!item || !characterLeft || !characterRight}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
