import styled from 'styled-components';

type Props = {
  icon: string,
  style?: React.CSSProperties
}

const TypeIcon: React.FC<Props> = ({ icon, style }) => {
  return (
    <Wrapper style={style}>
      <Inner>
        <Icon><img src={icon} alt="" /></Icon>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
  background-color: #f2ebd8;
`;

const Icon = styled.div`
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TypeIcon;