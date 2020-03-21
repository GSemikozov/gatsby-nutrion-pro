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
      <p>Cena za den</p>
      <h3
        className={styles.priceValue}
        style={
          plan && plan !== "1 měsíc"
            ? { textDecoration: "line-through", color: "red", fontSize: "20px" }
            : null
        }
      >
        <span>{price}</span> Kč
      </h3>
      {plan && plan !== "1 měsíc" && (
        <h3 className={styles.priceValue}>
          <span>{discountPrice}</span> Kč
        </h3>
      )}
      <p className={cx(styles.priceTextLight)}>
        {discountPortionPrice} Kč / porce
      </p>
    </div>
  )
}
