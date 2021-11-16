import { Route, Routes } from 'react-router-dom';
import Home, { Start, AnonymousSignUp } from '@/pages/Guest/Home';

const Guest = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Start />} />
        <Route path="/signup" element={<AnonymousSignUp />} />
      </Route>
    </Routes>
  )
}

export default Guest;