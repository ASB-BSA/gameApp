import { useState } from 'react';
import { useUserRecoil } from '@/recolis';
import { componentClassName } from '@/utils';
import { Start, AnonymousSignUp } from '@/components/templates';
import styles from '@css/module/home.module.scss';
import { Redirect } from 'react-router';

const Home = () => {
  const { user } = useUserRecoil();
  const [status, setStatus] = useState<number>(0);
  const [redirect, setRedirect] = useState<boolean>(false);

  const onClickStart = async () => {
    if (user.isSignIn) {
      await new Promise<void>(resolve => {
        setStatus(4);
        setTimeout(resolve, 500);
      })
      setRedirect(true);
    } else {
      setStatus(1)
    }
  }

  if (redirect) return <Redirect to="/mypage" />

  return (
    <div className={styles.wrapper}>
      <div className={componentClassName(styles.inner, status > 0 && styles.inner_active)}>
        <Start onClick={onClickStart} status={status} />
        <AnonymousSignUp status={status} />
      </div>
    </div>
  )
}

export default Home;