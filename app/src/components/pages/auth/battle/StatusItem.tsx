import React from 'react'
import styled, { css } from 'styled-components';

type StatusType = {
  name:      string
  maxHp:     number
  currentHp: number
  maxMp:     number
  currentMp: number
  icon:      string
}

const StatusItem: React.FC<StatusType> = (props) => {

  return (
    <StatusComponent>
      <StatusWrap>
        <Stack>
          <Flex>
            <Name>{props.name}</Name>
            <Spacer />
            <Health>{props.currentHp}</Health>
          </Flex>
          <HelthBar max={props.maxHp} current={props.currentHp} color="#2bab5e" />
          <HelthBar max={props.maxMp} current={props.currentMp} color="#f4e001" />
        </Stack>
      </StatusWrap>
      <Icon>
        <IconImage src={props.icon} />
      </Icon>
    </StatusComponent>
  )
}

export default StatusItem


const HelthBar: React.FC<{
  max:     number
  current: number
  color:   string
}> = ({max, current, color}) => {
  return (
    <>
      <HelthBarFrame>
        <HealthBarFrameColor style={{
          width: `${(current / max * 100)}%`,
          background: color,
        }} />
      </HelthBarFrame>
    </>
  )
}

const HelthBarFrame = styled.div`
  background: #d2c5a5;
  border-radius: 50px;
  height: 16px;
`

const HealthBarFrameColor = styled.div`
  border-radius: 50px;
  height: 16px;
`


const StatusComponent = styled.div`
  background: #fff;
  border: 1px solid #4d2b0e;
  display: flex;
`

const StatusWrap = styled.div`
  flex: 1 1 auto;
  padding: 8px;
`

const Icon = styled.div`
  flex: 0 0 80px;
  background: #4d2b0e;
`

const IconImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Name = styled.p`
  color: #4d2b0e;
`

const Health = styled.p`
  color: #4d2b0e;
`

const Flex = styled.div`
  display: flex;
`

const Spacer = styled.div`
  min-width: 16px;
  flex: 1 1 auto;
`

const Stack = styled.div`
  & > *:not(:first-child) {
    margin-top: 12px;
  }
`