import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyles from './Components/GlobalStyles';
import { lightTheme, darkTheme } from './Components/Themes';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <section className="App">
          <button type="button" onClick={themeToggle}>Theme</button>
          <AnimatePresence>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </AnimatePresence>
        </section>
      </>
    </ThemeProvider>
  );
}

export default App;
