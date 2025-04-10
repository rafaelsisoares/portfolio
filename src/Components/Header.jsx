import React from 'react';
import { ThemeProvider } from 'styled-components';
import NavButtons from './NavButtons';
import GlobalStyles from './GlobalStyles';
import { lightTheme, darkTheme } from './Themes';
import ThemeButton from './ThemeButton';
import useDarkMode from '../hooks/useDarkMode';
import '../Styles/Header.css';

export default function Header() {
  const [theme, changeTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <header className="header">
        <nav className="navbar">
          <div className="title">{'<Rafael />'}</div>
          <ThemeButton theme={theme} changeTheme={changeTheme} />
          <NavButtons />
        </nav>
      </header>
    </ThemeProvider>
  );
}
