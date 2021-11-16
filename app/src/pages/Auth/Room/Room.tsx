import { useNavigate } from 'react-router';
import styled from 'styled-components';
import wrapperBg from '@imgs/common/bg_woods.jpg';
import goHomeButtonBg from '@imgs/room/room__btn_home.png';
import goSettingButtonBg from '@imgs/room/room__btn_setting.png';
import roomBg from '@imgs/room/room__bg.png';
import { TextField, WoodButton } from '@/components/atoms';
import { WoodModal } from '@/components/organisms';

const Room: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
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
              placeholder="ルームIDを入力してください"
              style={{ width: 472, marginBottom: 40 }}
            />
            <WoodButton
              style={{ marginBottom: 41 }}
              value="ルーム参加"
            />
            <WoodButton value="ルーム作成" />
          </ModalBody>
          <ModalFooter>
            <GoHomeButton onClick={()=>{navigate('/mypage')}} />
            <GoSettingButton />
          </ModalFooter>
        </WoodModal>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${wrapperBg});
    background-size: cover;
    background-position: center;
  }
`;

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

const GoButtonStyle = `
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