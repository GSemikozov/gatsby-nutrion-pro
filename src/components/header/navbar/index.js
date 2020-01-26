import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import IconAngleDown from '../icons/icon-angle-down.svg';
import IconMenu from '../icons/icon-hamburger.svg';
import IconMap from '../icons/icon-map.svg';
import IconPhone from '../icons/icon-phone.svg';
import IconProfile from '../icons/icon-user.svg';
import styles from './navbar.module.css';

export const Navbar = () => (
  <div className={styles.navbar}>
    <Link className={cx(styles.navbarItem, styles.location)}>
      <img src={IconMap} className={styles.mapMark} alt="icon" />
      <span className="visible-desktop">Praha</span>
      <img
        src={IconAngleDown}
        className={cx(styles.angleDown, "visible-desktop")}
        alt="icon"
      />
    </Link>
    <Link className={cx(styles.navbarItem, "visible-desktop")}>Jídelníček</Link>
    <Link className={cx(styles.navbarItem, "visible-desktop")}>
      Nejčastější otázky
    </Link>
    <Link className={cx(styles.navbarItem, "visible-desktop")}>Kariéra</Link>
    <Link className={cx(styles.navbarItem, styles.contacts)}>
      <img src={IconPhone} className={styles.iconPhone} alt="icon" />
      <span className="visible-desktop">
        <span className={styles.phoneNumber}>+420 774 137 352</span>
        <br />
        <span className={styles.additionalInfo}>
          <span className={styles.days}>Po - Pá</span> 10:00-18:00
        </span>
      </span>
    </Link>
    <Link className={cx(styles.navbarItem, styles.profile)}>
      <img src={IconProfile} className={styles.iconProfile} alt="icon" />
    </Link>
    <Link
      className={cx(styles.navbarItem, styles.mobileMenuLink)}
      id="mobile-menu-link"
    >
      <img src={IconMenu} alt="icon" />
    </Link>
  </div>
)
