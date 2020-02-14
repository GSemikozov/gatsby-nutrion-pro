import { FastField, Form, withFormik } from 'formik';
import React from 'react';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

import { Button } from '../button';
import contactFormStyles from './contact-form.module.css';
import styles from './form.module.css';

export const ContactFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
}) => {
  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={contactFormStyles.contactForm}
    >
      <div className={styles.inputField}>
        <FastField name="phone">
          {({ field }) => (
            <MaskedInput
              {...field}
              mask={[
                "+",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
              ]}
              id="phone"
              placeholder="Enter your phone number"
              type="text"
              className={styles.input}
            />
          )}
        </FastField>
        {touched.phone && errors.phone && (
          <span className={styles.error}>{errors.phone}</span>
        )}
      </div>
      {values.success && (
        <div className={styles.success}>
          <h4 className="text-center">Successfully sent!</h4>
        </div>
      )}
      <Button
        name="submit"
        type="primary"
        buttonType="submit"
        disabled={isSubmitting}
        className={contactFormStyles.contactFormButton}
      >
        Mám zájem
      </Button>
    </Form>
  )
}

export const ContactForm = withFormik({
  mapPropsToValues: () => ({
    phone: "+420",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      phone: Yup.string()
        .min(8)
        .required("Phone field is required"),
    }),
  handleSubmit: async (
    { phone },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const encode = data => {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&")
      }
      await fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          phone,
        }),
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
})(ContactFormLayout)
