import cx from 'classnames';
import React from 'react';

import styles from './price.module.css';

export const Price = () => (
  <div className={styles.price}>
    <p>Cena za den</p>
    <h3 className={styles.priceValue}>
      <span>567</span> Kč
    </h3>
    <p className={cx(styles.priceTextLight)}>81 Kč / porce</p>
  </div>
)
