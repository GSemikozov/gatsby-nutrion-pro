import cx from 'classnames';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Button } from '../button';
import styles from '../calculator/calculator.module.css';
import { Container } from '../container';
import { MainForm } from '../forms/main-form';
import { OrderForm } from '../forms/order-form';
import styles2 from './calc.module.css';

export const Order = ({ id, className }) => {
  const [form, setForm] = useState("calc")
  const { t } = useTranslation()

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
          <Trans i18nKey="home.order.title">
            Objednat <span>teď</span>
          </Trans>
        </h3>
        <div className={cx(styles.typeSelector)}>
          <Button
            name="submit"
            type="primary"
            size="md"
            className={cx(
              form === "calc" ? styles.selectedButton : styles.selectButton
            )}
            handleClick={() => setForm("calc")}
          >
            {t("home.order.tab1Btn")}
          </Button>
          <Button
            name="submit"
            type="primary"
            size="md"
            className={cx(
              form === "order" ? styles.selectedButton : styles.selectButton
            )}
            handleClick={() => setForm("order")}
          >
            {t("home.order.tab2Btn")}
          </Button>
        </div>

        {form === "calc" && <MainForm />}
        {form === "order" && <OrderForm />}
      </Container>
    </section>
  )
}
