import type { UserJsonType } from '@/types/UserType';
import { useState } from 'react';
import { useUserRecoil } from '@/recolis';
import { useCharacterData } from '@/recolis/charcterData/handler';
import axios from 'axios';

const useAnonymousUser = () => {
  const { setUser } = useUserRecoil();
  const { fetchCharacterData } = useCharacterData();
  const [name, setName] = useState<string>('');
  const [wait, setWait] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  const createAnonymousUser = async () => {
    if (wait || !name) return;

    try {
      setWait(true);
      const res = await axios.post<UserJsonType>('/user', { name });

      setUser({
        isSignIn: true,
        id: res.data.ID,
        name: res.data.name,
        teams: res.data.Teams.teams
      })

      await fetchCharacterData();

      setWait(false);
      setName('');
      setRedirect(true);
    } catch (e) {
      setWait(false);
      console.log('error desuYO');
    }
  }

  return { name, redirect, setName, createAnonymousUser };
}

export default useAnonymousUser;