import cx from 'classnames';
import React from 'react';

import styles from './price.module.css';

export const Price = ({ price = 0, program }) => {

  const daysDecode = {
    "10 dní": 10,
    "20 dní": 20,
  }

  return (
    <>
    <div className={styles.price}>
      <div className={styles.priceCol}>
        <h5 className={styles.priceTitle}>Speciální vánoční sleva </h5>
      </div>
      <div className={cx(styles.priceCol, styles.priceColRight)}>
        <div className={styles.priceValue}>
          <span id="price">{daysDecode[program]}</span>%
        </div>
      </div>

    </div>
    <br />
    <div className={styles.price}>
      <div className={styles.priceCol}>
        <h5 className={styles.priceTitle}>Cena voucheru</h5>
      </div>
      <div className={cx(styles.priceCol, styles.priceColRight)}>
        <div className={styles.priceValue}>
          <span id="price">{price}</span> Kč
        </div>
      </div>

    </div>
    </>
  )
}
