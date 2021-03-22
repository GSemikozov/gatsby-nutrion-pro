import React from 'react';

import { Container } from '../container';
import styles from './delivery.module.css';
import mapImgMob from './NP_web_assets/map-mob.svg';
import mapImg from './NP_web_assets/map.svg';

export const DeliverySection = () => (
  <section className={styles.delivery}>
    <Container isWide={true}>
      <h3 className="fancyUnderlineText sectionTitleNew text-center">
        Doprava po Praze <span>zdarma</span>
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
              Rozvoz až k tobě ke dvěřím
            </h3>
            <ul className={styles.deliveryList}>
              <li>Rozvážíme po celé Praze zcela zadarmo.</li>
              <li>Vyber si přesný čas doručení (2hodinová časová okna).</li>
              <li>
                Možnost změnit místo doručení (Stačí nám napsat v den rozvozu do
                15 hodin).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
)
