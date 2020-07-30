import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React, { useState } from 'react';
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
  values,
  errors,
  touched,
  className,
}) => {
  const [checkTerms, setCheckTerms] = useState(false)
  const [checkTerms2, setCheckTerms2] = useState(false)
  return (
    <Form
      className={cx(mainFormStyles.mainForm, mainFormStyles.heroForm)}
      name="order-consultation"
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
      <div className={mainFormStyles.checkTerms}>
        <input
          id="checkTerms"
          type="checkbox"
          name="checkTerms"
          checked={checkTerms}
          onChange={e => {
            setCheckTerms(e.target.checked)
            console.log(e.target.checked)
          }}
        />
        <label htmlFor="checkTerms">Měl/a jsem možnost přečíst a souhlasím s <a href="/terms" target="_blank"><b>obchodními podmínkámi.</b></a></label>
      </div>

      <div className={mainFormStyles.checkTerms}>
        <input
          id="checkTerms2"
          type="checkbox"
          name="checkTerms2"
          checked={checkTerms2}
          onChange={e => {
            setCheckTerms2(e.target.checked)
          }}
        />
        <label htmlFor="checkTerms2">Souhlasím se zpracováním osobních údajů.</label>
      </div>
      <div className={mainFormStyles.buttons}>
        <Button
          name="submit"
          type="primary"
          buttonType="submit"
          disabled={isSubmitting || !checkTerms || !checkTerms2}
          className={mainFormStyles.submitButton}
        >
          Zavolejte mi
        </Button>
      </div>
    </Form>
  )
}

export const OrderConsultationForm = withFormik({
  mapPropsToValues: () => ({
    phone: "+420",
    promo: "",
    referrer: "",
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
    { props, setSubmitting, resetForm, setFieldValue }
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

      let data = {
        form_name: "order-consultation",
        phone,
        promo,
        referrer: referrer,
        roistat: roistat_visit,
      }

      if (props.leadName !== undefined) {
        data = { ...data, [props.leadName]: props.leadValue }
      }

      // await console.log("data", data)

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
})(OrderConsultationFormLayout)
