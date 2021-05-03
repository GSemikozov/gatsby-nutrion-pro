import cx from 'classnames';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { Container } from '../container';
import { LocalizedLink } from '../localized-link';
import styles from './program.module.css';

export const Program2 = ({ id }) => {
  return (
    <div className={styles.section} id={id && id}>
      <Container isWide={true}>
        <Fade cascade triggerOnce={true}>
          <h3 className="fancyUnderlineText fancyUnderlineText--orange sectionTitleNew text-center">
            <span>Vyber si</span> svůj program
          </h3>
          <div className={styles.sectionList}>
            <LocalizedLink to="/products/product-1">
              <div className={styles.sectionListItem}>
                <div
                  className={cx(styles.sectionListImg, styles.sectionListImg1)}
                ></div>
                <div className={styles.title}>
                  <span>Hubnoucí program</span>
                </div>
              </div>
            </LocalizedLink>

            <LocalizedLink to="/products/product-2">
              <div className={styles.sectionListItem}>
                <div
                  className={cx(styles.sectionListImg, styles.sectionListImg2)}
                ></div>
                <div className={styles.title}>
                  <span>Nabírací program</span>
                </div>
              </div>
            </LocalizedLink>

            <LocalizedLink to="/products/product-3">
              <div className={styles.sectionListItem}>
                <div
                  className={cx(styles.sectionListImg, styles.sectionListImg3)}
                ></div>
                <div className={styles.title}>
                  <span>Udržovací program</span>
                </div>
              </div>
            </LocalizedLink>

            <LocalizedLink to="/products/product-4">
              <div className={styles.sectionListItem}>
                <div
                  className={cx(styles.sectionListImg, styles.sectionListImg4)}
                ></div>
                <div className={styles.title}>
                  <span>Office pack</span>
                </div>
              </div>
            </LocalizedLink>
          </div>
        </Fade>
      </Container>
    </div>
  )
}
