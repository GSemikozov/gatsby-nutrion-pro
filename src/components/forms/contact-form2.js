import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { getCookie, getReferrer } from '../../helpers';
import { Button } from '../button';
import contactFormStyles from './contact-form.module.css';
import styles from './form.module.css';

const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test("phone", "Telefonní číslo musí obsahovat 9 znaků", value =>
    rePhoneNumber.test(value)
  )
})

// import MaskedInput from 'react-text-mask';
export const ContactFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  themeLight,
  btnType = "primary",
  btnText = "Mám zájem",
  label = false,
  horizontal = false,
}) => {
  const { t } = useTranslation()
  return (
    <>
      <Form
        name="contact"
        method="post"
        className={cx(contactFormStyles.contactForm, {
          [contactFormStyles.horizontal]: horizontal,
          [contactFormStyles.themeLight]: themeLight,
        })}
      >
        <div className={cx(styles.inputField, contactFormStyles.inputField)}>
          {label && (
            <label className={contactFormStyles.label}>
              {t("forms.contactForm2.telLabel")}
            </label>
          )}
          {/* <FastField name="phone">
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
              placeholder="Enter your phone number"
              type="text"
              className={cx(styles.input, contactFormStyles.input)}
            />
          )}
        </FastField> */}
          <FastField
            component="input"
            type="tel"
            name="phone"
            className={cx(styles.input, contactFormStyles.input)}
          />
          {touched.phone && errors.phone && (
            <span className={cx(styles.error, contactFormStyles.error)}>
              {errors.phone}
            </span>
          )}
        </div>
        {/* {values.success && (
        <div className={styles.success}>
          <h4 className="text-center">Successfully sent!</h4>
        </div>
      )} */}
        <Button
          name="submit"
          type={btnType}
          buttonType="submit"
          disabled={isSubmitting}
          className={contactFormStyles.contactFormButton}
        >
          {t("forms.contactForm2.CTA") || btnText}
        </Button>
      </Form>
      <div className={contactFormStyles.termsContainer}>
        <span>{t("forms.contactForm2.info")}</span>
      </div>
    </>
  )
}

export const ContactForm2 = withFormik({
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
        form_name: isEn ? "contact2_en" : "contact2",
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
          pageURL: isEn ? "/en/thank-you-contact2" : "/thank-you-contact2",
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
