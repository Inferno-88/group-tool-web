import { Character, Split } from "src/types";
import { RaidLayout } from "src/pages/SplitsPage/RaidLayout/RaidLayout";

interface Props {
  splits: Split[];
  onAddorRemove: (
    splitIndex: number
  ) => (
    raidName: "raid1" | "raid2"
  ) => (character: Character, action: "add" | "remove") => void;
}

export const SplitsPage = ({ splits, onAddorRemove }: Props) => {
  return (
    <div className="text-center p-5">
      <h1 className="text-md font-bold mb-1">Generated splits</h1>
      <div className="">
        {splits?.map((split, index) => {
          return <SplitLayout key={index} split={split} index={index} onAddorRemove={onAddorRemove(index)} />;
        })}
      </div>
    </div>
  );
};

const SplitLayout = ({
  split,
  index,
  onAddorRemove,
}: {
  split: Split;
  index: number;
  onAddorRemove: (
    raidName: "raid1" | "raid2"
  ) => (character: Character, action: "add" | "remove") => void;
}) => {
  return (
    <div className="mb-10">
      <h2 className="text-sm font-bold">Split {index + 1}</h2>
      <div className="flex gap-x-2">
        <RaidLayout
          raid={split.raid1}
          name={"Wed"}
          onAddorRemove={onAddorRemove("raid1")}
        />
        <RaidLayout
          raid={split.raid2}
          name={"Sun"}
          onAddorRemove={onAddorRemove("raid2")}
        />
      </div>
    </div>
  );
};
