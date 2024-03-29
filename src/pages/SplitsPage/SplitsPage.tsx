import { Character, Split, SplitsResponce, ItemCharacterSplitResponce, UpdateSplits } from 'src/types';
import { Link, LoaderFunctionArgs, useLoaderData, useNavigate } from 'react-router-dom';
import { mockedSplits } from 'src/mocks/mockedSplits';
import { useCallback, useEffect, useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { SplitLayout } from './SplitLayout';
import { ItemCharactersSplitsDrawer } from './components/ItemCharactersSplitsDrawer';
import { Button } from 'src/components/Button';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';

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

  if (res.status === 404 || res.status >= 500) {
    throw new Response('Not Found', { status: 404 });
  }
  const data = (await res.json()) as SplitsResponce;

  return data;
};

const isReady = (data: Omit<SplitsResponce, 'id'>) => {
  return data.percent === 100 && data.splits;
};

const sendUpdate = (id: number, body: UpdateSplits, onReceiveData: (s: UpdateSplits) => void) => {
  if (process.env.REACT_APP_USE_MOCKS === 'true') {
    // MOCKS
    return;
  }

  fetch(`${process.env.REACT_APP_URL}/splits/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(data => data.json() as Promise<UpdateSplits>)
    .then(data => {
      onReceiveData(data);
    })
    .catch(err => {
      console.log(err);
      alert('Something went wrong!');
    });
};

export const SplitsPage = () => {
  const [splits, setSplits] = useState<Split[]>([]);
  const [itemCharacterSplits, setItemCharacterSplits] = useState<ItemCharacterSplitResponce[]>([]);
  const [statusMessage, setStatusMessage] = useState('loading');
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modified, setModified] = useState(false);

  const navigate = useNavigate();

  const {
    id,
    percent: firstLoadedPercent,
    statusMessage: firstLoadedStatus,
    splits: firstLoadedSplits,
    itemCharacterSplits: firstLoadedItemCharacterSplits,
    modified: firstLoadedModified,
  } = useLoaderData() as SplitsResponce;

  useEffect(() => {
    setSplits(firstLoadedSplits);
    setStatusMessage(firstLoadedStatus);
    setPercent(firstLoadedPercent);
    setItemCharacterSplits(firstLoadedItemCharacterSplits || []);
    setModified(!!firstLoadedModified);
  }, [firstLoadedStatus, firstLoadedPercent, firstLoadedSplits, firstLoadedItemCharacterSplits, firstLoadedModified]);

  const askAgain = async () => {
    const res = await getSplits(id);

    if (!isReady(res)) {
      setPercent(res.percent);
      setStatusMessage(res.statusMessage);
      setTimeout(askAgain, 2000);
    } else {
      setSplits(res.splits);
      setStatusMessage(res.statusMessage);
      setPercent(res.percent);
      setItemCharacterSplits(res.itemCharacterSplits || []);
      setModified(!!res.modified);
    }
  };
  useEffect(() => {
    if (!isReady({ statusMessage, percent, splits })) {
      askAgain();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddorRemove = (raidName: 'raid1' | 'raid2') => (character: Character, action: 'add' | 'remove') => {
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
      id,
      modified: true,
      reset: false,
      split: newSplit,
      itemCharacterSplit: itemCharacterSplits,
    };
    setLoading(true);

    sendUpdate(id, body, data => {
      setSplits([data.split]);
      setItemCharacterSplits(data.itemCharacterSplit);
      setLoading(false);
      setModified(data.modified);

      if (id !== data.id) {
        navigate(`../split/${data.id}`);
      }
    });
  };

  const onIcsChange = useCallback(
    (newIcs: ItemCharacterSplitResponce[]) => {
      const body: UpdateSplits = {
        id,
        modified: true,
        reset: false,
        split: splits[0],
        itemCharacterSplit: newIcs,
      };
      setLoading(true);

      sendUpdate(id, body, data => {
        setSplits([data.split]);
        setItemCharacterSplits(data.itemCharacterSplit);
        setLoading(false);
        setModified(data.modified);

        if (id !== data.id) {
          navigate(`../split/${data.id}`);
        }
      });
    },
    [id, navigate, splits],
  );

  const onReset = () => {
    const body: UpdateSplits = {
      id,
      modified: true,
      reset: true,
      split: splits[0],
      itemCharacterSplit: itemCharacterSplits,
    };
    setLoading(true);

    sendUpdate(id, body, data => {
      setLoading(false);
      window.open(`/split/${data.id}`, '_blank');
    });
  };

  if (
    !isReady({
      percent,
      splits,
      statusMessage,
    })
  ) {
    return <LoadingScreen percent={percent} statusMessage={statusMessage} />;
  }

  const getAllCharacters = () => {
    const allCharacters = new Set([
      ...splits[0].raid1.occupiedCharacters.map(char => char.name),
      ...splits[0].raid2.occupiedCharacters.map(char => char.name),
    ]);
    return Array.from(allCharacters)
      .sort()
      .map(name => ({
        value: name,
        label: name,
      }));
  };

  return (
    <div className="flex">
      <div className="text-center px-5 py-2 w-full">
        <div className="flex justify-between mb-3">
          <Button white small>
            <Link className="text-sm" to={'..'}>
              <BiChevronLeft className="inline-block w-5 h-5" />
              To Setup Screen
            </Link>
          </Button>

          <h1 className="text-md font-bold capitalize">
            {splits[0].raidName.toLowerCase()} split №{id}
          </h1>

          <Button
            className="mr-4 text-sm w-32 flex gap-1 items-center"
            title="Open original split in new tab"
            white
            small
            onClick={onReset}
            loading={loading}
            disabled={!modified}
          >
            <MdOutlineOpenInNew /> Open original
          </Button>
        </div>

        <SplitLayout split={splits[0]} index={0} onAddorRemove={onAddorRemove} />
      </div>

      <ItemCharactersSplitsDrawer
        itemCharacterSplits={itemCharacterSplits}
        onIcsChange={onIcsChange}
        loading={loading}
        raidName={splits[0].raidName}
        charactersList={getAllCharacters()}
      />
    </div>
  );
};
