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
import stylesRadio from '../calculator2/calc.module.css';
import { Price } from '../order-price';
import { Summary } from '../order-summary';
import styles from './form.module.css';
import option3Img from './icons/icon-2months.svg';
import option1Img from './icons/icon-demo.svg';
import option2Img from './icons/icon-month.svg';
import orderFormStyles from './order-form.module.css';

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
  "5 chodů": {
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
  "3 chody": {
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
  "2 chody": {
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
      "5 chodů": [
        { value: 1600, label: "1600 kCal" },
        { value: 1800, label: "1800 kCal" },
      ],
      "3 chody": [
        { value: 1100, label: "1100 kCal" },
        { value: 1300, label: "1300 kCal" },
      ],
      "2 chody": [{ value: 1000, label: "1000 kCal" }],
    },
    male: {
      "5 chodů": [
        { value: 1800, label: "1800 kCal" },
        { value: 2000, label: "2000 kCal" },
      ],
      "3 chody": [
        { value: 1600, label: "1600 kCal" },
        { value: 1800, label: "1800 kCal" },
      ],
      "2 chody": [{ value: 1000, label: "1000 kCal" }],
    },
  },
  Udržovat: {
    female: {
      "5 chodů": [
        { value: 1900, label: "1900 kCal" },
        { value: 2100, label: "2100 kCal" },
      ],
      "3 chody": [
        { value: 1400, label: "1400 kCal" },
        { value: 1600, label: "1600 kCal" },
      ],
      "2 chody": [{ value: 1000, label: "1000 kCal" }],
    },
    male: {
      "5 chodů": [
        { value: 2100, label: "2100 kCal" },
        { value: 2300, label: "2300 kCal" },
      ],
      "3 chody": [{ value: 1900, label: "1900 kCal" }],
      "2 chody": [{ value: 1000, label: "1000 kCal" }],
    },
  },
  Nabírat: {
    female: {
      "5 chodů": [
        { value: 2200, label: "2200 kCal" },
        { value: 2600, label: "2600 kCal" },
      ],
      "3 chody": [
        { value: 0, label: "0 kCal" },
        { value: 0, label: "0 kCal" },
      ],
      "2 chody": [{ value: 1000, label: "1000 kCal" }],
    },
    male: {
      "5 chodů": [
        { value: 2400, label: "2400 kCal" },
        { value: 2600, label: "2600 kCal" },
      ],
      "3 chody": [{ value: 0, label: "0 kCal" }],
      "2 chody": [{ value: 1000, label: "1000 kCal" }],
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

  return (
    <div className={classes} onChange={onChange}>
      {children}
      {touched && <InputFeedback error={error} />}
    </div>
  )
}

export const WrappedForm = ({ isSubmitting, values, errors, touched }) => {
  return <OrderForm />
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
  const [menu, setMenu] = useState("5 chodů")
  const [week, setWeek] = useState(5)
  const [gender, setGender] = useState("female")
  const [deliveryTime, setDeliveryTime] = useState("17:00-22:00")
  const [kcal, setKcal] = useState(1600)
  const [price, setPrice] = useState("420")
  const [kcalDisabled, setKcalDisabled] = useState(false)
  const [plan2disabled, setPlan2Disabled] = useState(false)
  const [plan3disabled, setPlan3Disabled] = useState(false)
  const [menu2xDisabled, setMenu2xDisabled] = useState(false)
  const [menu3xDisabled, setMenu3xDisabled] = useState(false)
  const [checkTerms, setCheckTerms] = useState(false)
  const [checkTerms2, setCheckTerms2] = useState(false)

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
      disabled: plan2disabled,
    },
    {
      value: "Nabírat",
      label: t("forms.onlineOrderFormGoalGain"),
      disabled: plan3disabled,
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
    setGender(value)
    setKcal(Number(kCalOptions[plan][value][menu][0].value))
    setFieldValue("kcal", Number(kCalOptions[plan][value][menu][0].value))
  }

  const onSetProgram = value => {
    setProgram(value)
    trackCustomEvent({
      category: "order",
      action: value,
      label: "HP",
    })
  }

  const onSetMenu = value => {
    setMenu(value)
    setKcal(Number(kCalOptions[plan][gender][value][0].value))
    setFieldValue("kcal", Number(kCalOptions[plan][gender][value][0].value))
    if (value === "2chodové menu") {
      setPlan2Disabled(true)
      setPlan3Disabled(true)
      setKcalDisabled(true)
    } else if (value === "3chodové menu") {
      setPlan2Disabled(false)
      setPlan3Disabled(true)
      setKcalDisabled(false)
    } else {
      setPlan2Disabled(false)
      setPlan3Disabled(false)
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

  useEffect(() => {
    console.log("calc menu", menu)
    console.log("calc program", program)
    console.log("calc plan", plan)
    console.log("calc kcal", kcal)
    const priceValue = getPrice(menu, program, plan, kcal)
    setPrice(priceValue)
    console.log("priceValue", priceValue)
  }, [menu, plan, program, week, kcal])

  const getPrice = (menu, program, plan, kcal) => {
    let price = null
    const kcalRange = energyRange(kcal)
    price = pricePreset[menu][program][kcalRange]
    return price
  }

  const dateStyle = {
    width: "100%",
    height: "40px",
    padding: "5px",
    fontSize: "18px",
    border: "1px solid rgb(204, 204, 204)",
    borderRadius: 3,
    textAlign: "center",
    readOnly: true,
  }

  return (
    <div className={orderFormStyles.orderFormBox}>
      <Form
        className={orderFormStyles.orderForm}
        name="order-contact"
        method="post"
      >
        <div>
          {/* <div className={cx(styles.inputField, orderFormStyles.inputField)}>
            <h5 className={orderFormStyles.inputFieldTitle}>Tvoje pohlaví </h5>
            <div className={stylesRadio.radioBtns2}>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <input
                  id="gender1"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={e => {
                    onSetGender(e.target.value)
                    setFieldValue("gender", "female")
                  }}
                />

                <label htmlFor="gender1">Žena</label>
              </div>

              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <input
                  id="gender2"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={e => {
                    onSetGender(e.target.value)
                    setFieldValue("gender", "male")
                  }}
                />

                <label htmlFor="gender2">Muž</label>
              </div>

            </div>
          </div> */}

          <div className={orderFormStyles.sectionBox}>
            <div className={orderFormStyles.sectionNumber}>1</div>
            <span className={orderFormStyles.sectionTitle}>
              {t("forms.onlineOrderFormTitle1")}
            </span>
          </div>
          <div className={cx(styles.inputField, orderFormStyles.inputField)}>
            <div className={stylesRadio.radioBtns2}>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <h6 className={orderFormStyles.inputFieldTitleSmall}>
                  {t("forms.onlineOrderFormGenderLabel")}
                </h6>
                <Select
                  options={[
                    {
                      value: "female",
                      label: t("forms.onlineOrderFormGenderFemale"),
                    },
                    {
                      value: "male",
                      label: t("forms.onlineOrderFormGenderMale"),
                    },
                  ]}
                  isSearchable={false}
                  value={{
                    value: values.gender,
                    label: `${
                      values.gender === "female"
                        ? t("forms.onlineOrderFormGenderFemale")
                        : t("forms.onlineOrderFormGenderMale")
                    }`,
                  }}
                  onChange={e => {
                    onSetGender(e.value)
                    setFieldValue("gender", e.value)
                  }}
                />
              </div>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <h6 className={orderFormStyles.inputFieldTitleSmall}>
                  {t("forms.onlineOrderFormGoalLabel")}
                </h6>
                <Select
                  options={goal}
                  isSearchable={false}
                  value={{
                    value: plan,
                    label:
                      plan === "Zhubnout"
                        ? t("forms.onlineOrderFormGoalLoss")
                        : plan === "Udržovat"
                        ? t("forms.onlineOrderFormGoalMaintenance")
                        : t("forms.onlineOrderFormGoalGain"),
                  }}
                  isOptionDisabled={option => option.disabled}
                  onChange={e => {
                    onSetPlan(e.value)
                    setFieldValue("plan", e.value)
                  }}
                />
              </div>
            </div>
          </div>

          <div className={cx(styles.inputField, orderFormStyles.inputField)}>
            <div className={stylesRadio.radioBtns2}>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <h6 className={orderFormStyles.inputFieldTitleSmall}>
                  {t("forms.onlineOrderFormProgramLengthLabel")}
                </h6>
                <Select
                  options={[
                    {
                      value: "2 týdny",
                      label: t("forms.onlineOrderFormProgramLengthOption1"),
                    },
                    {
                      value: "Měsíc",
                      label: t("forms.onlineOrderFormProgramLengthOption2"),
                    },
                    {
                      value: "Dva měsíce",
                      label: t("forms.onlineOrderFormProgramLengthOption3"),
                    },
                  ]}
                  isSearchable={false}
                  value={{
                    value: values.program,
                    label:
                      values.program === "2 týdny"
                        ? t("forms.onlineOrderFormProgramLengthOption1")
                        : values.program === "Měsíc"
                        ? t("forms.onlineOrderFormProgramLengthOption2")
                        : t("forms.onlineOrderFormProgramLengthOption3"),
                  }}
                  onChange={e => {
                    onSetProgram(e.value)
                    setFieldValue("program", e.value)
                  }}
                />
              </div>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <h6 className={orderFormStyles.inputFieldTitleSmall}>
                  {t("forms.onlineOrderFormMealsLabel")}{" "}
                </h6>
                <Select
                  options={[
                    {
                      value: "5 chodů",
                      label: t("forms.onlineOrderFormMealsOption1"),
                      disabled: false,
                    },
                    {
                      value: "3 chody",
                      label: t("forms.onlineOrderFormMealsOption2"),
                      disabled: menu3xDisabled,
                    },
                    {
                      value: "2 chody",
                      label: t("forms.onlineOrderFormMealsOption3"),
                      disabled: menu2xDisabled,
                    },
                  ]}
                  isSearchable={false}
                  value={{
                    value: menu,
                    label:
                      menu === "5 chodů"
                        ? t("forms.onlineOrderFormMealsOption1")
                        : menu === "3 chody"
                        ? t("forms.onlineOrderFormMealsOption2")
                        : t("forms.onlineOrderFormMealsOption3"),
                  }}
                  isOptionDisabled={option => option.disabled}
                  onChange={e => {
                    onSetMenu(e.value)
                    setFieldValue("menu", e.value)
                  }}
                />
              </div>
            </div>
          </div>

          {/* <div className={cx(styles.inputField, orderFormStyles.inputField)}>
            <h5 className={orderFormStyles.inputFieldTitle}>Tvůj cíl</h5>
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
          </div> */}
          {/* <div className={cx(styles.inputField, orderFormStyles.inputField)}>
            <h5 className={orderFormStyles.inputFieldTitle}>
              Vyber si délku programu
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
          </div> */}

          {/* <div className={cx(styles.inputField, orderFormStyles.inputField)}>
            <h5 className={orderFormStyles.inputFieldTitle}>
              Vyber si počet jídel
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
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn, {
                [stylesRadio.disabled]: menu3xDisabled,
              })}>
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
                  disabled={menu3xDisabled}
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
          </div> */}

          <div className={cx(styles.inputField, orderFormStyles.inputField)}>
            <h5 className={orderFormStyles.inputFieldTitleSmall}>
              {t("forms.onlineOrderFormWeekLengthLabel")}
            </h5>
            <div className={cx(stylesRadio.radioBtns2, stylesRadio.MobileCol)}>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
                <Select
                  options={options}
                  isSearchable={false}
                  value={{
                    value: values.week,
                    label:
                      values.week == 5
                        ? t("forms.onlineOrderFormWeekLengthOption1")
                        : t("forms.onlineOrderFormWeekLengthOption2"),
                  }}
                  onChange={e => {
                    onSetWeek(e.value)
                    setFieldValue("week", e.value)
                  }}
                />
              </div>
              <div className={cx(stylesRadio.radio, stylesRadio.radioBtn)}>
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
              </div>
              {/* <div
                className={cx(stylesRadio.radio, stylesRadio.radioBtn)}
              >
                <input
                  id="week1"
                  type="radio"
                  name="week"
                  value={5}
                  checked={values.week === 5}
                  onChange={e => {
                    onSetWeek(e.target.value)
                    setFieldValue("week", 5)
                  }}
                  disabled={menu2xDisabled}
                />
                <label htmlFor="week1">5 dní v týdnu</label>
              </div>
              <div
                className={cx(stylesRadio.radio, stylesRadio.radioBtn)}
              >
                <input
                  id="week2"
                  type="radio"
                  name="week"
                  value={6}
                  checked={values.week === 6}
                  onChange={e => {
                    onSetWeek(e.target.value)
                    setFieldValue("week", 6)
                  }}
                  disabled={menu2xDisabled}
                />
                <label htmlFor="week2">6 dní v týdnu</label>
              </div> */}
            </div>
          </div>

          <div className={cx(styles.inputField, orderFormStyles.inputField)}>
            <h5 className={orderFormStyles.inputFieldTitleSmall}>
              {t("forms.onlineOrderFormOrderstartLabel")}
            </h5>
            <div className={cx(stylesRadio.radioBtns, stylesRadio.MobileCol)}>
              <div className={styles.inputField}>
                <DayPickerInput
                  inputProps={{ style: dateStyle, readOnly: true }}
                  style={{ width: "100%" }}
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

          <Price price={price} plan={plan} program={program} week={week} />
        </div>

        <div className={orderFormStyles.orderFormWrap}>
          <div className={orderFormStyles.sectionBox}>
            <div className={orderFormStyles.sectionNumber}>2</div>
            <span className={orderFormStyles.sectionTitle}>
              {t("forms.onlineOrderFormTitle2")}{" "}
            </span>
          </div>
          <div className={styles.inputField}>
            <label
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
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
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
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
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
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
              htmlFor="promo"
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
            >
              {t("forms.onlineOrderFormPromoCodeLabel")}
            </label>
            <FastField
              component="input"
              type="text"
              name="promo"
              className={orderFormStyles.input}
              placeholder={t("forms.onlineOrderFormPromoCodeLabel")}
            />
            {touched.promo && errors.promo && (
              <span className={styles.error}>{errors.promo}</span>
            )}
          </div>
          <div className={orderFormStyles.sectionBox}>
            <div className={orderFormStyles.sectionNumber}>3</div>
            <span className={orderFormStyles.sectionTitle}>
              {t("forms.onlineOrderFormTitle3")}
            </span>
          </div>
          <div className={styles.inputField}>
            <label
              htmlFor="address"
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
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
          <div className={styles.inputField}>
            <label
              htmlFor="address"
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
            >
              {t("forms.onlineOrderFormDeliveryTimeLabel")}
            </label>
            <Select
              options={[
                { value: "17:00-22:00", label: "17:00-22:00" },
                { value: "17:00-21:00", label: "17:00-21:00" },
                { value: "17:00-20:00", label: "17:00-20:00" },
                { value: "17:00-19:00", label: "17:00-19:00" },
                { value: "18:00-22:00", label: "18:00-22:00" },
                { value: "18:00-21:00", label: "18:00-21:00" },
                { value: "18:00-20:00", label: "18:00-20:00" },
                { value: "19:00-22:00", label: "19:00-22:00" },
                { value: "19:00-21:00", label: "19:00-21:00" },
                { value: "20:00-22:00", label: "20:00-22:00" },
              ]}
              isSearchable={false}
              value={{ value: deliveryTime, label: deliveryTime }}
              menuPlacement="top"
              onChange={e => {
                setDeliveryTime(e.value)
                setFieldValue("deliveryTime", e.value)
              }}
            />
          </div>
        </div>

        <div className={orderFormStyles.orderFormWrap}>
          {/* <div className={orderFormStyles.sectionBox}>
            <div className={orderFormStyles.sectionNumber}>
              2
            </div>
            <span className={orderFormStyles.sectionTitle}>
              Osobní informace
            </span>
          </div>
          <div className={styles.inputField}>
            <label className={cx(styles.label, orderFormStyles.inputFieldLabel)}>
              Jméno a příjmení*
            </label>
            <FastField
              component="input"
              type="text"
              name="name"
              className={orderFormStyles.input}
              placeholder="Jméno a příjmení*"
            />
            {touched.name && errors.name && (
              <span className={styles.error}>{errors.name}</span>
            )}
          </div>
          <div className={styles.inputField}>
            <label className={cx(styles.label, orderFormStyles.inputFieldLabel)}>
              Telefon*
            </label>
            <FastField
              component="input"
              type="text"
              name="phone"
              className={orderFormStyles.input}
              placeholder="Telefon*"
            />
            {touched.phone && errors.phone && (
              <span className={styles.error}>{errors.phone}</span>
            )}
          </div>
          <div className={styles.inputField}>
            <label className={cx(styles.label, orderFormStyles.inputFieldLabel)}>
              Email*
            </label>
            <FastField
              component="input"
              type="text"
              name="email"
              className={orderFormStyles.input}
              placeholder="Email*"
            />
            {touched.email && errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>
          <div className={styles.inputField}>
            <label
              htmlFor="promo"
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
            >
              Promo kód
            </label>
            <FastField
              component="input"
              type="text"
              name="promo"
              className={orderFormStyles.input}
              placeholder="Promo kód"
            />
            {touched.promo && errors.promo && (
              <span className={styles.error}>{errors.promo}</span>
            )}
          </div> */}
          {/* <div className={orderFormStyles.sectionBox}>
            <div className={orderFormStyles.sectionNumber}>
              3
            </div>
            <span className={orderFormStyles.sectionTitle}>
              Doručovací údaje
            </span>
          </div>
          <div className={styles.inputField}>
            <label
              htmlFor="address"
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
            >
              Adresa*
            </label>
            <FastField
              component="input"
              type="text"
              name="address"
              className={orderFormStyles.input}
              placeholder="Adresa*"
            />
            {touched.address && errors.address && (
              <span className={styles.error}>{errors.address}</span>
            )}
          </div> */}
          <div className={orderFormStyles.sectionBox}>
            <div className={orderFormStyles.sectionNumber}>4</div>
            <span className={orderFormStyles.sectionTitle}>
              {t("forms.onlineOrderFormTitle4")}
            </span>
          </div>
          <Summary
            kcal={kcal}
            plan={plan}
            program={program}
            week={week}
            menu={menu}
            price={price}
          />
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
            <Button
              name="submit"
              type="primary"
              size="lg"
              buttonType="submit"
              disabled={isSubmitting || !checkTerms || !checkTerms2}
              className={orderFormStyles.submitButton}
            >
              {t("forms.onlineOrderFormCTA")}
            </Button>
            <input type="hidden" name="price" value={price} />
          </div>
          {/* <p className={orderFormStyles.orderFormInfo}>
            Cena měsíčního programu bude upřesněna dle stanoveného příjmu na
            míru.
          </p> */}
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

export const OrderForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    phone: "+420",
    name: "",
    email: "",
    promo: "",
    plan: "Zhubnout",
    program: "2 týdny",
    menu: "5 chodů",
    week: 5,
    kcal: 1600,
    date: getStartDate(),
    deliveryTime: "17:00-22:00",
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
        form_name: isEn ? "order_en" : "order",
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

      // console.log(JSON.stringify(data))
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
