import cx from 'classnames';
import { FastField } from 'formik';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './summary.module.css';

const days = {
  "2 týdny": {
    5: 10,
    6: 12,
  },
  Měsíc: {
    5: 20,
    6: 24,
  },
  "Dva měsíce": {
    5: 40,
    6: 48,
  },
}

export const Summary = ({ kcal = 0, plan, program, week, menu, price }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.priceWrap}>
        <div className={styles.summary}>
          <div className={styles.fillField}>
            <span className={cx(styles.summaryTitle, styles.summaryTitleCel)}>
              {t("forms.onlineOrderFormGoalLabel")}
            </span>
            <span className={styles.fieldDots}>
              <span className={styles.green} />
              <span className={styles.green} />
              <span className={styles.green} />
              <span className={styles.green} />
              <span className={styles.green} />
              <span className={styles.green} />
              <span className={styles.green} />
            </span>
            <span className={cx(styles.summaryPrice, styles.green)}>
              {plan === "Zhubnout"
                ? t("forms.onlineOrderFormGoalLoss")
                : plan === "Udržovat"
                ? t("forms.onlineOrderFormGoalMaintenance")
                : t("forms.onlineOrderFormGoalGain")}
            </span>
          </div>
          <div className={styles.blankField}>
            <span
              className={cx(styles.summaryTitle, styles.summaryTitleProgram)}
            >
              {t("forms.onlineOrderFormSummaryProgramLabel")}
            </span>
            <span className={styles.fieldDots}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className={styles.summaryPrice}>
              {program === "2 týdny"
                ? t("forms.onlineOrderFormProgramLengthOption1")
                : program === "Měsíc"
                ? t("forms.onlineOrderFormProgramLengthOption2")
                : t("forms.onlineOrderFormProgramLengthOption3")}
            </span>
          </div>
          <div className={styles.fillField}>
            <span className={cx(styles.summaryTitle, styles.summaryTitleWeek)}>
              {t("forms.onlineOrderFormSummaryWeekLengthLabel")}
            </span>
            <span className={styles.fieldDots}>
              <span />
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className={styles.summaryPrice}>
              {week === 5
                ? t("forms.onlineOrderFormSummaryWorkDaysLabel")
                : t("forms.onlineOrderFormSummaryWeekendDaysLabel")}
            </span>
          </div>
          <div className={styles.blankField}>
            <span className={cx(styles.summaryTitle, styles.summaryTitleMenu)}>
              {t("forms.onlineOrderFormSummaryMealsLabel")}
            </span>
            <span className={styles.fieldDots}>
              <span />
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className={styles.summaryPrice}>
              {menu === "5chodové menu"
                ? t("forms.onlineOrderFormMealsOption1")
                : menu === "3chodové menu"
                ? t("forms.onlineOrderFormMealsOption2")
                : t("forms.onlineOrderFormMealsOption3")}
            </span>
          </div>
          <div className={styles.fillField}>
            <span className={cx(styles.summaryTitle, styles.summaryTitleKal)}>
              kCal
            </span>
            <span className={styles.fieldDots}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className={styles.summaryPrice}>{kcal}</span>
          </div>
        </div>
      </div>
    </>
  )
}
