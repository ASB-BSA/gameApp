import { useAuth } from '@/hooks';
import { Navigate } from 'react-router-dom';

const AuthProvider: React.FC = (props) => {
  const { user, checked } = useAuth();

  return (
    <>
      {checked && (
        <>
          {user.isSignIn ? props.children : <Navigate to="/" />}
        </>
      )}
    </>
  )
}

export default AuthProvider;