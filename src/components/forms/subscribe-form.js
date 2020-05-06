import { FastField, Form, withFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { Button } from '../button';
import styles from './form.module.css';
import subscribeFormStyles from './subscribe-form.module.css';

export const SubscribeFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
}) => {
  return (
    <Form
      name="subscribe"
      method="post"
      className={subscribeFormStyles.subscribeForm}
    >
      <div className={styles.inputField}>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <FastField
          component="input"
          type="email"
          name="email"
          className={styles.input}
        />
        {touched.email && errors.email && (
          <span className={styles.error}>{errors.email}</span>
        )}
      </div>
      {/* {values.success && (
        <div className={styles.success}>
          <h4 className="text-center">Successfully sent!</h4>
        </div>
      )} */}
      <Button
        name="submit"
        type="tertiary"
        buttonType="submit"
        disabled={isSubmitting}
        className={subscribeFormStyles.subscribeFormButton}
      >
        Odeslat
      </Button>
    </Form>
  )
}

export const SubscribeForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    referrer: "",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      email: Yup.string()
        .email("Invalid email")
        .required("Required"),
    }),
  handleSubmit: async (
    { email },
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
        form_name: "subscribe",
        email,
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
          pageURL: "/thank-you-subscribe",
          pageType: "Purchase",
        })
      }, 2000)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(SubscribeFormLayout)
