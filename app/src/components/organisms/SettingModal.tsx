import styled from 'styled-components';
import { useState } from 'react';
import { EditBar } from '@/components/atoms';

type Props = {

}

const SettingModal = () => {
  const [points, setPoints] = useState<number>(100);

  return (
    <Wrapper>
      <Inner>
        <Header>
          <Heading>キャラクター設定</Heading>
        </Header>
        <Body>
          <EditForm>
            <Points>
              <div>残り</div>
              <div>100</div>
            </Points>
            <EditBars>
              <EditBar />
            </EditBars>
          </EditForm>
        </Body>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.24);
  padding: 24px 14px;
  z-index: 999999999;
`;

const Header = styled.header`
  height: 119px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #8e6441;
`;

const Heading = styled.div`
  font-size: 40px;
  color: #fff;
`;

const Inner = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: rgba(233, 231, 231, 0.95);
`;

const Body = styled.div`
`;

const EditForm = styled.div`

`;

const Points = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 48px;
  background-color: #d1a886;
  padding: 0 24px;
`;

const EditBars = styled.ul`
`;

export default SettingModal;