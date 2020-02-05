import cx from 'classnames';
import React from 'react';

import { Button } from '../button';
import { Container } from '../container';
import styles from './calculator.module.css';

export const Calculator = () => (
  <section className={styles.calculatorSection}>
    <Container className={styles.container}>
      <h3 className={cx("sectionTitle", styles.title)}>
        Spočítej si cenu svého programu
      </h3>
      <div className={styles.calculator}>
        <div className={cx(styles.column, styles.center)}>
          <div className={styles.growBox}>
            <label className={styles.label}>
              {" "}
              Vím svůj denní kalorický příjem
            </label>
            <div className={styles.inputGroup}>
              <input type="text" className={styles.input} />
              <span className={styles.inputGroupBtn}>kcal</span>
            </div>
          </div>
          <h4 className={styles.columnTitle}>
            Neznáš svůj potřebný denní kalorický příjem?
          </h4>
          <Button type="outline" className={styles.button}>
            Vypočitat příjem
          </Button>
        </div>
        <div className={styles.column}>
          <div className={styles.priceBox}>
            <div className={styles.price}>
              <p>Cena za den</p>
              <h3 className={styles.priceValue}>
                <span>567</span> Kč
              </h3>
              <p className={cx(styles.priceTextLight)}>81 Kč / porce</p>
            </div>
            <Button type="primary" className={styles.button}>
              Nezávazně objednat
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
)
