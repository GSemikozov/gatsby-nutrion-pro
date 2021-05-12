import { window } from 'browser-monads';
import cx from 'classnames';
import { navigate } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { handleMenuLinkClick } from '../../../helpers';
import { useLangContext } from '../../../utils/lang';
import { Button } from '../../button';
import { LocalizedLink } from '../../localized-link';
import { useModal } from '../../modal';
import IconAngleDown from '../icons/icon-angle-down.svg';
import IconClose from '../icons/icon-close.svg';
import IconMenu from '../icons/icon-hamburger.svg';
import IconMap from '../icons/icon-map.svg';
import IconPhone from '../icons/icon-phone.svg';
import IconProfile from '../icons/icon-user.svg';
import LanguageMenu, { LanguagePicker } from './lang-menu';
import { ModalLocation } from './modal';
import styles from './navbar.module.css';

export const Navbar = ({ menuVisible, menuLinks, location, ...props }) => {
  const { lang } = useLangContext()

  const openMobileMenu = () => () => {
    props.onCloseMobileMenu()
  }

  const { show, hide, RenderModal } = useModal()

  const { t } = useTranslation()

  const getLinkTranslation = name => {
    return t(`menu.${name}`)
  }

  const isHomepage = window.location.pathname === "/"

  const HomepageMenu = () => {
    return (
      menuLinks &&
      menuLinks.map((link, i) => {
        return link.link.startsWith("/#") ? (
          <Button
            key={link.name}
            type="unstyled"
            className={cx(styles.navbarItem, "visible-desktop")}
            handleClick={() => {
              handleMenuLinkClick(link, undefined, lang)
            }}
          >
            {getLinkTranslation(link.name)}
          </Button>
        ) : (
          <LocalizedLink
            key={link.name}
            to={link.link}
            className={cx(styles.navbarItem, "visible-desktop")}
          >
            {getLinkTranslation(link.name)}
          </LocalizedLink>
        )
      })
    )
  }

  const InnerPageMenu = () => {
    return menuLinks ? (
      menuLinks.map((link, i) => {
        return (
          !link.link.startsWith("/#") && (
            <LocalizedLink
              key={link.name}
              to={link.link}
              className={cx(styles.navbarItem, "visible-desktop")}
            >
              {getLinkTranslation(link.name)}
            </LocalizedLink>
          )
        )
      })
    ) : (
      <div />
    )
  }

  return (
    <div className={styles.navbar}>
      <RenderModal darkMode>
        <ModalLocation close={hide} />
      </RenderModal>
      <Button
        type="unstyled"
        className={cx(styles.navbarItem, styles.location, "visible-desktop")}
        // handleClick={show}
      >
        <img src={IconMap} className={styles.mapMark} alt="icon" />
        <span>{t("menu.location")}</span>
        <img src={IconAngleDown} className={styles.angleDown} alt="icon" />
      </Button>
      {isHomepage ? <HomepageMenu /> : <InnerPageMenu />}
      <a
        href="tel:+420774137352"
        className={cx(styles.navbarItem, styles.contacts, "visible-desktop")}
      >
        <img src={IconPhone} className={styles.iconPhone} alt="icon" />
        <span className="visible-desktop">
          <span className={styles.phoneNumber}>+420 774 137 352</span>
          <br />
          <span className={styles.additionalInfo}>
            <p style={{ textAlign: "right" }}>
              <span className={styles.days}>{t("menu.days")}</span> 10:00 -
              12:00
              <br />
              13:00 - 18:00
            </p>
          </span>
        </span>
      </a>
      <div className={cx(styles.navbarItem, styles.langSwitcher)}>
        <LanguagePicker isLight={props.isLight} />
      </div>
      <div
        className={styles.navbarItem}
        onClick={openMobileMenu()}
        id="mobile-menu-link"
      >
        <img src={menuVisible ? IconClose : IconMenu} alt="icon" />
      </div>
    </div>
  )
}
