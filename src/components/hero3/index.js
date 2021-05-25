import cx from 'classnames';
import React, { useCallback, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useHomepageTabsContext } from '../../contexts/HomepageTabsContext';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { Button2 } from '../button2';
import { Container } from '../container';
import { HeroCarousel } from '../hero-carousel';
import { HeroSvgCarousel } from '../hero-svg-carousel';
import CarouselPlaceholder from './hero-carousel-placeholder.svg';
import styles from './hero3.module.css';

export const Hero3 = () => {
  const scroll = useSmoothScroll()
  const { activeTab, dispatchAction } = useHomepageTabsContext()
  const { t } = useTranslation()

  const openCalcForm = selector => {
    dispatchAction({ type: "OPEN_TAB1" })
    scroll.animateScroll(document.getElementById(selector))
  }

  const openOrderForm = selector => {
    dispatchAction({ type: "OPEN_TAB2" })
    scroll.animateScroll(document.getElementById(selector))
  }

  return (
    <section className={styles.hero} style={{ height: "880px" }}>
      <Container isWide={true}>
        <div className={styles.heroInner}>
          <div className={styles.heroInfo}>
            <h1 className={styles.heroTitle}>{t("home.hero.title")}</h1>
            <div className={styles.buttons}>
              <Button2
                color="primary"
                className={styles.button}
                handleClick={e => {
                  openCalcForm("calculator2")
                }}
              >
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
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5625"
                  />
                </svg>
                {t("home.hero.cta-2")}
              </Button2>
              <Button2
                className={styles.button}
                color="secondary"
                handleClick={() => openOrderForm("calculator")}
              >
                {t("home.hero.cta-1")}
              </Button2>
            </div>
          </div>
          <div className={styles.heroCarouselWrapper}>
            <div className={styles.heroCarousel}>
              {/* <img
                src={CarouselPlaceholder}
                style={{ maxWidth: "100%" }}
                alt="placeholder"
              /> */}
              {/* <HeroSvgCarousel /> */}
              <HeroCarousel />
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
