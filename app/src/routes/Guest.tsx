import { Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/Guest';

const Guest = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Guest;