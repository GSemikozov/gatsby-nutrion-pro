import cx from 'classnames';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Container } from '../container';
import styles from './about.module.css';
import IconDNA from './icons/icon-ui-dna.svg';
import IconMeal from './icons/icon-ui-meal.svg';
import IconPremium from './icons/icon-ui-premium.svg';
import IconResearcher from './icons/icon-ui-researcher.svg';
import IconSalad from './icons/icon-ui-salad.svg';
import IconTruck from './icons/icon-ui-shipping-truck.svg';

export const About = () => {
  const { t } = useTranslation()
  return (
    <section className={styles.about}>
      <Container className={styles.container}>
        <h3 className={cx(styles.title, "sectionTitle -light")}>
          {t("general.about.title")}
        </h3>
        <ul className={cx(styles.aboutList, "visible-mobile")}>
          <li>
            <Trans i18nKey="general.about.point1">
              Jídelníček na míru
              <span /> tvému tělu a cílům
            </Trans>
          </li>
          <li>Přesně stanovené makronutrienty</li>
          <li>Stálý dohled výživového poradce</li>
          <li>
            <Trans i18nKey="general.about.point3">
              Kvalitní
              <span /> prémiové suroviny
            </Trans>
          </li>
          <li>
            <Trans i18nKey="general.about.point2">
              Menu z
              <span /> 300 jídel
            </Trans>
          </li>
          <li>
            <Trans i18nKey="general.about.point4">
              Dovoz po
              <span /> Praze zdarma
            </Trans>
          </li>
        </ul>
        <div className={cx(styles.aboutOptions, "visible-desktop")}>
          <div className={styles.aboutOption}>
            <img src={IconMeal} className={styles.aboutOptionImg} alt="icon" />
            <h5 className={styles.aboutOptionTitle}>
              <Trans i18nKey="general.about.point1">
                Jídelníček na míru
                <br /> tvému tělu a cílům
              </Trans>
            </h5>
          </div>
          <div className={styles.aboutOption}>
            <img src={IconSalad} className={styles.aboutOptionImg} alt="icon" />
            <h5 className={styles.aboutOptionTitle}>
              <Trans i18nKey="general.about.point2">
                Menu z
                <br /> 300 jídel
              </Trans>
            </h5>
          </div>
          <div className={styles.aboutOption}>
            <img
              src={IconPremium}
              className={styles.aboutOptionImg}
              alt="icon"
            />
            <h5 className={styles.aboutOptionTitle}>
              <Trans i18nKey="general.about.point3">
                Kvalitní
                <br /> prémiové suroviny
              </Trans>
            </h5>
          </div>
          <div className={styles.aboutOption}>
            <img src={IconTruck} className={styles.aboutOptionImg} alt="icon" />
            <h5 className={styles.aboutOptionTitle}>
              <Trans i18nKey="general.about.point4">
                Dovoz po
                <br /> Praze zdarma
              </Trans>
            </h5>
          </div>
        </div>
      </Container>
    </section>
  )
}
