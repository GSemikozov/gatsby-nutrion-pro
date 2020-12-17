import 'react-day-picker/lib/style.css';

import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import * as Yup from 'yup';

import { Button } from '../button';
import stylesRadio from '../calculator2/calc.module.css';
import { Price } from '../voucher-price';
import styles from './form.module.css';
import orderFormStyles from './voucher-form.module.css';

const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test("phone", "Telefonní číslo musí obsahovat 9 znaků", value =>
    rePhoneNumber.test(value)
  )
})

export const WrappedForm = () => {
  return <VoucherForm />
}

const OrderFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const [program, setProgram] = useState("20 dní")
  const [menu, setMenu] = useState("5 chodů")

  const [price, setPrice] = useState("420")
  const [menu2xDisabled] = useState(false)
  const [menu3xDisabled] = useState(false)
  const [checkTerms, setCheckTerms] = useState(false)
  const [checkTerms2, setCheckTerms2] = useState(false)

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
  }

  useEffect(() => {
    const priceValue = getPrice(menu, program)
    setPrice(priceValue)
  }, [menu, program])

  const getPrice = (menu, program) => {
    const price = {
      "2 chody": {
        "10 dní": 2500,
        "20 dní": 4500,
      },
      "3 chody": {
        "10 dní": 3500,
        "20 dní": 6000,
      },
      "5 chodů": {
        "10 dní": 4500,
        "20 dní": 8000,
      },
    }
    return price[menu][program]
  }

  return (
    <div className={orderFormStyles.orderFormBox}>
      <Form
        className={orderFormStyles.orderForm}
        name="voucher-contact"
        method="post"
      >
        <div>
          <div className={cx(stylesRadio.radioBtns, stylesRadio.MobileCol)}>
            <div className={styles.inputField}>
              <h6 className={orderFormStyles.inputFieldTitleSmall}>
                Délka programu
              </h6>
              <Select
                options={[
                  { value: "10 dní", label: "10 dní" },
                  { value: "20 dní", label: "20 dní" },
                  // { value: 'Dva 20 dníe', label: 'Dva 20 dníe' },
                ]}
                isSearchable={false}
                value={{ value: values.program, label: values.program }}
                onChange={e => {
                  onSetProgram(e.value)
                  setFieldValue("program", e.value)
                }}
              />
            </div>
          </div>

          <div className={cx(stylesRadio.radioBtns, stylesRadio.MobileCol)}>
            <div className={styles.inputField}>
              <h6 className={orderFormStyles.inputFieldTitleSmall}>
                Počet jídel{" "}
              </h6>
              <Select
                options={[
                  { value: "5 chodů", label: "5 chodů", disabled: false },
                  {
                    value: "3 chody",
                    label: "3 chody",
                    disabled: menu3xDisabled,
                  },
                  {
                    value: "2 chody",
                    label: "2 chody",
                    disabled: menu2xDisabled,
                  },
                ]}
                isSearchable={false}
                value={{ value: menu, label: menu }}
                isOptionDisabled={option => option.disabled}
                onChange={e => {
                  onSetMenu(e.value)
                  setFieldValue("menu", e.value)
                }}
              />
            </div>
          </div>

          <Price price={price} plan={null} program={program} week={5} />
        </div>

        <div className={orderFormStyles.orderFormWrap}>
          <div className={styles.inputField}>
            <label
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
            >
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
            <label
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
            >
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
            <label
              className={cx(styles.label, orderFormStyles.inputFieldLabel)}
            >
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
              Měl/a jsem možnost přečíst a souhlasím s{" "}
              <a href="/terms" target="_blank">
                <b>obchodními podmínkámi.</b>
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
              Souhlasím se zpracováním osobních údajů.
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
              Objednat
            </Button>
            <input type="hidden" name="price" value={price} />
          </div>
        </div>
      </Form>
    </div>
  )
}

const days = {
  "10 dní": 10,
  "20 dní": 20,
}

export const VoucherForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    phone: "+420",
    name: "",
    email: "",
    program: "20 dní",
    menu: "5 chodů",
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
      email: Yup.string()
        .email()
        .required(),
      name: Yup.string()
        .min(4)
        .required(),
      program: Yup.string(),
      menu: Yup.string(),
    }),
  handleSubmit: async (
    { phone, program, menu, name, email },
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
        form_name: isEn ? "voucher_en" : "voucher",
        phone,
        days: days[program],
        mealsPerDay: Number(menu[0]),
        name,
        email,
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

      const req = await fetch("/api/voucher", {
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
