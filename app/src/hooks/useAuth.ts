import { useState, useEffect } from 'react';
import { useUserRecoil } from '@/recolis';
import { useCharacterData } from '@/recolis/charcterData/handler';
import { getUser } from '@/utils';

const useAuth = () => {
  const { user, setUser } = useUserRecoil();
  const [checked, setChecked] = useState(false);
  const { fetchCharacterData } = useCharacterData();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      if (checked || !isMounted) return;

      try {
        if (!user.isSignIn) {
          const userJson = await getUser();

          if (userJson) {
            setUser({
              name: userJson.name,
              isSignIn: true,
              id: userJson.ID,
            })

            await fetchCharacterData();
          } else {
            throw new Error('ろぐいんしてくださいいいい')
          }
        }

      } catch (e) {
        console.log(e);
        setUser({
          name: '',
          isSignIn: false,
          id: 0
        });
      } finally {
        setChecked(true);
      }
    })();

    return () => { isMounted = false };
  }, []);

  return { user, checked }
}

export default useAuth;