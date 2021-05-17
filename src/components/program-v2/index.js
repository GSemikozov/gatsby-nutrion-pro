import cx from 'classnames';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Trans, useTranslation } from 'react-i18next';

import { AnimatedWrapper } from '../animated-wrapper';
import { Container } from '../container';
import { LocalizedLink } from '../localized-link';
import styles from './program.module.css';

export const Program2 = ({ id }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.section} id={id && id}>
      <Container isWide={true}>
        <AnimatedWrapper>
          <h3 className="fancyUnderlineText fancyUnderlineText--orange sectionTitleNew text-center">
            <Trans i18nKey="home.program.title">
              <span>Vyber si</span> svůj program
            </Trans>
          </h3>
          <div className={styles.sectionList}>
            <LocalizedLink to="/products/product-1">
              <div className={styles.sectionListItem}>
                <div
                  className={cx(styles.sectionListImg, styles.sectionListImg1)}
                ></div>
                <div className={styles.title}>
                  <span>{t("home.program.program1title")}</span>
                </div>
              </div>
            </LocalizedLink>

            <LocalizedLink to="/products/product-2">
              <div className={styles.sectionListItem}>
                <div
                  className={cx(styles.sectionListImg, styles.sectionListImg2)}
                ></div>
                <div className={styles.title}>
                  <span>{t("home.program.program2title")}</span>
                </div>
              </div>
            </LocalizedLink>

            <LocalizedLink to="/products/product-3">
              <div className={styles.sectionListItem}>
                <div
                  className={cx(styles.sectionListImg, styles.sectionListImg3)}
                ></div>
                <div className={styles.title}>
                  <span>{t("home.program.program3title")}</span>
                </div>
              </div>
            </LocalizedLink>

            <LocalizedLink to="/products/product-4">
              <div className={styles.sectionListItem}>
                <div
                  className={cx(styles.sectionListImg, styles.sectionListImg4)}
                ></div>
                <div className={styles.title}>
                  <span>{t("home.program.program4title")}</span>
                </div>
              </div>
            </LocalizedLink>
          </div>
          <p>{t("home.program.programDesc")}</p>
        </AnimatedWrapper>
      </Container>
    </div>
  )
}
