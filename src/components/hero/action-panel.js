import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import img from '../../pages/imunita/images/1.svg';
import { Counter } from '../counter';
import styles from './action-panel.module.css';

export const ProgramPanel = () => (
  <a href="/imunita" className={styles.programPanel}>
    <div className={styles.programPanelCol}>
      <div className={cx(styles.programPanelColMob)}>Pomáháme</div>
      <Counter horizontal />
    </div>
    <div className={cx(styles.programPanelCol, styles.programPanelColDesktop)}>
      <div className={styles.programPanelInner}>
        <div className={styles.text}>Pomáháme</div>
        <img src={img} className={styles.icon} alt="icon" />
      </div>
    </div>
  </a>
)
