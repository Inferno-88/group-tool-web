import { useState } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { ItemCharacterSplits } from 'src/components/ItemCharacterSplit/ItemCharacterSplits';
import { ItemCharacterSplitResponce, RaidName } from 'src/types';

interface Props {
  itemCharacterSplits?: ItemCharacterSplitResponce[];
  onIcsChange: (ics: ItemCharacterSplitResponce[]) => void;
  loading?: boolean;
  raidName?: RaidName;
  charactersList?: { value: string; label: string }[];
}

export const ItemCharactersSplitsDrawer = ({
  itemCharacterSplits,
  onIcsChange,
  loading,
  raidName,
  charactersList,
}: Props) => {
  const [open, setOpen] = useState(true);
  const widthClass = open ? 'w-3/12' : 'w-2';

  return (
    <div className={`border-l relative bg-blue-50 transition-all duration-300 ${widthClass}`}>
      <div
        className="absolute w-5 h-10 bg-blue-500 rounded-l-md text-blue-50 top-5 -left-5 pt-2"
        onClick={() => setOpen(prev => !prev)}
      >
        {open ? <BiChevronRight className="w-6 h-6 m-auto" /> : <BiChevronLeft className="w-6 h-6 m-auto" />}
      </div>

      {open && (
        <div className="pt-4 pl-3 pr-1 h-screen">
          <ItemCharacterSplits
            itemCharacterSplits={itemCharacterSplits}
            onIcsChange={onIcsChange}
            splitsView
            loading={loading}
            raidName={raidName}
            charactersList={charactersList}
          />
        </div>
      )}
    </div>
  );
};
