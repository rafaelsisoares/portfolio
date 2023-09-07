/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { string, func } from 'prop-types';

export default function ThemeButton({ theme, changeTheme }) {
  return (
    <button type="button" onClick={changeTheme}>
      {
        theme === 'light' ? 'dark' : 'light'
    }
    </button>
  );
}

ThemeButton.propTypes = {
  theme: string.isRequired,
  changeTheme: func.isRequired,
};
