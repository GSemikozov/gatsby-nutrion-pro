import cx from 'classnames';
import React from 'react';

import { Button2 } from '../button2';
import { Container } from '../container';
import CarouselPlaceholder from './hero-carousel-placeholder.svg';
import styles from './hero3.module.css';

export const Hero3 = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroInner}>
          <div className={styles.heroInfo}>
            <h1 className={styles.heroTitle}>Speciální krabičková dieta</h1>
            <div className={styles.buttons}>
              <Button2 className={styles.button}>
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
                    stroke="#353643"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5625"
                  />
                </svg>
                Spočitat cenu
              </Button2>
              <Button2 className={styles.button} color="primary">
                Objednat online
              </Button2>
            </div>
          </div>
          <div className={styles.heroCarouselWrapper}>
            <div className={styles.heroCarousel}>
              <img
                src={CarouselPlaceholder}
                style={{ maxWidth: "100%" }}
                alt="placeholder"
              />
              <div className={styles.heroCarouselHiddenText}>
                <strong>carousel</strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
