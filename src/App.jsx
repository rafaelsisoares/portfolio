import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  return (
    <section className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </section>
  );
}

export default App;
