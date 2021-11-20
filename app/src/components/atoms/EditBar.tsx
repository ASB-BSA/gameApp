import styled from 'styled-components';
import { onXX } from '@/types/onXX';

type Props = onXX & {
  name: string,
  value: number,
  icon: string,
}

const EditBar = () => {
  return (
    <Wrapper>
      <Range type="range" />
    </Wrapper>
  )
}

const Wrapper = styled.li`
  height: 55px;
  background-color: #d1a886;
  font-size: 26px;
  padding: 0 20px 0 36px;
`

const Range = styled.input`
  width: 300px;
  background-color: #d2c5a5;
  &::before {
  
  }
`;

export default EditBar;