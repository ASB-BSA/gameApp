import type { roomtype } from '@/types/RoomType'
import React, { useState } from 'react'
import axios from 'axios'
import AwaitingEffect from '@/components/pages/auth/room/AwaitingEffect'

const useCreateRoom = () => {
  const [isAwaiting, setIsAwaiting] = useState(false)
  const [awaitingNumber, setAwaitingNumber] = useState(0)
  const [roomId, setRoomId] = useState(0)

  const onClose = () => {
    setAwaitingNumber(0)
    setIsAwaiting(false)

    if (roomId !== 0) {
      axios.delete(`/room/${roomId}`)
      setRoomId(0)
    }
  }

  const createRoomhandler = async () => {
    if (isAwaiting) return

    setIsAwaiting(true)

    setTimeout(async () => {
      await axios.get<roomtype>('/room')
        .then(res => {
          setRoomId(res.data.id)
          setAwaitingNumber(res.data.roomNumber)
        })
        .catch(e => {
          console.log(e.response)
          alert(e.response.data.message)
          onClose()
        })

    }, 700)
  }

  const AwaitingScreen: React.FC = () => {
    return (
      <>
        {isAwaiting && <AwaitingEffect roomNumber={awaitingNumber} onClose={() => onClose()}  />}
      </>
    )
  }

  return { createRoomhandler, AwaitingScreen }
}

export default useCreateRoom
