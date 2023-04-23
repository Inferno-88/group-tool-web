import { Split } from "src/types";
import { RaidLayout } from "src/components/RaidLayout/RaidLayout";

interface Props {
  splits: Split[];
}

export const MainPage = ({ splits }: Props) => {
  console.log(splits);
  return (
    <div className="text-center p-5">
      <h1 className="text-3xl font-bold mb-5">Generated splits</h1>
      <div className="">
        {splits?.map((split, index) => {
          return <SplitLayout key={index} split={split} index={index} />;
        })}
      </div>
    </div>
  );
};

const SplitLayout = ({ split, index }: { split: Split; index: number }) => {
  return (
    <div className="border border-slate-400 mb-10">
      <h2 className="text-xl font-bold">Split {index + 1}</h2>
      <div className="flex gap-x-2">
        <RaidLayout raid={split.raid1} name={"Wed"} />
        <RaidLayout raid={split.raid2} name={"Sun"} />
      </div>
    </div>
  );
};
