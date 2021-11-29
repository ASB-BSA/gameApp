import JoiningEffect from '@/components/pages/auth/room/JoiningEffect'
import axios from 'axios'
import React, { useState } from 'react'

const useJoinRoom = () => {
  const [isJoining, setIsJoining] = useState(false)
  const joinRoomHandler = (roomNumber: number) => {
    if (String(roomNumber).length !== 6) return

    setIsJoining(true)
    setTimeout(() => {
      axios.post('/room', { roomNumber: roomNumber })
        .then(console.log)
        .catch((e) => {
          setIsJoining(false)
          alert(e.response.data.message)
        })
    }, 700)
  }

  const JoiningScreen: React.FC = () => {
    return (
      <>
        {isJoining && <JoiningEffect />}
      </>
    )
  }

  return { joinRoomHandler, JoiningScreen }
}

export default useJoinRoom
