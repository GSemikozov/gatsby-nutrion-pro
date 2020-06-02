import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React from 'react';
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
  return (
    <Form name="2days-trial" method="post" className={heroFormStyles.heroForm}>
      <div className={styles.inputField}>
        <FastField
          component="input"
          type="text"
          name="title"
          placeholder="Tvoje jméno"
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
        {btnText}
      </Button>
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
      let referrer = ""
      if (document.referrer !== "") {
        referrer = new URL(document.referrer).hostname
      }
      let roistat_visit =
        document.cookie.replace(
          /(?:(?:^|.*;\s*)roistat_visit\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        ) || ""

      const data = {
        form_name: "2days-trial",
        title,
        phone,
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
        window.location.href = "/thank-you"
        window.dataLayer.push({
          event: "ga.pageview",
          pageURL: "/thank-you-contact",
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
