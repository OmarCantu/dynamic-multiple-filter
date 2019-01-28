import PropTypes from 'prop-types';
import React from 'react';

import './Sidebar.css';

const Sidebar = props => {
  const { children } = props;

  return (
    <aside className="sidebar">
      {children}
    </aside>
  )
};

Sidebar.propTypes = {
  children: PropTypes.node
};

Sidebar.defaultProps = {
  children: undefined
};

export default Sidebar;
