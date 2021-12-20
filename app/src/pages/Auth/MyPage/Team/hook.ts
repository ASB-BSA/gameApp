import type { TeamType } from '@/types/TeamType';
import type { UserJsonType } from '@/types/UserType';
import useSWR from 'swr';
import { useLocation, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useModal } from '@/hooks';
import { getUser } from '@/utils';
import axios from 'axios';

const useLogic = () => {
  const [
    settingModalOpen,
    handleModalOpen, handleModalClose
  ] = useModal();

  const locale = useLocation();

  const { id } = useParams();

  const [user, setUser] = useState<UserJsonType>();

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
    criticalRate: 0
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
    currentChar, setCurrentChar, user, settingModalOpen, handleModalOpen, handleModalClose
  }
}

export default useLogic;