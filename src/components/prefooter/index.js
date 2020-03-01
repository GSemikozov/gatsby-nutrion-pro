import cx from 'classnames';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { Container } from '../container';
import { ContactForm2 } from '../forms/contact-form2';
import styles from './pre-footer.module.css';

export const PreFooter = () => (
  <>
    <BrowserView>
      <section className={styles.section}>
        <Container>
          <h3 className={cx("sectionTitle -light text-center", styles.title)}>
            Chceš konečně dosáhnout výsledků?
          </h3>
          <p className={styles.text}>
            Pod naším profesionálním dohledem to zvládneš, a navíc zdravě a
            chutně!
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
      <div className={styles.sectionXS}>
        <Container>
          <h3 className={cx("sectionTitle -light text-center", styles.title)}>
            Chceš konečně dosáhnout výsledků?
          </h3>
          <p className={styles.text}>
            Pod naším profesionálním dohledem to zvládneš, a navíc zdravě a
            chutně!
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
