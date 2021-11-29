import React from 'react'
import styled, { css } from 'styled-components';
import { Wrapper } from '@/components/templates'

import readyBg from '@/assets/imgs/battle/ready.jpg'

const Ready = () => {
  return (
    <Wrapper bg={readyBg}>
      <UserBox>
        <CharacterImg>
          <Img src={`${process.env.REACT_APP_BASE_URL}/image/akpy.png`} />
        </CharacterImg>
        <Name>さくやさん</Name>
      </UserBox>
      <OpponentBox>
        <Name>さくやさん</Name>
        <CharacterImg>
          <Img src={`${process.env.REACT_APP_BASE_URL}/image/akpy.png`} />
        </CharacterImg>
      </OpponentBox>
    </Wrapper>
  )
}

const Name = styled.p`
  text-align: center;
  color: #fff;
  font-size: 36px;
`

const CharacterImg = styled.div`
  width: 368px;
  height: 428px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const UserBox = styled.div`
  position: fixed;
  top: 5vh;
  left: 0;
`

const OpponentBox = styled.div`
  position: fixed;
  bottom: 5vh;
  right: 0;
`

export default Ready
