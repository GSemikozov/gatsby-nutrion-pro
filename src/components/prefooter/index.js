import cx from 'classnames';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Trans, useTranslation } from 'react-i18next';

import { Container } from '../container';
import { ContactForm2 } from '../forms/contact-form2';
import styles from './pre-footer.module.css';

export const PreFooter = () => {
  const { t } = useTranslation()

  return (
    <>
      <BrowserView>
        <section className={styles.section} id="discount">
          <Container>
            <h3 className={cx("sectionTitle -light text-center", styles.title)}>
              {t("general.prefooter.title")}
            </h3>
            <p className={styles.text}>
              {t("general.prefooter.desc1")}
              <br />
              {t("general.prefooter.desc2")}
            </p>
            <p className={styles.text}>{t("general.prefooter.desc3")}</p>
            <div className={styles.formWrap}>
              <ContactForm2
                horizontal
                themeLight
                label
                btnType="white"
                btnText={t("forms.contactForm2.CTA")}
              />
            </div>
          </Container>
        </section>
      </BrowserView>
      <MobileView>
        <div className={styles.sectionXS} id="discount">
          <Container>
            <h3 className={cx("sectionTitle -light text-center", styles.title)}>
              {t("general.prefooter.title")}
            </h3>
            <p className={styles.text}>
              {t("general.prefooter.desc1")}
              <br />
              {t("general.prefooter.desc2")}
            </p>
            <p className={styles.text}>{t("general.prefooter.desc3")}</p>
          </Container>
        </div>
        <Container className={styles.formWrapXS}>
          <ContactForm2
            label
            btnType="primary"
            btnText={t("forms.contactForm2.CTA")}
          />
        </Container>
      </MobileView>
    </>
  )
}
