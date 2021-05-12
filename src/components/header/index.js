import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Container } from '../container';
import { LocalizedLink } from '../localized-link';
import styles from './header.module.css';
import { Logo } from './logo';
import { LogoLight } from './logoLight';
import { MobileMenu } from './mobileMenu';
import { Navbar } from './navbar';

export const Header = ({ menuLinks, isLight }) => {
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

  useEffect(() => {
    console.log("menuLinks in old header", menuLinks)
  }, [])

  return (
    <header
      className={cx(styles.header, {
        [styles.headerLight]: isLight,
      })}
    >
      <Container className={styles.headerInner}>
        <LocalizedLink
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline-flex`,
            alignItems: `center`,
          }}
        >
          {!isLight ? <Logo /> : <LogoLight />}
        </LocalizedLink>
        <Navbar
          onCloseMobileMenu={toggleMenu}
          menuVisible={menuVisible}
          menuLinks={menuLinks}
          isLight={isLight}
        />
        <MobileMenu
          menuVisible={menuVisible}
          menuLinks={menuLinks}
          onCloseMobileMenu={toggleMenu}
        />
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
