import logo from '@imgs/home/home__logo.png';
import playButton from '@imgs/home/home__play-button.png';
import styled from 'styled-components';

type Props = {
  status: number,
  onClick?: any;
}

const Start: React.FC<Props> = ({ status, onClick }) => {
  return (
    <>
      <Logo status={status}><img src={logo} alt="" /></Logo>
      <PlayButton status={status} onClick={onClick} />
    </>
  )
}

const Logo = styled.h1<{ status: number }>`
  position: absolute;
  top: ${props => props.status > 0 ? '-100%' : '347px'};
  left: 50%;
  transform: translateX(-50%);
  width: 637px;
  transition: all 0.3s;
  transition-timing-function: ease-in-out;
  opacity: ${props => props.status > 0 ? 0 : 1};
`;

const PlayButton = styled.div<{ status: number }>`
  position: absolute;
  top: ${props => props.status > 0 ? '100%' : '641px'};
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s;
  transition-timing-function: ease-in-out;
  width: 427px;
  height: 272px;
  background-image: url(${playButton});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.status > 0 ? 0 : 1};
`

export default Start;