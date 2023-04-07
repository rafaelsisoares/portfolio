import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <section className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </section>
  );
}

export default App;
