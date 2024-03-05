/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const changeTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    userTheme && setTheme(userTheme);
  }, []);

  return [theme, changeTheme];
};

export default useDarkMode;
