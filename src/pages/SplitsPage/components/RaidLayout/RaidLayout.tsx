import { Raid, Character } from 'src/types';
import styles from './raidLayout.module.css';

import { FreeItems } from '../FreeItems';
import { GroupLayout } from '../GroupLayout';
import { ItemsLayout } from '../ItemsLayout/ItemsLayout';

export const RaidLayout = ({
  raid,
  name,
  onAddorRemove,
}: {
  raid: Raid;
  name: string;
  onAddorRemove: (character: Character, action: 'add' | 'remove') => void;
}) => {
  const { mainCount, altCount } = raid.occupiedCharacters.reduce(
    (acc, character) => {
      if (character.main) {
        acc.mainCount++;
      } else {
        acc.altCount++;
      }
      return acc;
    },
    { mainCount: 0, altCount: 0 },
  );

  return (
    <div className={'w-full border border-slate-200 rounded shadow-lg shadow-slate-100 ' + styles.wrapper}>
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
