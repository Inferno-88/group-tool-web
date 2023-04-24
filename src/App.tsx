import { MainPage } from "./components/MainPage/MainPage";
import { useState } from "react";
import { Split } from "src/types";
import { mockedSplits } from "src/mocks/mockedSplits";
import { PersonsPage } from "./components/PersonsPage/PersonsPage";

interface AvailablePersons {
  raid1: string[];
  raid2: string[];
}

const getUrl = (available: AvailablePersons) =>
  `${process.env.REACT_APP_URL}/splits/generate?raid1=${available.raid1.join(
    ","
  )}&raid2=${available.raid2.join(",")}`;

function App() {
  const [splits, setSplits] = useState<Split[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = (available: AvailablePersons) => {
    if (process.env.REACT_APP_USE_MOCKS !== "true") {
      setLoading(true);
      fetch(getUrl(available))
        .then((data) => data.json())
        .then((data) => {
          setLoading(false);
          setSplits(data);
        });
    } else {
      // MOCKS
      setSplits(mockedSplits);
    }
  };

  return (
    <div>
      {splits.length > 0 ? (
        <MainPage splits={splits} />
      ) : (
        <PersonsPage generate={generate} loading={loading} />
      )}
    </div>
  );
}

export default App;
