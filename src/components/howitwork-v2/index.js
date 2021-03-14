import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Container } from '../container';
import styles from './how-it-work.module.css';
import icon1 from './icons/icon-howItWork1.svg';
import icon2 from './icons/icon-howItWork2.svg';
import icon3 from './icons/icon-howItWork3.svg';
import icon4 from './icons/icon-howItWork4.svg';
import icon5 from './icons/icon-howItWork5.svg';


export const HowItWork = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.section}>
      <Container>
        <h3 className="fancyUnderlineText sectionTitleNew text-center">
          {/*t("home.howItWorks.title")*/}
          Jak to <span>funguje</span>
        </h3>
        <div className={styles.sectionList}>
          
          <div className={styles.sectionListItem}>
            <div className={styles.sectionListImg}>
              <img src={icon1} className={styles.icon} alt="icon" />
            </div>
            <div className={styles.title}>{t("home.howItWorks.option1")}</div>
          </div>

          <div className={styles.sectionListItem}>
            <div className={styles.sectionListImg}>
              <img src={icon2} className={styles.icon} alt="icon" />
            </div>
            <div className={styles.title}>{t("home.howItWorks.option2")}</div>
          </div>
          <div className={styles.sectionListItem}>
            <div className={styles.sectionListImg}>
              <img src={icon3} className={styles.icon} alt="icon" />
            </div>
            <div className={styles.title}>{t("home.howItWorks.option3")}</div>
          </div>

          <div className={styles.sectionListItem}>
            <div className={styles.sectionListImg}>
              <img src={icon4} className={styles.icon} alt="icon" />
            </div>
            <div className={styles.title}>{t("home.howItWorks.option4")}</div>
          </div>
          <div className={styles.sectionListItem}>
            <div className={styles.sectionListImg}>
              <img src={icon5} className={styles.icon} alt="icon" />
            </div>
            <div className={styles.title}>{t("home.howItWorks.option5")}</div>
          </div>
        </div>
      </Container>
    </div>
  )
}