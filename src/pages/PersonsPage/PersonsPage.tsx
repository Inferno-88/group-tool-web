import { useEffect, useState } from "react";
import { mockedPersons } from "src/mocks/mockedSplits";
import { itemCharacterSplit, Person, characterColorsText, localStorageICSKey } from 'src/types';

interface Props {
  generate: (available: AvailablePersons) => void;
  loading: boolean;
}

interface AvailablePersons {
  raid1: string[];
  raid2: string[];
}

export const PersonsPage = ({ generate, loading }: Props) => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [raid1, setRaid1] = useState<string[]>([]);
  const [raid2, setRaid2] = useState<string[]>([]);

  useEffect(() => {
    if (process.env.REACT_APP_USE_MOCKS !== 'true') {
      const url = `${process.env.REACT_APP_URL}/persons`;
      fetch(url)
        .then(data => data.json())
        .then(data => {
          setPersons(data);
        });
    } else {
      // MOCKS
      setPersons(mockedPersons);
    }
  }, []);

  const selectAll = () => {
    setRaid1(persons.map(person => person.name));
    setRaid2(persons.map(person => person.name));
  };

  const clearAll = () => {
    setRaid1([]);
    setRaid2([]);
  };

  return (
    <div className="text-center p-3 h-screen flex flex-col">
      <h1 className="mb-4 text-2xl font-bold">Choose available persons</h1>
      <div className="flex mb-7 justify-center h-36">
        <div className="mr-4">
          <button
            disabled={loading}
            className="block border font-bold py-2 px-4 rounded h-10 mb-6 w-full"
            onClick={() => selectAll()}
          >
            Select All
          </button>
          <button
            disabled={loading}
            className="block border font-bold py-2 px-4 rounded h-10 w-full"
            onClick={() => clearAll()}
          >
            Clear All
          </button>
        </div>
        <div className="border w-1/3 p-3 mr-6 text-sm capitalize ">{raid1.join(', ')}</div>
        <div className="border w-1/3 p-3 mr-6 text-sm capitalize ">{raid2.join(', ')}</div>
        <button
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 disabled:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded h-10"
          onClick={() => generate({ raid1, raid2 })}
        >
          {loading ? 'Loading...' : 'Generate!'}
        </button>
      </div>
      <div className="flex overflow-auto">
        {persons.length > 0 ? (
          <div className="flex flex-col flex-wrap content-start w-2/3">
            {persons.map(person => (
              <PersonLayout
                key={person.name}
                person={person}
                checkedWed={raid1.includes(person.name)}
                checkedSun={raid2.includes(person.name)}
                onChangeWed={e => {
                  if (e.target.checked) {
                    setRaid1([...raid1, person.name]);
                  } else {
                    setRaid1(raid1.filter(name => name !== person.name));
                  }
                }}
                onChangeSun={e => {
                  if (e.target.checked) {
                    setRaid2([...raid2, person.name]);
                  } else {
                    setRaid2(raid2.filter(name => name !== person.name));
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <ItemCaracterSplitLayout />
      </div>
    </div>
  );
};

const ItemCaracterSplitLayout = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [item, setItem] = useState<string>('');
  const [characterLeft, setCharacterLeft] = useState<string>('');
  const [characterRight, setCharacterRight] = useState<string>('');

  const currentICS = localStorage.getItem(localStorageICSKey);
  let currentICSparse = [];
  if (currentICS) {
    try {
      currentICSparse = JSON.parse(currentICS);
    } catch (e) {
      localStorage.removeItem(localStorageICSKey);
    }
  }

  const onSave = () => {
    setIsAdd(false);
    setItem('');
    setCharacterLeft('');
    setCharacterRight('');

    const current = localStorage.getItem(localStorageICSKey);
    if (current) {
      try {
        const currentJson = JSON.parse(current) as itemCharacterSplit[];
        localStorage.setItem(
          localStorageICSKey,
          JSON.stringify([...currentJson, { item: item, characterLeft, characterRight }]),
        );
      } catch (e) {
        localStorage.setItem(localStorageICSKey, JSON.stringify([{ item: item, characterLeft, characterRight }]));
      }
    } else {
      localStorage.setItem(localStorageICSKey, JSON.stringify([{ item: item, characterLeft, characterRight }]));
    }
  };

  return (
    <div className="w-1/3 bg-red-100">
      {isAdd ? (
        <div>
          <input
            type="text"
            placeholder="Item name"
            className="border p-2 w-60 mr-2"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
          <input
            type="text"
            placeholder="Characters left"
            className="border p-2 w-60 mr-2"
            value={characterLeft}
            onChange={e => setCharacterLeft(e.target.value)}
          />
          <input
            type="text"
            placeholder="Characters right"
            className="border p-2 w-60 mr-2"
            value={characterRight}
            onChange={e => setCharacterRight(e.target.value)}
          />
          <button className="block border font-bold py-2 px-4 rounded h-10" onClick={onSave}>
            Save
          </button>
        </div>
      ) : (
        <div>
          {currentICSparse.map((ics: itemCharacterSplit) => (
            <div className="border text-sm mb-2 flex w-60 mr-2 justify-around" key={ics.item}>
              <p className="capitalize p-2 w-20">{ics.item}</p>
              <p className="capitalize p-2 w-20">{ics.characterLeft}</p>
              <p className="capitalize p-2 w-20">{ics.characterRight}</p>
            </div>
          ))}
          <button
            className="block border font-bold py-2 px-4 rounded h-10"
            onClick={() => {
              setIsAdd(true);
            }}
          >
            Add another item
          </button>
        </div>
      )}
    </div>
  );
};

interface PersonProps {
  person: Person;
  checkedWed: boolean;
  checkedSun: boolean;
  onChangeWed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSun: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonLayout = ({ person, checkedSun, checkedWed, onChangeSun, onChangeWed }: PersonProps) => {
  const nameStyle = `capitalize p-2 w-20 ${characterColorsText[person.mainClassName]}`;
  return (
    <div className="border text-sm mb-2 flex w-60 mr-2 justify-around">
      <p className={nameStyle}>{person.name}</p>
      <label htmlFor={`raid1${person.name}`} className="mr-1 p-2 whitespace-nowrap">
        <input
          type="checkbox"
          id={`raid1${person.name}`}
          name={`raid1${person.name}`}
          className="mr-1"
          checked={checkedWed}
          onChange={onChangeWed}
        />
        Wed
      </label>

      <label htmlFor={`raid2${person.name}`} className="mr-1 p-2 whitespace-nowrap">
        <input
          type="checkbox"
          id={`raid2${person.name}`}
          name={`raid2${person.name}`}
          className="mr-1"
          checked={checkedSun}
          onChange={onChangeSun}
        />
        Sun
      </label>
    </div>
  );
};
