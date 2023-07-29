import { Button } from 'src/components/Button';
import { useState } from 'react';
import Select from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface Props {
  presetItem?: string;
  presetCharacterLeft?: string;
  presetCharacterRight?: string;
  onCancel: () => void;
  onSave: (input: { item: string; characterLeft: string; characterRight: string }) => void;
  itemsList: Option[];
}

export const ItemCharacterSplitModal = ({
  presetItem,
  presetCharacterLeft,
  presetCharacterRight,
  itemsList,
  onCancel,
  onSave,
}: Props) => {
  const [item, setItem] = useState<string>(presetItem || '');
  const [characterLeft, setCharacterLeft] = useState<string>(presetCharacterLeft || '');
  const [characterRight, setCharacterRight] = useState<string>(presetCharacterRight || '');

  return (
    <div className="w-full h-[300%] top-0 left-0 absolute bg-slate-50/60">
      <div className="text-left rounded border-2 border-blue-200 p-2 bg-blue-50 fixed top-[35%]">
        <Select
          isClearable={true}
          isSearchable={true}
          name="item"
          value={{ value: item, label: item }}
          options={itemsList}
          onChange={option => {
            setItem(option?.value || '');
          }}
        />
        <div className="flex gap-2 m-3 text-center">
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
