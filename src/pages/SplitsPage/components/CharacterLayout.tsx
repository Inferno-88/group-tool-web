import { Character, CharacterClass, characterColorsText } from 'src/types';

export const CharacterLayout = ({
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
