import React from 'react';
import cx from 'classnames';

import { Container } from '../container';
import styles from './program.module.css';


export const Program = () => {
  return (
    <div className={styles.section}>
      <Container>
        <h3 className="fancyUnderlineText fancyUnderlineText--orange sectionTitleNew text-center">
          <span>Vyber si</span> svůj program
        </h3>
        <div className={styles.sectionList}>
          <div className={styles.sectionListItem}>
            <div className={cx(styles.sectionListImg, styles.sectionListImg1)}></div>            
            <div className={styles.title}>
            <span>Hubnoucí program</span>
            </div>
          </div>

          <div className={styles.sectionListItem}>
          <div className={cx(styles.sectionListImg, styles.sectionListImg2)}></div>
            <div className={styles.title}>
            <span>Nabírací program</span>
            </div>
          </div>

          <div className={styles.sectionListItem}>
          <div className={cx(styles.sectionListImg, styles.sectionListImg3)}></div>
            <div className={styles.title}>
            <span>Udržovací program</span>
            </div>
          </div>

          <div className={styles.sectionListItem}>
          <div className={cx(styles.sectionListImg, styles.sectionListImg4)}></div>
            <div className={styles.title}>
            <span>Office pack</span>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}