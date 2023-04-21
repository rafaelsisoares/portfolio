import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavButtons() {
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
    <div>
      <button type="button" name="home" onClick={handleClick}>Pagina Inicial</button>
      <button type="button" name="about" onClick={handleClick}>Sobre Mim</button>
      <button type="button" name="projects" onClick={handleClick}>Projetos</button>
    </div>
  );
}
