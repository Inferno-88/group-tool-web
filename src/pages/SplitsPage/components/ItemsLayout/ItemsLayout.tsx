import { ItemCharactersMap } from 'src/types';
import styles from '../RaidLayout/raidLayout.module.css';
import { CharactersList } from './CharactersList';

export const ItemsLayout = ({ items }: { items: ItemCharactersMap }) => {
  const itemsNames = Object.keys(items);
  const sortedItemsNames = itemsNames.sort((a, b) => items[b].length - items[a].length);

  return (
    <div className={`border border-slate-200 p-2 overflow-auto ${styles.neededItems}`}>
      <p className="font-semibold">Items</p>

      {sortedItemsNames.map(item => (
        <div className="text-left mb-1 text-sm" key={item}>
          <div>
            {item} ({items[item].length}): <CharactersList characters={items[item]} />
          </div>
        </div>
      ))}
    </div>
  );
};
