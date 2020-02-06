import React from 'react';

import { useSmoothScroll } from '../../../hooks/useSmoothScroll';
import IconClose from '../icons/icon-close.svg';
import IconPhone from '../icons/icon-phone.svg';
import styles from './mobile-menu.module.css';

// import { ContactForm } from "./contactForm"

const MobileMenu = props => {
  const scroll = useSmoothScroll()

  const onItemClick = selector => () => {
    props.onCloseMobileMenu()
    selector && scroll.animateScroll(document.getElementById(selector))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <button
            type="button"
            className={styles.menuItem}
            onClick={onItemClick()}
          >
            <img src={IconClose} alt="icon" />
          </button>
        </div>

        <div className={styles.menuItems}>
          <button
            type="button"
            className={styles.menuItem}
            onClick={onItemClick("whoWeAre")}
          >
            Kdo jsme a jak to funguje
          </button>
          <button
            type="button"
            className={styles.menuItem}
            onClick={onItemClick("menu")}
          >
            Jídelníček
          </button>
          <button
            type="button"
            className={styles.menuItem}
            onClick={onItemClick("reviews")}
          >
            Recenze zákazníků
          </button>
          <button
            type="button"
            className={styles.menuItem}
            onClick={onItemClick("faq")}
          >
            FAQ
          </button>
        </div>

        <div className={styles.formHeader}>
          Objednejte si 5 denní demo program
          <br />
          za 480Kč na den včetně dopravy
        </div>

        <div style={{ padding: "0 25px" }}>
          form will be here
          {/* <ContactForm mobileMenu /> */}
        </div>

        <div className={styles.phoneBlock}>
          <img className={styles.telIcon} src={IconPhone} alt="icon" />
          <div>
            <a className={styles.tel} href="tel:+420774137352">
              +420 774 137 352
            </a>
            <div className={styles.phoneNotice}>ZAVOLEJTE MI</div>
          </div>
        </div>

        <div className={styles.footer}>© NUTRITIONPRO 2019</div>
      </div>
    </div>
  )
}

export default MobileMenu
