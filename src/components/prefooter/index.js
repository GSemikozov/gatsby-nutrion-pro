import cx from 'classnames';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { Container } from '../container';
import { ContactForm2 } from '../forms/contact-form2';
import styles from './pre-footer.module.css';

export const PreFooter = () => (
  <>
    <BrowserView>
      <section className={styles.section} id="discount">
        <Container>
          <h3 className={cx("sectionTitle -light text-center", styles.title)}>
            Společná objednávka se slevou až 20%
          </h3>
          <p className={styles.text}>
            Objednejte si svůj NutritionPro program společně s kamarády či rodinou a získejte ho za výhodnější cenu.<br />
            Objednávku pro 2 máte se slevou 10%, objednávku pro 3+ máte se slevou 20%
          </p>
          <p className={styles.text}>
            Napiš nám svůj kontakt, rádi se ti ozveme!
          </p>
          <div className={styles.formWrap}>
            <ContactForm2
              horizontal
              themeLight
              label
              btnType="white"
              btnText="Zavolejte mi"
            />
          </div>
        </Container>
      </section>
    </BrowserView>
    <MobileView>
      <div className={styles.sectionXS} id="discount">
        <Container>
          <h3 className={cx("sectionTitle -light text-center", styles.title)}>
            Společná objednávka se slevou až 20%
          </h3>
          <p className={styles.text}>
            Objednejte si svůj NutritionPro program společně s kamarády či rodinou a získejte ho za výhodnější cenu.<br />
            Objednávku pro 2 máte se slevou 10%, objednávku pro 3+ máte se slevou 20%
          </p>
          <p className={styles.text}>
            Napiš nám svůj kontakt, rádi se ti ozveme!
          </p>
        </Container>
      </div>
      <Container className={styles.formWrapXS}>
        <ContactForm2 label btnType="primary" btnText="Zavolejte mi" />
      </Container>
    </MobileView>
  </>
)
