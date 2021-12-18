import { Wrapper } from '@/components/templates'
import React from 'react'
import BackGround from '@/assets/imgs/team/team__bg.jpg'
import FieldBg from '@/assets/imgs/battle/battle__view.jpg'
import styled from 'styled-components'
import { BattleField, HealthBar, StatusArea } from '@/components/pages/auth/battle'

const Battle = () => {
  
  return (
    <Wrapper bg={BackGround}>
      <Flex>
        <MainView>
          <HealthBar />
          <BattleField />
        </MainView>
        <StatusArea />
      </Flex>
    </Wrapper>
  )
}

export default Battle

const Flex = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

const MainView = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 800px;
  background: url(${FieldBg}) no-repeat center center / cover;
`