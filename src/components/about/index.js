import cx from 'classnames';
import React from 'react';

import { Container } from '../container';
import styles from './about.module.css';
import IconDNA from './icons/icon-ui-dna.svg';
import IconMeal from './icons/icon-ui-meal.svg';
import IconPremium from './icons/icon-ui-premium.svg';
import IconResearcher from './icons/icon-ui-researcher.svg';
import IconSalad from './icons/icon-ui-salad.svg';
import IconTruck from './icons/icon-ui-shipping-truck.svg';

export const About = () => (
  <section className={styles.about}>
    <Container className={styles.container}>
      <h3 className={cx(styles.title, "sectionTitle -light")}>
        Proč NutritionPro?
      </h3>
      <ul className={cx(styles.aboutList, "visible-mobile")}>
        <li>Jídelníček na míru tvému tělu a cílům</li>
        <li>Přesně stanovené makronutrienty</li>
        <li>Stálý dohled výživového poradce</li>
        <li>Kvalitní prémiové suroviny</li>
        <li>Menu z 300 jídel</li>
        <li>Dovoz po Praze zdarma</li>
      </ul>
      <div className={cx(styles.aboutOptions, "visible-desktop")}>
        <div className={styles.aboutOption}>
          <img src={IconMeal} className={styles.aboutOptionImg} alt="icon" />
          <h5 className={styles.aboutOptionTitle}>
            Jídelníček na míru
            <br /> tvému tělu a cílům
          </h5>
        </div>
        <div className={styles.aboutOption}>
          <img src={IconDNA} className={styles.aboutOptionImg} alt="icon" />
          <h5 className={styles.aboutOptionTitle}>
            Přesně stanovené
            <br /> makronutrienty
          </h5>
        </div>
        <div className={styles.aboutOption}>
          <img src={IconSalad} className={styles.aboutOptionImg} alt="icon" />
          <h5 className={styles.aboutOptionTitle}>
            Menu z
            <br /> 300 jídel
          </h5>
        </div>
        <div className={styles.aboutOption}>
          <img src={IconPremium} className={styles.aboutOptionImg} alt="icon" />
          <h5 className={styles.aboutOptionTitle}>
            Kvalitní
            <br /> prémiové suroviny
          </h5>
        </div>
        <div className={styles.aboutOption}>
          <img
            src={IconResearcher}
            className={styles.aboutOptionImg}
            alt="icon"
          />
          <h5 className={styles.aboutOptionTitle}>
            Stálý dohled
            <br /> výživového poradce
          </h5>
        </div>
        <div className={styles.aboutOption}>
          <img src={IconTruck} className={styles.aboutOptionImg} alt="icon" />
          <h5 className={styles.aboutOptionTitle}>
            Dovoz po
            <br /> Praze zdarma
          </h5>
        </div>
      </div>
    </Container>
  </section>
)
