import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './Container.scss';

const Container = props => {
  const { children, className } = props;

  const cn = classNames(styles.container, className);

  return (
		<div className={cn}>
			{children}
		</div>
	)
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Container.defaultProps = {
  children: undefined,
  className: undefined
};

export default Container;