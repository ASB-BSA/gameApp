import { AuthProvider } from '@/providers';
import { Test } from '@/pages/Auth';
import { Route } from 'react-router-dom';

const Auth: React.FC = () => {
  return (
    <AuthProvider>
      <Route exact path="/auth" component={Test} />
    </AuthProvider>
  )
}

export default Auth;