import { useState } from 'react';
import { useSetRecoilState, SetterOrUpdater } from "recoil";
import { userState } from '@/recolis/user';
import { UserType, UserJsonType } from '@/types/UserType';
import axios from 'axios';

const useAnonymousUser = () => {
  const [name, setName] = useState<string>('');
  const [wait, setWait] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false)

  const setUser: SetterOrUpdater<UserType> = useSetRecoilState(userState);

  const createAnonymousUser = async () => {
    if (wait || !name) return;

    try {
      setWait(true);
      const res = await axios.post<UserJsonType>('/user', { name });

      if (!(res.status >= 200 || res.status <= 299)) throw new Error('errorですよ！');

      setUser({
        isSignIn: true,
        id: res.data.ID,
        name: res.data.name,
      })

      setRedirect(true);
    } catch (e) {
      console.log(e);
    } finally {
      setWait(false);
      setName('');
    }
  }

  return { name, redirect, setName, createAnonymousUser };
}

export default useAnonymousUser;