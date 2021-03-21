import cx from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { handleMenuLinkClick } from '../../../helpers';
import { useLangContext } from '../../../utils/lang';
import { Button } from '../../button';
import { LocalizedLink } from '../../localized-link';
import IconCalculator from '../icons/icon-calculator.svg';
import IconClipboard from '../icons/icon-clipboard.svg';
import IconConsultation from '../icons/icon-consultation.svg';
import IconMenu from '../icons/icon-menu.svg';
import styles from './mobile-menu.module.css';

// import IconClose from '../icons/icon-close.svg';
// import IconPhone from '../icons/icon-phone.svg';
// import { ContactForm } from "./contactForm"

export const MobileMenu = ({ menuVisible, menuLinks, onCloseMobileMenu }) => {
  const { lang } = useLangContext()
  const { t } = useTranslation()
  const getLinkTranslation = name => {
    return t(`menu.${name}`)
  }

  return (
    <div className={cx(styles.wrapper, { [styles.visible]: menuVisible })}>
      <div className={styles.content}>
        {/* <div className={styles.topBar}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onItemClick()}
          >
            <img src={IconClose} alt="icon" />
          </button>
        </div> */}

        <div className={styles.menuItems}>
          {menuLinks.map((link, i) => {
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
                <img
                  src={
                    i === 0
                      ? IconClipboard
                      : i === 1
                      ? IconCalculator
                      : i === 2
                      ? IconMenu
                      : i === 3
                      ? IconConsultation
                      : null
                  }
                  alt="icon"
                />
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
                <img
                  src={
                    i === 0
                      ? IconClipboard
                      : i === 1
                      ? IconCalculator
                      : i === 2
                      ? IconMenu
                      : i === 3
                      ? IconConsultation
                      : null
                  }
                  alt="icon"
                />
                {getLinkTranslation(link.name)}
              </LocalizedLink>
            )
          })}
        </div>

        {/* <div className={styles.formHeader}>
          Objednejte si 5 denní demo program
          <br />
          za 480Kč na den včetně dopravy
        </div> */}

        <div style={{ padding: "0 25px" }}>
          {/* form will be here */}
          {/* <ContactForm mobileMenu /> */}
        </div>

        {/* <div className={styles.phoneBlock}>
          <img className={styles.telIcon} src={IconPhone} alt="icon" />
          <div>
            <a className={styles.tel} href="tel:+420774137352">
              +420 774 137 352
            </a>
            <div className={styles.phoneNotice}>ZAVOLEJTE MI</div>
          </div>
        </div>

        <div className={styles.footer}>© NUTRITIONPRO 2019</div> */}
      </div>
    </div>
  )
}
