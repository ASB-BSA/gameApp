import React from 'react'
import styled, { css } from 'styled-components';
import { StatusItem } from '.';

type StatusType = {
  name:      string
  maxHp:     number
  currentHp: number
  maxMp:     number
  currentMp: number
  icon:      string
}

const StatusArea = () => {

  const statusData: StatusType[] = [
    {
      name: '魔夜',
      maxHp: 1500,
      currentHp: 1500,
      maxMp: 300,
      currentMp: 300,
      icon: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png'
    },
    {
      name: '魔夜',
      maxHp: 1500,
      currentHp: 750,
      maxMp: 300,
      currentMp: 300,
      icon: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png'
    },
    {
      name: '魔夜',
      maxHp: 1500,
      currentHp: 750,
      maxMp: 300,
      currentMp: 300,
      icon: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png'
    },
    {
      name: '魔夜',
      maxHp: 1500,
      currentHp: 750,
      maxMp: 300,
      currentMp: 300,
      icon: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png'
    },
    {
      name: '魔夜',
      maxHp: 1500,
      currentHp: 750,
      maxMp: 300,
      currentMp: 300,
      icon: 'https://api.game-boomin.net/api/v1/image/mayu_girl.png'
    },
  ]

  return (
    <StatusContain>
      <StatusContainWrap>
        {statusData.map((e, i) => {
          return (
            <>
              <StatusItem {...e} key={i} />
            </>
          )
        })}
      </StatusContainWrap>
    </StatusContain>
  )
}

export default StatusArea

const StatusContain = styled.div`
  padding: 8px;
`

const StatusContainWrap = styled.div`
  padding: 12px;
  background: rgba(255,255,255,.24);
  border: 1px solid #4d2b0e;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`