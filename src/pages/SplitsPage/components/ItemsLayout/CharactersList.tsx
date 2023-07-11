import { Character } from 'src/types';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import { useState, Fragment } from 'react';
import { CharacterLayout } from '../CharacterLayout';

export const CharactersList = ({ characters }: { characters: Character[] }) => {
  const [openChars, setOpenChars] = useState(false);

  return (
    <>
      {characters.map((character, index) => (
        <Fragment key={character.name + index}>
          {index < 3 ? (characters.length > 3 && index === 2 && !openChars ? (
            <div className='inline-block whitespace-nowrap'>
              <CharacterLayout character={character} className="inline-block mx-0.5" />
              <button className="inline-flex align-middle" onClick={() => setOpenChars(true)}>
                <BiChevronRight className="w-4 h-4 m-auto" />
              </button>
            </div>
            ) : <CharacterLayout character={character} className="inline-block mx-0.5" />) 
            : null
          }
        </Fragment>
      ))}
      {(characters.length > 3 && openChars) && (
          <>
            {characters.map((character, index) => (
              <Fragment key={character.name + index}>
                {index >= 3 ? (index === characters.length-1 ? ( 
                <div className='inline-block whitespace-nowrap'>
                  <CharacterLayout character={character} className="inline-block mx-0.5" />
                  <button onClick={() => setOpenChars(false)} className="inline-flex align-middle">
                    <BiChevronLeft className="w-4 h-4 m-auto" />
                  </button>
                </div>
                ) : 
                  <CharacterLayout character={character} className="inline-block mx-0.5" />
                ) : null}
              </Fragment>
            ))}
          </>
      )}
    </>
  );
};
