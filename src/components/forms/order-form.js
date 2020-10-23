// import cx from 'classnames';
import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import moment from 'moment'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

import { Button } from '../button';
import stylesRadio from '../calculator2/calc.module.css';
import { Price } from '../order-price';
import { Summary } from '../order-summary';
import styles from './form.module.css';
import option3Img from './icons/icon-2months.svg';
import option1Img from './icons/icon-demo.svg';
import option2Img from './icons/icon-month.svg';
import orderFormStyles from './order-form.module.css';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/cs'


const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function () {
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
  let initial = moment.utc().add(3, 'days')
  if ([2, 5, 7].indexOf(moment.utc().isoWeekday()) !== -1) {
    initial =
      moment
        .utc()
        .add(3, 'days')
        .hours(0)
        .minutes(0)
        .seconds(0)
        .milliseconds(0)
        .toISOString()
  } else if ([1, 4, 6].indexOf(moment.utc().isoWeekday()) !== -1) {
    initial =
      moment
        .utc()
        .add(4, 'days')
        .hours(0)
        .minutes(0)
        .seconds(0)
        .milliseconds(0)
        .toISOString()
  } else if ([3].indexOf(moment.utc().isoWeekday()) !== -1) {
    initial =
      moment
        .utc()
        .add(5, 'days')
        .hours(0)
        .minutes(0)
        .seconds(0)
        .milliseconds(0)
        .toISOString()
  }

  return initial
}

const options = [
  { value: 5, label: '5 dní v týdnu' },
  { value: 6, label: '6 dní v týdnu' },
]


const pricePreset = {
  "5 chodů": {
    "2 týdny": {
      1400: 440,
      1600: 460,
      1800: 480,
      2400: 500,
      3000: 520,
      3400: 540,
    },
    "Měsíc": {
      1400: 420,
      1600: 440,
      1800: 460,
      2400: 480,
      3000: 500,
      3400: 520,
    },
    "Dva měsíce": {
      1400: 395,
      1600: 415,
      1800: 435,
      2400: 455,
      3000: 475,
      3400: 495,
    },
  },
  "3 chody": {
    "2 týdny": {
      1400: 360,
      1600: 370,
      1800: 380,
      2400: 390,
      3000: 400,
      3400: 410,
    },
    "Měsíc": {
      1400: 350,
      1600: 360,
      1800: 370,
      2400: 380,
      3000: 390,
      3400: 400,
    },
    "Dva měsíce": {
      1400: 330,
      1600: 340,
      1800: 350,
      2400: 360,
      3000: 370,
      3400: 380,
    },
  },
  "2 chody": {
    "2 týdny": {
      1400: 280,
      1600: 280,
      1800: 280,
      2400: 280,
      3000: 280,
      3400: 280,
    },
    "Měsíc": {
      1400: 270,
      1600: 270,
      1800: 270,
      2400: 270,
      3000: 270,
      3400: 270,
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
  "Zhubnout": {
    female: {
      "5 chodů": [
        { value: 1600, label: '1600 kCal' },
        { value: 1800, label: '1800 kCal' },
      ],
      "3 chody": [
        { value: 1100, label: '1100 kCal' },
        { value: 1300, label: '1300 kCal' },
      ],
      "2 chody": [
        { value: 1000, label: '1000 kCal' },
      ],
    },
    male: {
      "5 chodů": [
        { value: 1800, label: '1800 kCal' },
        { value: 2000, label: '2000 kCal' },
      ],
      "3 chody": [
        { value: 1600, label: '1600 kCal' },
        { value: 1800, label: '1800 kCal' },
      ],
      "2 chody": [
        { value: 1000, label: '1000 kCal' },
      ],
    },
  },
  "Udržovat": {
    female: {
      "5 chodů": [
        { value: 1900, label: '1900 kCal' },
        { value: 2100, label: '2100 kCal' },
      ],
      "3 chody": [
        { value: 1400, label: '1400 kCal' },
        { value: 1600, label: '1600 kCal' },
      ],
      "2 chody": [
        { value: 1000, label: '1000 kCal' },
      ],
    },
    male: {
      "5 chodů": [
        { value: 2100, label: '2100 kCal' },
        { value: 2300, label: '2300 kCal' },
      ],
      "3 chody": [
        { value: 1900, label: '1900 kCal' },
      ],
      "2 chody": [
        { value: 1000, label: '1000 kCal' },
      ],
    },
  },
  "Nabírat": {
    female: {
      "5 chodů": [
        { value: 2200, label: '2200 kCal' },
        { value: 2600, label: '2600 kCal' },
      ],
      "3 chody": [
        { value: 0, label: '0 kCal' },
        { value: 0, label: '0 kCal' },
      ],
      "2 chody": [
        { value: 1000, label: '1000 kCal' },
      ],
    },
    male: {
      "5 chodů": [
        { value: 2400, label: '2400 kCal' },
        { value: 2600, label: '2600 kCal' },
      ],
      "3 chody": [
        { value: 0, label: '0 kCal' },
      ],
      "2 chody": [
        { value: 1000, label: '1000 kCal' },
      ],
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

  const goal = [
    { value: 'Zhubnout', label: 'Zhubnout', disabled: false },
    { value: 'Udržovat', label: 'Udržovat', disabled: plan2disabled },
    { value: 'Nabírat', label: 'Nabírat', disabled: plan3disabled },
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
    const priceValue = getPrice(menu, program, plan, kcal)
    setPrice(priceValue)
  }, [menu, plan, program, week, kcal])

  const getPrice = (menu, program, plan, kcal) => {
    let price = null
    const kcalRange = energyRange(kcal)
    price = pricePreset[menu][program][kcalRange]
    return price
  }

  const dateStyle = {
    width: '100%',
    height: '40px',
    padding: '5px',
    fontSize: '18px',
    border: '1px solid rgb(204, 204, 204)',
    borderRadius: 3,
    textAlign: 'center',
    readOnly: true,
  }

  return (
    <div className={orderFormStyles.orderFormBox}>
      <Form
        className={orderFormStyles.orderForm}
        name="main-contact"
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
            <div className={orderFormStyles.sectionNumber}>
              1
            </div>
            <span className={orderFormStyles.sectionTitle}>
              Volba programu
            </span>
          </div>
          <div className={cx(styles.inputField, orderFormStyles.inputField)}>
          <div className={stylesRadio.radioBtns2}>
            <div
              className={cx(stylesRadio.radio, stylesRadio.radioBtn)}
            >
              <h6 className={orderFormStyles.inputFieldTitleSmall}>Tvoje pohlaví</h6>
              <Select
                options={[
                  { value: 'female', label: 'Žena' },
                  { value: 'male', label: 'Muž' },
                ]}
                isSearchable={false}
                value={{ value: values.gender, label: `${values.gender === 'female' ? 'Žena' : 'Muž'}` }}
                onChange={e => {
                  onSetGender(e.value)
                  setFieldValue("gender", e.value)
                }}
              />
            </div>
            <div
              className={cx(stylesRadio.radio, stylesRadio.radioBtn)}
            >
              <h6 className={orderFormStyles.inputFieldTitleSmall}>Tvůj cíl</h6>
              <Select
                options={goal}
                isSearchable={false}
                value={{ value: plan, label: plan }}
                isOptionDisabled={(option) => option.disabled}
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
            <div
              className={cx(stylesRadio.radio, stylesRadio.radioBtn)}
            >
              <h6 className={orderFormStyles.inputFieldTitleSmall}>Délka programu</h6>
              <Select
                options={[
                  { value: '2 týdny', label: '2 týdny' },
                  { value: 'Měsíc', label: 'Měsíc' },
                  { value: 'Dva měsíce', label: 'Dva měsíce' },
                ]}
                isSearchable={false}
                value={{ value: values.program, label: values.program }}
                onChange={e => {
                  onSetProgram(e.value)
                  setFieldValue("program", e.value)
                }}
              />
            </div>
            <div
              className={cx(stylesRadio.radio, stylesRadio.radioBtn)}
            >
              <h6 className={orderFormStyles.inputFieldTitleSmall}>Počet jídel </h6>
              <Select
                options={[
                  { value: '5 chodů', label: '5 chodů', disabled: false },
                  { value: '3 chody', label: '3 chody', disabled: menu3xDisabled },
                  { value: '2 chody', label: '2 chody', disabled: menu2xDisabled },
                ]}
                isSearchable={false}
                value={{ value: menu, label: menu }}
                isOptionDisabled={(option) => option.disabled}
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
              Délka týdne a kCal
            </h5>
            <div className={cx(stylesRadio.radioBtns2, stylesRadio.MobileCol)}>
              <div
                className={cx(stylesRadio.radio, stylesRadio.radioBtn)}
              >
                <Select
                  options={options}
                  isSearchable={false}
                  value={{ value: values.week, label: `${values.week} dní v týdnu` }}
                  onChange={e => {
                    onSetWeek(e.value)
                    setFieldValue("week", e.value)
                  }}
                />
              </div>
              <div
                className={cx(stylesRadio.radio, stylesRadio.radioBtn)}
              >
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
              Začátek objednávky
            </h5>
            <div className={cx(stylesRadio.radioBtns, stylesRadio.MobileCol)}>
              <div className={styles.inputField}>
                <DayPickerInput
                  inputProps={{ style: dateStyle, readOnly: true }}
                  style={{ width: '100%' }}
                  onDayChange={day => setFieldValue("date", moment(dateToSystemFormat(day)).toISOString())}
                  formatDate={e => formatDate(e, 'DD.MM.YYYY dddd', 'cs')}
                  parseDate={parseDate}
                  value={`${formatDate(values.date, 'DD.MM.YYYY dddd', 'cs')}`}
                  placeholder={`${formatDate(values.date, 'DD.MM.YYYY dddd', 'cs')}`}
                  dayPickerProps={{
                    locale: 'cs',
                    localeUtils: MomentLocaleUtils,
                    disabledDays: [
                      { daysOfWeek: [0, 2, 4, 6] },
                      {
                        before: moment().add(3, 'days').toDate(),
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
          </div>
          <div className={orderFormStyles.sectionBox}>
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
          </div>
          <div className={styles.inputField}>
            <label
              htmlFor="address"
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
            >
              Preferovaný čas doručení
            </label>
            <Select
              options={[
                { value: '17:00-22:00', label: '17:00-22:00' },
                { value: '17:00-21:00', label: '17:00-21:00' },
                { value: '17:00-20:00', label: '17:00-20:00' },
                { value: '17:00-19:00', label: '17:00-19:00' },
                { value: '18:00-22:00', label: '18:00-22:00' },
                { value: '18:00-21:00', label: '18:00-21:00' },
                { value: '18:00-20:00', label: '18:00-20:00' },
                { value: '19:00-22:00', label: '19:00-22:00' },
                { value: '19:00-21:00', label: '19:00-21:00' },
                { value: '20:00-22:00', label: '20:00-22:00' },
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
            <div className={orderFormStyles.sectionNumber}>
              4
            </div>
            <span className={orderFormStyles.sectionTitle}>
              Shrnutí objednávky
            </span>
          </div>
          <Summary kcal={kcal} plan={plan} program={program} week={week} menu={menu} price={price} />
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
            <label htmlFor="checkTerms">Měl/a jsem možnost přečíst a souhlasím s <a href="/terms" target="_blank"><b>obchodními podmínkámi.</b></a></label>
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
            <label htmlFor="checkTerms2">Souhlasím se zpracováním osobních údajů.</label>
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
              Objednat
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
  "Měsíc": {
    5: 20,
    6: 24,
  },
  "Dva měsíce": {
    5: 40,
    6: 48,
  }
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
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      phone: Yup.string()
        .min(9)
        .phone()
        .required(),
      promo: Yup.string(),
      email: Yup.string().email().required(),
      name: Yup.string().min(4).required(),
      address: Yup.string().min(9).required(),
      plan: Yup.string(),
      program: Yup.string(),
      menu: Yup.string(),
    }),
  handleSubmit: async (
    { phone, promo, plan, program, menu, week, kcal, date, name, email, address, deliveryTime },
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

      const diet = plan === "Zhubnout" ? "loose" : plan === "Nabírat" ? "gain" : "keep"
      let data = {
        form_name: "order",
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
        utm_source: UTM_SOURCE,
        utm_medium: UTM_MEDIUM,
        utm_campaign: UTM_CAMPAIGN,
        utm_term: UTM_TERM,
        utm_content: UTM_CONTENT,
        referrer: referrer,
        roistat: roistat_visit,
      }

      // await console.log(JSON.stringify(data))

     const req =  await fetch("/api/app/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      // await setPrice("420")

      if (req.ok) {
        await setSubmitting(false)
        await setFieldValue("success", true)
        setTimeout(() => {
          resetForm()
          document.querySelector('[name="price"]').value = 420
          document.querySelector("#price").textContent = 420
          window.location.href = "/dekovacka-testdrive"
          window.dataLayer.push({
            event: "ga.pageview",
            pageURL: "/dekovacka-testdrive",
            pageType: "Purchase",
          })
        }, 2000)
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
