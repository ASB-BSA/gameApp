import { useState } from 'react';
import { useSetRecoilState, useRecoilValue, SetterOrUpdater } from "recoil";
import { userState } from '@/recolis/user';
import { UserType } from '@/types/UserType';
import { componentClassName } from '@/utils';
import { TextField, WoodButton } from '@/components/atoms';
import styles from '@css/module/home.module.scss';

type Props = {
  status: number
}

const AnonymousSignUp: React.FC<Props> = ({ status }) => {
  const [name, setName] = useState<string>('');

  const user = useRecoilValue(userState);
  const setUser: SetterOrUpdater<UserType> = useSetRecoilState(userState);

  /** ダミー */
  const createUser = async () => {
    setUser({
      isSignIn: true,
      id: 1,
      name
    })
  }

  return (
    <div className={componentClassName(styles.signupModal, status === 1 && styles.signupModal_active)}>
      <div className={`${styles.modalHeading}`}>ユーザー設定</div>
      <TextField
        style={{ width: 472, marginBottom: 40 }}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }}
        placeholder="名前を入力してください"
      />
      <WoodButton value="決定" onClick={createUser} />
      <div>
        {user.isSignIn && 'true'}<br />
        {user.name}
      </div>
    </div>

  )
}

export default AnonymousSignUp;