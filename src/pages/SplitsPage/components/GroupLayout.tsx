import { Character } from 'src/types';
import { CharacterLayout } from './CharacterLayout';

export const GroupLayout = ({
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
