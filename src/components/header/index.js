import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Container } from '../container';
import styles from './header.module.css';
import { Logo } from './logo';
import MobileMenu from './mobileMenu';
import { Navbar } from './navbar';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    if (menuVisible) {
      setMenuVisible(false)
      document.body.style.height = "initial"
      document.body.style.overflow = "initial"
    } else {
      setMenuVisible(true)
      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
    }
  }

  return (
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
        <Navbar onCloseMobileMenu={toggleMenu} menuVisible={menuVisible} />
        {menuVisible && <MobileMenu onCloseMobileMenu={toggleMenu} />}
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
