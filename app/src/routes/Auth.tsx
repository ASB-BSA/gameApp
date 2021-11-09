import { AuthProvider } from '@/providers';
import { Test, MyPage } from '@/pages/Auth';
import { Route, Routes } from 'react-router-dom';

const Auth: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default Auth;