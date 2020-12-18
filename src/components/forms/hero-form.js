import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { Button } from '../button';
import styles from './form.module.css';
import heroFormStyles from './hero-form.module.css';

const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test("phone", "Telefonní číslo musí obsahovat 9 znaků", value =>
    rePhoneNumber.test(value)
  )
})

export const HeroFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  themeLight,
  btnType = "primary",
  btnText = "Objednat",
}) => {
  const { t } = useTranslation()

  return (
    <Form name="2days-trial" method="post" className={heroFormStyles.heroForm}>
      <div className={styles.inputField}>
        <FastField
          component="input"
          type="text"
          name="title"
          placeholder={t("forms.heroFormNamePlaceholder")}
          className={cx(styles.input, heroFormStyles.input)}
        />
        {touched.name && errors.name && (
          <span className={styles.error}>{errors.name}</span>
        )}
      </div>
      <div className={styles.inputField}>
        <FastField
          component="input"
          type="text"
          name="phone"
          className={cx(styles.input, heroFormStyles.input)}
        />
        {touched.phone && errors.phone && (
          <span className={cx(styles.error)}>{errors.phone}</span>
        )}
      </div>
      <Button
        name="submit"
        type={btnType}
        buttonType="submit"
        disabled={isSubmitting}
        className={heroFormStyles.button}
      >
        {t("forms.hero2FormCTA") || btnText}
      </Button>
      <div className={heroFormStyles.termsContainer}>
        <span>{t("forms.hero2FormInfo")}</span>
      </div>
    </Form>
  )
}

export const HeroForm = withFormik({
  mapPropsToValues: () => ({
    title: "",
    phone: "+420",
    referrer: "",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      title: Yup.string()
        .min(1)
        .required(),
      phone: Yup.string()
        .min(9)
        .phone(),
    }),
  handleSubmit: async (
    { title, phone },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      let urlString = document.location.href
      let url = new URL(urlString)
      let UTM_SOURCE = url.searchParams.get("utm_source")
      let UTM_MEDIUM = url.searchParams.get("utm_medium")
      let UTM_CAMPAIGN = url.searchParams.get("utm_campaign")
      let UTM_TERM = url.searchParams.get("utm_term")
      let UTM_CONTENT = url.searchParams.get("utm_content")

      let referrer = ""
      if (document.referrer !== "") {
        referrer = new URL(document.referrer).hostname
      }
      let roistat_visit =
        document.cookie.replace(
          /(?:(?:^|.*;\s*)roistat_visit\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        ) || ""

      const isEn = document.location.pathname.includes("/en")

      const data = {
        form_name: isEn ? "2days-trial_en" : "2days-trial",
        title,
        phone,
        utm_source: UTM_SOURCE,
        utm_medium: UTM_MEDIUM,
        utm_campaign: UTM_CAMPAIGN,
        utm_term: UTM_TERM,
        utm_content: UTM_CONTENT,
        referrer: referrer,
        roistat: roistat_visit,
      }
      await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      await setSubmitting(false)
      await setFieldValue("success", true)
      setTimeout(() => {
        resetForm()
        window.location.href = isEn ? "/en/thank-you" : "/thank-you"
        window.dataLayer.push({
          event: "ga.pageview",
          pageURL: isEn ? "/en/thank-you-contact" : "/thank-you-contact",
          pageType: "Purchase",
        })
      }, 2000)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(HeroFormLayout)
