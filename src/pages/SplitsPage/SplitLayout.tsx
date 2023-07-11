import { Character, Split } from 'src/types';
import { RaidLayout } from 'src/pages/SplitsPage/components/RaidLayout/RaidLayout';

export const SplitLayout = ({
  split,
  index,
  onAddorRemove,
}: {
  split: Split;
  index: number;
  onAddorRemove: (raidName: 'raid1' | 'raid2') => (character: Character, action: 'add' | 'remove') => void;
}) => {
  return (
    <div className="flex gap-x-2">
      <RaidLayout raid={split.raid1} name={'Wed'} onAddorRemove={onAddorRemove('raid1')} />
      <RaidLayout raid={split.raid2} name={'Sun'} onAddorRemove={onAddorRemove('raid2')} />
    </div>
  );
};
