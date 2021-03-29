import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { useHomepageTabsContext } from '../../contexts/HomepageTabsContext';
import { Container } from '../container';
import { LocalizedLink } from '../localized-link';
import styles from './header.module.css';
import { Logo } from './logo';
import { LogoLight } from './logoLight';
import { MobileMenu } from './mobileMenu';
import { Navbar } from './navbar';

export const Header2 = ({ menuLinks, isLight }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const { activeTab, dispatchAction } = useHomepageTabsContext()

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
    <header
      className={cx(styles.header, {
        [styles.headerLight]: isLight,
      })}
    >
      <Container isWide={true} className={styles.headerInner}>
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
          dispatchAction={dispatchAction}
        />
      </Container>
    </header>
  )
}

Header2.propTypes = {
  siteTitle: PropTypes.string,
}

Header2.defaultProps = {
  siteTitle: ``,
}
