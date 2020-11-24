import cx from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { handleMenuLinkClick } from '../../../helpers';
import { Button } from '../../button';
import { useModal } from '../../modal';
import IconAngleDown from '../icons/icon-angle-down.svg';
import IconClose from '../icons/icon-close.svg';
import IconMenu from '../icons/icon-hamburger.svg';
import IconMap from '../icons/icon-map.svg';
import IconPhone from '../icons/icon-phone.svg';
import IconProfile from '../icons/icon-user.svg';
import LanguageMenu from './lang-menu';
import { ModalLocation } from './modal';
import styles from './navbar.module.css';

// import { Link } from 'gatsby';
export const Navbar = ({ menuVisible, menuLinks, location, ...props }) => {
  const openMobileMenu = () => () => {
    props.onCloseMobileMenu()
  }

  const { show, hide, RenderModal } = useModal()

  const { t } = useTranslation()

  const getLinkTranslation = name => {
    return t(`menu.${name}`)
  }

  return (
    <div className={styles.navbar}>
      <RenderModal darkMode>
        <ModalLocation close={hide} />
      </RenderModal>
      <Button
        type="unstyled"
        className={cx(styles.navbarItem, styles.location)}
        // handleClick={show}
      >
        <img src={IconMap} className={styles.mapMark} alt="icon" />
        <span>{t("menu.location")}</span>
        <img src={IconAngleDown} className={styles.angleDown} alt="icon" />
      </Button>
      {menuLinks.map(link => (
        <a
          key={link.name}
          href={link.link}
          className={cx(styles.navbarItem, "visible-desktop")}
          onClick={e => handleMenuLinkClick(link, e)}
        >
          {getLinkTranslation(link.name)}
        </a>
      ))}
      <a
        href="tel:+420774137352"
        className={cx(styles.navbarItem, styles.contacts)}
      >
        <img src={IconPhone} className={styles.iconPhone} alt="icon" />
        <span className="visible-desktop">
          <span className={styles.phoneNumber}>+420 774 137 352</span>
          <br />
          <span className={styles.additionalInfo}>
            <p style={{ textAlign: "right" }}>
              <span className={styles.days}>Po - Pá</span> 10:00 - 12:00
              <br />
              13:00 - 18:00
            </p>
          </span>
        </span>
      </a>
      {/* <a href="/app/login" className={cx(styles.navbarItem, styles.profile)}>
        <img src={IconProfile} className={styles.iconProfile} alt="icon" />
      </a> */}
      <div className={cx(styles.navbarItem, styles.langSwitcher)}>
        <LanguageMenu />
      </div>
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
