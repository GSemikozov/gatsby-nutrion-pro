import { window } from 'browser-monads';
import cx from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { handleMenuLinkClick } from '../../../helpers';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';
import { useLangContext } from '../../../utils/lang';
import { Button } from '../../button';
import { Button2 } from '../../button2';
import { LocalizedLink } from '../../localized-link';
import IconCalculator from '../icons/icon-calculator.svg';
import IconClipboard from '../icons/icon-clipboard.svg';
import IconConsultation from '../icons/icon-consultation.svg';
import IconMenu from '../icons/icon-menu.svg';
import styles from './mobile-menu.module.css';

// import IconClose from '../icons/icon-close.svg';
// import IconPhone from '../icons/icon-phone.svg';
// import { ContactForm } from "./contactForm"

export const MobileMenu = ({
  menuVisible,
  menuLinks,
  onCloseMobileMenu,
  dispatchAction,
}) => {
  const { lang } = useLangContext()
  const { t } = useTranslation()
  const getLinkTranslation = name => {
    return t(`menu.${name}`)
  }

  const scroll = useSmoothScroll()

  const isHomepage = window.location.pathname === "/"

  const openCalcForm = selector => {
    dispatchAction({ type: "OPEN_TAB1" })
    scroll.animateScroll(document.getElementById(selector))
  }

  const openOrderForm = selector => {
    dispatchAction({ type: "OPEN_TAB2" })
    scroll.animateScroll(document.getElementById(selector))
  }

  const HomepageMenu = () => {
    return menuLinks.map((link, i) => {
      return link.link.startsWith("/#") ? (
        <Button
          key={link.name}
          type="unstyled"
          className={styles.menuItem}
          handleClick={() => {
            onCloseMobileMenu()
            handleMenuLinkClick(link, undefined, lang)
          }}
        >
          {getLinkTranslation(link.name)}
        </Button>
      ) : (
        <LocalizedLink
          key={link.name}
          to={link.link}
          className={styles.menuItem}
          onClick={() => {
            onCloseMobileMenu()
          }}
        >
          {getLinkTranslation(link.name)}
        </LocalizedLink>
      )
    })
  }

  const InnerPageMenu = () => {
    return menuLinks.map((link, i) => {
      return (
        !link.link.startsWith("/#") && (
          <LocalizedLink
            key={link.name}
            to={link.link}
            className={styles.menuItem}
            onClick={() => {
              onCloseMobileMenu()
            }}
          >
            {getLinkTranslation(link.name)}
          </LocalizedLink>
        )
      )
    })
  }

  return (
    <div className={cx(styles.wrapper, { [styles.visible]: menuVisible })}>
      <div className={styles.content}>
        <div className={styles.menuItems}>
          {isHomepage ? <HomepageMenu /> : <InnerPageMenu />}
        </div>
        <div className={styles.info}>
          <div>
            <span className={styles.textGreen}>Po-Pá</span> 10:00 - 18:00
          </div>
          <a href="tel:+420774137352" className={styles.phone}>
            +420 774 137 352
            <svg
              className={styles.phoneIcon}
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
              ></path>
            </svg>
          </a>
        </div>
        {isHomepage && (
          <div className={styles.buttons}>
            <Button2
              color="primary"
              className={styles.button}
              handleClick={e => {
                onCloseMobileMenu()
                openCalcForm("calculator2")
              }}
            >
              <svg
                className={styles.buttonIcon}
                fill="none"
                height="25"
                viewBox="0 0 25 25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m13.5413 15.625h2.0834m-10.41669 6.25v-16.66667c0-.55253.21949-1.08244.61019-1.47314s.92061-.61019 1.47314-.61019h10.41666c.5525 0 1.0824.21949 1.4731.61019s.6102.92061.6102 1.47314v16.66667l-3.125-2.0833-2.0833 2.0833-2.0833-2.0833-2.0834 2.0833-2.08329-2.0833zm4.16666-14.58333h6.25003zm0 4.16663h6.25003z"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5625"
                />
              </svg>
              Spočitat cenu
            </Button2>
            <Button2
              className={styles.button}
              color="secondary"
              handleClick={() => {
                onCloseMobileMenu()
                openOrderForm("calculator")
              }}
            >
              Objednat online
            </Button2>
          </div>
        )}
      </div>
    </div>
  )
}
