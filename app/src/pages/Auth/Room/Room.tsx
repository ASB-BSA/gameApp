import { useNavigate } from 'react-router';
import styled, { css } from 'styled-components';
import statusBg from '@imgs/mypage/status__bg.png';
import goHomeButtonBg from '@imgs/room/room__btn_home.png';
import goSettingButtonBg from '@imgs/room/room__btn_setting.png';
import gem from '@imgs/mypage/gem.png';
import roomBg from '@imgs/room/room__bg.png';
import { TextField, WoodButton } from '@/components/atoms';
import { BottomNav, WoodModal } from '@/components/organisms';
import { Wrapper } from '@/components/templates';
import mypageBg from '@imgs/mypage/mypage__bg.jpg';
import { useRecoilValue } from 'recoil';
import { userState } from '@/recolis/user';
import { useState } from 'react';
import { useCreateRoom, useJoinRoom } from '@/hooks';

const Room: React.FC = () => {
  const navigate = useNavigate();
  const profile = useRecoilValue(userState)
  const [roomNumber, setRoomNumber] = useState('')
  const { createRoomhandler, AwaitingScreen } = useCreateRoom()
  const { joinRoomHandler, JoiningScreen } = useJoinRoom()

  return (
    <Wrapper bg={mypageBg}>
      <StatusBar>
        <StatusInner>
          <StatusUser>
            <User>
              <span>{profile.name}</span>
            </User>
          </StatusUser>
          <StatusGems>
            <Gems>
              <Gem><img src={gem} alt="" /></Gem>
              <span>99999</span>
            </Gems>
          </StatusGems>
        </StatusInner>
      </StatusBar>
      <Inner>
        <WoodModal
          bg={roomBg}
          heading="ルーム設定"
          style={{
            height: 893,
            paddingTop: 206,
          }}
        >
          <ModalBody>
            <TextField
              type="number"
              placeholder="参加するルームIDを入力"
              style={{ width: 472, marginBottom: 40 }}
              value={roomNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoomNumber(e.target.value)}
            />
            <WoodButton
              style={{ marginBottom: 41 }}
              value="ルーム参加"
              onClick={() => joinRoomHandler(Number(roomNumber))}
            />
            <WoodButton
              value="ルーム作成"
              onClick={() => createRoomhandler()}
            />
          </ModalBody>
          <ModalFooter>
            <GoHomeButton onClick={()=>{navigate('/mypage')}} />
            <GoSettingButton />
          </ModalFooter>
        </WoodModal>
        <AwaitingScreen />
        <JoiningScreen />
      </Inner>
      <BottomNav />
    </Wrapper>
  )
}

const StatusBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 123px;
  background-color: #36201c;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 10;
    display: block;
    height: 109px;
    width: 100%;
    background-image: url(${statusBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const StatusInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 674px;
  padding: 0 8px;
  z-index: 1000;
`

const StatusItem = css`
  display: flex;
  align-items: center;
  background-color: $cBrown100;
  border-radius: 8px;
  width: 419px;
  height: 50px;
  font-size: 30px;
  line-height: 1;
  background-color: #dbc4c0;
`;

const StatusUser = styled.div`
  ${StatusItem}
  width: 419px;
  flex-shrink: 0;
  padding: 0 20px;
`

const User = styled.div`
  width: 100%;
`

const StatusGems = styled.div`
  ${StatusItem}
  width: 218px;
  padding: 0 12px 0 15px;
`

const Gems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Gem = styled.div`
  width: 35px;
  display: flex;
  align-items: center;
`

const Inner = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    backdrop-filter: blur(10px);
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 32px;
`;

const ModalFooter = styled.div`
  width: 493px;
  display: flex;
  justify-content: space-between;
`;

const GoButtonStyle = css`
  width: 138px;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const GoHomeButton = styled.div`
  ${GoButtonStyle}
  background-image: url(${goHomeButtonBg});
`;

const GoSettingButton = styled.div`
  ${GoButtonStyle}
  background-image: url(${goSettingButtonBg});
`;

export default Room;