import React, { useEffect } from 'react'
import styled, { css } from 'styled-components';
import '@/assets/scss/global/effect.scss'
import { battleEffect } from '@/utils';

type CharactorsType = {
  yourself: Charactor[],
  enemy:    Charactor[]
}

type Charactor = {
  id: number
  image: string
  position: 'front'|'back'
}

const BattleField = () => {

  useEffect(() => {
    battleEffect('attack', 1, 6)
  }, [])

  const charactors: CharactorsType = {
    yourself: [
      {
        id: 1,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'back',
      },
      {
        id: 2,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'front',
      },
      {
        id: 3,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'back',
      },
      {
        id: 4,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'front',
      },
      {
        id: 5,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'back',
      },
    ],
    enemy: [
      {
        id: 6,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'front',
      },
      {
        id: 7,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'front',
      },
      {
        id: 8,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'front',
      },
      {
        id: 9,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'front',
      },
      {
        id: 10,
        image: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png',
        position: 'front',
      },
    ]
  }

  return (
    <>
      <Field>
        <YourselfField>
          {charactors.yourself.map(e => {
            return (
              <Box className={`${e.position} charactar_${e.id}`}>
                <Img src={e.image} />
              </Box>
            )
          })}
        </YourselfField>
        <EnemyField>
          {charactors.enemy.map(e => {
            return (
              <Box className={`${e.position} charactar_${e.id}`}>
                <Img src={e.image} />
              </Box>
            )
          })}
        </EnemyField>
      </Field>
    </>
  )
}

export default BattleField

const Field = styled.div`
  flex: 1 1 auto;
  max-height: 100%;
  display: flex;
`

const FirldItem = css`
  flex: 0 0 50%;
  height: 100%;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`

const YourselfField = styled.div`
  ${FirldItem}
`

const EnemyField = styled.div`
  ${FirldItem}
  transform: scale(-1, 1);
`

const Box = styled.div`
  width: 50%;
  height: 25%;

  &.front {
    margin-left: auto;
  }

  &:not(:first-child) {
    margin-top: -25%;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
