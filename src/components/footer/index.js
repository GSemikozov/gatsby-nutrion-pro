import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import { Container } from '../container';
import { Logo } from '../header/logo';
import styles from './footer.module.css';
import fb from './icons/facebook.svg';
import user from './icons/icon-user.svg';
import instagram from './icons/instagram.svg';
import vk from './icons/vk.svg';

export const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.footerCols}>
        <div className={styles.footerCol}>
          <Link to="/">
            <Logo />
          </Link>
          <div className={styles.socials}>
            <a href="#">
              <img src={fb} alt="icon" />
            </a>
            <a href="#">
              <img src={instagram} alt="icon" />
            </a>
            <a href="#">
              <img src={vk} alt="icon" />
            </a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={cx(styles.footerMenu, styles.hideXS)}>
            <a href="#">Jídelníček</a>
            <a href="#">Nejčastější otázky</a>
            <a href="#">3Kariéra</a>
          </div>
          <p>
            OBCHODNÍ PODMÍNKY{" "}
            <span className={styles.hideXS}>
              OBCHODNÍ PODMÍNKY ZADÁNÍM TELEFONÍHO ČÍSLA SOUHLASÍTE SE
              ZPRACOVÁNÍM OSOBNÍCH ÚDAJŮ
            </span>
          </p>
          <p>© 2020 NUTRITIONPRO</p>
        </div>
        <div className={styles.footerCol}>
          <a href="#" className={styles.hideXS}>
            <img src={user} alt="icon" />
          </a>
          <p>+420 774 137 352</p>
          <p>PO - PÁ 10:00 - 18:00</p>
        </div>
      </div>
    </Container>
  </footer>
)
