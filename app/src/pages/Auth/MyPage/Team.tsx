import type { TeamType } from '@/types/TeamType';
import type { UserJsonType } from '@/types/UserType';
import useSWR from 'swr';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useModal } from '@/hooks';
import { getUser } from '@/utils';
import styled from 'styled-components';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { BottomNav, CharacterInfo, SettingModal } from '@/components/organisms';
import addIcon from '@imgs/team/add-icon.png';
import innerBg from '@imgs/team/team__bg.jpg';
import { Wrapper } from '@/components/templates';

const Team = () => {
  const [
    settingModalOpen,
    handleModalOpen, handleModalClose
  ] = useModal();

  const char = useSWR('/character', (url: string) => axios.get(url).then(res => res.data));

  const { id } = useParams();

  const [user, setUser] = useState<UserJsonType>()

  const [currentChar, setCurrentChar] = useState<TeamType>({
    id: 0,
    characterId: 0,
    mp: 0,
    attack: 0,
    defence: 0,
    avoidance: 0,
    hit: 0,
    agility: 0,
    hp: 0,
    criticalRate: 0,
  });

  useEffect(() => {
    (async () => {
      const res = await getUser();
      if (res) {
        setUser(res);

        const { teams } = res.Teams;
        const current = teams.find(team => team.id === Number(id));

        setCurrentChar(current ?? teams[0]);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <Navbar>
        {user && user.Teams.teams.map((team, index) => (
          <NavButton key={index}>
            <AddIcon />
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