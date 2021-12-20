import styled from 'styled-components';
import hpIcon from '@imgs/common/status__icon_hp.png';
import attackIcon from '@imgs/common/status__icon_attack.png';
import agilityIcon from '@imgs/common/status__icon_agility.png';
import avoidanceIcon from '@imgs/common/status__icon_avoidance.png';
import spIcon from '@imgs/common/status__icon_sp.png';
import defenceIcon from '@imgs/common/status__icon_defence.png';

type Props = {
  attack: number,
  defence: number,
  avoidance: number,
  criticalRate: number,
  agility: number,
  hp: number,
}

const Status: React.FC<Props> = ({
  attack, defence, avoidance, criticalRate, agility, hp
}) => {
  const params = [
    { name: 'HP', value: hp, icon: hpIcon },
    { name: '回避', value: avoidance, icon: avoidanceIcon },
    { name: '攻撃', value: attack, icon: attackIcon },
    { name: '素早さ', value: agility, icon: agilityIcon },
    { name: '防御', value: defence, icon: defenceIcon },
    { name: '運', value: criticalRate, icon: spIcon },
  ]

  return (
    <Params>
      {params.map((param, index) => (
        <Param key={index}>
          <IconWrapper>
            <Icon><img src={param.icon} alt="" /></Icon>
          </IconWrapper>
          <Name>{param.name}</Name>
          <Value>{param.value}</Value>
        </Param>
      ))}
    </Params>
  )
}

const Params = styled.ul`
  display: flex;
  flex-wrap: wrap;
  line-height: 1;
  margin-bottom: -4px;
`;

const Param = styled.li`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Name = styled.div`
  &::after {
    content: '：';
  }
`;

const Value = styled.div`

`;

const IconWrapper = styled.div`
  width: 48px;
`;

const Icon = styled.div`
  display: inline-block;
`

export default Status;