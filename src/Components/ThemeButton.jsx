/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { string, func } from 'prop-types';
import { FaMoon, FaRegSun } from 'react-icons/fa';
import '../Styles/ThemeButton.css';

export default function ThemeButton({ theme, changeTheme }) {
  return (
    <button type="button" className="btn-theme" onClick={changeTheme}>
      {
        theme === 'light' ? <FaMoon /> : <FaRegSun />
    }
    </button>
  );
}

ThemeButton.propTypes = {
  theme: string.isRequired,
  changeTheme: func.isRequired,
};
