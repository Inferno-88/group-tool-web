import { Button } from 'src/components/Button';
import { useState } from 'react';

interface Props {
  presetItem?: string;
  presetCharacterLeft?: string;
  presetCharacterRight?: string;
  onCancel: () => void;
  onSave: (input: { item: string; characterLeft: string; characterRight: string }) => void;
}

export const ItemCharacterSplitModal = ({
  presetItem,
  presetCharacterLeft,
  presetCharacterRight,
  onCancel,
  onSave,
}: Props) => {
  const [item, setItem] = useState<string>(presetItem || '');
  const [characterLeft, setCharacterLeft] = useState<string>(presetCharacterLeft || '');
  const [characterRight, setCharacterRight] = useState<string>(presetCharacterRight || '');

  return (
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
            onClick={() => onSave({ item, characterLeft, characterRight })}
            disabled={!item || !characterLeft || !characterRight}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
