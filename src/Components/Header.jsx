import React from 'react';
import NavButtons from './NavButtons';
import '../Styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="title">{'<Rafael />'}</div>
        <NavButtons />
      </nav>
    </header>
  );
}
