import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Container from '../container/Container';
import src from '../../static/images/logo.png';

import styles from './Navigation.scss';

const Navigation = props => {
  const { className } = props;

  const cn = classNames(styles.nav, className);

  return (
    <nav className={cn}>
      <Container className={styles.container}>
        <img alt='Logo' className={styles.img} src={src} />
      </Container>
    </nav>
  )
};

Navigation.propTypes = {
  className: PropTypes.string
};

Navigation.defaultProps = {
  className: undefined
};

export default Navigation;
