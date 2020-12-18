import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { Button } from '../button';
import stylesRadio from '../calculator2/calc.module.css';
import { PriceNY } from '../price/price-ny-program';
import styles from './form.module.css';
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
  return <MainFormNY />
}

const MainFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const [plan, setPlan] = useState("2chodové")
  const [program, setProgram] = useState("10 dní")
  const [price, setPrice] = useState("2500")
  const [plan2disabled, setPlan2Disabled] = useState(false)
  const [plan3disabled, setPlan3Disabled] = useState(false)
  const [menu2xDisabled, setMenu2xDisabled] = useState(false)
  const [checkTerms, setCheckTerms] = useState(false)
  const [checkTerms2, setCheckTerms2] = useState(false)
  const [oldPrice, setOldPrice] = useState(null)

  const onSetPlan = value => {
    setPlan(value)
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

  useEffect(() => {
    const priceValue = getPrice(program, plan)
    setPrice(priceValue)
  }, [program, plan])

  const getPrice = (program, plan) => {
    let price = null
    if (program === "10 dní") {
      if (plan === "5chodové") {
        price = 4500
      }
      if (plan === "3chodové") {
        price = 3500
      }
      if (plan === "2chodové") {
        price = 2500
      }
    }

    if (program === "20 dní") {
      if (plan === "5chodové") {
        price = 8000
      }
      if (plan === "3chodové") {
        price = 6000
      }
      if (plan === "2chodové") {
        price = 4500
      }
    }

    return price
  }

  const { t } = useTranslation()

  return (
    <div className={mainFormStyles.mainFormBox}>
      <Form
        className={mainFormStyles.mainForm}
        name="main-contact-new-year-program"
        method="post"
      >
        <div>
          <div className={cx(styles.inputField, mainFormStyles.inputField)}>
            <h5 className={mainFormStyles.inputFieldTitle}>Počet jídel</h5>
            <div className={stylesRadio.radioBtns3}>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <input
                  id="plan1"
                  type="radio"
                  name="plan"
                  value="2chodové"
                  checked={values.plan === "2chodové"}
                  onChange={e => {
                    onSetPlan(e.target.value)
                    setFieldValue("plan", "2chodové")
                  }}
                />

                <label htmlFor="plan1">2chodové</label>
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
                  value="3chodové"
                  disabled={plan2disabled}
                  checked={values.plan === "3chodové"}
                  onChange={e => {
                    onSetPlan(e.target.value)
                    setFieldValue("plan", "3chodové")
                  }}
                />
                <label htmlFor="plan2">3chodové</label>
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
                  value="5chodové"
                  disabled={plan3disabled}
                  checked={values.plan === "5chodové"}
                  onChange={e => {
                    onSetPlan(e.target.value)
                    setFieldValue("plan", "5chodové")
                  }}
                />
                <label htmlFor="plan3">5chodové</label>
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
                label="10 dní"
                title="10 dní"
                withImg={true}
                img={option1Img}
              />
              <FastField
                component={RadioButton}
                name="program"
                id="option2"
                label="20 dní"
                title="20 dní"
                withImg={true}
                img={option2Img}
              />
            </RadioButtonGroup>
          </div>
          <PriceNY price={price} oldPrice={oldPrice} plan={plan} />
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
        </div>
      </Form>
    </div>
  )
}

export const MainFormNY = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    phone: "+420",
    plan: "Zhubnout",
    program: "2 týdny",
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
      plan: Yup.string(),
      program: Yup.string(),
    }),
  handleSubmit: async (
    { phone, plan, program },
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
        form_name: isEn
          ? "main-contact-new-year-program_en"
          : "main-contact-new-year-program",
        phone,
        plan,
        program,
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
        document.querySelector('[name="price"]').value = 2500
        document.querySelector("#price").textContent = 2500
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
