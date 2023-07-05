import { Person, characterColorsText } from 'src/types';

interface PersonProps {
  person: Person;
  checkedWed: boolean;
  checkedSun: boolean;
  onChangeWed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSun: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonLayout = ({ person, checkedSun, checkedWed, onChangeSun, onChangeWed }: PersonProps) => {
  const nameStyle = `capitalize p-2.5 w-1/3 ${characterColorsText[person.mainClassName]}`;
  return (
    <div className="border text-sm mb-2 max-w-sm flex mr-2 ">
      <p className={nameStyle}>{person.name}</p>
      <label htmlFor={`raid1${person.name}`} className="w-1/3 mr-1 p-2 whitespace-nowrap text-green-50">
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

      <label htmlFor={`raid2${person.name}`} className="w-1/3 mr-1 p-2 whitespace-nowrap text-green-50">
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
