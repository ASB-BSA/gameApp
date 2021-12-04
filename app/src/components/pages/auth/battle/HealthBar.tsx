import React from 'react'
import healthBG from '@/assets/imgs/battle/health_bar.png'
import styled from 'styled-components'

const HealthBar = () => {
  return (
    <HealthBarBox>
      <HealthBarBoxInner>
        <HealthBarItem className="me">
          <Name>さくやさん</Name>
          <HealthGage>
            <Bar style={{
              width: `${100}%`,
            }} />
          </HealthGage>
        </HealthBarItem>
        <HealthBarItem className="enemy">
          <Name>さくやさん</Name>
        </HealthBarItem>
      </HealthBarBoxInner>
    </HealthBarBox>
  )
}

const HealthBarBox = styled.div`
  background: #8e6441;
  border-bottom: 1px solid #4d2b0e;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 32px;
  padding-bottom: 32px;
`

const HealthBarBoxInner = styled.div`
  display: flex;
  flex-direction: row;
`

const HealthBarItem = styled.div`
  flex: 0 0 50%;
`

const Name = styled.p`
  color: #fff;
`

const HealthGage = styled.div``

const Bar = styled.div``

export default HealthBar
