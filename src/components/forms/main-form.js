// import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React from 'react';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

import { Button } from '../button';
import { Price } from '../price';
import { RadioButton, RadioButtonGroup } from './custom-radios';
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

// import Select from 'react-select';
const DisplayFormikState = ({ isSubmitting, values, errors, touched }) => (
  <div style={{ margin: "1rem 0", background: "#f6f8fa", padding: ".5rem" }}>
    <strong>Injected Formik props (the form's state)</strong>
    <div style={{}}>
      <code>touched:</code> {JSON.stringify(touched, null, 2)}
    </div>
    <div>
      <code>errors:</code> {JSON.stringify(errors, null, 2)}
    </div>
    <div>
      <code>values:</code> {JSON.stringify(values, null, 2)}
    </div>
    <div>
      <code>isSubmitting:</code> {JSON.stringify(isSubmitting, null, 2)}
    </div>
  </div>
)

export const MainFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  price,
  amount,
}) => {
  return (
    <div className={mainFormStyles.mainFormBox}>
      <h4 className={mainFormStyles.mainFormTitle}>Vyber si program</h4>
      <Form
        className={mainFormStyles.mainForm}
        name="main-contact"
        method="post"
      >
        <div className={styles.inputField}>
          <RadioButtonGroup
            id="radioGroup"
            value={values.plan}
            error={errors.plan}
            touched={touched.plan}
          >
            <FastField
              component={RadioButton}
              name="plan"
              id="radioOption1"
              label="Demo"
              img={option1Img}
            />
            <FastField
              component={RadioButton}
              name="plan"
              id="radioOption2"
              label="1 měsic"
              img={option2Img}
            />
            <FastField
              component={RadioButton}
              name="plan"
              id="radioOption3"
              label="2 měsice"
              img={option3Img}
            />
          </RadioButtonGroup>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="days" className={styles.label}>
            Počet dní v týdnu
          </label>
          <FastField
            as="select"
            name="days"
            value={values.days}
            className={styles.select}
          >
            <option value="">Vyber si počet dní</option>
            <option value="5">5 dní (Po - Pá)</option>
            <option value="6">6 dní (Po - So)</option>
          </FastField>
          {touched.days && errors.days && (
            <span className={styles.error}>{errors.days}</span>
          )}
        </div>
        <div className={styles.inputField}>
          <label className={styles.label}>Telefon</label>
          {/* <FastField name="phone">
            {({ field }) => (
              <MaskedInput
                {...field}
                mask={[
                  "+",
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                id="phone"
                placeholder="Enter your phone number"
                type="text"
                className={styles.input}
              />
            )}
          </FastField> */}
          <FastField
            component="input"
            type="tel"
            name="phone"
            className={styles.input}
          />
          {touched.phone && errors.phone && (
            <span className={styles.error}>{errors.phone}</span>
          )}
        </div>
        <div className={styles.inputField}>
          <label htmlFor="promo" className={styles.label}>
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
          <Price price={price} amount={amount} />
        </div>
        {/* {values.success && (
          <div className={styles.success}>
            <h4>Successfully sent!</h4>
          </div>
        )} */}
        <div className={mainFormStyles.buttons}>
          <Button
            name="submit"
            type="primary"
            buttonType="submit"
            disabled={isSubmitting}
            className={mainFormStyles.submitButton}
          >
            Nezávazně objednat
          </Button>
        </div>

        {/* <DisplayFormikState
          isSubmitting={isSubmitting}
          values={values}
          errors={errors}
          touched={touched}
        /> */}
      </Form>
    </div>
  )
}

export const MainForm = withFormik({
  mapPropsToValues: amount => ({
    phone: "+420",
    promo: "",
    plan: "",
    days: "",
    amount_kal: `${amount.amount}` || "0",
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
      plan: Yup.string().required("Vyberte si program"),
      days: Yup.string().required("Vyberte si počet dní"),
    }),
  handleSubmit: async (
    { phone, promo, plan, days, amount_kal },
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

      let data = await function() {
        return {
          form_name: "main-contact",
          phone,
          promo,
          plan,
          days,
          amount_kal,
          utm_source: UTM_SOURCE,
          utm_medium: UTM_MEDIUM,
          utm_campaign: UTM_CAMPAIGN,
          utm_term: UTM_TERM,
          utm_content: UTM_CONTENT,
        }
      }

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
