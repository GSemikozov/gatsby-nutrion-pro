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
            value={values.program}
            error={errors.program}
            touched={touched.program}
          >
            <FastField
              component={RadioButton}
              name="program"
              id="radioOption1"
              label="Demo"
              img={option1Img}
            />
            <FastField
              component={RadioButton}
              name="program"
              id="radioOption2"
              label="1 měsic"
              img={option2Img}
            />
            <FastField
              component={RadioButton}
              name="program"
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
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="1">4</option>
            <option value="2">5</option>
            <option value="3">6</option>
            <option value="1">7</option>
          </FastField>
          {touched.days && errors.days && (
            <span className={styles.error}>{errors.days}</span>
          )}
        </div>
        <div className={styles.inputField}>
          <label className={styles.label}>Telefon</label>
          <FastField name="phone">
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
          </FastField>
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
        <Price price={price} amount={amount} />
        {values.success && (
          <div className={styles.success}>
            <h4>Successfully sent!</h4>
          </div>
        )}
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
  mapPropsToValues: () => ({
    phone: "+420",
    promo: "",
    program: "",
    days: "",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      phone: Yup.string()
        .min(8)
        .required("Phone field is required"),
      promo: Yup.string(),
      program: Yup.string().required("Program field is required"),
      days: Yup.string().required("You need to choose days"),
    }),
  handleSubmit: async (
    { phone, promo, program, days },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const encode = data => {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&")
      }
      await fetch("/api/application/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "main-contact",
          phone,
          promo,
          program,
          days,
        }),
      })
      await setSubmitting(false)
      await setFieldValue("success", true)
      setTimeout(() => {
        resetForm()
        window.location.href = "/thank-you"
      }, 2000)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(MainFormLayout)
