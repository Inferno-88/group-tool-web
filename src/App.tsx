import {SplitsPage} from "./pages/SplitsPage/SplitsPage";
import {useState} from "react";
import {Character, itemCharacterSplit, localStorageICSKey, Split} from 'src/types';
import {mockedSplits} from 'src/mocks/mockedSplits';
import {PersonsPage} from './pages/PersonsPage/PersonsPage';

interface AvailablePersons {
  raid1: string[];
  raid2: string[];
}

const getICS = () => {
  const localICS = localStorage.getItem(localStorageICSKey);
  let localICSparsesd = [];
  if (localICS) {
    try {
      localICSparsesd = JSON.parse(localICS);
    } catch (e) {
      localStorage.removeItem(localStorageICSKey);
    }
  }
  return localICSparsesd.map((ic: itemCharacterSplit) => {
      const newCharLeft = ic.characterLeft
        .toLowerCase()
        .split(',')
        .map((c: string) => c.trim());
      const newCharRight = ic.characterRight
        .toLowerCase()
        .split(',')
        .map((c: string) => c.trim());
      return {
        item: ic.item.toLowerCase(),
        characterLeft: newCharLeft,
        characterRight: newCharRight,
      };
  });
};

function App() {
  const [splits, setSplits] = useState<Split[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = (available: AvailablePersons) => {
    if (process.env.REACT_APP_USE_MOCKS !== 'true') {
      setLoading(true);
      fetch(`${process.env.REACT_APP_URL}/splits/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          raid1: available.raid1,
          raid2: available.raid2,
          itemCharacterSplit: getICS(),
        }),
      })
        .then(data => data.json())
        .then(data => {
          setLoading(false);
          setSplits(data);
        })
        .catch(err => {
          console.log(err);
          alert('Something went wrong! Please try again');
          setLoading(false);
        });
    } else {
      // MOCKS
      setSplits(mockedSplits);
    }
  };

  const onAddorRemove =
    (splitIndex: number) => (raidName: 'raid1' | 'raid2') => (character: Character, action: 'add' | 'remove') => {
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

      if (process.env.REACT_APP_USE_MOCKS !== 'true') {
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
          });
      } else {
        // MOCKS
        console.log('MOCKS');
        setSplits(mockedSplits);
      }
    };

  return (
    <div>
      {splits.length > 0 ? (
        <SplitsPage splits={splits} onAddorRemove={onAddorRemove} />
      ) : (
        <PersonsPage generate={generate} loading={loading} />
      )}
    </div>
  );
}

export default App;
