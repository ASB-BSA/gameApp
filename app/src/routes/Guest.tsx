import { Route } from 'react-router-dom';
import { Home } from '@/pages/Guest';

const Guest = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  )
}

export default Guest;