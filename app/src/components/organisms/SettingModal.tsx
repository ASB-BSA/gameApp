import styled from 'styled-components';
import { useState } from 'react';
import { EditBar } from '@/components/atoms';
import rightArrow from '@imgs/team/right-arrow.png';

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
  const [isDepletion, setIsDepletion] = useState(false);
  const [paramPoints, setParamPoints] = useState<{
    total: number,
    params: {
      [key: string]: {
        label: string,
        value: number,
        icon: string,
        isMouseUp: boolean,
      }
    }
  }>({
    total: 100,
    params: {
      hp: {
        label: 'HP',
        value: 20,
        icon: '',
        isMouseUp: false,
      },
      attack: {
        label: '攻撃',
        value: 20,
        icon: '',
        isMouseUp: false,
      },
      defence: {
        label: '防御',
        value: 20,
        icon: '',
        isMouseUp: false,
      },
      avoidance: {
        label: '回避',
        value: 20,
        icon: '',
        isMouseUp: false,
      },
      agility: {
        label: '素早さ',
        value: 20,
        icon: '',
        isMouseUp: false,
      },
      sp: {
        label: '運',
        value: 20,
        icon: '',
        isMouseUp: false,
      }
    }
  });

  const setIsMouseUp = (key: string) => {
    const params = paramPoints.params;

    params[key].isMouseUp = true;

    Object.keys(params).forEach((paramKey) => {
      if (paramKey !== key) {
        params[paramKey].isMouseUp = false;
      }
    })

    setParamPoints({
      ...paramPoints,
      params: {
        ...paramPoints.params,
        ...params
      }
    })
  }

  const onChangeSetParams = async (key: string, value: number) => {
    const params = { ...paramPoints.params };
    const newTotal = params[key].value - value + paramPoints.total;

    if (newTotal > 0) {
      params[key].value = value;

      setParamPoints({
        total: newTotal,
        params: {
          ...paramPoints.params,
          ...params
        }
      })

      setIsDepletion(false);
    } else {
      if (!isDepletion) {
        params[key].value = params[key].value + paramPoints.total

        setParamPoints({
          total: 0,
          params: {
            ...paramPoints.params,
            ...params
          }
        })

        setIsDepletion(true);
      }
    }
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeSetParams(key, Number(e.target.value))}
                  setIsMouseUp={() => (setIsMouseUp(key))}
                />
              ))}
            </EditBars>
          </EditForm>
          <Ability>
            <p>
              ターン開始時、自分のHPが100％以下の場合、相手のキャラ全体のHPを0にする
            </p>
            <AbilityEditButton>
              <img src={rightArrow} alt="" />
            </AbilityEditButton>
          </Ability>
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

const Ability = styled.div`
  position: relative;
  background-color: #dccbbd;
  border-radius: 10px;
  padding: 34px 86px 34px 32px;
  margin: 25px 0 46px;
  p {
    font-size: 26px;
    line-height:(33/26);
  }
`;

const AbilityEditButton = styled.button`
  position: absolute;
  top: 50%;
  right: 23px;
  transform: translateY(-50%);
  width: 26px;
`;

const submitButton = styled.button`
  background-color: #907969;
  color: #fff;
  font-size: 32px;
`;

export default SettingModal;