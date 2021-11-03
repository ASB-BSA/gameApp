import { atom } from 'recoil';
import { UserType } from '@/types/UserType';

export const userState = atom<UserType>({
  key: 'user',
  default: {
    isSignIn: false,
    name: '',
    id: 0,
  }
});