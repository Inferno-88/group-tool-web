import { useState } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { ItemCharacterSplitItem } from 'src/components/ItemCharacterSplitItem';
import { itemCharacterSplitResponce } from 'src/types';

interface Props {
  itemCharacterSplits?: itemCharacterSplitResponce[];
}

export const ItemCharactersSplits = ({ itemCharacterSplits }: Props) => {
  const [open, setOpen] = useState(false);
  const widthClass = open ? 'w-3/12' : 'w-2';

  return (
    <div className={`border-l relative transition-all duration-300 ${widthClass}`}>
      <div
        className="absolute w-6 h-6 bg-blue-500 rounded-l-md text-blue-50 top-5 -left-6"
        onClick={() => setOpen(prev => !prev)}
      >
        {open ? <BiChevronRight className="w-6 h-6 m-auto" /> : <BiChevronLeft className="w-6 h-6 m-auto" />}
      </div>

      {open && (
        <div className="pt-12 px-3">{itemCharacterSplits?.map(ics => <ItemCharacterSplitItem ics={ics} />)}</div>
      )}
    </div>
  );
};
