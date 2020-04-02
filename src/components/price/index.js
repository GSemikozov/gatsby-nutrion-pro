import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import styles from './price.module.css';

function getDiscountPrice(price, plan) {
  const discount =
    plan && plan === "2 měsíce" ? 5 : plan && plan === "3 měsíce" ? 8 : null
  return (price - price * (discount / 100)).toFixed()
}

function getDiscountPricePerPortion(price, plan) {
  const discountPortion =
    plan && plan === "2 měsíce" ? 5 : plan && plan === "3 měsíce" ? 8 : null
  return ((price - price * (discountPortion / 100)).toFixed() / 5).toFixed()
}

export const Price = ({ price = 0, plan = null }) => {
  const [discountPrice, setDiscountPrice] = useState(null)
  const [discountPortionPrice, setDiscountPortionPrice] = useState(null)

  useEffect(() => {
    const discountPriceValue = getDiscountPrice(price, plan)
    setDiscountPrice(discountPriceValue)
    const discountPortionPriceValue = getDiscountPricePerPortion(price, plan)
    setDiscountPortionPrice(discountPortionPriceValue)
  }, [price, plan])

  return (
    <div className={styles.price}>
      <div className={styles.priceCol}>
        <h5 className={styles.priceTitle}>Jaké je tvojé pohlaví?</h5>
        <p className={styles.priceText}>včetně dovozu</p>
      </div>
      <div className={styles.priceCol}>
        <div className={styles.priceValue}>
          od <span>{price}</span> Kč
        </div>
      </div>
    </div>
  )
}
