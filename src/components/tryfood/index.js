import cx from 'classnames';
import React from 'react';

import { Container } from '../container';
import { ContactForm } from '../forms/contact-form.js';
import styles from './try-food.module.css';

export const TryFood = () => (
  <div className={styles.section}>
    <Container className={styles.container}>
      <h3 className={cx("sectionTitle text-center", styles.sectionTitle)}>
        Chceš jídlo nejdříve vyzkoušet?
      </h3>
      <p className={styles.formHeading}>
        Objednej si náš pětidenní testovací program za <b>480,- Kč/den</b>{" "}
        včetně dopravy*.
      </p>
      <div className={styles.contactFormWrapper}>
        <div className={styles.contactFormTitle}>
          Napiš nám své telefonní číslo a my ti zavoláme zpět.
        </div>
        <div className={styles.contactFormInner}>
          <ContactForm />
        </div>
      </div>
      <p className={styles.formNotice}>
        *Testovací program je nastaven na 1900 kcal/den. Individuální program ti
        bude nastaven na míru a jeho cena se tak může lišit.
      </p>
    </Container>
  </div>
)
