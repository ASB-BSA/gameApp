import styled from 'styled-components';
import { useState } from 'react';
import { EditBar } from '@/components/atoms';

type Props = {

}

type Params = {
  params: {
    [key: string]: {
      label: string,
      value: number,
      icon: string,
    }
  }
}

const SettingModal = () => {
  const [running, setRunning] = useState(false);
  const [paramPoints, setParamPoints] = useState<{
    total: number,
    params: {
      [key: string]: {
        label: string,
        value: number,
        icon: string,
      }
    }
  }>({
    total: 10000,
    params: {
      hp: {
        label: 'HP',
        value: 1000,
        icon: '',
      },
      attack: {
        label: '攻撃',
        value: 100,
        icon: '',
      },
      defence: {
        label: '防御',
        value: 100,
        icon: '',
      },
      avoidance: {
        label: '回避',
        value: 100,
        icon: '',
      },
      agility: {
        label: '素早さ',
        value: 100,
        icon: '',
      },
      sp: {
        label: '運',
        value: 100,
        icon: '',
      }
    }
  });

  const onChangeSetParams = async (key: string, value: number) => {
  }

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
              <div>{paramPoints.total}</div>
            </Points>
            <EditBars>
              {(Object.keys(paramPoints.params) as (keyof Params)[]).map((key) => (
                <EditBar
                  key={key}
                  value={paramPoints.params[key].value}
                  name={paramPoints.params[key].label}
                  style={{ marginBottom: 8 }}
                  onFocus={(e: React.ChangeEvent<HTMLInputElement>) => onChangeSetParams(key, Number(e.target.value))}
                />
              ))}
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
  padding: 0 30px;
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
  margin-bottom: 16px;
`;

const EditBars = styled.ul`
  
`;

export default SettingModal;