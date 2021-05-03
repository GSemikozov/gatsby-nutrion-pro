import cx from 'classnames';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

import { useHomepageTabsContext } from '../../contexts/HomepageTabsContext';
import { Button } from '../button';
import { Button2 } from '../button2';
import styles from '../calculator/calculator2.module.css';
import { Container } from '../container';
import { MainForm2 } from '../forms/main-form2';
import { OrderForm2 } from '../forms/order-form2';
import styles2 from './order-form2.module.css';

export const Order2 = ({ id, className }) => {
  const { activeTab, dispatchAtchion } = useHomepageTabsContext()
  const [form, setForm] = useState("calc")
  const { t } = useTranslation()

  useEffect(() => {
    setForm(activeTab)
  }, [activeTab])

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
        <Fade triggerOnce={true}>
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
        </Fade>
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
            <div className={cx(styles2.formTabs, styles2.xs)}>
              <Button2
                name="submit"
                color="primary"
                size="sm"
                className={cx(
                  styles2.formTab,
                  form === "calc" && styles2.active
                )}
                handleClick={() => setForm("calc")}
              >
                {t("home.order.tab1Btn")}
              </Button2>
              <Button
                name="submit"
                type="primary"
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
