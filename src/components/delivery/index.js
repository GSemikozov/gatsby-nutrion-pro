import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Trans, useTranslation } from 'react-i18next';

import { AnimatedWrapper } from '../animated-wrapper';
import { Container } from '../container';
import styles from './delivery.module.css';
import mapImgMob from './NP_web_assets/map-mob.svg';
import mapImg from './NP_web_assets/map.svg';

export const DeliverySection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.delivery}>
      <Container isWide={true}>
        <AnimatedWrapper>
          <h3 className="fancyUnderlineText sectionTitleNew text-center">
            <Trans i18nKey="home.delivery.title">
              Doprava po Praze <span>zdarma</span>
            </Trans>
          </h3>
          <img src={Map} style={{ display: "block" }} />
          <div className={styles.deliveryContent}>
            <div className={styles.deliveryImages}>
              <img
                src={mapImg}
                className={styles.deliveryImageDesktop}
                alt="car picture"
              />
              <img
                src={mapImgMob}
                className={styles.deliveryImageMobile}
                alt="map picture"
              />
            </div>
            <div className={styles.deliveryListWrap}>
              <div style={{ marginTop: "-50px" }}>
                <h3 className={styles.deliveryListTitle}>
                  {t("home.delivery.listTitle")}
                </h3>
                <ul className={styles.deliveryList}>
                  <li>{t("home.delivery.listOption1")}</li>
                  <li>{t("home.delivery.listOption2")}</li>
                  <li>{t("home.delivery.listOption3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </Container>
    </section>
  )
}
