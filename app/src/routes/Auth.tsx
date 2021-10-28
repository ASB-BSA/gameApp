import { Route } from 'react-router-dom';
import { Home } from '@/pages';

const Auth = () => {
  return (
    <>
      <Route path="/auth" component={Home} />
    </>
  )
}

export default Auth;