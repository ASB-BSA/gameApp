import type { CharacterDataType } from '@/types/CharacterDataType';
import { atom } from 'recoil';

export const characterDataState = atom<CharacterDataType[]>({
  key: 'charcterData',
  default: []
});