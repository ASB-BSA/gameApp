import React from 'react'
import healthBG from '@/assets/imgs/battle/health_bar.png'
import healthGageBG from '@/assets/imgs/battle/health_gage.png'
import styled from 'styled-components'

const HealthBar = () => {
  
  return (
    <HealthBarBox>
      <HealthBarBoxInner>
        <HealthBarItem className="me">
          <Name>さくやさん</Name>
          <HealthGage>
            <BarWrap>
              <Bar style={{
                width: `${100}%`,
              }} />
            </BarWrap>
          </HealthGage>
        </HealthBarItem>
        <HealthBarItem className="enemy">
          <Name>さくやさん</Name>
          <HealthGage className="enemy">
            <BarWrap>
              <Bar style={{
                width: `${90}%`,
              }} />
            </BarWrap>
          </HealthGage>
        </HealthBarItem>
      </HealthBarBoxInner>
    </HealthBarBox>
  )
}

const HealthBarBox = styled.div`
  background: #8e6441;
  border-bottom: 1px solid #4d2b0e;
  padding: 24px 20px;
`

const HealthBarBoxInner = styled.div`
  display: flex;
  flex-direction: row;
`

const HealthBarItem = styled.div`
  flex: 0 0 50%;

  &.me {
    margin-left: -10px;
  }

  &.enemy {
    text-align: right;
  }
`

const Name = styled.p`
  color: #fff;
`

const HealthGage = styled.div`
  width: 368px;
  height: 34px;
  margin-top: 8px;
  background: url(${healthBG}) no-repeat center center / contain;
  position: relative;

  &.me {
    margin-right: -10px;
  }

  &.enemy {
    transform: rotate(180deg);
    margin-left: -10px;
  }
`

const BarWrap = styled.div`
  width: 316px;
  height: 11px;
  position: absolute;
  top: 11px;
  left: 24px;
`

const Bar = styled.div`
  max-width: 100%;
  height: 100%;
  background: url(${healthGageBG}) no-repeat center center / cover;
`

export default HealthBar
