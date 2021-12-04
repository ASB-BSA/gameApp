import styled from 'styled-components';

const Wrapper = styled.div.attrs<{ bg?: string }>(props => ({
  style: {
    backgroundImage: `url(${props.bg})`,
  }
})) <{ bg?: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-position: center center;
  background-size: cover;
`

export default Wrapper;