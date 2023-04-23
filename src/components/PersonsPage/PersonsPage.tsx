import { useEffect, useState } from "react";
import { mockedPersons } from "src/mocks/mockedSplits";
import { Person } from "src/types";

interface Props {
  generate: (available: AvailablePersons) => void;
}

interface AvailablePersons {
  raid1: string[];
  raid2: string[];
}

export const PersonsPage = ({ generate }: Props) => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [raid1, setRaid1] = useState<string[]>([]);
  const [raid2, setRaid2] = useState<string[]>([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_URL}/persons`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setPersons(data);
      });

    // MOCKS
    //setPersons(mockedPersons);
  }, []);

  return (
    <div className="text-center p-5">
      <h1 className="mb-4 text-3xl font-bold">Choose available persons</h1>
      <div className="flex mb-7 justify-center">
        <div className="border w-1/3 p-3 mr-6 capitalize h-52">
          {raid1.join(", ")}
        </div>
        <div className="border w-1/3 p-3 mr-6 capitalize h-52">
          {raid2.join(", ")}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
          onClick={() => generate({ raid1, raid2 })}
        >
          Generate!
        </button>
      </div>
      {persons.length > 0 ? (
        <div className="flex flex-wrap">
          {persons.map((person) => (
            <div className="border mb-2 gap-1 w-96 flex mr-2" key={person.name}>
              <p className="capitalize p-2.5 w-1/4">{person.name}</p>
              <label htmlFor={`raid1${person.name}`} className="mr-2 p-2.5">
                <input
                  type="checkbox"
                  id={`raid1${person.name}`}
                  name={`raid1${person.name}`}
                  value={person.name}
                  className="mr-2"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRaid1([...raid1, e.target.value]);
                    } else {
                      setRaid1(raid1.filter((name) => name !== e.target.value));
                    }
                  }}
                />
                Wednesday
              </label>

              <label htmlFor={`raid2${person.name}`} className="mr-2 p-2.5">
                <input
                  type="checkbox"
                  id={`raid2${person.name}`}
                  name={`raid2${person.name}`}
                  value={person.name}
                  className="mr-2"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRaid2([...raid2, e.target.value]);
                    } else {
                      setRaid2(raid2.filter((name) => name !== e.target.value));
                    }
                  }}
                />
                Sunday
              </label>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};