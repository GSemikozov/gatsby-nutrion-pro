import 'moment/locale/cs';
import 'react-day-picker/lib/style.css';

import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import moment from 'moment';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

import { getCookie, getReferrer, getUTM } from '../../helpers';
import { useLangContext } from '../../utils/lang';
import { Button } from '../button';
import { Button2 } from '../button2';
import stylesRadio from '../calculator2/calc2.module.css';
import { Price2 } from '../order-price2';
import { Summary2 } from '../order-summary2';
import styles from './form.module.css';
import option3Img from './icons/icon-2months.svg';
import option1Img from './icons/icon-demo.svg';
import option2Img from './icons/icon-month.svg';
import nabiratIcon from './icons/nabirat-icon.svg';
import udrzovatIcon from './icons/udrzovat-icon.svg';
import zhubnostIcon from './icons/zhubnout-icon.svg';
import mainFormStyles from './main-form2.module.css';
import orderFormStyles from './order-form2.module.css';

// import cx from 'classnames';
const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test("phone", "Telefonní číslo musí obsahovat 9 znaků", value =>
    rePhoneNumber.test(value)
  )
})

function dateToSystemFormat(date) {
  return moment(date)
    .utc()
    .hours(0)
    .minutes(0)
    .seconds(0)
    .milliseconds(0)
    .toISOString()
}

function getStartDate() {
  let initial = moment.utc().add(3, "days")
  if ([2, 5, 7].indexOf(moment.utc().isoWeekday()) !== -1) {
    initial = moment
      .utc()
      .add(3, "days")
      .hours(0)
      .minutes(0)
      .seconds(0)
      .milliseconds(0)
      .toISOString()
  } else if ([1, 4, 6].indexOf(moment.utc().isoWeekday()) !== -1) {
    initial = moment
      .utc()
      .add(4, "days")
      .hours(0)
      .minutes(0)
      .seconds(0)
      .milliseconds(0)
      .toISOString()
  } else if ([3].indexOf(moment.utc().isoWeekday()) !== -1) {
    initial = moment
      .utc()
      .add(5, "days")
      .hours(0)
      .minutes(0)
      .seconds(0)
      .milliseconds(0)
      .toISOString()
  }

  return initial
}

const pricePreset = {
  "5chodové menu": {
    "2 týdny": {
      1400: 450,
      1600: 470,
      1800: 490,
      2400: 510,
      3000: 530,
      3400: 550,
    },
    Měsíc: {
      1400: 430,
      1600: 450,
      1800: 470,
      2400: 490,
      3000: 510,
      3400: 530,
    },
    "Dva měsíce": {
      1400: 415,
      1600: 435,
      1800: 455,
      2400: 475,
      3000: 495,
      3400: 515,
    },
  },
  "3chodové menu": {
    "2 týdny": {
      1400: 370,
      1600: 380,
      1800: 390,
      2400: 400,
      3000: 410,
      3400: 420,
    },
    Měsíc: {
      1400: 360,
      1600: 370,
      1800: 380,
      2400: 390,
      3000: 400,
      3400: 410,
    },
    "Dva měsíce": {
      1400: 340,
      1600: 350,
      1800: 360,
      2400: 370,
      3000: 380,
      3400: 390,
    },
  },
  "2chodové menu": {
    "2 týdny": {
      1400: 285,
      1600: 285,
      1800: 285,
      2400: 285,
      3000: 285,
      3400: 285,
    },
    Měsíc: {
      1400: 275,
      1600: 275,
      1800: 275,
      2400: 275,
      3000: 275,
      3400: 275,
    },
    "Dva měsíce": {
      1400: 260,
      1600: 260,
      1800: 260,
      2400: 260,
      3000: 260,
      3400: 260,
    },
  },
}

function energyRange(energyPerDay) {
  if (energyPerDay <= 1400) {
    return 1400
  }
  if (energyPerDay <= 1600) {
    return 1600
  }
  if (energyPerDay <= 1800) {
    return 1800
  }
  if (energyPerDay <= 2400) {
    return 2400
  }
  if (energyPerDay <= 3000) {
    return 3000
  }
  return 3400
}

const kCalOptions = {
  Zhubnout: {
    female: {
      "5chodové menu": [
        { value: 1600, label: "1600 kCal" },
        { value: 1800, label: "1800 kCal" },
      ],
      "3chodové menu": [
        { value: 1100, label: "1100 kCal" },
        { value: 1300, label: "1300 kCal" },
      ],
      "2chodové menu": [{ value: 1000, label: "1000 kCal" }],
    },
    male: {
      "5chodové menu": [
        { value: 1800, label: "1800 kCal" },
        { value: 2000, label: "2000 kCal" },
      ],
      "3chodové menu": [
        { value: 1600, label: "1600 kCal" },
        { value: 1800, label: "1800 kCal" },
      ],
      "2chodové menu": [{ value: 1000, label: "1000 kCal" }],
    },
  },
  Udržovat: {
    female: {
      "5chodové menu": [
        { value: 1900, label: "1900 kCal" },
        { value: 2100, label: "2100 kCal" },
      ],
      "3chodové menu": [
        { value: 1400, label: "1400 kCal" },
        { value: 1600, label: "1600 kCal" },
      ],
      "2chodové menu": [{ value: 1000, label: "1000 kCal" }],
    },
    male: {
      "5chodové menu": [
        { value: 2100, label: "2100 kCal" },
        { value: 2300, label: "2300 kCal" },
      ],
      "3chodové menu": [{ value: 1900, label: "1900 kCal" }],
      "2chodové menu": [{ value: 1000, label: "1000 kCal" }],
    },
  },
  Nabírat: {
    female: {
      "5chodové menu": [
        { value: 2200, label: "2200 kCal" },
        { value: 2600, label: "2600 kCal" },
      ],
      "3chodové menu": [
        { value: 0, label: "0 kCal" },
        { value: 0, label: "0 kCal" },
      ],
      "2chodové menu": [{ value: 1000, label: "1000 kCal" }],
    },
    male: {
      "5chodové menu": [
        { value: 2400, label: "2400 kCal" },
        { value: 2600, label: "2600 kCal" },
      ],
      "3chodové menu": [{ value: 0, label: "0 kCal" }],
      "2chodové menu": [{ value: 1000, label: "1000 kCal" }],
    },
  },
}

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
  return <OrderForm2 />
}

const OrderFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const [plan, setPlan] = useState("Zhubnout")
  const [program, setProgram] = useState("2 týdny")
  const [menu, setMenu] = useState("5chodové menu")
  const [week, setWeek] = useState(5)
  const [gender, setGender] = useState("female")
  const [deliveryTime, setDeliveryTime] = useState("17:00-19:00")
  const [kcal, setKcal] = useState(1600)
  const [price, setPrice] = useState("420")
  const [kcalDisabled, setKcalDisabled] = useState(false)
  const [menu2xDisabled, setMenu2xDisabled] = useState(true)
  const [menu3xDisabled, setMenu3xDisabled] = useState(true)
  const [checkTerms, setCheckTerms] = useState(false)
  const [checkTerms2, setCheckTerms2] = useState(false)
  const [step, setStep] = useState(1)

  const gotoNextStep = () => {
    setStep(prev => prev + 1)
  }

  const gotoPrevStep = () => {
    setStep(prev => prev - 1)
  }

  const gotoStep = step => {
    setStep(step)
  }

  const { lang } = useLangContext()
  const { t } = useTranslation()

  const options = [
    { value: 5, label: t("forms.onlineOrderFormWeekLengthOption1") },
    { value: 6, label: t("forms.onlineOrderFormWeekLengthOption2") },
  ]

  const goal = [
    {
      value: "Zhubnout",
      label: t("forms.onlineOrderFormGoalLoss"),
      disabled: false,
    },
    {
      value: "Udržovat",
      label: t("forms.onlineOrderFormGoalMaintenance"),
      disabled: false,
    },
    {
      value: "Nabírat",
      label: t("forms.onlineOrderFormGoalGain"),
      disabled: false,
    },
  ]

  // const mealsPerDay = menu === "2chodové menu" ? 2 : menu === "3chodové menu" ? 3 : 5
  // const diet = plan === "Zhubnout" ? "loose" : plan === "Udržovat" ? "keep" : "gain"

  const onSetKcal = value => {
    setKcal(value)
    trackCustomEvent({
      category: "order",
      action: value,
      label: "HP",
    })
  }

  const onSetPlan = value => {
    setPlan(value)
    setKcal(Number(kCalOptions[value][gender][menu][0].value))
    setFieldValue("kcal", Number(kCalOptions[value][gender][menu][0].value))
    if (value === "Nabírat") {
      setMenu3xDisabled(true)
    } else {
      setMenu3xDisabled(false)
    }

    if (value === "Udržovat" || value === "Nabírat") {
      setMenu2xDisabled(true)
    } else {
      setMenu2xDisabled(false)
    }

    trackCustomEvent({
      category: "order",
      action: value,
      label: "HP",
    })
  }

  const onSetGender = value => {
    console.log("onSetGender triggered", value)
    setGender(value)
    setKcal(Number(kCalOptions[plan][value][menu][0].value))
    setFieldValue("kcal", Number(kCalOptions[plan][value][menu][0].value))
  }

  const onSetProgram = value => {
    console.log("onSetProgram triggered")
    setProgram(value)
    trackCustomEvent({
      category: "order",
      action: value,
      label: "HP",
    })
  }

  const onSetMenu = value => {
    console.log("onSetMenu", value)
    setMenu(value)
    setKcal(Number(kCalOptions[plan][gender][value][0].value))
    setFieldValue("kcal", Number(kCalOptions[plan][gender][value][0].value))
    if (value === "2chodové menu") {
      setKcalDisabled(true)
    } else {
      setKcalDisabled(false)
    }
    trackCustomEvent({
      category: "order",
      action: value,
      label: "HP",
    })
  }

  const onSetWeek = value => {
    setWeek(value)
    trackCustomEvent({
      category: "order",
      action: value,
      label: "HP",
    })
  }

  const getPrice = (menu, program, plan, kcal) => {
    let price = null
    const kcalRange = energyRange(kcal)
    price = pricePreset[menu][program][kcalRange]
    return price
  }

  const dateStyle = {
    height: "36px",
    padding: "7px 20px",
    fontSize: "18px",
    border: "none",
    borderRadius: 20,
    textAlign: "center",
    readOnly: true,
    backgroundColor: "#fff",
    outline: "none",
  }

  /*  step2, time range input  */
  const steps = [1, 2, 3, 4]
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const handleInputChange = e => {
    setCurrentStepIndex(e.currentTarget.value)
    setDeliveryTime(getTimeRange(e.currentTarget.value))
    setFieldValue("deliveryTime", getTimeRange(e.currentTarget.value))
  }

  const getTimeRange = index => {
    switch (true) {
      case steps[index] === 1:
        return "17:00-19:00"
      case steps[index] === 2:
        return "18:00-20:00"
      case steps[index] === 3:
        return "19:00-21:00"
      case steps[index] === 4:
        return "20:00-22:00"
      default:
        return ""
    }
  }

  useEffect(() => {
    console.log("calc menu", menu)
    console.log("calc program", program)
    console.log("calc plan", plan)
    console.log("calc kcal", kcal)
    const priceValue = getPrice(menu, program, plan, kcal)
    console.log("priceValue", priceValue)
    setPrice(priceValue)
  }, [menu, plan, program, week, kcal])

  return (
    <div className={orderFormStyles.orderFormBox}>
      <Form className={orderFormStyles.orderForm} name="order" method="post">
        <div className={orderFormStyles.orderFormInner}>
          <div className={orderFormStyles.orderFormProgress}>
            <div
              className={cx(orderFormStyles.orderFormProgressItem, {
                [orderFormStyles.active]: step === 1,
                [orderFormStyles.done]: step && step !== 1,
              })}
              onClick={() => gotoStep(1)}
            >
              <span>{t("home.order.step1title")}</span>
            </div>
            <div
              className={cx(orderFormStyles.orderFormProgressDivider, {
                [orderFormStyles.orderFormProgressDividerDone]:
                  step && step !== 1,
              })}
            >
              <span
                className={cx(orderFormStyles.orderFormProgressDividerItem, {
                  [orderFormStyles.xsHidden]: step === 2,
                })}
              ></span>
              <span
                className={orderFormStyles.orderFormProgressDividerItem}
              ></span>
              <span
                className={cx(orderFormStyles.orderFormProgressDividerItem, {
                  [orderFormStyles.xsHidden]: step === 2,
                })}
              ></span>
            </div>
            <div
              className={cx(orderFormStyles.orderFormProgressItem, {
                [orderFormStyles.active]: step === 2,
                [orderFormStyles.done]: step && step !== 1 && step !== 2,
              })}
              onClick={() => gotoStep(2)}
            >
              <span>{t("home.order.step2title")}</span>
            </div>
            <div
              className={cx(orderFormStyles.orderFormProgressDivider, {
                [orderFormStyles.orderFormProgressDividerDone]:
                  step && step !== 1 && step !== 2,
              })}
            >
              <span
                className={cx(orderFormStyles.orderFormProgressDividerItem, {
                  [orderFormStyles.xsHidden]: step === 2,
                })}
              ></span>
              <span
                className={orderFormStyles.orderFormProgressDividerItem}
              ></span>
              <span
                className={cx(orderFormStyles.orderFormProgressDividerItem, {
                  [orderFormStyles.xsHidden]: step === 2,
                })}
              ></span>
            </div>
            <div
              className={cx(orderFormStyles.orderFormProgressItem, {
                [orderFormStyles.active]: step === 3,
                [orderFormStyles.done]:
                  step && step !== 1 && step !== 2 && step !== 3,
              })}
              onClick={() => gotoStep(3)}
            >
              <span>{t("home.order.step3title")}</span>
            </div>
          </div>
          <div className={orderFormStyles.steps}>
            <div
              className={cx(orderFormStyles.step1, {
                [orderFormStyles.step1active]: step === 1,
              })}
            >
              <div className={cx(orderFormStyles.cel)}>
                <h5
                  className={cx(
                    mainFormStyles.inputFieldTitle,
                    orderFormStyles.celTitle
                  )}
                >
                  {t("forms.mainFormGoalLabel")}
                </h5>
                <div className={cx(orderFormStyles.celItems)}>
                  <div
                    className={cx(
                      stylesRadio.radio,
                      stylesRadio.radioBtn,
                      orderFormStyles.radioBtn
                    )}
                  >
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
                    className={cx(
                      stylesRadio.radio,
                      stylesRadio.radioBtn,
                      orderFormStyles.radioBtn
                    )}
                  >
                    <input
                      id="plan2"
                      type="radio"
                      name="plan"
                      value="Udržovat"
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
                    className={cx(
                      stylesRadio.radio,
                      stylesRadio.radioBtn,
                      orderFormStyles.radioBtn
                    )}
                  >
                    <input
                      id="plan3"
                      type="radio"
                      name="plan"
                      value="Nabírat"
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
              <div className={cx(orderFormStyles.program)}>
                <RadioButtonGroup
                  id="radioGroup"
                  value={values.program}
                  error={errors.program}
                  touched={touched.program}
                  onChange={e => {
                    onSetProgram(e.target.value)
                  }}
                  className={cx(
                    stylesRadio.radioGroup,
                    orderFormStyles.radioGroup
                  )}
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
              <div className={cx(orderFormStyles.menu)}>
                <RadioButtonGroup
                  id="radioGroup2"
                  value={values.menu}
                  error={errors.menu}
                  touched={touched.menu}
                  onChange={e => {
                    onSetMenu(e.target.value)
                    setFieldValue("menu", e.target.value)
                  }}
                  className={cx(
                    stylesRadio.radioGroup,
                    orderFormStyles.radioGroup
                  )}
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
              <div className={orderFormStyles.kal}>
                <h5
                  className={cx(
                    mainFormStyles.inputFieldTitle,
                    orderFormStyles.kalTitle
                  )}
                >
                  {t("home.order.kalLabel")}
                </h5>
                <div
                  className={cx(
                    stylesRadio.radioLines,
                    orderFormStyles.radioLines
                  )}
                >
                  {kCalOptions[plan][gender][menu].map((item, idx) => {
                    return (
                      <div className={cx(stylesRadio.radioLine)}>
                        <input
                          id={`kcal${idx}`}
                          type="radio"
                          name="kcal"
                          value={item.value}
                          checked={values.kcal === item.value}
                          onChange={e => {
                            onSetKcal(+e.target.value)
                            setFieldValue("kcal", +e.target.value)
                          }}
                        />

                        <label htmlFor={`kcal${idx}`}>
                          <span
                            className={cx(
                              stylesRadio.text,
                              orderFormStyles.text
                            )}
                          >
                            {item.label}
                          </span>
                          <span
                            className={cx(
                              stylesRadio.line,
                              orderFormStyles.line
                            )}
                          ></span>
                        </label>
                      </div>
                    )
                  })}
                </div>
                {/* <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <Select
                  options={kCalOptions[plan][gender][menu]}
                  isSearchable={false}
                  value={{ value: kcal, label: `${kcal} kCal` }}
                  isDisabled={kcalDisabled}
                  onChange={e => {
                    onSetKcal(e.value)
                    setFieldValue("kcal", e.value)
                  }}
                />
              </div> */}
              </div>

              <div className={orderFormStyles.price}>
                <Price2
                  price={price}
                  plan={plan}
                  program={program}
                  week={week}
                />
              </div>
              <div className={orderFormStyles.btn}>
                <Button2
                  color="secondary"
                  isBlock={true}
                  className="text-center justify-center"
                  handleClick={gotoNextStep}
                >
                  {t("home.order.ctaNext")}
                </Button2>
              </div>
            </div>

            <div
              className={cx(orderFormStyles.step2, {
                [orderFormStyles.step2active]: step === 2,
              })}
            >
              <div className={orderFormStyles.gender}>
                <h5
                  className={cx(
                    mainFormStyles.inputFieldTitle,
                    orderFormStyles.step2InputTitle
                  )}
                >
                  {t("forms.onlineOrderFormGenderLabel")}
                </h5>
                <div
                  className={cx(
                    stylesRadio.radioBtns2,
                    orderFormStyles.step2InputWrap
                  )}
                >
                  <div
                    className={cx(
                      stylesRadio.radio,
                      stylesRadio.radioBtn,
                      orderFormStyles.step2radioBtn
                    )}
                  >
                    <input
                      id="gender1"
                      type="radio"
                      name="gender"
                      value="female"
                      checked={values.gender === "female"}
                      onChange={e => {
                        onSetGender(e.target.value)
                        setFieldValue("gender", "female")
                      }}
                    />

                    <label htmlFor="gender1">
                      {t("forms.onlineOrderFormGenderFemale")}
                    </label>
                  </div>
                  <div
                    className={cx(
                      stylesRadio.radio,
                      stylesRadio.radioBtn,
                      orderFormStyles.step2radioBtn
                    )}
                  >
                    <input
                      id="gender2"
                      type="radio"
                      name="gender"
                      value="male"
                      checked={values.gender === "male"}
                      onChange={e => {
                        onSetGender(e.target.value)
                        setFieldValue("gender", "male")
                      }}
                    />
                    <label htmlFor="gender2">
                      {t("forms.onlineOrderFormGenderMale")}
                    </label>
                  </div>
                </div>
              </div>
              <div className={orderFormStyles.week}>
                <h5
                  className={cx(
                    mainFormStyles.inputFieldTitle,
                    orderFormStyles.step2InputTitle
                  )}
                >
                  {t("home.order.weekLabel")}
                </h5>
                <div
                  className={cx(
                    stylesRadio.radioBtns2,
                    orderFormStyles.step2InputWrap
                  )}
                >
                  <div
                    className={cx(
                      stylesRadio.radio,
                      stylesRadio.radioBtn,
                      orderFormStyles.step2radioBtn
                    )}
                  >
                    <input
                      id="week1"
                      type="radio"
                      name="week"
                      value="5"
                      checked={values.week === 5}
                      onChange={e => {
                        onSetWeek(+e.target.value)
                        setFieldValue("week", +e.target.value)
                      }}
                    />

                    <label htmlFor="week1">{t("home.order.week5")}</label>
                  </div>
                  <div
                    className={cx(
                      stylesRadio.radio,
                      stylesRadio.radioBtn,
                      orderFormStyles.step2radioBtn
                    )}
                  >
                    <input
                      id="week2"
                      type="radio"
                      name="week"
                      value="6"
                      checked={values.week === 6}
                      onChange={e => {
                        onSetWeek(+e.target.value)
                        setFieldValue("week", +e.target.value)
                      }}
                    />
                    <label htmlFor="week2">{t("home.order.week6")}</label>
                  </div>
                </div>
              </div>
              <div className={orderFormStyles.deliveryTime}>
                <div className={orderFormStyles.deliveryTimeStepper}>
                  <div className={orderFormStyles.deliveryTimeStepperLines}>
                    <div className={orderFormStyles.deliveryTimeStepperLine}>
                      17:00
                    </div>
                    <div className={orderFormStyles.deliveryTimeStepperLine}>
                      18:00
                    </div>
                    <div className={orderFormStyles.deliveryTimeStepperLine}>
                      19:00
                    </div>
                    <div className={orderFormStyles.deliveryTimeStepperLine}>
                      20:00
                    </div>
                    <div className={orderFormStyles.deliveryTimeStepperLine}>
                      21:00
                    </div>
                    <div className={orderFormStyles.deliveryTimeStepperLine}>
                      22:00
                    </div>
                  </div>
                  <div className={orderFormStyles.deliveryTimeStepperInput}>
                    <input
                      onChange={handleInputChange}
                      type="range"
                      min="0"
                      value={currentStepIndex}
                      max="3"
                      step="1"
                      list="tick-list"
                    />
                    <datalist id="tick-list">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </datalist>
                  </div>
                  <div className={orderFormStyles.deliveryTimeStepperResult}>
                    {getTimeRange(currentStepIndex)}
                  </div>
                </div>
                <div
                  className={cx(styles.inputField, orderFormStyles.inputField)}
                >
                  <h5
                    className={cx(
                      mainFormStyles.inputFieldTitle,
                      orderFormStyles.step2InputTitle
                    )}
                  >
                    {t("forms.onlineOrderFormOrderstartLabel")}
                  </h5>
                  <div
                    className={cx(
                      stylesRadio.radioBtns,
                      orderFormStyles.dayPicker
                    )}
                  >
                    <div>
                      <DayPickerInput
                        inputProps={{ style: dateStyle, readOnly: true }}
                        onDayChange={day =>
                          setFieldValue(
                            "date",
                            moment(dateToSystemFormat(day)).toISOString()
                          )
                        }
                        formatDate={e =>
                          lang === "cz"
                            ? formatDate(e, "DD.MM.YYYY dddd", "cs")
                            : formatDate(e, "DD.MM.YYYY dddd", "en")
                        }
                        parseDate={parseDate}
                        value={`${
                          lang === "cz"
                            ? formatDate(values.date, "DD.MM.YYYY dddd", "cs")
                            : formatDate(values.date, "DD.MM.YYYY dddd", "en")
                        }`}
                        placeholder={`${
                          lang === "cz"
                            ? formatDate(values.date, "DD.MM.YYYY dddd", "cs")
                            : formatDate(values.date, "DD.MM.YYYY dddd", "en")
                        }`}
                        dayPickerProps={{
                          locale: lang === "cz" ? "cs" : "en",
                          localeUtils: MomentLocaleUtils,
                          disabledDays: [
                            { daysOfWeek: [0, 2, 4, 6] },
                            {
                              before: moment()
                                .add(3, "days")
                                .toDate(),
                            },
                          ],
                          selectedDays: moment(values.date).toDate(),
                        }}
                        hideOnDayClick
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={orderFormStyles.contact}>
                <div className={orderFormStyles.step2contact}>
                  <div className={styles.inputField}>
                    <label
                      className={cx(
                        mainFormStyles.inputFieldTitle,
                        orderFormStyles.step2InputTitle
                      )}
                    >
                      {t("forms.onlineOrderFormNamesLabel")}
                    </label>
                    <FastField
                      component="input"
                      type="text"
                      name="name"
                      className={orderFormStyles.input}
                      placeholder={t("forms.onlineOrderFormNamesLabel")}
                    />
                    {touched.name && errors.name && (
                      <span className={styles.error}>{errors.name}</span>
                    )}
                  </div>
                  <div className={styles.inputField}>
                    <label
                      className={cx(
                        mainFormStyles.inputFieldTitle,
                        orderFormStyles.step2InputTitle
                      )}
                    >
                      {t("forms.onlineOrderFormNumberLabel")}
                    </label>
                    <FastField
                      component="input"
                      type="text"
                      name="phone"
                      className={orderFormStyles.input}
                      placeholder={t("forms.onlineOrderFormNumberLabel")}
                    />
                    {touched.phone && errors.phone && (
                      <span className={styles.error}>{errors.phone}</span>
                    )}
                  </div>
                  <div className={styles.inputField}>
                    <label
                      className={cx(
                        mainFormStyles.inputFieldTitle,
                        orderFormStyles.step2InputTitle
                      )}
                    >
                      {t("forms.onlineOrderFormEmailLabel")}
                    </label>
                    <FastField
                      component="input"
                      type="text"
                      name="email"
                      className={orderFormStyles.input}
                      placeholder={t("forms.onlineOrderFormEmailLabel")}
                    />
                    {touched.email && errors.email && (
                      <span className={styles.error}>{errors.email}</span>
                    )}
                  </div>
                  <div className={styles.inputField}>
                    <label
                      htmlFor="address"
                      className={cx(
                        mainFormStyles.inputFieldTitle,
                        orderFormStyles.step2InputTitle
                      )}
                    >
                      {t("forms.onlineOrderFormAddressLabel")}
                    </label>
                    <FastField
                      component="input"
                      type="text"
                      name="address"
                      className={orderFormStyles.input}
                      placeholder={t("forms.onlineOrderFormAddressLabel")}
                    />
                    {touched.address && errors.address && (
                      <span className={styles.error}>{errors.address}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className={orderFormStyles.btnStep2}>
                <Button2
                  color="secondary"
                  isBlock={true}
                  className="text-center justify-center"
                  disabled={
                    !values.email ||
                    !values.name ||
                    !values.address ||
                    !values.phone
                  }
                  handleClick={gotoNextStep}
                >
                  {t("home.order.ctaNext")}
                </Button2>
              </div>
            </div>

            <div
              className={cx(orderFormStyles.step3, {
                [orderFormStyles.step3active]: step === 3,
              })}
            >
              <div className={orderFormStyles.step3summary}>
                <Summary2
                  kcal={kcal}
                  plan={plan}
                  program={program}
                  week={week}
                  menu={menu}
                  price={price}
                />
              </div>
              <div className={orderFormStyles.step3form}>
                <div className={orderFormStyles.step3finalPrice}>
                  <h5>{t("forms.onlineOrderFormSummaryTotalLabel")}</h5>
                  <div className={orderFormStyles.step3finalPriceNumber}>
                    {price
                      ? price * days[program][week]
                      : 420 * days[program][week]}{" "}
                    Kč
                  </div>
                </div>
                <div className={styles.inputField}>
                  <label
                    htmlFor="promo"
                    className={cx(
                      mainFormStyles.inputFieldTitle,
                      orderFormStyles.step2InputTitle
                    )}
                  >
                    {t("forms.onlineOrderFormPromoCodeLabel")}
                  </label>
                  <FastField
                    component="input"
                    type="text"
                    name="promo"
                    className={cx(
                      orderFormStyles.input,
                      orderFormStyles.inputPromo
                    )}
                    placeholder={t("forms.onlineOrderFormPromoCodeLabel")}
                  />
                  {touched.promo && errors.promo && (
                    <span className={styles.error}>{errors.promo}</span>
                  )}
                </div>

                <div className={orderFormStyles.checkTerms}>
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

                <div className={orderFormStyles.checkTerms}>
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

                <div className={orderFormStyles.buttons}>
                  <Button2
                    name="submit"
                    color="secondary"
                    buttonType="submit"
                    isBlock={true}
                    className="text-center justify-center"
                    disabled={
                      isSubmitting ||
                      !checkTerms ||
                      !checkTerms2 ||
                      !values.email ||
                      !values.name ||
                      !values.phone ||
                      !values.address
                    }
                    handleClick={() =>
                      console.log(
                        "click submit!",
                        !!values.email,
                        errors,
                        Object.keys(errors).length > 0
                      )
                    }
                  >
                    {t("forms.onlineOrderFormCTA")}
                  </Button2>
                  <input type="hidden" name="price" value={price} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

const days = {
  "2 týdny": {
    5: 10,
    6: 12,
  },
  Měsíc: {
    5: 20,
    6: 24,
  },
  "Dva měsíce": {
    5: 40,
    6: 48,
  },
}

export const OrderForm2 = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    phone: "+420",
    name: "",
    email: "",
    promo: "",
    plan: "Zhubnout",
    program: "2 týdny",
    menu: "5chodové menu",
    week: 5,
    kcal: 1600,
    date: getStartDate(),
    deliveryTime: "17:00-19:00",
    gender: "female",
    address: "",
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
        .phone()
        .required(),
      promo: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
      name: Yup.string()
        .min(4)
        .required(),
      address: Yup.string()
        .min(9)
        .required(),
      plan: Yup.string(),
      program: Yup.string(),
      menu: Yup.string(),
    }),
  handleSubmit: async (
    {
      phone,
      promo,
      plan,
      program,
      menu,
      week,
      kcal,
      date,
      name,
      email,
      address,
      deliveryTime,
    },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const UTMS = getUTM()
      let referrer = getReferrer()

      let getPrice = document.querySelector('[name="price"]').value

      const isEn = document.location.pathname.includes("/en")
      const testovani = localStorage.getItem("PUSHTELL-homepage")

      const diet =
        plan === "Zhubnout" ? "loose" : plan === "Nabírat" ? "gain" : "keep"
      let data = {
        form_name: isEn ? "order-new-form_en" : "order-new-form",
        phone,
        promocode: promo,
        diet,
        length: days[program][week],
        mealsPerDay: menu[0],
        size: week === 6 ? "long" : "short",
        kcal,
        date,
        name,
        email,
        address,
        deliveryTime,
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

      console.log(JSON.stringify(data))
      const req = await fetch("/api/app/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      // // await setPrice("420")

      if (req.ok) {
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
      } else {
        alert("Something went wrong, please try again!")
      }
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(OrderFormLayout)
