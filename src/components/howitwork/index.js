import React from 'react';

import { Container } from '../container';
import styles from './how-it-work.module.css';
import icon1 from './icons/icon-howItWork1.svg';
import icon2 from './icons/icon-howItWork2.svg';
import icon3 from './icons/icon-howItWork3.svg';
import icon4 from './icons/icon-howItWork4.svg';
import icon5 from './icons/icon-howItWork5.svg';
import icon6 from './icons/icon-howItWork6.svg';

export const HowItWork = () => (
  <div className={styles.section}>
    <Container>
      <h3 className="sectionTitle -light text-center">Jak to funguje</h3>
      <div className={styles.sectionList}>
        <div className={styles.sectionListItem}>
          <div className={styles.sectionListImg}>
            <img src={icon1} className={styles.icon} alt="icon" />
          </div>
          <div className={styles.title}>Změříme kompozici tvého těla</div>
        </div>
        <div className={styles.sectionListItem}>
          <div className={styles.sectionListImg}>
            <img src={icon2} className={styles.icon} alt="icon" />
          </div>
          <div className={styles.title}>
            Nastavíme tvůj denní příjem podle tvých cílů
          </div>
        </div>

        <div className={styles.sectionListItem}>
          <div className={styles.sectionListImg}>
            <img src={icon3} className={styles.icon} alt="icon" />
          </div>
          <div className={styles.title}>
            Speciální algoritmus sestaví jídelníček na míru
          </div>
        </div>
        <div className={styles.sectionListItem}>
          <div className={styles.sectionListImg}>
            <img src={icon4} className={styles.icon} alt="icon" />
          </div>
          <div className={styles.title}>Jídlo uvaříme</div>
        </div>

        <div className={styles.sectionListItem}>
          <div className={styles.sectionListImg}>
            <img src={icon5} className={styles.icon} alt="icon" />
          </div>
          <div className={styles.title}>Dovezeme po celé Praze zdarma</div>
        </div>
        <div className={styles.sectionListItem}>
          <div className={styles.sectionListImg}>
            <img src={icon6} className={styles.icon} alt="icon" />
          </div>
          <div className={styles.title}>
            Následně dohlédneme na to, abys svého cíle dosáhl
          </div>
        </div>
      </div>
    </Container>
  </div>
)
