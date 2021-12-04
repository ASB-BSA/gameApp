import { Wrapper } from '@/components/templates'
import React from 'react'
import BackGround from '@/assets/imgs/team/team__bg.jpg'
import FieldBg from '@/assets/imgs/battle/battle__view.jpg'
import styled from 'styled-components'
import { HealthBar } from '@/components/pages/auth/battle'

const Battle = () => {
  return (
    <Wrapper bg={BackGround}>
      <MainView>
        <HealthBar />
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