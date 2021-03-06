import type { TeamType } from '@/types/TeamType';
import type { UserJsonType } from '@/types/UserType';
import useSWR from 'swr';
import { useLocation, useParams } from 'react-router';
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


const useLogic = () => {
  const [
    settingModalOpen,
    handleModalOpen, handleModalClose
  ] = useModal();

  const char = useSWR('/character', (url: string) => axios.get(url).then(res => res.data));
  const locale = useLocation();

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
    sp: 0,
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
  }, [locale]);

  return {
    currentChar, user, settingModalOpen, handleModalOpen, handleModalClose
  }
}

export default useLogic;