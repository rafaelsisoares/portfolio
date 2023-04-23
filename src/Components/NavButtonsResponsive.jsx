import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaLaptopCode } from 'react-icons/fa';

export default function NavButtonsResponsive() {
  return (
    <div className="responsive-buttons">
      <Link to="/">
        <FaHome />
      </Link>
      <Link to="/about">
        <FaUser />
      </Link>
      <Link to="/projects">
        <FaLaptopCode />
      </Link>
    </div>
  );
}
