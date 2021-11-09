import { AuthProvider } from '@/providers';
import { Route, Routes } from 'react-router-dom';
import MyPage, { History, Team } from '@/pages/Auth/MyPage';

const Auth: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/mypage" >
          <Route index element={<MyPage />} />
          <Route path="team" element={<Team />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default Auth;