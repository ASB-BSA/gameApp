import styled from 'styled-components';
import { Outlet } from 'react-router-dom'
import bg from '@imgs/common/bg_woods.jpg';

const Home: React.FC = (() => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
});

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  &::before {
    content: "";
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



export default Home;