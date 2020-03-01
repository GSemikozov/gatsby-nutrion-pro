import React from 'react';

import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { Button } from '../button';
import { Container } from '../container';
import { HeroDesktopImg } from './hero-content-img-desktop';
import { HeroMobileImg } from './hero-content-img-mobile';
import styles from './hero.module.css';

export const Hero = () => {
  const scroll = useSmoothScroll()

  const onLinkClick = selector => () => {
    scroll.animateScroll(document.getElementById(selector))
  }

  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <h1 className={styles.title}>
          Výživový poradce <br /> a šéfkuchař v jednom
        </h1>
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
          <Button
            type="primary"
            className={styles.button}
            handleClick={onLinkClick("calculator")}
          >
            Spočitat cenu
          </Button>
        </div>
      </Container>
    </section>
  )
}
