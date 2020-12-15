import cx from 'classnames';
import { FastField } from 'formik';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './price.module.css';

const days = {
  "2 týdny": {
    5: 10,
    6: 12,
  },
  Měsíc: {
    5: 20,
    6: 24,
  },
  "Dva měsíce": {
    5: 40,
    6: 48,
  },
}

function getDiscountPrice(price, plan) {
  const discount =
    plan && plan === "2 měsíce" ? 5 : plan && plan === "3 měsíce" ? 8 : null
  return (price - price * (discount / 100)).toFixed()
}

function getDiscountPricePerPortion(price, plan, program, week) {
  const discountPortion = plan && plan === "2 týdny" ? 5 : plan
  return ((price - price * (discountPortion / 100)).toFixed() / 5).toFixed()
}

export const Price = ({ price = 0, plan = null, program, week }) => {
  const [discountPrice, setDiscountPrice] = useState(null)
  const [discountPortionPrice, setDiscountPortionPrice] = useState(null)

  const { t } = useTranslation()

  useEffect(() => {
    const discountPriceValue = getDiscountPrice(price, plan)
    setDiscountPrice(discountPriceValue)
    const discountPortionPriceValue = getDiscountPricePerPortion(price, plan)
    setDiscountPortionPrice(discountPortionPriceValue)
  }, [price, plan])

  return (
    <>
      <div className={styles.price}>
        <div className={styles.priceCol}>
          <h5 className={styles.priceTitle}>
            {t("forms.pricePerDayLabelPart1")}
          </h5>
          <p className={styles.priceText}>{t("forms.pricePerDayLabelPart2")}</p>
        </div>
        <div className={cx(styles.priceCol, styles.priceColRight)}>
          <div className={styles.priceValue}>
            <span id="price">{price ? price : "420"}</span> Kč
          </div>
        </div>
      </div>
      <br />
      <div className={styles.price}>
        <div className={styles.priceCol}>
          <h5 className={styles.priceTitle}>{t("forms.priceLabel")}</h5>
          {/* <p className={styles.priceText}>včetně dovozu</p> */}
        </div>
        <div className={cx(styles.priceCol, styles.priceColRight)}>
          <div className={styles.priceValue}>
            <span id="price">
              {price ? price * days[program][week] : 420 * days[program][week]}
            </span>{" "}
            Kč
          </div>
        </div>
      </div>
    </>
  )
}
