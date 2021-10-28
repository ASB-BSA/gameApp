import { useState } from 'react';
import bg from '@imgs/home/home__bg.jpg';
import logo from '@imgs/home/home__logo.png';
import playButton from '@imgs/home/home__play-button.png';
import styled from 'styled-components';

const Home = () => {
  const [status, setStatus] = useState<number>(0);

  console.log('render');

  return (
    <Wrapper>
      <Inner status={status}>
        <Logo><img src={logo} alt="" /></Logo>
        <PlayButton onClick={() => setStatus(1)} />
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

const Logo = styled.h1`
  position: absolute;
  top: 347px;
  left: 50%;
  transform: translateX(-50%);
  width: 637px;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 641px;
  left: 50%;
  transform: translateX(-50%);
  width: 427px;
  height: 272px;
  background-image: url(${playButton});
  background-size: cover;
  background-position: center;
`

export default Home;