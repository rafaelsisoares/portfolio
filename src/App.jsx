import React from 'react';
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AnimatePresence } from 'framer-motion';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SpeedInsights } from '@vercel/speed-insights/dist/react';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <section className="App">
      <Header />
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
      <SpeedInsights />
    </section>
  );
}

export default App;
