import styles from './RaidLayout/raidLayout.module.css';

export const FreeItems = ({ freeItems }: { freeItems: string[] }) => {
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
