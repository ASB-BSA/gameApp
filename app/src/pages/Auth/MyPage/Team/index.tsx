import useLogic from './hook';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { BottomNav, CharacterInfo, SettingModal } from '@/components/organisms';
import addIcon from '@imgs/team/add-icon.png';
import innerBg from '@imgs/team/team__bg.jpg';
import { Wrapper } from '@/components/templates';

const Team = () => {
  const { currentChar, setCurrentChar, user, settingModalOpen, handleModalOpen, handleModalClose } = useLogic();

  return (
    <Wrapper>
      <Navbar>
        {user && user.Teams.teams.map((team, index) => (
          <NavButton key={index}>

          </NavButton>
        ))}
      </Navbar>
      <Inner>
        <CharacterInfo
          currentChar={currentChar}
          handleModalOpen={handleModalOpen}
        />
      </Inner>
      <SettingModal
        currentChar={currentChar}
        setCurrentChar={setCurrentChar}
        handleModalClose={handleModalClose}
        isOpen={settingModalOpen}
      />
      <Outlet />
      <BottomNav />
    </Wrapper>
  )
}

const Navbar = styled.nav`
  height: 152px;
  background-color: #8e6441;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1px;
`;

const NavButton = styled.div`
  position: relative;
  width: 144px;
  height: 144px;
  background: radial-gradient(ellipse at center,  #7d3c00 0%,#653912 100%);
  border-radius: 14px;
  border: 4px solid #491e0b;
  &::before {

  }
`;

const Inner = styled.div`
  width: 100%;
  height: calc(100% - 152px);
  background-image: url(${innerBg});
  background-size: cover;
  background-position: center;
  border: 8px solid #2bab5e;
  border-radius: 10px;
`;

export default Team;