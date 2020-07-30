import cx from 'classnames';
import React, { useState } from 'react';

import styles from '../calculator/calculator.module.css';
import { Container } from '../container';
import { OrderForm } from '../forms/order-form';
import { MainForm } from '../forms/main-form';
import styles2 from './calc.module.css';
import { Button } from '../button'

export const Order = ({ id, className }) => {
  const [form, setForm] = useState("calc")

  return (
    <section 
      // style={{
      //   backgroundColor: 'var(--color-grey-light)',
      //   padding: '24px 0',
      //   position: 'relative',
      //   overflow: 'hidden',
      //   width: '100%'
      // }}
      className={cx(styles.calculatorSection, className)}
      id={id && id}
    >
      <Container>
        <h3 className={cx("sectionTitle", styles.title, styles2.title)}>
          Objednat teď
        </h3>
        <div className={cx(styles.typeSelector)}>
          <Button
            name="submit"
            type="primary"
            size="md"
            className={cx(form === "calc" ? styles.selectedButton : styles.selectButton)}
            handleClick={() => setForm("calc")}
          >
            Zavolejte mi 
          </Button>
          <Button
            name="submit"
            type="primary"
            size="md"
            className={cx(form === "order" ? styles.selectedButton : styles.selectButton)}
            handleClick={() => setForm("order")}
          >
          Objednat online
          </Button>
        </div>
        
        {form === 'calc' && (
          <MainForm />
        )}
        {form === 'order' && (
          <OrderForm />
        )}
      </Container>
    </section>
  )
}
