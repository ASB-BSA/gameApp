import { useState, useEffect } from 'react';
import { useUserRecoil } from '@/recolis';
import { getUser } from '@/utils';

const useAuth = () => {
  const { user, setUser } = useUserRecoil();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      if (checked || user.isSignIn || !isMounted) return;

      try {
        const userJson = await getUser();

        if (userJson) {
          setUser({
            name: userJson.name,
            isSignIn: true,
            id: userJson.ID,
          })
        } else {
          throw new Error()
        }
      } catch (e) {
        console.log('ろぐいんしてくださいいいい');
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
  }, [checked, setUser, user.isSignIn]);

  return { user, checked }
}

export default useAuth;