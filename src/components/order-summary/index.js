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

export const Summary = ({ kcal, plan, program, week, menu, price }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.priceWrap}>
        {/* <div className={styles.priceDayTitle}>
        <h5>kCal</h5>
      </div> */}
        {/* <div className={styles.priceDayValue}>
        <span id="price">{kcal}</span> kCal
      </div> */}
        <div className={styles.summary}>
          <div className={styles.fillField}>
            <span className={styles.summaryTitle}>
              {t("forms.onlineOrderFormGoalLabel")}
            </span>
            <span className={styles.summaryPrice} id="price">
              {plan === "Zhubnout"
                ? t("forms.onlineOrderFormGoalLoss")
                : plan === "Udržovat"
                ? t("forms.onlineOrderFormGoalMaintenance")
                : t("forms.onlineOrderFormGoalGain")}
            </span>
          </div>
          <div className={styles.blankField}>
            <span className={styles.summaryTitle}>
              {t("forms.onlineOrderFormSummaryProgramLabel")}
            </span>
            <span className={styles.summaryPrice} id="price">
              {program === "2 týdny"
                ? t("forms.onlineOrderFormProgramLengthOption1")
                : program === "Měsíc"
                ? t("forms.onlineOrderFormProgramLengthOption2")
                : t("forms.onlineOrderFormProgramLengthOption3")}
            </span>
          </div>
          <div className={styles.fillField}>
            <span className={styles.summaryTitle}>
              {t("forms.onlineOrderFormSummaryWeekLengthLabel")}
            </span>
            <span className={styles.summaryPrice} id="price">
              {week === 5
                ? t("forms.onlineOrderFormSummaryWorkDaysLabel")
                : t("forms.onlineOrderFormSummaryWeekendDaysLabel")}
            </span>
          </div>
          <div className={styles.blankField}>
            <span className={styles.summaryTitle}>
              {t("forms.onlineOrderFormSummaryMealsLabel")}
            </span>
            <span className={styles.summaryPrice} id="price">
              {menu === "5 chodů"
                ? t("forms.onlineOrderFormMealsOption1")
                : menu === "3 chody"
                ? t("forms.onlineOrderFormMealsOption2")
                : t("forms.onlineOrderFormMealsOption3")}
            </span>
          </div>
          <div className={styles.fillField}>
            <span className={styles.summaryTitle}>kCal</span>
            <span className={styles.summaryPrice} id="price">
              {kcal}
            </span>
          </div>
          <div className={styles.blankField}>
            <span className={styles.summaryTitle}>
              {t("forms.onlineOrderFormSummaryTotalLabel")}
            </span>
            <span className={styles.summaryPrice} id="price">
              {price ? price * days[program][week] : 420 * days[program][week]}{" "}
              Kč
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
