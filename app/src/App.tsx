import React, { useEffect } from 'react';
import Route from '@/routes';
import Provider from '@/providers';

function App() {
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    window.addEventListener('resize', setFillHeight);
    return () => {
      window.removeEventListener('resize', setFillHeight);
    }
  }, [])

  return (
    <div className="App">
      <Provider>
        <Route />
      </Provider>
    </div>
  );
}

export default App;
