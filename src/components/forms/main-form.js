// import cx from 'classnames';
import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

import { Button } from '../button';
import stylesRadio from '../calculator2/calc.module.css';
import { RadioButton } from '../calculator2/radio';
import { Price } from '../price';
import styles from './form.module.css';
import mainFormStyles from './main-form.module.css';

const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test("phone", "Telefonní číslo musí obsahovat 9 znaků", value =>
    rePhoneNumber.test(value)
  )
})

export const MainFormLayout = ({ isSubmitting, values, errors, touched }) => {
  const [plan, setPlan] = useState("Zhubnout")
  const radioChangeHandler = e => {
    setPlan(e.target.value)
  }
  const [gender, setGender] = useState("male")
  const genderChangeHandler = e => {
    setGender(e.target.value)
  }
  const [price, setPrice] = useState(420)

  useEffect(() => {
    const priceValue = getPrice(gender, plan)
    setPrice(priceValue)
  }, [gender, plan])

  const getPrice = (gender, plan) => {
    let price = null
    if (gender === "male") {
      switch (plan) {
        case "Zhubnout":
          price = 460
          break
        case "Udržovat":
          price = 480
          break
        case "Nabírat":
          price = 500
          break
      }
    }
    if (gender === "female") {
      switch (plan) {
        case "Zhubnout":
          price = 420
          break
        case "Udržovat":
          price = 440
          break
        case "Nabírat":
          price = 480
          break
      }
    }
    return price
  }

  return (
    <div className={mainFormStyles.mainFormBox}>
      <Form
        className={mainFormStyles.mainForm}
        name="main-contact"
        method="post"
      >
        <div>
          <div className={cx(styles.inputField, mainFormStyles.inputField)}>
            <h5 className={mainFormStyles.inputFieldTitle}>Tvůj cíl</h5>
            <div className={stylesRadio.radio}>
              <input
                id="Zhubnout"
                onChange={e => radioChangeHandler(e)}
                checked={plan === "Zhubnout"}
                value="Zhubnout"
                type="radio"
                name="program"
              />
              <label htmlFor="Zhubnout">Zhubnout</label>
            </div>
            <div className={stylesRadio.radio}>
              <input
                id="Udržovat"
                onChange={e => radioChangeHandler(e)}
                checked={plan === "Udržovat"}
                value="Udržovat"
                type="radio"
                name="program"
              />
              <label htmlFor="Udržovat">Udržovat</label>
            </div>
            <div className={stylesRadio.radio}>
              <input
                id="Nabírat"
                onChange={e => radioChangeHandler(e)}
                checked={plan === "Nabírat"}
                value="Nabírat"
                type="radio"
                name="program"
              />
              <label htmlFor="Nabírat">Nabírat</label>
            </div>
          </div>
          <div className={cx(styles.inputField, mainFormStyles.inputField)}>
            <h5 className={mainFormStyles.inputFieldTitle}>
              Jaké je tvojé pohlaví?
            </h5>
            <div className={stylesRadio.radio}>
              <input
                id="male"
                onChange={e => genderChangeHandler(e)}
                checked={gender === "male"}
                value="male"
                type="radio"
                name="gender"
              />
              <label htmlFor="male">Muž</label>
            </div>
            <div className={stylesRadio.radio}>
              <input
                id="female"
                onChange={e => genderChangeHandler(e)}
                checked={gender === "female"}
                value="female"
                type="radio"
                name="gender"
              />
              <label htmlFor="female">Žena</label>
            </div>
          </div>
          <Price price={price} />
        </div>
        <div>
          <div className={styles.inputField}>
            <label className={cx(styles.label, mainFormStyles.inputFieldLabel)}>
              Telefon*
            </label>
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
            <label
              htmlFor="promo"
              className={cx(styles.label, mainFormStyles.inputFieldLabel)}
            >
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
          <div>
            <FastField component="input" type="hidden" name="amount_kal" />
          </div>
          <div className={mainFormStyles.buttons}>
            <Button
              name="submit"
              type="tertiary"
              buttonType="submit"
              disabled={isSubmitting}
              className={mainFormStyles.submitButton}
            >
              Nezávazně objednat
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export const MainForm = withFormik({
  mapPropsToValues: (plan, gender, price) => ({
    phone: "+420",
    promo: "",
    plan: `${plan}` || "",
    gender: `${gender}` || "",
    price: `${price}` || "0",
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
      plan: Yup.string(),
      gender: Yup.string(),
    }),
  handleSubmit: async (
    { phone, promo, plan, gender, price },
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
        form_name: "main-contact",
        phone,
        promo,
        plan,
        gender,
        price,
        utm_source: UTM_SOURCE,
        utm_medium: UTM_MEDIUM,
        utm_campaign: UTM_CAMPAIGN,
        utm_term: UTM_TERM,
        utm_content: UTM_CONTENT,
      }

      // await console.log(JSON.stringify(data))

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
})(MainFormLayout)
