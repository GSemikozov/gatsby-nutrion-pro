import cx from 'classnames';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Trans, useTranslation } from 'react-i18next';

import { AnimatedWrapper } from '../animated-wrapper';
import { Container } from '../container';
import { ContactFormNew } from '../forms/contact-form-new';
import day1stack from './1den-boxes.png';
import day2stack from './2den-boxes.png';
import styles from './menuOrderInfo.module.css';

export const MenuOrderInfo = ({ id }) => {
  const { t } = useTranslation()
  return (
    <section className={styles.menuOrderInfo} id={id && id}>
      <Container isWide={true}>
        {/* <AnimatedWrapper> */}
        <h3 className={"fancyUnderlineText sectionTitleNew text-center"}>
          <Trans i18nKey="home.menu.title">
            <span>Dvoudenní zkouška</span> 5chodového menu
          </Trans>
        </h3>
        <div className={styles.wrapper}>
          <div className={styles.firstDay}>
            <div className={styles.label}>
              <span className={styles.labelNumber}>1</span>
              <span>{t("home.menu.day1")}</span>
            </div>
            <div className={styles.symbol}>{`{`}</div>
            <div>
              <img src={day1stack} className={styles.boxImg} alt="day1stack" />
            </div>
          </div>
          <div className={styles.plus}>+</div>
          <div className={styles.secondDay}>
            <div className={styles.label}>
              <span className={styles.labelNumber}>2</span>
              <span>{t("home.menu.day2")}</span>
            </div>
            <div className={styles.symbol}>{`}`}</div>
            <div>
              <img src={day2stack} className={styles.boxImg} alt="day2stack" />
            </div>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.form1col}>
            <div className={styles.oldPrice}>1000 Kč</div>
            <div className={styles.newPrice}>
              <span>{t("home.menu.price")}</span>
              <span className={styles.price}>700 Kč</span>
            </div>
          </div>
          <div className={styles.form2col}>
            <ContactFormNew themeLight={true} horizontal={true} />
          </div>
        </div>
        {/* </AnimatedWrapper> */}
      </Container>
    </section>
  )
}
