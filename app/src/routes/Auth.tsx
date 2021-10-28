import { Route } from 'react-router-dom';
import { Home } from '@/pages';

const Auth = () => {
  return (
    <>
      <Route exact path="/auth" component={Home} />
    </>
  )
}

export default Auth;