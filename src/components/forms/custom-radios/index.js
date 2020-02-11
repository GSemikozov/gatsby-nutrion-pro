import cx from 'classnames';
import React from 'react';

import styles from './custom-radio.module.css';

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className={cx("input-feedback")}>{error}</div> : null

// Radio input
export const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  img,
  className,
  ...props
}) => {
  return (
    <div className={styles.customRadio}>
      <input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <label htmlFor={id}>
        <img src={img} className={styles.optionImg} alt="icon" />
        <h5 className={styles.optionTitle}>{label}</h5>
      </label>
    </div>
  )
}

// Radio group
export const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  className,
  children,
}) => {
  const classes = cx(
    styles.chooseOptions,
    {
      success: value || (!error && touched),
      error: !!error && touched,
    },
    className
  )

  return (
    <div className={classes}>
      {children}
      {touched && <InputFeedback error={error} />}
    </div>
  )
}
