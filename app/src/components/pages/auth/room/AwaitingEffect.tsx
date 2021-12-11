import { pusher } from '@/utils';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

type Props = {
  roomNumber: number
  onClose: any
}

const AwaitingEffect: React.FC<Props> = ({onClose, roomNumber}) => {
  const navigate = useNavigate()
  const channel = pusher.subscribe('battle-room')
  channel.bind(`${roomNumber}`, (data: { battleID: string }) => {
    console.log(data)
    axios.post('/battle', { battleId: Number(data.battleID) })
      .then(e => {
        console.log(e.data)
        navigate('/battle/ready')
      })
      .catch(e => {
        console.log(e.response)
        alert(e.response.data.roomNumber)
      })
  })

  return (
    <Background>
      <Loading>
        <PropagateLoader size={32} color="#ffffff" />
      </Loading>
      <Text>{roomNumber !== 0 ? "対戦相手を待っています" : "ルーム作成中"}</Text>
      {roomNumber !== 0 && <Room>ルームNo {roomNumber}</Room>}
      <ButtonWrap>
        <Button onClick={() => onClose()}>キャンセル</Button>
      </ButtonWrap>
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, .85);
  position: fixed;
  inset: 0;
  z-index: 9999;
`

const Loading = styled.div`
  padding: 3em;
  margin-left: -1.2em;
`

const Text = styled.p`
  color: #fff;
`

const Room = styled.p`
  margin-top: 1em;
  color: #fff;
`

const ButtonWrap = styled.div`
  padding: 2em 0 1em;
`

const Button = styled.button`
  display: block;
  padding: .7em 1em;
  border-radius: 8px;
  background: rgba(255, 255, 255, .1);
  color: #fff;
`

export default AwaitingEffect
