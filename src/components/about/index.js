import cx from 'classnames';
import React from 'react';

import { Container } from '../container';
import styles from './about.module.css';

export const About = () => (
  <section className={styles.about}>
    <Container>
      <h3 className={cx(styles.title, "sectionTitle -light")}>
        Proč NutritionPro?
      </h3>
      <ul className={styles.aboutList}>
        <li>Jídelníček na míru tvému tělu a cílům</li>
        <li>Přesně stanovené makronutrienty</li>
        <li>Stálý dohled výživového poradce</li>
        <li>Kvalitní prémiové suroviny</li>
        <li>Menu z 300 jídel</li>
        <li>Dovoz po Praze zdarma</li>
      </ul>
    </Container>
  </section>
)
