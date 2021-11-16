import { useNavigate } from 'react-router';
import styles from '@css/module/mypage.module.scss';
import styled from 'styled-components';
import dummyChar from '@imgs/mypage/dummy-char.png';
import gem from '@imgs/mypage/gem.png';
import statusBg from '@imgs/mypage/status__bg.png';
import navBg from '@imgs/mypage/navigation__bg.png';
import team from '@imgs/mypage/navigation__team.png';
import buttle from '@imgs/mypage/navigation__buttle.png';
import history from '@imgs/mypage/navigation__history.png';

const MyPage = () => {
  const navigate = useNavigate();

  return (
      <div className={styles.wrapper}>
        <StatusBar>
          <StatusInner>
            <StatusUser>
              <User>
                <span>サクヤさん</span>
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
        <Navigation>
          <TeamButton onClick={() => navigate('/mypage/team')}>
            <Label style={{ top: 109 }}>チーム編成</Label>
          </TeamButton>
          <ButtleButton onClick={() => navigate('/room')}>
            <Label style={{ top: 147 }}>対戦</Label>
          </ButtleButton>
          <HistoryButton onClick={() => navigate('/mypage/history')}>
            <Label style={{ top: 109 }}>戦歴</Label>
          </HistoryButton>
        </Navigation>
      </div>
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

const Navigation = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(263px - 9px);
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 201px;
    z-index: 10;
    display: block;
    background-image: url(${navBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const ButtonStyle = `
  position: absolute;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100;
`

const TeamButton = styled.div`
  ${ButtonStyle}
  bottom: 2px;
  left: 2px;
  width: 261px;
  height: 161px;
  background-image: url(${team});
`

const ButtleButton = styled.div`
  ${ButtonStyle}
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  height: 229px;
  width: 220px;
  background-image: url(${buttle});
`

const HistoryButton = styled.div`
  ${ButtonStyle}
  bottom: 2px;
  right: 2px;
  width: 261px;
  height: 161px;
  background-image: url(${history});
`

const Label = styled.div`
  position: absolute;
  font-size: 30px;
  color: #fff;
  line-height: 1;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`

export default MyPage;