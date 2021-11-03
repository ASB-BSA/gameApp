import { useState } from 'react';
import { componentClassName } from '@/utils';
import { Start } from '@/components/templates';
import styles from '@css/module/home.module.scss';

const Home = () => {
  const [status, setStatus] = useState<number>(0);

  return (
    <div className={styles.wrapper}>
      <div className={componentClassName(styles.inner, status > 0 && styles.inner_active)}>
        <Start onClick={() => setStatus(1)} status={status} />
        
      </div>
    </div>
  )
}

export default Home;