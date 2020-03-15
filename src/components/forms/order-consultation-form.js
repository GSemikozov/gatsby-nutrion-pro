import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { Button } from '../button';
import styles from './form.module.css';
import mainFormStyles from './main-form.module.css';

// import MaskedInput from 'react-text-mask';
const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test("phone", "Telefonní číslo musí obsahovat 9 znaků", value =>
    rePhoneNumber.test(value)
  )
})

export const OrderConsultationFormLayout = ({
  isSubmitting,
  errors,
  touched,
  className,
}) => {
  return (
    <div className={cx(mainFormStyles.mainFormBox, className)}>
      <Form
        className={mainFormStyles.mainForm}
        name="order-consultation-contact"
        method="post"
      >
        <div className={styles.inputField}>
          <label className={styles.label}>Telefon *</label>
          <FastField
            component="input"
            type="text"
            name="phone"
            className={styles.input}
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
            className={styles.input}
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

export const OrderConsultationForm = withFormik({
  mapPropsToValues: () => ({
    phone: "+420",
    promo: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      phone: Yup.string()
        .min(9)
        .phone(),
      promo: Yup.string(),
    }),
  handleSubmit: async (
    { phone, promo },
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

      let data = {
        form_name: "order-consultation-contact",
        phone,
        promo,
        utm_source: UTM_SOURCE,
        utm_medium: UTM_MEDIUM,
        utm_campaign: UTM_CAMPAIGN,
        utm_term: UTM_TERM,
        utm_content: UTM_CONTENT,
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
      }, 2000)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(OrderConsultationFormLayout)
