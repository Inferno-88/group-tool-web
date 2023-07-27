import { useState } from 'react';
import { mockedPersons } from 'src/mocks/mockedSplits';
import { Person, RaidName } from 'src/types';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { generate } from './generate';
import { ItemCharacterSplitLayout } from './ItemCharacterSplitLayout';
import { PersonLayout } from './PersonLayout';
import styles from './pp.module.css';
import { Button } from 'src/components/Button';

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
    <div className={`relative bg-[#003366] ${styles.lich}`}>
      <div className="text-center h-screen flex justify-end lg:justify-center min-w-[875px] max-w-[1600px] mx-auto">
        <div className={`w-[50rem] py-3 pl-1 lg:pl-[3%] pr-4 lg:pr-11 xl:pr-20 flex flex-col z-10 ${styles.darkCover}`}>
          <div className="flex">
            <div className="">
              <h1 className="mb-3 text-xl font-bold text-left ml-10 text-blue-50">1. Choose available persons</h1>
              <div className="flex mb-3 ml-8">
                <Button disabled={loading} className="mr-4" onClick={() => selectAll()}>
                  Select All
                </Button>
                <Button disabled={loading} onClick={() => clearAll()}>
                  Clear All
                </Button>
              </div>
            </div>
            <div className="text-left ml-auto w-44">
              <h2 className="mb-3 text-xl font-bold text-blue-50">2. Choose raid</h2>
              <select
                value={raidName}
                onChange={e => {
                  setRaidName(e.target.value as RaidName);
                }}
                className="bg-blue-50 border border-gray-300 text-blue-950 w-44 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 mr-80"
              >
                {Object.values(RaidName).map(raidNameOption => (
                  <option value={raidNameOption} key={raidNameOption}>
                    {raidNameOption}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {persons.length > 0 ? (
            <div className="flex flex-col flex-wrap overflow-auto h-full">
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
            <div className="text-l font-bold">Loading...</div>
          )}
        </div>

        <div className="w-[30rem] p-3 flex flex-col bg-blue-50">
          <h2 className="mb-3 text-xl font-bold text-[#003366]">3. Split characters by items</h2>
          <ItemCharacterSplitLayout raidName={raidName} />
          <div className="mt-auto ml-auto p-8 pr-0">
            <Button
              primary
              disabled={loading}
              loading={loading}
              className="h-14 w-52"
              onClick={async () => {
                setLoading(true);
                const splitID = await generate({ raid1, raid2 }, raidName);
                setLoading(false);
                navigate(`/split/${splitID}`);
              }}
            >
              4. Generate!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
