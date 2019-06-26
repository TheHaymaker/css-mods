import React, { useEffect } from 'react';
import logo from './logo.svg';
import style from './App.module.css';

const App = () => {
  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.style.getPropertyValue('--bgColor').trim();

    if (currentTheme === 'var(--dark)') {
      root.style.setProperty('--bgColor', 'var(--light)');
    } else {
      root.style.setProperty('--bgColor', 'var(--dark)');
    }
  };

  useEffect(() => {
    toggleTheme();
  });

  return (
    <div className="App">
      <header className={style.AppHeader}>
        <img src={logo} className={style.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={style.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={toggleTheme} className={`${style.AppButton} ${style.AppHeader}`}>
          Toggle Theme
        </button>
      </header>
    </div>
  );
};

export default App;
