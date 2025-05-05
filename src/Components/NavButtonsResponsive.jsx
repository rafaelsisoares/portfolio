import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaLaptopCode } from 'react-icons/fa';

export default function NavButtonsResponsive() {
  return (
    <div className="responsive-buttons">
      <Link to="/" aria-label="Página inicial">
        <FaHome />
      </Link>
      <Link to="/about" aria-label="Sobre mim">
        <FaUser />
      </Link>
      <Link to="/projects" aria-label="Projetos">
        <FaLaptopCode />
      </Link>
    </div>
  );
}
