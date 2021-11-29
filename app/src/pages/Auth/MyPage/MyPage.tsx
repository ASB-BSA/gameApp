import styled from 'styled-components';
import dummyChar from '@imgs/mypage/dummy-char.png';
import gem from '@imgs/mypage/gem.png';
import statusBg from '@imgs/mypage/status__bg.png';
import mypageBg from '@imgs/mypage/mypage__bg.jpg';
import { BottomNav } from '@/components/organisms';
import { Wrapper } from '@/components/templates';
import { useRecoilValue } from 'recoil';
import { userState } from '@/recolis/user';

const MyPage = () => {
  const profile = useRecoilValue(userState)
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
      <Character>
        <img src={dummyChar} alt="dummy" />
      </Character>
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

const StatusItem = `
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

const StatusGems = styled.div`
  ${StatusItem}
  width: 218px;
  padding: 0 12px 0 15px;
`

const User = styled.div`
  width: 100%;
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

const Character = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 682px;
`

export default MyPage;