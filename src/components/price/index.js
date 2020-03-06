import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import styles from './price.module.css';

function getDiscountPrice(price, plan) {
  console.log(plan)
  const discount =
    plan && plan === "1 měsic" ? 5 : plan && plan === "2 měsice" ? 8 : null
  return (price - price * (discount / 100)).toFixed()
}

export const Price = ({ price = 0, plan = null }) => {
  const [discountPrice, setDiscountPrice] = useState(null)

  useEffect(() => {
    const discountPriceValue = getDiscountPrice(price, plan)
    setDiscountPrice(discountPriceValue)
  }, [price, plan])

  return (
    <div className={styles.price}>
      <p>Cena za den</p>
      <h3
        className={styles.priceValue}
        style={
          plan && plan !== "Demo"
            ? { textDecoration: "line-through", color: "red", fontSize: "20px" }
            : null
        }
      >
        <span>{price}</span> Kč
      </h3>
      {plan && plan !== "Demo" && (
        <h3 className={styles.priceValue}>
          <span>{discountPrice}</span> Kč
        </h3>
      )}
      <p className={cx(styles.priceTextLight)}>{price / 5} Kč / porce</p>
    </div>
  )
}
