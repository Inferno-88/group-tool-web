import { useState } from 'react';
import { mockedPersons } from 'src/mocks/mockedSplits';
import { Person, RaidName } from 'src/types';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { generate } from './generate';
import { ItemCharacterSplitLayout } from './ItemCharacterSplitLayout';
import { PersonLayout } from './PersonLayout';

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
        <ItemCharacterSplitLayout />
      </div>
    </div>
  );
};
