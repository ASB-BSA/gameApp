import { AuthProvider } from '@/providers';
import { Test, MyPage } from '@/pages/Auth';
import { Route } from 'react-router-dom';

const Auth: React.FC = () => {
  return (
    <AuthProvider>
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/auth" component={Test} />
    </AuthProvider>
  )
}

export default Auth;