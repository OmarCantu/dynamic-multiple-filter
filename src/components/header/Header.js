import PropTypes from 'prop-types';
import React from 'react';

import './Header.css';

const Header = props => {
  const { children } = props;

  return (
    <header className="header">
      <h1 className="header__heading">{children}</h1>
    </header>
  )
};

Header.propTypes = {
  children: PropTypes.node
};

Header.defaultProps = {
  children: undefined
};

export default Header;
