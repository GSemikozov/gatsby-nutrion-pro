import cx from 'classnames';
import { FastField } from 'formik';
import React, { useEffect, useState } from 'react';

import styles from './summary.module.css';

const days = {
  "2 týdny": {
    5: 10,
    6: 12,
  },
  "Měsíc": {
    5: 20,
    6: 24,
  },
  "Dva měsíce": {
    5: 40,
    6: 48,
  }
}


export const Summary = ({ kcal, plan, program, week, menu, price }) => {

  return (
    <>
    <div className={styles.priceWrap}>
      {/* <div className={styles.priceDayTitle}>
        <h5>kCal</h5>
      </div> */}
      {/* <div className={styles.priceDayValue}>
        <span id="price">{kcal}</span> kCal
      </div> */}
      <div className={styles.summary}>
        <div className={styles.fillField}>
          <span className={styles.summaryTitle}>Tvůj cíl</span>
          <span className={styles.summaryPrice} id="price">{plan}</span>
        </div>
        <div className={styles.blankField}>
          <span className={styles.summaryTitle}>Program</span>
          <span className={styles.summaryPrice} id="price">{program}</span>
        </div>
        <div className={styles.fillField}>
          <span className={styles.summaryTitle}>Délka týdne</span>
          <span className={styles.summaryPrice} id="price">{week === 5 ? 'Po-Pá' : 'Po-So'}</span>
        </div>
        <div className={styles.blankField}>
          <span className={styles.summaryTitle}>Počet jídel</span>
          <span className={styles.summaryPrice} id="price">{menu}</span>
        </div>
        <div className={styles.fillField}>
          <span className={styles.summaryTitle}>kCal</span>
          <span className={styles.summaryPrice} id="price">{kcal}</span>
        </div>
        <div className={styles.blankField}>
          <span className={styles.summaryTitle}>Celkem</span>
          <span className={styles.summaryPrice} id="price">{price ? price * days[program][week] : 420 * days[program][week]} Kč</span>
        </div>
      </div>

    </div>
    </>
  )
}
