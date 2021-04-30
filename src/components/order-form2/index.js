import cx from 'classnames';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useHomepageTabsContext } from '../../contexts/HomepageTabsContext';
import { Button } from '../button';
import styles from '../calculator/calculator2.module.css';
import { Container } from '../container';
import { MainForm2 } from '../forms/main-form2';
import { OrderForm2 } from '../forms/order-form2';
import styles2 from './order-form2.module.css';

export const Order2 = ({ id, className }) => {
  const { activeTab, dispatchAtchion } = useHomepageTabsContext()
  const [form, setForm] = useState("order")
  const { t } = useTranslation()

  // useEffect(() => {
  //   setForm(activeTab)
  // }, [activeTab])

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
      <Container className={cx("text-center", styles2.container)}>
        <h3
          className={cx(
            "fancyUnderlineText fancyUnderlineText--orange sectionTitleNew text-center",
            styles.title,
            styles2.title
          )}
        >
          {/* {t("home.order.title")} */}
          Objednat <span>teď</span>
        </h3>
        <div className={styles2.formWrapContainer}>
          <div className={styles2.formInnerContainer}>
            <div className={cx(styles2.formTabs)}>
              <Button
                name="submit"
                type="white"
                size="sm"
                className={cx(
                  styles2.formTab,
                  form === "calc" && styles2.active
                )}
                handleClick={() => setForm("calc")}
              >
                {t("home.order.tab1Btn")}
              </Button>
              <Button
                name="submit"
                type="white"
                size="sm"
                className={cx(
                  styles2.formTab,
                  form === "order" && styles2.active
                )}
                handleClick={() => setForm("order")}
              >
                {t("home.order.tab2Btn")}
              </Button>
            </div>

            {form === "calc" && <MainForm2 />}
            {form === "order" && <OrderForm2 />}
          </div>
        </div>
      </Container>
    </section>
  )
}
