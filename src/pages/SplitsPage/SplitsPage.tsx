import { Character, Split, SplitsResponce } from "src/types";
import { RaidLayout } from "src/pages/SplitsPage/RaidLayout/RaidLayout";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import {mockedSplits} from 'src/mocks/mockedSplits';
import { useEffect, useState } from "react";

export async function loaderOfSplits({ params }: LoaderFunctionArgs) {
  return await getSplits(params.id);
}

const getSplits = async (id?: string | number) => {
  if (!id) {
    throw new Response("Not Found", { status: 404 });
  }

  if (process.env.REACT_APP_USE_MOCKS === 'true') {
    return {
      id: 1,
      statusMessage: "Done!",
      percent: 100,
      splits: mockedSplits,
    };
  }
  const res = await fetch(`${process.env.REACT_APP_URL}/splits/${id}`);
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  const data = await res.json() as SplitsResponce;

  return data;
}

const isReady = (data: Omit<SplitsResponce, "id">) => {
  return data.statusMessage === "Done!" && data.percent === 100 && data.splits;
}

export const SplitsPage = () => {
  const [splits, setSplits] = useState<Split[]>([]);
  const [statusMessage, setStatusMessage] = useState("loading");
  const [percent, setPercent] = useState(0);

  const { id, percent: firstLoadedPercent, statusMessage: firstLoadedStatus, splits: firstLoadedSplits } = useLoaderData() as SplitsResponce;

  useEffect(() => {
    console.log("firstLoadedData effect");

    setSplits(firstLoadedSplits);
    setStatusMessage(firstLoadedStatus);
    setPercent(firstLoadedPercent);
  }, [firstLoadedStatus, firstLoadedPercent, firstLoadedSplits]);

  const askAgain = async () => {
    const res = await getSplits(id);
    if (!isReady(res)) {
      setPercent(res.percent);
      setTimeout(askAgain, 2000);
    } else {
      setSplits(res.splits);
      setStatusMessage(res.statusMessage);
      setPercent(res.percent);
    }
  }
  useEffect(() => {
    if (!isReady({ statusMessage, percent, splits })) {
      askAgain()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 const onAddorRemove =
    (splitIndex: number) => (raidName: 'raid1' | 'raid2') => (character: Character, action: 'add' | 'remove') => {
      if (process.env.REACT_APP_USE_MOCKS === 'true') {
        // MOCKS
        return;
      }
      const currentSplit = splits[splitIndex];

      let newOccupied: Character[];
      if (action === 'add') {
        newOccupied = [...currentSplit[raidName].occupiedCharacters, character];
      } else {
        newOccupied = currentSplit[raidName].occupiedCharacters.filter(c => c.name !== character.name);
      }

      const newSplit: Split = {
        ...currentSplit,
        [raidName]: {
          ...currentSplit[raidName],
          occupiedCharacters: newOccupied,
        },
      };

      
      fetch(`${process.env.REACT_APP_URL}/splits`, {
        method: 'PUT',
        body: JSON.stringify(newSplit),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(data => data.json())
        .then(data => {
          setSplits(oldSplits => {
            const newSplits = [...oldSplits];
            newSplits[splitIndex] = data;
            return newSplits;
          });
        })
        .catch(err => {
          console.log(err);
          alert('Something went wrong!');
        });
      
    };


  if (!isReady({ statusMessage, percent, splits })) {
    return <div>Loading... {percent}</div>;
  }

  return (
    <div className="text-center p-5">
      <div className="relative">
        <Link
          className="block border font-bold py-1.5 px-2 text-sm rounded w-auto absolute top-0 left-0"
          to={".."}
        >
          {`< To Setup Screen`}
        </Link>
        <h1 className="text-md font-bold mb-1 py-2 w-full">Generated splits</h1>

      </div>
      <div>
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
