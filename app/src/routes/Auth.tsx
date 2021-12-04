import { Route, Routes } from 'react-router-dom';
import MyPage, { History, Team } from '@/pages/Auth/MyPage';
import Room from '@/pages/Auth/Room';
import Protect from '@/providers/Protect';
import { BattleProvider } from '@/providers';
import { Ready } from '@/pages/Auth/Battle';
import Battle from '@/pages/Auth/Battle/Battle';

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
      <Route path="/battle" element={<BattleProvider />}>
        <Route index element={<Battle />} />
        <Route path="ready" element={<Ready />} />
      </Route>
    </Routes>
  )
}

export default Auth;