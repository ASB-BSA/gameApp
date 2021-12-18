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
      await axios.put(`team/${id}`, {
        characterId: charId
      });

      navigate(`/mypage/team/${id}`);
    } catch (e) {
      alert('変更に失敗しました')
    }
  };

  return {
    characterDatas, changeIllust
  }
}

export default useLogic;