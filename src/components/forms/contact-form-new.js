import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React from 'react';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

import { getCookie, getReferrer } from '../../helpers';
import { useLangContext } from '../../utils/lang';
import { Button2 } from '../button2';
import contactFormStyles from './contact-form-new.module.css';
import styles from './form.module.css';

const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test("phone", "Telefonní číslo musí obsahovat 9 znaků", value =>
    rePhoneNumber.test(value)
  )
})

export const ContactFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  btnType = "secondary",
  btnText = "Objednat",
}) => {
  return (
    <Form
      name="2days-trial"
      method="post"
      className={cx(contactFormStyles.contactForm)}
    >
      <div className={cx(styles.inputField, contactFormStyles.inputField)}>
        <FastField
          component="input"
          type="text"
          name="phone"
          className={cx(styles.input, contactFormStyles.input)}
        />
        {touched.phone && errors.phone && (
          <span className={cx(styles.error, contactFormStyles.error)}>
            {errors.phone}
          </span>
        )}
      </div>
      <Button2
        color="secondary"
        buttonType="submit"
        disabled={isSubmitting}
        className={contactFormStyles.contactFormButton}
      >
        {btnText}
      </Button2>
    </Form>
  )
}

export const ContactFormNew = withFormik({
  mapPropsToValues: () => ({
    phone: "+420",
    referrer: "",
    ga: "",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      phone: Yup.string()
        .min(9)
        .phone(),
    }),
  handleSubmit: async (
    { phone },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      let referrer = getReferrer()

      const isEn = document.location.pathname.includes("/en")
      const testovani = localStorage.getItem("PUSHTELL-homepage")

      const data = {
        form_name: isEn ? "contact-new_en" : "contact-new",
        phone,
        referrer: referrer,
        roistat: getCookie("roistat_visit"),
        ga: getCookie("_ga"),
        testovani: testovani,
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
          pageURL: isEn
            ? "/en/thank-you-contact-new"
            : "/thank-you-contact-new",
          pageType: "Purchase",
          testovani: testovani,
        })
      }, 300)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(ContactFormLayout)
