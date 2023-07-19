import { Character, Split, SplitsResponce, itemCharacterSplitResponce, UpdateSplits } from 'src/types';
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { mockedSplits } from 'src/mocks/mockedSplits';
import { useEffect, useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { SplitLayout } from './SplitLayout';
import { ItemCharactersSplits } from './components/ItemCharactersSplits';

export async function loaderOfSplits({ params }: LoaderFunctionArgs) {
  return await getSplits(params.id);
}

const getSplits = async (id?: string | number): Promise<SplitsResponce> => {
  if (!id) {
    throw new Response('Not Found', { status: 404 });
  }

  if (process.env.REACT_APP_USE_MOCKS === 'true') {
    return {
      id: 1,
      statusMessage: 'Done!',
      percent: 100,
      splits: mockedSplits,
      itemCharacterSplits: [
        {
          characterLeft: ['koobonobo'],
          characterRight: ['arylpog'],
          item: 'star-beaded clutch',
          ok: true,
        },
        {
          characterLeft: ['koobonobo'],
          characterRight: ['arylpog'],
          item: 'star-beaded clutch',
          ok: true,
        },
      ],
    };
  }
  const res = await fetch(`${process.env.REACT_APP_URL}/splits/${id}`);
  if (res.status === 404) {
    throw new Response('Not Found', { status: 404 });
  }
  const data = (await res.json()) as SplitsResponce;

  return data;
};

const isReady = (data: Omit<SplitsResponce, 'id'>) => {
  return data.statusMessage === 'Done!' && data.percent === 100 && data.splits;
};

export const SplitsPage = () => {
  const [splits, setSplits] = useState<Split[]>([]);
  const [itemCharacterSplits, setItemCharacterSplits] = useState<itemCharacterSplitResponce[]>([]);
  const [statusMessage, setStatusMessage] = useState('loading');
  const [percent, setPercent] = useState(0);

  const {
    id,
    percent: firstLoadedPercent,
    statusMessage: firstLoadedStatus,
    splits: firstLoadedSplits,
    itemCharacterSplits: firstLoadedItemCharacterSplits,
  } = useLoaderData() as SplitsResponce;

  useEffect(() => {
    console.log('firstLoadedData effect');

    setSplits(firstLoadedSplits);
    setStatusMessage(firstLoadedStatus);
    setPercent(firstLoadedPercent);
    setItemCharacterSplits(firstLoadedItemCharacterSplits || []);
  }, [firstLoadedStatus, firstLoadedPercent, firstLoadedSplits, firstLoadedItemCharacterSplits]);

  const askAgain = async () => {
    const res = await getSplits(id);
    if (!isReady(res)) {
      setPercent(res.percent);
      setTimeout(askAgain, 2000);
    } else {
      setSplits(res.splits);
      setStatusMessage(res.statusMessage);
      setPercent(res.percent);
      setItemCharacterSplits(res.itemCharacterSplits || []);
    }
  };
  useEffect(() => {
    if (!isReady({ statusMessage, percent, splits })) {
      askAgain();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddorRemove = (raidName: 'raid1' | 'raid2') => (character: Character, action: 'add' | 'remove') => {
    if (process.env.REACT_APP_USE_MOCKS === 'true') {
      // MOCKS
      return;
    }
    const currentSplit = splits[0];

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

    const body: UpdateSplits = {
      modified: true,
      reset: false,
      split: newSplit,
      itemCharacterSplit: itemCharacterSplits,
    };

    fetch(`${process.env.REACT_APP_URL}/splits/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json() as Promise<UpdateSplits>)
      .then(data => {
        setSplits([data.split]);
        setItemCharacterSplits(data.itemCharacterSplit);
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
    <div className="flex">
      <div className="text-center px-5 py-2 w-full">
        <div className="relative">
          <Link className="block border font-bold py-1.5 px-2 text-sm rounded w-auto absolute top-0 left-0" to={'..'}>
            <BiChevronLeft className="inline-block w-5 h-5" />
            To Setup Screen
          </Link>
          <h1 className="text-md font-bold py-2 w-full">Generated splits</h1>
        </div>

        <SplitLayout split={splits[0]} index={0} onAddorRemove={onAddorRemove} />
      </div>

      <ItemCharactersSplits itemCharacterSplits={itemCharacterSplits} setItemCharacterSplits={setItemCharacterSplits} />
    </div>
  );
};
