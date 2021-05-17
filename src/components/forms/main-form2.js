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

import { getCookie, getReferrer, getUTM } from '../../helpers';
import { Button2 } from '../button2';
import stylesRadio from '../calculator2/calc2.module.css';
import { Price } from '../price';
import styles from './form.module.css';
import option3Img from './icons/icon-2months.svg';
import option1Img from './icons/icon-demo.svg';
import option2Img from './icons/icon-month.svg';
import nabiratIcon from './icons/nabirat-icon.svg';
import udrzovatIcon from './icons/udrzovat-icon.svg';
import zhubnostIcon from './icons/zhubnout-icon.svg';
import mainFormStyles from './main-form2.module.css';
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
  return <MainForm2 />
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
  const [osob, setOsob] = useState("1 osoba")
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
            price = 450
          }
          if (menu === "3chodové menu") {
            price = 370
          }
          if (menu === "2chodové menu") {
            price = 285
          }
          break
        case "Udržovat":
          if (menu === "5chodové menu") {
            price = 470
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
            price = 490
          }
          if (menu === "3chodové menu") {
            price = 400
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
            price = 430
          }
          if (menu === "3chodové menu") {
            price = 360
          }
          if (menu === "2chodové menu") {
            price = 275
          }
          break
        case "Udržovat":
          if (menu === "5chodové menu") {
            price = 450
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
            price = 470
          }
          if (menu === "3chodové menu") {
            price = 390
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
            price = 415
          }
          if (menu === "3chodové menu") {
            price = 340
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
            price = 455
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

    if (osob === "1 osoba") {
      setOldPrice(null)
    }

    if (osob === "2 osoby") {
      setOldPrice(price)
      price = (price - price * (10 / 100)).toFixed()
    }

    if (osob === "3 osoby" || osob === ">3") {
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
      case "1 osoba":
        return t("forms.mainFormNumberOfPersonOption1")
      case "2 osoby":
        return t("forms.mainFormNumberOfPersonOption2")
      case "3 osoby":
        return t("forms.mainFormNumberOfPersonOption3")
      case ">3":
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
        name="zavolejte-mi"
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

                <label htmlFor="plan1">
                  <img
                    src={zhubnostIcon}
                    className={stylesRadio.img}
                    alt="icon"
                  />
                  {t("forms.mainFormGoalOption1")}
                </label>
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
                <label htmlFor="plan2">
                  <img
                    src={udrzovatIcon}
                    className={stylesRadio.img}
                    alt="icon"
                  />
                  {t("forms.mainFormGoalOption2")}
                </label>
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
                <label htmlFor="plan3">
                  <img
                    src={nabiratIcon}
                    className={stylesRadio.img}
                    alt="icon"
                  />
                  {t("forms.mainFormGoalOption3")}
                </label>
              </div>
            </div>
          </div>
          <div
            className={cx(
              styles.inputField,
              mainFormStyles.inputField,
              mainFormStyles.inputFieldRow
            )}
          >
            <div className={mainFormStyles.inputFieldColumn}>
              <RadioButtonGroup
                id="radioGroup"
                value={values.program}
                error={errors.program}
                touched={touched.program}
                onChange={e => {
                  onSetProgram(e.target.value)
                }}
                className={stylesRadio.radioGroup}
              >
                <h5 className={mainFormStyles.inputFieldTitle}>
                  {t("forms.mainFormProgramLabel2")}
                </h5>
                <div className={stylesRadio.radioPanel}>
                  <FastField
                    component={RadioButton}
                    name="program"
                    id="option1"
                    label="2 týdny"
                    title={t("forms.mainFormProgramOption1")}
                  />
                  <FastField
                    component={RadioButton}
                    name="program"
                    id="option2"
                    label="Měsíc"
                    title={t("forms.mainFormProgramOption2")}
                  />
                  <FastField
                    component={RadioButton}
                    name="program"
                    id="option3"
                    label="Dva měsíce"
                    title={t("forms.mainFormProgramOption3")}
                  />
                </div>
              </RadioButtonGroup>
            </div>
            <div className={mainFormStyles.inputFieldColumn}>
              <RadioButtonGroup
                id="radioGroup2"
                value={values.menu}
                error={errors.menu}
                touched={touched.menu}
                onChange={e => {
                  onSetMenu(e.target.value)
                  setFieldValue("menu", e.target.value)
                }}
                className={stylesRadio.radioGroup}
              >
                <h5 className={mainFormStyles.inputFieldTitle}>
                  {t("forms.mainFormMenuLabel")}
                </h5>
                <div className={stylesRadio.radioPanel}>
                  <FastField
                    component={RadioButton}
                    name="menu"
                    id="menu_option3"
                    label="2chodové menu"
                    title={t("forms.mainForm2MenuOption3")}
                  />
                  <FastField
                    component={RadioButton}
                    name="menu"
                    id="menu_option2"
                    label="3chodové menu"
                    title={t("forms.mainForm2MenuOption2")}
                  />
                  <FastField
                    component={RadioButton}
                    name="menu"
                    id="menu_option1"
                    label="5chodové menu"
                    title={t("forms.mainForm2MenuOption1")}
                  />
                </div>
              </RadioButtonGroup>
            </div>
          </div>
          <div className={cx(styles.inputField, mainFormStyles.inputField)}>
            <h5 className={mainFormStyles.inputFieldTitle}>
              {t("forms.mainFormNumberOfPersonLabel")}
            </h5>
            <div className={stylesRadio.radioLines}>
              <div className={cx(stylesRadio.radioLine)}>
                <input
                  id="osob1"
                  type="radio"
                  name="osob"
                  value="1 osoba"
                  checked={values.osob === "1 osoba"}
                  onChange={e => {
                    onSetOsob(e.target.value)
                    setFieldValue("osob", "1 osoba")
                  }}
                />

                <label htmlFor="osob1">
                  <span className={stylesRadio.text}>
                    {t("forms.mainForm2NumberOfPersonOption1")}
                  </span>
                  <span className={stylesRadio.line}></span>
                </label>
              </div>
              <div className={cx(stylesRadio.radioLine)}>
                <input
                  id="osob2"
                  type="radio"
                  name="osob"
                  value="2 osoby"
                  checked={values.osob === "2 osoby"}
                  onChange={e => {
                    onSetOsob(e.target.value)
                    setFieldValue("osob", "2 osoby")
                  }}
                />

                <label htmlFor="osob2">
                  <span className={stylesRadio.text}>
                    {t("forms.mainForm2NumberOfPersonOption2")}
                  </span>
                  <span className={stylesRadio.line}></span>
                </label>
              </div>
              <div className={cx(stylesRadio.radioLine)}>
                <input
                  id="osob3"
                  type="radio"
                  name="osob"
                  value="3 osoby"
                  checked={values.osob === "3 osoby"}
                  onChange={e => {
                    onSetOsob(e.target.value)
                    setFieldValue("osob", "3 osoby")
                  }}
                />

                <label htmlFor="osob3">
                  <span className={stylesRadio.text}>
                    {t("forms.mainForm2NumberOfPersonOption3")}
                  </span>
                  <span className={stylesRadio.line}></span>
                </label>
              </div>
              <div className={cx(stylesRadio.radioLine)}>
                <input
                  id="osob4"
                  type="radio"
                  name="osob"
                  value=">3"
                  checked={values.osob === ">3"}
                  onChange={e => {
                    onSetOsob(e.target.value)
                    setFieldValue("osob", ">3")
                  }}
                />
                <label htmlFor="osob4">
                  <span className={stylesRadio.text}>
                    {t("forms.mainForm2NumberOfPersonOption4")}
                  </span>
                  <span className={stylesRadio.line}></span>
                </label>
              </div>
            </div>
          </div>
          <Price price={price} oldPrice={oldPrice} plan={plan} isNew={true} />
        </div>
        <div className={mainFormStyles.mainFormWrap}>
          <div className={styles.inputField}>
            <label className={cx(styles.label, mainFormStyles.inputFieldLabel)}>
              {t("forms.mainFormTelLabel")}*
            </label>
            <div className={mainFormStyles.inputWrap}>
              <svg
                className={mainFormStyles.inputIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.5C14.4853 17.5 16.5 15.4853 16.5 13C16.5 10.5147 14.4853 8.50001 12 8.50001C9.51472 8.50001 7.5 10.5147 7.5 13C7.5 15.4853 9.51472 17.5 12 17.5Z"
                  fill="#F3F3F1"
                />
                <path
                  d="M14.9053 6.16667H9.09467C8.766 6.16667 8.5 5.90067 8.5 5.572V5.09467C8.5 4.766 8.766 4.5 9.09467 4.5H14.9053C15.234 4.5 15.5 4.766 15.5 5.09467V5.572C15.5 5.90067 15.234 6.16667 14.9053 6.16667Z"
                  fill="#3DC383"
                />
                <path
                  d="M7.5 8.83337H4.5V8.50004C4.5 7.76337 5.09667 7.1667 5.83333 7.1667H6.16667C6.90333 7.1667 7.5 7.76337 7.5 8.50004V8.83337Z"
                  fill="#3DC383"
                />
                <path
                  d="M16.5 8.83337H19.5V8.50004C19.5 7.76337 18.9033 7.1667 18.1667 7.1667H17.8333C17.0967 7.1667 16.5 7.76337 16.5 8.50004V8.83337Z"
                  fill="#3DC383"
                />
                <path
                  d="M5.66602 19.5V17C5.66602 15.7933 6.46602 14.78 7.55935 14.4466H16.4394C17.5327 14.78 18.3327 15.7933 18.3327 17V19.5H5.66602Z"
                  fill="#F3F3F1"
                />
                <path
                  d="M12.6667 17.4467C12.4467 17.48 12.2267 17.5 12 17.5C10.2133 17.5 8.67333 16.46 7.95333 14.9533C7.86667 14.7933 7.79333 14.62 7.74 14.4467C7.58 13.9933 7.5 13.5067 7.5 13C7.5 10.5133 9.51333 8.50001 12 8.50001C12.2267 8.50001 12.4467 8.52001 12.6667 8.55334C10.4933 8.87334 8.83333 10.74 8.83333 13C8.83333 13.5067 8.91333 13.9933 9.07333 14.4467C9.60667 16.02 10.98 17.2 12.6667 17.4467Z"
                  fill="#D5DBE1"
                />
                <path
                  d="M9.83333 5.09333V5.57333C9.83333 5.9 10.1 6.16667 10.4267 6.16667H9.09333C8.76667 6.16667 8.5 5.9 8.5 5.57333V5.09333C8.5 4.76667 8.76667 4.5 9.09333 4.5H10.4267C10.1 4.5 9.83333 4.76667 9.83333 5.09333Z"
                  fill="#00B871"
                />
                <path
                  d="M6.66666 7.2667C6.18 7.46004 5.83333 7.94004 5.83333 8.50004V8.83337H4.5V8.50004C4.5 7.7667 5.1 7.1667 5.83333 7.1667H6.16666C6.34 7.1667 6.51333 7.20004 6.66666 7.2667Z"
                  fill="#00B871"
                />
                <path
                  d="M18.6667 7.2667C18.18 7.46004 17.8333 7.94004 17.8333 8.50004V8.83337H16.5V8.50004C16.5 7.7667 17.1 7.1667 17.8333 7.1667H18.1667C18.34 7.1667 18.5133 7.20004 18.6667 7.2667Z"
                  fill="#00B871"
                />
                <path
                  d="M12.666 17.4466C12.446 17.48 12.226 17.5 11.9994 17.5C10.2127 17.5 8.67268 16.46 7.95268 14.9533C7.37268 15.4466 6.99935 16.18 6.99935 17V19.5H5.66602V17C5.66602 15.7933 6.46602 14.78 7.55935 14.4466H9.07268C9.60602 16.02 10.9794 17.2 12.666 17.4466Z"
                  fill="#D5DBE1"
                />
                <path
                  d="M12 18C9.24267 18 7 15.7573 7 13C7 10.2427 9.24267 7.99999 12 7.99999C14.7573 7.99999 17 10.2427 17 13C17 15.7573 14.7573 18 12 18ZM12 8.99999C9.794 8.99999 8 10.794 8 13C8 15.206 9.794 17 12 17C14.206 17 16 15.206 16 13C16 10.794 14.206 8.99999 12 8.99999Z"
                  fill="#353643"
                />
                <path
                  d="M18.8333 19.5001H17.8333V17.0001C17.8333 16.04 17.2146 15.206 16.2939 14.9254L16.5859 13.968C17.9306 14.378 18.8333 15.596 18.8333 17.0001V19.5001Z"
                  fill="#353643"
                />
                <path
                  d="M6.16699 19.5001H5.16699V17.0001C5.16699 15.5967 6.06966 14.378 7.41433 13.968L7.70633 14.9254C6.78566 15.206 6.16699 16.04 6.16699 17.0001V19.5001Z"
                  fill="#353643"
                />
                <path
                  d="M12.5 6.3333H13.5V8.3333H12.5V6.3333Z"
                  fill="#353643"
                />
                <path
                  d="M10.5 6.3333H11.5V8.3333H10.5V6.3333Z"
                  fill="#353643"
                />
                <path d="M4 19.0001H20V20.0001H4V19.0001Z" fill="#353643" />
                <path
                  d="M14.9053 6.66668H9.094C8.49067 6.66668 8 6.17601 8 5.57201V5.09468C8 4.49067 8.49067 4.00001 9.09467 4.00001H14.906C15.5093 4.00001 16 4.49067 16 5.09468V5.57268C16 6.17601 15.5093 6.66668 14.9053 6.66668ZM9.09467 5.00001C9.04267 5.00001 9 5.04201 9 5.09468V5.57268C9 5.62468 9.042 5.66734 9.09467 5.66734H14.906C14.958 5.66734 15.0007 5.62534 15.0007 5.57268V5.09468C15.0007 5.04268 14.9587 5.00001 14.906 5.00001H9.09467Z"
                  fill="#353643"
                />
                <path
                  d="M6.5 7.16663H5.5V6.66662C5.5 5.65529 6.322 4.83329 7.33333 4.83329H8.33333V5.83329H7.33333C6.874 5.83329 6.5 6.20729 6.5 6.66662V7.16663Z"
                  fill="#353643"
                />
                <path
                  d="M7.5 9.33326H4.5C4.224 9.33326 4 9.10926 4 8.83326V8.49993C4 7.4886 4.822 6.6666 5.83333 6.6666H6.16667C7.178 6.6666 8 7.4886 8 8.49993V8.83326C8 9.10926 7.776 9.33326 7.5 9.33326ZM5.01667 8.33326H6.98267C6.90533 7.95326 6.56867 7.6666 6.166 7.6666H5.83267C5.43067 7.6666 5.09467 7.95326 5.01667 8.33326Z"
                  fill="#353643"
                />
                <path
                  d="M18.5003 7.16663H17.5003V6.66662C17.5003 6.20729 17.1263 5.83329 16.667 5.83329H15.667V4.83329H16.667C17.6783 4.83329 18.5003 5.65529 18.5003 6.66662V7.16663Z"
                  fill="#353643"
                />
                <path
                  d="M19.5 9.33326H16.5C16.224 9.33326 16 9.10926 16 8.83326V8.49993C16 7.4886 16.822 6.6666 17.8333 6.6666H18.1667C19.178 6.6666 20 7.4886 20 8.49993V8.83326C20 9.10926 19.776 9.33326 19.5 9.33326ZM17.0167 8.33326H18.9827C18.9053 7.95326 18.5687 7.6666 18.166 7.6666H17.8327C17.4307 7.6666 17.0947 7.95326 17.0167 8.33326Z"
                  fill="#353643"
                />
                <path
                  d="M12 10.6666C12.2761 10.6666 12.5 10.4427 12.5 10.1666C12.5 9.89045 12.2761 9.6666 12 9.6666C11.7239 9.6666 11.5 9.89045 11.5 10.1666C11.5 10.4427 11.7239 10.6666 12 10.6666Z"
                  fill="#353643"
                />
                <path
                  d="M12 16.3333C12.2761 16.3333 12.5 16.1094 12.5 15.8333C12.5 15.5572 12.2761 15.3333 12 15.3333C11.7239 15.3333 11.5 15.5572 11.5 15.8333C11.5 16.1094 11.7239 16.3333 12 16.3333Z"
                  fill="#353643"
                />
                <path
                  d="M14.833 13.4999C15.1091 13.4999 15.333 13.2761 15.333 12.9999C15.333 12.7238 15.1091 12.4999 14.833 12.4999C14.5569 12.4999 14.333 12.7238 14.333 12.9999C14.333 13.2761 14.5569 13.4999 14.833 13.4999Z"
                  fill="#353643"
                />
                <path
                  d="M9.16602 13.4999C9.44216 13.4999 9.66602 13.2761 9.66602 12.9999C9.66602 12.7238 9.44216 12.4999 9.16602 12.4999C8.88987 12.4999 8.66602 12.7238 8.66602 12.9999C8.66602 13.2761 8.88987 13.4999 9.16602 13.4999Z"
                  fill="#353643"
                />
                <path
                  d="M14.3546 11.3505C14.5499 11.1553 14.5499 10.8387 14.3546 10.6434C14.1593 10.4482 13.8428 10.4482 13.6475 10.6434C13.4522 10.8387 13.4522 11.1553 13.6475 11.3505C13.8428 11.5458 14.1593 11.5458 14.3546 11.3505Z"
                  fill="#353643"
                />
                <path
                  d="M10.3478 15.3566C10.543 15.1613 10.543 14.8447 10.3478 14.6495C10.1525 14.4542 9.83592 14.4542 9.64066 14.6495C9.4454 14.8447 9.4454 15.1613 9.64066 15.3566C9.83592 15.5519 10.1525 15.5519 10.3478 15.3566Z"
                  fill="#353643"
                />
                <path
                  d="M14.3546 15.3573C14.5499 15.162 14.5499 14.8454 14.3546 14.6502C14.1593 14.4549 13.8428 14.4549 13.6475 14.6502C13.4522 14.8454 13.4522 15.162 13.6475 15.3573C13.8428 15.5525 14.1593 15.5525 14.3546 15.3573Z"
                  fill="#353643"
                />
                <path
                  d="M10.3478 11.3499C10.543 11.1546 10.543 10.8381 10.3478 10.6428C10.1525 10.4475 9.83592 10.4475 9.64066 10.6428C9.4454 10.8381 9.4454 11.1546 9.64066 11.3499C9.83593 11.5452 10.1525 11.5452 10.3478 11.3499Z"
                  fill="#353643"
                />
              </svg>

              <FastField
                component="input"
                type="text"
                name="phone"
                className={cx(styles.input, mainFormStyles.input)}
                placeholder="Telefon*"
              />
            </div>

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
            <div className={mainFormStyles.inputWrap}>
              <svg
                className={mainFormStyles.inputIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52582 11.5746C8.44649 9.95061 8.96382 6.91862 11.3505 4.62795C11.6298 4.35928 12.0678 4.53862 12.1265 4.94128C12.6898 8.79528 16.7632 10.5353 15.1065 15.3479C14.0912 18.2979 10.6552 19.7093 8.02849 18.2579C6.00049 17.1379 4.93249 14.9593 5.21049 12.5346C5.34516 11.3613 5.65382 10.1386 6.50316 9.39595C6.75849 9.17262 7.14449 9.32328 7.24316 9.66528C7.49916 10.5579 7.87849 11.0719 8.52582 11.5746Z"
                  fill="#F3F3F1"
                />
                <path
                  d="M13.9994 15.5C14.4596 15.5 14.8327 15.1269 14.8327 14.6666C14.8327 14.2064 14.4596 13.8333 13.9994 13.8333C13.5391 13.8333 13.166 14.2064 13.166 14.6666C13.166 15.1269 13.5391 15.5 13.9994 15.5Z"
                  fill="#3DC383"
                />
                <path
                  d="M18.0003 19.5C18.4606 19.5 18.8337 19.1269 18.8337 18.6667C18.8337 18.2064 18.4606 17.8333 18.0003 17.8333C17.5401 17.8333 17.167 18.2064 17.167 18.6667C17.167 19.1269 17.5401 19.5 18.0003 19.5Z"
                  fill="#3DC383"
                />
                <path
                  d="M9.52847 18.258C7.50047 17.138 6.4318 14.9593 6.71047 12.5347C6.80714 11.692 6.99714 10.826 7.4098 10.1287C7.35047 9.98266 7.2918 9.83666 7.24314 9.666C7.14514 9.324 6.75847 9.17333 6.50314 9.39666C5.6538 10.1387 5.34514 11.362 5.21047 12.5353C4.93247 14.9607 6.00114 17.1387 8.02847 18.2587C8.97114 18.7793 10.0165 18.926 11.0185 18.7707C10.5078 18.6873 10.0045 18.5213 9.52847 18.258Z"
                  fill="#D5DBE1"
                />
                <path
                  d="M14.666 14.6666C14.666 14.54 14.6987 14.4233 14.7494 14.316C14.616 14.0326 14.3327 13.8333 13.9993 13.8333C13.5393 13.8333 13.166 14.2066 13.166 14.6666C13.166 15.1266 13.5393 15.5 13.9993 15.5C14.3327 15.5 14.616 15.3006 14.7494 15.0173C14.6987 14.91 14.666 14.7933 14.666 14.6666Z"
                  fill="#00B871"
                />
                <path
                  d="M18.667 18.6667C18.667 18.54 18.6997 18.4233 18.7503 18.316C18.617 18.0327 18.3337 17.8333 18.0003 17.8333C17.5403 17.8333 17.167 18.2067 17.167 18.6667C17.167 19.1267 17.5403 19.5 18.0003 19.5C18.3337 19.5 18.617 19.3007 18.7503 19.0174C18.6997 18.91 18.667 18.7934 18.667 18.6667Z"
                  fill="#00B871"
                />
                <path
                  d="M10.4075 19.3347C9.52013 19.3347 8.65213 19.1214 7.86613 18.7007C5.6088 17.4861 4.40213 15.1001 4.7148 12.4741C4.83813 11.4314 5.1268 9.93674 6.2148 9.01207C6.4588 8.80674 6.78613 8.73741 7.09146 8.82807C7.41946 8.92541 7.6768 9.18474 7.7788 9.52141C7.88013 9.86741 7.99746 10.1447 8.15413 10.3894C8.3548 8.49474 9.21346 6.09741 11.1768 4.26474C11.4408 4.01474 11.8021 3.93341 12.1455 4.05274C12.4975 4.17474 12.7515 4.48808 12.8075 4.87074C13.0215 6.28341 13.7088 7.43341 14.4348 8.65074C15.0461 9.67408 15.6781 10.7321 15.9835 11.9421C16.0508 12.2101 15.8881 12.4821 15.6208 12.5494C15.3568 12.6167 15.0808 12.4554 15.0135 12.1874C14.7448 11.1194 14.1768 10.1701 13.5768 9.16408C12.8321 7.91741 12.0621 6.62808 11.8181 5.01874C9.6948 7.01541 9.02746 9.78941 9.1128 11.5521C9.1228 11.7461 9.01813 11.9281 8.84746 12.0187C8.67546 12.1087 8.46746 12.0927 8.31213 11.9754C7.53213 11.3854 7.10013 10.7581 6.82013 9.80874C6.23813 10.3047 5.8708 11.2001 5.70746 12.5927C5.44346 14.8027 6.45146 16.8054 8.33813 17.8207C9.38346 18.3807 10.6161 18.4881 11.8035 18.1221C12.0661 18.0414 12.3461 18.1887 12.4288 18.4527C12.5101 18.7167 12.3615 18.9967 12.0981 19.0781C11.5388 19.2494 10.9688 19.3347 10.4075 19.3347Z"
                  fill="#353643"
                />
                <path
                  d="M14.0003 16C13.265 16 12.667 15.402 12.667 14.6667C12.667 13.9313 13.265 13.3333 14.0003 13.3333C14.7357 13.3333 15.3337 13.9313 15.3337 14.6667C15.3337 15.402 14.7357 16 14.0003 16ZM14.0003 14.3333C13.817 14.3333 13.667 14.4827 13.667 14.6667C13.667 14.8507 13.817 15 14.0003 15C14.1837 15 14.3337 14.8507 14.3337 14.6667C14.3337 14.4827 14.1837 14.3333 14.0003 14.3333Z"
                  fill="#353643"
                />
                <path
                  d="M18.0003 20.0001C17.265 20.0001 16.667 19.4021 16.667 18.6667C16.667 17.9314 17.265 17.3334 18.0003 17.3334C18.7357 17.3334 19.3337 17.9314 19.3337 18.6667C19.3337 19.4021 18.7357 20.0001 18.0003 20.0001ZM18.0003 18.3334C17.817 18.3334 17.667 18.4827 17.667 18.6667C17.667 18.8507 17.817 19.0001 18.0003 19.0001C18.1837 19.0001 18.3337 18.8507 18.3337 18.6667C18.3337 18.4827 18.1837 18.3334 18.0003 18.3334Z"
                  fill="#353643"
                />
                <path
                  d="M13.4365 19.2085L17.7736 13.5447L18.5676 14.1527L14.2305 19.8165L13.4365 19.2085Z"
                  fill="#353643"
                />
              </svg>

              <FastField
                component="input"
                type="text"
                name="promo"
                className={cx(styles.input, mainFormStyles.input)}
                placeholder={t("forms.mainFormPromoCodeLabel")}
              />
            </div>

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
          <p className={mainFormStyles.mainFormInfo}>
            *{t("forms.mainFormCTAdesc")}
          </p>
          <div className={mainFormStyles.buttons}>
            <Button2
              color="secondary"
              buttonType="submit"
              disabled={isSubmitting || !checkTerms || !checkTerms2}
              className={mainFormStyles.submitButton}
              hasShadow={true}
            >
              {t("forms.mainFormCTA")}
            </Button2>
            <input type="hidden" name="price" value={price} />
          </div>
        </div>
      </Form>
    </div>
  )
}

export const MainForm2 = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    phone: "+420",
    promo: "",
    plan: "Zhubnout",
    program: "2 týdny",
    menu: "5chodové menu",
    osob: "1 osoba",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    referrer: "",
    ga: "",
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
      const UTMS = getUTM()
      let referrer = getReferrer()

      console.log("UTMS: ", UTMS, "referrer", referrer)

      console.log(
        "referrer directly from LC",
        JSON.parse(localStorage.getItem("referrer"))
      )

      let getPrice = document.querySelector('[name="price"]').value

      const isEn = document.location.pathname.includes("/en")
      const testovani = localStorage.getItem("PUSHTELL-homepage")

      let data = {
        form_name: isEn ? "main-contact-new_en" : "main-contact-new",
        phone,
        promo,
        plan,
        program,
        menu,
        osob,
        price: getPrice,
        utm_source: UTMS.UTM_SOURCE,
        utm_medium: UTMS.UTM_MEDIUM,
        utm_campaign: UTMS.UTM_CAMPAIGN,
        utm_term: UTMS.UTM_TERM,
        utm_content: UTMS.UTM_CONTENT,
        referrer: referrer,
        roistat: getCookie("roistat_visit"),
        ga: getCookie("_ga"),
        testovani: testovani,
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
          testovani: testovani,
        })
      }, 300)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(MainFormLayout)
