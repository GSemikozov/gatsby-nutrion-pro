import { window } from 'browser-monads';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { handleMenuLinkClick } from '../../../helpers';
import { useLangContext } from '../../../utils/lang';
import { Button } from '../../button';
import { LocalizedLink } from '../../localized-link';
import { useModal } from '../../modal';
import IconClose from '../icons/burger-menu-icon.svg';
import IconMenu from '../icons/icon-menu.svg';
import IconPhone from '../icons/icon-phone.svg';
import LanguageMenu, { LanguagePicker } from './lang-menu';
import styles from './navbar.module.css';

// import { Link } from 'gatsby';
export const Navbar = ({ menuVisible, menuLinks, location, ...props }) => {
  const { lang } = useLangContext()

  const [menu, setMenu] = useState(menuLinks)

  const openMobileMenu = () => () => {
    props.onCloseMobileMenu()
  }

  const { show, hide, RenderModal } = useModal()

  const { t } = useTranslation()

  const getLinkTranslation = name => {
    return t(`menu.${name}`)
  }

  const isHomepage = window.location.pathname === "/"

  useEffect(() => {
    setMenu(menuLinks)
  }, [menuLinks])

  const HomepageMenu = () => {
    return (
      menuLinks &&
      menuLinks.map((link, i) => {
        return link.link.startsWith("/#") ? (
          <Button
            key={link.name}
            type="unstyled"
            className={cx(styles.navbarItem, "visible-desktop")}
            handleClick={() => handleMenuLinkClick(link, lang)}
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
    return menu ? (
      menu.map((link, i) => {
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
      {/* <a href="tel:+1234567890" className={styles.navbarItem}>
        <svg
          fill="none"
          height="35"
          viewBox="0 0 34 35"
          width="34"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m7.08333 6.27979h5.66667l2.8333 7.08331-3.5416 2.125c1.5172 3.0764 4.007 5.5662 7.0833 7.0834l2.125-3.5417 7.0833 2.8333v5.6667c0 .7514-.2985 1.4721-.8298 2.0035-.5314.5313-1.2521.8298-2.0035.8298-5.526-.3358-10.7381-2.6824-14.6528-6.5972-3.91474-3.9147-6.26138-9.1267-6.5972-14.65278 0-.75145.29851-1.47212.82986-2.00347.53136-.53135 1.25203-.82986 2.00347-.82986"
            stroke="#3dc383"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.125"
          />
        </svg>
      </a> */}
      <div className={styles.navbarCol}>
        {isHomepage ? <HomepageMenu /> : <InnerPageMenu />}
      </div>
      <div className={styles.navbarCol}>
        <span className={cx(styles.additionalInfo, "visible-desktop")}>
          <p style={{ textAlign: "right" }}>
            <span className={styles.days}>{t("menu.days")}</span> 10:00 - 18:00
          </p>
        </span>
        <a
          href="tel:+420774137352"
          className={cx(styles.navbarItem, styles.contacts, "visible-desktop")}
        >
          <span className="visible-desktop">
            <span className={styles.phoneNumber}>+420 774 137 352</span>
          </span>
          {/* <svg
            className={styles.iconPhone}
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13.5" cy="13.5" r="13.5" fill="#3DC383" />
          </svg> */}
          <svg
            className={styles.iconPhone}
            width="34"
            height="35"
            viewBox="0 0 34 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.08333 6.27979H12.75L15.5833 13.3631L12.0417 15.4881C13.5589 18.5645 16.0487 21.0543 19.125 22.5715L21.25 19.0298L28.3333 21.8631V27.5298C28.3333 28.2812 28.0348 29.0019 27.5035 29.5333C26.9721 30.0646 26.2514 30.3631 25.5 30.3631C19.974 30.0273 14.7619 27.6807 10.8472 23.7659C6.93246 19.8512 4.58582 14.6392 4.25 9.11312C4.25 8.36167 4.54851 7.641 5.07986 7.10965C5.61122 6.5783 6.33189 6.27979 7.08333 6.27979"
              stroke="#3DC383"
              strokeWidth="2.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div className={cx(styles.navbarItem, styles.langSwitcher)}>
          <LanguagePicker isLight={props.isLight} />
        </div>
        <div
          className={cx(styles.navbarItem, styles.mobileMenuBtn)}
          onClick={openMobileMenu()}
          id="mobile-menu-link"
        >
          <img src={menuVisible ? IconClose : IconMenu} alt="icon" />
        </div>
      </div>
    </div>
  )
}
