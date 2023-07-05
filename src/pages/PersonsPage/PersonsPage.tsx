import { useEffect, useState } from "react";
import { mockedPersons } from "src/mocks/mockedSplits";
import { itemCharacterSplit, Person, characterColorsText, localStorageICSKey, RaidName } from 'src/types';
import { ReactComponent as DeleteIcon } from 'src/icons/delete.svg';
import { ReactComponent as EditIcon } from 'src/icons/edit.svg';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { generate } from './generate';

export async function loaderOfPersons(): Promise<{ persons: Person[] }> {
  // MOCKS
  if (process.env.REACT_APP_USE_MOCKS === 'true') {
    return { persons: mockedPersons };
  }

  const url = `${process.env.REACT_APP_URL}/persons`;
  const listOfPersons = await fetch(url);
  const result = await listOfPersons.json();
  return { persons: result };
}

export const PersonsPage = () => {
  const { persons } = useLoaderData() as { persons: Person[] };

  const [loading, setLoading] = useState(false);
  const [raid1, setRaid1] = useState<string[]>([]);
  const [raid2, setRaid2] = useState<string[]>([]);
  const [raidName, setRaidName] = useState<RaidName>(RaidName.TOGC);

  const navigate = useNavigate();

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
      <div className="flex mb-7 justify-center">
        <button
          disabled={loading}
          className="block border font-bold py-2 px-4 rounded h-10 mr-4"
          onClick={() => selectAll()}
        >
          Select All
        </button>
        <button
          disabled={loading}
          className="block border font-bold py-2 px-4 rounded h-10 mr-4"
          onClick={() => clearAll()}
        >
          Clear All
        </button>

        <select
          value={raidName}
          onChange={e => {
            setRaidName(e.target.value as RaidName);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 w-44 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2 mr-80"
        >
          {Object.values(RaidName).map(raidNameOption => (
            <option value={raidNameOption} key={raidNameOption}>
              {raidNameOption}
            </option>
          ))}
        </select>

        <button
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-100 text-white font-bold py-2 px-4 rounded h-10 w-44"
          onClick={async () => {
            setLoading(true);
            const splitID = await generate({ raid1, raid2 }, raidName);
            setLoading(false);
            console.log(splitID);
            navigate(`/split/${splitID}`);
          }}
        >
          {loading ? 'Loading...' : 'Generate!'}
        </button>
      </div>
      <div className="flex overflow-auto justify-around">
        {persons.length > 0 ? (
          <div className="w-2/3 flex flex-col flex-wrap content-start overflow-auto">
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
          <p className="w-2/3">Loading...</p>
        )}
        <ItemCaracterSplitLayout />
      </div>
    </div>
  );
};

const ItemCaracterSplitLayout = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [editedNumber, setEditedNumber] = useState<number | null>(null);
  const [item, setItem] = useState<string>('');
  const [characterLeft, setCharacterLeft] = useState<string>('');
  const [characterRight, setCharacterRight] = useState<string>('');

  const [currentICS, setCurrentICS] = useState<itemCharacterSplit[]>([]);

  useEffect(() => {
    const current = localStorage.getItem(localStorageICSKey);
    if (current) {
      try {
        const currentJson = JSON.parse(current) as itemCharacterSplit[];
        setCurrentICS(currentJson);
      } catch (e) {
        localStorage.removeItem(localStorageICSKey);
      }
    }
  }, []);

  const onDelete = (index: number) => {
    if (!currentICS.length) return;

    const newICS = currentICS.filter((ic: itemCharacterSplit, i: number) => i !== index);

    localStorage.setItem(localStorageICSKey, JSON.stringify(newICS));
    setCurrentICS(newICS);
  };

  const onSave = () => {
    setIsAdd(false);

    const newICS =
      editedNumber === null
        ? [...currentICS, { item: item, characterLeft, characterRight }]
        : currentICS.map((ic: itemCharacterSplit, i: number) => {
            if (i === editedNumber) {
              return { item: item, characterLeft, characterRight };
            }
            return ic;
          });

    localStorage.setItem(localStorageICSKey, JSON.stringify(newICS));
    setCurrentICS(newICS);

    setItem('');
    setCharacterLeft('');
    setCharacterRight('');
    setEditedNumber(null);
  };

  const onEdit = (index: number) => {
    const ics = currentICS[index];
    setItem(ics.item);
    setCharacterLeft(ics.characterLeft);
    setCharacterRight(ics.characterRight);
    setIsAdd(true);
    setEditedNumber(index);
  };

  const onCancel = () => {
    setIsAdd(false);
    setItem('');
    setCharacterLeft('');
    setCharacterRight('');
    setEditedNumber(null);
  };

  return (
    <div className="w-1/3 rounded border text-center relative overflow-auto">
      <div className="flex justify-around m-1">
        <h3 className="mx-auto font-semibold mt-2">Item character splits</h3>
        <button
          className="border font-semibold py-1 px-2 rounded h-10 m-auto"
          onClick={() => {
            setIsAdd(true);
          }}
        >
          Add item
        </button>
      </div>
      <div className="text-center">
        {currentICS.map((ics: itemCharacterSplit, index: number) => (
          <div className="border text-sm mb-2 flex justify-around" key={ics.item}>
            <p className="p-2 w-[21%] break-words">{ics.item}</p>
            <p className="p-2 w-[37%] break-words">{ics.characterLeft}</p>
            <p className="p-2 w-[37%] break-words">{ics.characterRight}</p>
            <div className="w-[5%]">
              <div
                onClick={() => onDelete(index)}
                className="w-5 h-5 mt-2 border border-black rounded-sm cursor-pointer "
              >
                <DeleteIcon className="w-4 h-4 m-auto" />
              </div>
              <div
                onClick={() => onEdit(index)}
                className=" w-5 h-5 mt-2 border border-black rounded-sm  cursor-pointer "
              >
                <EditIcon className="w-4 h-4 m-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isAdd && (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-slate-50/40">
          <div className="text-center mt-7 rounded border-2 border-slate-300 top-32 absolute p-2 bg-gray-50 w-full">
            <input
              type="text"
              placeholder="Item name"
              className="border p-2 w-60 mr-2"
              value={item}
              onChange={e => setItem(e.target.value)}
            />
            <div className="flex gap-2 m-3">
              <textarea
                placeholder="Characters left"
                className="border p-2 w-60"
                value={characterLeft}
                onChange={e => setCharacterLeft(e.target.value)}
              />
              <textarea
                placeholder="Characters right"
                className="border p-2 w-60"
                value={characterRight}
                onChange={e => setCharacterRight(e.target.value)}
              />
            </div>
            <div className="flex justify-center gap-2">
              <button className="block border font-bold py-2 px-4 rounded h-10 bg-white" onClick={onCancel}>
                Cancel
              </button>

              <button
                className="block border font-bold py-2 px-4 rounded h-10 bg-blue-500 hover:bg-blue-700 disabled:bg-blue-100"
                onClick={onSave}
                disabled={!item || !characterLeft || !characterRight}
              >
                Save
              </button>
            </div>
          </div>
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
    <div className="border text-sm mb-2 flex w-60 mr-2 justify-aroundz">
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
