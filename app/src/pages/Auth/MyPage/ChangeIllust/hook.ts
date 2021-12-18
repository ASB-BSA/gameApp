import { useParams, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState } from '@/recolis/user';
import { characterDataState } from '@/recolis/charcterData';
import axios from 'axios';

const useLogic = () => {
  const characterDatas = useRecoilValue(characterDataState);
  const navigate = useNavigate();

  const user = useRecoilValue(userState);
  const { id } = useParams();

  const changeIllust = async (charId: number) => {
    try {
      const res = axios.put(`team/${id}`, {
        characterId: charId
      });

      navigate(`/mypage/team/${id}?update=1`);
    } catch (e) {

    }
  };

  return {
    characterDatas, changeIllust
  }
}

export default useLogic;