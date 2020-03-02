import cx from 'classnames';
import React from 'react';

import { handleMenuLinkClick } from '../../../helpers';
import IconCalculator from '../icons/icon-calculator.svg';
import IconClipboard from '../icons/icon-clipboard.svg';
import IconConsultation from '../icons/icon-consultation.svg';
import IconMenu from '../icons/icon-menu.svg';
import styles from './mobile-menu.module.css';

// import IconClose from '../icons/icon-close.svg';
// import IconPhone from '../icons/icon-phone.svg';
// import { ContactForm } from "./contactForm"

export const MobileMenu = ({ menuVisible, menuLinks, onCloseMobileMenu }) => (
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
        {menuLinks.map((link, i) => (
          <a
            key={link.name}
            href={link.link}
            className={styles.menuItem}
            onClick={e => {
              onCloseMobileMenu()
              handleMenuLinkClick(link, e)
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
            {link.name}
          </a>
        ))}
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
