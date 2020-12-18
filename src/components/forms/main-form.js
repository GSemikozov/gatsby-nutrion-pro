// import cx from 'classnames';
import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import { useStaticQuery } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Select from 'react-select';
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
import orderFormStyles from './order-form.module.css';

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
  title,
  className,
  withImg = false,
  disabled = false,
  ...props
}) => {
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
        {title}
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
  const [checkTerms, setCheckTerms] = useState(false)
  const [checkTerms2, setCheckTerms2] = useState(false)
  const [osob, setOsob] = useState("1")
  const [oldPrice, setOldPrice] = useState(null)

  const onSetPlan = value => {
    setPlan(value)
    if (value === "Udržovat" || value === "Nabírat") {
      setMenu2xDisabled(true)
    } else {
      setMenu2xDisabled(false)
    }
    trackCustomEvent({
      category: "calc",
      action: value,
      label: "HP",
    })
  }

  const onSetProgram = value => {
    setProgram(value)
    trackCustomEvent({
      category: "calc",
      action: value,
      label: "HP",
    })
  }

  const onSetOsob = value => {
    setOsob(value)
    trackCustomEvent({
      category: "calc",
      action: value,
      label: "HP",
    })
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
    trackCustomEvent({
      category: "calc",
      action: value,
      label: "HP",
    })
  }

  useEffect(() => {
    const priceValue = getPrice(menu, program, plan, osob)
    setPrice(priceValue)
  }, [menu, plan, program, osob])

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
            price = 480
          }
          if (menu === "3chodové menu") {
            price = 380
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
            price = 440
          }
          if (menu === "3chodové menu") {
            price = 360
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
            price = 415
          }
          if (menu === "3chodové menu") {
            price = 340
          }
          if (menu === "2chodové menu") {
            price = 420
          }
          break
        case "Nabírat":
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
      }
    }

    if (osob === "1") {
      setOldPrice(null)
    }

    if (osob === "2") {
      setOldPrice(price)
      price = (price - price * (10 / 100)).toFixed()
    }

    if (osob === "3" || osob === "Více než 3") {
      setOldPrice(price)
      price = (price - price * (20 / 100)).toFixed()
    }

    return price
  }

  const getMenuSelectLabel = value => {
    switch (value) {
      case "5chodové menu":
        return t("forms.mainFormMenuOption1")
      case "3chodové menu":
        return t("forms.mainFormMenuOption2")
      case "2chodové menu":
        return t("forms.mainFormMenuOption3")
      default:
        return
    }
  }

  const getPersonSelectLabel = value => {
    switch (value) {
      case "1":
        return t("forms.mainFormNumberOfPersonOption1")
      case "2":
        return t("forms.mainFormNumberOfPersonOption2")
      case "3":
        return t("forms.mainFormNumberOfPersonOption3")
      case "Více než 3":
        return t("forms.mainFormNumberOfPersonOption4")
      default:
        return
    }
  }

  const { t } = useTranslation()

  return (
    <div className={mainFormStyles.mainFormBox}>
      <Form
        className={mainFormStyles.mainForm}
        name="main-contact"
        method="post"
      >
        <div>
          <div className={cx(styles.inputField, mainFormStyles.inputField)}>
            <h5 className={mainFormStyles.inputFieldTitle}>
              {t("forms.mainFormGoalLabel")}
            </h5>
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

                <label htmlFor="plan1">{t("forms.mainFormGoalOption1")}</label>
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
                <label htmlFor="plan2">{t("forms.mainFormGoalOption2")}</label>
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
                <label htmlFor="plan3">{t("forms.mainFormGoalOption3")}</label>
              </div>
            </div>
          </div>
          <div className={cx(styles.inputField, mainFormStyles.inputField)}>
            <h5 className={mainFormStyles.inputFieldTitle}>
              {t("forms.mainFormProgramLabel")}
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
                title={t("forms.mainFormProgramOption1")}
                withImg={true}
                img={option1Img}
              />
              <FastField
                component={RadioButton}
                name="program"
                id="option2"
                label="Měsíc"
                title={t("forms.mainFormProgramOption2")}
                withImg={true}
                img={option2Img}
              />
              <FastField
                component={RadioButton}
                name="program"
                id="option3"
                label="Dva měsíce"
                title={t("forms.mainFormProgramOption3")}
                withImg={true}
                img={option3Img}
              />
            </RadioButtonGroup>
          </div>
          <div
            className={cx(
              styles.inputField,
              mainFormStyles.inputField,
              mainFormStyles.inputFieldRow
            )}
          >
            <div
              className={cx(
                stylesRadio.radio,
                stylesRadio.radioBtn,
                mainFormStyles.inputFieldColumn
              )}
            >
              <h6 className={orderFormStyles.inputFieldTitleSmall}>
                {t("forms.mainFormMenuLabel")}
              </h6>
              <Select
                options={[
                  {
                    value: "5chodové menu",
                    label: t("forms.mainFormMenuOption1"),
                  },
                  {
                    value: "3chodové menu",
                    label: t("forms.mainFormMenuOption2"),
                  },
                  {
                    value: "2chodové menu",
                    label: t("forms.mainFormMenuOption3"),
                  },
                ]}
                isSearchable={false}
                value={{
                  value: values.menu,
                  label: getMenuSelectLabel(values.menu),
                }}
                onChange={e => {
                  onSetMenu(e.value)
                  setFieldValue("menu", e.value)
                }}
              />
            </div>
            <div
              className={cx(
                stylesRadio.radio,
                stylesRadio.radioBtn,
                mainFormStyles.inputFieldColumn
              )}
            >
              <h6 className={orderFormStyles.inputFieldTitleSmall}>
                {t("forms.mainFormNumberOfPersonLabel")}
              </h6>
              <Select
                options={[
                  {
                    value: "1",
                    label: t("forms.mainFormNumberOfPersonOption1"),
                  },
                  {
                    value: "2",
                    label: t("forms.mainFormNumberOfPersonOption2"),
                  },
                  {
                    value: "3",
                    label: t("forms.mainFormNumberOfPersonOption3"),
                  },
                  {
                    value: "Více než 3",
                    label: t("forms.mainFormNumberOfPersonOption4"),
                  },
                ]}
                isSearchable={false}
                value={{
                  value: values.osob,
                  label: getPersonSelectLabel(values.osob),
                }}
                onChange={e => {
                  onSetOsob(e.value)
                  setFieldValue("osob", e.value)
                }}
              />
            </div>
          </div>
          <Price price={price} oldPrice={oldPrice} plan={plan} />
        </div>
        <div className={mainFormStyles.mainFormWrap}>
          <div className={styles.inputField}>
            <label className={cx(styles.label, mainFormStyles.inputFieldLabel)}>
              {t("forms.mainFormTelLabel")}*
            </label>
            <FastField
              component="input"
              type="text"
              name="phone"
              className={styles.input}
              placeholder="Telefon*"
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
              {t("forms.mainFormPromoCodeLabel")}
            </label>
            <FastField
              component="input"
              type="text"
              name="promo"
              className={styles.input}
              placeholder={t("forms.mainFormPromoCodeLabel")}
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
            <label htmlFor="checkTerms">
              {t("forms.mainFormCheckTerms1Label")}{" "}
              <a href="/terms" target="_blank">
                {t("forms.mainFormCheckTerms2Label")}
              </a>
            </label>
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
            <label htmlFor="checkTerms2">
              {t("forms.mainFormCheckTerms3Label")}
            </label>
          </div>
          <div className={mainFormStyles.buttons}>
            <Button
              name="submit"
              type="primary"
              size="lg"
              buttonType="submit"
              disabled={isSubmitting || !checkTerms || !checkTerms2}
              className={mainFormStyles.submitButton}
            >
              {t("forms.mainFormCTA")}
            </Button>
            <input type="hidden" name="price" value={price} />
          </div>
          <p className={mainFormStyles.mainFormInfo}>
            {t("forms.mainFormCTAdesc")}
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
    osob: "1",
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
      osob: Yup.string(),
    }),
  handleSubmit: async (
    { phone, promo, plan, program, menu, osob },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      let UTM_from_local_storage = JSON.parse(localStorage.getItem("UTM"))
      let UTM_SOURCE = ""
      let UTM_MEDIUM = ""
      let UTM_CAMPAIGN = ""
      let UTM_TERM = ""
      let UTM_CONTENT = ""
      if (UTM_from_local_storage !== null) {
        UTM_SOURCE = UTM_from_local_storage.source
        UTM_MEDIUM = UTM_from_local_storage.medium
        UTM_CAMPAIGN = UTM_from_local_storage.campaign
        UTM_TERM = UTM_from_local_storage.term
        UTM_CONTENT = UTM_from_local_storage.content
      } else {
        let urlString = document.location.href
        let url = new URL(urlString)
        UTM_SOURCE = url.searchParams.get("utm_source")
        UTM_MEDIUM = url.searchParams.get("utm_medium")
        UTM_CAMPAIGN = url.searchParams.get("utm_campaign")
        UTM_TERM = url.searchParams.get("utm_term")
        UTM_CONTENT = url.searchParams.get("utm_content")
      }

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

      const isEn = document.location.pathname.includes("/en")

      let data = {
        form_name: isEn ? "main-contact_en" : "main-contact",
        phone,
        promo,
        plan,
        program,
        menu,
        osob,
        price: getPrice,
        utm_source: UTM_SOURCE,
        utm_medium: UTM_MEDIUM,
        utm_campaign: UTM_CAMPAIGN,
        utm_term: UTM_TERM,
        utm_content: UTM_CONTENT,
        referrer: referrer,
        roistat: roistat_visit,
      }

      // await console.log(JSON.stringify(data))

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
        window.location.href = isEn ? "/en/thank-you" : "/dekovacka-testdrive"
        window.dataLayer.push({
          event: "ga.pageview",
          pageURL: isEn ? "/en/thank-you" : "/dekovacka-testdrive",
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
