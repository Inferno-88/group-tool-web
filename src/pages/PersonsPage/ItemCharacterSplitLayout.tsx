import { useEffect, useState } from 'react';
import { itemCharacterSplit, localStorageICSKey } from 'src/types';
import { ReactComponent as DeleteIcon } from 'src/icons/delete.svg';
import { ReactComponent as EditIcon } from 'src/icons/edit.svg';

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
      <div className="flex justify-around m-1">
        <h3 className="mx-auto font-semibold mt-2">Item character splits</h3>
        <button
          className="border font-semibold py-1 px-2 rounded h-10 m-auto"
          onClick={() => {
            setIsAdd(true);
          }}
        >
          Add item
        </button>
      </div>
      <div className="text-center">
        {currentICS.map((ics: itemCharacterSplit, index: number) => (
          <div className="border text-sm mb-2 flex justify-around" key={ics.item}>
            <p className="p-2 w-[21%] break-words">{ics.item}</p>
            <p className="p-2 w-[37%] break-words">{ics.characterLeft}</p>
            <p className="p-2 w-[37%] break-words">{ics.characterRight}</p>
            <div className="w-[5%]">
              <div
                onClick={() => onDelete(index)}
                className="w-5 h-5 mt-2 border border-black rounded-sm cursor-pointer "
              >
                <DeleteIcon className="w-4 h-4 m-auto" />
              </div>
              <div
                onClick={() => onEdit(index)}
                className=" w-5 h-5 mt-2 border border-black rounded-sm  cursor-pointer "
              >
                <EditIcon className="w-4 h-4 m-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isAdd && (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-slate-50/40">
          <div className="text-center mt-7 rounded border-2 border-slate-300 top-32 absolute p-2 bg-gray-50 w-full">
            <input
              type="text"
              placeholder="Item name"
              className="border p-2 mr-2"
              value={item}
              onChange={e => setItem(e.target.value)}
            />
            <div className="flex gap-2 m-3">
              <textarea
                placeholder="Characters left"
                className="border p-2 w-full"
                value={characterLeft}
                onChange={e => setCharacterLeft(e.target.value)}
              />
              <textarea
                placeholder="Characters right"
                className="border p-2 w-full"
                value={characterRight}
                onChange={e => setCharacterRight(e.target.value)}
              />
            </div>
            <div className="flex justify-center gap-2">
              <button className="block border font-bold py-2 px-4 rounded h-10 bg-white" onClick={onCancel}>
                Cancel
              </button>

              <button
                className="block border font-bold py-2 px-4 rounded h-10 bg-blue-500 hover:bg-blue-700 disabled:bg-blue-100"
                onClick={onSave}
                disabled={!item || !characterLeft || !characterRight}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
