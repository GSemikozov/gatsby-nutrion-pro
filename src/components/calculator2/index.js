import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { Button } from '../button';
import styles from '../calculator/calculator.module.css';
import { Container } from '../container';
import { MainForm } from '../forms/main-form';
import { Price } from '../price';
import styles2 from './calc.module.css';

export const Calculator2 = ({ id, className }) => {
  const [price, setPrice] = useState()
  const [amount, setAmount] = useState(1400)

  const handleAmountChange = ({ target }) => {
    const price = getPrice(target.value)
    setAmount(target.value)
    setPrice(price)
  }

  useEffect(() => {
    const price = getPrice(amount)
    setAmount(amount)
    setPrice(price)
  }, [])

  function getPrice(amount) {
    let priceValue = 0
    switch (true) {
      case amount < 1:
        priceValue = 0
        break
      case amount < 1195:
        priceValue = 420
        break
      case amount < 1434:
        priceValue = 440
        break
      case amount < 1673:
        priceValue = 460
        break
      case amount < 1912:
        priceValue = 480
        break
      case amount < 2151:
        priceValue = 500
        break
      case amount < 2390:
        priceValue = 520
        break
      case amount < 2629:
        priceValue = 540
        break
      case amount < 2868:
        priceValue = 560
        break
      case amount >= 2868:
        priceValue = 580
        break
      default:
        priceValue = 400
    }
    return priceValue
  }

  return (
    <section className={cx(styles.calculatorSection, className)} id={id && id}>
      <Container className={styles.container}>
        <h3 className={cx("sectionTitle", styles.title, styles2.title)}>
          Spočítej si orientační cenu svého programu
        </h3>
        <MainForm amount={amount} price={price} />
      </Container>
    </section>
  )
}
