import { useAnonymousUser } from '@/hooks';
import { TextField, WoodButton } from '@/components/atoms';
import { WoodModal } from '@/components/organisms';
import { Navigate } from 'react-router';
import modalBg from '@imgs/home/signup__bg.png';
import styled from 'styled-components';

type Props = {}

const AnonymousSignUp: React.FC<Props> = ({ }) => {
  const { name, redirect, setName, createAnonymousUser } = useAnonymousUser();

  if (redirect) {
    return <Navigate to="/mypage" />
  }

  return (
    <Inner>
      <WoodModal
        bg={modalBg}
        heading="ユーザー設定"
        style={{
          height: 543,
          padding: '199px 0 112px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          style={{ width: 472, marginBottom: 40 }}
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }}
          placeholder="名前を入力してください"
        />
        <WoodButton value="決定" onClick={createAnonymousUser} />
      </WoodModal>
    </Inner>
  )
}

const Inner = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    backdrop-filter: blur(10px);
  }
`;

export default AnonymousSignUp;