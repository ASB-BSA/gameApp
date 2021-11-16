import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '@imgs/home/start__logo.png';
import playButton from '@imgs/home/start__play-button.png';
import { getUser } from '@/utils';

type Props = {}

const Start: React.FC<Props> = () => {
  const navigate = useNavigate();

  const onClickNavigate = async () => {
    const user = await getUser();
    user ? navigate('/mypage') : navigate('/signup');
  }

  return (
    <>
      <Logo>
        <img src={logo} alt="boomin ファイターズ" />
      </Logo>
      <PlayButton onClick={onClickNavigate}>
        <img src={playButton} alt="play" />
      </PlayButton>
    </>
  )
}

const Logo = styled.div`
  position: absolute;
  top: 347px;
  left: 50%;
  transform: translateX(-50%);
  width: 637px;
  transition: all 0.3s;
  transition-timing-function: ease-in-out;
  opacity: 1;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 641px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s;
  transition-timing-function: ease-in-out;
  width: 427px;
  height: 272px;
  background-size: cover;
  background-position: center;
  background-image: url("#{$imgPath}/home/start__play-button.png");
`

export default Start;