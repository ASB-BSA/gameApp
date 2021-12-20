import type { CharacterDataType } from '@/types/CharacterDataType'
import type { TeamType } from '@/types/TeamType';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { characterDataState } from '@/recolis/charcterData'
import { getCharData } from '@/utils';

const useChar = (currentChar: TeamType) => {
  const [src, setSrc] = useState<string>('');
  const [currentCharData, setCurrentCharData] = useState<CharacterDataType>()
  const characterData = useRecoilValue(characterDataState);

  useEffect(() => {
    const current = getCharData(currentChar.characterId, characterData);
    if (current) {
      setSrc(current.img);
      setCurrentCharData(current);
    }
  }, [currentChar]);

  return { src, currentCharData };
}

export default useChar;