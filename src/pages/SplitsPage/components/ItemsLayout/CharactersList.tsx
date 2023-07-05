import { Character } from 'src/types';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import { useState } from 'react';
import { CharacterLayout } from '../CharacterLayout';

export const CharactersList = ({ characters }: { characters: Character[] }) => {
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
