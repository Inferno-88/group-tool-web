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
  `http://192.168.178.19:8080/splits/generate?raid1=${available.raid1.join(
    ","
  )}&raid2=${available.raid2.join(",")}`;

const url: string =
  "http://192.168.178.19:8080/splits/generate?raid1=dave,paco,mist,zul,frostyboy,mayv,kelthal,hallheim,fiachna,bullette,doggle,deadly,aryl,tj,nurgl,barrious,bride,sala,ethupan,koobo,cotolento,edenian,jj,kondo,swerved,emipian,dauran,jeyp,khaya,nagosa,haumea&raid2=dave,paco,mist,zul,frostyboy,mayv,kelthal,hallheim,bullette,fiachna,deadly,tj,aryl,barrious,bride,nurgl,sala,ethupan,koobo,edenian,cotolento,jj,kondo,swerved,emipian,dauran,jeyp,haumea,khaya,nagosa";
//"http://192.168.178.19:8080/splits/generate?raid1=dave,paco,tj,khaya,aryl&raid2=dave,jj,paco,bulettle,jeyp";

function App() {
  const [splits, setSplits] = useState<Split[]>([]);

  const generate = (available: AvailablePersons) => {
    fetch(getUrl(available))
      .then((data) => data.json())
      .then((data) => {
        setSplits(data);
      });

    // MOCKS
    //setSplits(mockedSplits);
  };

  return (
    <div>
      {splits.length > 0 ? (
        <MainPage splits={splits} />
      ) : (
        <PersonsPage generate={generate} />
      )}
    </div>
  );
}

export default App;
