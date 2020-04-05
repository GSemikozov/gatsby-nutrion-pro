// import cx from 'classnames';
import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

import { Button } from '../button';
import stylesRadio from '../calculator2/calc.module.css';
import { Price } from '../price';
import styles from './form.module.css';
import mainFormStyles from './main-form.module.css';

const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test("phone", "Telefonní číslo musí obsahovat 9 znaků", value =>
    rePhoneNumber.test(value)
  )
})

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className={cx("input-feedback")}>{error}</div> : null

// Radio input
const RadioButton = ({
  field: { name, value, onChange },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
      {console.log("radio", "name:", name, "label:", label, "value:", value)}
      <input
        name={name}
        id={id}
        type="radio"
        value={label}
        checked={label === value}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

// Radio group
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  className,
  onChange,
  children,
}) => {
  const classes = cx(
    {
      success: value || (!error && touched),
      error: !!error && touched,
    },
    className
  )

  return (
    <div className={classes} onChange={onChange}>
      {children}
      {touched && <InputFeedback error={error} />}
    </div>
  )
}

const MainFormLayout = ({ isSubmitting, values, errors, touched }) => {
  const [plan, setPlan] = useState("Zhubnout")
  const [gender, setGender] = useState("Žena")
  const [price, setPrice] = useState()

  useEffect(() => {
    const priceValue = getPrice(gender, plan)
    setPrice(priceValue)
  }, [gender, plan])

  const getPrice = (gender, plan) => {
    let price = null
    if (gender === "Muž") {
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
    if (gender === "Žena") {
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
            <RadioButtonGroup
              id="radioGroup2"
              value={values.plan}
              error={errors.plan}
              touched={touched.plan}
              className={stylesRadio.radioBtns3}
              onChange={e => {
                console.log("set new plan", e.target.value)
                setPlan(e.target.value)
              }}
            >
              <FastField
                component={RadioButton}
                name="plan"
                id="plan1"
                label="Zhubnout"
              />
              <FastField
                component={RadioButton}
                name="plan"
                id="plan2"
                label="Udržovat"
              />
              <FastField
                component={RadioButton}
                name="plan"
                id="plan3"
                label="Nabírat"
              />
            </RadioButtonGroup>
          </div>
          <div className={cx(styles.inputField, mainFormStyles.inputField)}>
            <h5 className={mainFormStyles.inputFieldTitle}>
              Jaké je tvojé pohlaví?
            </h5>
            <RadioButtonGroup
              id="radioGroup3"
              value={values.gender}
              error={errors.gender}
              touched={touched.gender}
              className={stylesRadio.radioBtns2}
              onChange={e => {
                setGender(e.target.value)
              }}
            >
              <FastField
                component={RadioButton}
                name="gender"
                id="female"
                label="Žena"
              />
              <FastField
                component={RadioButton}
                name="gender"
                id="male"
                label="Muž"
              />
            </RadioButtonGroup>
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
  mapPropsToValues: () => ({
    phone: "+420",
    promo: "",
    plan: "Zhubnout",
    gender: "Žena",
    price: "0",
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
