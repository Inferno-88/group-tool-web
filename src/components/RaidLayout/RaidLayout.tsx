import {
  Raid,
  Character,
  CharacterClass,
  characterColorsText,
  ItemCharactersMap,
} from "src/types";
import styles from "src/components/RaidLayout/raidLayout.module.css";

export const RaidLayout = ({
  raid,
  name,
  onAddorRemove,
}: {
  raid: Raid;
  name: string;
  onAddorRemove: (character: Character, action: "add" | "remove") => void;
}) => {
  console.log(raid);

  return (
    <div className="border border-slate-200 rounded shadow-lg shadow-slate-100 w-full">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className={`${styles.container}`}>
        <GroupLayout
          group={raid.tanks}
          name={"Tanks"}
          className={styles.tanks}
          action={"remove"}
          onAction={onAddorRemove}
        />
        <GroupLayout
          group={raid.healers}
          name={"Healers"}
          className={styles.healers}
          action={"remove"}
          onAction={onAddorRemove}
        />
        <GroupLayout
          group={raid.dps}
          name={"Dps"}
          className={styles.dps}
          action={"remove"}
          onAction={onAddorRemove}
        />
        <GroupLayout
          group={raid.raidAvailableChars}
          name={"Available"}
          className={styles.available}
          action={"add"}
          onAction={onAddorRemove}
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
  action,
  onAction,
}: {
  group: Character[];
  name: string;
  className?: string;
  action?: "add" | "remove" | "none";
  onAction?: (character: Character, action: "add" | "remove") => void;
}) => {
  return (
    <div className={`border border-slate-200 ${className}`}>
      <p className="font-semibold">{name}</p>
      {group.map((character) => (
        <CharacterLayout
          key={character.name}
          character={character}
          action={action}
          onAction={onAction}
        />
      ))}
    </div>
  );
};

const CharacterLayout = ({
  character,
  className,
  action = "none",
  onAction = () => {},
}: {
  character: Character;
  className?: string;
  action?: "add" | "remove" | "none";
  onAction?: (character: Character, action: "add" | "remove") => void;
}) => {
  const style = `capitalize px-1 border relative ${
    characterColorsText[character.className as CharacterClass]
  } ${className}`;

  return (
    <div className={style}>
      <div>{character.name}</div>
      {action !== "none" && (
        <div
          onClick={(e) => onAction(character, action)}
          className=" bg-zinc-600 text-red-100 border border-black rounded-sm h-4 w-4 absolute top-1 right-1 leading-3 cursor-pointer"
        >
          {action === "add" ? "+" : "-"}
        </div>
      )}
    </div>
  );
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
