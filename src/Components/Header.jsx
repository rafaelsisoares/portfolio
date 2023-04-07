import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Header.css';

export default function Header() {
  const navigate = useNavigate();
  const handleClick = ({ target: { name } }) => {
    switch (name) {
      case 'home':
        navigate('/');
        break;

      case 'about':
        navigate('/about');
        break;

      default:
        navigate('/projects');
        break;
    }
  };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="title">{'<Rafael />'}</div>
        <div>
          <button type="button" name="home" onClick={handleClick}>Pagina Inicial</button>
          <button type="button" name="about" onClick={handleClick}>Sobre Mim</button>
          <button type="button" name="projects" onClick={handleClick}>Projetos</button>
        </div>
      </nav>
    </header>
  );
}
