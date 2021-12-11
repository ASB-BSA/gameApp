import type { CharacterDataType } from '@/types/CharacterDataType';
import { useRecoilState } from 'recoil'
import { characterDataState } from './'
import axios from 'axios';

export const useCharacterData = () => {
  const [characterData, setCharaCterData] = useRecoilState(characterDataState);

  const fetchCharacterData = async () => {
    try {
      const res = await axios.get<CharacterDataType[]>('/character');

      setCharaCterData(res.data);
    } catch (e) {
      alert('キャラクター情報の取得に失敗しましたYo');
    }
  }

  return { fetchCharacterData };
}