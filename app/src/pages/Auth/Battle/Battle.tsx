import { Wrapper } from '@/components/templates'
import React from 'react'
import BackGround from '@/assets/imgs/team/team__bg.jpg'
import FieldBg from '@/assets/imgs/battle/battle__view.jpg'
import styled from 'styled-components'

const Battle = () => {
  return (
    <Wrapper bg={BackGround}>
      <MainView>
        <HealthBarBox>

        </HealthBarBox>
        batoru
      </MainView>
    </Wrapper>
  )
}

export default Battle

const MainView = styled.div`
  min-height: 980px;
  background: url(${FieldBg}) no-repeat center center / cover;
`

const HealthBarBox = styled.div`
  background: #8e6441;
  border-bottom: 1px solid #4d2b0e;
`