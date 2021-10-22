import React from 'react';
import logo from '@imgs/logo.svg';
import '@css/global/App.css';
import styles from '@css/module/sample.module.scss';
import { TestComponent } from '@/components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.sampleComponent}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TestComponent />
    </div>
  );
}

export default App;
