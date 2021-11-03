import { useAnonymousUser } from '@/hooks';
import { componentClassName } from '@/utils';
import { TextField, WoodButton } from '@/components/atoms';
import styles from '@css/module/home.module.scss';
import { Redirect } from 'react-router';

type Props = {
  status: number
}

const AnonymousSignUp: React.FC<Props> = ({ status }) => {
  const { name, redirect, setName, createAnonymousUser } = useAnonymousUser();

  if(redirect) {
    return <Redirect to="mypage" />
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
      <WoodButton value="決定" onClick={createAnonymousUser} />
    </div>
  )
}

export default AnonymousSignUp;