import {
  Raid,
  Character,
  CharacterClass,
  characterColorsText,
  ItemCharactersMap,
} from "src/types";
import styles from "./raidLayout.module.css";
import { useState } from 'react';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

export const RaidLayout = ({
  raid,
  name,
  onAddorRemove,
}: {
  raid: Raid;
  name: string;
  onAddorRemove: (character: Character, action: 'add' | 'remove') => void;
}) => {
  let mainCount = 0;
  let altCount = 0;
  raid.occupiedCharacters.forEach(character => {
    if (character.main) {
      mainCount++;
    } else {
      altCount++;
    }
  });

  return (
    <div className={'border border-slate-200 rounded shadow-lg shadow-slate-100 w-full' + styles.wrapper}>
      <div className={`${styles.container}`}>
        <h3 className={`font-semibold ${styles.title}`}>
          {name} (main: {mainCount} alts: {altCount} total: {raid.occupiedCharacters.length})
        </h3>
        <GroupLayout
          group={raid.tanks}
          name={'Tanks'}
          className={styles.tanks}
          action={'remove'}
          onAction={onAddorRemove}
        />
        <GroupLayout
          group={raid.healers}
          name={'Healers'}
          className={styles.healers}
          action={'remove'}
          onAction={onAddorRemove}
        />
        <GroupLayout group={raid.dps} name={'Dps'} className={styles.dps} action={'remove'} onAction={onAddorRemove} />
        <GroupLayout
          group={raid.raidAvailableChars}
          name={'Available'}
          className={styles.available}
          action={'add'}
          onAction={onAddorRemove}
          columns
        />
        <div className={styles.items}>
          <ItemsLayout items={raid.itemCharactersMap} />
          <FreeItems freeItems={raid.freeItems} />
        </div>
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
  columns,
}: {
  group: Character[];
  name: string;
  className?: string;
  action?: 'add' | 'remove' | 'none';
  onAction?: (character: Character, action: 'add' | 'remove') => void;
  columns?: boolean;
}) => {
  return (
    <div className={`border border-slate-200 ${className}`}>
      <p className="font-sm font-semibold">{name}</p>
      <div className={columns ? 'columns-2' : ''}>
        {group.map(character => (
          <CharacterLayout key={character.name} character={character} action={action} onAction={onAction} />
        ))}
      </div>
    </div>
  );
};

const CharacterLayout = ({
  character,
  className,
  action = 'none',
  onAction = () => {},
}: {
  character: Character;
  className?: string;
  action?: 'add' | 'remove' | 'none';
  onAction?: (character: Character, action: 'add' | 'remove') => void;
}) => {
  const style = `capitalize px-1 border relative text-sm ${
    characterColorsText[character.className as CharacterClass]
  } ${className}`;

  return (
    <div className={style}>
      <div>{character.name}</div>
      {action !== 'none' && (
        <div
          onClick={e => onAction(character, action)}
          className="bg-zinc-600 text-red-100 border border-black rounded-sm absolute top-0.5 right-1 cursor-pointer h-3 w-3 leading-[8px]"
        >
          {action === 'add' ? '+' : '-'}
        </div>
      )}
    </div>
  );
};

const ItemsLayout = ({ items }: { items: ItemCharactersMap }) => {
  const itemsNames = Object.keys(items);
  const sortedItemsNames = itemsNames.sort((a, b) => items[b].length - items[a].length);

  return (
    <div className={`border border-slate-200 p-2 overflow-auto ${styles.neededItems}`}>
      <p className="font-semibold">Items</p>

      {sortedItemsNames.map(item => (
        <div className="text-left mb-1 text-sm" key={item}>
          <div>
            {item} ({items[item].length}): <CharsForItem characters={items[item]} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CharsForItem = ({ characters }: { characters: Character[] }) => {
  const [openChars, setOpenChars] = useState(false);

  return (
    <>
      {characters.map((character, index) =>
        index < 3 ? <CharacterLayout key={character.name} character={character} className="inline-block mr-1" /> : null,
      )}
      {characters.length > 3 && (
        <>
          {!openChars && (
            <button className="inline-flex align-middle" onClick={() => setOpenChars(true)}>
              <BiChevronRight className="w-4 h-4 m-auto" />
            </button>
          )}
          {openChars && (
            <div>
              {characters.map((character, index) =>
                index >= 3 ? (
                  <CharacterLayout key={character.name} character={character} className="inline-block mr-1" />
                ) : null,
              )}
              <button onClick={() => setOpenChars(false)} className="inline-flex align-middle">
                <BiChevronLeft className="w-4 h-4 m-auto" />
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

const FreeItems = ({ freeItems }: { freeItems: string[] }) => {
  return (
    <div className={`border border-slate-200 p-2 overflow-auto ${styles.freeItems}`}>
      <p className="font-semibold">Free Items</p>
      <div className="columns-2">
        {freeItems.sort().map(item => (
          <div className="text-left mb-1 text-sm" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
