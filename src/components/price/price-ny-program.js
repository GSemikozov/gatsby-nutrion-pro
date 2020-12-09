import cx from 'classnames';
import { FastField } from 'formik';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './price.module.css';

function getDiscountPrice(price, plan) {
  const discount =
    plan && plan === "2 měsíce" ? 5 : plan && plan === "3 měsíce" ? 8 : null
  return (price - price * (discount / 100)).toFixed()
}

function getDiscountPricePerPortion(price, plan) {
  const discountPortion = plan && plan === "2 týdny" ? 5 : plan
  return ((price - price * (discountPortion / 100)).toFixed() / 5).toFixed()
}

export const PriceNY = ({ price = 0, oldPrice, plan = null }) => {
  const [discountPrice, setDiscountPrice] = useState(null)
  const [discountPortionPrice, setDiscountPortionPrice] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    const discountPriceValue = getDiscountPrice(price, plan)
    setDiscountPrice(discountPriceValue)
    const discountPortionPriceValue = getDiscountPricePerPortion(price, plan)
    setDiscountPortionPrice(discountPortionPriceValue)
  }, [price, oldPrice, plan])

  return (
    <div className={styles.price}>
      <div className={styles.priceCol}>
        <h5 className={styles.priceTitle}>Celková akční cena voucheru</h5>
        <p className={styles.priceText}>{t("forms.priceTitlePart2")}</p>
      </div>
      <div className={cx(styles.priceCol, styles.priceColRight)}>
        <div className={styles.priceValue}>
          <span id="price">{price ? price : "2500"}</span> Kč
        </div>
        <div style={{ textDecoration: "line-through" }}>
          {oldPrice && `${oldPrice} Kč`}
        </div>
      </div>
    </div>
  )
}
