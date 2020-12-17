import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { Button } from '../button';
import styles from './form.module.css';
import mainFormStyles from './special-form.module.css';

// import MaskedInput from 'react-text-mask';
const rePhoneNumber = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test(
    "phone",
    "Telefonní číslo musí obsahovat 12 až 13 znaků",
    value => rePhoneNumber.test(value)
  )
})

export const OrderSpecialOfferFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  className,
}) => {
  return (
    <div className={cx(mainFormStyles.mainFormBox, className)}>
      <Form
        className={mainFormStyles.mainForm}
        name="order-special"
        method="post"
      >
        <div className={styles.inputField}>
          <label className={styles.label}>Telefon *</label>
          <FastField
            component="input"
            type="text"
            name="phone"
            className={mainFormStyles.input}
          />
          {touched.phone && errors.phone && (
            <span className={styles.error}>{errors.phone}</span>
          )}
        </div>
        <div className={styles.inputField}>
          <label htmlFor="promo" className={styles.label}>
            Promo kód
          </label>
          <FastField
            component="input"
            type="text"
            name="promo"
            className={mainFormStyles.input}
          />
          {touched.promo && errors.promo && (
            <span className={styles.error}>{errors.promo}</span>
          )}
        </div>
        <div className={mainFormStyles.buttons}>
          <Button
            name="submit"
            type="primary"
            buttonType="submit"
            disabled={isSubmitting}
            className={mainFormStyles.submitButton}
          >
            Zavolejte mi
          </Button>
        </div>
      </Form>
    </div>
  )
}

export const OrderSpecialOfferForm = withFormik({
  mapPropsToValues: () => ({
    phone: "+420",
    promo: "",
    referrer: "",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      phone: Yup.string()
        .max(13, "Telefonní číslo musí obsahovat 12 až 13 znaků")
        .min(12, "Telefonní číslo musí obsahovat 12 až 13 znaků")
        .phone(),
      promo: Yup.string(),
    }),
  handleSubmit: async (
    { phone, promo },
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

      const isEn = document.location.pathname.includes("/en")

      let data = {
        form_name: isEn ? "order-special_en" : "order-special",
        phone,
        promo,
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
          pageURL: "/thank-you",
          pageType: "Purchase",
        })
      }, 300)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(OrderSpecialOfferFormLayout)
