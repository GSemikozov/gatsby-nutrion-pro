import cx from 'classnames';
import React from 'react';

import styles from './price.module.css';

export const Price = ({ price = 0, amount = 0 }) => (
  <div className={styles.price}>
    <p>Cena za den</p>
    <h3 className={styles.priceValue}>
      <span>{price}</span> Kč
    </h3>
    <p className={cx(styles.priceTextLight)}>{amount} Kč / porce</p>
  </div>
)
