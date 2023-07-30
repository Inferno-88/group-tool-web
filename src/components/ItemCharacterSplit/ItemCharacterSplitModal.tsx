import { Button } from 'src/components/Button';
import { useState } from 'react';
import Select from 'react-select';
import styles from './styles.module.css';

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
  splitsView?: boolean;
  itemsList: Option[];
  charactersList: Option[];
}

export const ItemCharacterSplitModal = ({
  presetItem,
  presetCharacterLeft,
  presetCharacterRight,
  itemsList,
  charactersList,
  splitsView,
  onCancel,
  onSave,
}: Props) => {
  const [item, setItem] = useState<string>(presetItem || '');
  const [characterLeft, setCharacterLeft] = useState<string | undefined>(presetCharacterLeft || undefined);
  const [characterRight, setCharacterRight] = useState<string | undefined>(presetCharacterRight || undefined);
  console.log('characterLeft', characterLeft?.split(', ').map(character => ({ value: character, label: character })));
  console.log('characterLeft clear', characterLeft);

  const getValue = (chars: string | undefined) => {
    if (!chars) return undefined;
    return chars.split(', ').map(character => ({ value: character, label: character }));
  };

  return (
    <div className="w-full h-[300%] top-0 left-0 absolute bg-slate-50/60">
      <div
        className={`text-left rounded border-2 border-blue-200 p-2 bg-blue-50 fixed top-[35%] ${
          splitsView ? '' : 'w-[29rem]'
        }`}
      >
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
          <Select
            isSearchable={true}
            isMulti={true}
            name="characterLeft"
            value={getValue(characterLeft)}
            options={charactersList}
            onChange={options => {
              console.log(options);
              setCharacterLeft(options?.map(option => option.value).join(', '));
            }}
            classNames={{
              container: () => 'w-1/2',
              indicatorsContainer: () => styles.iconsContainer,
              valueContainer: () => 'p-1',
            }}
          />
          <Select
            isSearchable={true}
            isMulti={true}
            name="characterRight"
            value={getValue(characterRight)}
            options={charactersList}
            onChange={options => {
              console.log(options);
              setCharacterRight(options?.map(option => option.value).join(', '));
            }}
            classNames={{
              container: () => 'w-1/2',
              indicatorsContainer: () => styles.iconsContainer,
              valueContainer: () => 'p-1',
            }}
          />
        </div>
        <div className="flex justify-center gap-2">
          <Button className="w-24" onClick={onCancel}>
            Cancel
          </Button>

          <Button
            className="w-24"
            primary
            onClick={() => {
              if (!characterLeft || !characterRight) return;
              onSave({ item, characterLeft, characterRight });
            }}
            disabled={!item || !characterLeft || !characterRight}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
