import cx from 'classnames';
import React from 'react';

import { Container } from '../container';
import { ContactFormNew } from '../forms/contact-form-new';
import day1stack from './1den-boxes.png';
import day2stack from './2den-boxes.png';
import styles from './menuOrderInfo.module.css';

export const MenuOrderInfo = ({ id }) => {
  return (
    <section className={styles.menuOrderInfo} id={id && id}>
      <Container>
        <h3 className={"fancyUnderlineText sectionTitleNew text-center"}>
          <span>Dvoudenní zkouška</span> 5chodového menu
        </h3>
        <div className={styles.wrapper}>
          <div className={styles.firstDay}>
            <div className={styles.label}>
              <span className={styles.labelNumber}>1</span>
              <span>DEN</span>
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
              <span>DEN</span>
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
              <span>SUPER CENA</span>
              <span className={styles.price}>700 Kč</span>
            </div>
          </div>
          <div className={styles.form2col}>
            <ContactFormNew themeLight={true} horizontal={true} />
          </div>
        </div>
      </Container>
    </section>
  )
}
