import { ItemCharactersMap, Character } from 'src/types';
import styles from '../RaidLayout/raidLayout.module.css';
import { CharactersList } from './CharactersList';
import { useState } from 'react';

export const ItemsLayout = ({ items }: { items: ItemCharactersMap }) => {
  const itemsNames = Object.keys(items);
  const sortedItemsNames = itemsNames.sort((a, b) => items[b].length - items[a].length);

  return (
    <div className={`border border-slate-200 p-2 overflow-auto ${styles.neededItems}`}>
      <p className="font-semibold">Items</p>

      {sortedItemsNames.map(item => (
        <div className="text-left mb-px text-sm" key={item}>
          {getItemName(item, items[item])}
          <span className='text-[12px] align-super'>{items[item].length}</span>: 
          <CharactersList characters={items[item]} />
        </div>
      ))}
    </div>
  );
};

function getItemName(name: string, characters: Character[]) {
  return isTooLong(name, characters) ? <ShortName name={name} />: name;
}

function isTooLong(name: string, characters: Character[]) {
  const length = name.length + characters.reduce((acc, curr, currIndex) => currIndex < 3 ? acc + curr.name.length : acc, 0);
  return length > 54;
}

function getShortItem (name:string) {
  const secWords = ['of', 'the', 'with', 'and'];
  return  name
    .split(' ')
    .map((part) => {
      if (secWords.includes(part)) {
        return part[0].toLowerCase();
      }
      return part[0].toUpperCase();
    })
    .join('');
}

const ShortName = ({ name }: { name: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className='cursor-pointer border-dashed border-b border-slate-400' onClick={() => setIsOpen(prevState => !prevState)}>
      {isOpen ? name : getShortItem(name)}
    </span>
  );
}
