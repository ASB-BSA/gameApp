import { useState } from 'react';
import bg from '@imgs/home/home__bg.jpg';
import logo from '@imgs/home/home__logo.png';
import playButton from '@imgs/home/home__play-button.png';
import styled from 'styled-components';

const Home = () => {
  const [status, setStatus] = useState<number>(0);

  return (
    <Wrapper>
      <Inner status={status}>
        <Logo status={status}><img src={logo} alt="" /></Logo>
        <PlayButton status={status} onClick={() => setStatus(1)} />
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
  }
`;

const Inner = styled.div<{ status: number }>`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    backdrop-filter: blur(10px);
    transition: all 0.3s;
    opacity: ${props => props.status > 0 ? 1 : 0};
  }
`;

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

export default Home;