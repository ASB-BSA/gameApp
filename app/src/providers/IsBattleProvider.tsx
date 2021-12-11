import battle from '@/recolis/battle'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

const IsBattleProvider = () => {
  const navigate = useNavigate()
  const setBattle = useSetRecoilState(battle)

  useEffect(() => {
    axios.get('battle')
      .then(e => {
        setBattle(e.data)
        navigate('battle/ready')
      })
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}

export default IsBattleProvider
