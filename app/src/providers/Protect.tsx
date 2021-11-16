import { useAuth } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';

const Protect: React.FC = () => {
  const { user, checked } = useAuth();

  return (
    <>
      {checked && (
        <>
          {user.isSignIn ? <Outlet /> : <Navigate to="/" />}
        </>
      )}
    </>
  )
}

export default Protect;