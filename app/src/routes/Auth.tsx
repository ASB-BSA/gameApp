import { Route, Routes } from 'react-router-dom';
import MyPage, { History, Team } from '@/pages/Auth/MyPage';
import Room from '@/pages/Auth/Room';
import Protect from '@/providers/Protect';

const Auth: React.FC = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<Protect />}>
        <Route index element={<MyPage />} />
        <Route path="team" element={<Team />} />
        <Route path="history" element={<History />} />
      </Route>
      <Route path="/room" element={<Protect />}>
        <Route index element={<Room />} />
      </Route>
    </Routes>
  )
}

export default Auth;