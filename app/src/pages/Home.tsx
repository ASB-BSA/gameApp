import { useState } from 'react';
import { componentClassName } from '@/utils';
import { TextField, WoodButton } from '@/components/atoms';
import { Start } from '@/components/templates';
import styles from '@css/module/home.module.scss';

const Home = () => {
  const [status, setStatus] = useState<number>(0);
  const [name, setName] = useState<string>('');

  const createUser = async () => {

  }

  return (
    <div className={styles.wrapper}>
      <div className={componentClassName(styles.inner, status > 0 && styles.inner_active)}>
        <Start onClick={() => setStatus(1)} status={status} />
        <div className={componentClassName(styles.signupModal, status === 1 && styles.signupModal_active)}>
          <div className={`${styles.modalHeading}`}>ユーザー設定</div>
          <TextField
            style={{ width: 472, marginBottom: 40 }}
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }}
            placeholder="名前を入力してください"
          />
          <WoodButton value="決定" onClick={createUser} />
        </div>
      </div>
    </div>
  )
}

export default Home;