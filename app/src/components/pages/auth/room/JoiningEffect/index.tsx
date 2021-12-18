import React from 'react'
import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

const JoiningEffect: React.FC = () => {
  return (
    <Background>
      <Loading>
        <PropagateLoader size={32} color="#ffffff" />
      </Loading>
      <Text>ルームを検索中</Text>
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

export default JoiningEffect
