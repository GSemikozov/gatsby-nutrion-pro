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
      data-netlify="true"
      data-netlify-honeypot="bot-field"
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
      {values.success && (
        <div className={styles.success}>
          <h4 className="text-center">Successfully sent!</h4>
        </div>
      )}
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
      // const encode = data => {
      //   return Object.keys(data)
      //     .map(
      //       key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      //     )
      //     .join("&")
      // }
      const data = {
        "form-name": "subscribe",
        email,
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
      }, 2000)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(SubscribeFormLayout)
