import { useModal } from '@/hooks';
import styled from 'styled-components';
import { Wrapper } from '@/components/templates';
import { BottomNav, CharacterInfo, SettingModal } from '@/components/organisms';
import addIcon from '@imgs/team/add-icon.png';
import innerBg from '@imgs/team/team__bg.jpg';

const Team = () => {
  const [
    settingModalOpen,
    handleModalOpen, handleModalClose
  ] = useModal();

  return (
    <Wrapper>
      <Navbar>
        {/* ダミー / ループで回す予定 */}
        <NavButton>
          <AddIcon />
        </NavButton>
        <NavButton>
          <AddIcon />
        </NavButton>
        <NavButton>
          <AddIcon />
        </NavButton>
        <NavButton>
          <AddIcon />
        </NavButton>
        <NavButton>
          <AddIcon />
        </NavButton>
      </Navbar>
      <Inner>
        <CharacterInfo handleModalOpen={handleModalOpen} />
      </Inner>
      {settingModalOpen && (
        <SettingModal handleModalClose={handleModalClose} />
      )}
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
`;

const AddIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45px;
  height: 47px;
  background-image: url(${addIcon});
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