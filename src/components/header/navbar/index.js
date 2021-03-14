import cx from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useLangContext } from '../../../utils/lang';
import { useModal } from '../../modal';
import LanguageMenu, { LanguagePicker } from './lang-menu';
import styles from './navbar.module.css';

// import IconClose from '../icons/menu-burger-icon.svg';
// import IconMenu from '../icons/menu-burger-icon.svg';
// import { Link } from 'gatsby';
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

  return (
    <div className={styles.navbar}>
      <a href="tel:+1234567890" className={styles.navbarItem}>
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
      </a>
      <div className={cx(styles.navbarItem, styles.langSwitcher)}>
        <LanguagePicker isLight={props.isLight} />
      </div>
      <div
        className={styles.navbarItem}
        onClick={openMobileMenu()}
        id="mobile-menu-link"
      >
        {/* <img src={menuVisible ? IconClose : IconMenu} alt="icon" /> */}
        <svg
          fill="none"
          height="40"
          viewBox="0 0 40 40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="a">
            <path
              d="m0 0h36.2227v19.0919h-36.2227z"
              transform="matrix(.70710678 -.70710678 .70710678 .70710678 0 25.6133)"
            />
          </clipPath>
          <g
            clipPath="url(#a)"
            stroke="#2c3e50"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.88817"
          >
            <path d="m6.93555 21.1079 13.35135-13.35137" />
            <path d="m18.3799 32.552 13.3514-13.3514" />
            <path d="m7.88965 31.5984 22.88805-22.88809" />
          </g>
        </svg>
      </div>
    </div>
  )
}
