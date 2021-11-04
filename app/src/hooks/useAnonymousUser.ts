import { useState } from 'react';
import { useUserRecoil } from '@/recolis';
import { UserJsonType } from '@/types/UserType';
import axios from 'axios';

const useAnonymousUser = () => {
  const { setUser } = useUserRecoil();
  const [name, setName] = useState<string>('');
  const [wait, setWait] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false)

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

      setWait(false);
      setName('');
      setRedirect(true);
    } catch (e) {
      setWait(false);
      console.log(e);
    }
  }

  return { name, redirect, setName, createAnonymousUser };
}

export default useAnonymousUser;