import cx from 'classnames';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../button';
import styles from '../calculator/calculator.module.css';
import { Container } from '../container';
import { MainForm } from '../forms/main-form';
import { OrderForm } from '../forms/order-form';
import styles2 from './order-form2.module.css';

export const Order2 = ({ id, className }) => {
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
      className={cx(styles2.section, className)}
      id={id && id}
    >
      <Container className="text-center">
        <h3 className={cx("sectionTitle", styles.title, styles2.title)}>
          {t("home.order.title")}
        </h3>
        <div className={styles2.formWrapContainer}>
          <div className={styles2.formInnerContainer}>
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
          </div>
        </div>
      </Container>
    </section>
  )
}
