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

export const LandingFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  className,
}) => {
  return (
    <div className={cx(mainFormStyles.mainFormBox, className)}>
      <Form className={mainFormStyles.mainForm} name="landing" method="post">
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

export const LandingForm = withFormik({
  mapPropsToValues: () => ({
    phone: "+420",
    promo: "",
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
      let data = {
        form_name: "landing",
        phone,
        promo,
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
})(LandingFormLayout)
