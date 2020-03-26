import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import styles from './counter.module.css';

export const Counter = ({ horizontal }) => (
  <div
    className={cx(styles.counterWrap, {
      [styles.counterWrapHorizontal]: horizontal,
    })}
  >
    <div className={styles.counter}>
      <div className={styles.counterItem}>
        0 <span className={styles.counterItemDivider}></span>
      </div>
      <div className={styles.counterItem}>
        0 <span className={styles.counterItemDivider}></span>
      </div>
      <div className={styles.counterItem}>
        5 <span className={styles.counterItemDivider}></span>
      </div>
      <div className={styles.counterItem}>
        1 <span className={styles.counterItemDivider}></span>
      </div>
    </div>
    <div className={styles.counterText}>Rozdaných jídel zdravotníkům</div>
  </div>
)
