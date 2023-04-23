import {
  Raid,
  Character,
  CharacterClass,
  characterColorsText,
  ItemCharactersMap,
} from "src/types";
import styles from "src/components/RaidLayout/raidLayout.module.css";

export const RaidLayout = ({ raid, name }: { raid: Raid; name: string }) => {
  return (
    <div className="border border-slate-200 rounded shadow-lg shadow-slate-100 w-full">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className={`${styles.container}`}>
        <GroupLayout
          group={raid.tanks}
          name={"Tanks"}
          className={styles.tanks}
        />
        <GroupLayout
          group={raid.healers}
          name={"Healers"}
          className={styles.healers}
        />
        <GroupLayout group={raid.dps} name={"Dps"} className={styles.dps} />
        <GroupLayout
          group={raid.raidAvailableChars}
          name={"Available"}
          className={styles.available}
        />
        <ItemsLayout items={raid.itemCharactersMap} />
      </div>
    </div>
  );
};

const GroupLayout = ({
  group,
  name,
  className,
}: {
  group: Character[];
  name: string;
  className?: string;
}) => {
  return (
    <div className={`border border-slate-200 ${className}`}>
      <p className="font-semibold">{name}</p>
      {group.map((character) => (
        <CharacterLayout key={character.name} character={character} />
      ))}
    </div>
  );
};

const CharacterLayout = ({
  character,
  className,
}: {
  character: Character;
  className?: string;
}) => {
  const style = `capitalize px-1 border ${
    characterColorsText[character.className as CharacterClass]
  } ${className}`;

  return <div className={style}>{character.name}</div>;
};

const ItemsLayout = ({ items }: { items: ItemCharactersMap }) => {
  return (
    <div className={`border border-slate-200 p-2 ${styles.items}`}>
      <p className="font-semibold">Items</p>

      {Object.keys(items).map((item) => (
        <div className="text-left mb-1 text-sm" key={item}>
          <div>
            {item} ({items[item].length}):{" "}
            {items[item].map((character) => (
              <CharacterLayout
                key={character.name}
                character={character}
                className="inline-block mr-1"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
