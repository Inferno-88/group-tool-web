import { MdDelete, MdEdit } from 'react-icons/md';
import { GoCheckCircleFill } from 'react-icons/go';
import { ImCross } from 'react-icons/im';
import { ImSpinner11 } from 'react-icons/im';
import { FaExclamationTriangle } from 'react-icons/fa';
import { RaidName } from 'src/types';

interface Props {
  ics: {
    item: string;
    characterLeft: string | string[];
    characterRight: string | string[];
    ok?: boolean;
    raidName?: RaidName;
  };
  onDelete?: () => void;
  onEdit?: () => void;
  loading?: boolean;
  noStatus?: boolean;
}

export const ItemCharacterSplitItem = ({ ics, onDelete, onEdit, loading, noStatus }: Props) => {
  const characterLeft = Array.isArray(ics.characterLeft) ? ics.characterLeft.join(', ') : ics.characterLeft;
  const characterRight = Array.isArray(ics.characterRight) ? ics.characterRight.join(', ') : ics.characterRight;

  return (
    <div className="border border-blue-300 text-sm mb-2 relative text-center">
      <div className="pl-2 py-1 break-words font-medium flex">
        {ics.ok !== undefined && !noStatus && (
          <>
            {loading ? (
              <ImSpinner11 className="w-4 h-4 text-slate-500 animate-spin" />
            ) : ics.ok ? (
              <GoCheckCircleFill className="w-5 h-5 text-green-500" />
            ) : (
              <ImCross className="w-5 h-5 text-red-600" />
            )}
          </>
        )}
        <p className="m-auto font-semibold">
          {ics.item}
          {ics.raidName ? (
            <span className="text-xs lowercase font-normal"> ({ics.raidName})</span>
          ) : (
            <FaExclamationTriangle
              className="inline-block ml-1 text-rose-700"
              title="We can't find item in a list! Check the spelling or write to Deadly"
            />
          )}
        </p>
      </div>
      <div className="flex justify-around gap-1">
        <p className="px-2 pb-1 w-1/2 break-all">{characterLeft}</p>
        <p className="px-2 pb-1 w-1/2 break-all">{characterRight}</p>
      </div>
      <div className="absolute top-0 right-0">
        <div
          onClick={onDelete || (() => {})}
          className="w-5 h-5 border border-transparent hover:border hover:border-[#003366] rounded-sm cursor-pointer "
        >
          <MdDelete className="w-4 h-4 m-auto text-[#003366]" />
        </div>
        <div
          onClick={onEdit || (() => {})}
          className="w-5 h-5 border border-transparent hover:border-[#003366] rounded-sm cursor-pointer"
        >
          <MdEdit className="w-4 h-4 m-auto text-[#003366]" />
        </div>
      </div>
    </div>
  );
};
