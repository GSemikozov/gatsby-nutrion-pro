import React from 'react';

import { Button } from '../button';
import { Container } from '../container';
import { HeroDesktopImg } from './hero-content-img-desktop';
import { HeroMobileImg } from './hero-content-img-mobile';
import styles from './hero.module.css';

export const Hero = () => (
  <section className={styles.hero}>
    <Container className={styles.container}>
      <h1 className={styles.title}>Výživový poradce a šéfkuchař v jednom</h1>
      <div className="visible-desktop">
        <div className={styles.img}>
          <HeroDesktopImg />
        </div>
      </div>
      <div className="visible-mobile">
        <div className={styles.img}>
          <HeroMobileImg />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button type="primary" className={styles.button}>
          Nezávazná objednávka
        </Button>
      </div>
    </Container>
  </section>
)
