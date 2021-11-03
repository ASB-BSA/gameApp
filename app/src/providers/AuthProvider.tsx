import { useAuth } from '@/hooks';
import { Redirect } from 'react-router-dom';

const AuthProvider: React.FC = (props) => {
  const { user, checked } = useAuth();

  return (
    <>
      {checked && (
        <>
          {user.isSignIn ? props.children : <Redirect to="/" />}
        </>
      )}
    </>
  )
}

export default AuthProvider;