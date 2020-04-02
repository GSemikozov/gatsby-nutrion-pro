import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { Button } from '../button';
import styles from '../calculator/calculator.module.css';
import { Container } from '../container';
import { MainForm } from '../forms/main-form';
import { Price } from '../price';
import styles2 from './calc.module.css';

export const Calculator2 = ({ id, className }) => {
  return (
    <section className={cx(styles.calculatorSection, className)} id={id && id}>
      <Container className={styles.container}>
        <h3 className={cx("sectionTitle", styles.title, styles2.title)}>
          Spočítej si orientační cenu svého programu
        </h3>
        <MainForm />
        <p className={cx(styles.calculatorTextMuted, "text-center")}>
          Cena měsíčního programu je individuální a bude upřesněna dle
          stanoveného příjmu na míru.
        </p>
      </Container>
    </section>
  )
}
