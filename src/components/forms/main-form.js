// import cx from 'classnames';
import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

import { Button } from '../button';
import stylesRadio from '../calculator2/calc.module.css';
import { Price } from '../price';
import styles from './form.module.css';
import option3Img from './icons/icon-2months.svg';
import option1Img from './icons/icon-demo.svg';
import option2Img from './icons/icon-month.svg';
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
  withImg = false,
  disabled = false,
  ...props
}) => {
  useEffect(() => {
    console.log("INPUT prop disabled", `is ${disabled} in ${value}`)
  }, [value, disabled])

  return (
    <div
      className={cx(
        stylesRadio.radio,
        stylesRadio.radioBtn,
        {
          [stylesRadio.withImg]: withImg,
          [stylesRadio.disabled]: disabled,
        },
        className
      )}
    >
      <input
        name={name}
        id={id}
        type="radio"
        value={label}
        checked={label === value}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id}>
        {withImg && (
          <img src={props.img} className={stylesRadio.radioImg} alt={label} />
        )}
        {label}
      </label>
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

  useEffect(() => {
    console.log("children were changed")
  }, [children])

  return (
    <div className={classes} onChange={onChange}>
      {children}
      {touched && <InputFeedback error={error} />}
    </div>
  )
}

export const WrappedForm = ({ isSubmitting, values, errors, touched }) => {
  return <MainForm />
}

const MainFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const [plan, setPlan] = useState("Zhubnout")
  const [program, setProgram] = useState("2 týdny")
  const [menu, setMenu] = useState("5chodové menu")
  const [price, setPrice] = useState("420")
  const [plan2disabled, setPlan2Disabled] = useState(false)
  const [plan3disabled, setPlan3Disabled] = useState(false)
  const [menu2xDisabled, setMenu2xDisabled] = useState(false)

  const onSetPlan = value => {
    setPlan(value)
    if (value === "Udržovat" || value === "Nabírat") {
      setMenu2xDisabled(true)
    } else {
      setMenu2xDisabled(false)
    }
  }

  const onSetProgram = value => {
    setProgram(value)
  }

  const onSetMenu = value => {
    setMenu(value)
    if (value === "2chodové menu") {
      setPlan2Disabled(true)
      setPlan3Disabled(true)
    } else {
      setPlan2Disabled(false)
      setPlan3Disabled(false)
    }
  }

  useEffect(() => {
    const priceValue = getPrice(menu, program, plan)
    setPrice(priceValue)
  }, [menu, plan, program])

  const getPrice = (menu, program, plan) => {
    let price = null
    if (program === "2 týdny") {
      switch (plan) {
        case "Zhubnout":
          if (menu === "5chodové menu") {
            price = 440
          }
          if (menu === "3chodové menu") {
            price = 360
          }
          if (menu === "2chodové menu") {
            price = 280
          }
          break
        case "Udržovat":
          if (menu === "5chodové menu") {
            price = 480
          }
          if (menu === "3chodové menu") {
            price = 380
          }
          if (menu === "2chodové menu") {
            price = 420
          }
          break
        case "Nabírat":
          if (menu === "5chodové menu") {
            price = 460
          }
          if (menu === "3chodové menu") {
            price = 370
          }
          if (menu === "2chodové menu") {
            price = 420
          }
          break
      }
    }

    if (program === "Měsíc") {
      switch (plan) {
        case "Zhubnout":
          if (menu === "5chodové menu") {
            price = 420
          }
          if (menu === "3chodové menu") {
            price = 350
          }
          if (menu === "2chodové menu") {
            price = 270
          }
          break
        case "Udržovat":
          if (menu === "5chodové menu") {
            price = 460
          }
          if (menu === "3chodové menu") {
            price = 370
          }
          if (menu === "2chodové menu") {
            price = 420
          }
          break
        case "Nabírat":
          if (menu === "5chodové menu") {
            price = 440
          }
          if (menu === "3chodové menu") {
            price = 360
          }
          if (menu === "2chodové menu") {
            price = 420
          }
          break
      }
    }

    if (program === "Dva měsíce") {
      switch (plan) {
        case "Zhubnout":
          if (menu === "5chodové menu") {
            price = 395
          }
          if (menu === "3chodové menu") {
            price = 330
          }
          if (menu === "2chodové menu") {
            price = 260
          }
          break
        case "Udržovat":
          if (menu === "5chodové menu") {
            price = 435
          }
          if (menu === "3chodové menu") {
            price = 350
          }
          if (menu === "2chodové menu") {
            price = 420
          }
          break
        case "Nabírat":
          if (menu === "5chodové menu") {
            price = 415
          }
          if (menu === "3chodové menu") {
            price = 340
          }
          if (menu === "2chodové menu") {
            price = 420
          }
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
            <div className={stylesRadio.radioBtns3}>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <input
                  id="plan1"
                  type="radio"
                  name="plan"
                  value="Zhubnout"
                  checked={values.plan === "Zhubnout"}
                  onChange={e => {
                    onSetPlan(e.target.value)
                    setFieldValue("plan", "Zhubnout")
                  }}
                />

                <label htmlFor="plan1">Zhubnout</label>
              </div>
              <div
                className={cx(stylesRadio.radio, stylesRadio.radioBtn, {
                  [stylesRadio.disabled]: plan2disabled,
                })}
              >
                <input
                  id="plan2"
                  type="radio"
                  name="plan"
                  value="Udržovat"
                  disabled={plan2disabled}
                  checked={values.plan === "Udržovat"}
                  onChange={e => {
                    onSetPlan(e.target.value)
                    setFieldValue("plan", "Udržovat")
                  }}
                />
                <label htmlFor="plan2">Udržovat</label>
              </div>
              <div
                className={cx(stylesRadio.radio, stylesRadio.radioBtn, {
                  [stylesRadio.disabled]: plan3disabled,
                })}
              >
                <input
                  id="plan3"
                  type="radio"
                  name="plan"
                  value="Nabírat"
                  disabled={plan3disabled}
                  checked={values.plan === "Nabírat"}
                  onChange={e => {
                    onSetPlan(e.target.value)
                    setFieldValue("plan", "Nabírat")
                  }}
                />
                <label htmlFor="plan3">Nabírat</label>
              </div>
            </div>
          </div>
          <div className={cx(styles.inputField, mainFormStyles.inputField)}>
            <h5 className={mainFormStyles.inputFieldTitle}>
              Vyberte si delku programu
            </h5>
            <RadioButtonGroup
              id="radioGroup"
              value={values.program}
              error={errors.program}
              touched={touched.program}
              onChange={e => {
                onSetProgram(e.target.value)
              }}
              className={stylesRadio.btnGroup}
            >
              <FastField
                component={RadioButton}
                name="program"
                id="option1"
                label="2 týdny"
                withImg={true}
                img={option1Img}
              />
              <FastField
                component={RadioButton}
                name="program"
                id="option2"
                label="Měsíc"
                withImg={true}
                img={option2Img}
              />
              <FastField
                component={RadioButton}
                name="program"
                id="option3"
                label="Dva měsíce"
                withImg={true}
                img={option3Img}
              />
            </RadioButtonGroup>
          </div>
          <div className={cx(styles.inputField, mainFormStyles.inputField)}>
            <h5 className={mainFormStyles.inputFieldTitle}>
              Jaké je tvojé pohlaví?
            </h5>
            <div className={cx(stylesRadio.radioBtns3, stylesRadio.MobileCol)}>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <input
                  id="menu1"
                  type="radio"
                  name="menu"
                  value="5chodové menu"
                  checked={values.menu === "5chodové menu"}
                  onChange={e => {
                    onSetMenu(e.target.value)
                    setFieldValue("menu", "5chodové menu")
                  }}
                />

                <label htmlFor="menu1">5chodové menu</label>
              </div>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <input
                  id="menu2"
                  type="radio"
                  name="menu"
                  value="3chodové menu"
                  checked={values.menu === "3chodové menu"}
                  onChange={e => {
                    onSetMenu(e.target.value)
                    setFieldValue("menu", "3chodové menu")
                  }}
                />
                <label htmlFor="menu2">3chodové menu</label>
              </div>
              <div
                className={cx(stylesRadio.radio, stylesRadio.radioBtn, {
                  [stylesRadio.disabled]: menu2xDisabled,
                })}
              >
                <input
                  id="menu3"
                  type="radio"
                  name="menu"
                  value="2chodové menu"
                  checked={values.menu === "2chodové menu"}
                  onChange={e => {
                    onSetMenu(e.target.value)
                    setFieldValue("menu", "2chodové menu")
                  }}
                  disabled={menu2xDisabled}
                />
                <label htmlFor="menu3">2chodové menu</label>
              </div>
            </div>
          </div>
          <Price price={price} plan={plan} />
        </div>
        <div className={mainFormStyles.mainFormWrap}>
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
              type="primary"
              size="lg"
              buttonType="submit"
              disabled={isSubmitting}
              className={mainFormStyles.submitButton}
            >
              Nezávazně objednat
            </Button>
            <input type="hidden" name="price" value={price} />
          </div>
          <p className={mainFormStyles.mainFormInfo}>
            Cena měsíčního programu je individuální a bude upřesněna dle
            stanoveného příjmu na míru.
          </p>
        </div>
      </Form>
    </div>
  )
}

export const MainForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    phone: "+420",
    promo: "",
    plan: "Zhubnout",
    program: "2 týdny",
    menu: "5chodové menu",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    referrer: "",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      phone: Yup.string()
        .min(9)
        .phone(),
      promo: Yup.string(),
      plan: Yup.string(),
      program: Yup.string(),
      menu: Yup.string(),
    }),
  handleSubmit: async (
    { phone, promo, plan, program, menu },
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
      let referrer = ""
      if (document.referrer !== "") {
        referrer = new URL(document.referrer).hostname
      }
      let getPrice = document.querySelector('[name="price"]').value
      let roistat_visit =
        document.cookie.replace(
          /(?:(?:^|.*;\s*)roistat_visit\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        ) || ""

      let data = {
        form_name: "main-contact",
        phone,
        promo,
        plan,
        program,
        menu,
        price: getPrice,
        utm_source: UTM_SOURCE,
        utm_medium: UTM_MEDIUM,
        utm_campaign: UTM_CAMPAIGN,
        utm_term: UTM_TERM,
        utm_content: UTM_CONTENT,
        referrer: referrer,
        roistat: roistat_visit,
      }

      await console.log(JSON.stringify(data))

      await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      // await setPrice("420")
      await setSubmitting(false)
      await setFieldValue("success", true)
      setTimeout(() => {
        resetForm()
        document.querySelector('[name="price"]').value = 420
        document.querySelector("#price").textContent = 420
        // window.location.href = "/thank-you"
        // window.dataLayer.push({
        //   event: "ga.pageview",
        //   pageURL: "/thank-you",
        //   pageType: "Purchase",
        // })
      }, 2000)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(MainFormLayout)
