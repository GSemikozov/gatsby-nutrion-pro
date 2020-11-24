import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Trans, useTranslation } from 'react-i18next';

import { handleMenuLinkClick } from '../../helpers';
import { Container } from '../container';
import styles from './preheader.module.css';

export const PreHeader = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.preHeaderContainter}>
      <BrowserView>
        <header className={styles.preHeader}>
          <Container className={styles.preHeaderInner}>
            <span>
              <Trans i18nKey="general.bannerTitle">
                <b>Společná</b> <span>objednávka se</span> <b>slevou až 20%.</b>
              </Trans>
            </span>
            <a
              href="/#discount"
              style={{
                color: `white`,
                // textDecoration: `none`,
                marginLeft: 15,
              }}
              onClick={e => handleMenuLinkClick({ link: "/#discount" }, e)}
            >
              Více
            </a>
          </Container>
        </header>
      </BrowserView>

      <MobileView>
        <div
          className={styles.preHeader}
          onClick={e => handleMenuLinkClick({ link: "/#discount" }, e)}
        >
          <Container className={styles.preHeaderInnerMobile}>
            <span>
              <b>Společná </b>objednávka se<b> slevou až 20%.</b>
            </span>
            <a
              href="/#discount"
              style={{
                color: `white`,
                // textDecoration: `none`,
                marginLeft: 5,
              }}
              onClick={e => handleMenuLinkClick({ link: "/#discount" }, e)}
            >
              Více
            </a>
          </Container>
        </div>
      </MobileView>
    </div>
  )
}
