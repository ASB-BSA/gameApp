import { Route } from 'react-router-dom';
import { Home } from '@/pages';

const Guest = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  )
}

export default Guest;