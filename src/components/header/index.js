import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Container } from '../container';
import styles from './header.module.css';
import { Logo } from './logo';
import { Navbar } from './navbar';

export const Header = () => (
  <header className={styles.header}>
    <Container className={styles.headerInner}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Logo />
      </Link>
      <Navbar />
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
