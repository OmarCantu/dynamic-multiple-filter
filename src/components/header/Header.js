import React from 'react';

import src from '../../static/images/logo.png';

import styles from './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img alt='Logo' src={src} />
    </header>
  )
};

export default Header;
