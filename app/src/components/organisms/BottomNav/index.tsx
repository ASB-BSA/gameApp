import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router';
import { userState } from '@/recolis/user';
import styled from 'styled-components';
import navBg from '@imgs/mypage/navigation__bg.png';
import team from '@imgs/mypage/navigation__team.png';
import buttle from '@imgs/mypage/navigation__buttle.png';
import history from '@imgs/mypage/navigation__history.png';

const BottomNav = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  return (
    <Navigation>
      <TeamButton onClick={() => navigate(`/mypage/team/${user.teams[0].id}`)}>
        <Label style={{ top: 109 }}>チーム編成</Label>
      </TeamButton>
      <ButtleButton onClick={() => navigate('/room')}>
        <Label style={{ top: 147 }}>対戦</Label>
      </ButtleButton>
      <HistoryButton onClick={() => navigate('/mypage')}>
        <Label style={{ top: 109 }}>ホーム</Label>
      </HistoryButton>
    </Navigation>
  )
}

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(263px - 9px);
  z-index: 50000;
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

export default BottomNav;