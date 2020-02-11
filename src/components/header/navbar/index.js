import cx from 'classnames';
import React from 'react';

import { useSmoothScroll } from '../../../hooks/useSmoothScroll';
import { Button } from '../../button';
import { useModal } from '../../modal';
import IconAngleDown from '../icons/icon-angle-down.svg';
import IconMenu from '../icons/icon-hamburger.svg';
import IconMap from '../icons/icon-map.svg';
import IconPhone from '../icons/icon-phone.svg';
import IconProfile from '../icons/icon-user.svg';
import { ModalLocation } from './modal';
import styles from './navbar.module.css';

export const Navbar = props => {
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
      <div className={cx(styles.navbarItem, "visible-desktop")}>Jídelníček</div>
      <div className={cx(styles.navbarItem, "visible-desktop")}>
        Nejčastější otázky
      </div>
      <div className={cx(styles.navbarItem, "visible-desktop")}>Kariéra</div>
      <div className={cx(styles.navbarItem, styles.contacts)}>
        <img src={IconPhone} className={styles.iconPhone} alt="icon" />
        <span className="visible-desktop">
          <span className={styles.phoneNumber}>+420 774 137 352</span>
          <br />
          <span className={styles.additionalInfo}>
            <span className={styles.days}>Po - Pá</span> 10:00-18:00
          </span>
        </span>
      </div>
      <div className={cx(styles.navbarItem, styles.profile)}>
        <img src={IconProfile} className={styles.iconProfile} alt="icon" />
      </div>
      <div
        className={cx(styles.navbarItem, styles.mobileMenuLink)}
        onClick={openMobileMenu()}
        id="mobile-menu-link"
      >
        <img src={IconMenu} alt="icon" />
      </div>
    </div>
  )
}
