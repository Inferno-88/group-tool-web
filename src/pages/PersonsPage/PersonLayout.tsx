import { Person, characterColorsText } from 'src/types';

interface PersonProps {
  person: Person;
  checkedWed: boolean;
  checkedSun: boolean;
  onChangeWed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSun: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonLayout = ({ person, checkedSun, checkedWed, onChangeSun, onChangeWed }: PersonProps) => {
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
