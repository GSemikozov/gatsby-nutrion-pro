import cx from 'classnames';
import React from 'react';

import { Container } from '../container';
import styles from './menuOrderInfo.module.css';

export const MenuOrderInfo = () => {
  return (
    <section className={styles.menuOrderInfo}>
      <Container>
        <h3 className={"fancyUnderlineText sectionTitleNew text-center"}>
          <span>Dvoudenní zkouška</span> 5chodového menu
        </h3>
      </Container>
    </section>
  )
}
