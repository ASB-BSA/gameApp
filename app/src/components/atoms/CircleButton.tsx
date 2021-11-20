import styled from 'styled-components';
import { onXX } from '@/types/onXX';

type Props = onXX & {
  icon: string,
  style?: React.CSSProperties
}

const CircleButton: React.FC<Props> = ({ onClick, icon, style }) => {
  return (
    <Wrapper style={style} onClick={onClick}>
      <Inner>
        <Icon>
          <img src={icon} alt="" />
        </Icon>
      </Inner>
      <Label>設定</Label>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  border: 1px solid #3e332c;
  border-radius: 50%;
  background-color: #d2c5a5;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 71px;
  height: 71px;
  border-radius: 50%;
  background-color: #907969;
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%,calc(-50% - 3px));
  color: #fff;
  font-size: 26px;
  line-height: 1;
  text-shadow:
    1px 1px 0 #3e332c, -1px -1px 0 #3e332c,
    -1px 1px 0 #3e332c, 1px -1px 0 #3e332c,
    0px 1px 0 #3e332c,  0 -1px 0 #3e332c,
    -1px 0 0 #3e332c, 1px 0 0 #3e332c;
  white-space: nowrap;
`;

export default CircleButton;