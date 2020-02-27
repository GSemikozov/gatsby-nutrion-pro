import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import { useSmoothScroll } from '../../../hooks/useSmoothScroll';
import { Button } from '../../button';
import { useModal } from '../../modal';
import IconAngleDown from '../icons/icon-angle-down.svg';
import IconClose from '../icons/icon-close.svg';
import IconMenu from '../icons/icon-hamburger.svg';
import IconMap from '../icons/icon-map.svg';
import IconPhone from '../icons/icon-phone.svg';
import IconProfile from '../icons/icon-user.svg';
import { ModalLocation } from './modal';
import styles from './navbar.module.css';

export const Navbar = ({ menuVisible, ...props }) => {
  const scroll = useSmoothScroll()

  const onNavbarItemClick = selector => () => {
    scroll.animateScroll(document.getElementById(selector))
  }

  const openMobileMenu = () => () => {
    props.onCloseMobileMenu()
  }

  const { show, hide, RenderModal } = useModal()

  return (
    <div className={styles.navbar}>
      <RenderModal darkMode>
        <ModalLocation close={hide} />
      </RenderModal>
      <Button
        type="unstyled"
        className={cx(styles.navbarItem, styles.location)}
        handleClick={show}
      >
        <img src={IconMap} className={styles.mapMark} alt="icon" />
        <span className="visible-desktop">Praha</span>
        <img
          src={IconAngleDown}
          className={cx(styles.angleDown, "visible-desktop")}
          alt="icon"
        />
      </Button>
      <div
        className={cx(styles.navbarItem, "visible-desktop")}
        onClick={onNavbarItemClick("programs")}
      >
        Programy
      </div>
      <div
        className={cx(styles.navbarItem, "visible-desktop")}
        onClick={onNavbarItemClick("try-food")}
      >
        Jídelníček
      </div>
      <div
        className={cx(styles.navbarItem, "visible-desktop")}
        onClick={onNavbarItemClick("calculator")}
      >
        Cena
      </div>
      <div className={cx(styles.navbarItem, "visible-desktop")}>
        <Link to="/jobs">Kariéra</Link>
      </div>
      <a
        href="tel:+420774137352"
        className={cx(styles.navbarItem, styles.contacts)}
      >
        <img src={IconPhone} className={styles.iconPhone} alt="icon" />
        <span className="visible-desktop">
          <span className={styles.phoneNumber}>+420 774 137 352</span>
          <br />
          <span className={styles.additionalInfo}>
            <span className={styles.days}>Po - Pá</span> 10:00-18:00
          </span>
        </span>
      </a>
      <a href="/app/login" className={cx(styles.navbarItem, styles.profile)}>
        <img src={IconProfile} className={styles.iconProfile} alt="icon" />
      </a>
      <div
        className={cx(styles.navbarItem, styles.mobileMenuLink)}
        onClick={openMobileMenu()}
        id="mobile-menu-link"
      >
        <img src={menuVisible ? IconClose : IconMenu} alt="icon" />
      </div>
    </div>
  )
}
