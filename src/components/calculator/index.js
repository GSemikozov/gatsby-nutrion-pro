import cx from 'classnames';
import React, { useState } from 'react';

import { Button } from '../button';
import { Container } from '../container';
import { MainForm } from '../forms/main-form';
import { useModal } from '../modal';
import { Price } from '../price';
import styles from './calculator.module.css';

const ModalForm = ({ amount, price }) => (
  <>
    <h3 className={styles.formHeading}>Nezavazna objednavka</h3>
    <MainForm amount={amount} price={price} />
  </>
)

export const Calculator = ({ id }) => {
  const { show, RenderModal } = useModal()
  const [price, setPrice] = useState(0)
  const [amount, setAmount] = useState(0)
  const [amountTo, setAmountTo] = useState(0)

  const handleAmountChange = ({ target }) => {
    setAmount(target.value)
  }

  const handlePriceCalc = () => {
    const price = getPrice(amount)
    setAmountTo(amount)
    setPrice(price)
  }

  function getPrice(amount) {
    let priceValue = 0
    switch (true) {
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
    }
    return priceValue
  }

  return (
    <section className={styles.calculatorSection} id={id && id}>
      <Container className={styles.container}>
        <h3 className={cx("sectionTitle", styles.title)}>
          Spočítej si cenu svého programu
        </h3>
        <div className={styles.calculator}>
          <div className={cx(styles.column, styles.center)}>
            <div className={styles.growBox}>
              <label className={styles.label}>
                Vím svůj denní kalorický příjem
              </label>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  name="kal-amount"
                  className={styles.input}
                  value={amount}
                  onChange={handleAmountChange}
                />
                <span className={styles.inputGroupBtn}>kcal</span>
              </div>
            </div>
            <h4 className={styles.columnTitle}>
              Neznáš svůj potřebný denní kalorický příjem?
            </h4>
            <Button
              type="outline"
              className={styles.button}
              handleClick={handlePriceCalc}
            >
              Vypočitat příjem
            </Button>
          </div>
          <div className={styles.column}>
            <div className={styles.priceBox}>
              <Price amount={amountTo} price={price} />
              <Button
                type="primary"
                className={styles.button}
                handleClick={show}
              >
                Nezávazně objednat
              </Button>
              <RenderModal>
                <ModalForm amount={amountTo} price={price} />
              </RenderModal>
              <div id="root" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
