import { BrowserRouter } from 'react-router-dom';
import Guest from './Guest';
import Auth from './Auth';

const Route = () => {
  return (
    <BrowserRouter>
      <Auth />
      <Guest />
    </BrowserRouter>
  )
}

export default Route;