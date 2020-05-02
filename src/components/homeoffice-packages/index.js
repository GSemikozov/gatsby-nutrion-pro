import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import { Button } from '../button';
import { Container } from '../container';
import styles from './homeoffice-packages.module.css';
import icon1 from './icons/icon1.svg';
import icon2 from './icons/icon2.svg';

export const HomeofficePackages = () => (
  <section className={cx("section", styles.section)}>
    <Container>
      <h3 className={cx("sectionTitle text-center", styles.title)}>
        Speciální homeoffice balíček
      </h3>
      <p className={styles.subtitle}>
        “Obědy a večeře” s dovozem od{" "}
        <strong className={styles.green}>110 Kč / porce</strong>
      </p>
      <div className={styles.homeofficePackages}>
        <div className={styles.homeofficePackage}>
          <div className={styles.homeofficePackageRibbon}>125 Kč</div>
          <div className={styles.homeofficePackageTop}>
            <img
              src={icon1}
              className={styles.homeofficePackageIcon}
              alt="icon"
            />
          </div>
          <div className={styles.homeofficePackageBottom}> Pro jednoho</div>
        </div>
        <div className={styles.homeofficePackage}>
          <div className={styles.homeofficePackageRibbon}>110 Kč</div>
          <div className={styles.homeofficePackageTop}>
            <img
              src={icon2}
              className={styles.homeofficePackageIcon}
              alt="icon"
            />
          </div>
          <div className={styles.homeofficePackageBottom}> Pro par</div>
        </div>
        <div className={cx(styles.homeofficePackage, styles.hiddenXS)}>
          <div className={styles.homeofficePackageTop}>
            Máte zájem o homeoffice balíček pro více lidi?
          </div>
          <div className={styles.homeofficePackageBottom}>
            <Button type="outline" className={styles.button}>
              <Link to="/">Mám zájem</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
)
