import { useState, useEffect } from 'react';
import { useSetRecoilState, useRecoilValue, SetterOrUpdater } from "recoil";
import { userState } from '@/recolis/user';
import { UserType } from '@/types/UserType';
import { getUser } from '@/utils';

const useAuth = () => {
  const user = useRecoilValue(userState);
  const setUser: SetterOrUpdater<UserType> = useSetRecoilState(userState);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (user.isSignIn) setChecked(true);

        const userJson = await getUser();

        if (userJson) {
          setUser({
            name: userJson.name,
            isSignIn: true,
            id: userJson.ID,
          })
        } else {
          throw new Error('')
        }
      } catch (e) {
        console.log('ろぐいんしてください');
        setUser({
          name: '',
          isSignIn: false,
          id: 0
        });
      } finally {
        setChecked(true);
      }
    })();
  }, []);

  return { user, checked }
}

export default useAuth;