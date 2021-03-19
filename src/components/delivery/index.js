import React from 'react';

import { Container } from '../container';
import carPicture from './car.png';
import styles from './delivery.module.css';
import mapPicture from './map.jpg';

export const DeliverySection = () => (
  <section className={styles.delivery}>
    <Container>
      <h3 className="fancyUnderlineText sectionTitleNew text-center">
        Doprava po Praze <span>zdarma</span>
      </h3>
      <div className={styles.deliveryContent}>
        <div className={styles.deliveryImages}>
          <img
            src={carPicture}
            className={styles.deliveryImageCar}
            alt="car picture"
          />
          <img
            src={mapPicture}
            className={styles.deliveryImageMap}
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
