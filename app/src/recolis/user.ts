import { atom } from 'recoil';
import { UserType } from '@/types/UserType';
import { useSetRecoilState, useRecoilValue, SetterOrUpdater } from "recoil";

export const userState = atom<UserType>({
  key: 'user',
  default: {
    isSignIn: false,
    name: '',
    id: 0,
  }
});

const useUserRecoil = () => {
  const user = useRecoilValue(userState);
  const setUser: SetterOrUpdater<UserType> = useSetRecoilState(userState);

  return { user, setUser };
}

export default useUserRecoil;