import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import { Wrapper } from '@/components/templates'

import readyBg from '@/assets/imgs/battle/ready.jpg'
import { useRecoilValue } from 'recoil';
import { characterDataState } from '@/recolis/charcterData';
import battle from '@/recolis/battle';
import { useNavigate } from 'react-router-dom';

const Ready = () => {
  const battleIF = useRecoilValue(battle)
  const charactors = useRecoilValue(characterDataState)
  const [userCharactorPath, setUserCharactorPath] = useState<undefined|string>(undefined)
  const [opponentCharactorPath, setOpponentCharactorPath] = useState<undefined|string>(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    if (charactors.length === 0) return
    if (battleIF.userTeams && battleIF.opponentTeams) {
      const userCharactor = battleIF.userTeams.teams[0]
      const opponentCharactor = battleIF.opponentTeams.teams[0]

      const userCharactorData = charactors.find(f => f.id === userCharactor.characterId)
      const opponentCharactorData = charactors.find(f => f.id === opponentCharactor.characterId)

      setUserCharactorPath(userCharactorData?.img)
      setOpponentCharactorPath(opponentCharactorData?.img)

      setTimeout(() => {
        navigate('../')
      }, 3000)
    }
  }, [battleIF, charactors])

  return (
    <Wrapper bg={readyBg}>
      <UserBox>
        <CharacterImg>
          <Img src={`${process.env.REACT_APP_BASE_URL}/image/${userCharactorPath}`} />
        </CharacterImg>
        {battleIF.createUser && <Name>{battleIF.createUser.name}</Name>}
      </UserBox>
      <OpponentBox>
        {battleIF.opponentUser && <Name>{battleIF.opponentUser.name}</Name>}
        <CharacterImg>
          <Img src={`${process.env.REACT_APP_BASE_URL}/image/${opponentCharactorPath}`} />
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
